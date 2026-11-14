package main

import (
	"errors"
	"math"
	"strconv"
	"strings"
)

// JavaScript behaviours the Node service relied on, rebuilt by hand.

var b64Values [256]int8

func init() {
	for i := range b64Values {
		b64Values[i] = -1
	}
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
	for i := 0; i < len(alphabet); i++ {
		b64Values[alphabet[i]] = int8(i)
	}
	b64Values['-'] = 62
	b64Values['_'] = 63
}

// decodeBase64Lenient matches Buffer.from(s, "base64"): skips characters outside the
// alphabet, accepts the URL-safe alphabet, stops at the first '=', ignores a dangling sextet.
func decodeBase64Lenient(s string) []byte {
	out := make([]byte, 0, len(s)*3/4+3)
	var acc uint32
	n := 0
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c == '=' {
			break
		}
		v := b64Values[c]
		if v < 0 {
			continue
		}
		acc = acc<<6 | uint32(v)
		n++
		if n == 4 {
			out = append(out, byte(acc>>16), byte(acc>>8), byte(acc))
			acc, n = 0, 0
		}
	}
	switch n {
	case 2:
		out = append(out, byte(acc>>4))
	case 3:
		out = append(out, byte(acc>>10), byte(acc>>2))
	}
	return out
}

// toUint8 is the ECMAScript ToUint8 conversion used when storing into a Uint8Array.
func toUint8(f float64) byte {
	if math.IsNaN(f) || math.IsInf(f, 0) {
		return 0
	}
	m := math.Mod(math.Trunc(f), 256)
	if m < 0 {
		m += 256
	}
	return byte(m)
}

func isJSWhitespace(r rune) bool {
	switch r {
	case '\t', '\n', '\v', '\f', '\r', ' ', 0x00A0, 0x1680, 0x2028, 0x2029, 0x202F, 0x205F, 0x3000, 0xFEFF:
		return true
	}
	return r >= 0x2000 && r <= 0x200A
}

func parseFloatJS(s string) float64 {
	f, err := strconv.ParseFloat(s, 64)
	if err != nil && !errors.Is(err, strconv.ErrRange) {
		return math.NaN()
	}
	return f
}

func parseRadix(digits string, base int) float64 {
	if digits == "" {
		return math.NaN()
	}
	v := 0.0
	for i := 0; i < len(digits); i++ {
		d := hexVal(digits[i])
		if d < 0 || d >= base {
			return math.NaN()
		}
		v = v*float64(base) + float64(d)
	}
	return v
}

func isDecimalLiteral(s string) bool {
	i := 0
	if i < len(s) && (s[i] == '+' || s[i] == '-') {
		i++
	}
	intDigits := 0
	for i < len(s) && isDigit(s[i]) {
		i++
		intDigits++
	}
	fracDigits := 0
	if i < len(s) && s[i] == '.' {
		i++
		for i < len(s) && isDigit(s[i]) {
			i++
			fracDigits++
		}
	}
	if intDigits == 0 && fracDigits == 0 {
		return false
	}
	if i < len(s) && (s[i] == 'e' || s[i] == 'E') {
		i++
		if i < len(s) && (s[i] == '+' || s[i] == '-') {
			i++
		}
		expDigits := 0
		for i < len(s) && isDigit(s[i]) {
			i++
			expDigits++
		}
		if expDigits == 0 {
			return false
		}
	}
	return i == len(s)
}

// stringToNumber is ECMAScript's ToNumber applied to a string.
func stringToNumber(s string) float64 {
	s = strings.TrimFunc(s, isJSWhitespace)
	if s == "" {
		return 0
	}
	if len(s) > 1 && s[0] == '0' {
		switch s[1] {
		case 'x', 'X':
			return parseRadix(s[2:], 16)
		case 'o', 'O':
			return parseRadix(s[2:], 8)
		case 'b', 'B':
			return parseRadix(s[2:], 2)
		}
	}
	switch s {
	case "Infinity", "+Infinity":
		return math.Inf(1)
	case "-Infinity":
		return math.Inf(-1)
	}
	if !isDecimalLiteral(s) {
		return math.NaN()
	}
	return parseFloatJS(s)
}
