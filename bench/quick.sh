#!/usr/bin/env bash
# Three scenarios, ~3 minutes per language each (1 run per language, shuffled order), ~12–13 min per scenario.
# Results: results/v3/.
#   1 main       small / large / batch: max throughput (256 connections) + fixed rate (785 / 56 / 18 req/s)
#   2 prodlike   S3 40±20 ms, Postgres 2±1 ms, Redis 1 ms; 300 small + 10 large + 3 batch req/s,
#                plus a 15 s burst of 60 large req/s every minute; 180 s
#   3 inflight   large emails at 56 req/s with S3 held for 2 s (~112 requests in flight); 180 s
# Usage: bench/quick.sh [main] [prodlike] [inflight]   (default: all three)
set -u
cd "$(dirname "$0")"
mkdir -p ../results/v3
WANT="${*:-main prodlike inflight}"
want() { [[ " $WANT " == *" $1 "* ]]; }
step() { echo; echo "##### $* — $(date '+%H:%M:%S')"; }

if want main; then
  step "1 main"
  MODES=real REPEATS=1 MAX_CONNECTIONS=256 RATES='{"real-small":785,"real-large":56,"real-batch":18}' \
    OUT=v3/main.json RAW=v3/raw-main node run.ts || echo "FAILED main"
fi
if want prodlike; then
  step "2 prodlike"
  LABEL=v3/prodlike REPEATS=1 DURATION=180 MIX=small:300,large:10,batch:3 BURSTS=large:60:15:60 \
    S3_LATENCY=40 S3_JITTER=20 PG_LATENCY=2 PG_JITTER=1 REDIS_LATENCY=1 REDIS_JITTER=0 \
    node prodlike.ts || echo "FAILED prodlike"
fi
if want inflight; then
  step "3 inflight"
  LABEL=v3/inflight-s3-2000ms REPEATS=1 DURATION=180 MIX=large:56 BURSTS= \
    S3_LATENCY=2000 S3_JITTER=0 PG_LATENCY=0 REDIS_LATENCY=0 \
    node prodlike.ts || echo "FAILED inflight"
fi
step "done"
