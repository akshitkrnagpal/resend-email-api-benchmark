use std::fmt;

use base64::Engine;
use serde::de::{self, Deserialize, Deserializer, IgnoredAny, MapAccess, SeqAccess, Visitor};
use serde_json::value::RawValue;

use crate::htmltotext::html_to_text;
use crate::jscompat::{decode_base64_lenient, string_to_number, to_uint8};

pub const MAX_BYTES: usize = 40 * 1024 * 1024;
const MAX_ADDRESSES: usize = 50;
const MAX_ATTACHMENTS: usize = 20;
const ADDRESS_FORMAT: &str =
    "The email address needs to follow the `email@example.com` or `Name <email@example.com>` format.";

#[derive(Debug)]
pub enum RequestError {
    InvalidJson,
    Validation(String),
}

fn invalid(msg: impl Into<String>) -> RequestError {
    RequestError::Validation(msg.into())
}

pub struct Attachment {
    pub filename: String,
    pub content: Vec<u8>,
}

pub struct Tag {
    pub name: String,
    pub value: String,
}

pub struct NormalizedEmail {
    pub from: String,
    pub to: Vec<String>,
    pub cc: Vec<String>,
    pub bcc: Vec<String>,
    pub reply_to: Vec<String>,
    pub subject: String,
    pub html: String,
    pub text: String,
    pub attachments: Vec<Attachment>,
    pub tags: Vec<Tag>,
}

// --- request decoding ---------------------------------------------------------------
// Fields are borrowed raw (zero-copy) and validated afterwards in the reference order.
// Maps are visited by hand so a duplicate key behaves like JSON.parse (last one wins)
// instead of serde's default "duplicate field" error.

type Raw<'a> = Option<&'a RawValue>;

fn non_null(v: &RawValue) -> Raw<'_> {
    if v.get() == "null" { None } else { Some(v) }
}

#[derive(Default)]
struct EmailRequest<'a> {
    from: Raw<'a>,
    to: Raw<'a>,
    cc: Raw<'a>,
    bcc: Raw<'a>,
    reply_to: Raw<'a>,
    subject: Raw<'a>,
    html: Raw<'a>,
    text: Raw<'a>,
    tags: Raw<'a>,
    attachments: AttachmentsField<'a>,
}

#[derive(serde::Deserialize)]
#[serde(field_identifier, rename_all = "snake_case")]
enum Field {
    From,
    To,
    Cc,
    Bcc,
    ReplyTo,
    Subject,
    Html,
    Text,
    Tags,
    Attachments,
    #[serde(other)]
    Other,
}

impl<'de: 'a, 'a> Deserialize<'de> for EmailRequest<'a> {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V<'a>(std::marker::PhantomData<&'a ()>);
        impl<'de: 'a, 'a> Visitor<'de> for V<'a> {
            type Value = EmailRequest<'a>;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("an email object")
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
                let mut r = EmailRequest::default();
                while let Some(key) = map.next_key::<Field>()? {
                    let slot = match key {
                        Field::From => &mut r.from,
                        Field::To => &mut r.to,
                        Field::Cc => &mut r.cc,
                        Field::Bcc => &mut r.bcc,
                        Field::ReplyTo => &mut r.reply_to,
                        Field::Subject => &mut r.subject,
                        Field::Html => &mut r.html,
                        Field::Text => &mut r.text,
                        Field::Tags => &mut r.tags,
                        Field::Attachments => {
                            r.attachments = map.next_value()?;
                            continue;
                        }
                        Field::Other => {
                            map.next_value::<IgnoredAny>()?;
                            continue;
                        }
                    };
                    *slot = non_null(map.next_value::<&'de RawValue>()?);
                }
                Ok(r)
            }
        }
        d.deserialize_map(V(std::marker::PhantomData))
    }
}

/// Visitor helpers for values whose JSON type decides the outcome.
macro_rules! ignore_scalars {
    ($ret:expr) => {
        fn visit_bool<E: de::Error>(self, _: bool) -> Result<Self::Value, E> { Ok($ret) }
        fn visit_i64<E: de::Error>(self, _: i64) -> Result<Self::Value, E> { Ok($ret) }
        fn visit_u64<E: de::Error>(self, _: u64) -> Result<Self::Value, E> { Ok($ret) }
        fn visit_f64<E: de::Error>(self, _: f64) -> Result<Self::Value, E> { Ok($ret) }
    };
}

