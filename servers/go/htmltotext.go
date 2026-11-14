package main

import "strings"

// Port of servers/ts/src/htmltotext.ts. Works on bytes; every structural character is
// ASCII, so slicing at those positions matches the UTF-16 reference.

var blockTags = map[string]bool{
	"p": true, "div": true, "h1": true, "h2": true, "h3": true, "h4": true, "h5": true, "h6": true,
	"tr": true, "table": true, "ul": true, "ol": true, "blockquote": true, "section": true,
	"header": true, "footer": true, "hr": true,
}
var rawSkipTags = map[string]bool{"script": true, "style": true, "head": true, "title": true}
var voidTags = map[string]bool{"br": true, "hr": true, "img": true, "input": true, "meta": true, "link": true}

type htmlTag struct {
	name        string
	closing     bool
	selfClosing bool
	attrs       string
	end         int
}

func isAlnum(c byte) bool {
	return (c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')
}

func indexFrom(s string, sub string, from int) int {
	if from > len(s) {
		return -1
	}
	i := strings.Index(s[from:], sub)
	if i < 0 {
		return -1
	}
	return from + i
}

func indexByteFrom(s string, c byte, from int) int {
	if from > len(s) {
		return -1
	}
	i := strings.IndexByte(s[from:], c)
	if i < 0 {
		return -1
	}
	return from + i
}

func parseTag(h string, i int) (htmlTag, bool) {
	gt := indexByteFrom(h, '>', i+1)
	if gt < 0 {
		return htmlTag{}, false
	}
	j := i + 1
	closing := false
	if h[j] == '/' {
		closing = true
		j++
	}
	nameStart := j
	for j < gt && isAlnum(h[j]) {
		j++
	}
	return htmlTag{
		name:        strings.ToLower(h[nameStart:j]),
		closing:     closing,
		selfClosing: gt > i+1 && h[gt-1] == '/',
		attrs:       h[j:gt],
		end:         gt + 1,
	}, true
}

func skipRaw(h, name string, from int) int {
	k := from
	for {
		lt := indexFrom(h, "</", k)
		if lt < 0 {
			return len(h)
		}
		t, ok := parseTag(h, lt)
		if !ok {
			return len(h)
		}
		if t.name == name {
			return t.end
		}
		k = lt + 2
	}
}

func skipBalanced(h, name string, from int) int {
	depth := 1
	k := from
	for {
		lt := indexByteFrom(h, '<', k)
		if lt < 0 {
			return len(h)
		}
		if strings.HasPrefix(h[lt:], "<!--") {
			e := indexFrom(h, "-->", lt+4)
			if e < 0 {
				return len(h)
			}
			k = e + 3
			continue
		}
		t, ok := parseTag(h, lt)
		if !ok {
			return len(h)
		}
		k = t.end
		if t.name != name {
			continue
		}
		if t.closing {
			depth--
			if depth == 0 {
				return t.end
			}
		} else if !t.selfClosing {
			depth++
		}
	}
}

func isHTMLSpace(c byte) bool {
	return c == ' ' || c == '\t' || c == '\n' || c == '\r' || c == '\f'
}

func appendCollapsedText(b *strings.Builder, s string) {
	if strings.IndexByte(s, '&') < 0 {
		appendCollapsedWS(b, s)
		return
	}
	var tmp strings.Builder
	tmp.Grow(len(s))
	appendCollapsedWS(&tmp, s)
	appendDecodedEntities(b, tmp.String())
}

func appendCollapsedWS(b *strings.Builder, s string) {
	inWS := false
	start := 0
	for i := 0; i < len(s); i++ {
		if isHTMLSpace(s[i]) {
			if !inWS {
				b.WriteString(s[start:i])
				b.WriteByte(' ')
				inWS = true
			}
			start = i + 1
		} else {
			inWS = false
		}
	}
	b.WriteString(s[start:])
}

var namedEntities = map[string]string{
	"amp": "&", "lt": "<", "gt": ">", "quot": "\"", "apos": "'", "nbsp": " ",
}

func isDigit(c byte) bool { return c >= '0' && c <= '9' }
func isAlpha(c byte) bool { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') }
func hexVal(c byte) int {
	switch {
	case c >= '0' && c <= '9':
		return int(c - '0')
	case c >= 'a' && c <= 'f':
		return int(c-'a') + 10
	case c >= 'A' && c <= 'F':
		return int(c-'A') + 10
	}
	return -1
}

func codePointOrLiteral(cp int, literal string) string {
	if cp < 1 || cp > 0x10FFFF || (cp >= 0xD800 && cp <= 0xDFFF) {
		return literal
	}
	return string(rune(cp))
}

// Mirrors /&(#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g. Returns the end index and replacement.
func matchEntity(s string, i int) (int, string, bool) {
	j := i + 1
	if j < len(s) && s[j] == '#' {
		j++
		if j+1 < len(s) && (s[j] == 'x' || s[j] == 'X') && hexVal(s[j+1]) >= 0 {
			k, cp := j+1, 0
			for k < len(s) && hexVal(s[k]) >= 0 {
				cp = min(cp*16+hexVal(s[k]), 0x110000)
				k++
			}
			if k < len(s) && s[k] == ';' {
				return k + 1, codePointOrLiteral(cp, s[i:k+1]), true
			}
			return 0, "", false
		}
		k, cp := j, 0
		for k < len(s) && isDigit(s[k]) {
			cp = min(cp*10+int(s[k]-'0'), 0x110000)
			k++
		}
		if k > j && k < len(s) && s[k] == ';' {
			return k + 1, codePointOrLiteral(cp, s[i:k+1]), true
		}
		return 0, "", false
	}
	k := j
	for k < len(s) && isAlpha(s[k]) {
		k++
	}
	if k > j && k < len(s) && s[k] == ';' {
		if r, ok := namedEntities[s[j:k]]; ok {
			return k + 1, r, true
		}
		return k + 1, s[i : k+1], true
	}
	return 0, "", false
}

func appendDecodedEntities(b *strings.Builder, s string) {
	i := 0
	for i < len(s) {
		amp := indexByteFrom(s, '&', i)
		if amp < 0 {
			b.WriteString(s[i:])
			return
		}
		b.WriteString(s[i:amp])
		if end, repl, ok := matchEntity(s, amp); ok {
			b.WriteString(repl)
			i = end
		} else {
			b.WriteByte('&')
			i = amp + 1
		}
	}
}

func postProcess(s string) string {
	lines := strings.Split(s, "\n")
	for i, l := range lines {
		lines[i] = strings.Trim(collapseSpaces(l), " ")
	}
	joined := strings.Join(lines, "\n")

	var b strings.Builder
	b.Grow(len(joined))
	run := 0
	for i := 0; i < len(joined); i++ {
		c := joined[i]
		if c == '\n' {
			run++
			if run > 2 {
				continue
			}
		} else {
			run = 0
		}
		b.WriteByte(c)
	}
	return strings.Trim(b.String(), "\n")
}

func collapseSpaces(l string) string {
	if !strings.Contains(l, "  ") {
		return l
	}
	var b strings.Builder
	b.Grow(len(l))
	prevSpace := false
	for i := 0; i < len(l); i++ {
		if l[i] == ' ' {
			if prevSpace {
				continue
			}
			prevSpace = true
		} else {
			prevSpace = false
		}
		b.WriteByte(l[i])
	}
	return b.String()
}

func htmlToText(h string) string {
	var out strings.Builder
	out.Grow(len(h) / 2)
	i, n := 0, len(h)
	for i < n {
		if h[i] == '<' {
			if strings.HasPrefix(h[i:], "<!--") {
				e := indexFrom(h, "-->", i+4)
				if e < 0 {
					i = n
				} else {
					i = e + 3
				}
				continue
			}
			t, ok := parseTag(h, i)
			if !ok {
				out.WriteByte('<')
				i++
				continue
			}
			i = t.end
			if !t.closing {
				if rawSkipTags[t.name] {
					i = skipRaw(h, t.name, i)
					continue
				}
				if t.name != "" && !t.selfClosing && !voidTags[t.name] &&
					strings.Contains(t.attrs, `data-skip-in-text="true"`) {
					i = skipBalanced(h, t.name, i)
					continue
				}
			}
			switch {
			case t.name == "br":
				out.WriteByte('\n')
			case blockTags[t.name]:
				out.WriteString("\n\n")
			case t.name == "li":
				if t.closing {
					out.WriteByte('\n')
				} else {
					out.WriteString("\n* ")
				}
			case (t.name == "td" || t.name == "th") && t.closing:
				out.WriteByte(' ')
			}
			continue
		}
		j := indexByteFrom(h, '<', i)
		if j < 0 {
			j = n
		}
		appendCollapsedText(&out, h[i:j])
		i = j
	}
	return postProcess(out.String())
}
