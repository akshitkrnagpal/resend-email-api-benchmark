package main

import (
	"bytes"
	"context"
	"errors"
	"net/http"
	"strconv"
	"sync"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	awshttp "github.com/aws/aws-sdk-go-v2/aws/transport/http"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/redis/go-redis/v9"
)

type emailRow struct {
	id, apiKey, from, to, subject, text, s3Key string
	htmlSize, attachmentCount, attachmentBytes int32
}

type deps interface {
	rateLimit(ctx context.Context, apiKey string) (bool, error)
	getIdempotency(ctx context.Context, key string) (string, bool, error)
	setIdempotency(ctx context.Context, key, value string) error
	putObject(ctx context.Context, key string, body []byte) error
	insertEmails(ctx context.Context, rows []emailRow) error
	enqueue(ctx context.Context, ids []string) error
}

type config struct {
	mode, redisURL, databaseURL, s3Endpoint, s3Bucket, s3AccessKey, s3SecretKey string
	pgPoolSize                                                                  int32
	rateLimit                                                                   int64
}

const insertSQL = `INSERT INTO emails
  (id, api_key, from_addr, to_addrs, subject, text_body, html_size, attachment_count, attachment_bytes, s3_key)
  SELECT * FROM unnest($1::text[], $2::text[], $3::text[], $4::text[], $5::text[], $6::text[],
                       $7::int[], $8::int[], $9::int[], $10::text[])`

const s3Timeout = 5 * time.Second

type realDeps struct {
	cfg   config
	redis *redis.Client
	pg    *pgxpool.Pool
	s3    *s3.Client
}

func newRealDeps(ctx context.Context, cfg config) (*realDeps, error) {
	ropts, err := redis.ParseURL(cfg.redisURL)
	if err != nil {
		return nil, err
	}
	// go-redis defaults to 10 connections per GOMAXPROCS. Every request makes ~3 Redis round trips,
	// so with any network latency a 10-connection pool queues requests; the Node, Bun and Rust
	// clients multiplex one connection and never wait for one.
	ropts.PoolSize = 128
	pcfg, err := pgxpool.ParseConfig(cfg.databaseURL)
	if err != nil {
		return nil, err
	}
	pcfg.MaxConns = cfg.pgPoolSize
	pool, err := pgxpool.NewWithConfig(ctx, pcfg)
	if err != nil {
		return nil, err
	}
	// The SDK keeps only 10 idle connections per host by default; a batch fans out 50
	// uploads at once, so raise it to avoid reconnecting on every request.
	httpClient := awshttp.NewBuildableClient().WithTransportOptions(func(t *http.Transport) {
		t.MaxIdleConns = 1024
		t.MaxIdleConnsPerHost = 1024
	})
	client := s3.New(s3.Options{
		HTTPClient:   httpClient,
		BaseEndpoint: aws.String(cfg.s3Endpoint),
		Region:       "us-east-1",
		UsePathStyle: true,
		Credentials:  credentials.NewStaticCredentialsProvider(cfg.s3AccessKey, cfg.s3SecretKey, ""),
	})
	return &realDeps{cfg: cfg, redis: redis.NewClient(ropts), pg: pool, s3: client}, nil
}

func (d *realDeps) rateLimit(ctx context.Context, apiKey string) (bool, error) {
	key := "rl:" + apiKey + ":" + strconv.FormatInt(time.Now().Unix(), 10)
	n, err := d.redis.Incr(ctx, key).Result()
	if err != nil {
		return false, err
	}
	if n == 1 {
		if err := d.redis.Expire(ctx, key, 2*time.Second).Err(); err != nil {
			return false, err
		}
	}
	return n <= d.cfg.rateLimit, nil
}

func (d *realDeps) getIdempotency(ctx context.Context, key string) (string, bool, error) {
	v, err := d.redis.Get(ctx, key).Result()
	if errors.Is(err, redis.Nil) {
		return "", false, nil
	}
	if err != nil {
		return "", false, err
	}
	return v, true, nil
}

func (d *realDeps) setIdempotency(ctx context.Context, key, value string) error {
	return d.redis.SetNX(ctx, key, value, 24*time.Hour).Err()
}

func (d *realDeps) putObject(ctx context.Context, key string, body []byte) error {
	ctx, cancel := context.WithTimeout(ctx, s3Timeout)
	defer cancel()
	_, err := d.s3.PutObject(ctx, &s3.PutObjectInput{
		Bucket:      aws.String(d.cfg.s3Bucket),
		Key:         aws.String(key),
		Body:        bytes.NewReader(body),
		ContentType: aws.String("message/rfc822"),
	})
	return err
}

func (d *realDeps) insertEmails(ctx context.Context, rows []emailRow) error {
	n := len(rows)
	ids, keys, froms, tos, subjects, texts, s3Keys := make([]string, n), make([]string, n), make([]string, n),
		make([]string, n), make([]string, n), make([]string, n), make([]string, n)
	htmlSizes, counts, sizes := make([]int32, n), make([]int32, n), make([]int32, n)
	for i, r := range rows {
		ids[i], keys[i], froms[i], tos[i], subjects[i], texts[i], s3Keys[i] = r.id, r.apiKey, r.from, r.to, r.subject, r.text, r.s3Key
		htmlSizes[i], counts[i], sizes[i] = r.htmlSize, r.attachmentCount, r.attachmentBytes
	}
	_, err := d.pg.Exec(ctx, insertSQL, ids, keys, froms, tos, subjects, texts, htmlSizes, counts, sizes, s3Keys)
	return err
}

func (d *realDeps) enqueue(ctx context.Context, ids []string) error {
	args := make([]any, len(ids))
	for i, id := range ids {
		args[i] = id
	}
	return d.redis.LPush(ctx, "queue:send", args...).Err()
}

type memoryDeps struct {
	cfg         config
	mu          sync.Mutex
	windows     map[string][2]int64 // apiKey -> {unixSec, count}
	idempotency map[string]string
}

func newMemoryDeps(cfg config) *memoryDeps {
	return &memoryDeps{cfg: cfg, windows: map[string][2]int64{}, idempotency: map[string]string{}}
}

func (d *memoryDeps) rateLimit(_ context.Context, apiKey string) (bool, error) {
	sec := time.Now().Unix()
	d.mu.Lock()
	defer d.mu.Unlock()
	w := d.windows[apiKey]
	if w[0] != sec {
		w = [2]int64{sec, 0}
	}
	w[1]++
	d.windows[apiKey] = w
	return w[1] <= d.cfg.rateLimit, nil
}

func (d *memoryDeps) getIdempotency(_ context.Context, key string) (string, bool, error) {
	d.mu.Lock()
	defer d.mu.Unlock()
	v, ok := d.idempotency[key]
	return v, ok, nil
}

func (d *memoryDeps) setIdempotency(_ context.Context, key, value string) error {
	d.mu.Lock()
	defer d.mu.Unlock()
	if _, ok := d.idempotency[key]; !ok {
		d.idempotency[key] = value
	}
	return nil
}

func (d *memoryDeps) putObject(context.Context, string, []byte) error { return nil }
func (d *memoryDeps) insertEmails(context.Context, []emailRow) error  { return nil }
func (d *memoryDeps) enqueue(context.Context, []string) error         { return nil }
