// Generates deterministic benchmark payloads into bench/payloads/.
//   small.json  typical transactional email (~5 KB, HTML only, so HTML->text runs)
//   large.json  newsletter HTML (~60 KB) + a 150 KB attachment sent as a serialized Node
//               Buffer and a 100 KB base64 attachment wrapped at 76 columns (~800 KB body)
//   batch.json  50 small emails for POST /emails/batch
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), 'payloads');
mkdirSync(outDir, { recursive: true });

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBytes(n: number, seed: number): Buffer {
  const rnd = mulberry32(seed);
  const b = Buffer.alloc(n);
  for (let i = 0; i < n; i++) b[i] = Math.floor(rnd() * 256);
  return b;
}

function transactionalHtml(name: string, code: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Confirm your account</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f6f9fc; }
    .container { max-width: 560px; margin: 0 auto; padding: 32px; background: #ffffff; }
    .button { background: #000; color: #fff; padding: 12px 20px; border-radius: 6px; text-decoration: none; }
    .muted { color: #8898aa; font-size: 12px; }
  </style>
</head>
<body>
  <div style="display:none" data-skip-in-text="true">Your Acme verification code is ${code} &mdash; preview text</div>
  <table class="container" role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td>
      <img src="https://cdn.acme.dev/logo.png" alt="Acme" width="96" height="32">
      <h1>Welcome to Acme, ${name}!</h1>
      <p>Thanks for signing up. Please confirm your email address to finish creating your account.
         Your verification code is <strong>${code}</strong>.</p>
      <p><a class="button" href="https://acme.dev/verify?code=${code}&amp;utm_source=email">Confirm email address</a></p>
      <p>Or copy and paste this link into your browser:<br>
         https://acme.dev/verify?code=${code}</p>
      <ul>
        <li>Invite your team &amp; collaborators</li>
        <li>Connect your domain</li>
        <li>Send your first email in &lt;5 minutes</li>
      </ul>
      <hr>
      <p class="muted">If you didn&#39;t create an account, you can safely ignore this email.<br>
         &copy; 2026 Acme Inc. &middot; 2261 Market Street #5039, San Francisco, CA 94114</p>
    </td></tr>
  </table>
  <!-- tracking pixel -->
  <img src="https://t.acme.dev/open/${code}.gif" width="1" height="1" alt="">
</body>
</html>`;
}

function smallEmail(i: number): Record<string, unknown> {
  const code = String(100000 + ((i * 7919) % 900000));
  return {
    from: 'Acme <onboarding@acme.dev>',
    to: [`user${i}@example.com`],
    subject: `Confirm your Acme account (${code})`,
    html: transactionalHtml(`User ${i}`, code),
    tags: [
      { name: 'category', value: 'confirm_email' },
      { name: 'env', value: 'production' },
    ],
  };
}

function newsletterHtml(): string {
  const rnd = mulberry32(42);
  const words = ['email', 'deliverability', 'domain', 'DKIM', 'SPF', 'API', 'webhook', 'broadcast',
    'audience', 'template', 'React', 'latency', 'inbox', 'open-rate', 'bounce', 'Go', 'Node'];
  const sentence = () => {
    const n = 8 + Math.floor(rnd() * 14);
    const w: string[] = [];
    for (let i = 0; i < n; i++) w.push(words[Math.floor(rnd() * words.length)]);
    return w.join(' ') + '.';
  };
  const parts: string[] = ['<html><head><title>Weekly</title><style>p{margin:0 0 12px}</style></head><body>'];
  parts.push('<div data-skip-in-text="true"><div>preheader</div> hidden &amp; nested</div>');
  for (let s = 0; s < 60; s++) {
    parts.push(`<h2>Section ${s + 1}: ${sentence()}</h2>`);
    parts.push(`<p>${sentence()} ${sentence()} <a href="https://acme.dev/blog/${s}">Read more &rarr;</a></p>`);
    parts.push(`<table><tr><td>${sentence()}</td><td><b>${sentence()}</b></td></tr></table>`);
    parts.push(`<ul><li>${sentence()}</li><li>${sentence()} &amp; ${sentence()}</li></ul>`);
  }
  parts.push('<p>Unsubscribe &#183; Preferences &#x2014; caf&eacute; &#127881;</p></body></html>');
  return parts.join('\n');
}

const report = randomBytes(150 * 1024, 7);
const logo = randomBytes(100 * 1024, 11);
const logoB64 = (logo.toString('base64').match(/.{1,76}/g) ?? []).join('\n');

const large = {
  from: 'Acme Weekly <newsletter@acme.dev>',
  to: ['reader@example.com'],
  cc: ['archive@acme.dev'],
  subject: 'This week at Acme',
  html: newsletterHtml(),
  attachments: [
    // What the Node SDK sends for a Buffer: JSON.stringify(buffer).
    { filename: 'report.pdf', content: JSON.parse(JSON.stringify(report)) },
    { filename: 'logo.png', content: logoB64 },
  ],
  tags: [{ name: 'category', value: 'newsletter' }],
};

const batch = Array.from({ length: 50 }, (_, i) => smallEmail(i));

const write = (name: string, v: unknown) => {
  const s = JSON.stringify(v);
  writeFileSync(join(outDir, name), s);
  console.log(`${name}: ${(Buffer.byteLength(s) / 1024).toFixed(1)} KB`);
};
write('small.json', smallEmail(1));
write('large.json', large);
write('batch.json', batch);
