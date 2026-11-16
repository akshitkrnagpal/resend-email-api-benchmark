// Production-like memory test. Resend reported ~1.3 GB per Node task vs ~180 MB per Go task.
// The main benchmark runs one payload type at a time against a local S3 that answers in ~1 ms,
// for 25 s per run. This test is closer to production on the three things that drive memory:
//   1. Mixed traffic: small, large (with attachments) and batch requests at the same time.
//   2. S3 latency: every S3 call goes through a toxiproxy that adds latency (default 50 ms ± 20 ms),
//      so requests stay in flight, holding their buffers, the way they do against real S3.
//   3. Longer runs (default 180 s), so lazy garbage collectors have time to grow their heaps.
// Memory is sampled every second from /proc/1/status (VmRSS) plus the peak (VmHWM).
//
// Usage: node prod-memory.ts
//   env: LANGS=ts,ts-bun,go,rust REPEATS=1 DURATION=180 SMALL_RPS=300 LARGE_RPS=15 BATCH_RPS=3
//        S3_LATENCY=50 S3_JITTER=20 OUT=prod-memory.json
import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const resultsDir = join(here, '..', 'results');
mkdirSync(join(resultsDir, 'prod-memory'), { recursive: true });

const env = process.env;
const list = (v: string | undefined, d: string) => (v ?? d).split(',').map((s) => s.trim()).filter(Boolean);
const LANGS = list(env.LANGS, 'ts,ts-bun,go,rust');
const REPEATS = Number(env.REPEATS ?? '1');
const DURATION = Number(env.DURATION ?? '180');
const MIX: Record<string, number> = {
  small: Number(env.SMALL_RPS ?? '300'),
  large: Number(env.LARGE_RPS ?? '15'),
  batch: Number(env.BATCH_RPS ?? '3'),
};
const S3_LATENCY = Number(env.S3_LATENCY ?? '50');
const S3_JITTER = Number(env.S3_JITTER ?? '20');
const OUT = env.OUT ?? 'prod-memory.json';

const NETWORK = 'mailbench_default';
const SERVER = 'mb-bench-server';
const PROXY = 'mb-s3-proxy';
const PROXY_API = 'http://127.0.0.1:18474';
const OHA = 'ghcr.io/hatoo/oha:latest';
const TOXIPROXY = 'ghcr.io/shopify/toxiproxy:2.12.0';

const SCENARIOS: Record<string, { path: string; file: string }> = {
  small: { path: '/emails', file: 'small.json' },
  large: { path: '/emails', file: 'large.json' },
  batch: { path: '/emails/batch', file: 'batch.json' },
};

function sh(args: string[], allowFail = false): string {
  try {
    return execFileSync('docker', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    if (allowFail) return '';
    throw e;
  }
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function api(path: string, body: unknown): Promise<void> {
  const r = await fetch(`${PROXY_API}${path}`, { method: 'POST', body: JSON.stringify(body) });
  if (!r.ok && r.status !== 409) throw new Error(`toxiproxy ${path}: ${r.status} ${await r.text()}`);
}

async function startProxy(): Promise<void> {
  sh(['rm', '-f', PROXY], true);
  sh(['run', '-d', '--name', PROXY, '--network', NETWORK, '--network-alias', 's3proxy', '-p', '127.0.0.1:18474:8474', TOXIPROXY]);
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(`${PROXY_API}/version`)).ok) break;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  await api('/proxies', { name: 's3', listen: '0.0.0.0:7071', upstream: 's3:7070', enabled: true });
  await api('/proxies/s3/toxics', {
    name: 'latency', type: 'latency', stream: 'downstream', toxicity: 1,
    attributes: { latency: S3_LATENCY, jitter: S3_JITTER },
  });
}

async function resetDeps(): Promise<void> {
  sh(['compose', '-p', 'mailbench', 'rm', '-sf', 's3']);
  sh(['volume', 'rm', '-f', 'mailbench_s3data']);
  sh(['compose', '-p', 'mailbench', 'up', '-d', '--wait', 's3']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'TRUNCATE emails']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'CHECKPOINT']);
  sh(['exec', 'mailbench-redis-1', 'redis-cli', 'FLUSHALL']);
  await sleep(1500);
}

async function startServer(lang: string): Promise<void> {
  sh(['rm', '-f', SERVER], true);
  sh([
    'run', '-d', '--name', SERVER, '--network', NETWORK, '--network-alias', 'server',
    '--cpus=1', '--memory=2g', '-p', '127.0.0.1:18090:8080',
    '-e', 'MODE=real',
    '-e', 'REDIS_URL=redis://redis:6379',
    '-e', 'DATABASE_URL=postgres://bench:bench@postgres:5432/bench',
    '-e', 'S3_ENDPOINT=http://s3proxy:7071',
    `mailbench-${lang}`,
  ]);
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch('http://127.0.0.1:18090/health')).ok) return;
    } catch {
      // not up yet
    }
    await sleep(100);
  }
  throw new Error(`${lang} did not become healthy:\n${sh(['logs', SERVER], true)}`);
}

interface OhaResult {
  summary: { requestsPerSec: number };
  latencyPercentiles: Record<string, number | null>;
  statusCodeDistribution: Record<string, number>;
  errorDistribution: Record<string, number>;
}