#[derive(Default)]
struct AttachmentsField<'a> {
    set: bool,
    is_array: bool,
    items: Vec<AttachmentItem<'a>>,
}

impl<'de: 'a, 'a> Deserialize<'de> for AttachmentsField<'a> {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V<'a>(std::marker::PhantomData<&'a ()>);
        const NOT_ARRAY: AttachmentsField<'static> =
            AttachmentsField { set: true, is_array: false, items: Vec::new() };
        impl<'de: 'a, 'a> Visitor<'de> for V<'a> {
            type Value = AttachmentsField<'a>;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            ignore_scalars!(NOT_ARRAY);
            fn visit_str<E: de::Error>(self, _: &str) -> Result<Self::Value, E> {
                Ok(NOT_ARRAY)
            }
            fn visit_unit<E: de::Error>(self) -> Result<Self::Value, E> {
                Ok(AttachmentsField::default())
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
                while map.next_entry::<IgnoredAny, IgnoredAny>()?.is_some() {}
                Ok(NOT_ARRAY)
            }
            fn visit_seq<A: SeqAccess<'de>>(self, mut seq: A) -> Result<Self::Value, A::Error> {
                let mut items = Vec::new();
                while let Some(it) = seq.next_element::<AttachmentItem<'a>>()? {
                    items.push(it);
                }
                Ok(AttachmentsField { set: true, is_array: true, items })
            }
        }
        d.deserialize_any(V(std::marker::PhantomData))
    }
}

#[derive(Default)]
struct AttachmentItem<'a> {
    is_object: bool,
    filename: Raw<'a>,
    content: Content,
}

#[derive(Default)]
enum Content {
    #[default]
    Invalid,
    Base64(String),
    Buffer(Vec<u8>),
}

#[derive(serde::Deserialize)]
#[serde(field_identifier, rename_all = "snake_case")]
enum AttachmentField {
    Filename,
    Content,
    #[serde(other)]
    Other,
}

impl<'de: 'a, 'a> Deserialize<'de> for AttachmentItem<'a> {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V<'a>(std::marker::PhantomData<&'a ()>);
        impl<'de: 'a, 'a> Visitor<'de> for V<'a> {
            type Value = AttachmentItem<'a>;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            ignore_scalars!(AttachmentItem::default());
            fn visit_str<E: de::Error>(self, _: &str) -> Result<Self::Value, E> {
                Ok(AttachmentItem::default())
            }
            fn visit_unit<E: de::Error>(self) -> Result<Self::Value, E> {
                Ok(AttachmentItem::default())
            }
            fn visit_seq<A: SeqAccess<'de>>(self, mut seq: A) -> Result<Self::Value, A::Error> {
                while seq.next_element::<IgnoredAny>()?.is_some() {}
                Ok(AttachmentItem::default())
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
                let mut it = AttachmentItem { is_object: true, ..Default::default() };
                while let Some(key) = map.next_key::<AttachmentField>()? {
                    match key {
                        AttachmentField::Filename => {
                            it.filename = non_null(map.next_value::<&'de RawValue>()?)
                        }
                        AttachmentField::Content => it.content = map.next_value()?,
                        AttachmentField::Other => {
                            map.next_value::<IgnoredAny>()?;
                        }
                    }
                }
                Ok(it)
            }
        }
        d.deserialize_any(V(std::marker::PhantomData))
    }
}

#[derive(serde::Deserialize)]
#[serde(field_identifier, rename_all = "snake_case")]
enum BufferField {
    Type,
    Data,
    #[serde(other)]
    Other,
}

