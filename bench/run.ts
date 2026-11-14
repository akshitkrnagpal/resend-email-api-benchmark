// Benchmark orchestrator.
//
// For every mode (real deps / in-memory deps) and scenario (small / large / batch):
//   Phase A, max throughput: each server alone in a 1 CPU / 2 GB container, closed loop
//            with 64 connections. Gives requests/sec per "task".
//   Phase B, latency at equal load: every server gets the same fixed request rate
//            (FIXED_FRACTION of the slowest server's median max), open loop with
//            coordinated-omission correction, the way Resend compared Node and Go on a 50/50 split.
// Every measurement is repeated REPEATS times with the servers interleaved, and the median is
// reported. Each run gets a fresh container (and fresh Redis/Postgres/S3 state in real mode),
// a warmup, then CPU time (cgroup cpu.stat) and peak RSS (/proc/1/status VmHWM) are read.
//
// Usage: node run.ts   env: MODES=real,memory SCENARIOS=small,large,batch LANGS=ts,ts-bun,go,rust
//                           REPEATS=3 WARMUP=5 MAX_DURATION=10 FIXED_DURATION=20 FIXED_FRACTION=0.5
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const resultsDir = join(here, '..', 'results');
mkdirSync(join(resultsDir, 'raw'), { recursive: true });

const env = process.env;
const list = (v: string | undefined, d: string) => (v ?? d).split(',').filter(Boolean);
const MODES = list(env.MODES, 'real,memory');
const LANGS = list(env.LANGS, 'ts,ts-bun,go,rust');
const SCENARIO_NAMES = list(env.SCENARIOS, 'small,large,batch');
const REPEATS = Number(env.REPEATS ?? '3');
const WARMUP = Number(env.WARMUP ?? '5');
const MAX_DURATION = Number(env.MAX_DURATION ?? '10');
const FIXED_DURATION = Number(env.FIXED_DURATION ?? '20');
const FIXED_FRACTION = Number(env.FIXED_FRACTION ?? '0.5');
const CPUS = env.CPUS ?? '1';
const MEMORY = env.MEMORY ?? '2g';
const NETWORK = 'mailbench_default';
const OHA = 'ghcr.io/hatoo/oha:latest';
const SERVER = 'mb-bench-server';
const OUT = env.OUT ?? 'summary.json';
// Optional fixed rates from an earlier run, e.g. RATES='{"real-small":785}', so a re-run of one
// server is measured at exactly the same load as the others.
const RATES = JSON.parse(env.RATES ?? '{}') as Record<string, number>;

const SCENARIOS: Record<string, { path: string; file: string }> = {
  small: { path: '/emails', file: 'small.json' },
  large: { path: '/emails', file: 'large.json' },
  batch: { path: '/emails/batch', file: 'batch.json' },
};

