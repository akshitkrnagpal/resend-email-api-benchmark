// Renders results/chart.svg (static, for the README) from results/summary.json medians.
// Real dependencies only: throughput, CPU per request, peak memory and p99 latency.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

interface Median {
  mode: string; scenario: string; lang: string; phase: string; targetRps: number | null;
  rps: number; p50ms: number; p99ms: number; cpuMsPerReq: number; peakRssMb: number;
}

const resultsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'results');
const mode = process.argv[2] ?? 'real';
const { medians } = JSON.parse(readFileSync(join(resultsDir, 'summary.json'), 'utf8')) as { medians: Median[] };

// Categorical slots 1-4 of the validated palette, in fixed order.
const LANGS = [
  { key: 'ts', label: 'Node', color: '#2a78d6' },
  { key: 'ts-bun', label: 'Bun', color: '#eb6834' },
  { key: 'go', label: 'Go', color: '#1baf7a' },
  { key: 'rust', label: 'Rust', color: '#eda100' },
];
const SCENARIOS: [string, string][] = [['small', 'Small email (2 KB)'], ['large', 'Large email + attachments (730 KB)'], ['batch', 'Batch of 50']];
const METRICS: { phase: string; field: keyof Median; title: string; note: string; fmt: (v: number) => string }[] = [
  { phase: 'max', field: 'rps', title: 'Throughput per 1-CPU container', note: 'req/s · higher is better', fmt: (v) => (v >= 100 ? Math.round(v).toLocaleString('en-US') : v.toFixed(1)) },
  { phase: 'fixed', field: 'cpuMsPerReq', title: 'CPU time per request', note: 'ms · lower is better · same load for all', fmt: (v) => (v < 1 ? v.toFixed(3) : v.toFixed(1)) },
  { phase: 'fixed', field: 'peakRssMb', title: 'Peak memory (RSS)', note: 'MB · lower is better · same load for all', fmt: (v) => Math.round(v).toString() },
  { phase: 'fixed', field: 'p50ms', title: 'Median latency (p50)', note: 'ms · lower is better · same load for all', fmt: (v) => v.toFixed(1) },
  { phase: 'fixed', field: 'p99ms', title: 'Tail latency (p99)', note: 'ms · lower is better · same load for all', fmt: (v) => v.toFixed(1) },
];

const W = 960, PAD = 24, GAP = 16;
const colW = (W - PAD * 2 - GAP * 2) / 3;
const BAR_H = 14, ROW_H = 22, NAME_W = 44, PANEL_TOP = 26;
const panelH = PANEL_TOP + LANGS.length * ROW_H + 8;
const SECTION_H = 30 + panelH + 18;
const HEADER_H = 74;
const H = HEADER_H + METRICS.length * SECTION_H + 8;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const out: string[] = [];
out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">`);
out.push(`<rect width="${W}" height="${H}" rx="12" fill="#fcfcfb"/>`);
out.push(`<text x="${PAD}" y="34" font-size="18" font-weight="600" fill="#0b0b0b">Email API: Node vs Bun vs Go vs Rust ${mode === 'real' ? '(real Redis + Postgres + S3)' : '(in-memory dependencies)'}</text>`);
let lx = PAD;
for (const l of LANGS) {
  out.push(`<rect x="${lx}" y="50" width="10" height="10" rx="2" fill="${l.color}"/><text x="${lx + 15}" y="59" font-size="12" fill="#52514e">${l.label}</text>`);
  lx += 15 + l.label.length * 7 + 22;
}
out.push(`<text x="${W - PAD}" y="59" font-size="11" fill="#7a7974" text-anchor="end">median of 3 runs · 1 CPU / 2 GB per server</text>`);

METRICS.forEach((m, mi) => {
  const y0 = HEADER_H + mi * SECTION_H;
  out.push(`<text x="${PAD}" y="${y0 + 18}" font-size="14" font-weight="600" fill="#0b0b0b">${esc(m.title)}<tspan font-size="12" font-weight="400" fill="#7a7974">  ${esc(m.note)}</tspan></text>`);
  SCENARIOS.forEach(([sc, scLabel], si) => {
    const x0 = PAD + si * (colW + GAP);
    const py = y0 + 28;
    const rows = LANGS.map((l) => medians.find((r) => r.mode === mode && r.scenario === sc && r.lang === l.key && r.phase === m.phase));
    const vals = rows.map((r) => (r ? Number(r[m.field]) : 0));
    const max = Math.max(...vals);
    const rate = rows.find(Boolean)?.targetRps;
    out.push(`<rect x="${x0}" y="${py}" width="${colW}" height="${panelH}" rx="8" fill="#ffffff" stroke="#e6e5e0"/>`);
    out.push(`<text x="${x0 + 10}" y="${py + 17}" font-size="11" fill="#52514e">${esc(scLabel)}${m.phase === 'fixed' && rate ? ` · ${rate} req/s` : ''}</text>`);
    const trackW = colW - 20 - NAME_W - 6;
    rows.forEach((r, i) => {
      if (!r) return;
      const v = vals[i];
      const by = py + PANEL_TOP + i * ROW_H;
      const bw = Math.max(2, (v / max) * trackW * 0.78);
      const bx = x0 + 10 + NAME_W + 6;
      out.push(`<text x="${x0 + 10}" y="${by + 11}" font-size="11" fill="#52514e">${LANGS[i].label}</text>`);
      out.push(`<path d="M${bx} ${by}h${bw - 4}a4 4 0 0 1 4 4v${BAR_H - 8}a4 4 0 0 1 -4 4h${-(bw - 4)}z" fill="${LANGS[i].color}"/>`);
      out.push(`<text x="${bx + bw + 5}" y="${by + 11}" font-size="11" fill="#0b0b0b">${m.fmt(v)}</text>`);
    });
  });
});
out.push('</svg>');
const file = mode === 'real' ? 'chart.svg' : `chart-${mode}.svg`;
writeFileSync(join(resultsDir, file), out.join('\n'));
console.log(`wrote results/${file}`);
