package main

import (
	"bytes"
	"encoding/base64"
	"encoding/json/jsontext"
	"encoding/json/v2"
	"fmt"
	"math"
	"strconv"
	"strings"
)

const (
	maxBytes       = 40 * 1024 * 1024
	maxAddresses   = 50
	maxAttachments = 20
	addressFormat  = "The email address needs to follow the `email@example.com` or `Name <email@example.com>` format."
)

// JSON options that keep JavaScript's JSON.parse behaviour: last duplicate key wins and
// invalid UTF-8 becomes U+FFFD instead of an error.
var jsonOpts = json.JoinOptions(jsontext.AllowDuplicateNames(true), jsontext.AllowInvalidUTF8(true))

type validationError string

func (e validationError) Error() string { return string(e) }

type attachment struct {
	filename string
	content  []byte
}

type tag struct{ name, value string }

type normalizedEmail struct {
	from, subject, html, text string
	to, cc, bcc, replyTo      []string
	attachments               []attachment
	tags                      []tag
}

// --- request decoding ---------------------------------------------------------------
// Fields are kept raw and validated afterwards, in the reference order, so that the
// first failing rule produces the same message as the Node service.

type emailRequest struct {
	From        jsontext.Value   `json:"from"`
	To          jsontext.Value   `json:"to"`
	Cc          jsontext.Value   `json:"cc"`
	Bcc         jsontext.Value   `json:"bcc"`
	ReplyTo     jsontext.Value   `json:"reply_to"`
	Subject     jsontext.Value   `json:"subject"`
	HTML        jsontext.Value   `json:"html"`
	Text        jsontext.Value   `json:"text"`
	Tags        jsontext.Value   `json:"tags"`
	Attachments attachmentsField `json:"attachments"`
}

// attachmentsField decodes attachments in a single streaming pass. Large Node Buffers
// ({"type":"Buffer","data":[...]}) go straight to bytes without an intermediate tree.
type attachmentsField struct {
	set   bool
	isArr bool
	items []attachmentItem
}

type attachmentItem struct {
	isObj    bool
	filename jsontext.Value
	content  contentField
}

type contentKind int

const (
	contentInvalid contentKind = iota
	contentBase64
	contentBuffer
)

type contentField struct {
	kind contentKind
	b64  string
	data []byte
}

func (a *attachmentsField) UnmarshalJSONFrom(d *jsontext.Decoder) error {
	*a = attachmentsField{}
	switch d.PeekKind() {
	case 'n':
		_, err := d.ReadToken()
		return err
	case '[':
		a.set, a.isArr = true, true
		if _, err := d.ReadToken(); err != nil {
			return err
		}
		for d.PeekKind() != ']' {
			var it attachmentItem
			if err := it.decode(d); err != nil {
				return err
			}
			a.items = append(a.items, it)
		}
		_, err := d.ReadToken()
		return err
	default:
		a.set = true
		return d.SkipValue()
	}
}

func (it *attachmentItem) decode(d *jsontext.Decoder) error {
	if d.PeekKind() != '{' {
		return d.SkipValue()
	}
	it.isObj = true
	if _, err := d.ReadToken(); err != nil {
		return err
	}
	for d.PeekKind() != '}' {
		tok, err := d.ReadToken()
		if err != nil {
			return err
		}
		switch tok.String() {
		case "filename":
			v, err := d.ReadValue()
			if err != nil {
				return err
			}
			it.filename = v.Clone()
		case "content":
			if err := it.content.decode(d); err != nil {
				return err
			}
		default:
			if err := d.SkipValue(); err != nil {
				return err
			}
		}
	}
	_, err := d.ReadToken()
	return err
}

