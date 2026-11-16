import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Redis } from 'ioredis';
import pg from 'pg';
import { INSERT_SQL, insertParams, memoryDeps, S3_TIMEOUT_MS } from './deps-common.ts';
import type { Config, Deps } from './deps-common.ts';

export type { Config, Deps, EmailRow } from './deps-common.ts';

// Node server dependencies: ioredis, pg and the AWS SDK v3.
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
      // Named statement: prepared once per connection and reused, like pgx and prepare_cached
      // in the Go and Rust servers.
      await pool.query({ name: 'insert_emails', text: INSERT_SQL, values: insertParams(rows) });
    },
    async enqueue(ids) {
      await redis.lpush('queue:send', ...ids);
    },
  };
}

export function createDeps(cfg: Config): Deps {
  return cfg.mode === 'memory' ? memoryDeps(cfg) : realDeps(cfg);
}
