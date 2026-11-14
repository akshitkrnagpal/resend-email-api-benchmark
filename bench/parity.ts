// Parity harness, in the spirit of Resend's: send the same request to every server and
// compare status, response body, Postgres rows and S3 objects. TS is the reference.
//
// Usage: node parity.ts   (expects servers on 127.0.0.1:18081 ts, :18082 go, :18083 rust, :18084 bun)
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import pg from 'pg';

const here = dirname(fileURLToPath(import.meta.url));
const SERVERS = {
  ts: 'http://127.0.0.1:18081',
  go: 'http://127.0.0.1:18082',
  rust: 'http://127.0.0.1:18083',
  bun: 'http://127.0.0.1:18084',
};
type Lang = keyof typeof SERVERS;
const LANGS = Object.keys(SERVERS) as Lang[];

const db = new pg.Pool({ connectionString: 'postgres://bench:bench@127.0.0.1:55433/bench', max: 4 });
const s3 = new S3Client({
  endpoint: 'http://127.0.0.1:57070',
  region: 'us-east-1',
  forcePathStyle: true,
  credentials: { accessKeyId: 'bench', secretAccessKey: 'benchsecret' },
});

interface Fixture {
  name: string;
  method?: string;
  path?: string;
  headers?: Record<string, string>;
  body?: string; // raw body; objects are JSON.stringified
  idempotent?: 'replay' | 'conflict';
}

const AUTH = { authorization: 'Bearer re_bench_key', 'content-type': 'application/json' };
const base = { from: 'Acme <hi@acme.dev>', to: 'user@example.com', subject: 'Hello' };
const j = (v: unknown) => JSON.stringify(v);
const payload = (f: string) => readFileSync(join(here, 'payloads', f), 'utf8');

const tricky = `<!doctype html><HTML><Head><Title>t</title><STYLE>p{}</style></head><body>
<!-- comment <p>hidden</p> --><SCRIPT>var x = "<p>no</p>";</script>
<div data-skip-in-text="true">skip <div>nested <div>deep</div></div> still</div>after skip
<P>Caf&eacute; &amp; cr&egrave;me &copy; &#169; &#xA9; &#x1F600; &#xD800; &#0; &#1234567890; &bogus; &amp &#x; &#12a;</P>
<ul><LI>one<li>two</li></ul><table><tr><td>a</td><td>b</td></tr></table>
line<br>break<br/>again   with    spaces\tand\ttabs
<span>unicode: 日本語 ✓ — “quotes”</span> 1 < 2 and 3 > 2
<img src="x" data-skip-in-text="true">kept after void
<a href="https://acme.dev">link text</a> trailing <unclosed`;

const coercion = [300, -1, 1.9, -1.5, '42', ' 7 ', '', 'abc', null, true, false, '0x10', 1e21, '1e3',
  'Infinity', '-Infinity', ' 12 ', '0b101', '-0x10', '.5e1', '5.', '0o17', 256.99, -256.5,
  9007199254740993, 1.7976931348623157e308, '1_000', '  ', [5], { a: 1 }, 'NaN', '+12', '1e', 'inf',
  [], [[7]], ['9'], [null], [true], [1, 2], [{}], [' 3 '], [[]], [300]];

