import { htmlToText } from './htmltotext.ts';

export class ValidationError extends Error {}

export interface Attachment {
  filename: string;
  content: Buffer;
}

export interface Tag {
  name: string;
  value: string;
}

export interface NormalizedEmail {
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  replyTo: string[];
  subject: string;
  html: string;
  text: string;
  attachments: Attachment[];
  tags: Tag[];
}

export const MAX_BYTES = 40 * 1024 * 1024;
const MAX_ADDRESSES = 50;
const MAX_ATTACHMENTS = 20;
const ADDRESS_FORMAT =
  'The email address needs to follow the `email@example.com` or `Name <email@example.com>` format.';

export function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function isAsciiSpace(c: number): boolean {
  return c === 32 || c === 9 || c === 10 || c === 13 || c === 12;
}

function asciiTrim(s: string): string {
  let a = 0;
  let b = s.length;
  while (a < b && isAsciiSpace(s.charCodeAt(a))) a++;
  while (b > a && isAsciiSpace(s.charCodeAt(b - 1))) b--;
  return s.slice(a, b);
}

function isValidAddress(raw: string): boolean {
  let s = asciiTrim(raw);
  if (s.endsWith('>')) {
    const lt = s.lastIndexOf('<');
    if (lt < 0) return false;
    s = asciiTrim(s.slice(lt + 1, s.length - 1));
  }
  if (s.length === 0 || s.length > 254) return false;
  let at = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c <= 32 || c >= 127) return false;
    if (c === 64) {
      if (at >= 0) return false;
      at = i;
    }
  }
  if (at < 1 || at > 64) return false;
  const domain = s.slice(at + 1);
  if (!domain.includes('.')) return false;
  const first = domain[0];
  const last = domain[domain.length - 1];
  return first !== '.' && first !== '-' && last !== '.' && last !== '-';
}

function addressList(body: Record<string, unknown>, field: string, required: boolean): string[] {
  const v = body[field];
  if (v === undefined || v === null) {
    if (required) throw new ValidationError(`\`${field}\` is required`);
    return [];
  }
  let list: string[];
  if (typeof v === 'string') {
    list = [v];
  } else if (Array.isArray(v) && v.every((x) => typeof x === 'string')) {
    list = v;
  } else {
    throw new ValidationError(`\`${field}\` must be a string or an array of strings`);
  }
  if ((required && list.length === 0) || list.length > MAX_ADDRESSES) {
    throw new ValidationError(`\`${field}\` must contain between 1 and 50 addresses`);
  }
  for (const a of list) {
    if (!isValidAddress(a)) throw new ValidationError(`Invalid \`${field}\` field. ${ADDRESS_FORMAT}`);
  }
  return list.map(asciiTrim);
}

function optionalString(body: Record<string, unknown>, field: string): string | undefined {
  const v = body[field];
  if (v === undefined || v === null) return undefined;
  if (typeof v !== 'string') throw new ValidationError(`\`${field}\` must be a string`);
  return v;
}

function attachments(v: unknown): Attachment[] {
  if (v === undefined || v === null) return [];
  if (!Array.isArray(v)) throw new ValidationError('`attachments` must be an array');
  if (v.length > MAX_ATTACHMENTS) throw new ValidationError('`attachments` can contain at most 20 items');
  const out: Attachment[] = [];
  let total = 0;
  v.forEach((a: unknown, i: number) => {
    if (!isObject(a)) throw new ValidationError(`\`attachments[${i}]\` must be an object`);
    const filename = a.filename;
    if (typeof filename !== 'string' || filename.length === 0) {
      throw new ValidationError(`\`attachments[${i}].filename\` is required`);
    }
    const c = a.content;
    let content: Buffer;
    if (typeof c === 'string') {
      content = Buffer.from(c, 'base64');
    } else if (isObject(c) && c.type === 'Buffer' && Array.isArray(c.data)) {
      // A Node Buffer serialized by JSON.stringify. Buffer.from coerces each element
      // like a Uint8Array store (ToNumber, then modulo 256); that is the quirk Go/Rust replicate.
      content = Buffer.from(c.data as number[]);
    } else {
      throw new ValidationError(`\`attachments[${i}].content\` must be a base64 string or a Buffer`);
    }
    total += content.length;
    if (total > MAX_BYTES) throw new ValidationError('Attachments exceed the 40MB limit');
    out.push({ filename, content });
  });
  return out;
}