impl<'de> Deserialize<'de> for Content {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V;
        impl<'de> Visitor<'de> for V {
            type Value = Content;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            ignore_scalars!(Content::Invalid);
            fn visit_unit<E: de::Error>(self) -> Result<Self::Value, E> {
                Ok(Content::Invalid)
            }
            fn visit_str<E: de::Error>(self, s: &str) -> Result<Self::Value, E> {
                Ok(Content::Base64(s.to_owned()))
            }
            fn visit_string<E: de::Error>(self, s: String) -> Result<Self::Value, E> {
                Ok(Content::Base64(s))
            }
            fn visit_seq<A: SeqAccess<'de>>(self, mut seq: A) -> Result<Self::Value, A::Error> {
                while seq.next_element::<IgnoredAny>()?.is_some() {}
                Ok(Content::Invalid)
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
                let mut is_buffer = false;
                let mut data: Option<Vec<u8>> = None;
                while let Some(key) = map.next_key::<BufferField>()? {
                    match key {
                        BufferField::Type => {
                            let v = map.next_value::<&'de RawValue>()?;
                            is_buffer = serde_json::from_str::<String>(v.get())
                                .is_ok_and(|s| s == "Buffer");
                        }
                        BufferField::Data => data = map.next_value::<BufferData>()?.0,
                        BufferField::Other => {
                            map.next_value::<IgnoredAny>()?;
                        }
                    }
                }
                Ok(match (is_buffer, data) {
                    (true, Some(bytes)) => Content::Buffer(bytes),
                    _ => Content::Invalid,
                })
            }
        }
        d.deserialize_any(V)
    }
}

/// `data` of a serialized Node Buffer: Some(bytes) when it is an array.
struct BufferData(Option<Vec<u8>>);

impl<'de> Deserialize<'de> for BufferData {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V;
        impl<'de> Visitor<'de> for V {
            type Value = BufferData;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            ignore_scalars!(BufferData(None));
            fn visit_unit<E: de::Error>(self) -> Result<Self::Value, E> {
                Ok(BufferData(None))
            }
            fn visit_str<E: de::Error>(self, _: &str) -> Result<Self::Value, E> {
                Ok(BufferData(None))
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
                while map.next_entry::<IgnoredAny, IgnoredAny>()?.is_some() {}
                Ok(BufferData(None))
            }
            fn visit_seq<A: SeqAccess<'de>>(self, mut seq: A) -> Result<Self::Value, A::Error> {
                let mut out = Vec::with_capacity(seq.size_hint().unwrap_or(1024));
                while let Some(JsByte(b)) = seq.next_element()? {
                    out.push(b);
                }
                Ok(BufferData(Some(out)))
            }
        }
        d.deserialize_any(V)
    }
}

/// One element of Buffer.from(array): ToNumber, then ToUint8.
struct JsByte(u8);

impl<'de> Deserialize<'de> for JsByte {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V;
        impl<'de> Visitor<'de> for V {
            type Value = JsByte;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            fn visit_u64<E: de::Error>(self, v: u64) -> Result<JsByte, E> {
                Ok(JsByte(to_uint8(v as f64)))
            }
            fn visit_i64<E: de::Error>(self, v: i64) -> Result<JsByte, E> {
                Ok(JsByte(to_uint8(v as f64)))
            }
            fn visit_f64<E: de::Error>(self, v: f64) -> Result<JsByte, E> {
                Ok(JsByte(to_uint8(v)))
            }
            fn visit_str<E: de::Error>(self, s: &str) -> Result<JsByte, E> {
                Ok(JsByte(to_uint8(string_to_number(s))))
            }
            fn visit_bool<E: de::Error>(self, v: bool) -> Result<JsByte, E> {
                Ok(JsByte(u8::from(v)))
            }
            fn visit_unit<E: de::Error>(self) -> Result<JsByte, E> {
                Ok(JsByte(0))
            }
            fn visit_seq<A: SeqAccess<'de>>(self, seq: A) -> Result<JsByte, A::Error> {
                Ok(JsByte(to_uint8(array_to_number(seq)?)))
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<JsByte, A::Error> {
                while map.next_entry::<IgnoredAny, IgnoredAny>()?.is_some() {}
                Ok(JsByte(0))
            }
        }
        d.deserialize_any(V)
    }
}

/// ToNumber(array): the array becomes array.join(","), so [] is 0, [x] is
/// ToNumber(String(x)) and anything longer contains a comma and is NaN.
fn array_to_number<'de, A: SeqAccess<'de>>(mut seq: A) -> Result<f64, A::Error> {
    let mut n = 0;
    let mut v = 0.0;
    while let Some(ArrayElem(x)) = seq.next_element()? {
        n += 1;
        v = x;
    }
    Ok(match n {
        0 => 0.0,
        1 => v,
        _ => f64::NAN,
    })
}

/// An element as seen inside array.join(","): null is "", booleans are "true"/"false".
struct ArrayElem(f64);