const fixtures: Fixture[] = [
  { name: 'payload small', body: payload('small.json') },
  { name: 'payload large (Buffer + wrapped base64)', body: payload('large.json') },
  { name: 'payload batch (50)', path: '/emails/batch', body: payload('batch.json') },
  { name: 'text only', body: j({ ...base, text: 'plain body\nline 2' }) },
  { name: 'html and text', body: j({ ...base, html: '<p>x</p>', text: 'given' }) },
  { name: 'empty html', body: j({ ...base, html: '' }) },
  { name: 'tricky html', body: j({ ...base, html: tricky }) },
  { name: 'buffer coercion', body: j({ ...base, text: 't', attachments: [{ filename: 'c.bin', content: { type: 'Buffer', data: coercion } }] }) },
  { name: 'buffer empty', body: j({ ...base, text: 't', attachments: [{ filename: 'e.bin', content: { type: 'Buffer', data: [] } }] }) },
  { name: 'buffer extra keys + dup', body: '{"from":"a@b.co","to":"c@d.co","subject":"s","text":"t","attachments":[{"filename":"x","content":{"data":[1,2],"type":"Buffer","data":[3,4,5],"x":1}}]}' },
  { name: 'base64 variants', body: j({ ...base, text: 't', attachments: [
    { filename: 'a', content: 'aGVsbG8=' }, { filename: 'b', content: 'aGVsbG8' },
    { filename: 'c', content: 'aGVs\r\nbG8=' }, { filename: 'd', content: '-_-_+/+/' },
    { filename: 'e', content: 'aGV!sbG8=' }, { filename: 'f', content: 'YQ==YQ==' },
    { filename: 'g', content: 'aGVsbG8hY' }, { filename: 'h', content: 'aGVsbG9=' },
    { filename: 'i', content: '' }, { filename: 'j', content: 'Zm9v YmFy\tYmF6' },
  ] }) },
  { name: 'addresses', body: j({ from: '  Acme Team <team@acme.dev>  ', to: ['A <a@x.io>', ' b@y.io '], cc: 'c@z.io', bcc: [], reply_to: ['R <r@acme.dev>'], subject: 'addr', text: 't' }) },
  { name: 'unicode subject + escapes', body: '{"from":"a@b.co","to":"c@d.co","subject":"Caf\\u00e9 \\ud83c\\udf89 \\"quoted\\" \\\\ tab\\t","text":"\\u65e5\\u672c"}' },
  { name: 'tags', body: j({ ...base, text: 't', tags: [{ name: 'a_b-1', value: 'X' }, { name: 'n', value: 'v' }] }) },
  { name: 'duplicate keys (last wins)', body: '{"from":"x@y.co","to":"c@d.co","subject":"first","subject":"second","text":"t"}' },
  { name: 'null fields are absent', body: j({ ...base, text: 't', cc: null, attachments: null, tags: null, html: null }) },
  { name: 'unknown fields ignored', body: j({ ...base, text: 't', headers: { 'X-A': '1' }, scheduled_at: 'tomorrow' }) },
  { name: 'whitespace around body', body: `  \n${j({ ...base, text: 't' })}\n  ` },
  // validation errors
  { name: 'case-sensitive keys', body: j({ From: 'a@b.co', to: 'c@d.co', subject: 's', text: 't' }) },
  { name: 'missing from', body: j({ to: 'c@d.co', subject: 's', text: 't' }) },
  { name: 'from number', body: j({ ...base, from: 5, text: 't' }) },
  { name: 'from invalid', body: j({ ...base, from: 'Acme <nope>', text: 't' }) },
  { name: 'to missing', body: j({ from: 'a@b.co', subject: 's', text: 't' }) },
  { name: 'to empty', body: j({ ...base, to: [], text: 't' }) },
  { name: 'to 51', body: j({ ...base, to: Array.from({ length: 51 }, (_, i) => `u${i}@x.io`), text: 't' }) },
  { name: 'to mixed types', body: j({ ...base, to: ['a@b.co', 3], text: 't' }) },
  { name: 'to object', body: j({ ...base, to: { a: 1 }, text: 't' }) },
  { name: 'bad addresses', body: j({ ...base, to: ['a@b', '@x.io', 'a@.io', 'a@x.io-', 'a b@x.io', 'ü@x.io'], text: 't' }) },
  { name: 'cc invalid', body: j({ ...base, cc: ['ok@x.io', 'bad'], text: 't' }) },
  { name: 'subject missing', body: j({ from: 'a@b.co', to: 'c@d.co', text: 't' }) },
  { name: 'subject number', body: j({ ...base, subject: 12, text: 't' }) },
  { name: 'html number', body: j({ ...base, html: 1 }) },
  { name: 'text bool', body: j({ ...base, html: '<p>x</p>', text: false }) },
  { name: 'no content', body: j(base) },
  { name: 'attachments object', body: j({ ...base, text: 't', attachments: { filename: 'x' } }) },
  { name: 'attachments 21', body: j({ ...base, text: 't', attachments: Array.from({ length: 21 }, () => ({ filename: 'f', content: '' })) }) },
  { name: 'attachment string item', body: j({ ...base, text: 't', attachments: ['x'] }) },
  { name: 'attachment no filename', body: j({ ...base, text: 't', attachments: [{ content: 'aGk=' }] }) },
  { name: 'attachment empty filename', body: j({ ...base, text: 't', attachments: [{ filename: '', content: 'aGk=' }] }) },
  { name: 'attachment content number', body: j({ ...base, text: 't', attachments: [{ filename: 'x', content: 5 }] }) },
  { name: 'attachment buffer data string', body: j({ ...base, text: 't', attachments: [{ filename: 'x', content: { type: 'Buffer', data: 'aGk=' } }] }) },
  { name: 'attachment wrong type', body: j({ ...base, text: 't', attachments: [{ filename: 'x', content: { type: 'Uint8Array', data: [1] } }] }) },
  { name: 'tags not array', body: j({ ...base, text: 't', tags: 'x' }) },
  { name: 'tag item string', body: j({ ...base, text: 't', tags: ['x'] }) },
  { name: 'tag bad name', body: j({ ...base, text: 't', tags: [{ name: 'has space', value: 'v' }] }) },
  { name: 'tag bad value', body: j({ ...base, text: 't', tags: [{ name: 'n', value: '' }] }) },
  { name: 'error order: from before attachments', body: j({ to: 'c@d.co', subject: 's', attachments: 5 }) },
  { name: 'body array', body: j([base]) },
  { name: 'body string', body: '"hello"' },
  { name: 'body null', body: 'null' },
  { name: 'invalid json', body: '{"from": "a@b.co",' },
  { name: 'trailing garbage', body: `${j({ ...base, text: 't' })} x` },
  { name: 'empty body', body: '' },
  { name: 'json number out of range', body: '{"from":"a@b.co","to":"c@d.co","subject":"s","text":"t","attachments":[{"filename":"x","content":{"type":"Buffer","data":[1e400]}}]}' },
  // batch
  { name: 'batch ok', path: '/emails/batch', body: j([{ ...base, text: 'a' }, { ...base, html: '<b>b</b>' }]) },
  { name: 'batch not array', path: '/emails/batch', body: j({ ...base, text: 't' }) },
  { name: 'batch empty', path: '/emails/batch', body: '[]' },
  { name: 'batch 101', path: '/emails/batch', body: j(Array.from({ length: 101 }, () => ({ ...base, text: 't' }))) },
  { name: 'batch attachments', path: '/emails/batch', body: j([{ ...base, text: 't' }, { ...base, text: 't', attachments: [] }]) },
  { name: 'batch item invalid', path: '/emails/batch', body: j([{ ...base, text: 't' }, { ...base, subject: 3, text: 't' }]) },
  { name: 'batch item not object', path: '/emails/batch', body: j([{ ...base, text: 't' }, 'x']) },
  // http
  { name: 'no auth', headers: { 'content-type': 'application/json' }, body: j({ ...base, text: 't' }) },
  { name: 'wrong key', headers: { authorization: 'Bearer re_nope' }, body: j({ ...base, text: 't' }) },
  { name: 'basic auth', headers: { authorization: 'Basic re_bench_key' }, body: j({ ...base, text: 't' }) },
  { name: 'unknown route', path: '/domains', body: '{}' },
  { name: 'GET /emails', method: 'GET', path: '/emails' },
  { name: 'idempotency replay', idempotent: 'replay', body: j({ ...base, text: 'idem' }) },
  { name: 'idempotency conflict', idempotent: 'conflict', body: j({ ...base, text: 'idem' }) },
];

