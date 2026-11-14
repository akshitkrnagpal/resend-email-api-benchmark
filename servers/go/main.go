package main

import (
	"bytes"
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json/v2"
	"errors"
	"io"
	"log"
	"net/http"
	"os"
	"os/signal"
	"runtime/pprof"
	"strconv"
	"strings"
	"syscall"
	"time"

	"github.com/google/uuid"
	"golang.org/x/sync/errgroup"
)

type httpError struct {
	status        int
	name, message string
}

func (e *httpError) Error() string { return e.message }

var errInternal = &httpError{500, "application_error", "Internal server error"}

type errorBody struct {
	StatusCode int    `json:"statusCode"`
	Name       string `json:"name"`
	Message    string `json:"message"`
}

type idBody struct {
	ID string `json:"id"`
}

type batchBody struct {
	Data []idBody `json:"data"`
}

type server struct {
	deps    deps
	apiKeys map[string]bool
}

func writeJSON(w http.ResponseWriter, status int, body []byte) {
	h := w.Header()
	h.Set("Content-Type", "application/json")
	h.Set("Content-Length", strconv.Itoa(len(body)))
	w.WriteHeader(status)
	w.Write(body)
}

func writeError(w http.ResponseWriter, e *httpError) {
	b, _ := json.Marshal(errorBody{e.status, e.name, e.message})
	writeJSON(w, e.status, b)
}

func toRow(id, apiKey string, e *normalizedEmail, s3Key string) emailRow {
	total := 0
	for _, a := range e.attachments {
		total += len(a.content)
	}
	return emailRow{
		id: id, apiKey: apiKey, from: e.from, to: strings.Join(e.to, ", "), subject: e.subject,
		text: e.text, s3Key: s3Key, htmlSize: int32(len(e.html)),
		attachmentCount: int32(len(e.attachments)), attachmentBytes: int32(total),
	}
}

func asHTTPError(err error) *httpError {
	var ve validationError
	if errors.As(err, &ve) {
		return &httpError{422, "validation_error", string(ve)}
	}
	var pe parseError
	if errors.As(err, &pe) {
		return &httpError{400, "invalid_json", "Request body is not valid JSON"}
	}
	return errInternal
}

func (s *server) sendOne(ctx context.Context, apiKey string, body []byte, idemKey string) ([]byte, *httpError) {
	var hash, redisKey string
	if idemKey != "" {
		sum := sha256.Sum256(body)
		hash = hex.EncodeToString(sum[:])
		redisKey = "idem:" + apiKey + ":" + idemKey
		stored, ok, err := s.deps.getIdempotency(ctx, redisKey)
		if err != nil {
			return nil, errInternal
		}
		if ok {
			storedHash, resp, _ := strings.Cut(stored, "\n")
			if storedHash == hash {
				return []byte(resp), nil
			}
			return nil, &httpError{409, "invalid_idempotent_request", "Same idempotency key used with a different request payload"}
		}
	}

	req, err := parseSingle(body)
	if err != nil {
		return nil, asHTTPError(err)
	}
	email, err := normalizeEmail(req)
	if err != nil {
		return nil, asHTTPError(err)
	}
	id := uuid.NewString()
	s3Key := "emails/" + id + ".eml"
	eml := buildEml(email)
	resp, _ := json.Marshal(idBody{id})

	if err := s.deps.putObject(ctx, s3Key, eml); err != nil {
		return nil, errInternal
	}
	if err := s.deps.insertEmails(ctx, []emailRow{toRow(id, apiKey, email, s3Key)}); err != nil {
		return nil, errInternal
	}
	if err := s.deps.enqueue(ctx, []string{id}); err != nil {
		return nil, errInternal
	}
	if idemKey != "" {
		if err := s.deps.setIdempotency(ctx, redisKey, hash+"\n"+string(resp)); err != nil {
			return nil, errInternal
		}
	}
	return resp, nil
}

func (s *server) sendBatch(ctx context.Context, apiKey string, body []byte) ([]byte, *httpError) {
	emails, err := parseBatch(body)
	if err != nil {
		return nil, asHTTPError(err)
	}
	ids := make([]string, len(emails))
	keys := make([]string, len(emails))
	rows := make([]emailRow, len(emails))
	for i, e := range emails {
		ids[i] = uuid.NewString()
		keys[i] = "emails/" + ids[i] + ".eml"
		rows[i] = toRow(ids[i], apiKey, e, keys[i])
	}
	var g errgroup.Group
	for i, e := range emails {
		g.Go(func() error { return s.deps.putObject(ctx, keys[i], buildEml(e)) })
	}
	if err := g.Wait(); err != nil {
		return nil, errInternal
	}
	if err := s.deps.insertEmails(ctx, rows); err != nil {
		return nil, errInternal
	}
	if err := s.deps.enqueue(ctx, ids); err != nil {
		return nil, errInternal
	}
	out := batchBody{Data: make([]idBody, len(ids))}
	for i, id := range ids {
		out.Data[i] = idBody{id}
	}
	resp, _ := json.Marshal(out)
	return resp, nil
}