impl<'de> Deserialize<'de> for ArrayElem {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        struct V;
        impl<'de> Visitor<'de> for V {
            type Value = ArrayElem;
            fn expecting(&self, f: &mut fmt::Formatter) -> fmt::Result {
                f.write_str("any JSON value")
            }
            fn visit_u64<E: de::Error>(self, v: u64) -> Result<ArrayElem, E> {
                Ok(ArrayElem(v as f64))
            }
            fn visit_i64<E: de::Error>(self, v: i64) -> Result<ArrayElem, E> {
                Ok(ArrayElem(v as f64))
            }
            fn visit_f64<E: de::Error>(self, v: f64) -> Result<ArrayElem, E> {
                Ok(ArrayElem(v))
            }
            fn visit_str<E: de::Error>(self, s: &str) -> Result<ArrayElem, E> {
                Ok(ArrayElem(string_to_number(s)))
            }
            fn visit_bool<E: de::Error>(self, _: bool) -> Result<ArrayElem, E> {
                Ok(ArrayElem(f64::NAN))
            }
            fn visit_unit<E: de::Error>(self) -> Result<ArrayElem, E> {
                Ok(ArrayElem(0.0))
            }
            fn visit_seq<A: SeqAccess<'de>>(self, seq: A) -> Result<ArrayElem, A::Error> {
                Ok(ArrayElem(array_to_number(seq)?))
            }
            fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<ArrayElem, A::Error> {
                while map.next_entry::<IgnoredAny, IgnoredAny>()?.is_some() {}
                Ok(ArrayElem(f64::NAN))
            }
        }
        d.deserialize_any(V)
    }
}

// --- validation ---------------------------------------------------------------------

fn decode_string(v: Raw<'_>) -> Option<String> {
    let v = v?;
    if !v.get().starts_with('"') {
        return None;
    }
    serde_json::from_str::<String>(v.get()).ok()
}

fn is_ascii_space(c: u8) -> bool {
    matches!(c, b' ' | b'\t' | b'\n' | b'\r' | 0x0c)
}

fn ascii_trim(s: &str) -> &str {
    s.trim_matches(|c: char| c.is_ascii() && is_ascii_space(c as u8))
}

fn is_valid_address(raw: &str) -> bool {
    let mut s = ascii_trim(raw);
    if s.ends_with('>') {
        let Some(lt) = s.rfind('<') else { return false };
        s = ascii_trim(&s[lt + 1..s.len() - 1]);
    }
    if s.is_empty() || s.len() > 254 {
        return false;
    }
    let mut at: Option<usize> = None;
    for (i, &c) in s.as_bytes().iter().enumerate() {
        if c <= 32 || c >= 127 {
            return false;
        }
        if c == b'@' {
            if at.is_some() {
                return false;
            }
            at = Some(i);
        }
    }
    let Some(at) = at else { return false };
    if !(1..=64).contains(&at) {
        return false;
    }
    let domain = s[at + 1..].as_bytes();
    if !domain.contains(&b'.') {
        return false;
    }
    let (first, last) = (domain[0], domain[domain.len() - 1]);
    first != b'.' && first != b'-' && last != b'.' && last != b'-'
}

fn address_list(v: Raw<'_>, field: &str, required: bool) -> Result<Vec<String>, RequestError> {
    let Some(raw) = v else {
        if required {
            return Err(invalid(format!("`{field}` is required")));
        }
        return Ok(Vec::new());
    };
    let type_err = || invalid(format!("`{field}` must be a string or an array of strings"));
    let text = raw.get();
    let list: Vec<String> = if text.starts_with('"') {
        vec![decode_string(v).ok_or_else(type_err)?]
    } else if text.starts_with('[') {
        let items: Vec<&RawValue> = serde_json::from_str(text).map_err(|_| type_err())?;
        items
            .into_iter()
            .map(|it| decode_string(Some(it)).ok_or_else(type_err))
            .collect::<Result<_, _>>()?
    } else {
        return Err(type_err());
    };
    if (required && list.is_empty()) || list.len() > MAX_ADDRESSES {
        return Err(invalid(format!("`{field}` must contain between 1 and 50 addresses")));
    }
    if list.iter().any(|a| !is_valid_address(a)) {
        return Err(invalid(format!("Invalid `{field}` field. {ADDRESS_FORMAT}")));
    }
    Ok(list.iter().map(|a| ascii_trim(a).to_string()).collect())
}

