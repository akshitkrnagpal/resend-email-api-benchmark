// Production-like scenarios. The main benchmark (run.ts) runs one payload type at a time against
// dependencies that answer in about 1 ms. Resend's production numbers (58 ms Node / 31 ms Go median,
// ~1.3 GB vs ~180 MB per task) come from a service where "much of the slow tail is time spent waiting
// on S3 and the database", with mixed traffic, a top-of-hour spike, and "bursts of large requests".
// This runner adds those three things:
//   1. Dependency latency through toxiproxy: S3, Postgres and Redis can each get latency (+ jitter).
//   2. Mixed steady traffic: several oha load generators at fixed rates at the same time.
//   3. Bursts: extra load of one payload type for N seconds every M seconds.
// Each server runs alone in a 1 CPU / 2 GB container. Memory is sampled every second (VmRSS), and
// the run records VmHWM, cgroup memory.peak, CPU (incl. throttling) and per-class latency/failures.
//
// Usage: node prodlike.ts
//   env: LABEL=prodlike LANGS=ts,ts-bun,go,rust REPEATS=3 DURATION=300 SEED=...
//        MIX=small:300,large:10,batch:3          steady rates (req/s)
//        BURSTS=large:60:15:60                   payload:rate:seconds:every (optional, comma-separated)
//        S3_LATENCY=40 S3_JITTER=20 PG_LATENCY=2 PG_JITTER=1 REDIS_LATENCY=1 REDIS_JITTER=0   (ms; 0 = none)
//        CONNECTIONS=512                         connections per oha generator
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  cgroup, failedOf, latencyFromEnv, list, median, ohaAsync, procStatus, requestsOf, resetDeps, seededShuffle,
  startProxy, startServer, stopProxy, stopServer, sleep,
} from './lib.ts';
import type { OhaResult } from './lib.ts';

const here = dirname(fileURLToPath(import.meta.url));
const env = process.env;
const LABEL = env.LABEL ?? 'prodlike';
const outDir = join(here, '..', 'results', LABEL);
mkdirSync(outDir, { recursive: true });

const LANGS = list(env.LANGS, 'ts,ts-bun,go,rust');
const REPEATS = Number(env.REPEATS ?? '3');
const DURATION = Number(env.DURATION ?? '300');
const CONNECTIONS = env.CONNECTIONS ?? '512';
const MIX = Object.fromEntries(list(env.MIX, 'small:300,large:10,batch:3').map((p) => {
  const [k, v] = p.split(':');
  return [k, Number(v)];
})) as Record<string, number>;
interface Burst { scenario: string; rate: number; seconds: number; every: number }
const BURSTS: Burst[] = list(env.BURSTS, '').map((p) => {
  const [scenario, rate, seconds, every] = p.split(':');
  return { scenario, rate: Number(rate), seconds: Number(seconds), every: Number(every) };
});
const LAT = latencyFromEnv(env);
const shuffled = seededShuffle(Number(env.SEED ?? '20261116'));

interface ClassStats { requests: number; failed: number; p50ms: number; p95ms: number; p99ms: number }
interface Run {
  lang: string;
  rep: number;
  peakRssMb: number;
  cgroupPeakMb: number;
  medianRssMb: number;
  endRssMb: number;
  threads: number;
  cpuUtilization: number;
  throttledMs: number;
  classes: Record<string, ClassStats>;
  samples: { t: number; rssMb: number }[];
}

