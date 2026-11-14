FROM rust:1.95-slim-bookworm AS build
WORKDIR /src
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo 'fn main() {}' > src/main.rs
RUN --mount=type=cache,target=/usr/local/cargo/registry cargo build --release && rm -rf src target/release/deps/email_api_rust*
COPY src ./src
RUN --mount=type=cache,target=/usr/local/cargo/registry cargo build --release && cp target/release/email-api-rust /email-api

FROM debian:bookworm-slim
COPY --from=build /email-api /usr/local/bin/email-api
# glibc raises its mmap threshold after large frees, then keeps ~700 KB request bodies on the
# heap and never returns them. A fixed 128 KB threshold drops peak RSS on large payloads from
# ~230 MB to ~20 MB for ~3% more CPU.
ENV GLIBC_TUNABLES=glibc.malloc.mmap_threshold=131072
EXPOSE 8080
CMD ["/usr/local/bin/email-api"]