func (c *contentField) decode(d *jsontext.Decoder) error {
	*c = contentField{}
	switch d.PeekKind() {
	case '"':
		tok, err := d.ReadToken()
		if err != nil {
			return err
		}
		c.kind, c.b64 = contentBase64, tok.String()
		return nil
	case '{':
		if _, err := d.ReadToken(); err != nil {
			return err
		}
		isBuffer, dataIsArray := false, false
		for d.PeekKind() != '}' {
			tok, err := d.ReadToken()
			if err != nil {
				return err
			}
			switch tok.String() {
			case "type":
				v, err := d.ReadValue()
				if err != nil {
					return err
				}
				s, ok := decodeString(v)
				isBuffer = ok && s == "Buffer"
			case "data":
				if d.PeekKind() != '[' {
					dataIsArray = false
					if err := d.SkipValue(); err != nil {
						return err
					}
					continue
				}
				dataIsArray = true
				raw, err := d.ReadValue() // validated once by jsontext
				if err != nil {
					return err
				}
				if data, ok := fastIntArray(raw); ok {
					c.data = data
				} else if err := c.decodeBufferData(jsontext.NewDecoder(bytes.NewReader(raw), jsonOpts)); err != nil {
					return err
				}
			default:
				if err := d.SkipValue(); err != nil {
					return err
				}
			}
		}
		if _, err := d.ReadToken(); err != nil {
			return err
		}
		if isBuffer && dataIsArray {
			c.kind = contentBuffer
		}
		return nil
	default:
		return d.SkipValue()
	}
}

// fastIntArray handles the common case of a serialized Buffer: an already-validated JSON
// array holding only non-negative integers. Anything else returns ok=false and takes the
// general token-by-token path below.
func fastIntArray(raw []byte) ([]byte, bool) {
	out := make([]byte, 0, len(raw)/3)
	var v uint64
	digits := 0
	for _, c := range raw[1 : len(raw)-1] {
		switch {
		case c >= '0' && c <= '9':
			if digits == 15 { // beyond exact integer range for this path
				return nil, false
			}
			v = v*10 + uint64(c-'0')
			digits++
		case c == ',' || c == ' ' || c == '\n' || c == '\r' || c == '\t':
			if digits > 0 {
				out = append(out, byte(v))
				v, digits = 0, 0
			}
		default: // '-', '.', 'e', strings, literals, nested values
			return nil, false
		}
	}
	if digits > 0 {
		out = append(out, byte(v))
	}
	return out, true
}

// decodeBufferData coerces each element the way Buffer.from(array) does.
func (c *contentField) decodeBufferData(d *jsontext.Decoder) error {
	if _, err := d.ReadToken(); err != nil { // '['
		return err
	}
	c.data = c.data[:0]
	for {
		switch d.PeekKind() {
		case ']':
			_, err := d.ReadToken()
			return err
		case '0':
			v, err := d.ReadValue()
			if err != nil {
				return err
			}
			c.data = append(c.data, toUint8(parseFloatJS(string(v))))
		case '"':
			tok, err := d.ReadToken()
			if err != nil {
				return err
			}
			c.data = append(c.data, toUint8(stringToNumber(tok.String())))
		case 't':
			if _, err := d.ReadToken(); err != nil {
				return err
			}
			c.data = append(c.data, 1)
		case 'f', 'n':
			if _, err := d.ReadToken(); err != nil {
				return err
			}
			c.data = append(c.data, 0)
		case '[':
			f, err := readArrayNumber(d)
			if err != nil {
				return err
			}
			c.data = append(c.data, toUint8(f))
		default: // objects -> "[object Object]" -> NaN (or a syntax error, which SkipValue reports)
			if err := d.SkipValue(); err != nil {
				return err
			}
			c.data = append(c.data, 0)
		}
	}
}

// readArrayNumber is ToNumber(array): the array becomes array.join(","), so [] is 0, [x] is
// ToNumber(String(x)) and anything longer contains a comma and is NaN.
func readArrayNumber(d *jsontext.Decoder) (float64, error) {
	if _, err := d.ReadToken(); err != nil { // '['
		return 0, err
	}
	n, v := 0, 0.0
	for d.PeekKind() != ']' {
		n++
		switch d.PeekKind() {
		case '0':
			raw, err := d.ReadValue()
			if err != nil {
				return 0, err
			}
			v = parseFloatJS(string(raw))
		case '"':
			tok, err := d.ReadToken()
			if err != nil {
				return 0, err
			}
			v = stringToNumber(tok.String())
		case 'n': // String(null) inside join is ""
			if _, err := d.ReadToken(); err != nil {
				return 0, err
			}
			v = 0
		case '[':
			f, err := readArrayNumber(d)
			if err != nil {
				return 0, err
			}
			v = f
		default: // "true", "false", "[object Object]"
			if err := d.SkipValue(); err != nil {
				return 0, err
			}
			v = math.NaN()
		}
	}
	if _, err := d.ReadToken(); err != nil { // ']'
		return 0, err
	}
	switch n {
	case 0:
		return 0, nil
	case 1:
		return v, nil
	}
	return math.NaN(), nil
}

