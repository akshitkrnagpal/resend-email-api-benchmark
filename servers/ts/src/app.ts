// Runtime-neutral request handling shared by the Node server (server.ts, node:http) and the Bun
// server (server-bun.ts, Bun.serve). Each server adapts its own request/response types to these.
import { createHash, randomUUID } from 'node:crypto';
import type { Deps, EmailRow } from './deps-common.ts';
import { buildEml, isObject, MAX_BYTES, normalizeEmail, ValidationError } from './email.ts';
import type { NormalizedEmail } from './email.ts';

export interface AppRequest {
  method: string;
  path: string;
  header(name: string): string | undefined;
  // Resolves to null when the body is larger than `limit`.
  readBody(limit: number): Promise<Buffer | null>;
}

export interface AppResponse {
  status: number;
  contentType: string;
  body: string;
}

class HttpError extends Error {
  readonly status: number;
  readonly name: string;
  constructor(status: number, name: string, message: string) {
    super(message);
    this.status = status;
    this.name = name;
  }
}

const json = (status: number, body: string): AppResponse => ({ status, contentType: 'application/json', body });
const errorResponse = (status: number, name: string, message: string): AppResponse =>
  json(status, JSON.stringify({ statusCode: status, name, message }));

function toRow(id: string, apiKey: string, e: NormalizedEmail, s3Key: string): EmailRow {
  return {
    id,
    apiKey,
    from: e.from,
    to: e.to.join(', '),
    subject: e.subject,
    text: e.text,
    htmlSize: Buffer.byteLength(e.html, 'utf8'),
    attachmentCount: e.attachments.length,
    attachmentBytes: e.attachments.reduce((n, a) => n + a.content.length, 0),
    s3Key,
  };
}

function parseJson(body: Buffer): unknown {
  try {
    return JSON.parse(body.toString('utf8'));
  } catch {
    throw new HttpError(400, 'invalid_json', 'Request body is not valid JSON');
  }
}

function validate<T>(fn: () => T): T {
  try {
    return fn();
  } catch (e) {
    if (e instanceof ValidationError) throw new HttpError(422, 'validation_error', e.message);
    throw e;
  }
}

// Wraps dependency calls so failures become 500 application_error.
async function withDeps<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch {
    throw new HttpError(500, 'application_error', 'Internal server error');
  }
}

export function createApp(deps: Deps, apiKeys: Set<string>): (req: AppRequest) => Promise<AppResponse> {
  async function sendOne(apiKey: string, body: Buffer, idemKey: string | undefined): Promise<string> {
    let hash = '';
    const redisKey = `idem:${apiKey}:${idemKey}`;
    if (idemKey) {
      hash = createHash('sha256').update(body).digest('hex');
      const stored = await withDeps(() => deps.getIdempotency(redisKey));
      if (stored !== null) {
        const nl = stored.indexOf('\n');
        if (stored.slice(0, nl) === hash) return stored.slice(nl + 1);
        throw new HttpError(409, 'invalid_idempotent_request', 'Same idempotency key used with a different request payload');
      }
    }

    const parsed = parseJson(body);
    const email = validate(() => normalizeEmail(parsed));
    const id = randomUUID();
    const s3Key = `emails/${id}.eml`;
    const eml = buildEml(email);
    const response = JSON.stringify({ id });

    await withDeps(async () => {
      await deps.putObject(s3Key, eml);
      await deps.insertEmails([toRow(id, apiKey, email, s3Key)]);
      await deps.enqueue([id]);
      if (idemKey) await deps.setIdempotency(redisKey, `${hash}\n${response}`);
    });
    return response;
  }

  async function sendBatch(apiKey: string, body: Buffer): Promise<string> {
    const parsed = parseJson(body);
    const emails = validate(() => {
      if (!Array.isArray(parsed)) throw new ValidationError('Request body must be a JSON array');
      if (parsed.length < 1 || parsed.length > 100) {
        throw new ValidationError('Batch must contain between 1 and 100 emails');
      }
      return parsed.map((item: unknown, i: number) => {
        try {
          if (isObject(item) && item.attachments !== undefined && item.attachments !== null) {
            throw new ValidationError('`attachments` are not supported in batch emails');
          }
          return normalizeEmail(item);
        } catch (e) {
          if (e instanceof ValidationError) throw new ValidationError(`emails[${i}]: ${e.message}`);
          throw e;
        }
      });
    });

    const ids = emails.map(() => randomUUID());
    const keys = ids.map((id) => `emails/${id}.eml`);
    await withDeps(async () => {
      await Promise.all(emails.map((e, i) => deps.putObject(keys[i], buildEml(e))));
      await deps.insertEmails(emails.map((e, i) => toRow(ids[i], apiKey, e, keys[i])));
      await deps.enqueue(ids);
    });
    return JSON.stringify({ data: ids.map((id) => ({ id })) });
  }

  async function handle(req: AppRequest): Promise<AppResponse> {
    if (req.method === 'GET' && req.path === '/health') return { status: 200, contentType: 'text/plain', body: 'ok' };
    const isSingle = req.method === 'POST' && req.path === '/emails';
    const isBatch = req.method === 'POST' && req.path === '/emails/batch';
    if (!isSingle && !isBatch) throw new HttpError(404, 'not_found', 'Route not found');

    const auth = req.header('authorization');
    if (auth === undefined) {
      throw new HttpError(401, 'missing_api_key', 'Missing API key in the authorization header');
    }
    const apiKey = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!apiKeys.has(apiKey)) throw new HttpError(403, 'invalid_api_key', 'API key is invalid');

    // Rate limit before touching the body.
    if (!(await withDeps(() => deps.rateLimit(apiKey)))) {
      throw new HttpError(429, 'rate_limit_exceeded', 'Too many requests');
    }

    const contentLength = Number(req.header('content-length'));
    if (contentLength > MAX_BYTES) throw new HttpError(413, 'content_too_large', 'Request body exceeds 40MB');
    const body = await req.readBody(MAX_BYTES);
    if (body === null) throw new HttpError(413, 'content_too_large', 'Request body exceeds 40MB');

    const idemHeader = req.header('idempotency-key');
    const idemKey = idemHeader !== undefined && idemHeader !== '' ? idemHeader : undefined;
    const response = isSingle ? await sendOne(apiKey, body, idemKey) : await sendBatch(apiKey, body);
    return json(200, response);
  }

  return async (req) => {
    try {
      return await handle(req);
    } catch (err) {
      if (err instanceof HttpError) return errorResponse(err.status, err.name, err.message);
      return errorResponse(500, 'application_error', 'Internal server error');
    }
  };
}
