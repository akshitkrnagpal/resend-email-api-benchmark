#!/usr/bin/env bash
# Validation pass after the audit (results go to results/v2/ and results/<label>/; originals untouched).
#   D. Production-like: dependency latency (S3 40±20 ms, Postgres 2±1 ms, Redis 1 ms), steady mixed traffic,
#      bursts of large emails. 3 shuffled repeats, 300 s each.
#   C. In-flight memory: large emails at 56 req/s with S3 held for 1, 2 and 4 s (~56/112/224 in flight).
#   A. Saturation sweep: max throughput at 64/128/256/512 connections (Go/Rust were not CPU-bound at 64).
#   B. Full re-run of the main benchmark, real deps, 5 shuffled repeats, same fixed rates as before,
#      with throttling / cgroup memory / thread counts recorded.
set -u
cd "$(dirname "$0")"
mkdir -p ../results/v2
step() { echo; echo "##### $* — $(date '+%H:%M:%S')"; }
# Usage: validate.sh [D] [C] [A] [B]   (default: all, in that order)
WANT="${*:-D C A B}"
want() { [[ " $WANT " == *" $1 "* ]]; }

if want D; then
step "D production-like"
LABEL=prodlike REPEATS=3 DURATION=300 MIX=small:300,large:10,batch:3 BURSTS=large:60:15:60 \
  S3_LATENCY=40 S3_JITTER=20 PG_LATENCY=2 PG_JITTER=1 REDIS_LATENCY=1 REDIS_JITTER=0 \
  node prodlike.ts || echo "FAILED D"
fi

if want C; then
for ms in 1000 2000 4000; do
  step "C in-flight S3=${ms}ms"
  LABEL=inflight-s3-${ms}ms REPEATS=1 DURATION=180 MIX=large:56 BURSTS= \
    S3_LATENCY=$ms S3_JITTER=0 PG_LATENCY=0 REDIS_LATENCY=0 \
    node prodlike.ts || echo "FAILED C ${ms}"
done
fi

if want A; then
for c in 64 128 256 512; do
  step "A sweep c=$c"
  MODES=real PHASES=max REPEATS=1 MAX_CONNECTIONS=$c OUT=v2/sweep-c$c.json RAW=v2/raw-sweep-c$c \
    node run.ts || echo "FAILED A $c"
done
fi

if want B; then
step "B full re-run"
MODES=real REPEATS=5 MAX_CONNECTIONS=256 RATES='{"real-small":785,"real-large":56,"real-batch":18}' \
  OUT=v2/summary.json RAW=v2/raw node run.ts || echo "FAILED B"
fi

step "done"