function sh(args: string[], opts: { allowFail?: boolean } = {}): string {
  try {
    return execFileSync('docker', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    if (opts.allowFail) return '';
    throw e;
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function resetDeps(): Promise<void> {
  // Recreate the S3 store with an empty volume so every run starts from the same state.
  sh(['compose', '-p', 'mailbench', 'rm', '-sf', 's3']);
  sh(['volume', 'rm', '-f', 'mailbench_s3data']);
  sh(['compose', '-p', 'mailbench', 'up', '-d', '--wait', 's3']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'TRUNCATE emails']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'CHECKPOINT']);
  sh(['exec', 'mailbench-redis-1', 'redis-cli', 'FLUSHALL']);
  await sleep(1500);
}

async function startServer(lang: string, mode: string): Promise<void> {
  sh(['rm', '-f', SERVER], { allowFail: true });
  sh([
    'run', '-d', '--name', SERVER, '--network', NETWORK, '--network-alias', 'server',
    `--cpus=${CPUS}`, `--memory=${MEMORY}`, '-p', '127.0.0.1:18090:8080',
    '-e', `MODE=${mode}`,
    '-e', 'REDIS_URL=redis://redis:6379',
    '-e', 'DATABASE_URL=postgres://bench:bench@postgres:5432/bench',
    '-e', 'S3_ENDPOINT=http://s3:7070',
    `mailbench-${lang}`,
  ]);
  for (let i = 0; i < 100; i++) {
    try {
      const r = await fetch('http://127.0.0.1:18090/health');
      if (r.ok) return;
    } catch {
      // not up yet
    }
    await sleep(100);
  }
  throw new Error(`${lang} did not become healthy:\n${sh(['logs', SERVER], { allowFail: true })}`);
}

function stopServer(): void {
  sh(['rm', '-f', SERVER], { allowFail: true });
}

function cpuUsec(): number {
  const stat = sh(['exec', SERVER, 'cat', '/sys/fs/cgroup/cpu.stat']);
  const m = /usage_usec (\d+)/.exec(stat);
  return m ? Number(m[1]) : NaN;
}

function memory(): { peakRssMb: number; rssMb: number } {
  const status = sh(['exec', SERVER, 'cat', '/proc/1/status']);
  const kb = (k: string) => Number(new RegExp(`${k}:\\s+(\\d+)`).exec(status)?.[1] ?? NaN);
  return { peakRssMb: kb('VmHWM') / 1024, rssMb: kb('VmRSS') / 1024 };
}

interface OhaResult {
  summary: { requestsPerSec: number; successRate: number };
  latencyPercentiles: Record<string, number | null>;
  statusCodeDistribution: Record<string, number>;
  errorDistribution: Record<string, number>;
}

function oha(scenario: string, extra: string[]): OhaResult {
  const sc = SCENARIOS[scenario];
  const out = sh([
    'run', '--rm', '--network', NETWORK, '-v', `${join(here, 'payloads')}:/payloads:ro`, OHA,
    '--no-tui', '--output-format', 'json', '-w', '-m', 'POST',
    '-H', 'Authorization: Bearer re_bench_key', '-H', 'Content-Type: application/json',
    '-D', `/payloads/${sc.file}`, ...extra, `http://server:8080${sc.path}`,
  ]);
  return JSON.parse(out) as OhaResult;
}

interface RunResult {
  rep: number;
  mode: string;
  scenario: string;
  lang: string;
  phase: 'max' | 'fixed';
  targetRps: number | null;
  rps: number;
  requests: number;
  ok: number;
  non200: Record<string, number>;
  errors: Record<string, number>;
  p50ms: number;
  p95ms: number;
  p99ms: number;
  cpuMsPerReq: number;
  cpuUtilization: number;
  peakRssMb: number;
  rssMb: number;
}

function summarize(
  r: OhaResult, meta: Pick<RunResult, 'rep' | 'mode' | 'scenario' | 'lang' | 'phase' | 'targetRps'>,
  cpuDeltaUsec: number, seconds: number,
): RunResult {
  const codes = r.statusCodeDistribution ?? {};
  const requests = Object.values(codes).reduce((a, b) => a + b, 0);
  const ok = codes['200'] ?? 0;
  const non200 = Object.fromEntries(Object.entries(codes).filter(([c]) => c !== '200'));
  const pct = (k: string) => (r.latencyPercentiles[k] ?? NaN) * 1000;
  return {
    ...meta,
    rps: r.summary.requestsPerSec,
    requests,
    ok,
    non200,
    errors: r.errorDistribution ?? {},
    p50ms: pct('p50'),
    p95ms: pct('p95'),
    p99ms: pct('p99'),
    cpuMsPerReq: cpuDeltaUsec / 1000 / Math.max(requests, 1),
    cpuUtilization: cpuDeltaUsec / 1e6 / seconds,
    ...memory(),
  };
}

async function measure(
  rep: number, mode: string, scenario: string, lang: string, phase: 'max' | 'fixed', rate: number | null,
): Promise<RunResult> {
  if (mode === 'real') await resetDeps();
  await startServer(lang, mode);
  try {
    const load = rate === null ? ['-c', '64'] : ['-c', '512', '-q', String(rate), '--latency-correction'];
    const warmLoad = rate === null ? ['-c', '32'] : load;
    oha(scenario, ['-z', `${WARMUP}s`, ...warmLoad]);
    const duration = phase === 'max' ? MAX_DURATION : FIXED_DURATION;
    const c0 = cpuUsec();
    const t0 = performance.now();
    const r = oha(scenario, ['-z', `${duration}s`, ...load]);
    const seconds = (performance.now() - t0) / 1000;
    const c1 = cpuUsec();
    const result = summarize(r, { rep, mode, scenario, lang, phase, targetRps: rate }, c1 - c0, seconds);
    writeFileSync(join(resultsDir, 'raw', `${mode}-${scenario}-${lang}-${phase}-${rep}.json`), JSON.stringify({ result, oha: r }, null, 2));
    return result;
  } finally {
    stopServer();
  }
}

function fmt(r: RunResult): string {
  const bad = r.requests - r.ok;
  return `${r.lang.padEnd(8)} rps=${r.rps.toFixed(0).padStart(6)} p50=${r.p50ms.toFixed(1)}ms p95=${r.p95ms.toFixed(1)}ms ` +
    `p99=${r.p99ms.toFixed(1)}ms cpu/req=${r.cpuMsPerReq.toFixed(3)}ms cpu=${(r.cpuUtilization * 100).toFixed(0)}% ` +
    `peakRSS=${r.peakRssMb.toFixed(0)}MB${bad > 0 ? `  NON-200=${bad} ${JSON.stringify(r.non200)} ${JSON.stringify(r.errors)}` : ''}`;
}

const METRICS = ['rps', 'p50ms', 'p95ms', 'p99ms', 'cpuMsPerReq', 'peakRssMb'] as const;
type Metric = (typeof METRICS)[number];
const median = (xs: number[]) => {
  const v = [...xs].sort((a, b) => a - b);
  const m = Math.floor(v.length / 2);
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
};

interface Median extends Record<Metric, number> {
  mode: string; scenario: string; lang: string; phase: string; targetRps: number | null;
  runs: number; failedRequests: number; spread: Record<Metric, [number, number]>;
}

function medianOf(runs: RunResult[]): Median {
  const r0 = runs[0];
  const m = { mode: r0.mode, scenario: r0.scenario, lang: r0.lang, phase: r0.phase, targetRps: r0.targetRps,
    runs: runs.length, failedRequests: runs.reduce((n, r) => n + r.requests - r.ok, 0),
    spread: {} as Record<Metric, [number, number]> } as Median;
  for (const k of METRICS) {
    const xs = runs.map((r) => r[k]);
    m[k] = median(xs);
    m.spread[k] = [Math.min(...xs), Math.max(...xs)];
  }
  return m;
}

const all: RunResult[] = [];
const medians: Median[] = [];
const started = Date.now();
const save = () => writeFileSync(join(resultsDir, OUT), JSON.stringify({
  config: { CPUS, MEMORY, REPEATS, WARMUP, MAX_DURATION, FIXED_DURATION, FIXED_FRACTION, LANGS, MODES, SCENARIO_NAMES },
  medians,
  runs: all,
}, null, 2));

for (const mode of MODES) {
  for (const scenario of SCENARIO_NAMES) {
    console.log(`\n=== mode=${mode} scenario=${scenario} ===`);
    const maxRuns: RunResult[] = [];
    for (let rep = 1; rep <= REPEATS; rep++) {
      for (const lang of LANGS) {
        const r = await measure(rep, mode, scenario, lang, 'max', null);
        console.log(`[max #${rep}]   ${fmt(r)}`);
        maxRuns.push(r);
      }
    }
    all.push(...maxRuns);
    const maxMedians = LANGS.map((l) => medianOf(maxRuns.filter((r) => r.lang === l)));
    medians.push(...maxMedians);
    const rate = RATES[`${mode}-${scenario}`] ??
      Math.max(1, Math.round(Math.min(...maxMedians.map((m) => m.rps)) * FIXED_FRACTION));
    console.log(`fixed rate = ${rate} req/s`);
    const fixedRuns: RunResult[] = [];
    for (let rep = 1; rep <= REPEATS; rep++) {
      for (const lang of LANGS) {
        const r = await measure(rep, mode, scenario, lang, 'fixed', rate);
        console.log(`[fixed #${rep}] ${fmt(r)}`);
        fixedRuns.push(r);
      }
    }
    all.push(...fixedRuns);
    medians.push(...LANGS.map((l) => medianOf(fixedRuns.filter((r) => r.lang === l))));
    save();
  }
}
console.log(`\ndone in ${((Date.now() - started) / 60000).toFixed(1)} min -> results/${OUT}`);