fn optional_string(v: Raw<'_>, field: &str) -> Result<Option<String>, RequestError> {
    match v {
        None => Ok(None),
        Some(_) => decode_string(v)
            .map(Some)
            .ok_or_else(|| invalid(format!("`{field}` must be a string"))),
    }
}

fn normalize_attachments(f: AttachmentsField<'_>) -> Result<Vec<Attachment>, RequestError> {
    if !f.set {
        return Ok(Vec::new());
    }
    if !f.is_array {
        return Err(invalid("`attachments` must be an array"));
    }
    if f.items.len() > MAX_ATTACHMENTS {
        return Err(invalid("`attachments` can contain at most 20 items"));
    }
    let mut out = Vec::with_capacity(f.items.len());
    let mut total = 0usize;
    for (i, it) in f.items.into_iter().enumerate() {
        if !it.is_object {
            return Err(invalid(format!("`attachments[{i}]` must be an object")));
        }
        let filename = decode_string(it.filename)
            .filter(|s| !s.is_empty())
            .ok_or_else(|| invalid(format!("`attachments[{i}].filename` is required")))?;
        let content = match it.content {
            Content::Base64(s) => decode_base64_lenient(&s),
            Content::Buffer(b) => b,
            Content::Invalid => {
                return Err(invalid(format!(
                    "`attachments[{i}].content` must be a base64 string or a Buffer"
                )))
            }
        };
        total += content.len();
        if total > MAX_BYTES {
            return Err(invalid("Attachments exceed the 40MB limit"));
        }
        out.push(Attachment { filename, content });
    }
    Ok(out)
}

fn is_tag_token(s: &str) -> bool {
    (1..=256).contains(&s.len())
        && s.bytes().all(|c| c.is_ascii_alphanumeric() || c == b'_' || c == b'-')
}

fn normalize_tags(v: Raw<'_>) -> Result<Vec<Tag>, RequestError> {
    let Some(raw) = v else { return Ok(Vec::new()) };
    let items: Vec<serde_json::Value> = if raw.get().starts_with('[') {
        serde_json::from_str(raw.get()).map_err(|_| invalid("`tags` must be an array"))?
    } else {
        return Err(invalid("`tags` must be an array"));
    };
    let mut out = Vec::with_capacity(items.len());
    for (i, it) in items.iter().enumerate() {
        let serde_json::Value::Object(obj) = it else {
            return Err(invalid(format!("`tags[{i}]` must be an object")));
        };
        let token = |k: &str| obj.get(k).and_then(|v| v.as_str()).filter(|s| is_tag_token(s));
        let name = token("name").ok_or_else(|| {
            invalid(format!("`tags[{i}].name` must only contain ASCII letters, numbers, underscores, or dashes"))
        })?;
        let value = token("value").ok_or_else(|| {
            invalid(format!("`tags[{i}].value` must only contain ASCII letters, numbers, underscores, or dashes"))
        })?;
        out.push(Tag { name: name.to_string(), value: value.to_string() });
    }
    Ok(out)
}

fn normalize(r: EmailRequest<'_>) -> Result<NormalizedEmail, RequestError> {
    if r.from.is_none() {
        return Err(invalid("`from` is required"));
    }
    let from = decode_string(r.from).ok_or_else(|| invalid("`from` must be a string"))?;
    if !is_valid_address(&from) {
        return Err(invalid(format!("Invalid `from` field. {ADDRESS_FORMAT}")));
    }
    let to = address_list(r.to, "to", true)?;
    let cc = address_list(r.cc, "cc", false)?;
    let bcc = address_list(r.bcc, "bcc", false)?;
    let reply_to = address_list(r.reply_to, "reply_to", false)?;
    if r.subject.is_none() {
        return Err(invalid("`subject` is required"));
    }
    let subject = decode_string(r.subject).ok_or_else(|| invalid("`subject` must be a string"))?;
    let html = optional_string(r.html, "html")?;
    let text = optional_string(r.text, "text")?;
    if html.is_none() && text.is_none() {
        return Err(invalid("Either `html` or `text` must be provided"));
    }
    let attachments = normalize_attachments(r.attachments)?;
    let tags = normalize_tags(r.tags)?;
    let html = html.unwrap_or_default();
    let text = text.unwrap_or_else(|| html_to_text(&html));
    Ok(NormalizedEmail {
        from: ascii_trim(&from).to_string(),
        to,
        cc,
        bcc,
        reply_to,
        subject,
        html,
        text,
        attachments,
        tags,
    })
}

