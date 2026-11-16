#!/usr/bin/env bash
# The fair comparison set (final code for all four servers). Each block is under 15 minutes.
#   capacity       sustainable capacity per task under p99 <= 500 ms, 0 errors (production-like deps)
#   main r1..r3    main benchmark, 3 fresh runs (1 per language each, new shuffled order per run)
#   prodlike r2,r3 two more production-like runs (r1 is results/v3/prodlike)
# Usage: bench/fair.sh [capacity] [main] [prodlike]   (default: all)
set -u
cd "$(dirname "$0")"
mkdir -p ../results/v3
WANT="${*:-capacity main prodlike}"
want() { [[ " $WANT " == *" $1 "* ]]; }
step() { echo; echo "##### $* — $(date '+%H:%M:%S')"; }

if want capacity; then
  step "capacity"
  LABEL=v3/capacity SEED=7 node capacity.ts || echo "FAILED capacity"
fi
if want main; then
  for r in 1 2 3; do
    step "main r$r"
    MODES=real REPEATS=1 SEED=$((1000 + r)) MAX_CONNECTIONS=256 RATES='{"real-small":785,"real-large":56,"real-batch":18}' \
      OUT=v3/main-r$r.json RAW=v3/raw-main-r$r node run.ts || echo "FAILED main r$r"
  done
fi
if want prodlike; then
  for r in 2 3; do
    step "prodlike r$r"
    LABEL=v3/prodlike-r$r REPEATS=1 SEED=$((2000 + r)) DURATION=180 MIX=small:300,large:10,batch:3 BURSTS=large:60:15:60 \
      S3_LATENCY=40 S3_JITTER=20 PG_LATENCY=2 PG_JITTER=1 REDIS_LATENCY=1 REDIS_JITTER=0 \
      node prodlike.ts || echo "FAILED prodlike r$r"
  done
fi
step "done"
