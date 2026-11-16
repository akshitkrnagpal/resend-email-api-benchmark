#!/usr/bin/env bash
# CPU-profile each server under the same fixed load, to see whether any implementation has
# obvious headroom left. Profiles land in results/profiles/.
#   Node: --cpu-prof   Bun: --cpu-prof-md   Go: CPU_PROFILE (pprof)   Rust: perf in a sidecar
# Usage: bench/profile.sh [langs...]   env: SCENARIOS="small large" SECONDS_PER=30
set -u
cd "$(dirname "$0")/.."
OUT="$PWD/results/profiles"; mkdir -p "$OUT"
LANGS="${*:-ts ts-bun go rust}"
SCENARIOS="${SCENARIOS:-small large}"
SECS="${SECONDS_PER:-30}"
NET=mailbench_default
declare -A RATE=([small]=785 [large]=56 [batch]=18)
declare -A FILE=([small]=small.json [large]=large.json [batch]=batch.json)
declare -A PATHP=([small]=/emails [large]=/emails [batch]=/emails/batch)

reset() {
  docker compose -p mailbench rm -sf s3 >/dev/null 2>&1
  docker volume rm -f mailbench_s3data >/dev/null 2>&1
  docker compose -p mailbench up -d --wait s3 >/dev/null 2>&1
  docker exec mailbench-postgres-1 psql -U bench -q -c 'TRUNCATE emails' >/dev/null
  docker exec mailbench-redis-1 redis-cli FLUSHALL >/dev/null
  sleep 1
}
oha() { # scenario seconds
  docker run --rm --network $NET -v "$PWD/bench/payloads:/payloads:ro" ghcr.io/hatoo/oha:latest \
    --no-tui --output-format json -w -m POST -H 'Authorization: Bearer re_bench_key' -H 'Content-Type: application/json' \
    -D /payloads/${FILE[$1]} -z ${2}s -c 512 -q ${RATE[$1]} --latency-correction http://server:8080${PATHP[$1]} >/dev/null
}
COMMON=(--network $NET --network-alias server --cpus=1 --memory=2g -p 127.0.0.1:18090:8080 -v "$OUT:/prof"
  -e MODE=real -e REDIS_URL=redis://redis:6379 -e DATABASE_URL=postgres://bench:bench@postgres:5432/bench -e S3_ENDPOINT=http://s3:7070)

for sc in $SCENARIOS; do
  for lang in $LANGS; do
    echo "== $lang $sc"
    reset
    docker rm -f mb-bench-server >/dev/null 2>&1
    case $lang in
      ts)     docker run -d --name mb-bench-server "${COMMON[@]}" --entrypoint node mailbench-ts \
                --cpu-prof --cpu-prof-dir=/prof --cpu-prof-name=ts-$sc.cpuprofile src/server.ts >/dev/null ;;
      ts-bun) docker run -d --name mb-bench-server "${COMMON[@]}" --entrypoint bun mailbench-ts-bun \
                --cpu-prof-md --cpu-prof-dir=/prof --cpu-prof-name=bun-$sc.md src/server.ts >/dev/null ;;
      go)     docker run -d --name mb-bench-server "${COMMON[@]}" -e CPU_PROFILE=/prof/go-$sc.pprof mailbench-go >/dev/null ;;
      rust)   docker run -d --name mb-bench-server "${COMMON[@]}" mailbench-rust >/dev/null ;;
    esac
    for i in $(seq 1 50); do curl -sf http://127.0.0.1:18090/health >/dev/null && break; sleep 0.2; done
    oha $sc 5   # warmup
    if [ "$lang" = rust ]; then
      docker run -d --name mb-perf --privileged --pid=container:mb-bench-server -v "$OUT:/prof" \
        -v /tmp/perfimg/email-api:/usr/local/bin/email-api:ro mb-perf \
        sh -c "perf record -F 999 -g -p 1 -o /prof/rust-$sc.perf.data -- sleep $SECS" >/dev/null
    fi
    oha $sc $SECS
    if [ "$lang" = rust ]; then
      docker wait mb-perf >/dev/null; docker logs mb-perf 2>&1 | tail -2
      docker run --rm --privileged -v "$OUT:/prof" -v /tmp/perfimg/email-api:/usr/local/bin/email-api:ro mb-perf \
        sh -c "perf report -i /prof/rust-$sc.perf.data --no-children -g none --sort dso --stdio 2>/dev/null | grep -v '^#' | head -12 > /prof/rust-$sc.txt; perf report -i /prof/rust-$sc.perf.data --no-children -g none --sort dso,symbol --stdio 2>/dev/null | grep -v '^#' | head -60 >> /prof/rust-$sc.txt"
      docker rm -f mb-perf >/dev/null
    fi
    docker stop -t 10 mb-bench-server >/dev/null; docker rm -f mb-bench-server >/dev/null 2>&1
  done
done
ls -la "$OUT"