// --- validation ---------------------------------------------------------------------

func isNull(v jsontext.Value) bool { return len(v) == 0 || string(v) == "null" }

func decodeString(v jsontext.Value) (string, bool) {
	if len(v) == 0 || v[0] != '"' {
		return "", false
	}
	var s string
	if err := json.Unmarshal(v, &s, jsonOpts); err != nil {
		return "", false
	}
	return s, true
}

func isASCIISpace(c byte) bool {
	return c == ' ' || c == '\t' || c == '\n' || c == '\r' || c == '\f'
}

func asciiTrim(s string) string {
	a, b := 0, len(s)
	for a < b && isASCIISpace(s[a]) {
		a++
	}
	for b > a && isASCIISpace(s[b-1]) {
		b--
	}
	return s[a:b]
}

func isValidAddress(raw string) bool {
	s := asciiTrim(raw)
	if strings.HasSuffix(s, ">") {
		lt := strings.LastIndexByte(s, '<')
		if lt < 0 {
			return false
		}
		s = asciiTrim(s[lt+1 : len(s)-1])
	}
	if len(s) == 0 || len(s) > 254 {
		return false
	}
	at := -1
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c <= 32 || c >= 127 {
			return false
		}
		if c == '@' {
			if at >= 0 {
				return false
			}
			at = i
		}
	}
	if at < 1 || at > 64 {
		return false
	}
	domain := s[at+1:]
	if !strings.Contains(domain, ".") {
		return false
	}
	first, last := domain[0], domain[len(domain)-1]
	return first != '.' && first != '-' && last != '.' && last != '-'
}

func addressList(v jsontext.Value, field string, required bool) ([]string, error) {
	if isNull(v) {
		if required {
			return nil, validationError(fmt.Sprintf("`%s` is required", field))
		}
		return nil, nil
	}
	typeErr := validationError(fmt.Sprintf("`%s` must be a string or an array of strings", field))
	var list []string
	switch v[0] {
	case '"':
		s, _ := decodeString(v)
		list = []string{s}
	case '[':
		var items []jsontext.Value
		if err := json.Unmarshal(v, &items, jsonOpts); err != nil {
			return nil, typeErr
		}
		list = make([]string, 0, len(items))
		for _, it := range items {
			s, ok := decodeString(it)
			if !ok {
				return nil, typeErr
			}
			list = append(list, s)
		}
	default:
		return nil, typeErr
	}
	if (required && len(list) == 0) || len(list) > maxAddresses {
		return nil, validationError(fmt.Sprintf("`%s` must contain between 1 and 50 addresses", field))
	}
	for i, a := range list {
		if !isValidAddress(a) {
			return nil, validationError(fmt.Sprintf("Invalid `%s` field. %s", field, addressFormat))
		}
		list[i] = asciiTrim(a)
	}
	return list, nil
}

func optionalString(v jsontext.Value, field string) (string, bool, error) {
	if isNull(v) {
		return "", false, nil
	}
	s, ok := decodeString(v)
	if !ok {
		return "", false, validationError(fmt.Sprintf("`%s` must be a string", field))
	}
	return s, true, nil
}

