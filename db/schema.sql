CREATE TABLE IF NOT EXISTS emails (
  id               text PRIMARY KEY,
  api_key          text NOT NULL,
  from_addr        text NOT NULL,
  to_addrs         text NOT NULL,
  subject          text NOT NULL,
  text_body        text NOT NULL,
  html_size        integer NOT NULL,
  attachment_count integer NOT NULL,
  attachment_bytes integer NOT NULL,
  s3_key           text NOT NULL,
  created_at       timestamptz NOT NULL DEFAULT now()
);
