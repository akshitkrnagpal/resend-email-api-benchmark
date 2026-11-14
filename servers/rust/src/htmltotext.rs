//! Port of servers/ts/src/htmltotext.ts. Works on bytes; every structural character is
//! ASCII, so slicing at those positions is always on a char boundary and matches the
//! UTF-16 reference.

fn is_block(name: &str) -> bool {
    matches!(
        name,
        "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "tr" | "table" | "ul" | "ol"
            | "blockquote" | "section" | "header" | "footer" | "hr"
    )
}

fn is_raw_skip(name: &str) -> bool {
    matches!(name, "script" | "style" | "head" | "title")
}

fn is_void(name: &str) -> bool {
    matches!(name, "br" | "hr" | "img" | "input" | "meta" | "link")
}

struct Tag<'a> {
    name: String,
    closing: bool,
    self_closing: bool,
    attrs: &'a str,
    end: usize,
}

fn find_from(h: &str, pat: &str, from: usize) -> Option<usize> {
    h.get(from..)?.find(pat).map(|i| i + from)
}

fn find_byte_from(h: &str, c: u8, from: usize) -> Option<usize> {
    let bytes = h.as_bytes().get(from..)?;
    bytes.iter().position(|&b| b == c).map(|i| i + from)
}

fn parse_tag(h: &str, i: usize) -> Option<Tag<'_>> {
    let b = h.as_bytes();
    let gt = find_byte_from(h, b'>', i + 1)?;
    let mut j = i + 1;
    let mut closing = false;
    if b[j] == b'/' {
        closing = true;
        j += 1;
    }
    let name_start = j;
    while j < gt && b[j].is_ascii_alphanumeric() {
        j += 1;
    }
    Some(Tag {
        name: h[name_start..j].to_ascii_lowercase(),
        closing,
        self_closing: gt > i + 1 && b[gt - 1] == b'/',
        attrs: &h[j..gt],
        end: gt + 1,
    })
}

fn skip_raw(h: &str, name: &str, from: usize) -> usize {
    let mut k = from;
    loop {
        let Some(lt) = find_from(h, "</", k) else { return h.len() };
        let Some(t) = parse_tag(h, lt) else { return h.len() };
        if t.name == name {
            return t.end;
        }
        k = lt + 2;
    }
}

fn skip_balanced(h: &str, name: &str, from: usize) -> usize {
    let mut depth = 1;
    let mut k = from;
    loop {
        let Some(lt) = find_byte_from(h, b'<', k) else { return h.len() };
        if h[lt..].starts_with("<!--") {
            let Some(e) = find_from(h, "-->", lt + 4) else { return h.len() };
            k = e + 3;
            continue;
        }
        let Some(t) = parse_tag(h, lt) else { return h.len() };
        k = t.end;
        if t.name != name {
            continue;
        }
        if t.closing {
            depth -= 1;
            if depth == 0 {
                return t.end;
            }
        } else if !t.self_closing {
            depth += 1;
        }
    }
}

fn is_html_space(c: u8) -> bool {
    matches!(c, b' ' | b'\t' | b'\n' | b'\r' | 0x0c)
}

fn collapse_ws_into(out: &mut String, s: &str) {
    let b = s.as_bytes();
    let mut in_ws = false;
    let mut start = 0;
    for (i, &c) in b.iter().enumerate() {
        if is_html_space(c) {
            if !in_ws {
                out.push_str(&s[start..i]);
                out.push(' ');
                in_ws = true;
            }
            start = i + 1;
        } else {
            in_ws = false;
        }
    }
    out.push_str(&s[start..]);
}

fn hex_val(c: u8) -> Option<u32> {
    (c as char).to_digit(16)
}

fn code_point_or_literal(cp: u32, literal: &str) -> String {
    if !(1..=0x10FFFF).contains(&cp) || (0xD800..=0xDFFF).contains(&cp) {
        return literal.to_string();
    }
    char::from_u32(cp).map(String::from).unwrap_or_else(|| literal.to_string())
}

