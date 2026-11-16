// Shared helpers for the scenario runners (prodlike.ts, capacity.ts): Docker, toxiproxy for
// dependency latency, server lifecycle, oha load generation and metrics.
import { execFileSync, spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const NETWORK = 'mailbench_default';
export const SERVER = 'mb-bench-server';
const PROXY = 'mb-dep-proxy';
const PROXY_API = 'http://127.0.0.1:18474';
const OHA = 'ghcr.io/hatoo/oha:latest';
const TOXIPROXY = 'ghcr.io/shopify/toxiproxy:2.12.0';

export const SCENARIOS: Record<string, { path: string; file: string }> = {
  small: { path: '/emails', file: 'small.json' },
  large: { path: '/emails', file: 'large.json' },
  batch: { path: '/emails/batch', file: 'batch.json' },
};

export function sh(args: string[], allowFail = false): string {
  try {
    return execFileSync('docker', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    if (allowFail) return '';
    throw e;
  }
}
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const list = (v: string | undefined, d: string) => (v ?? d).split(',').map((s) => s.trim()).filter(Boolean);

export function seededShuffle(seed0: number): <T>(xs: T[]) => T[] {
  let seed = seed0;
  const rand = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  return <T>(xs: T[]): T[] => {
    const a = [...xs];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
}

export const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length === 0 ? NaN : s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

export interface Latency { s3: [number, number]; pg: [number, number]; redis: [number, number] }

export function latencyFromEnv(env: Record<string, string | undefined>): Latency {
  return {
    s3: [Number(env.S3_LATENCY ?? '40'), Number(env.S3_JITTER ?? '20')],
    pg: [Number(env.PG_LATENCY ?? '2'), Number(env.PG_JITTER ?? '1')],
    redis: [Number(env.REDIS_LATENCY ?? '1'), Number(env.REDIS_JITTER ?? '0')],
  };
}

async function api(method: string, path: string, body?: unknown): Promise<void> {
  const r = await fetch(`${PROXY_API}${path}`, { method, body: body === undefined ? undefined : JSON.stringify(body) });
  if (!r.ok && r.status !== 409) throw new Error(`toxiproxy ${method} ${path}: ${r.status} ${await r.text()}`);
}

// One toxiproxy with three proxies; the server talks to s3proxy / pgproxy / redisproxy.
export async function startProxy(lat: Latency): Promise<void> {
  sh(['rm', '-f', PROXY], true);
  sh(['run', '-d', '--name', PROXY, '--network', NETWORK,
    '--network-alias', 's3proxy', '--network-alias', 'pgproxy', '--network-alias', 'redisproxy',
    '-p', '127.0.0.1:18474:8474', TOXIPROXY]);
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(`${PROXY_API}/version`)).ok) break;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  const proxies: [string, string, string, [number, number]][] = [
    ['s3', '0.0.0.0:7071', 's3:7070', lat.s3],
    ['pg', '0.0.0.0:5433', 'postgres:5432', lat.pg],
    ['redis', '0.0.0.0:6380', 'redis:6379', lat.redis],
  ];
  for (const [name, listen, upstream, [latency, jitter]] of proxies) {
    await api('POST', '/proxies', { name, listen, upstream, enabled: true });
    if (latency > 0) {
      await api('POST', `/proxies/${name}/toxics`, {
        name: 'latency', type: 'latency', stream: 'downstream', toxicity: 1, attributes: { latency, jitter },
      });
    }
  }
}
export function stopProxy(): void {
  sh(['rm', '-f', PROXY], true);
}

export async function resetDeps(): Promise<void> {
  sh(['compose', '-p', 'mailbench', 'rm', '-sf', 's3']);
  sh(['volume', 'rm', '-f', 'mailbench_s3data']);
  sh(['compose', '-p', 'mailbench', 'up', '-d', '--wait', 's3']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'TRUNCATE emails']);
  sh(['exec', 'mailbench-postgres-1', 'psql', '-U', 'bench', '-q', '-c', 'CHECKPOINT']);
  sh(['exec', 'mailbench-redis-1', 'redis-cli', 'FLUSHALL']);
  await sleep(1500);
}

export async function startServer(lang: string): Promise<void> {
  sh(['rm', '-f', SERVER], true);
  sh([
    'run', '-d', '--name', SERVER, '--network', NETWORK, '--network-alias', 'server',
    '--cpus=1', '--memory=2g', '-p', '127.0.0.1:18090:8080',
    '-e', 'MODE=real',
    '-e', 'REDIS_URL=redis://redisproxy:6380',
    '-e', 'DATABASE_URL=postgres://bench:bench@pgproxy:5433/bench',
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
export function stopServer(): void {
  sh(['rm', '-f', SERVER], true);
}

export interface OhaResult {
  summary: { requestsPerSec: number };
  latencyPercentiles: Record<string, number | null>;
  statusCodeDistribution: Record<string, number>;
  errorDistribution: Record<string, number>;
}

export function ohaAsync(scenario: string, rate: number, seconds: number, connections: string): Promise<OhaResult> {
  const sc = SCENARIOS[scenario];
  const args = [
    'run', '--rm', '--network', NETWORK, '-v', `${join(here, 'payloads')}:/payloads:ro`, OHA,
    '--no-tui', '--output-format', 'json', '-w', '-m', 'POST', '-t', '30s',
    '-H', 'Authorization: Bearer re_bench_key', '-H', 'Content-Type: application/json',
    '-D', `/payloads/${sc.file}`, '-z', `${seconds}s`, '-c', connections, '-q', String(rate), '--latency-correction',
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

export const requestsOf = (r: OhaResult) => Object.values(r.statusCodeDistribution ?? {}).reduce((a, b) => a + b, 0)
  + Object.values(r.errorDistribution ?? {}).reduce((a, b) => a + b, 0);
export const failedOf = (r: OhaResult) => Object.entries(r.statusCodeDistribution ?? {}).filter(([c]) => c !== '200').reduce((a, [, k]) => a + k, 0)
  + Object.values(r.errorDistribution ?? {}).reduce((a, b) => a + b, 0);

export function procStatus(): { rssMb: number; hwmMb: number; threads: number } {
  const s = sh(['exec', SERVER, 'cat', '/proc/1/status']);
  const kb = (k: string) => Number(new RegExp(`${k}:\\s+(\\d+)`).exec(s)?.[1] ?? NaN);
  return { rssMb: kb('VmRSS') / 1024, hwmMb: kb('VmHWM') / 1024, threads: kb('Threads') };
}
export function cgroup(): { usage: number; throttled: number; memPeakMb: number; memCurrentMb: number } {
  const stat = sh(['exec', SERVER, 'cat', '/sys/fs/cgroup/cpu.stat']);
  const f = (k: string) => Number(new RegExp(`^${k} (\\d+)`, 'm').exec(stat)?.[1] ?? NaN);
  const peak = Number(sh(['exec', SERVER, 'cat', '/sys/fs/cgroup/memory.peak'], true).trim());
  const cur = Number(sh(['exec', SERVER, 'cat', '/sys/fs/cgroup/memory.current'], true).trim());
  return { usage: f('usage_usec'), throttled: f('throttled_usec'), memPeakMb: peak / 1024 / 1024, memCurrentMb: cur / 1024 / 1024 };
}
