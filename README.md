# Resend's email API, rebuilt in TypeScript, Go and Rust

In November 2026 Resend published [**Migrating our Email API to Go**](https://resend.com/blog/migrating-our-email-api-to-go):
7 weeks, 140 PRs, and their most critical API moved from Node.js to Go at roughly half the median latency
and a seventh of the memory per task.

I asked the obvious question in the replies: *why Go, not Rust?* The post doesn't say whether Rust was considered,
so instead of guessing I built a smaller version of the same API in **TypeScript, Go and Rust**,
made all three behave identically byte for byte, tuned each one as far as I reasonably could, and benchmarked them.
TypeScript is run on both **Node** (what Resend used) and **Bun**.

> Independent project. Not affiliated with or endorsed by Resend. Their real service does far more than this one;
> this is a model of the request path their post describes, not their code.

![Benchmark results with real Redis, Postgres and S3](results/chart.svg)

## TL;DR

- **Rust would have been more efficient than Go.** On the common case (a small transactional email) Rust used
  **18% less CPU per request** than Go and **less than half the memory** (23 MB vs 51 MB). On large emails with
  attachments it used **30% less CPU**; on batches, **24% less**.
- **But Node → Go is the big jump, and Go → Rust is a much smaller one.** Go cut CPU per request by **58%** versus
  Node on small emails (Resend reported a similar 62%) and memory by about 3.6×. Rust's extra gain on top of that is real but modest.
- **Users wouldn't notice.** With real Redis, Postgres and S3 in the path, median latency at the same load was
  2.5 ms for both Go and Rust (3.4 ms for Node). Rust's advantage shows up in the tail (p99) and in the cloud bill.
- **Go only got there after profiling.** My first straightforward Go port was *slower than Node* on large payloads,
  and Go's default thread count caused 90–150 ms p99 spikes in a 1-CPU container. Both are easy fixes once you see them.
- **Bun is the cheapest win if you're staying on TypeScript.** Same code, no changes: 25% less CPU than Node on small emails,
  closing about 45–65% of the Node → Go CPU gap. Memory stays Node-sized.

My take: Resend's choice makes sense. Go got most of the gain and is much easier to port a lenient JavaScript API to.
Rust is measurably better if you run enough tasks for 20–30% of compute to matter.

## Results

Each server runs alone in a container limited to **1 CPU / 2 GB** (one "task"). Numbers are **medians of 3 runs**.
Throughput is the maximum the container sustained; everything else is measured with all four servers at the
**same fixed request rate** (half of the slowest server's max), like Resend's 50/50 traffic split.

### With real Redis + Postgres + S3

| | Node | Bun | Go | Rust |
|---|---:|---:|---:|---:|
| **Small email (2 KB)**: max throughput, req/s | 1,569 | 2,330 | 2,782 | **4,752** |
| CPU per request at 785 req/s | 0.858 ms | 0.642 ms | 0.363 ms | **0.296 ms** |
| Peak memory | 185 MB | 164 MB | 51 MB | **23 MB** |
| Latency p50 / p99 | 3.4 / 76.7 ms | 3.0 / 40.2 ms | 2.5 / 20.0 ms | **2.5 / 16.5 ms** |
| **Large email (730 KB, 2 attachments)**: max throughput | 112 | 137 | 136 | **169** |
| CPU per request at 56 req/s | 10.8 ms | 8.3 ms | 7.0 ms | **4.9 ms** |
| Peak memory | 207 MB | 207 MB | 38 MB | **24 MB** |
| Latency p50 / p99 | 12.5 / 48.3 ms | 13.0 / 40.1 ms | 12.9 / 26.1 ms | **10.4 / 17.1 ms** |
| **Batch of 50 emails**: max throughput | 36.5 | 55.1 | 74.6 | **80.4** |
| CPU per request at 18 req/s | 23.9 ms | 16.8 ms | 12.2 ms | **9.3 ms** |
| Peak memory | 166 MB | 136 MB | **34 MB** | 37 MB |
| Latency p50 / p99 | 22.0 / 42.4 ms | 18.0 / 39.8 ms | 17.3 / 39.1 ms | 17.7 / **30.8 ms** |

Max throughput with real dependencies is partly limited by Postgres and S3 and varied a lot between runs
(Bun's small-email runs ranged from 1,315 to 2,431 req/s). **CPU per request at equal load is the steadiest number**,
typically within ±7% across runs. Full per-run data, including
min/max across runs, is in [`results/summary.json`](results/summary.json).

### Pure language cost (Redis, Postgres and S3 replaced by in-memory fakes)

| | Node | Bun | Go | Rust |
|---|---:|---:|---:|---:|
| Small email: max throughput, req/s | 15,147 | 20,156 | 21,675 | **38,074** |
| Large email: max throughput, req/s | 172 | 219 | 188 | **250** |
| Batch of 50: max throughput, req/s | 493 | 724 | 606 | **1,104** |
| Peak memory (small, at equal load) | 154 MB | 112 MB | 29 MB | **20 MB** |

Without I/O, Rust handles about **1.8× more requests per CPU than Go** on small emails. Interesting detail: on the
730 KB payload, Go is barely faster than Node (188 vs 172 req/s). V8's `JSON.parse` is fast C++, while Go has to
stream-decode a 150,000-element array.

An interactive version with every metric and a table view: `node bench/report.ts`, then open `results/report.html`.

## What each request does

All four servers implement the same pipeline, in the same order ([SPEC.md](SPEC.md) is the contract):

1. **Auth**: `Authorization: Bearer <key>`
2. **Rate limit in Redis *before* reading the body.** Resend's post says Node parsed large bodies even for requests
   the rate limiter was about to reject, which could make a whole task unresponsive
3. **Size cap** of 40 MB
4. **Idempotency**: `Idempotency-Key` lookup in Redis (same key + same body replays the response; different body → 409)
5. **JSON parsing + validation** with Resend-style error messages
6. **Attachments**: lenient base64 *and* serialized Node `Buffer` objects (`{"type":"Buffer","data":[...]}`), decoded
   with JavaScript's coercion rules, the exact problem Resend describes
7. **HTML → plain text** when `text` is missing, skipping `data-skip-in-text="true"` elements
8. **S3 `PutObject`** of the rendered `.eml` with a 5 s timeout
9. **Postgres insert** (batch: one multi-row insert)
10. **Redis `LPUSH`** onto a send queue
11. Respond with `{"id": "..."}`

| | Stack | Lines of code |
|---|---|---:|
| TypeScript | `node:http`, ioredis, pg, `@aws-sdk/client-s3`. Runs unchanged on Node 26 and Bun 1.4 | 690 |
| Go | Go 1.27, `net/http`, `encoding/json/v2`, go-redis, pgx, aws-sdk-go-v2 | 1,737 |
| Rust | Rust 1.95, axum + tokio, serde_json, redis-rs, tokio-postgres + deadpool, aws-sdk-s3 | 1,626 |

The TypeScript version is less than half the size, mostly because JSON.parse plus `typeof` checks get JavaScript's
lenient behaviour for free. Both ports spend a lot of code reproducing it.

## Making them identical first (the parity harness)

Resend's most useful idea was a harness that sends the same request to the old and new service and compares
**everything**, not just the HTTP response. [`bench/parity.ts`](bench/parity.ts) does the same: 68 fixtures sent to
all four servers, comparing status code, response body, the Postgres row and the S3 object byte for byte.

**Result: 67/68 identical.** It caught exactly the kind of bugs Resend described:

- **`Buffer.from([[5]])` is `5` in Node.** `[5]` becomes `"5"` becomes `5`. Both ports first returned `0`.
- **Node's base64 decoder is forgiving.** It skips invalid characters, accepts the URL-safe alphabet and stops at the
  first `=`. Go's and Rust's standard decoders are strict, so both needed a hand-written decoder.
- **Go's classic `encoding/json` matches keys case-insensitively** (`{"From": ...}` would be accepted) and escapes
  `<` and `>` in output. Go 1.27's `encoding/json/v2` fixes both.
- **serde rejects duplicate keys; `JSON.parse` keeps the last one.** The Rust port visits JSON objects by hand.
- **The one remaining difference:** a number like `1e400` inside the JSON. JavaScript reads it as `Infinity`;
  `serde_json` rejects the whole request. I left it in: it's the "strict vs lenient" gap in one line.

## The "best version" of each

The goal was the best realistic version of each, not a microbenchmark special. Every change below was measured;
the ones that didn't help were dropped.

| | Kept | Tried and dropped |
|---|---|---|
| **TypeScript** | Bun as a second runtime (no code changes); S3 agent allowed 256 sockets | Larger V8 young generation (`--max-semi-space-size`): within noise |
| **Go** | Fast path for all-integer Buffer arrays (halved large-payload CPU); `GOMAXPROCS=1`; AWS SDK idle pool raised from 10 to 1024 connections per host (batch: 44 → 70 req/s); profile-guided optimisation from a production-like profile | PGO itself: within noise, kept because it's free |
| **Rust** | Fat LTO, `codegen-units = 1`, `panic = "abort"`; glibc `mmap_threshold` fixed at 128 KB (peak memory on large payloads: ~235 MB → ~24 MB) | mimalloc: no CPU gain, ~70% more memory |

## Things I learned along the way

**My first Go port was slower than Node on large payloads.** 84% of its CPU went into decoding the 150,000-number
Buffer array one JSON token at a time with `strconv.ParseFloat`. In an isolated Go benchmark, a 30-line fast path
(validate the array once, then scan the digits by hand) took a large request from 10.6 ms to 5.2 ms. Node's
`JSON.parse` is native C++ and serde has that fast path built in, so only Go needed this.

**Go's default `GOMAXPROCS` hurts on a 1-vCPU task.** Go is container-aware, but it never sets `GOMAXPROCS` below 2.
In a container limited to 1 CPU, two threads burn through the quota and get throttled, which showed up as 90–150 ms
p99 at light load (reproduced on a second run). With `GOMAXPROCS=1`, p99 dropped to 13–20 ms in most runs
(one of the three final runs still hit 59 ms).

**The AWS SDK for Go keeps only 10 idle connections per host.** A batch fans out 50 S3 uploads at once, so most
connections were opened and thrown away on every request.

**glibc can hold onto memory for Rust.** After freeing large buffers glibc raises its mmap threshold, so later
~700 KB request bodies live on the heap and are never returned. Rust's peak RSS on large payloads was 236 MB,
six times Go's, until I pinned the threshold. It was a one-line environment variable, not a code change.

**Check your test dependencies too.** The local S3 server I used (versitygw) closes every connection by default,
so every upload paid for a new TCP connection. Real S3 doesn't do that. Once I turned on keep-alive, every
earlier result had to be thrown away and re-run.

## Methodology

- **Hardware:** Apple M4 (10 cores, 16 GB), Docker via OrbStack. Each server: 1 CPU / 2 GB. Redis 8.2,
  Postgres 18 and versitygw (S3) run unconstrained on the same machine.
- **Load generator:** [oha](https://github.com/hatoo/oha) on the same Docker network.
  - **Max throughput:** closed loop, 64 connections, 10 s after a 5 s warmup.
  - **Equal load:** open loop at a fixed rate with coordinated-omission correction (`--latency-correction`),
    20 s after a 5 s warmup.
- **Measurements:** CPU = cgroup `usage_usec` delta divided by requests. Memory = peak RSS of the server
  process (`VmHWM`).
- **Repeats:** every run uses a fresh container and freshly wiped Redis, Postgres and S3. 3 runs per
  measurement, interleaved across languages, median reported. 0 failed requests across all 144 runs.
- **Payloads:**
  - **small:** a 2 KB confirmation email, HTML only, so HTML → text runs.
  - **large:** a 60 KB newsletter plus a 150 KB attachment sent as a serialized Node Buffer and a 100 KB
    base64 attachment, 730 KB in total.
  - **batch:** 50 small emails.

**Caveats**
- **Laptop, not production:** one laptop and one VM. Real S3 adds tens of milliseconds per upload (the local one
  takes about 1 ms), which would make the latency gaps even smaller. The CPU and memory gaps would stay.
- **Single-CPU tasks:** everything ran in 1-CPU containers, which suits Node's single thread. On bigger tasks Go
  and Rust would use the extra cores, and Node would need clustering.
- **Smaller than the real thing:** this is far smaller than Resend's real service. Their absolute numbers (1.3 GB
  per Node task) reflect a much bigger application.

## Run it yourself

Requires Docker and Node ≥ 23.6 (it runs the TypeScript tooling directly).

```bash
docker compose up -d --wait                              # Redis, Postgres, S3 (versitygw)
docker build -t mailbench-ts servers/ts
docker build -t mailbench-ts-bun -f servers/ts/Dockerfile.bun servers/ts
docker build -t mailbench-go servers/go
docker build -t mailbench-rust servers/rust

cd bench && npm install
node payloads.ts                                         # generates small/large/batch payloads
node run.ts                                              # full suite, ~60 min
node chart.ts && node report.ts                          # results/chart.svg, results/report.html
```

Useful knobs: `REPEATS`, `MODES=real,memory`, `SCENARIOS=small,large,batch`, `LANGS=ts,ts-bun,go,rust`,
`WARMUP`, `MAX_DURATION`, `FIXED_DURATION`.

**Parity check:** run the four images on ports 18081 (Node), 18082 (Go), 18083 (Rust) and 18084 (Bun) against
the compose services, then run `node bench/parity.ts`.

When you're done: `docker compose down -v`.

## Repository layout

```
SPEC.md                 the shared contract: pipeline, validation messages, HTML→text rules, .eml format
servers/ts              TypeScript reference implementation (Dockerfile = Node, Dockerfile.bun = Bun)
servers/go              Go port (+ default.pgo, bench_test.go micro-benchmarks)
servers/rust            Rust port
bench/payloads.ts       deterministic payload generator
bench/parity.ts         parity harness (status, body, Postgres row, S3 object)
bench/run.ts            benchmark orchestrator
bench/chart.ts          static SVG chart for this README
bench/report.ts         interactive HTML report
results/                summary.json (medians + every run), raw oha output, logs, charts
docker-compose.yml      Redis, Postgres, versitygw
```

## Credits

Inspired by and modelled on Resend's engineering post
[Migrating our Email API to Go](https://resend.com/blog/migrating-our-email-api-to-go).
