# Resend's email API, rebuilt in TypeScript (Node and Bun), Go and Rust

In November 2026 Resend published [**Migrating our Email API to Go**](https://resend.com/blog/migrating-our-email-api-to-go):
7 weeks, 140 PRs, and their most critical API moved from Node.js to Go at roughly half the median latency,
a seventh of the memory per task and 62% less CPU per request.

I asked the obvious question in the replies: *why Go, not Rust?* The post doesn't say whether Rust was considered,
so instead of guessing I handed it to an AI coding agent, **Claude Opus 5.5** in Claude Code. I asked it for the best
version of the same API in **TypeScript, Go and Rust**, benchmarked on the same metrics, and later asked it to audit the
numbers and make the comparison fair and closer to production. That was about all I contributed. Opus wrote the spec from
Resend's post, built the servers, made them behave identically byte for byte, profiled and tuned each one, ran the
benchmarks and wrote this README. TypeScript runs on both **Node** (what Resend used) and **Bun**.

I haven't reviewed every line, so all of it is here: code, parity tests, profiles and every raw run. If a port looks
unfairly tuned, open a PR and the numbers get re-run.

> Independent project. Not affiliated with or endorsed by Resend. Their real service does far more than this one;
> this is a model of the request path their post describes, not their code.

![Benchmark results](results/fair/chart.svg)

## TL;DR

- **Node → Go is the big jump.** At the same load Go used **32–52% less CPU per request** than Node (−48% under the
  production-like mix). Resend reported 62%.
- **Go → Rust is a smaller, real step.** Rust used another **18–37% less CPU** than Go on single emails and 24% less on
  batches; about 15% less under the production-like mix. It also had the lowest memory nearly everywhere.
- **TypeScript on Bun's native APIs is the surprise.** With `Bun.serve` and Bun's built-in Postgres, Redis and S3
  clients, Bun used **less CPU than Go on every payload** and came close to Rust. The first version ran Bun through its
  Node-compatibility layer and used about twice as much CPU, so *how* you use the runtime matters as much as which one.
- **Memory is where Node loses most.** Under production-like traffic, typical memory per task was Node 240 MB vs
  Go 79 MB, Bun 74 MB and Rust 69 MB. During bursts of large emails Node's container **peaked at 937 MB vs Go's 128 MB**,
  about the 7× Resend reported (Node's peak varied a lot between runs: 274–1,261 MB).
- **Large requests in flight are the JavaScript runtimes' weak spot.** With ~112 large emails held in flight,
  Node and Bun sat at ~670 MB and Bun peaked at 1.1 GB, against Go 251 MB and Rust 203 MB. JS turns each request's
  150,000-number attachment array into real JS objects; Go and Rust decode it straight into bytes.
- **Median latency is a wash once real dependency latency is in the path** (~55 ms for all four, like Resend's tens of
  milliseconds). The difference is the tail: under the production-like mix with bursts, Node's small-email p99 reached
  seconds (2.1 s median across runs) while Go and Rust stayed around 180 ms.

**Takeaway:** Resend's choice makes sense. Go captures most of the gain over Node, keeps memory flat and is far easier
to port a lenient JavaScript API to. Rust is measurably cheaper again if 15–35% of compute matters at your scale.

## Results

Each server runs alone in a container limited to **1 CPU / 2 GB** (one "task"), against real Redis, Postgres and S3.
Numbers are **medians of 3 runs**, (min–max) in brackets; every run used a freshly shuffled server order. The full
tables are in [`results/fair/FAIR.md`](results/fair/FAIR.md), every run in [`results/fair/`](results/fair/).

> **Read ratios, not absolute milliseconds.** On this laptop the same code measured up to 2× different CPU time on
> different runs (see [Caveats](#caveats)). The ordering and the ratios between languages held across every run.

### 1. Same load, local dependencies (CPU and memory per request)

All four servers get the same fixed request rate (785 small / 56 large / 18 batch requests per second), like
Resend's 50/50 traffic split. Dependencies are local, so this isolates each server's own cost.

| | Node | Bun | Go | Rust |
|---|---:|---:|---:|---:|
| **Small email (2 KB)**: CPU per request | 0.44 ms | 0.17 ms | 0.21 ms | **0.13 ms** |
| Peak memory | 173 MB | 60 MB | 55 MB | **26 MB** |
| **Large email (730 KB)**: CPU per request | 6.4 ms | 3.9 ms | 4.3 ms | **3.6 ms** |
| Peak memory | 193 MB | 88 MB | 38 MB | **25 MB** |
| **Batch of 50**: CPU per request | 21.1 ms | **9.5 ms** | 13.5 ms | 10.3 ms |
| Peak memory | 165 MB | 71 MB | **34 MB** | 38 MB |

Median latency at this load was 1.6–1.9 ms for small emails and 8–9 ms for large ones on all four. p99 at this light
load varied too much between runs on this machine to rank (see FAIR.md).

### 2. Production-like (dependency latency, mixed traffic, bursts)

Resend's post says "much of the slow tail is time spent waiting on S3 and the database", and that Node tasks became
unresponsive "during bursts of large requests". This scenario adds both, through toxiproxy: S3 40 ± 20 ms, Postgres
2 ± 1 ms, Redis 1 ms; 300 small + 10 large + 3 batch requests per second, plus a 15-second burst of 60 large emails
per second every minute; 3 minutes per run.

| | Node | Bun | Go | Rust |
|---|---:|---:|---:|---:|
| CPU used (same traffic) | 52% | **23%** | 27% | **23%** |
| CPU per request vs Node | 1.00× | 0.44× | 0.52× | 0.44× |
| Memory, typical | 240 MB | 74 MB | 79 MB | **69 MB** |
| Memory, peak (container) | 937 MB (274–1,261) | 335 MB | 128 MB | **112 MB** |
| Small email latency, median | 57 ms | 55 ms | 54 ms | 57 ms |
| Small email latency, p99 | 2,074 ms (172–4,572) | 442 ms | 185 ms | **181 ms** |
| Failed requests | 0 | 0 | 0 | 0 |

### 3. Many large requests in flight (memory per in-flight request)

Large emails at 56 per second with S3 holding each upload for 2 seconds, so every server has ~112 large requests in
flight at once. The in-flight count is set by the test, not by how fast each server reads, so this is a like-for-like
look at how much memory each runtime holds per request. One run per language.

| | Node | Bun | Go | Rust |
|---|---:|---:|---:|---:|
| Memory, typical | 671 MB | 666 MB | 251 MB | **203 MB** |
| Memory, peak | 759 MB | 1,086 MB | 251 MB | **224 MB** |

**Why the JavaScript runtimes are heavier here:** each large email carries a 150,000-element number array (a
serialized Node `Buffer`). `JSON.parse` turns it into a real JS array, and the body, HTML and base64 output become JS
strings: roughly 3–4 MB of JS heap plus ~1.5 MB of buffers per request in Bun. Go and Rust decode the same request into
compact byte slices. Bun's extra peaks come from when its garbage collector runs: at constant load its memory swung
between 570 MB and 1,055 MB, while Go stayed flat at 250 MB. Bun's `--smol` flag didn't change it
([`results/fair/inflight-s3-2000ms-smol`](results/fair/inflight-s3-2000ms-smol)).

### Under overload (not a fair comparison, shown for completeness)

The main benchmark also drives each server as hard as it can with 256 open connections. These numbers describe how
each server behaves when overrun, not how efficient it is, so they aren't used anywhere above:

- **Bun, Go and Rust weren't CPU-bound** (55–80% CPU), so "max throughput" here is partly a client/dependency limit.
- **Memory at overload depends on how much queued work a server pulls in.** Go leaves unread request bodies at the
  client (TCP flow control) while the others read them in, and the results swung between runs: on large emails
  Node 912 MB vs Go 389 MB, on batches Go 1.3 GB vs Node 580 MB.
- The only failed requests in the whole project (47 of 2.37 million) were Rust batch requests at overload.

### What isn't measured reliably here

**Sustainable capacity per task** (the highest load a 1-CPU task holds with p99 ≤ 500 ms and no errors) is the fair
replacement for "max throughput". [`bench/capacity.ts`](bench/capacity.ts) measures it, and the raw result is in
[`results/fair/capacity`](results/fair/capacity), but on this laptop Rust and Bun "failed" while using only ~40% of
their CPU and p99 jumped around between steps. It needs a machine with identical, pinned cores before it means anything.

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
| Node | Node 26, `node:http`, ioredis, pg, `@aws-sdk/client-s3` | 736 |
| Bun | Bun 1.4, `Bun.serve`, `Bun.SQL`, Bun's `RedisClient` and `S3Client` | 713 |
| Go | Go 1.27, `net/http`, `encoding/json/v2`, go-redis, pgx, aws-sdk-go-v2 | 1,741 |
| Rust | Rust 1.95, axum + tokio, serde_json, redis-rs, tokio-postgres + deadpool, aws-sdk-s3 | 1,631 |

Node and Bun share 624 lines of request handling, validation, `.eml` building and HTML → text
([`servers/ts/src/app.ts`](servers/ts/src/app.ts) and friends); each runtime only has its own server and dependency
clients. The TypeScript versions are less than half the size of the ports, mostly because `JSON.parse` plus `typeof`
checks get JavaScript's lenient behaviour for free, and both ports spend a lot of code reproducing it.

## Making them identical first (the parity harness)

Resend's most useful idea was a harness that sends the same request to the old and new service and compares
**everything**, not just the HTTP response. [`bench/parity.ts`](bench/parity.ts) does the same: 68 fixtures sent to
all four servers, comparing status code, response body, the Postgres row and the S3 object byte for byte.

**Result: 67/68 identical** ([`results/parity.txt`](results/parity.txt)), re-checked after every change below. It
caught exactly the kind of bugs Resend described:

- **`Buffer.from([[5]])` is `5` in Node.** `[5]` becomes `"5"` becomes `5`. Both ports first returned `0`.
- **Node's base64 decoder is forgiving.** It skips invalid characters, accepts the URL-safe alphabet and stops at the
  first `=`. Go's and Rust's standard decoders are strict, so both needed a hand-written decoder.
- **Go's classic `encoding/json` matches keys case-insensitively** (`{"From": ...}` would be accepted) and escapes
  `<` and `>` in output. Go 1.27's `encoding/json/v2` fixes both.
- **serde rejects duplicate keys; `JSON.parse` keeps the last one.** The Rust port visits JSON objects by hand.
- **The one remaining difference:** a number like `1e400` inside the JSON. JavaScript reads it as `Infinity`;
  `serde_json` rejects the whole request. It's left in: it's the "strict vs lenient" gap in one line.

## The "best version" of each

Every server was CPU-profiled under the same load ([`bench/profile.sh`](bench/profile.sh), profiles in
[`results/profiles/`](results/profiles/)), and every change below was measured. Changes that didn't help were dropped.
All three use their official AWS SDK with default settings, including payload checksums.

| | Kept | Tried and dropped |
|---|---|---|
| **Node** | Named prepared statement for the insert; S3 agent allowed 256 sockets | Larger V8 young generation (`--max-semi-space-size`): within noise. Remaining cost is mostly the AWS SDK (~16% on small emails), GC and `JSON.parse` |
| **Bun** | Native `Bun.serve`, `Bun.SQL`, `RedisClient` and `S3Client` instead of Node's server and clients through Bun's compatibility layer (where profiling showed 35% of time in socket writes) | `--smol` (smaller heap): no memory change |
| **Go** | Fast path for all-integer Buffer arrays; `GOMAXPROCS=1`; `GODEBUG=adaptivestackstart=1` (17% of CPU was going to goroutine stack growth through the AWS SDK's middleware chain); AWS SDK idle pool 10 → 1024; Redis pool 10 → 128 (it queued under Redis latency); profile-guided optimisation | PGO itself: within noise, kept because it's free |
| **Rust** | Fat LTO, `codegen-units = 1`, `panic = "abort"`; glibc `mmap_threshold` pinned at 128 KB (peak memory on large payloads ~235 MB → ~24 MB); `str::from_utf8` before falling back to lossy decoding | mimalloc: no CPU gain, ~70% more memory. A hand-written integer-array fast path: no gain, because serde validating the array costs as much as parsing it. Half of Rust's large-email CPU is `serde_json`; going further would need a SIMD JSON parser |

## Things learned along the way

**Profile every language, not just the one that looks slow.** The first Go port was *slower than Node* on large
payloads (84% of its CPU decoding the Buffer array one token at a time). Later, profiling found 17% of Go's CPU in
goroutine stack growth and 35% of Bun's time in its Node-compatibility socket layer. None of these were visible from
the benchmark numbers alone.

**Bun's numbers depend on whether you use Bun or Node-on-Bun.** The same TypeScript running Node's `node:http`, `pg`,
`ioredis` and AWS SDK on Bun used about 0.75× Node's CPU on small emails. Switching just the server and the three
clients to Bun's native ones brought it to about 0.38× Node's CPU, roughly half of what it was.

**Connection pools matter once there's latency.** Go's Redis client defaults to 10 connections. With 1 ms of Redis
latency and ~3 round trips per request, Go failed a capacity step at 59% CPU while requests waited for a connection.
Node, Bun and Rust multiplex one connection and never wait.

**Go's default `GOMAXPROCS` hurts on a 1-vCPU task.** Go never sets it below 2, so two threads burn through a 1-CPU
quota and get throttled (90–150 ms p99 at light load). `GOMAXPROCS=1` fixed it.

**glibc can hold onto memory for Rust.** After freeing large buffers glibc raises its mmap threshold, so later ~700 KB
request bodies stayed on the heap. Pinning the threshold was a one-line environment variable.

**Check your test dependencies and your test machine.** The local S3 server (versitygw) closed every connection by
default, which invalidated the first full run. And this laptop's mix of fast and slow CPU cores moved absolute CPU
numbers by up to 2× between runs.

## Methodology

- **Hardware:** Apple M4 (4 performance + 6 efficiency cores, 16 GB), Docker via OrbStack (10 vCPUs). Each server:
  1 CPU / 2 GB. Redis 8.2, Postgres 18, versitygw (S3), toxiproxy and the load generator run on the same machine.
- **Load generator:** [oha](https://github.com/hatoo/oha), open loop at fixed rates with coordinated-omission
  correction (`--latency-correction`), plus a closed-loop max-throughput phase at 256 connections.
- **Scenarios** ([`bench/fair.sh`](bench/fair.sh), about 3 minutes per language each):
  - **Same load:** [`bench/run.ts`](bench/run.ts), small / large / batch, 5 s warmup + 20 s at a fixed rate.
  - **Production-like:** [`bench/prodlike.ts`](bench/prodlike.ts), latency injected with toxiproxy, mixed traffic +
    bursts, 180 s, memory sampled every second.
  - **In flight:** the same runner with S3 held for 2 s.
- **Measurements:** CPU = cgroup `cpu.stat` delta (with throttling) divided by requests. Memory = process RSS
  (`VmRSS` sampled each second, `VmHWM` for the peak) and the container's cgroup `memory.peak`, which also counts
  kernel socket buffers.
- **Repeats:** every run uses a fresh container and freshly wiped Redis, Postgres and S3. 3 runs per scenario, each
  with a new shuffled server order (seeded and logged). 2.37 million requests in total.
- **Payloads:** small = a 2 KB confirmation email (HTML only, so HTML → text runs); large = a 60 KB newsletter plus a
  150 KB attachment sent as a serialized Node Buffer and a 100 KB base64 attachment, 730 KB in total; batch = 50 small
  emails.
- **Audit:** the numbers were independently recomputed from the raw files, and the four implementations reviewed for
  fairness, by a separate model before the final runs.

## Caveats

- **Laptop CPU time isn't stable.** A "1 CPU" container can be scheduled on a performance or an efficiency core, and
  macOS moves it. The same code measured 0.77 ms per small email for Node in one session and 0.44 ms in another, and
  one Node run in the final set measured double the other two. The language ordering and ratios held in every run;
  absolute numbers and p99s should be redone on a machine with identical, pinned cores.
- **Local dependencies with injected latency, not real AWS.** Real S3 and RDS behave differently in the tail.
- **Single-CPU tasks** suit Node's single thread. On bigger tasks Go and Rust would use the extra cores, and Node
  would need clustering.
- **The large payload is a worst case for JavaScript** (a 150,000-element number array). Resend's post says their API
  accepts exactly this, but how common it is in their traffic isn't public.
- **Not Resend's code**, and far smaller than their service. Their absolute numbers (1.3 GB per Node task) reflect a
  much bigger application.

## Run it yourself

Requires Docker and Node ≥ 23.6 (it runs the TypeScript tooling directly).

```bash
docker compose -p mailbench up -d --wait                 # Redis, Postgres, S3 (versitygw)
docker build -t mailbench-ts servers/ts
docker build -t mailbench-ts-bun -f servers/ts/Dockerfile.bun servers/ts
docker build -t mailbench-go servers/go
docker build -t mailbench-rust servers/rust

cd bench && npm install
node payloads.ts                                         # generates small/large/batch payloads
bash fair.sh                                             # main x3, production-like x3, in-flight (~75 min)
node aggregate.ts && node chart.ts                       # results/fair/FAIR.md, fair-summary.json, chart.svg
```

Each block of `fair.sh` can run on its own: `bash fair.sh main`, `prodlike`, `inflight` or `capacity`.

**Parity check:** run the four images on ports 18081 (Node), 18082 (Go), 18083 (Rust) and 18084 (Bun) against
the compose services, then run `node bench/parity.ts`.

**Profiles:** `bash bench/profile.sh` writes CPU profiles for all four to `results/profiles/`.

When you're done: `docker compose -p mailbench down -v`.

## Repository layout

```
SPEC.md                 the shared contract: pipeline, validation messages, HTML→text rules, .eml format
servers/ts              TypeScript: shared app.ts; server.ts + deps.ts (Node), server-bun.ts + deps-bun.ts (Bun)
servers/go              Go port (+ default.pgo, bench_test.go micro-benchmarks)
servers/rust            Rust port
bench/fair.sh           runs the fair comparison set
bench/run.ts            same-load benchmark (fixed rate + max throughput)
bench/prodlike.ts       production-like and in-flight scenarios (toxiproxy latency, mixed traffic, bursts)
bench/capacity.ts       sustainable capacity under an SLO
bench/aggregate.ts      medians + spreads -> results/fair/FAIR.md, fair-summary.json
bench/chart.ts          the chart in this README
bench/profile.sh        CPU profiles for all four servers
bench/parity.ts         parity harness (status, body, Postgres row, S3 object)
bench/payloads.ts       deterministic payload generator
results/fair/           the results above: every run, logs, FAIR.md, chart.svg
results/profiles/       CPU profiles (Node .cpuprofile, Bun .md, Go .pprof, Rust perf report)
results/archive/        the first published run (2026-11-14), before the audit and tuning
docker-compose.yml      Redis, Postgres, versitygw
```

## Credits

Inspired by and modelled on Resend's engineering post
[Migrating our Email API to Go](https://resend.com/blog/migrating-our-email-api-to-go).
