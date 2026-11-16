// Bun server dependencies: Bun's built-in Postgres (Bun.SQL), Redis (RedisClient) and S3 (S3Client)
// clients instead of pg / ioredis / the AWS SDK through Bun's Node-compatibility layer.
import { RedisClient, S3Client, SQL } from 'bun';
import { INSERT_SQL, insertParams, memoryDeps, S3_TIMEOUT_MS } from './deps-common.ts';
import type { Config, Deps } from './deps-common.ts';

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('timeout')), ms);
  });
  return Promise.race([p, timeout]).finally(() => clearTimeout(timer));
}

function realDeps(cfg: Config): Deps {
  const redis = new RedisClient(cfg.redisUrl);
  const sql = new SQL(cfg.databaseUrl, { max: cfg.pgPoolSize });
  const s3 = new S3Client({
    endpoint: cfg.s3Endpoint,
    region: 'us-east-1',
    bucket: cfg.s3Bucket,
    accessKeyId: cfg.s3AccessKey,
    secretAccessKey: cfg.s3SecretKey,
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
      await redis.send('SET', [key, value, 'EX', '86400', 'NX']);
    },
    async putObject(key, body) {
      await withTimeout(s3.write(key, body, { type: 'message/rfc822' }), S3_TIMEOUT_MS);
    },
    async insertEmails(rows) {
      await sql.unsafe(INSERT_SQL, insertParams(rows));
    },
    async enqueue(ids) {
      await redis.send('LPUSH', ['queue:send', ...ids]);
    },
  };
}

export function createDeps(cfg: Config): Deps {
  return cfg.mode === 'memory' ? memoryDeps(cfg) : realDeps(cfg);
}
