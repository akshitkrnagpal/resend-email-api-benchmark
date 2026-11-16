mod deps;
mod email;
mod htmltotext;
mod jscompat;

use std::collections::HashSet;
use std::sync::Arc;

use axum::Router;
use axum::body::{Body, Bytes};
use axum::extract::{DefaultBodyLimit, Request, State};
use axum::http::{HeaderMap, Method, StatusCode, header};
use axum::response::Response;
use serde::Serialize;
use sha2::{Digest, Sha256};

use deps::{Config, Deps, EmailRow};
use email::{MAX_BYTES, NormalizedEmail, RequestError, build_eml, parse_batch, parse_single};

struct App {
    deps: Deps,
    api_keys: HashSet<String>,
}

struct HttpError {
    status: u16,
    name: &'static str,
    message: String,
}

impl HttpError {
    fn new(status: u16, name: &'static str, message: impl Into<String>) -> Self {
        HttpError { status, name, message: message.into() }
    }
    fn internal() -> Self {
        HttpError::new(500, "application_error", "Internal server error")
    }
}

impl From<RequestError> for HttpError {
    fn from(e: RequestError) -> Self {
        match e {
            RequestError::InvalidJson => HttpError::new(400, "invalid_json", "Request body is not valid JSON"),
            RequestError::Validation(m) => HttpError::new(422, "validation_error", m),
        }
    }
}

#[derive(Serialize)]
struct ErrorBody<'a> {
    #[serde(rename = "statusCode")]
    status_code: u16,
    name: &'a str,
    message: &'a str,
}

#[derive(Serialize)]
struct IdBody<'a> {
    id: &'a str,
}

#[derive(Serialize)]
struct BatchBody<'a> {
    data: Vec<IdBody<'a>>,
}

fn json_response(status: u16, body: Vec<u8>) -> Response {
    Response::builder()
        .status(status)
        .header(header::CONTENT_TYPE, "application/json")
        .body(Body::from(body))
        .unwrap_or_default()
}

fn error_response(e: &HttpError) -> Response {
    let body = serde_json::to_vec(&ErrorBody { status_code: e.status, name: e.name, message: &e.message })
        .unwrap_or_default();
    json_response(e.status, body)
}

fn to_row(id: &str, api_key: &str, e: &NormalizedEmail, s3_key: &str) -> EmailRow {
    EmailRow {
        id: id.to_string(),
        api_key: api_key.to_string(),
        from: e.from.clone(),
        to: e.to.join(", "),
        subject: e.subject.clone(),
        text: e.text.clone(),
        html_size: e.html.len() as i32,
        attachment_count: e.attachments.len() as i32,
        attachment_bytes: e.attachments.iter().map(|a| a.content.len()).sum::<usize>() as i32,
        s3_key: s3_key.to_string(),
    }
}

fn dep<T>(r: deps::DepResult<T>) -> Result<T, HttpError> {
    r.map_err(|_| HttpError::internal())
}

async fn send_one(
    app: &App,
    api_key: &str,
    raw: &[u8],
    body: &str,
    idem_key: Option<&str>,
) -> Result<Vec<u8>, HttpError> {
    let mut hash = String::new();
    let redis_key = idem_key.map(|k| format!("idem:{api_key}:{k}"));
    if let Some(key) = &redis_key {
        hash = hex::encode(Sha256::digest(raw));
        if let Some(stored) = dep(app.deps.get_idempotency(key).await)? {
            let (stored_hash, resp) = stored.split_once('\n').unwrap_or((&stored, ""));
            if stored_hash == hash {
                return Ok(resp.as_bytes().to_vec());
            }
            return Err(HttpError::new(
                409,
                "invalid_idempotent_request",
                "Same idempotency key used with a different request payload",
            ));
        }
    }

    let email = parse_single(body)?;
    let id = uuid::Uuid::new_v4().to_string();
    let s3_key = format!("emails/{id}.eml");
    let eml = build_eml(&email);
    let resp = serde_json::to_vec(&IdBody { id: &id }).unwrap_or_default();

    dep(app.deps.put_object(&s3_key, eml).await)?;
    dep(app.deps.insert_emails(&[to_row(&id, api_key, &email, &s3_key)]).await)?;
    dep(app.deps.enqueue(std::slice::from_ref(&id)).await)?;
    if let Some(key) = &redis_key {
        let record = format!("{hash}\n{}", String::from_utf8_lossy(&resp));
        dep(app.deps.set_idempotency(key, &record).await)?;
    }
    Ok(resp)
}

async fn send_batch(app: &App, api_key: &str, body: &str) -> Result<Vec<u8>, HttpError> {
    let emails = parse_batch(body)?;
    let ids: Vec<String> = emails.iter().map(|_| uuid::Uuid::new_v4().to_string()).collect();
    let keys: Vec<String> = ids.iter().map(|id| format!("emails/{id}.eml")).collect();
    let puts = emails.iter().zip(&keys).map(|(e, k)| app.deps.put_object(k, build_eml(e)));
    dep(futures::future::try_join_all(puts).await)?;
    let rows: Vec<EmailRow> = emails
        .iter()
        .zip(ids.iter().zip(&keys))
        .map(|(e, (id, k))| to_row(id, api_key, e, k))
        .collect();
    dep(app.deps.insert_emails(&rows).await)?;
    dep(app.deps.enqueue(&ids).await)?;
    let out = BatchBody { data: ids.iter().map(|id| IdBody { id }).collect() };
    Ok(serde_json::to_vec(&out).unwrap_or_default())
}