interface Captured {
  status: number;
  body: string;
  ids: string[];
}

const UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g;

async function send(url: string, f: Fixture, extra: Record<string, string> = {}, body = f.body): Promise<Captured> {
  const res = await fetch(url + (f.path ?? '/emails'), {
    method: f.method ?? 'POST',
    headers: { ...(f.headers ?? AUTH), ...extra },
    body: (f.method ?? 'POST') === 'GET' ? undefined : body,
  });
  const text = await res.text();
  return { status: res.status, body: text, ids: text.match(UUID) ?? [] };
}

async function run(lang: Lang, f: Fixture, runId: string): Promise<Captured> {
  const url = SERVERS[lang];
  if (!f.idempotent) return send(url, f);
  const key = `${runId}-${lang}-${f.name}`;
  const first = await send(url, f, { 'idempotency-key': key });
  const second = f.idempotent === 'replay'
    ? await send(url, f, { 'idempotency-key': key })
    : await send(url, f, { 'idempotency-key': key }, j({ ...base, text: 'different' }));
  const sameId = first.ids[0] !== undefined && first.ids[0] === second.ids[0];
  return {
    status: second.status,
    body: `${first.status} ${first.body.replace(UUID, '<id>')} | ${second.status} ${second.body.replace(UUID, '<id>')} | sameId=${sameId}`,
    ids: first.ids,
  };
}

