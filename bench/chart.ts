// Renders results/fair/chart.svg (static, for the README) from results/fair/fair-summary.json
// (written by aggregate.ts). Three rows: CPU per request at the same load, memory per task,
// production-like latency. Bars are medians; the thin line on each bar spans min–max across runs.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

interface Stat { median: number; min: number; max: number; n: number }
type Entry = Record<string, Stat | number>;
interface Summary {
  main: Record<string, Record<string, Record<string, Entry>>>;
  prodlike: Record<string, Entry>;
  inflight: Record<string, Entry>;
}

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'results', 'fair');
const s = JSON.parse(readFileSync(join(dir, 'fair-summary.json'), 'utf8')) as Summary;

// Categorical slots 1-4 of the validated palette, in fixed order.
const LANGS = [
  { key: 'ts', label: 'Node', color: '#2a78d6' },
  { key: 'ts-bun', label: 'Bun', color: '#eb6834' },
  { key: 'go', label: 'Go', color: '#1baf7a' },
  { key: 'rust', label: 'Rust', color: '#eda100' },
];
const asStat = (v: Stat | number | undefined): Stat | undefined => (v !== undefined && typeof v !== 'number' ? v : undefined);
interface Panel { label: string; get: (lang: string) => Stat | undefined; fmt: (v: number) => string }
interface Row { title: string; note: string; panels: Panel[] }
const ms = (v: number) => (v < 1 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : Math.round(v).toString());
const mb = (v: number) => Math.round(v).toString();
const ROWS: Row[] = [
  {
    title: 'CPU time per request', note: 'ms · lower is better · same fixed load for all four',
    panels: [
      { label: 'Small email (2 KB) · 785 req/s', get: (l) => asStat(s.main.small?.fixed?.[l]?.cpuMsPerReq), fmt: ms },
      { label: 'Large email (730 KB) · 56 req/s', get: (l) => asStat(s.main.large?.fixed?.[l]?.cpuMsPerReq), fmt: ms },
      { label: 'Batch of 50 · 18 req/s', get: (l) => asStat(s.main.batch?.fixed?.[l]?.cpuMsPerReq), fmt: ms },
    ],
  },
  {
    title: 'Memory per task', note: 'MB · lower is better',
    panels: [
      { label: 'Production-like, typical', get: (l) => asStat(s.prodlike[l]?.typicalRssMb), fmt: mb },
      { label: 'Production-like, peak (container)', get: (l) => asStat(s.prodlike[l]?.cgroupPeakMb), fmt: mb },
      { label: '~112 large emails in flight, typical', get: (l) => asStat(s.inflight[l]?.typicalRssMb), fmt: mb },
    ],
  },
  {
    title: 'Latency, production-like', note: 'ms · lower is better · S3 ~40 ms, Postgres 2 ms, Redis 1 ms',
    panels: [
      { label: 'Small email, median', get: (l) => asStat(s.prodlike[l]?.['small.p50ms']), fmt: ms },
      { label: 'Small email, p99', get: (l) => asStat(s.prodlike[l]?.['small.p99ms']), fmt: ms },
      { label: 'Large email, median', get: (l) => asStat(s.prodlike[l]?.['large.p50ms']), fmt: ms },
    ],
  },
];

const W = 960, PAD = 24, GAP = 16;
const colW = (W - PAD * 2 - GAP * 2) / 3;
const BAR_H = 14, ROW_H = 22, NAME_W = 44, PANEL_TOP = 26;
const panelH = PANEL_TOP + LANGS.length * ROW_H + 8;
const SECTION_H = 30 + panelH + 18;
const HEADER_H = 74;
const H = HEADER_H + ROWS.length * SECTION_H + 8;
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const out: string[] = [];
out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">`);
out.push(`<rect width="${W}" height="${H}" rx="12" fill="#fcfcfb"/>`);
out.push(`<text x="${PAD}" y="34" font-size="18" font-weight="600" fill="#0b0b0b">Email API: Node vs Bun vs Go vs Rust, each in its best version</text>`);
let lx = PAD;
for (const l of LANGS) {
  out.push(`<rect x="${lx}" y="50" width="10" height="10" rx="2" fill="${l.color}"/><text x="${lx + 15}" y="59" font-size="12" fill="#52514e">${l.label}</text>`);
  lx += 15 + l.label.length * 7 + 22;
}
out.push(`<text x="${W - PAD}" y="59" font-size="11" fill="#7a7974" text-anchor="end">median of 3 runs (line: min–max) · 1 CPU / 2 GB per server</text>`);

ROWS.forEach((row, ri) => {
  const y0 = HEADER_H + ri * SECTION_H;
  out.push(`<text x="${PAD}" y="${y0 + 18}" font-size="14" font-weight="600" fill="#0b0b0b">${esc(row.title)}<tspan font-size="12" font-weight="400" fill="#7a7974">  ${esc(row.note)}</tspan></text>`);
  row.panels.forEach((p, pi) => {
    const x0 = PAD + pi * (colW + GAP);
    const py = y0 + 28;
    const stats = LANGS.map((l) => p.get(l.key));
    const max = Math.max(...stats.map((st) => (st ? Math.max(st.median, st.max) : 0)));
    out.push(`<rect x="${x0}" y="${py}" width="${colW}" height="${panelH}" rx="8" fill="#ffffff" stroke="#e6e5e0"/>`);
    out.push(`<text x="${x0 + 10}" y="${py + 17}" font-size="11" fill="#52514e">${esc(p.label)}</text>`);
    const trackW = (colW - 20 - NAME_W - 6) * 0.74;
    const bx = x0 + 10 + NAME_W + 6;
    stats.forEach((st, i) => {
      const by = py + PANEL_TOP + i * ROW_H;
      out.push(`<text x="${x0 + 10}" y="${by + 11}" font-size="11" fill="#52514e">${LANGS[i].label}</text>`);
      if (!st || !Number.isFinite(st.median)) return;
      const w = (v: number) => Math.max(2, (v / max) * trackW);
      const bw = w(st.median);
      out.push(`<path d="M${bx} ${by}h${bw - 4}a4 4 0 0 1 4 4v${BAR_H - 8}a4 4 0 0 1 -4 4h${-(bw - 4)}z" fill="${LANGS[i].color}"/>`);
      if (st.n > 1 && st.max > st.min) {
        out.push(`<line x1="${bx + w(st.min)}" x2="${bx + w(st.max)}" y1="${by + BAR_H / 2}" y2="${by + BAR_H / 2}" stroke="#0b0b0b" stroke-opacity="0.45" stroke-width="1.5"/>`);
      }
      const labelX = bx + Math.max(bw, st.n > 1 ? w(st.max) : 0) + 5;
      out.push(`<text x="${labelX}" y="${by + 11}" font-size="11" fill="#0b0b0b">${p.fmt(st.median)}</text>`);
    });
  });
});
out.push('</svg>');
writeFileSync(join(dir, 'chart.svg'), out.join('\n'));
console.log('wrote results/fair/chart.svg');
