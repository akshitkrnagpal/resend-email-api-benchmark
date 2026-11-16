// Node server: node:http + ioredis + pg + AWS SDK v3. Request handling lives in app.ts.
import http from 'node:http';
import type { IncomingMessage } from 'node:http';
import { createApp } from './app.ts';
import type { AppRequest } from './app.ts';
import { configFromEnv } from './deps-common.ts';
import { createDeps } from './deps.ts';

const env = process.env;
const config = configFromEnv(env);
const apiKeys = new Set((env.API_KEYS ?? 're_bench_key').split(','));
const app = createApp(createDeps(config), apiKeys);

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

const server = http.createServer((req, res) => {
  const appReq: AppRequest = {
    method: req.method ?? 'GET',
    path: (req.url ?? '/').split('?')[0],
    header: (name) => {
      const v = req.headers[name];
      return Array.isArray(v) ? v.join(', ') : v;
    },
    readBody: (limit) => readBody(req, limit),
  };
  app(appReq).then((r) => {
    if (res.headersSent) return;
    res.writeHead(r.status, { 'content-type': r.contentType, 'content-length': Buffer.byteLength(r.body) });
    res.end(r.body);
  }, () => {
    if (!res.headersSent) res.writeHead(500).end();
  });
});
server.keepAliveTimeout = 65_000;

const port = Number(env.PORT ?? '8080');
server.listen(port, '0.0.0.0', () => {
  console.log(`ts email-api listening on :${port} (mode=${config.mode})`);
});
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