const TAG_TOKEN = /^[A-Za-z0-9_-]{1,256}$/;

function tags(v: unknown): Tag[] {
  if (v === undefined || v === null) return [];
  if (!Array.isArray(v)) throw new ValidationError('`tags` must be an array');
  return v.map((t: unknown, i: number) => {
    if (!isObject(t)) throw new ValidationError(`\`tags[${i}]\` must be an object`);
    const { name, value } = t;
    if (typeof name !== 'string' || !TAG_TOKEN.test(name)) {
      throw new ValidationError(`\`tags[${i}].name\` must only contain ASCII letters, numbers, underscores, or dashes`);
    }
    if (typeof value !== 'string' || !TAG_TOKEN.test(value)) {
      throw new ValidationError(`\`tags[${i}].value\` must only contain ASCII letters, numbers, underscores, or dashes`);
    }
    return { name, value };
  });
}

export function normalizeEmail(body: unknown): NormalizedEmail {
  if (!isObject(body)) throw new ValidationError('Request body must be a JSON object');

  const from = body.from;
  if (from === undefined || from === null) throw new ValidationError('`from` is required');
  if (typeof from !== 'string') throw new ValidationError('`from` must be a string');
  if (!isValidAddress(from)) throw new ValidationError(`Invalid \`from\` field. ${ADDRESS_FORMAT}`);

  const to = addressList(body, 'to', true);
  const cc = addressList(body, 'cc', false);
  const bcc = addressList(body, 'bcc', false);
  const replyTo = addressList(body, 'reply_to', false);

  const subject = body.subject;
  if (subject === undefined || subject === null) throw new ValidationError('`subject` is required');
  if (typeof subject !== 'string') throw new ValidationError('`subject` must be a string');

  const html = optionalString(body, 'html');
  const text = optionalString(body, 'text');
  if (html === undefined && text === undefined) {
    throw new ValidationError('Either `html` or `text` must be provided');
  }

  const atts = attachments(body.attachments);
  const tagList = tags(body.tags);

  return {
    from: asciiTrim(from),
    to,
    cc,
    bcc,
    replyTo,
    subject,
    html: html ?? '',
    text: text ?? htmlToText(html ?? ''),
    attachments: atts,
    tags: tagList,
  };
}

export function buildEml(e: NormalizedEmail): Buffer {
  const lines: string[] = [`From: ${e.from}`, `To: ${e.to.join(', ')}`];
  if (e.cc.length > 0) lines.push(`Cc: ${e.cc.join(', ')}`);
  if (e.bcc.length > 0) lines.push(`Bcc: ${e.bcc.join(', ')}`);
  if (e.replyTo.length > 0) lines.push(`Reply-To: ${e.replyTo.join(', ')}`);
  lines.push(`Subject: ${e.subject}`);
  if (e.tags.length > 0) lines.push(`X-Tags: ${e.tags.map((t) => `${t.name}=${t.value}`).join('; ')}`);
  lines.push('', '--text', e.text, '--html', e.html);
  for (const a of e.attachments) {
    lines.push(`--attachment ${a.filename} ${a.content.length}`);
    const b64 = a.content.toString('base64');
    for (let i = 0; i < b64.length; i += 76) lines.push(b64.slice(i, i + 76));
  }
  lines.push('--end');
  return Buffer.from(lines.join('\r\n') + '\r\n', 'utf8');
}
