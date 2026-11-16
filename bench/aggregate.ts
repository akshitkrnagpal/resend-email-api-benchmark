// Combines the fair-comparison runs in results/fair/ into medians (with min–max spread) and writes
// results/fair/fair-summary.json plus a readable results/fair/FAIR.md.
//   main-r1..r3.json        run.ts, one run per language each
//   prodlike-r1..r3/summary.json  prodlike.ts, one run per language each
//   capacity/summary.json   capacity.ts
//   inflight-s3-2000ms/summary.json
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'results', 'fair');
const LANGS = ['ts', 'ts-bun', 'go', 'rust'];
const NAMES: Record<string, string> = { ts: 'Node', 'ts-bun': 'Bun', go: 'Go', rust: 'Rust' };
const MAIN_RUNS = (process.env.MAIN_RUNS ?? 'main-r1,main-r2,main-r3').split(',');
const PROD_RUNS = (process.env.PROD_RUNS ?? 'prodlike-r1,prodlike-r2,prodlike-r3').split(',');

const readJson = <T>(p: string): T => JSON.parse(readFileSync(p, 'utf8')) as T;
const median = (xs: number[]) => {
  const s = [...xs].filter((x) => Number.isFinite(x)).sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length === 0 ? NaN : s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
interface Stat { median: number; min: number; max: number; n: number }
const stat = (xs: number[]): Stat => {
  const f = xs.filter((x) => Number.isFinite(x));
  return { median: median(f), min: Math.min(...f), max: Math.max(...f), n: f.length };
};

// ---- main benchmark
interface MainRun {
  lang: string; scenario: string; phase: string; rps: number; p50ms: number; p95ms: number; p99ms: number;
  cpuMsPerReq: number; cpuUtilization: number; peakRssMb: number; cgroupPeakMb: number; requests: number; ok: number;
}
const mainRuns: MainRun[] = MAIN_RUNS.filter((f) => existsSync(join(dir, `${f}.json`)))
  .flatMap((f) => readJson<{ runs: MainRun[] }>(join(dir, `${f}.json`)).runs);
const MAIN_METRICS = ['rps', 'p50ms', 'p95ms', 'p99ms', 'cpuMsPerReq', 'cpuUtilization', 'peakRssMb', 'cgroupPeakMb'] as const;
const main: Record<string, Record<string, Record<string, Record<string, Stat> & { failed: number }>>> = {};
for (const sc of ['small', 'large', 'batch']) {
  for (const ph of ['fixed', 'max']) {
    for (const l of LANGS) {
      const rs = mainRuns.filter((r) => r.scenario === sc && r.phase === ph && r.lang === l);
      if (rs.length === 0) continue;
      const entry = { failed: rs.reduce((n, r) => n + r.requests - r.ok, 0) } as Record<string, Stat> & { failed: number };
      for (const k of MAIN_METRICS) entry[k] = stat(rs.map((r) => r[k]));
      ((main[sc] ??= {})[ph] ??= {})[l] = entry;
    }
  }
}

// ---- prodlike / inflight
interface ClassStats { requests: number; failed: number; p50ms: number; p95ms: number; p99ms: number }
interface ProdRun {
  lang: string; peakRssMb: number; cgroupPeakMb: number; medianRssMb: number; cpuUtilization: number;
  classes: Record<string, ClassStats>;
}
const loadRuns = (names: string[]): ProdRun[] => names.filter((n) => existsSync(join(dir, n, 'summary.json')))
  .flatMap((n) => readJson<{ runs: ProdRun[] }>(join(dir, n, 'summary.json')).runs);
function summarizeProd(runs: ProdRun[]) {
  const out: Record<string, Record<string, Stat | number>> = {};
  for (const l of LANGS) {
    const rs = runs.filter((r) => r.lang === l);
    if (rs.length === 0) continue;
    const e: Record<string, Stat | number> = {
      runs: rs.length,
      cpuUtilization: stat(rs.map((r) => r.cpuUtilization)),
      typicalRssMb: stat(rs.map((r) => r.medianRssMb)),
      peakRssMb: stat(rs.map((r) => r.peakRssMb)),
      cgroupPeakMb: stat(rs.map((r) => r.cgroupPeakMb)),
      failed: rs.reduce((n, r) => n + Object.entries(r.classes).filter(([k]) => !k.startsWith('burst-')).reduce((a, [, c]) => a + c.failed, 0), 0),
    };
    for (const cls of Object.keys(rs[0].classes)) {
      e[`${cls}.p50ms`] = stat(rs.map((r) => r.classes[cls]?.p50ms ?? NaN));
      e[`${cls}.p99ms`] = stat(rs.map((r) => r.classes[cls]?.p99ms ?? NaN));
    }
    out[l] = e;
  }
  return out;
}
const prodlike = summarizeProd(loadRuns(PROD_RUNS));
const inflight = summarizeProd(loadRuns(['inflight-s3-2000ms']));

// ---- capacity
interface Cap { lang: string; k: number; steps: { k: number; pass: boolean; cpuUtilization: number; rssMb: number }[] }
const capFile = join(dir, 'capacity', 'summary.json');
const capCfg = existsSync(capFile) ? readJson<{ config: { MIX: Record<string, number>; SLO_P99_MS: number }; results: Cap[] }>(capFile) : null;
const mixRps = capCfg ? Object.values(capCfg.config.MIX).reduce((a, b) => a + b, 0) : NaN;
const capacity = Object.fromEntries((capCfg?.results ?? []).map((r) => [r.lang, {
  k: r.k, mixReqPerSec: r.k * mixRps,
  cpuAtCapacity: r.steps.find((s) => s.k === r.k)?.cpuUtilization ?? NaN,
  rssAtCapacityMb: r.steps.find((s) => s.k === r.k)?.rssMb ?? NaN,
}]));

writeFileSync(join(dir, 'fair-summary.json'), JSON.stringify({ sources: { MAIN_RUNS, PROD_RUNS }, main, prodlike, inflight, capacity }, null, 2));

// ---- markdown
const f = (s: Stat | number | undefined, d = 1) => {
  if (s === undefined) return '–';
  if (typeof s === 'number') return Number.isFinite(s) ? s.toFixed(d) : '–';
  if (!Number.isFinite(s.median)) return '–';
  return s.n > 1 ? `${s.median.toFixed(d)} (${s.min.toFixed(d)}–${s.max.toFixed(d)})` : s.median.toFixed(d);
};
const row = (label: string, cells: string[]) => `| ${label} | ${cells.join(' | ')} |`;
const head = `| | ${LANGS.map((l) => NAMES[l]).join(' | ')} |\n|---|${LANGS.map(() => '---:').join('|')}|`;
const md: string[] = ['# Fair comparison (results/fair)', '', 'Medians across runs, (min–max) in brackets.', ''];
md.push('## Main benchmark, same fixed load (785 small / 56 large / 18 batch req/s)', '', head);
for (const sc of ['small', 'large', 'batch']) {
  const g = (k: string, d: number) => LANGS.map((l) => f(main[sc]?.fixed?.[l]?.[k], d));
  md.push(row(`${sc}: CPU ms/req`, g('cpuMsPerReq', 3)), row(`${sc}: p50 ms`, g('p50ms', 1)), row(`${sc}: p99 ms`, g('p99ms', 1)),
    row(`${sc}: peak RSS MB`, g('peakRssMb', 0)), row(`${sc}: container peak MB`, g('cgroupPeakMb', 0)));
}
md.push('', '## Production-like (S3 40±20 ms, PG 2 ms, Redis 1 ms; mix + large bursts; 180 s)', '', head);
for (const [k, label, d] of [['cpuUtilization', 'CPU used', 2], ['typicalRssMb', 'typical RSS MB', 0], ['peakRssMb', 'peak RSS MB', 0], ['cgroupPeakMb', 'container peak MB', 0],
  ['small.p50ms', 'small p50 ms', 0], ['small.p99ms', 'small p99 ms', 0], ['burst-large.p50ms', 'burst large p50 ms', 0], ['burst-large.p99ms', 'burst large p99 ms', 0], ['failed', 'failed requests', 0]] as const) {
  md.push(row(label, LANGS.map((l) => f(prodlike[l]?.[k], d))));
}
md.push('', '## Large emails with ~112 requests in flight (S3 held 2 s)', '', head);
for (const [k, label] of [['typicalRssMb', 'typical RSS MB'], ['peakRssMb', 'peak RSS MB'], ['cgroupPeakMb', 'container peak MB']] as const) {
  md.push(row(label, LANGS.map((l) => f(inflight[l]?.[k], 0))));
}
if (capCfg) {
  md.push('', `## Sustainable capacity per task (p99 <= ${capCfg.config.SLO_P99_MS} ms, 0 errors, production-like deps)`, '', head,
    row('load factor k', LANGS.map((l) => f(capacity[l]?.k, 2))),
    row('req/s of the mix', LANGS.map((l) => f(capacity[l]?.mixReqPerSec, 0))),
    row('tasks for the same traffic (Node = 1.00)', LANGS.map((l) => f((capacity.ts?.k ?? NaN) / (capacity[l]?.k ?? NaN), 2))));
}
writeFileSync(join(dir, 'FAIR.md'), md.join('\n') + '\n');
console.log(md.join('\n'));
