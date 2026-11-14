import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Redis } from 'ioredis';
import pg from 'pg';

export interface EmailRow {
  id: string;
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  htmlSize: number;
  attachmentCount: number;
  attachmentBytes: number;
  s3Key: string;
}

export interface Deps {
  rateLimit(apiKey: string): Promise<boolean>;
  getIdempotency(key: string): Promise<string | null>;
  setIdempotency(key: string, value: string): Promise<void>;
  putObject(key: string, body: Buffer): Promise<void>;
  insertEmails(rows: EmailRow[]): Promise<void>;
  enqueue(ids: string[]): Promise<void>;
}

export interface Config {
  mode: string;
  redisUrl: string;
  databaseUrl: string;
  pgPoolSize: number;
  s3Endpoint: string;
  s3Bucket: string;
  s3AccessKey: string;
  s3SecretKey: string;
  rateLimit: number;
}

const INSERT_SQL = `INSERT INTO emails
  (id, api_key, from_addr, to_addrs, subject, text_body, html_size, attachment_count, attachment_bytes, s3_key)
  SELECT * FROM unnest($1::text[], $2::text[], $3::text[], $4::text[], $5::text[], $6::text[],
                       $7::int[], $8::int[], $9::int[], $10::text[])`;

const S3_TIMEOUT_MS = 5000;

function realDeps(cfg: Config): Deps {
  const redis = new Redis(cfg.redisUrl, { maxRetriesPerRequest: 1 });
  const pool = new pg.Pool({ connectionString: cfg.databaseUrl, max: cfg.pgPoolSize });
  const s3 = new S3Client({
    endpoint: cfg.s3Endpoint,
    region: 'us-east-1',
    forcePathStyle: true,
    credentials: { accessKeyId: cfg.s3AccessKey, secretAccessKey: cfg.s3SecretKey },
    // The default agent caps S3 at 50 sockets; a batch fans out 50 uploads at once.
    requestHandler: { httpAgent: { keepAlive: true, maxSockets: 256 } },
  });

  return {
    async rateLimit(apiKey) {
      const key = `rl:${apiKey}:${Math.floor(Date.now() / 1000)}`;
      const n = await redis.incr(key);
      if (n === 1) await redis.expire(key, 2);
      return n <= cfg.rateLimit;
    },
    getIdempotency: (key) => redis.get(key),
    async setIdempotency(key, value) {
      await redis.set(key, value, 'EX', 86400, 'NX');
    },
    async putObject(key, body) {
      await s3.send(
        new PutObjectCommand({ Bucket: cfg.s3Bucket, Key: key, Body: body, ContentType: 'message/rfc822' }),
        { abortSignal: AbortSignal.timeout(S3_TIMEOUT_MS) },
      );
    },
    async insertEmails(rows) {
      await pool.query(INSERT_SQL, [
        rows.map((r) => r.id),
        rows.map((r) => r.apiKey),
        rows.map((r) => r.from),
        rows.map((r) => r.to),
        rows.map((r) => r.subject),
        rows.map((r) => r.text),
        rows.map((r) => r.htmlSize),
        rows.map((r) => r.attachmentCount),
        rows.map((r) => r.attachmentBytes),
        rows.map((r) => r.s3Key),
      ]);
    },
    async enqueue(ids) {
      await redis.lpush('queue:send', ...ids);
    },
  };
}

function memoryDeps(cfg: Config): Deps {
  const windows = new Map<string, { sec: number; count: number }>();
  const idempotency = new Map<string, string>();
  return {
    async rateLimit(apiKey) {
      const sec = Math.floor(Date.now() / 1000);
      const w = windows.get(apiKey);
      if (w === undefined || w.sec !== sec) {
        windows.set(apiKey, { sec, count: 1 });
        return 1 <= cfg.rateLimit;
      }
      w.count++;
      return w.count <= cfg.rateLimit;
    },
    async getIdempotency(key) {
      return idempotency.get(key) ?? null;
    },
    async setIdempotency(key, value) {
      if (!idempotency.has(key)) idempotency.set(key, value);
    },
    async putObject() {},
    async insertEmails() {},
    async enqueue() {},
  };
}

export function createDeps(cfg: Config): Deps {
  return cfg.mode === 'memory' ? memoryDeps(cfg) : realDeps(cfg);
}