function ohaAsync(scenario: string, rate: number, seconds: number): Promise<OhaResult> {
  const sc = SCENARIOS[scenario];
  const args = [
    'run', '--rm', '--network', NETWORK, '-v', `${join(here, 'payloads')}:/payloads:ro`, OHA,
    '--no-tui', '--output-format', 'json', '-w', '-m', 'POST',
    '-H', 'Authorization: Bearer re_bench_key', '-H', 'Content-Type: application/json',
    '-D', `/payloads/${sc.file}`, '-z', `${seconds}s`, '-c', '256', '-q', String(rate), '--latency-correction',
    `http://server:8080${sc.path}`,
  ];
  return new Promise((resolve, reject) => {
    const p = spawn('docker', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    let err = '';
    p.stdout.on('data', (d: Buffer) => { out += d.toString(); });
    p.stderr.on('data', (d: Buffer) => { err += d.toString(); });
    p.on('close', (code) => {
      if (code !== 0) reject(new Error(`oha ${scenario} exited ${code}: ${err.slice(0, 500)}`));
      else resolve(JSON.parse(out) as OhaResult);
    });
  });
}

function status(): { rssMb: number; hwmMb: number } {
  const s = sh(['exec', SERVER, 'cat', '/proc/1/status']);
  const kb = (k: string) => Number(new RegExp(`${k}:\\s+(\\d+)`).exec(s)?.[1] ?? NaN);
  return { rssMb: kb('VmRSS') / 1024, hwmMb: kb('VmHWM') / 1024 };
}
function cpuUsec(): number {
  const m = /usage_usec (\d+)/.exec(sh(['exec', SERVER, 'cat', '/sys/fs/cgroup/cpu.stat']));
  return m ? Number(m[1]) : NaN;
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

interface Run {
  lang: string;
  rep: number;
  peakRssMb: number;
  steadyRssMb: number;
  endRssMb: number;
  cpuUtilization: number;
  requests: Record<string, number>;
  failed: Record<string, number>;
  p50ms: Record<string, number>;
  p99ms: Record<string, number>;
  samples: { t: number; rssMb: number }[];
}

async function runOne(lang: string, rep: number): Promise<Run> {
  await resetDeps();
  await startServer(lang);
  try {
    const samples: { t: number; rssMb: number }[] = [];
    const c0 = cpuUsec();
    const t0 = Date.now();
    const load = Promise.all(Object.entries(MIX).map(([sc, rate]) => ohaAsync(sc, rate, DURATION).then((r) => [sc, r] as const)));
    let done = false;
    load.finally(() => { done = true; });
    while (!done) {
      samples.push({ t: (Date.now() - t0) / 1000, rssMb: status().rssMb });
      await sleep(1000);
    }
    const results = Object.fromEntries(await load);
    const seconds = (Date.now() - t0) / 1000;
    const cpu = (cpuUsec() - c0) / 1e6 / seconds;
    const { rssMb, hwmMb } = status();
    const lastMinute = samples.filter((s) => s.t >= DURATION - 60).map((s) => s.rssMb);
    const per = <T>(f: (r: OhaResult) => T) => Object.fromEntries(Object.entries(results).map(([k, r]) => [k, f(r)]));
    const run: Run = {
      lang, rep,
      peakRssMb: hwmMb,
      steadyRssMb: median(lastMinute),
      endRssMb: rssMb,
      cpuUtilization: cpu,
      requests: per((r) => Object.values(r.statusCodeDistribution ?? {}).reduce((a, b) => a + b, 0)),
      failed: per((r) => Object.entries(r.statusCodeDistribution ?? {}).filter(([c]) => c !== '200').reduce((a, [, n]) => a + n, 0)
        + Object.values(r.errorDistribution ?? {}).reduce((a, b) => a + b, 0)),
      p50ms: per((r) => (r.latencyPercentiles.p50 ?? NaN) * 1000),
      p99ms: per((r) => (r.latencyPercentiles.p99 ?? NaN) * 1000),
      samples,
    };
    writeFileSync(join(resultsDir, 'prod-memory', `${lang}-${rep}.json`), JSON.stringify({ run, oha: results }, null, 2));
    return run;
  } finally {
    sh(['rm', '-f', SERVER], true);
  }
}

const config = { DURATION, MIX, S3_LATENCY, S3_JITTER, REPEATS, cpus: 1, memory: '2g' };
console.log('config', JSON.stringify(config));
await startProxy();
const runs: Run[] = [];
try {
  for (let rep = 1; rep <= REPEATS; rep++) {
    for (const lang of LANGS) {
      const r = await runOne(lang, rep);
      runs.push(r);
      console.log(`${lang.padEnd(7)} rep ${rep}: peak ${r.peakRssMb.toFixed(0)} MB, steady ${r.steadyRssMb.toFixed(0)} MB, end ${r.endRssMb.toFixed(0)} MB, cpu ${(r.cpuUtilization * 100).toFixed(0)}%, ` +
        `failed ${JSON.stringify(r.failed)}, p99 ${JSON.stringify(Object.fromEntries(Object.entries(r.p99ms).map(([k, v]) => [k, Math.round(v)])))}`);
    }
  }
} finally {
  sh(['rm', '-f', PROXY], true);
}
writeFileSync(join(resultsDir, OUT), JSON.stringify({ config, runs: runs.map(({ samples, ...r }) => r) }, null, 2));
console.log(`wrote results/${OUT}`);
