// Bun server: Bun.serve + Bun's native Postgres/Redis/S3 clients. Request handling is the same
// app.ts the Node server uses; only the HTTP server and the dependency clients differ.
import { createApp } from './app.ts';
import { configFromEnv } from './deps-common.ts';
import { createDeps } from './deps-bun.ts';
import { MAX_BYTES } from './email.ts';

const env = process.env;
const config = configFromEnv(env);
const apiKeys = new Set((env.API_KEYS ?? 're_bench_key').split(','));
const app = createApp(createDeps(config), apiKeys);

const server = Bun.serve({
  port: Number(env.PORT ?? '8080'),
  hostname: '0.0.0.0',
  // app.ts enforces the 40 MB limit itself (with the API's own error body); leave Bun's cap above it.
  maxRequestBodySize: MAX_BYTES * 2,
  idleTimeout: 65,
  async fetch(req) {
    const url = req.url;
    const start = url.indexOf('/', url.indexOf('//') + 2);
    const q = url.indexOf('?', start);
    const r = await app({
      method: req.method,
      path: q === -1 ? url.slice(start) : url.slice(start, q),
      header: (name) => req.headers.get(name) ?? undefined,
      async readBody(limit) {
        const buf = Buffer.from(await req.arrayBuffer());
        return buf.length > limit ? null : buf;
      },
    });
    return new Response(r.body, { status: r.status, headers: { 'content-type': r.contentType } });
  },
});

console.log(`bun email-api listening on :${server.port} (mode=${config.mode})`);
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
