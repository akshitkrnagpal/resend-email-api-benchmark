import { createHash, randomUUID } from 'node:crypto';
import http from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { createDeps } from './deps.ts';
import type { Config, EmailRow } from './deps.ts';
import { buildEml, isObject, MAX_BYTES, normalizeEmail, ValidationError } from './email.ts';
import type { NormalizedEmail } from './email.ts';

const env = process.env;
const config: Config = {
  mode: env.MODE ?? 'real',
  redisUrl: env.REDIS_URL ?? 'redis://localhost:6379',
  databaseUrl: env.DATABASE_URL ?? 'postgres://bench:bench@localhost:5432/bench',
  pgPoolSize: Number(env.PG_POOL_SIZE ?? '20'),
  s3Endpoint: env.S3_ENDPOINT ?? 'http://localhost:7070',
  s3Bucket: env.S3_BUCKET ?? 'emails',
  s3AccessKey: env.S3_ACCESS_KEY ?? 'bench',
  s3SecretKey: env.S3_SECRET_KEY ?? 'benchsecret',
  rateLimit: Number(env.RATE_LIMIT ?? '1000000000'),
};
const apiKeys = new Set((env.API_KEYS ?? 're_bench_key').split(','));
const deps = createDeps(config);

class HttpError extends Error {
  readonly status: number;
  readonly name: string;
  constructor(status: number, name: string, message: string) {
    super(message);
    this.status = status;
    this.name = name;
  }
}

function sendJson(res: ServerResponse, status: number, body: string): void {
  res.writeHead(status, {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(body),
  });
  res.end(body);
}

function sendError(res: ServerResponse, status: number, name: string, message: string): void {
  sendJson(res, status, JSON.stringify({ statusCode: status, name, message }));
}

// Resolves to null when the body is larger than `limit`.
function readBody(req: IncomingMessage, limit: number): Promise<Buffer | null> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;
    let over = false;
    req.on('data', (chunk: Buffer) => {
      if (over) return;
      size += chunk.length;
      if (size > limit) {
        over = true;
        chunks.length = 0;
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(over ? null : Buffer.concat(chunks, size)));
    req.on('error', reject);
  });
}

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

async function handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const path = (req.url ?? '/').split('?')[0];
  if (req.method === 'GET' && path === '/health') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('ok');
    return;
  }
  const isSingle = req.method === 'POST' && path === '/emails';
  const isBatch = req.method === 'POST' && path === '/emails/batch';
  if (!isSingle && !isBatch) throw new HttpError(404, 'not_found', 'Route not found');

  const auth = req.headers.authorization;
  if (auth === undefined) {
    throw new HttpError(401, 'missing_api_key', 'Missing API key in the authorization header');
  }
  const apiKey = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!apiKeys.has(apiKey)) throw new HttpError(403, 'invalid_api_key', 'API key is invalid');

  // Rate limit before touching the body.
  if (!(await withDeps(() => deps.rateLimit(apiKey)))) {
    throw new HttpError(429, 'rate_limit_exceeded', 'Too many requests');
  }

  const contentLength = Number(req.headers['content-length']);
  if (contentLength > MAX_BYTES) throw new HttpError(413, 'content_too_large', 'Request body exceeds 40MB');
  const body = await readBody(req, MAX_BYTES);
  if (body === null) throw new HttpError(413, 'content_too_large', 'Request body exceeds 40MB');

  const idemHeader = req.headers['idempotency-key'];
  const idemKey = typeof idemHeader === 'string' && idemHeader !== '' ? idemHeader : undefined;
  const response = isSingle ? await sendOne(apiKey, body, idemKey) : await sendBatch(apiKey, body);
  sendJson(res, 200, response);
}

const server = http.createServer((req, res) => {
  handle(req, res).catch((err: unknown) => {
    if (res.headersSent) return;
    if (err instanceof HttpError) sendError(res, err.status, err.name, err.message);
    else sendError(res, 500, 'application_error', 'Internal server error');
  });
});
server.keepAliveTimeout = 65_000;

const port = Number(env.PORT ?? '8080');
server.listen(port, '0.0.0.0', () => {
  console.log(`ts email-api listening on :${port} (mode=${config.mode})`);
});
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