func normalizeAttachments(f *attachmentsField) ([]attachment, error) {
	if !f.set {
		return nil, nil
	}
	if !f.isArr {
		return nil, validationError("`attachments` must be an array")
	}
	if len(f.items) > maxAttachments {
		return nil, validationError("`attachments` can contain at most 20 items")
	}
	out := make([]attachment, 0, len(f.items))
	total := 0
	for i := range f.items {
		it := &f.items[i]
		if !it.isObj {
			return nil, validationError(fmt.Sprintf("`attachments[%d]` must be an object", i))
		}
		filename, ok := decodeString(it.filename)
		if !ok || filename == "" {
			return nil, validationError(fmt.Sprintf("`attachments[%d].filename` is required", i))
		}
		var content []byte
		switch it.content.kind {
		case contentBase64:
			content = decodeBase64Lenient(it.content.b64)
		case contentBuffer:
			content = it.content.data
		default:
			return nil, validationError(fmt.Sprintf("`attachments[%d].content` must be a base64 string or a Buffer", i))
		}
		total += len(content)
		if total > maxBytes {
			return nil, validationError("Attachments exceed the 40MB limit")
		}
		out = append(out, attachment{filename: filename, content: content})
	}
	return out, nil
}

func isTagToken(s string) bool {
	if len(s) < 1 || len(s) > 256 {
		return false
	}
	for i := 0; i < len(s); i++ {
		c := s[i]
		if !(isAlnum(c) || c == '_' || c == '-') {
			return false
		}
	}
	return true
}

func normalizeTags(v jsontext.Value) ([]tag, error) {
	if isNull(v) {
		return nil, nil
	}
	if v[0] != '[' {
		return nil, validationError("`tags` must be an array")
	}
	var items []jsontext.Value
	if err := json.Unmarshal(v, &items, jsonOpts); err != nil {
		return nil, validationError("`tags` must be an array")
	}
	out := make([]tag, 0, len(items))
	for i, it := range items {
		if len(it) == 0 || it[0] != '{' {
			return nil, validationError(fmt.Sprintf("`tags[%d]` must be an object", i))
		}
		var obj map[string]jsontext.Value
		if err := json.Unmarshal(it, &obj, jsonOpts); err != nil {
			return nil, validationError(fmt.Sprintf("`tags[%d]` must be an object", i))
		}
		name, ok := decodeString(obj["name"])
		if !ok || !isTagToken(name) {
			return nil, validationError(fmt.Sprintf("`tags[%d].name` must only contain ASCII letters, numbers, underscores, or dashes", i))
		}
		value, ok := decodeString(obj["value"])
		if !ok || !isTagToken(value) {
			return nil, validationError(fmt.Sprintf("`tags[%d].value` must only contain ASCII letters, numbers, underscores, or dashes", i))
		}
		out = append(out, tag{name: name, value: value})
	}
	return out, nil
}

func normalizeEmail(r *emailRequest) (*normalizedEmail, error) {
	if isNull(r.From) {
		return nil, validationError("`from` is required")
	}
	from, ok := decodeString(r.From)
	if !ok {
		return nil, validationError("`from` must be a string")
	}
	if !isValidAddress(from) {
		return nil, validationError("Invalid `from` field. " + addressFormat)
	}
	to, err := addressList(r.To, "to", true)
	if err != nil {
		return nil, err
	}
	cc, err := addressList(r.Cc, "cc", false)
	if err != nil {
		return nil, err
	}
	bcc, err := addressList(r.Bcc, "bcc", false)
	if err != nil {
		return nil, err
	}
	replyTo, err := addressList(r.ReplyTo, "reply_to", false)
	if err != nil {
		return nil, err
	}
	if isNull(r.Subject) {
		return nil, validationError("`subject` is required")
	}
	subject, ok := decodeString(r.Subject)
	if !ok {
		return nil, validationError("`subject` must be a string")
	}
	html, hasHTML, err := optionalString(r.HTML, "html")
	if err != nil {
		return nil, err
	}
	text, hasText, err := optionalString(r.Text, "text")
	if err != nil {
		return nil, err
	}
	if !hasHTML && !hasText {
		return nil, validationError("Either `html` or `text` must be provided")
	}
	atts, err := normalizeAttachments(&r.Attachments)
	if err != nil {
		return nil, err
	}
	tags, err := normalizeTags(r.Tags)
	if err != nil {
		return nil, err
	}
	if !hasText {
		text = htmlToText(html)
	}
	return &normalizedEmail{
		from: asciiTrim(from), to: to, cc: cc, bcc: bcc, replyTo: replyTo,
		subject: subject, html: html, text: text, attachments: atts, tags: tags,
	}, nil
}