fn api_key_from(headers: &HeaderMap, app: &App) -> Result<String, HttpError> {
    let Some(auth) = headers.get(header::AUTHORIZATION) else {
        return Err(HttpError::new(401, "missing_api_key", "Missing API key in the authorization header"));
    };
    let key = auth.to_str().ok().and_then(|v| v.strip_prefix("Bearer ")).unwrap_or("");
    if !app.api_keys.contains(key) {
        return Err(HttpError::new(403, "invalid_api_key", "API key is invalid"));
    }
    Ok(key.to_string())
}

async fn handle(app: &App, req: Request) -> Result<Vec<u8>, HttpError> {
    let is_single = req.method() == Method::POST && req.uri().path() == "/emails";
    let is_batch = req.method() == Method::POST && req.uri().path() == "/emails/batch";
    if !is_single && !is_batch {
        return Err(HttpError::new(404, "not_found", "Route not found"));
    }
    let api_key = api_key_from(req.headers(), app)?;

    // Rate limit before touching the body.
    if !dep(app.deps.rate_limit(&api_key).await)? {
        return Err(HttpError::new(429, "rate_limit_exceeded", "Too many requests"));
    }

    let too_large = || HttpError::new(413, "content_too_large", "Request body exceeds 40MB");
    let content_length = req
        .headers()
        .get(header::CONTENT_LENGTH)
        .and_then(|v| v.to_str().ok())
        .and_then(|v| v.parse::<u64>().ok());
    if content_length.is_some_and(|n| n > MAX_BYTES as u64) {
        return Err(too_large());
    }
    let idem_key = req
        .headers()
        .get("idempotency-key")
        .and_then(|v| v.to_str().ok())
        .filter(|v| !v.is_empty())
        .map(str::to_string);
    let bytes: Bytes = axum::body::to_bytes(req.into_body(), MAX_BYTES).await.map_err(|_| too_large())?;
    // JSON.parse sees a JS string: invalid UTF-8 becomes U+FFFD (borrowed, no copy, when valid).
    // str::from_utf8 has a fast ASCII path; from_utf8_lossy's chunk iterator is only needed
    // when the body is actually invalid.
    let body: std::borrow::Cow<str> = match std::str::from_utf8(&bytes) {
        Ok(s) => std::borrow::Cow::Borrowed(s),
        Err(_) => String::from_utf8_lossy(&bytes),
    };

    if is_single {
        send_one(app, &api_key, &bytes, &body, idem_key.as_deref()).await
    } else {
        send_batch(app, &api_key, &body).await
    }
}

async fn route(State(app): State<Arc<App>>, req: Request) -> Response {
    if req.method() == Method::GET && req.uri().path() == "/health" {
        return Response::builder()
            .status(StatusCode::OK)
            .header(header::CONTENT_TYPE, "text/plain")
            .body(Body::from("ok"))
            .unwrap_or_default();
    }
    match handle(&app, req).await {
        Ok(body) => json_response(200, body),
        Err(e) => error_response(&e),
    }
}

fn env(key: &str, default: &str) -> String {
    std::env::var(key).unwrap_or_else(|_| default.to_string())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let cfg = Config {
        mode: env("MODE", "real"),
        redis_url: env("REDIS_URL", "redis://localhost:6379"),
        database_url: env("DATABASE_URL", "postgres://bench:bench@localhost:5432/bench"),
        pg_pool_size: env("PG_POOL_SIZE", "20").parse()?,
        s3_endpoint: env("S3_ENDPOINT", "http://localhost:7070"),
        s3_bucket: env("S3_BUCKET", "emails"),
        s3_access_key: env("S3_ACCESS_KEY", "bench"),
        s3_secret_key: env("S3_SECRET_KEY", "benchsecret"),
        rate_limit: env("RATE_LIMIT", "1000000000").parse()?,
    };
    let app = Arc::new(App {
        deps: Deps::new(&cfg).await?,
        api_keys: env("API_KEYS", "re_bench_key").split(',').map(str::to_string).collect(),
    });
    let router = Router::new().fallback(route).layer(DefaultBodyLimit::disable()).with_state(app);

    let port = env("PORT", "8080");
    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{port}")).await?;
    println!("rust email-api listening on :{port} (mode={})", cfg.mode);
    axum::serve(listener, router)
        .with_graceful_shutdown(async {
            let mut term = tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
                .expect("install SIGTERM handler");
            tokio::select! {
                _ = term.recv() => {}
                _ = tokio::signal::ctrl_c() => {}
            }
        })
        .await?;
    Ok(())
}