// --- top-level parsing --------------------------------------------------------------

fn first_non_space(s: &str) -> Option<u8> {
    s.bytes().find(|c| !matches!(c, b' ' | b'\t' | b'\n' | b'\r'))
}

fn is_valid_json(s: &str) -> bool {
    serde_json::from_str::<IgnoredAny>(s).is_ok()
}

/// `body` must already be UTF-8 (invalid bytes replaced, as Node's toString does).
pub fn parse_single(body: &str) -> Result<NormalizedEmail, RequestError> {
    if first_non_space(body) != Some(b'{') {
        return Err(if is_valid_json(body) {
            invalid("Request body must be a JSON object")
        } else {
            RequestError::InvalidJson
        });
    }
    let r: EmailRequest = serde_json::from_str(body).map_err(|_| RequestError::InvalidJson)?;
    normalize(r)
}

pub fn parse_batch(body: &str) -> Result<Vec<NormalizedEmail>, RequestError> {
    if first_non_space(body) != Some(b'[') {
        return Err(if is_valid_json(body) {
            invalid("Request body must be a JSON array")
        } else {
            RequestError::InvalidJson
        });
    }
    let items: Vec<&RawValue> = serde_json::from_str(body).map_err(|_| RequestError::InvalidJson)?;
    if items.is_empty() || items.len() > 100 {
        return Err(invalid("Batch must contain between 1 and 100 emails"));
    }
    let mut out = Vec::with_capacity(items.len());
    for (i, it) in items.iter().enumerate() {
        let prefix = |msg: String| invalid(format!("emails[{i}]: {msg}"));
        if !it.get().starts_with('{') {
            return Err(prefix("Request body must be a JSON object".into()));
        }
        let r: EmailRequest =
            serde_json::from_str(it.get()).map_err(|_| RequestError::InvalidJson)?;
        if r.attachments.set {
            return Err(prefix("`attachments` are not supported in batch emails".into()));
        }
        match normalize(r) {
            Ok(e) => out.push(e),
            Err(RequestError::Validation(m)) => return Err(prefix(m)),
            Err(e) => return Err(e),
        }
    }
    Ok(out)
}

// --- .eml -------------------------------------------------------------------------

pub fn build_eml(e: &NormalizedEmail) -> Vec<u8> {
    let mut size = e.text.len() + e.html.len() + 512;
    for a in &e.attachments {
        size += a.content.len() * 4 / 3 * 78 / 76 + 64;
    }
    let mut b = String::with_capacity(size);
    let mut line = |parts: &[&str]| {
        for p in parts {
            b.push_str(p);
        }
        b.push_str("\r\n");
    };
    line(&["From: ", &e.from]);
    line(&["To: ", &e.to.join(", ")]);
    if !e.cc.is_empty() {
        line(&["Cc: ", &e.cc.join(", ")]);
    }
    if !e.bcc.is_empty() {
        line(&["Bcc: ", &e.bcc.join(", ")]);
    }
    if !e.reply_to.is_empty() {
        line(&["Reply-To: ", &e.reply_to.join(", ")]);
    }
    line(&["Subject: ", &e.subject]);
    if !e.tags.is_empty() {
        let tags: Vec<String> = e.tags.iter().map(|t| format!("{}={}", t.name, t.value)).collect();
        line(&["X-Tags: ", &tags.join("; ")]);
    }
    line(&[]);
    line(&["--text"]);
    line(&[&e.text]);
    line(&["--html"]);
    line(&[&e.html]);
    for a in &e.attachments {
        line(&["--attachment ", &a.filename, " ", &a.content.len().to_string()]);
        let enc = base64::engine::general_purpose::STANDARD.encode(&a.content);
        for chunk in enc.as_bytes().chunks(76) {
            // base64 output is ASCII, so every chunk is valid UTF-8.
            line(&[std::str::from_utf8(chunk).unwrap_or_default()]);
        }
    }
    line(&["--end"]);
    b.into_bytes()
}