// --- top-level parsing --------------------------------------------------------------

type parseError struct{}

func (parseError) Error() string { return "invalid json" }

func firstNonSpace(b []byte) byte {
	for _, c := range b {
		if c != ' ' && c != '\t' && c != '\n' && c != '\r' {
			return c
		}
	}
	return 0
}

// parseSingle returns parseError for malformed JSON and validationError for valid JSON
// that is not an object, mirroring JSON.parse followed by the reference validator.
func parseSingle(body []byte) (*emailRequest, error) {
	if firstNonSpace(body) != '{' {
		if jsontext.Value(body).IsValid(jsontext.AllowInvalidUTF8(true)) {
			return nil, validationError("Request body must be a JSON object")
		}
		return nil, parseError{}
	}
	var r emailRequest
	if err := json.Unmarshal(body, &r, jsonOpts); err != nil {
		return nil, parseError{}
	}
	return &r, nil
}

func parseBatch(body []byte) ([]*normalizedEmail, error) {
	if firstNonSpace(body) != '[' {
		if jsontext.Value(body).IsValid(jsontext.AllowInvalidUTF8(true)) {
			return nil, validationError("Request body must be a JSON array")
		}
		return nil, parseError{}
	}
	var items []jsontext.Value
	if err := json.Unmarshal(body, &items, jsonOpts); err != nil {
		return nil, parseError{}
	}
	if len(items) < 1 || len(items) > 100 {
		return nil, validationError("Batch must contain between 1 and 100 emails")
	}
	out := make([]*normalizedEmail, 0, len(items))
	for i, it := range items {
		prefix := "emails[" + strconv.Itoa(i) + "]: "
		if len(it) == 0 || it[0] != '{' {
			return nil, validationError(prefix + "Request body must be a JSON object")
		}
		var r emailRequest
		if err := json.Unmarshal(it, &r, jsonOpts); err != nil {
			return nil, parseError{}
		}
		if r.Attachments.set {
			return nil, validationError(prefix + "`attachments` are not supported in batch emails")
		}
		e, err := normalizeEmail(&r)
		if err != nil {
			return nil, validationError(prefix + err.Error())
		}
		out = append(out, e)
	}
	return out, nil
}

// --- .eml -------------------------------------------------------------------------

func buildEml(e *normalizedEmail) []byte {
	size := len(e.text) + len(e.html) + 512
	for _, a := range e.attachments {
		size += base64.StdEncoding.EncodedLen(len(a.content))*78/76 + 64
	}
	var b bytes.Buffer
	b.Grow(size)
	line := func(parts ...string) {
		for _, p := range parts {
			b.WriteString(p)
		}
		b.WriteString("\r\n")
	}
	line("From: ", e.from)
	line("To: ", strings.Join(e.to, ", "))
	if len(e.cc) > 0 {
		line("Cc: ", strings.Join(e.cc, ", "))
	}
	if len(e.bcc) > 0 {
		line("Bcc: ", strings.Join(e.bcc, ", "))
	}
	if len(e.replyTo) > 0 {
		line("Reply-To: ", strings.Join(e.replyTo, ", "))
	}
	line("Subject: ", e.subject)
	if len(e.tags) > 0 {
		parts := make([]string, len(e.tags))
		for i, t := range e.tags {
			parts[i] = t.name + "=" + t.value
		}
		line("X-Tags: ", strings.Join(parts, "; "))
	}
	line()
	line("--text")
	line(e.text)
	line("--html")
	line(e.html)
	for _, a := range e.attachments {
		line("--attachment ", a.filename, " ", strconv.Itoa(len(a.content)))
		enc := base64.StdEncoding.EncodeToString(a.content)
		for i := 0; i < len(enc); i += 76 {
			line(enc[i:min(i+76, len(enc))])
		}
	}
	line("--end")
	return b.Bytes()
}
