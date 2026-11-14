use std::collections::HashMap;
use std::sync::Mutex;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use aws_sdk_s3::config::{BehaviorVersion, Credentials, Region};
use aws_sdk_s3::primitives::ByteStream;
use deadpool_postgres::{Pool, PoolConfig, Runtime};
use redis::aio::ConnectionManager;
use tokio_postgres::NoTls;

pub type DepResult<T> = Result<T, Box<dyn std::error::Error + Send + Sync>>;

pub struct EmailRow {
    pub id: String,
    pub api_key: String,
    pub from: String,
    pub to: String,
    pub subject: String,
    pub text: String,
    pub html_size: i32,
    pub attachment_count: i32,
    pub attachment_bytes: i32,
    pub s3_key: String,
}

pub struct Config {
    pub mode: String,
    pub redis_url: String,
    pub database_url: String,
    pub pg_pool_size: usize,
    pub s3_endpoint: String,
    pub s3_bucket: String,
    pub s3_access_key: String,
    pub s3_secret_key: String,
    pub rate_limit: i64,
}

const INSERT_SQL: &str = "INSERT INTO emails
  (id, api_key, from_addr, to_addrs, subject, text_body, html_size, attachment_count, attachment_bytes, s3_key)
  SELECT * FROM unnest($1::text[], $2::text[], $3::text[], $4::text[], $5::text[], $6::text[],
                       $7::int[], $8::int[], $9::int[], $10::text[])";

const S3_TIMEOUT: Duration = Duration::from_secs(5);

fn unix_secs() -> u64 {
    SystemTime::now().duration_since(UNIX_EPOCH).map_or(0, |d| d.as_secs())
}

pub struct RealDeps {
    rate_limit: i64,
    bucket: String,
    redis: ConnectionManager,
    pg: Pool,
    s3: aws_sdk_s3::Client,
}

#[derive(Default)]
pub struct MemoryDeps {
    rate_limit: i64,
    windows: Mutex<HashMap<String, (u64, i64)>>,
    idempotency: Mutex<HashMap<String, String>>,
}

pub enum Deps {
    Real(RealDeps),
    Memory(MemoryDeps),
}

impl Deps {
    pub async fn new(cfg: &Config) -> DepResult<Deps> {
        if cfg.mode == "memory" {
            return Ok(Deps::Memory(MemoryDeps { rate_limit: cfg.rate_limit, ..Default::default() }));
        }
        let redis = ConnectionManager::new(redis::Client::open(cfg.redis_url.as_str())?).await?;

        let mut pg_cfg = deadpool_postgres::Config::new();
        pg_cfg.url = Some(cfg.database_url.clone());
        pg_cfg.pool = Some(PoolConfig::new(cfg.pg_pool_size));
        let pg = pg_cfg.create_pool(Some(Runtime::Tokio1), NoTls)?;

        let s3_cfg = aws_sdk_s3::Config::builder()
            .behavior_version(BehaviorVersion::latest())
            .endpoint_url(&cfg.s3_endpoint)
            .region(Region::new("us-east-1"))
            .credentials_provider(Credentials::new(&cfg.s3_access_key, &cfg.s3_secret_key, None, None, "static"))
            .force_path_style(true)
            .build();
        Ok(Deps::Real(RealDeps {
            rate_limit: cfg.rate_limit,
            bucket: cfg.s3_bucket.clone(),
            redis,
            pg,
            s3: aws_sdk_s3::Client::from_conf(s3_cfg),
        }))
    }

    pub async fn rate_limit(&self, api_key: &str) -> DepResult<bool> {
        match self {
            Deps::Real(d) => {
                let key = format!("rl:{api_key}:{}", unix_secs());
                let mut con = d.redis.clone();
                let n: i64 = redis::cmd("INCR").arg(&key).query_async(&mut con).await?;
                if n == 1 {
                    let _: i64 = redis::cmd("EXPIRE").arg(&key).arg(2).query_async(&mut con).await?;
                }
                Ok(n <= d.rate_limit)
            }
            Deps::Memory(d) => {
                let sec = unix_secs();
                let mut w = d.windows.lock().map_err(|e| e.to_string())?;
                let entry = w.entry(api_key.to_string()).or_insert((sec, 0));
                if entry.0 != sec {
                    *entry = (sec, 0);
                }
                entry.1 += 1;
                Ok(entry.1 <= d.rate_limit)
            }
        }
    }

    pub async fn get_idempotency(&self, key: &str) -> DepResult<Option<String>> {
        match self {
            Deps::Real(d) => {
                let mut con = d.redis.clone();
                Ok(redis::cmd("GET").arg(key).query_async(&mut con).await?)
            }
            Deps::Memory(d) => Ok(d.idempotency.lock().map_err(|e| e.to_string())?.get(key).cloned()),
        }
    }

    pub async fn set_idempotency(&self, key: &str, value: &str) -> DepResult<()> {
        match self {
            Deps::Real(d) => {
                let mut con = d.redis.clone();
                let _: Option<String> = redis::cmd("SET")
                    .arg(key)
                    .arg(value)
                    .arg("EX")
                    .arg(86400)
                    .arg("NX")
                    .query_async(&mut con)
                    .await?;
                Ok(())
            }
            Deps::Memory(d) => {
                d.idempotency
                    .lock()
                    .map_err(|e| e.to_string())?
                    .entry(key.to_string())
                    .or_insert_with(|| value.to_string());
                Ok(())
            }
        }
    }

    pub async fn put_object(&self, key: &str, body: Vec<u8>) -> DepResult<()> {
        let Deps::Real(d) = self else { return Ok(()) };
        let send = d
            .s3
            .put_object()
            .bucket(&d.bucket)
            .key(key)
            .content_type("message/rfc822")
            .body(ByteStream::from(body))
            .send();
        tokio::time::timeout(S3_TIMEOUT, send).await??;
        Ok(())
    }

    pub async fn insert_emails(&self, rows: &[EmailRow]) -> DepResult<()> {
        let Deps::Real(d) = self else { return Ok(()) };
        let col = |f: fn(&EmailRow) -> &str| rows.iter().map(f).collect::<Vec<&str>>();
        let num = |f: fn(&EmailRow) -> i32| rows.iter().map(f).collect::<Vec<i32>>();
        let (ids, keys, froms, tos) = (col(|r| &r.id), col(|r| &r.api_key), col(|r| &r.from), col(|r| &r.to));
        let (subjects, texts, s3_keys) = (col(|r| &r.subject), col(|r| &r.text), col(|r| &r.s3_key));
        let (html_sizes, counts, sizes) =
            (num(|r| r.html_size), num(|r| r.attachment_count), num(|r| r.attachment_bytes));
        let client = d.pg.get().await?;
        let stmt = client.prepare_cached(INSERT_SQL).await?;
        client
            .execute(
                &stmt,
                &[&ids, &keys, &froms, &tos, &subjects, &texts, &html_sizes, &counts, &sizes, &s3_keys],
            )
            .await?;
        Ok(())
    }

    pub async fn enqueue(&self, ids: &[String]) -> DepResult<()> {
        let Deps::Real(d) = self else { return Ok(()) };
        let mut con = d.redis.clone();
        let _: i64 = redis::cmd("LPUSH").arg("queue:send").arg(ids).query_async(&mut con).await?;
        Ok(())
    }
}
