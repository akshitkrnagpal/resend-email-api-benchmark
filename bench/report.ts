// Builds results/report.html (interactive charts + table) from the medians in results/summary.json.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const resultsDir = join(here, '..', 'results');
const { medians } = JSON.parse(readFileSync(join(resultsDir, 'summary.json'), 'utf8')) as { medians: unknown[] };
const html = readFileSync(join(here, 'report.template.html'), 'utf8').replace('__DATA__', JSON.stringify(medians));
writeFileSync(join(resultsDir, 'report.html'), html);
console.log(`wrote results/report.html (${medians.length} medians)`);
