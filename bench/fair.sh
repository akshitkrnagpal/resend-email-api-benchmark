#!/usr/bin/env bash
# The fair comparison set (results/fair/). Every block is ~3 minutes per language, under 15 minutes.
#   main      main benchmark, 3 fresh runs (1 per language each, new shuffled order per run):
#             small / large / batch at a fixed rate (785 / 56 / 18 req/s), plus max throughput at 256 connections
#   prodlike  3 production-like runs: S3 40±20 ms, Postgres 2±1 ms, Redis 1 ms (toxiproxy);
#             300 small + 10 large + 3 batch req/s with a 15 s burst of 60 large req/s every minute; 180 s
#   inflight  large emails at 56 req/s with S3 held for 2 s (~112 requests in flight); 180 s
#   capacity  sustainable load per task under p99 <= 500 ms and 0 errors (see README: not reliable on a laptop)
# Then: node aggregate.ts && node chart.ts
# Usage: bench/fair.sh [main] [prodlike] [inflight] [capacity]   (default: main prodlike inflight)
set -u
cd "$(dirname "$0")"
mkdir -p ../results/fair
WANT="${*:-main prodlike inflight}"
want() { [[ " $WANT " == *" $1 "* ]]; }
step() { echo; echo "##### $* — $(date '+%H:%M:%S')"; }
DEPS=(S3_LATENCY=40 S3_JITTER=20 PG_LATENCY=2 PG_JITTER=1 REDIS_LATENCY=1 REDIS_JITTER=0)

if want main; then
  for r in 1 2 3; do
    step "main r$r"
    MODES=real REPEATS=1 SEED=$((1000 + r)) MAX_CONNECTIONS=256 RATES='{"real-small":785,"real-large":56,"real-batch":18}' \
      OUT=fair/main-r$r.json RAW=fair/raw-main-r$r node run.ts || echo "FAILED main r$r"
  done
fi
if want prodlike; then
  for r in 1 2 3; do
    step "prodlike r$r"
    env "${DEPS[@]}" LABEL=fair/prodlike-r$r REPEATS=1 SEED=$((2000 + r)) DURATION=180 \
      MIX=small:300,large:10,batch:3 BURSTS=large:60:15:60 node prodlike.ts || echo "FAILED prodlike r$r"
  done
fi
if want inflight; then
  step "inflight"
  LABEL=fair/inflight-s3-2000ms REPEATS=1 DURATION=180 MIX=large:56 BURSTS= \
    S3_LATENCY=2000 S3_JITTER=0 PG_LATENCY=0 REDIS_LATENCY=0 node prodlike.ts || echo "FAILED inflight"
fi
if want capacity; then
  step "capacity"
  env "${DEPS[@]}" LABEL=fair/capacity SEED=7 node capacity.ts || echo "FAILED capacity"
fi
step "done"