async function runOne(lang: string, rep: number): Promise<Run> {
  await resetDeps();
  await startServer(lang);
  try {
    const samples: { t: number; rssMb: number }[] = [];
    const c0 = cgroup();
    const t0 = Date.now();
    const jobs: Promise<[string, OhaResult]>[] = Object.entries(MIX).filter(([, r]) => r > 0)
      .map(([sc, rate]) => ohaAsync(sc, rate, DURATION, CONNECTIONS).then((r): [string, OhaResult] => [`${sc}`, r]));
    for (const b of BURSTS) {
      for (let start = b.every / 2; start + b.seconds <= DURATION; start += b.every) {
        jobs.push(sleep(start * 1000).then(() => ohaAsync(b.scenario, b.rate, b.seconds, CONNECTIONS))
          .then((r): [string, OhaResult] => [`burst-${b.scenario}@${start}s`, r]));
      }
    }
    let done = false;
    const all = Promise.all(jobs).finally(() => { done = true; });
    while (!done) {
      samples.push({ t: (Date.now() - t0) / 1000, rssMb: procStatus().rssMb });
      await sleep(1000);
    }
    const results = await all;
    const seconds = (Date.now() - t0) / 1000;
    const c1 = cgroup();
    const ps = procStatus();
    // Merge results per payload class (steady + bursts of the same payload).
    const classes: Record<string, ClassStats> = {};
    const byClass = new Map<string, OhaResult[]>();
    for (const [name, r] of results) {
      const cls = name.startsWith('burst-') ? name.slice(6).split('@')[0] : name;
      byClass.set(cls, [...(byClass.get(cls) ?? []), r]);
      const key = name.startsWith('burst-') ? `burst-${cls}` : cls;
      byClass.set(key, [...(byClass.get(key) ?? []), r]);
    }
    for (const [cls, rs] of byClass) {
      const requests = rs.reduce((n, r) => n + requestsOf(r), 0);
      const failed = rs.reduce((n, r) => n + failedOf(r), 0);
      // Percentiles across generators: request-weighted median of each generator's percentile (approximate for bursts).
      const pick = (k: string) => {
        const steady = rs.length === 1 ? rs[0] : rs.reduce((best, r) => (Object.values(r.statusCodeDistribution ?? {}).reduce((a, b) => a + b, 0) >
          Object.values(best.statusCodeDistribution ?? {}).reduce((a, b) => a + b, 0) ? r : best));
        return (steady.latencyPercentiles[k] ?? NaN) * 1000;
      };
      classes[cls] = { requests, failed, p50ms: pick('p50'), p95ms: pick('p95'), p99ms: pick('p99') };
    }
    const run: Run = {
      lang, rep,
      peakRssMb: ps.hwmMb,
      cgroupPeakMb: c1.memPeakMb,
      medianRssMb: median(samples.map((s) => s.rssMb)),
      endRssMb: ps.rssMb,
      threads: ps.threads,
      cpuUtilization: (c1.usage - c0.usage) / 1e6 / seconds,
      throttledMs: (c1.throttled - c0.throttled) / 1000,
      classes,
      samples,
    };
    writeFileSync(join(outDir, `${lang}-${rep}.json`), JSON.stringify({ run, oha: Object.fromEntries(results.map(([n, r], i) => [`${i}-${n}`, r])) }, null, 2));
    return run;
  } finally {
    stopServer();
  }
}

const config = { LABEL, DURATION, MIX, BURSTS, LAT, CONNECTIONS, REPEATS, LANGS, SEED: env.SEED ?? '20261116', cpus: 1, memory: '2g' };
console.log('config', JSON.stringify(config));
await startProxy(LAT);
const runs: Run[] = [];
try {
  for (let rep = 1; rep <= REPEATS; rep++) {
    const order = shuffled(LANGS);
    console.log(`order #${rep}: ${order.join(' ')}`);
    for (const lang of order) {
      const r = await runOne(lang, rep);
      runs.push(r);
      const cls = Object.entries(r.classes).map(([k, c]) => `${k}: p50 ${c.p50ms.toFixed(0)} p99 ${c.p99ms.toFixed(0)} fail ${c.failed}/${c.requests}`).join(' | ');
      console.log(`${lang.padEnd(7)} rep ${rep}: peakRSS ${r.peakRssMb.toFixed(0)} MB, cgroup ${r.cgroupPeakMb.toFixed(0)} MB, median ${r.medianRssMb.toFixed(0)} MB, ` +
        `cpu ${(r.cpuUtilization * 100).toFixed(0)}%, throttled ${r.throttledMs.toFixed(0)} ms, threads ${r.threads} || ${cls}`);
    }
  }
} finally {
  stopProxy();
}
const summary = LANGS.map((lang) => {
  const rs = runs.filter((r) => r.lang === lang);
  return {
    lang,
    peakRssMb: median(rs.map((r) => r.peakRssMb)),
    cgroupPeakMb: median(rs.map((r) => r.cgroupPeakMb)),
    medianRssMb: median(rs.map((r) => r.medianRssMb)),
    cpuUtilization: median(rs.map((r) => r.cpuUtilization)),
    spreadPeakRssMb: [Math.min(...rs.map((r) => r.peakRssMb)), Math.max(...rs.map((r) => r.peakRssMb))],
  };
});
writeFileSync(join(outDir, 'summary.json'), JSON.stringify({ config, summary, runs: runs.map(({ samples, ...r }) => r) }, null, 2));
console.log(`wrote results/${LABEL}/summary.json`);
