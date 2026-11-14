// HTML -> plain text, following SPEC.md exactly. This is the reference implementation:
// the Go and Rust ports must produce identical output.

const BLOCK = new Set([
  'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'tr', 'table', 'ul', 'ol',
  'blockquote', 'section', 'header', 'footer', 'hr',
]);
const RAW_SKIP = new Set(['script', 'style', 'head', 'title']);
const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);

interface Tag {
  name: string;
  closing: boolean;
  selfClosing: boolean;
  attrs: string;
  end: number; // index just after '>'
}

function isAlnum(c: number): boolean {
  return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}

// html[i] must be '<'. Returns null when there is no later '>'.
function parseTag(html: string, i: number): Tag | null {
  const gt = html.indexOf('>', i + 1);
  if (gt < 0) return null;
  let j = i + 1;
  let closing = false;
  if (html.charCodeAt(j) === 47) {
    closing = true;
    j++;
  }
  const nameStart = j;
  while (j < gt && isAlnum(html.charCodeAt(j))) j++;
  return {
    name: html.slice(nameStart, j).toLowerCase(),
    closing,
    selfClosing: gt > i + 1 && html.charCodeAt(gt - 1) === 47,
    attrs: html.slice(j, gt),
    end: gt + 1,
  };
}

function skipRaw(html: string, name: string, from: number): number {
  let k = from;
  for (;;) {
    const lt = html.indexOf('</', k);
    if (lt < 0) return html.length;
    const t = parseTag(html, lt);
    if (t === null) return html.length;
    if (t.name === name) return t.end;
    k = lt + 2;
  }
}

function skipBalanced(html: string, name: string, from: number): number {
  let depth = 1;
  let k = from;
  for (;;) {
    const lt = html.indexOf('<', k);
    if (lt < 0) return html.length;
    if (html.startsWith('<!--', lt)) {
      const e = html.indexOf('-->', lt + 4);
      if (e < 0) return html.length;
      k = e + 3;
      continue;
    }
    const t = parseTag(html, lt);
    if (t === null) return html.length;
    k = t.end;
    if (t.name !== name) continue;
    if (t.closing) {
      depth--;
      if (depth === 0) return t.end;
    } else if (!t.selfClosing) {
      depth++;
    }
  }
}

const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

function decodeEntities(s: string): string {
  if (!s.includes('&')) return s;
  return s.replace(/&(#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g, (match: string, body: string) => {
    if (body.charCodeAt(0) !== 35) return NAMED[body] ?? match;
    const hex = body.charCodeAt(1) === 120 || body.charCodeAt(1) === 88;
    const cp = hex ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
    if (cp < 1 || cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) return match;
    return String.fromCodePoint(cp);
  });
}

function postProcess(s: string): string {
  const lines = s.split('\n').map((l) => l.replace(/ {2,}/g, ' ').replace(/^ +| +$/g, ''));
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').replace(/^\n+|\n+$/g, '');
}

export function htmlToText(html: string): string {
  let out = '';
  let i = 0;
  const n = html.length;
  while (i < n) {
    if (html.charCodeAt(i) === 60) {
      if (html.startsWith('<!--', i)) {
        const e = html.indexOf('-->', i + 4);
        i = e < 0 ? n : e + 3;
        continue;
      }
      const t = parseTag(html, i);
      if (t === null) {
        out += '<';
        i++;
        continue;
      }
      i = t.end;
      if (!t.closing) {
        if (RAW_SKIP.has(t.name)) {
          i = skipRaw(html, t.name, i);
          continue;
        }
        if (
          t.name !== '' && !t.selfClosing && !VOID.has(t.name) &&
          t.attrs.includes('data-skip-in-text="true"')
        ) {
          i = skipBalanced(html, t.name, i);
          continue;
        }
      }
      if (t.name === 'br') out += '\n';
      else if (BLOCK.has(t.name)) out += '\n\n';
      else if (t.name === 'li') out += t.closing ? '\n' : '\n* ';
      else if ((t.name === 'td' || t.name === 'th') && t.closing) out += ' ';
      continue;
    }
    let j = html.indexOf('<', i);
    if (j < 0) j = n;
    out += decodeEntities(html.slice(i, j).replace(/[ \t\n\r\f]+/g, ' '));
    i = j;
  }
  return postProcess(out);
}
