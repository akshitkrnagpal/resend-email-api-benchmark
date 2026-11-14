FROM golang:1.27-bookworm AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod go mod download
# default.pgo (if present) enables profile-guided optimization automatically.
COPY *.go *.pgo ./
RUN --mount=type=cache,target=/go/pkg/mod --mount=type=cache,target=/root/.cache/go-build \
    CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o /out/email-api .

FROM debian:bookworm-slim
COPY --from=build /out/email-api /usr/local/bin/email-api
# Go's default is max(2, CPU limit); on a 1-vCPU task that causes CFS throttling and p99 spikes.
ENV GOMAXPROCS=1
EXPOSE 8080
CMD ["/usr/local/bin/email-api"]