func readBody(w http.ResponseWriter, r *http.Request) ([]byte, bool) {
	var buf bytes.Buffer
	if r.ContentLength > 0 {
		buf.Grow(int(r.ContentLength))
	}
	_, err := buf.ReadFrom(http.MaxBytesReader(w, r.Body, maxBytes))
	if err != nil {
		return nil, false
	}
	return buf.Bytes(), true
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	if r.Method == http.MethodGet && path == "/health" {
		w.Header().Set("Content-Type", "text/plain")
		io.WriteString(w, "ok")
		return
	}
	isSingle := r.Method == http.MethodPost && path == "/emails"
	isBatch := r.Method == http.MethodPost && path == "/emails/batch"
	if !isSingle && !isBatch {
		writeError(w, &httpError{404, "not_found", "Route not found"})
		return
	}

	auth, present := r.Header["Authorization"]
	if !present {
		writeError(w, &httpError{401, "missing_api_key", "Missing API key in the authorization header"})
		return
	}
	apiKey, _ := strings.CutPrefix(auth[0], "Bearer ")
	if !strings.HasPrefix(auth[0], "Bearer ") || !s.apiKeys[apiKey] {
		writeError(w, &httpError{403, "invalid_api_key", "API key is invalid"})
		return
	}

	ctx := r.Context()
	// Rate limit before touching the body.
	allowed, err := s.deps.rateLimit(ctx, apiKey)
	if err != nil {
		writeError(w, errInternal)
		return
	}
	if !allowed {
		writeError(w, &httpError{429, "rate_limit_exceeded", "Too many requests"})
		return
	}

	tooLarge := &httpError{413, "content_too_large", "Request body exceeds 40MB"}
	if r.ContentLength > maxBytes {
		writeError(w, tooLarge)
		return
	}
	body, ok := readBody(w, r)
	if !ok {
		writeError(w, tooLarge)
		return
	}

	var resp []byte
	var herr *httpError
	if isSingle {
		resp, herr = s.sendOne(ctx, apiKey, body, r.Header.Get("Idempotency-Key"))
	} else {
		resp, herr = s.sendBatch(ctx, apiKey, body)
	}
	if herr != nil {
		writeError(w, herr)
		return
	}
	writeJSON(w, http.StatusOK, resp)
}

func env(key, def string) string {
	if v, ok := os.LookupEnv(key); ok {
		return v
	}
	return def
}

func main() {
	poolSize, _ := strconv.Atoi(env("PG_POOL_SIZE", "20"))
	limit, _ := strconv.ParseInt(env("RATE_LIMIT", "1000000000"), 10, 64)
	cfg := config{
		mode:        env("MODE", "real"),
		redisURL:    env("REDIS_URL", "redis://localhost:6379"),
		databaseURL: env("DATABASE_URL", "postgres://bench:bench@localhost:5432/bench"),
		s3Endpoint:  env("S3_ENDPOINT", "http://localhost:7070"),
		s3Bucket:    env("S3_BUCKET", "emails"),
		s3AccessKey: env("S3_ACCESS_KEY", "bench"),
		s3SecretKey: env("S3_SECRET_KEY", "benchsecret"),
		pgPoolSize:  int32(poolSize),
		rateLimit:   limit,
	}

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGTERM, os.Interrupt)
	defer stop()

	// CPU_PROFILE=path records a profile until shutdown; it is used to build default.pgo.
	if path := os.Getenv("CPU_PROFILE"); path != "" {
		f, err := os.Create(path)
		if err != nil {
			log.Fatal(err)
		}
		if err := pprof.StartCPUProfile(f); err != nil {
			log.Fatal(err)
		}
		defer func() {
			pprof.StopCPUProfile()
			f.Close()
		}()
	}

	var d deps
	if cfg.mode == "memory" {
		d = newMemoryDeps(cfg)
	} else {
		rd, err := newRealDeps(ctx, cfg)
		if err != nil {
			log.Fatal(err)
		}
		d = rd
	}
	keys := map[string]bool{}
	for _, k := range strings.Split(env("API_KEYS", "re_bench_key"), ",") {
		keys[k] = true
	}

	port := env("PORT", "8080")
	srv := &http.Server{
		Addr:              ":" + port,
		Handler:           &server{deps: d, apiKeys: keys},
		ReadHeaderTimeout: 10 * time.Second,
		IdleTimeout:       65 * time.Second,
	}
	go func() {
		<-ctx.Done()
		srv.Close()
	}()
	log.Printf("go email-api listening on :%s (mode=%s)", port, cfg.mode)
	if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		log.Fatal(err)
	}
}
