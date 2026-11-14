//! JavaScript behaviours the Node service relied on, rebuilt by hand.

const fn build_b64_table() -> [i8; 256] {
    let mut t = [-1i8; 256];
    let alphabet = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut i = 0;
    while i < 64 {
        t[alphabet[i] as usize] = i as i8;
        i += 1;
    }
    t[b'-' as usize] = 62;
    t[b'_' as usize] = 63;
    t
}

static B64: [i8; 256] = build_b64_table();

/// Matches `Buffer.from(s, "base64")`: skips characters outside the alphabet, accepts the
/// URL-safe alphabet, stops at the first '=', ignores a dangling sextet.
pub fn decode_base64_lenient(s: &str) -> Vec<u8> {
    let mut out = Vec::with_capacity(s.len() * 3 / 4 + 3);
    let mut acc: u32 = 0;
    let mut n = 0;
    for &c in s.as_bytes() {
        if c == b'=' {
            break;
        }
        let v = B64[c as usize];
        if v < 0 {
            continue;
        }
        acc = (acc << 6) | v as u32;
        n += 1;
        if n == 4 {
            out.extend_from_slice(&[(acc >> 16) as u8, (acc >> 8) as u8, acc as u8]);
            acc = 0;
            n = 0;
        }
    }
    match n {
        2 => out.push((acc >> 4) as u8),
        3 => out.extend_from_slice(&[(acc >> 10) as u8, (acc >> 2) as u8]),
        _ => {}
    }
    out
}

/// ECMAScript ToUint8, used when storing into a Uint8Array.
pub fn to_uint8(f: f64) -> u8 {
    if !f.is_finite() {
        return 0;
    }
    let mut m = f.trunc() % 256.0;
    if m < 0.0 {
        m += 256.0;
    }
    m as u8
}

fn is_js_whitespace(c: char) -> bool {
    matches!(
        c,
        '\t' | '\n' | '\u{0B}' | '\u{0C}' | '\r' | ' ' | '\u{A0}' | '\u{1680}' | '\u{2028}'
            | '\u{2029}' | '\u{202F}' | '\u{205F}' | '\u{3000}' | '\u{FEFF}'
    ) || ('\u{2000}'..='\u{200A}').contains(&c)
}

fn parse_radix(digits: &str, base: u32) -> f64 {
    if digits.is_empty() {
        return f64::NAN;
    }
    let mut v = 0.0;
    for c in digits.chars() {
        match c.to_digit(base) {
            Some(d) => v = v * base as f64 + d as f64,
            None => return f64::NAN,
        }
    }
    v
}

fn is_decimal_literal(s: &str) -> bool {
    let b = s.as_bytes();
    let mut i = 0;
    if i < b.len() && (b[i] == b'+' || b[i] == b'-') {
        i += 1;
    }
    let mut int_digits = 0;
    while i < b.len() && b[i].is_ascii_digit() {
        i += 1;
        int_digits += 1;
    }
    let mut frac_digits = 0;
    if i < b.len() && b[i] == b'.' {
        i += 1;
        while i < b.len() && b[i].is_ascii_digit() {
            i += 1;
            frac_digits += 1;
        }
    }
    if int_digits == 0 && frac_digits == 0 {
        return false;
    }
    if i < b.len() && (b[i] == b'e' || b[i] == b'E') {
        i += 1;
        if i < b.len() && (b[i] == b'+' || b[i] == b'-') {
            i += 1;
        }
        let mut exp_digits = 0;
        while i < b.len() && b[i].is_ascii_digit() {
            i += 1;
            exp_digits += 1;
        }
        if exp_digits == 0 {
            return false;
        }
    }
    i == b.len()
}

/// ECMAScript ToNumber applied to a string.
pub fn string_to_number(s: &str) -> f64 {
    let s = s.trim_matches(is_js_whitespace);
    if s.is_empty() {
        return 0.0;
    }
    let b = s.as_bytes();
    if b.len() > 1 && b[0] == b'0' {
        match b[1] {
            b'x' | b'X' => return parse_radix(&s[2..], 16),
            b'o' | b'O' => return parse_radix(&s[2..], 8),
            b'b' | b'B' => return parse_radix(&s[2..], 2),
            _ => {}
        }
    }
    match s {
        "Infinity" | "+Infinity" => return f64::INFINITY,
        "-Infinity" => return f64::NEG_INFINITY,
        _ => {}
    }
    if !is_decimal_literal(s) {
        return f64::NAN;
    }
    s.parse::<f64>().unwrap_or(f64::NAN)
}
