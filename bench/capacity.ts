// Sustainable capacity per task under an SLO: the fair replacement for "max throughput".
// Each server runs alone (1 CPU / 2 GB) behind production-like dependency latency (toxiproxy:
// S3 40±20 ms, Postgres 2±1 ms, Redis 1 ms). Load is the production-like mix scaled by a factor k
// (k=1: 300 small + 10 large + 3 batch req/s). Each step runs STEP seconds; a step passes when every
// payload class has p99 <= SLO_P99_MS, there are zero failed requests, and at least 97% of the target
// rate was delivered. k doubles until a step fails, then BISECT halving steps narrow the limit.
//
// Usage: node capacity.ts   env: LABEL=fair/capacity LANGS=... STEP=25 SLO_P99_MS=500 BISECT=3 SEED=...
//        MIX=small:300,large:10,batch:3  (+ S3_LATENCY / PG_LATENCY / REDIS_LATENCY ... as in lib.ts)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  cgroup, failedOf, latencyFromEnv, list, ohaAsync, procStatus, requestsOf, resetDeps, seededShuffle,
  sleep, startProxy, startServer, stopProxy, stopServer,
} from './lib.ts';

const here = dirname(fileURLToPath(import.meta.url));
const env = process.env;
const LABEL = env.LABEL ?? 'fair/capacity';
const outDir = join(here, '..', 'results', LABEL);
mkdirSync(outDir, { recursive: true });

const LANGS = list(env.LANGS, 'ts,ts-bun,go,rust');
const STEP = Number(env.STEP ?? '25');
const SLO_P99_MS = Number(env.SLO_P99_MS ?? '500');
const BISECT = Number(env.BISECT ?? '3');
const K_MAX = Number(env.K_MAX ?? '16');
const MIX = Object.fromEntries(list(env.MIX, 'small:300,large:10,batch:3').map((p) => {
  const [k, v] = p.split(':');
  return [k, Number(v)];
})) as Record<string, number>;
const LAT = latencyFromEnv(env);
const shuffled = seededShuffle(Number(env.SEED ?? '20261116'));

interface Step {
  k: number;
  pass: boolean;
  reason: string;
  cpuUtilization: number;
  rssMb: number;
  classes: Record<string, { target: number; achieved: number; p50ms: number; p99ms: number; failed: number; requests: number }>;
}

async function step(k: number): Promise<Step> {
  const c0 = cgroup();
  const t0 = Date.now();
  const entries = Object.entries(MIX).filter(([, r]) => r > 0);
  const results = await Promise.all(entries.map(([sc, r]) => ohaAsync(sc, Math.max(1, Math.round(r * k)), STEP, '1024')));
  const seconds = (Date.now() - t0) / 1000;
  const c1 = cgroup();
  const classes: Step['classes'] = {};
  const reasons: string[] = [];
  entries.forEach(([sc, r], i) => {
    const o = results[i];
    const target = Math.max(1, Math.round(r * k));
    const requests = requestsOf(o);
    const c = {
      target,
      achieved: requests / STEP,
      p50ms: (o.latencyPercentiles.p50 ?? NaN) * 1000,
      p99ms: (o.latencyPercentiles.p99 ?? NaN) * 1000,
      failed: failedOf(o),
      requests,
    };
    classes[sc] = c;
    if (c.failed > 0) reasons.push(`${sc} ${c.failed} failed`);
    if (!(c.p99ms <= SLO_P99_MS)) reasons.push(`${sc} p99 ${c.p99ms.toFixed(0)} ms`);
    if (c.achieved < target * 0.97) reasons.push(`${sc} ${c.achieved.toFixed(1)}/${target} req/s`);
  });
  return {
    k, pass: reasons.length === 0, reason: reasons.join(', ') || 'ok',
    cpuUtilization: (c1.usage - c0.usage) / 1e6 / seconds, rssMb: procStatus().rssMb, classes,
  };
}

async function capacity(lang: string): Promise<{ lang: string; k: number; steps: Step[] }> {
  await resetDeps();
  await startServer(lang);
  const steps: Step[] = [];
  const run = async (k: number) => {
    const s = await step(k);
    steps.push(s);
    console.log(`  ${lang.padEnd(7)} k=${k.toFixed(3).padStart(6)} ${s.pass ? 'PASS' : 'FAIL'} cpu ${(s.cpuUtilization * 100).toFixed(0).padStart(3)}% rss ${s.rssMb.toFixed(0)} MB  ` +
      Object.entries(s.classes).map(([c, v]) => `${c} p99 ${v.p99ms.toFixed(0)}`).join(' | ') + (s.pass ? '' : `  <- ${s.reason}`));
    if (!s.pass) await sleep(8000); // let the backlog drain before the next step
    return s.pass;
  };
  try {
    await step(0.5); // warmup (JIT, connection pools), not recorded
    let lo = 0;
    let hi = K_MAX * 2;
    let k = 1;
    if (await run(k)) {
      lo = k;
      while (k < K_MAX) {
        k *= 2;
        if (await run(k)) lo = k;
        else { hi = k; break; }
      }
    } else {
      hi = k;
      while (k > 0.125) {
        k /= 2;
        if (await run(k)) { lo = k; break; }
        hi = k;
      }
    }
    for (let i = 0; i < BISECT && hi <= K_MAX && lo > 0; i++) {
      const mid = (lo + hi) / 2;
      if (await run(mid)) lo = mid;
      else hi = mid;
    }
    return { lang, k: lo, steps };
  } finally {
    stopServer();
  }
}

const config = { LABEL, STEP, SLO_P99_MS, BISECT, K_MAX, MIX, LAT, LANGS, SEED: env.SEED ?? '20261116', cpus: 1, memory: '2g' };
console.log('config', JSON.stringify(config));
await startProxy(LAT);
const out: { lang: string; k: number; steps: Step[] }[] = [];
try {
  const order = shuffled(LANGS);
  console.log(`order: ${order.join(' ')}`);
  for (const lang of order) {
    const r = await capacity(lang);
    out.push(r);
    const rps = Object.values(MIX).reduce((a, b) => a + b, 0) * r.k;
    console.log(`${lang.padEnd(7)} capacity k=${r.k.toFixed(3)}  (~${rps.toFixed(0)} req/s of the mix within p99 <= ${SLO_P99_MS} ms, 0 errors)`);
  }
} finally {
  stopProxy();
}
writeFileSync(join(outDir, 'summary.json'), JSON.stringify({ config, results: out }, null, 2));
console.log(`wrote results/${LABEL}/summary.json`);
