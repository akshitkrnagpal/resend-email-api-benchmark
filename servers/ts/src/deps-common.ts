// Types and the in-memory dependencies shared by the Node (deps.ts) and Bun (deps-bun.ts) servers.
// No third-party imports here, so the Bun server doesn't load the Node clients.

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

export function configFromEnv(env: Record<string, string | undefined>): Config {
  return {
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
}

export const INSERT_SQL = `INSERT INTO emails
  (id, api_key, from_addr, to_addrs, subject, text_body, html_size, attachment_count, attachment_bytes, s3_key)
  SELECT * FROM unnest($1::text[], $2::text[], $3::text[], $4::text[], $5::text[], $6::text[],
                       $7::int[], $8::int[], $9::int[], $10::text[])`;

export const S3_TIMEOUT_MS = 5000;

export function insertParams(rows: EmailRow[]): [string[], string[], string[], string[], string[], string[], number[], number[], number[], string[]] {
  return [
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
  ];
}

export function memoryDeps(cfg: Config): Deps {
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