async function sideEffects(ids: string[]): Promise<string[]> {
  const out: string[] = [];
  for (const id of ids) {
    const { rows } = await db.query(
      `SELECT api_key, from_addr, to_addrs, subject, text_body, html_size, attachment_count, attachment_bytes, s3_key
       FROM emails WHERE id = $1`, [id]);
    const row = rows[0] as Record<string, unknown> | undefined;
    let obj = '<missing>';
    try {
      const res = await s3.send(new GetObjectCommand({ Bucket: 'emails', Key: `emails/${id}.eml` }));
      obj = Buffer.from(await res.Body!.transformToByteArray()).toString('utf8');
    } catch {
      obj = '<missing>';
    }
    out.push(JSON.stringify({ row: row ? { ...row, s3_key: String(row.s3_key).replace(id, '<id>') } : null, obj }));
  }
  return out;
}

function firstDiff(a: string, b: string): string {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  const ctx = (s: string) => JSON.stringify(s.slice(Math.max(0, i - 60), i + 80));
  return `at char ${i}\n      ts:   ${ctx(a)}\n      other:${ctx(b)}`;
}

const runId = Date.now().toString(36);
let failures = 0;
for (const f of fixtures) {
  const results = await Promise.all(LANGS.map((l) => run(l, f, runId)));
  const effects = await Promise.all(results.map((r) => sideEffects(r.ids)));
  const ref = results[0];
  const problems: string[] = [];
  LANGS.slice(1).forEach((lang, k) => {
    const r = results[k + 1];
    if (r.status !== ref.status) problems.push(`${lang}: status ${r.status} != ts ${ref.status}`);
    const nb = (s: string) => s.replace(UUID, '<id>');
    if (nb(r.body) !== nb(ref.body)) problems.push(`${lang}: body differs ${firstDiff(nb(ref.body), nb(r.body))}`);
    const e = effects[k + 1];
    if (e.length !== effects[0].length) problems.push(`${lang}: ${e.length} side effects != ts ${effects[0].length}`);
    e.forEach((x, n) => {
      if (x !== effects[0][n]) problems.push(`${lang}: db row / s3 object #${n} differs ${firstDiff(effects[0][n], x)}`);
    });
  });
  const tag = problems.length === 0 ? 'PASS' : 'FAIL';
  if (problems.length > 0) failures++;
  console.log(`${tag}  ${f.name}  [${ref.status}${effects[0].length ? `, ${effects[0].length} emails checked` : ''}]`);
  for (const p of problems) console.log(`      ${p}`);
}
console.log(`\n${fixtures.length - failures}/${fixtures.length} fixtures identical across ${LANGS.join(', ')}`);
await db.end();
process.exit(failures === 0 ? 0 : 1);