/// Mirrors /&(#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g. Returns the end index and replacement.
fn match_entity(s: &str, i: usize) -> Option<(usize, String)> {
    let b = s.as_bytes();
    let mut j = i + 1;
    if j < b.len() && b[j] == b'#' {
        j += 1;
        if j + 1 < b.len() && (b[j] == b'x' || b[j] == b'X') && hex_val(b[j + 1]).is_some() {
            let (mut k, mut cp) = (j + 1, 0u32);
            while k < b.len() {
                let Some(v) = hex_val(b[k]) else { break };
                cp = (cp * 16 + v).min(0x110000);
                k += 1;
            }
            if k < b.len() && b[k] == b';' {
                return Some((k + 1, code_point_or_literal(cp, &s[i..=k])));
            }
            return None;
        }
        let (mut k, mut cp) = (j, 0u32);
        while k < b.len() && b[k].is_ascii_digit() {
            cp = (cp * 10 + u32::from(b[k] - b'0')).min(0x110000);
            k += 1;
        }
        if k > j && k < b.len() && b[k] == b';' {
            return Some((k + 1, code_point_or_literal(cp, &s[i..=k])));
        }
        return None;
    }
    let mut k = j;
    while k < b.len() && b[k].is_ascii_alphabetic() {
        k += 1;
    }
    if k > j && k < b.len() && b[k] == b';' {
        let repl = match &s[j..k] {
            "amp" => "&",
            "lt" => "<",
            "gt" => ">",
            "quot" => "\"",
            "apos" => "'",
            "nbsp" => " ",
            _ => &s[i..=k],
        };
        return Some((k + 1, repl.to_string()));
    }
    None
}

fn decode_entities_into(out: &mut String, s: &str) {
    let mut i = 0;
    while i < s.len() {
        let Some(amp) = find_byte_from(s, b'&', i) else {
            out.push_str(&s[i..]);
            return;
        };
        out.push_str(&s[i..amp]);
        match match_entity(s, amp) {
            Some((end, repl)) => {
                out.push_str(&repl);
                i = end;
            }
            None => {
                out.push('&');
                i = amp + 1;
            }
        }
    }
}

fn append_text(out: &mut String, s: &str) {
    if !s.contains('&') {
        collapse_ws_into(out, s);
        return;
    }
    let mut tmp = String::with_capacity(s.len());
    collapse_ws_into(&mut tmp, s);
    decode_entities_into(out, &tmp);
}

fn collapse_spaces(l: &str) -> String {
    let mut r = String::with_capacity(l.len());
    let mut prev_space = false;
    for c in l.chars() {
        if c == ' ' {
            if prev_space {
                continue;
            }
            prev_space = true;
        } else {
            prev_space = false;
        }
        r.push(c);
    }
    r
}

fn post_process(s: &str) -> String {
    let lines: Vec<String> = s
        .split('\n')
        .map(|l| {
            if l.contains("  ") {
                collapse_spaces(l).trim_matches(' ').to_string()
            } else {
                l.trim_matches(' ').to_string()
            }
        })
        .collect();
    let joined = lines.join("\n");
    let mut out = String::with_capacity(joined.len());
    let mut run = 0;
    for c in joined.chars() {
        if c == '\n' {
            run += 1;
            if run > 2 {
                continue;
            }
        } else {
            run = 0;
        }
        out.push(c);
    }
    out.trim_matches('\n').to_string()
}

pub fn html_to_text(h: &str) -> String {
    let b = h.as_bytes();
    let n = b.len();
    let mut out = String::with_capacity(n / 2);
    let mut i = 0;
    while i < n {
        if b[i] == b'<' {
            if h[i..].starts_with("<!--") {
                i = find_from(h, "-->", i + 4).map_or(n, |e| e + 3);
                continue;
            }
            let Some(t) = parse_tag(h, i) else {
                out.push('<');
                i += 1;
                continue;
            };
            i = t.end;
            if !t.closing {
                if is_raw_skip(&t.name) {
                    i = skip_raw(h, &t.name, i);
                    continue;
                }
                if !t.name.is_empty()
                    && !t.self_closing
                    && !is_void(&t.name)
                    && t.attrs.contains("data-skip-in-text=\"true\"")
                {
                    i = skip_balanced(h, &t.name, i);
                    continue;
                }
            }
            if t.name == "br" {
                out.push('\n');
            } else if is_block(&t.name) {
                out.push_str("\n\n");
            } else if t.name == "li" {
                out.push_str(if t.closing { "\n" } else { "\n* " });
            } else if (t.name == "td" || t.name == "th") && t.closing {
                out.push(' ');
            }
            continue;
        }
        let j = find_byte_from(h, b'<', i).unwrap_or(n);
        append_text(&mut out, &h[i..j]);
        i = j;
    }
    post_process(&out)
}
