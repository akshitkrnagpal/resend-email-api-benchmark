# Email API spec (shared by the TS, Go and Rust servers)

A cut-down version of the flow Resend describes in "Migrating our Email API to Go".
The TypeScript server is the **reference**: Go and Rust must match it byte for byte
(responses, DB rows, S3 objects). `parity/` checks this.

## Endpoints

| Method | Path            | Notes                                     |
|--------|-----------------|-------------------------------------------|
| GET    | `/health`       | `200 ok` (text/plain)                     |
| POST   | `/emails`       | send one email                            |
| POST   | `/emails/batch` | send 1..100 emails, no attachments        |
| *      | anything else   | 404 `not_found` / `Route not found`        |

## Request pipeline (order matters)

1. **Auth**: `Authorization: Bearer <key>`. Missing header → 401 `missing_api_key`
   "Missing API key in the authorization header". Key not in `API_KEYS` (comma list,
   default `re_bench_key`) → 403 `invalid_api_key` "API key is invalid".
2. **Rate limit before reading the body** (Node's original problem): fixed 1s window,
   Redis `INCR rl:{key}:{unixSec}`, `EXPIRE 2` when the result is 1. Count > `RATE_LIMIT`
   (default 1000000000) → 429 `rate_limit_exceeded` "Too many requests".
3. **Size**: `Content-Length` > 40 MiB, or body exceeds 40 MiB while reading → 413
   `content_too_large` "Request body exceeds 40MB".
4. **Idempotency** (`/emails` only, when `Idempotency-Key` is set): Redis
   `GET idem:{apiKey}:{key}` → value `"{sha256hex(body)}\n{responseJson}"`. Same hash → replay
   the stored response (200). Different hash → 409 `invalid_idempotent_request`
   "Same idempotency key used with a different request payload".
5. **Parse JSON**: failure → 400 `invalid_json` "Request body is not valid JSON".
6. **Validate and normalize** (422 `validation_error`, messages listed below).
7. **Attachments**: `content` is a base64 string (decoded leniently like Node's
   `Buffer.from(s, "base64")`) or a serialized Node Buffer `{"type":"Buffer","data":[...]}`
   (each element is coerced like `Buffer.from(array)`: JS ToNumber, then ToUint8).
8. **HTML to text** when `text` is missing (algorithm below).
9. **S3 PutObject** `emails/{id}.eml` in bucket `S3_BUCKET` with a 5s timeout.
10. **Postgres insert** (one statement per request; batch inserts all rows at once via `unnest`).
11. **Queue**: Redis `LPUSH queue:send {id...}`.
12. **Respond** `200 {"id":"<uuid>"}` / `200 {"data":[{"id":"..."},...]}`.
    Store the idempotency record (`SET ... EX 86400 NX`) after success.

Any dependency failure → 500 `application_error` "Internal server error".
Error body: `{"statusCode":<n>,"name":"<name>","message":"<msg>"}`. No HTML escaping (`<` stays `<`).

`MODE=memory` swaps Redis/S3/Postgres for in-process fakes (rate limit and idempotency maps,
no S3 upload and no DB write; the .eml bytes are still built). This measures raw language cost.

## Validation (first failing rule wins, checked in this order)

- body not a JSON object → "Request body must be a JSON object"
- `from`: missing/null → "`from` is required"; not a string → "`from` must be a string";
  bad address → "Invalid `from` field. The email address needs to follow the `email@example.com` or `Name <email@example.com>` format."
- `to`: missing/null → "`to` is required"; then the address-list rules
- `cc`, `bcc`, `reply_to`: optional, same address-list rules
- address list (field `f`): a string or an array of strings. Wrong type → "`f` must be a string or an array of strings";
  empty array (`to` only) or more than 50 → "`f` must contain between 1 and 50 addresses" (`cc`/`bcc`/`reply_to` allow 0..50);
  bad address → "Invalid `f` field. The email address needs to follow the `email@example.com` or `Name <email@example.com>` format."
- `subject`: missing/null → "`subject` is required"; not a string → "`subject` must be a string"
- `html`, `text`: if present and non-null must be strings → "`html` must be a string" / "`text` must be a string";
  neither present → "Either `html` or `text` must be provided"
- `attachments`: optional; not an array → "`attachments` must be an array"; more than 20 → "`attachments` can contain at most 20 items";
  item `i` not an object → "`attachments[i]` must be an object"; `filename` not a non-empty string → "`attachments[i].filename` is required";
  `content` not base64 string / Buffer → "`attachments[i].content` must be a base64 string or a Buffer";
  total decoded bytes > 40 MiB → "Attachments exceed the 40MB limit"
- `tags`: optional array (not array → "`tags` must be an array"); item `i` must be an object with `name` and `value`
  strings of 1..256 chars from `[A-Za-z0-9_-]` → "`tags[i].name` must only contain ASCII letters, numbers, underscores, or dashes"
  (same for `.value`; non-object item → "`tags[i]` must be an object")
- batch: body not an array → "Request body must be a JSON array"; size not 1..100 →
  "Batch must contain between 1 and 100 emails"; each item validated as above with prefix `emails[i]: `;
  `attachments` present (non-null) → "emails[i]: `attachments` are not supported in batch emails" (checked before other rules)

Address: optional `Name <addr>` form (string ends with `>`, has `<`; name is the part before `<`, ASCII-trimmed).
`addr` (ASCII-trimmed) must be printable ASCII without spaces, contain exactly one `@`, local part 1..64 chars,
domain contains `.`, does not start or end with `.` or `-`, total length ≤ 254. The original string (ASCII-trimmed) is stored.

## HTML → text

Scan the string. ASCII-only lowercase for tag names.
- `<!-- ... -->` skipped.
- `<` with no later `>` → literal `<`.
- Opening `script`, `style`, `head`, `title` → skip to the matching `</name ...>` (case-insensitive).
- Opening tag whose attributes contain `data-skip-in-text="true"` (not self-closing, not a void element
  `br hr img input meta link`) → skip until the same-name tags balance.
- `br` → `\n`; `p div h1-h6 tr table ul ol blockquote section header footer hr` (open or close) → `\n\n`;
  `li` open → `\n* `, close → `\n`; `td`/`th` close → ` `. Everything else (including `a`) emits nothing.
- Text runs: collapse runs of ASCII whitespace (` \t\n\r\f`) to one space, then decode entities
  `&amp; &lt; &gt; &quot; &#39; &apos; &nbsp;`(→ space) and `&#N;`/`&#xH;` (1..0x10FFFF, not surrogates); unknown entities stay as-is.
- Post: split on `\n`; per line collapse runs of spaces to one and trim spaces; join with `\n`;
  collapse 3+ newlines to 2; trim leading/trailing newlines.

## .eml object (CRLF line endings)

```
From: {from}
To: {to joined ", "}
Cc: ...            (only if non-empty)
Bcc: ...           (only if non-empty)
Reply-To: ...      (only if non-empty)
Subject: {subject}
X-Tags: n1=v1; n2=v2   (only if any tags)

--text
{text}
--html
{html}
--attachment {filename} {byteLength}     (per attachment)
{standard base64, padded, wrapped at 76 chars}
--end
```
(i.e. headers, empty line, then sections; every line ends with `\r\n`, including `--end`.
`{text}` and `{html}` are written as-is.)

## Postgres row

`id, api_key, from_addr, to_addrs (joined ", "), subject, text_body, html_size (UTF-8 bytes), attachment_count, attachment_bytes, s3_key`
