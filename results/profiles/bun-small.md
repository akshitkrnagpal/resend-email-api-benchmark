# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 36.06s | 3955 | 1.0ms | 1293 |

**Top 10:** `writeBuffered` 35.0%, `writeHeadAndEnd` 6.1%, `cloneObject` 4.3%, `copyDataProperties` 2.0%, `(anonymous)` 1.9%, `generatorResume` 1.4%, `_addHeaderLine` 1.2%, `(anonymous)` 1.0%, `execute` 0.9%, `parse` 0.9%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 35.0% | 12.64s | 35.0% | 12.64s | `writeBuffered` | `[native code]` |
| 6.1% | 2.21s | 6.1% | 2.21s | `writeHeadAndEnd` | `[native code]` |
| 4.3% | 1.55s | 4.3% | 1.55s | `cloneObject` | `[native code]` |
| 2.0% | 747.9ms | 2.0% | 747.9ms | `copyDataProperties` | `[native code]` |
| 1.9% | 716.3ms | 60.1% | 21.68s | `(anonymous)` | `[native code]` |
| 1.4% | 538.4ms | 1.8% | 653.1ms | `generatorResume` | `[native code]` |
| 1.2% | 439.0ms | 1.2% | 439.0ms | `_addHeaderLine` | `node:_http_incoming:374` |
| 1.0% | 384.9ms | 1.0% | 384.9ms | `(anonymous)` | `/app/src/server.ts:214` |
| 0.9% | 339.5ms | 4.9% | 1.78s | `execute` | `[native code]` |
| 0.9% | 329.2ms | 0.9% | 329.2ms | `parse` | `[native code]` |
| 0.7% | 285.9ms | 2.1% | 789.7ms | `htmlToText` | `/app/src/htmltotext.ts:140` |
| 0.7% | 275.1ms | 81.7% | 29.48s | `processTicksAndRejections` | `[native code]` |
| 0.7% | 253.9ms | 0.7% | 253.9ms | `Buffer` | `[native code]` |
| 0.6% | 223.1ms | 0.6% | 223.1ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:413` |
| 0.5% | 214.0ms | 0.5% | 214.0ms | `asyncFunctionDrive` | `[native code]` |
| 0.5% | 209.7ms | 0.5% | 209.7ms | `_addHeaderLine` | `node:_http_incoming:359` |
| 0.5% | 207.8ms | 0.5% | 207.8ms | `get buffer` | `[native code]` |
| 0.5% | 202.9ms | 0.5% | 202.9ms | `emit` | `node:events` |
| 0.5% | 199.9ms | 0.5% | 199.9ms | `byteLength` | `[native code]` |
| 0.4% | 174.8ms | 2.6% | 942.1ms | `map` | `[native code]` |
| 0.4% | 169.0ms | 0.4% | 169.0ms | `/[ \t\n\r\f]+/g` | `[native code]` |
| 0.4% | 165.5ms | 0.6% | 224.2ms | `of` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:323` |
| 0.4% | 162.2ms | 0.4% | 162.2ms | `parseTag` | `/app/src/htmltotext.ts:36` |
| 0.4% | 153.2ms | 0.4% | 153.2ms | `_addListener` | `node:events` |
| 0.4% | 150.2ms | 0.5% | 205.9ms | `decodeEntities` | `/app/src/htmltotext.ts:87` |
| 0.4% | 146.4ms | 0.4% | 146.4ms | `toString` | `[native code]` |
| 0.3% | 138.6ms | 0.3% | 138.6ms | `concat` | `[native code]` |
| 0.3% | 135.1ms | 0.3% | 135.1ms | `setTimeout` | `[native code]` |
| 0.3% | 128.8ms | 0.3% | 128.8ms | `decodeEntities` | `/app/src/htmltotext.ts:86` |
| 0.3% | 124.4ms | 0.3% | 124.4ms | `parseTag` | `/app/src/htmltotext.ts:25` |
| 0.3% | 122.2ms | 0.3% | 122.2ms | `removeEventListener` | `[native code]` |
| 0.3% | 120.3ms | 1.0% | 366.9ms | `postProcess` | `/app/src/htmltotext.ts:97` |
| 0.3% | 120.2ms | 0.3% | 120.2ms | `write` | `[native code]` |
| 0.3% | 118.7ms | 0.3% | 118.7ms | `resolveMiddleware` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.3% | 118.1ms | 0.3% | 118.1ms | `EventEmitter` | `node:events:16` |
| 0.3% | 113.3ms | 0.8% | 288.8ms | `_addHeaderLine` | `node:_http_incoming:356` |
| 0.2% | 107.8ms | 0.2% | 107.8ms | `async handle` | `/app/src/server.ts:183` |
| 0.2% | 107.4ms | 0.2% | 107.4ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:477` |
| 0.2% | 106.9ms | 0.2% | 106.9ms | `assign` | `[native code]` |
| 0.2% | 105.6ms | 0.2% | 105.6ms | `update` | `[native code]` |
| 0.2% | 103.1ms | 0.2% | 103.1ms | `headersObject` | `[native code]` |
| 0.2% | 99.7ms | 0.2% | 99.7ms | `matchKnownFields` | `node:_http_incoming:246` |
| 0.2% | 97.5ms | 0.2% | 97.5ms | `URLSearchParams` | `[native code]` |
| 0.2% | 96.2ms | 0.2% | 104.4ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:111` |
| 0.2% | 95.8ms | 0.2% | 95.8ms | `/^ +\| +$/g` | `[native code]` |
| 0.2% | 95.0ms | 0.2% | 95.0ms | `entries` | `[native code]` |
| 0.2% | 94.7ms | 0.2% | 94.7ms | `removeListener` | `node:events` |
| 0.2% | 91.2ms | 0.5% | 207.1ms | `(anonymous)` | `internal:streams/readable:541` |
| 0.2% | 88.9ms | 0.2% | 88.9ms | `reverse` | `[native code]` |
| 0.2% | 87.3ms | 0.2% | 87.3ms | `(anonymous)` | `node:_http_agent:58` |
| 0.2% | 86.8ms | 0.2% | 86.8ms | `Hash` | `[native code]` |
| 0.2% | 86.7ms | 0.2% | 86.7ms | `ClientRequest` | `node:_http_client:199` |
| 0.2% | 86.0ms | 0.2% | 86.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:718` |
| 0.2% | 85.7ms | 0.2% | 85.7ms | `getOwnPropertyDescriptors` | `[native code]` |
| 0.2% | 83.9ms | 0.2% | 83.9ms | `parseUrl` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:156` |
| 0.2% | 83.6ms | 0.2% | 83.6ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:452` |
| 0.2% | 82.3ms | 0.2% | 82.3ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:133` |
| 0.2% | 79.9ms | 0.3% | 140.3ms | `checkInvalidHeaderChar` | `node:_http_common:6` |
| 0.2% | 79.4ms | 0.6% | 232.9ms | `(anonymous)` | `/app/src/htmltotext.ts:97` |
| 0.2% | 79.0ms | 1.1% | 405.5ms | `anonymous` | `[native code]` |
| 0.2% | 78.2ms | 0.2% | 78.2ms | `stringify` | `[native code]` |
| 0.2% | 76.8ms | 0.2% | 76.8ms | `Hmac` | `[native code]` |
| 0.2% | 75.7ms | 0.2% | 75.7ms | `matchKnownFields` | `node:_http_incoming` |
| 0.2% | 74.6ms | 0.2% | 74.6ms | `emit` | `node:events:87` |
| 0.2% | 73.8ms | 0.3% | 121.8ms | `reduce` | `[native code]` |
| 0.2% | 72.9ms | 0.2% | 72.9ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:364` |
| 0.2% | 72.8ms | 0.2% | 72.8ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:418` |
| 0.2% | 72.6ms | 0.2% | 72.6ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:38` |
| 0.2% | 72.5ms | 0.2% | 72.5ms | `push` | `[native code]` |
| 0.2% | 72.4ms | 0.2% | 72.4ms | `onDestroy` | `internal:streams/destroy:50` |
| 0.2% | 72.3ms | 2.8% | 1.01s | `emit` | `node:events:97` |
| 0.1% | 72.0ms | 0.4% | 179.8ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:194` |
| 0.1% | 71.6ms | 10.8% | 3.91s | `emit` | `node:events:100` |
| 0.1% | 71.4ms | 0.1% | 71.4ms | `sort` | `[native code]` |
| 0.1% | 71.2ms | 0.1% | 71.2ms | `Uint8Array` | `[native code]` |
| 0.1% | 70.0ms | 0.1% | 70.0ms | `htmlToText` | `/app/src/htmltotext.ts:138` |
| 0.1% | 69.7ms | 0.1% | 69.7ms | `(anonymous)` | `node:_http_agent:42` |
| 0.1% | 68.7ms | 0.1% | 68.7ms | `htmlToText` | `/app/src/htmltotext.ts:107` |
| 0.1% | 67.9ms | 0.1% | 67.9ms | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:613` |
| 0.1% | 67.6ms | 0.1% | 69.4ms | `async createStringToSign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:251` |
| 0.1% | 63.4ms | 0.1% | 63.4ms | `toHex` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:805` |
| 0.1% | 63.2ms | 0.1% | 63.2ms | `release` | `[native code]` |
| 0.1% | 61.9ms | 0.1% | 61.9ms | `addRequest` | `node:_http_agent:127` |
| 0.1% | 60.6ms | 0.1% | 60.6ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:503` |
| 0.1% | 60.5ms | 0.1% | 60.5ms | `resume` | `node:net:1451` |
| 0.1% | 60.4ms | 0.1% | 60.4ms | `htmlToText` | `/app/src/htmltotext.ts:125` |
| 0.1% | 60.0ms | 0.1% | 60.0ms | `defineProperties` | `[native code]` |
| 0.1% | 59.9ms | 0.1% | 59.9ms | `renderNativeHeaders` | `node:_http_server:1423` |
| 0.1% | 59.2ms | 0.1% | 59.2ms | `/[^\t\x20-\x7e\x80-\xff]/` | `[native code]` |
| 0.1% | 58.8ms | 0.1% | 58.8ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:212` |
| 0.1% | 58.5ms | 0.1% | 58.5ms | `parseUrl` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:149` |
| 0.1% | 57.6ms | 0.1% | 57.6ms | `/ {2,}/g` | `[native code]` |
| 0.1% | 57.0ms | 13.3% | 4.80s | `async withDeps` | `/app/src/server.ts:104` |
| 0.1% | 56.5ms | 0.1% | 56.5ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:129` |
| 0.1% | 55.5ms | 0.3% | 136.7ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:25` |
| 0.1% | 54.5ms | 1.7% | 619.6ms | `next` | `[native code]` |
| 0.1% | 54.0ms | 0.1% | 62.3ms | `hasOwn` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:6` |
| 0.1% | 54.0ms | 0.1% | 58.6ms | `[Symbol.hasInstance]` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:298` |
| 0.1% | 53.3ms | 0.1% | 53.3ms | `(anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` |
| 0.1% | 52.9ms | 0.1% | 52.9ms | `removeListener` | `node:events:262` |
| 0.1% | 52.1ms | 0.1% | 52.1ms | `PromisePrototypeThen` | `node:diagnostics_channel:2` |
| 0.1% | 51.9ms | 0.1% | 51.9ms | `htmlToText` | `/app/src/htmltotext.ts:132` |
| 0.1% | 51.9ms | 0.1% | 51.9ms | `subarray` | `[native code]` |
| 0.1% | 51.6ms | 0.1% | 51.6ms | `emit` | `node:events:127` |
| 0.1% | 51.0ms | 0.1% | 51.0ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:697` |
| 0.1% | 50.3ms | 0.1% | 50.3ms | `Query` | `/app/node_modules/pg/lib/query.js` |
| 0.1% | 50.0ms | 0.9% | 342.5ms | `addListener` | `node:events:214` |
| 0.1% | 50.0ms | 0.1% | 61.6ms | `applyToStack` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:982` |
| 0.1% | 49.7ms | 0.4% | 149.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:89` |
| 0.1% | 49.7ms | 0.1% | 49.7ms | `get` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:336` |
| 0.1% | 49.0ms | 0.1% | 49.0ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.1% | 48.8ms | 0.1% | 48.8ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js` |
| 0.1% | 48.6ms | 0.5% | 183.8ms | `async resolveParams` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:209` |
| 0.1% | 48.3ms | 0.1% | 48.3ms | `from` | `internal:streams/from:8` |
| 0.1% | 47.2ms | 0.1% | 47.2ms | `_addListener` | `node:events:194` |
| 0.1% | 47.2ms | 0.1% | 47.2ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:267` |
| 0.1% | 46.5ms | 0.1% | 46.5ms | `escapeElement` | `/app/node_modules/pg/lib/utils.js:15` |
| 0.1% | 46.5ms | 0.1% | 46.5ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:37` |
| 0.1% | 44.4ms | 0.1% | 44.4ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.1% | 43.6ms | 15.3% | 5.54s | `clearBuffer` | `internal:streams/writable:379` |
| 0.1% | 43.4ms | 0.1% | 67.4ms | `htmlToText` | `/app/src/htmltotext.ts:133` |
| 0.1% | 42.9ms | 0.1% | 42.9ms | `onNodeHTTPRequest` | `node:_http_server:517` |
| 0.1% | 42.7ms | 0.1% | 45.1ms | `_unrefTimer` | `node:_http_server:1058` |
| 0.1% | 42.7ms | 0.1% | 54.4ms | `resume` | `node:net:1454` |
| 0.1% | 42.6ms | 0.1% | 42.6ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:306` |
| 0.1% | 41.8ms | 0.1% | 56.9ms | `nextTick` | `[native code]` |
| 0.1% | 41.0ms | 0.1% | 41.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js` |
| 0.1% | 40.5ms | 0.1% | 40.5ms | `emit` | `node:events:86` |
| 0.1% | 40.0ms | 0.6% | 244.8ms | `htmlToText` | `/app/src/htmltotext.ts:112` |
| 0.1% | 39.6ms | 0.1% | 39.6ms | `addEventListener` | `[native code]` |
| 0.1% | 39.1ms | 0.2% | 81.5ms | `Readable` | `internal:streams/readable:150` |
| 0.1% | 39.0ms | 0.1% | 39.0ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.1% | 38.3ms | 0.1% | 38.3ms | `listenerCount` | `node:events:354` |
| 0.1% | 38.1ms | 0.1% | 38.1ms | `setPrototypeOf` | `[native code]` |
| 0.1% | 37.9ms | 0.1% | 64.6ms | `renderNativeHeaders` | `node:_http_server:1390` |
| 0.1% | 37.8ms | 0.1% | 37.8ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:183` |
| 0.1% | 37.5ms | 0.1% | 37.5ms | `/^(?:(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])\.){3}(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])$/` | `[native code]` |
| 0.1% | 37.1ms | 0.1% | 37.1ms | `/&(#[0-9]+\|#[xX][0-9a-fA-F]+\|[a-zA-Z]+);/g` | `[native code]` |
| 0.1% | 37.0ms | 0.3% | 126.0ms | `expandRelativeMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:85` |
| 0.1% | 36.8ms | 0.1% | 36.8ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:206` |
| 0.1% | 36.6ms | 0.8% | 292.9ms | `endReadableNT` | `internal:streams/readable:901` |
| 0.1% | 36.6ms | 0.1% | 36.6ms | `async sendOne` | `/app/src/server.ts:124` |
| 0.1% | 36.0ms | 0.1% | 36.0ms | `(anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:245` |
| 0.0% | 35.9ms | 0.1% | 47.3ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:304` |
| 0.0% | 35.8ms | 0.0% | 35.8ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 35.4ms | 0.0% | 35.4ms | `_addHeaderLine` | `node:_http_incoming:362` |
| 0.0% | 35.3ms | 0.0% | 35.3ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:159` |
| 0.0% | 33.5ms | 0.0% | 33.5ms | `encodeURIComponent` | `[native code]` |
| 0.0% | 33.4ms | 0.0% | 33.4ms | `htmlToText` | `/app/src/htmltotext.ts:120` |
| 0.0% | 33.1ms | 0.0% | 33.1ms | `matchHeader` | `node:_http_outgoing:385` |
| 0.0% | 32.7ms | 0.0% | 32.7ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js` |
| 0.0% | 32.2ms | 0.1% | 42.7ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:306` |
| 0.0% | 32.0ms | 0.0% | 32.0ms | `query` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 31.9ms | 0.0% | 31.9ms | `onEofChunk` | `internal:streams/readable` |
| 0.0% | 31.2ms | 0.0% | 31.2ms | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:79` |
| 0.0% | 30.5ms | 0.0% | 30.5ms | `crc32` | `[native code]` |
| 0.0% | 30.4ms | 0.0% | 30.4ms | `(anonymous)` | `/app/node_modules/ioredis/built/utils/Commander.js` |
| 0.0% | 30.1ms | 0.1% | 39.9ms | `_dump` | `node:_http_incoming:388` |
| 0.0% | 29.9ms | 0.1% | 45.2ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:100` |
| 0.0% | 29.9ms | 0.0% | 29.9ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:193` |
| 0.0% | 29.8ms | 0.0% | 29.8ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 29.5ms | 0.0% | 29.5ms | `toISOString` | `[native code]` |
| 0.0% | 29.4ms | 0.0% | 29.4ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:367` |
| 0.0% | 29.3ms | 0.0% | 29.3ms | `resume` | `[native code]` |
| 0.0% | 29.2ms | 0.0% | 29.2ms | `(anonymous)` | `/app/src/deps.ts` |
| 0.0% | 28.7ms | 0.0% | 28.7ms | `async handle` | `/app/src/server.ts:168` |
| 0.0% | 28.5ms | 20.7% | 7.46s | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:447` |
| 0.0% | 28.5ms | 0.0% | 35.4ms | `_addListener` | `node:events:193` |
| 0.0% | 28.3ms | 0.0% | 28.3ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` |
| 0.0% | 28.3ms | 0.0% | 28.3ms | ``/^[\^_`a-zA-Z\-0-9!#$%&'*+.\|~]+$/`` | `[native code]` |
| 0.0% | 28.2ms | 0.0% | 29.3ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:872` |
| 0.0% | 27.9ms | 0.0% | 27.9ms | `refresh` | `[native code]` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `isDate` | `[native code]` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:417` |
| 0.0% | 26.3ms | 0.1% | 58.9ms | `OutgoingMessage` | `node:_http_outgoing:79` |
| 0.0% | 26.3ms | 0.0% | 26.3ms | `_write` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1619` |
| 0.0% | 26.1ms | 0.0% | 26.1ms | `_pulseQueue` | `/app/node_modules/pg-pool/index.js:128` |
| 0.0% | 26.1ms | 0.0% | 26.1ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:247` |
| 0.0% | 26.0ms | 0.0% | 26.0ms | `flat` | `[native code]` |
| 0.0% | 25.7ms | 0.0% | 27.8ms | `concatBytes` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:857` |
| 0.0% | 25.3ms | 0.1% | 42.0ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:81` |
| 0.0% | 25.0ms | 0.0% | 25.0ms | `WritableState` | `internal:streams/writable` |
| 0.0% | 25.0ms | 0.0% | 25.0ms | `(anonymous)` | `internal:streams/readable` |
| 0.0% | 24.9ms | 0.2% | 88.4ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:159` |
| 0.0% | 24.8ms | 0.0% | 24.8ms | `unref` | `[native code]` |
| 0.0% | 24.7ms | 0.0% | 24.7ms | `getName` | `node:_http_agent:94` |
| 0.0% | 24.6ms | 0.0% | 24.6ms | `hasHeaderWithPrefix` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js` |
| 0.0% | 24.6ms | 0.0% | 24.6ms | `removeSocket` | `node:_http_agent:235` |
| 0.0% | 24.1ms | 0.0% | 24.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:139` |
| 0.0% | 24.0ms | 0.1% | 41.1ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:307` |
| 0.0% | 23.8ms | 0.0% | 23.8ms | `_addListener` | `node:events:201` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:185` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `setFeature` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:78` |
| 0.0% | 23.6ms | 4.7% | 1.70s | `async putObject` | `/app/src/deps.ts:70` |
| 0.0% | 23.5ms | 0.0% | 24.6ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:819` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `Result` | `/app/node_modules/pg/lib/result.js:20` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `onceWrapper` | `node:events:244` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:315` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `validateStatusCode` | `node:_http_server` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `_addListener` | `node:events:206` |
| 0.0% | 23.2ms | 0.0% | 23.2ms | `timeout` | `[native code]` |
| 0.0% | 23.1ms | 0.0% | 23.1ms | `(anonymous)` | `node:_http_server:186` |
| 0.0% | 23.1ms | 0.0% | 23.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 22.4ms | 0.3% | 126.9ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:420` |
| 0.0% | 22.3ms | 0.0% | 22.3ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:481` |
| 0.0% | 22.2ms | 0.1% | 45.5ms | `_handleReadyForQuery` | `/app/node_modules/pg/lib/client.js:395` |
| 0.0% | 22.0ms | 0.0% | 22.0ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:179` |
| 0.0% | 22.0ms | 0.0% | 22.0ms | `(anonymous)` | `/app/src/email.ts` |
| 0.0% | 22.0ms | 0.1% | 37.8ms | `async resolveParamsForS3` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:64` |
| 0.0% | 21.9ms | 0.0% | 21.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:150` |
| 0.0% | 21.8ms | 0.0% | 21.8ms | `tracePromise` | `node:diagnostics_channel:206` |
| 0.0% | 21.7ms | 0.1% | 44.2ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:124` |
| 0.0% | 20.8ms | 0.0% | 20.8ms | `setHeader` | `node:_http_outgoing:412` |
| 0.0% | 20.7ms | 0.5% | 206.2ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:37` |
| 0.0% | 20.6ms | 0.0% | 20.6ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1188` |
| 0.0% | 20.4ms | 0.0% | 20.4ms | `randomUUID` | `[native code]` |
| 0.0% | 20.2ms | 0.0% | 20.2ms | `prefinish` | `internal:streams/writable:450` |
| 0.0% | 20.1ms | 26.7% | 9.65s | `async enqueue` | `/app/src/deps.ts:92` |
| 0.0% | 20.1ms | 0.3% | 109.3ms | `async getSigningKey` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:318` |
| 0.0% | 20.1ms | 0.0% | 20.1ms | `/^\n+\|\n+$/g` | `[native code]` |
| 0.0% | 20.1ms | 8.2% | 2.99s | `async rateLimit` | `/app/src/deps.ts:63` |
| 0.0% | 20.0ms | 0.0% | 20.0ms | `validate` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/util/index.js:3` |
| 0.0% | 19.8ms | 0.7% | 267.4ms | `query` | `/app/node_modules/pg/lib/client.js:687` |
| 0.0% | 19.5ms | 0.1% | 55.1ms | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:545` |
| 0.0% | 19.3ms | 0.0% | 19.3ms | `of` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:306` |
| 0.0% | 19.3ms | 3.5% | 1.26s | `Promise` | `[native code]` |
| 0.0% | 18.9ms | 0.1% | 64.9ms | `buildEml` | `/app/src/email.ts:199` |
| 0.0% | 18.9ms | 0.0% | 18.9ms | `[Symbol.hasInstance]` | `[native code]` |
| 0.0% | 18.8ms | 0.0% | 18.8ms | `isArnBucketName` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:88` |
| 0.0% | 18.5ms | 0.0% | 21.8ms | `_write` | `node:net:1729` |
| 0.0% | 18.5ms | 0.0% | 18.5ms | `setHeader` | `node:_http_outgoing:413` |
| 0.0% | 18.2ms | 0.0% | 18.2ms | `sanitizeTraceHeaders` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:235` |
| 0.0% | 18.1ms | 0.0% | 18.1ms | `getName` | `node:_http_agent` |
| 0.0% | 18.1ms | 0.2% | 86.3ms | `from` | `internal:streams/from:6` |
| 0.0% | 18.1ms | 0.0% | 18.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1081` |
| 0.0% | 18.0ms | 0.0% | 18.0ms | `onResponseFinishHandleSocket` | `node:_http_server:1492` |
| 0.0% | 17.9ms | 4.8% | 1.75s | `async (anonymous)` | `/app/src/server.ts:129` |
| 0.0% | 17.7ms | 0.0% | 17.7ms | `toRow` | `/app/src/server.ts:77` |
| 0.0% | 17.7ms | 0.0% | 17.7ms | `advanceResponsePipeline` | `node:_http_server:1599` |
| 0.0% | 17.6ms | 0.2% | 86.5ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:497` |
| 0.0% | 17.5ms | 0.2% | 92.5ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:244` |
| 0.0% | 17.4ms | 0.0% | 17.4ms | `(anonymous)` | `internal:streams/writable` |
| 0.0% | 17.4ms | 0.3% | 115.3ms | `once` | `node:events:255` |
| 0.0% | 17.3ms | 0.0% | 17.3ms | `(anonymous)` | `/app/src/htmltotext.ts:88` |
| 0.0% | 17.1ms | 0.0% | 17.1ms | `_handleReadyForQuery` | `/app/node_modules/pg/lib/client.js` |
| 0.0% | 17.0ms | 0.0% | 17.0ms | `get` | `node:_http_incoming:99` |
| 0.0% | 16.9ms | 0.0% | 16.9ms | `(anonymous)` | `/app/node_modules/ioredis/built/Command.js` |
| 0.0% | 16.8ms | 0.0% | 16.8ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:351` |
| 0.0% | 16.8ms | 0.0% | 16.8ms | `(anonymous)` | `internal:streams/readable:327` |
| 0.0% | 16.7ms | 0.0% | 16.7ms | `onNodeHTTPRequest` | `node:_http_server:465` |
| 0.0% | 16.7ms | 4.8% | 1.73s | `async putObject` | `/app/src/deps.ts:73` |
| 0.0% | 16.6ms | 0.0% | 16.6ms | `removeListener` | `node:events:266` |
| 0.0% | 16.5ms | 4.9% | 1.79s | `processClientData` | `node:_http_client:358` |
| 0.0% | 16.5ms | 0.0% | 16.5ms | `copyWithInserted` | `node:events:228` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `_implicitHeader` | `node:_http_client` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `isValidAddress` | `/app/src/email.ts:53` |
| 0.0% | 16.3ms | 0.0% | 16.3ms | `splice` | `[native code]` |
| 0.0% | 16.0ms | 0.0% | 16.0ms | `htmlToText` | `/app/src/htmltotext.ts:126` |
| 0.0% | 15.8ms | 0.0% | 15.8ms | `flow` | `internal:streams/readable:603` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `Result` | `/app/node_modules/pg/lib/result.js:12` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `createConfigValueProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:97` |
| 0.0% | 15.6ms | 0.0% | 15.6ms | `removeSocket` | `node:_http_agent:230` |
| 0.0% | 15.5ms | 0.0% | 15.5ms | `read` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:804` |
| 0.0% | 15.4ms | 0.1% | 58.0ms | `(anonymous)` | `internal:streams/readable:430` |
| 0.0% | 15.4ms | 0.0% | 15.4ms | `write_` | `node:_http_outgoing` |
| 0.0% | 15.2ms | 0.1% | 64.4ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:335` |
| 0.0% | 15.1ms | 0.3% | 132.5ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:492` |
| 0.0% | 15.0ms | 0.0% | 15.0ms | `push` | `internal:fixed_queue:18` |
| 0.0% | 15.0ms | 0.0% | 24.4ms | `addressList` | `/app/src/email.ts:93` |
| 0.0% | 14.7ms | 0.0% | 14.7ms | `asciiTrim` | `/app/src/email.ts:45` |
| 0.0% | 14.6ms | 0.0% | 15.6ms | `_writeHead` | `node:_http_server:1327` |
| 0.0% | 14.5ms | 0.0% | 14.5ms | `iso8601` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:211` |
| 0.0% | 14.5ms | 2.2% | 802.6ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:19` |
| 0.0% | 14.4ms | 0.0% | 17.1ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:436` |
| 0.0% | 14.3ms | 0.0% | 27.7ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:528` |
| 0.0% | 14.2ms | 0.4% | 167.1ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:818` |
| 0.0% | 13.9ms | 0.0% | 19.6ms | `emitCloseNT` | `internal:streams/destroy:78` |
| 0.0% | 13.9ms | 0.1% | 48.0ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:143` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:349` |
| 0.0% | 13.8ms | 0.0% | 13.8ms | `_onceWrap` | `node:events:243` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `emitCloseNT` | `internal:streams/destroy:72` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `EventEmitter` | `node:events:19` |
| 0.0% | 13.4ms | 0.0% | 14.5ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:192` |
| 0.0% | 13.4ms | 0.0% | 13.4ms | `expandRelativeMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:75` |
| 0.0% | 13.4ms | 0.4% | 165.9ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:137` |
| 0.0% | 13.4ms | 0.0% | 13.4ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:309` |
| 0.0% | 13.3ms | 0.0% | 13.3ms | `(anonymous)` | `/app/src/server.ts` |
| 0.0% | 13.2ms | 0.2% | 75.3ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:584` |
| 0.0% | 13.2ms | 0.0% | 14.4ms | `WritableState` | `internal:streams/writable:152` |
| 0.0% | 13.2ms | 0.0% | 13.2ms | `restorePausedHold` | `node:net:489` |
| 0.0% | 13.1ms | 0.0% | 13.1ms | `Writable` | `internal:streams/writable:175` |
| 0.0% | 13.0ms | 0.0% | 13.0ms | `(anonymous)` | `node:net:1262` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `calculateServerName` | `node:_http_agent:199` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `parseTag` | `/app/src/htmltotext.ts:34` |
| 0.0% | 12.8ms | 0.0% | 12.8ms | `connect` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 12.7ms | 0.0% | 12.7ms | `isStoppedModuleGraphRunning` | `internal:shared:204` |
| 0.0% | 12.5ms | 0.5% | 192.7ms | `Sha256Node` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:456` |
| 0.0% | 12.5ms | 0.0% | 12.5ms | `renderNativeHeaders` | `node:_http_server:1365` |
| 0.0% | 12.5ms | 0.3% | 110.2ms | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:869` |
| 0.0% | 12.3ms | 0.0% | 12.3ms | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:291` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `DefaultIdentityProviderConfig` | `/app/node_modules/@smithy/core/dist-cjs/index.js:212` |
| 0.0% | 12.2ms | 6.6% | 2.38s | `readableAddChunkPushByteMode` | `internal:streams/readable:245` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `query` | `/app/node_modules/pg/lib/client.js:673` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `normalizeProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:117` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:106` |
| 0.0% | 12.0ms | 0.0% | 12.0ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `constructStack` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:28` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `hasHeader` | `node:_http_outgoing` |
| 0.0% | 11.8ms | 0.5% | 192.0ms | `writeValues` | `/app/node_modules/pg-protocol/dist/serializer.js:79` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:100` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `/[^\u0021-\u00ff]/` | `[native code]` |
| 0.0% | 11.7ms | 0.0% | 11.7ms | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:167` |
| 0.0% | 11.7ms | 0.1% | 69.6ms | `_writev` | `node:net:1691` |
| 0.0% | 11.7ms | 0.0% | 11.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:109` |
| 0.0% | 11.7ms | 0.2% | 92.3ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:305` |
| 0.0% | 11.6ms | 0.0% | 11.6ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:676` |
| 0.0% | 11.6ms | 0.0% | 17.6ms | `addCommandComplete` | `/app/node_modules/pg/lib/result.js:32` |
| 0.0% | 11.6ms | 0.0% | 11.6ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:476` |
| 0.0% | 11.4ms | 0.6% | 218.0ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:155` |
| 0.0% | 11.4ms | 0.0% | 11.4ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:719` |
| 0.0% | 11.3ms | 0.0% | 11.3ms | `allocUnsafe` | `[native code]` |
| 0.0% | 11.2ms | 0.0% | 16.2ms | `afterWrite` | `internal:streams/writable:350` |
| 0.0% | 11.1ms | 0.0% | 11.1ms | `(anonymous)` | `internal:streams/readable:520` |
| 0.0% | 11.0ms | 0.1% | 50.4ms | `cleanup` | `internal:streams/readable:445` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:363` |
| 0.0% | 11.0ms | 1.1% | 407.5ms | `(anonymous)` | `/app/node_modules/pg/lib/connection.js:143` |
| 0.0% | 10.8ms | 0.0% | 22.0ms | `async sign` | `/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:64` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `writeOrBuffer` | `internal:streams/writable:278` |
| 0.0% | 10.5ms | 0.0% | 30.6ms | `postProcess` | `/app/src/htmltotext.ts:98` |
| 0.0% | 10.4ms | 0.0% | 10.4ms | `ref` | `[native code]` |
| 0.0% | 10.4ms | 0.0% | 10.4ms | `Hmac` | `node:crypto` |
| 0.0% | 10.3ms | 0.0% | 14.0ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:340` |
| 0.0% | 10.3ms | 0.0% | 15.9ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:524` |
| 0.0% | 10.3ms | 0.0% | 10.3ms | `removeListener` | `node:events:278` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `getName` | `node:_http_agent:97` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `onceWrapper` | `node:events` |
| 0.0% | 10.1ms | 0.3% | 139.2ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:188` |
| 0.0% | 10.0ms | 0.0% | 10.0ms | `htmlToText` | `/app/src/htmltotext.ts:108` |
| 0.0% | 10.0ms | 0.7% | 281.3ms | `use` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:219` |
| 0.0% | 9.9ms | 0.0% | 9.9ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:350` |
| 0.0% | 9.8ms | 0.0% | 9.8ms | `isArray` | `[native code]` |
| 0.0% | 9.7ms | 0.0% | 9.7ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:126` |
| 0.0% | 9.6ms | 0.0% | 9.6ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:722` |
| 0.0% | 9.6ms | 0.1% | 63.2ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:109` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `_write` | `internal:streams/writable:218` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `createAwsAuthSigv4HttpAuthOption` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:835` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `digest` | `[native code]` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `tickOnSocket` | `node:_http_client` |
| 0.0% | 9.3ms | 0.0% | 10.5ms | `isValidAddress` | `/app/src/email.ts:51` |
| 0.0% | 9.2ms | 0.0% | 9.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:677` |
| 0.0% | 9.1ms | 0.7% | 263.8ms | `bound require` | `[native code]` |
| 0.0% | 9.0ms | 0.0% | 22.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:142` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:190` |
| 0.0% | 8.8ms | 0.0% | 8.8ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:273` |
| 0.0% | 8.8ms | 0.7% | 254.4ms | `toStream` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:394` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:180` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `addRequest` | `node:_http_agent:114` |
| 0.0% | 8.7ms | 0.0% | 27.6ms | `Writable` | `internal:streams/writable:173` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:46` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:307` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `keepSocketAlive` | `node:_http_agent:289` |
| 0.0% | 8.4ms | 0.0% | 34.0ms | `_unrefTimer` | `node:net:1654` |
| 0.0% | 8.4ms | 0.0% | 8.4ms | `prepareValue` | `/app/node_modules/pg/lib/utils.js:77` |
| 0.0% | 8.3ms | 0.1% | 65.7ms | `_writeHead` | `node:_http_server:1330` |
| 0.0% | 8.3ms | 0.6% | 243.9ms | `async collectBody` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:20` |
| 0.0% | 8.2ms | 0.0% | 8.2ms | `prepareValue` | `/app/node_modules/pg/lib/utils.js:79` |
| 0.0% | 8.1ms | 0.0% | 8.1ms | `(anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.0% | 8.1ms | 13.4% | 4.84s | `async (anonymous)` | `/app/src/server.ts:131` |
| 0.0% | 8.0ms | 0.0% | 8.0ms | `/[!'()*]/g` | `[native code]` |
| 0.0% | 8.0ms | 0.1% | 54.1ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:230` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `emit` | `node:events:91` |
| 0.0% | 7.9ms | 0.0% | 16.1ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:378` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:33` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `async handle` | `/app/src/server.ts` |
| 0.0% | 7.8ms | 0.0% | 10.0ms | `async region` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:633` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `writeOrBuffer` | `internal:streams/writable:274` |
| 0.0% | 7.7ms | 10.8% | 3.91s | `query` | `/app/node_modules/pg/lib/client.js:783` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `addressList` | `/app/src/email.ts:84` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:13` |
| 0.0% | 7.4ms | 0.0% | 16.6ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:686` |
| 0.0% | 7.4ms | 0.0% | 23.7ms | `removeSocket` | `node:_http_agent:234` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `URL` | `[native code]` |
| 0.0% | 7.3ms | 0.0% | 25.2ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:96` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `CommandRef` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `(anonymous)` | `internal:streams/readable:579` |
| 0.0% | 7.2ms | 0.0% | 7.2ms | `get` | `internal:streams/duplex` |
| 0.0% | 7.2ms | 0.0% | 33.2ms | `applyToStack` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:413` |
| 0.0% | 7.1ms | 0.0% | 7.1ms | `endReadable` | `internal:streams/readable:895` |
| 0.0% | 7.1ms | 0.0% | 7.1ms | `isValidAddress` | `/app/src/email.ts:69` |
| 0.0% | 7.0ms | 0.0% | 7.0ms | `finally` | `[native code]` |
| 0.0% | 7.0ms | 0.3% | 112.8ms | `async digest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:473` |
| 0.0% | 7.0ms | 1.8% | 654.4ms | `async deserializeResponse` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1374` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:323` |
| 0.0% | 6.9ms | 0.0% | 8.2ms | `ReadableState` | `internal:streams/readable:34` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:225` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `validateFunction` | `internal:validators:32` |
| 0.0% | 6.8ms | 0.0% | 6.8ms | `isDnsCompatibleBucketName` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:86` |
| 0.0% | 6.8ms | 0.0% | 6.8ms | `Socket` | `node:net:1062` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `(anonymous)` | `internal:streams/readable:420` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `Command` | `/app/node_modules/ioredis/built/Command.js:63` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:809` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:111` |
| 0.0% | 6.6ms | 5.4% | 1.97s | `_flush` | `node:_http_outgoing:687` |
| 0.0% | 6.5ms | 0.2% | 103.3ms | `resolve` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:273` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `fromList` | `internal:streams/readable:887` |
| 0.0% | 6.4ms | 0.0% | 25.1ms | `async userAgentAppId` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:272` |
| 0.0% | 6.4ms | 0.0% | 6.4ms | `collectBody` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:429` |
| 0.0% | 6.3ms | 0.0% | 6.3ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:185` |
| 0.0% | 6.2ms | 0.0% | 6.2ms | `clearTimeout` | `[native code]` |
| 0.0% | 6.1ms | 0.0% | 6.1ms | `_destroy` | `node:_http_incoming:212` |
| 0.0% | 6.1ms | 0.0% | 6.1ms | `Error` | `[native code]` |
| 0.0% | 6.1ms | 0.0% | 13.1ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:521` |
| 0.0% | 6.0ms | 0.0% | 13.3ms | `onResponseFinishHandleSocket` | `node:_http_server:1483` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `exec` | `[native code]` |
| 0.0% | 5.9ms | 0.7% | 254.2ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:66` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:695` |
| 0.0% | 5.9ms | 0.1% | 39.3ms | `(anonymous)` | `node:_http_agent:61` |
| 0.0% | 5.8ms | 0.0% | 5.8ms | `DataView` | `[native code]` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `endReadable` | `internal:streams/readable` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 5.7ms | 0.0% | 17.1ms | `(anonymous)` | `internal:streams/readable:339` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `skipRaw` | `/app/src/htmltotext.ts:47` |
| 0.0% | 5.5ms | 0.1% | 48.9ms | `(anonymous)` | `internal:streams/readable:351` |
| 0.0% | 5.4ms | 0.0% | 5.4ms | `throwIfServerHeadersSent` | `node:_http_server:1742` |
| 0.0% | 5.4ms | 4.8% | 1.74s | `async (anonymous)` | `/app/src/server.ts:133` |
| 0.0% | 5.4ms | 0.0% | 8.4ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:353` |
| 0.0% | 5.3ms | 0.4% | 170.5ms | `emit` | `node:events:118` |
| 0.0% | 5.2ms | 0.1% | 60.5ms | `ClientRequest` | `node:_http_client:93` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:694` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:192` |
| 0.0% | 5.1ms | 0.2% | 90.9ms | `cloneQueryConfig` | `/app/node_modules/pg/lib/utils.js:175` |
| 0.0% | 5.1ms | 0.0% | 5.1ms | `EventEmitter` | `node:events:13` |
| 0.0% | 5.0ms | 0.0% | 5.0ms | `parserOnMessageComplete` | `node:_http_common:52` |
| 0.0% | 5.0ms | 0.0% | 29.7ms | `(anonymous)` | `internal:streams/readable:489` |
| 0.0% | 5.0ms | 0.2% | 78.1ms | `end` | `node:_http_outgoing:648` |
| 0.0% | 5.0ms | 0.0% | 6.0ms | `read` | `node:net:1484` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `IncomingMessage` | `node:_http_incoming:29` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `Socket` | `node:_http_server:933` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `Readable` | `internal:streams/readable:162` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `setPrototypeDirect` | `[native code]` |
| 0.0% | 4.9ms | 8.5% | 3.07s | `async handle` | `/app/src/server.ts:186` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `doConnect` | `[native code]` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `_release` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 4.8ms | 0.3% | 141.8ms | `toUtf8$1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:86` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `isEncoding` | `[native code]` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `String` | `[native code]` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `_onceWrap` | `node:events:252` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `(anonymous)` | `node:_http_server:1955` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `/^(GETSET\|LPUSH\|MSET\|PFA\|PSETEX\|PUBLISH\|RPUSH\|SADD\|SET\|SPUBLISH\|XADD\|ZADD)/i` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `isPrototypeOf` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `size` | `/app/node_modules/denque/index.js` |
| 0.0% | 4.6ms | 0.4% | 158.5ms | `(anonymous)` | `node:_http_server:1963` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `isReadableStream` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `removeListener` | `node:events:263` |
| 0.0% | 4.4ms | 0.0% | 14.2ms | `renderNativeHeaders` | `node:_http_server:1382` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `normalizeEmail` | `/app/src/email.ts` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `_storeHeader` | `node:_http_outgoing:263` |
| 0.0% | 4.4ms | 0.6% | 223.7ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:523` |
| 0.0% | 4.3ms | 0.1% | 38.6ms | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:600` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `getBlockingTimeoutInMs` | `/app/node_modules/ioredis/built/Redis.js:484` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `cloneQuery` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:65` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `ReadableState` | `internal:streams/readable` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `initPromise` | `/app/node_modules/ioredis/built/Command.js` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `hasOwn` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:243` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `setSocketKeepAlive` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `internal:streams/readable:372` |
| 0.0% | 4.0ms | 10.5% | 3.79s | `emit` | `node:events:103` |
| 0.0% | 4.0ms | 0.0% | 4.9ms | `(anonymous)` | `internal:streams/writable:377` |
| 0.0% | 3.9ms | 0.1% | 64.5ms | `parse` | `/app/node_modules/pg-protocol/dist/parser.js:37` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `WritableState` | `internal:streams/writable:135` |
| 0.0% | 3.9ms | 0.7% | 278.2ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:95` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `convertHttpAuthSchemesToMap` | `/app/node_modules/@smithy/core/dist-cjs/index.js:32` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:161` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `getBlockingTimeoutInMs` | `/app/node_modules/ioredis/built/Redis.js` |
| 0.0% | 3.8ms | 0.0% | 17.0ms | `extendedEncodeURIComponent` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:24` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:720` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `_write` | `node:net` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `isBlob` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1074` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `(anonymous)` | `node:_http_server:1930` |
| 0.0% | 3.7ms | 0.0% | 16.2ms | `escapeUri` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1096` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `Query` | `/app/node_modules/pg/lib/query.js:22` |
| 0.0% | 3.6ms | 0.1% | 47.7ms | `formatDate` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:290` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `__lookupGetter__` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `Readable` | `internal:streams/readable` |
| 0.0% | 3.6ms | 0.3% | 143.5ms | `Stream` | `internal:streams/legacy:4` |
| 0.0% | 3.6ms | 0.0% | 14.8ms | `responseOnEnd` | `node:_http_client:462` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `initPromise` | `/app/node_modules/ioredis/built/Command.js:292` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `sin` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `fromArrayBuffer` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 3.5ms | 0.1% | 37.6ms | `removeSocket` | `node:_http_agent:226` |
| 0.0% | 3.4ms | 0.2% | 73.1ms | `emitResponseFinish` | `node:_http_server:1471` |
| 0.0% | 3.4ms | 0.4% | 155.5ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:582` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `addCommandComplete` | `/app/node_modules/pg/lib/result.js:42` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `Readable` | `internal:streams/readable:144` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async deserializeResponse` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `removeSocket` | `node:_http_agent:243` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async rateLimit` | `/app/src/deps.ts:60` |
| 0.0% | 3.3ms | 0.0% | 4.2ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:513` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `addCString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:42` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` |
| 0.0% | 3.3ms | 0.1% | 47.7ms | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:862` |
| 0.0% | 3.2ms | 0.0% | 13.7ms | `ref` | `/app/node_modules/pg/lib/connection.js:210` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `data` | `node:net:862` |
| 0.0% | 3.2ms | 13.1% | 4.75s | `async withDeps` | `/app/src/server.ts:102` |
| 0.0% | 3.2ms | 0.4% | 154.2ms | `Query` | `/app/node_modules/pg/lib/query.js:12` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `_destroy` | `internal:streams/destroy:45` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:39` |
| 0.0% | 3.1ms | 0.3% | 111.2ms | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:548` |
| 0.0% | 3.1ms | 0.0% | 18.2ms | `resume` | `node:net:1450` |
| 0.0% | 3.0ms | 0.3% | 122.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:168` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `getName` | `node:_http_agent:95` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `_addHeaderLines` | `node:_http_incoming:240` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `addCString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `/^ \| $/g` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `(anonymous)` | `node:_http_server:614` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `slice` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1` |
| 0.0% | 2.9ms | 4.2% | 1.52s | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:23` |
| 0.0% | 2.9ms | 0.2% | 81.1ms | `writeBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:214` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `write` | `/app/node_modules/ioredis/built/resp/decoder.js:91` |
| 0.0% | 2.8ms | 0.1% | 39.7ms | `write` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:961` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `_addHeaderLine` | `node:_http_incoming:373` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `(anonymous)` | `node:_http_server:2204` |
| 0.0% | 2.8ms | 1.1% | 416.1ms | `streamCollector` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1600` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `onNodeHTTPRequest` | `node:_http_server:604` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `_read` | `node:net:1488` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `deserializeMetadata` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:134` |
| 0.0% | 2.6ms | 0.2% | 98.8ms | `IncomingMessage` | `node:_http_incoming:37` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `storeHeader` | `node:_http_outgoing:367` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `returnReply` | `/app/node_modules/ioredis/built/DataHandler.js:76` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `drainOnreadTail` | `node:net` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `constructStack` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:95` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `ConnectionParameters` | `/app/node_modules/pg/lib/connection-parameters.js:127` |
| 0.0% | 2.5ms | 0.0% | 6.2ms | `newClient` | `/app/node_modules/pg-pool/index.js:241` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `fromString` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 2.5ms | 0.0% | 7.4ms | `_write` | `internal:streams/writable:225` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `get` | `internal:streams/writable` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `internal:streams/readable:183` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:77` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `OutgoingMessage` | `node:_http_outgoing` |
| 0.0% | 2.5ms | 0.0% | 34.2ms | `bound ` | `[native code]` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `_read` | `node:net` |
| 0.0% | 2.5ms | 0.0% | 30.8ms | `checkIsHttpToken` | `internal:validators:4` |
| 0.0% | 2.4ms | 0.7% | 280.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:294` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `getAllAliases` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:11` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `maybeReadMore` | `internal:streams/readable:406` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `propertiesExtractor` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:839` |
| 0.0% | 2.3ms | 0.0% | 9.3ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:220` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async sendOne` | `/app/src/server.ts:109` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `addChunk` | `internal:streams/readable` |
| 0.0% | 2.2ms | 8.0% | 2.89s | `async rateLimit` | `/app/src/deps.ts:61` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `_addListener` | `node:events:197` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `has` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:630` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async writeRequestBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:172` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `run` | `internal:async_context_frame:23` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `EventEmitter` | `node:events:12` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `_unrefTimer` | `node:net:1653` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `_pulseQueryQueue` | `/app/node_modules/pg/lib/client.js:626` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `removeListener` | `node:events:290` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `parseParameterStatusMessage` | `/app/node_modules/pg-protocol/dist/parser.js:240` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `checkContentLengthHeader` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:15` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `isValidAddress` | `/app/src/email.ts:70` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:449` |
| 0.0% | 1.8ms | 0.0% | 28.1ms | `ondata` | `internal:streams/readable:462` |
| 0.0% | 1.8ms | 0.2% | 88.7ms | `Hash` | `node:crypto:168` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `throwIfServerHeadersSent` | `node:_http_server` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `_unrefTimer` | `node:net` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:292` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `/^ECHO/i` | `[native code]` |
| 0.0% | 1.6ms | 0.0% | 4.2ms | `readableAddChunkPushByteMode` | `internal:streams/readable:225` |
| 0.0% | 1.5ms | 0.0% | 2.6ms | `connect` | `/app/node_modules/pg-pool/index.js:203` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/app/node_modules/ioredis/built/Command.js:297` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `send` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:516` |
| 0.0% | 1.5ms | 0.1% | 52.1ms | `_release` | `/app/node_modules/pg-pool/index.js:428` |
| 0.0% | 1.4ms | 5.5% | 2.00s | `async sendOne` | `/app/src/server.ts:122` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `socketOnDataInner` | `node:_http_client:345` |
| 0.0% | 1.4ms | 0.0% | 12.5ms | `applyToStack` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:414` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:355` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `onEofChunk` | `internal:streams/readable:388` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `setHeader` | `node:_http_outgoing:410` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `emit` | `node:events:114` |
| 0.0% | 1.3ms | 0.2% | 76.5ms | `onceWrapper` | `node:events:247` |
| 0.0% | 1.3ms | 0.2% | 82.4ms | `Collector` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 14.5ms | `resume` | `node:net:1455` |
| 0.0% | 1.3ms | 0.0% | 27.6ms | `ServerResponse` | `node:_http_server:1339` |
| 0.0% | 1.3ms | 0.1% | 52.3ms | `filter` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_destroy` | `node:_http_incoming` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `updateServiceEndpoint` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 1.2ms | 0.0% | 21.8ms | `(anonymous)` | `node:_http_agent:33` |
| 0.0% | 1.2ms | 0.0% | 3.9ms | `write` | `/app/node_modules/ioredis/built/resp/decoder.js:95` |
| 0.0% | 1.2ms | 0.0% | 13.4ms | `SignatureV4` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:427` |
| 0.0% | 1.2ms | 1.9% | 719.9ms | `forEach` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/src/htmltotext.ts:90` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async insertEmails` | `/app/src/deps.ts:79` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getHighWaterMark` | `internal:streams/state` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `indexOf` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `internal:streams/writable:599` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `renderNativeHeaders` | `node:_http_server:1421` |
| 0.0% | 1.2ms | 0.0% | 8.5ms | `sanitizeArgs` | `/app/node_modules/ioredis/built/tracing.js:26` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/node_modules/pg-protocol/dist/index.js:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toHex` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `defaultEndpointResolver` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `onNodeHTTPRequest` | `node:_http_server:447` |
| 0.0% | 1.2ms | 0.0% | 22.2ms | `bound _handleCommandComplete` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `set` | `internal:streams/writable` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_addListener` | `node:events:198` |
| 0.0% | 1.2ms | 0.0% | 4.2ms | `flush` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:101` |
| 0.0% | 1.2ms | 0.6% | 237.9ms | `bound schemaLogFilter` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:405` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `shift` | `internal:fixed_queue` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `test` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `query` | `/app/node_modules/pg-pool/index.js:446` |
| 0.0% | 1.2ms | 0.0% | 29.5ms | `sort` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `asciiTrim` | `/app/src/email.ts` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `renderNativeHeaders` | `node:_http_server:1420` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_flush` | `node:_http_outgoing` |
| 0.0% | 1.1ms | 0.1% | 60.2ms | `(anonymous)` | `/app/node_modules/ioredis/built/utils/Commander.js:92` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setHeader` | `node:_http_outgoing:406` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resetBuffer` | `internal:streams/writable:155` |
| 0.0% | 1.1ms | 0.0% | 11.2ms | `responseKeepAlive` | `node:_http_client:443` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `initialize` | `[native code]` |
| 0.0% | 1.1ms | 0.5% | 199.0ms | `(anonymous)` | `/app/node_modules/pg-pool/index.js:378` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `InvokeStoreBase` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isURLInstance` | `node:_http_client` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `advanceResponsePipeline` | `node:_http_server:1596` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `emitReadable` | `internal:streams/readable:394` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:199` |
| 0.0% | 1.1ms | 0.8% | 290.3ms | `bound _handleReadyForQuery` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:122` |
| 0.0% | 1.1ms | 0.2% | 85.4ms | `addRequest` | `node:_http_agent:121` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Number` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `hasHeader` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:81` |
| 0.0% | 1.1ms | 0.1% | 44.5ms | `normalizeEmail` | `/app/src/email.ts:161` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `node:_http_outgoing` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toRow` | `/app/src/server.ts` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setBuffer` | `/app/node_modules/pg-protocol/dist/buffer-reader.js:13` |
| 0.0% | 1.1ms | 0.7% | 283.3ms | `bind` | `/app/node_modules/pg-protocol/dist/serializer.js:102` |
| 0.0% | 1.0ms | 0.0% | 3.2ms | `bound onwrite` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:106` |
| 0.0% | 1.0ms | 0.1% | 57.1ms | `async insertEmails` | `/app/src/deps.ts:78` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:724` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/app/node_modules/@ioredis/commands/built/index.js:17` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `callWriteHeadIfObservable` | `node:_http_server:2244` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `join` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:726` |
| 0.0% | 1.0ms | 0.2% | 96.3ms | `flow` | `internal:streams/readable:604` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `validateLookupOptions` | `node:dns:178` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `connect` | `node:net:1261` |
| 0.0% | 1.0ms | 6.6% | 2.38s | `pushDataToSocket` | `node:net:360` |
| 0.0% | 1.0ms | 0.5% | 181.5ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:271` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1358` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `connect` | `/app/node_modules/pg/lib/connection.js:68` |
| 0.0% | 1.0ms | 0.0% | 7.5ms | `(anonymous)` | `internal:streams/readable:360` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_storeHeader` | `node:_http_outgoing:262` |
| 0.0% | 992us | 0.0% | 992us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:116` |
| 0.0% | 991us | 0.0% | 991us | `removeSocket` | `node:_http_agent` |
| 0.0% | 987us | 0.0% | 987us | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:215` |
| 0.0% | 986us | 0.0% | 986us | `EventEmitter` | `node:events` |
| 0.0% | 984us | 0.0% | 984us | `async serializeRequest` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:516` |
| 0.0% | 979us | 0.0% | 979us | `HttpRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` |
| 0.0% | 977us | 0.0% | 977us | `onResponseFinishHandleSocket` | `node:_http_server:1491` |
| 0.0% | 970us | 0.0% | 970us | `skipBalanced` | `/app/src/htmltotext.ts:60` |
| 0.0% | 964us | 0.0% | 964us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` |
| 0.0% | 963us | 0.0% | 963us | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:150` |
| 0.0% | 960us | 0.0% | 960us | `/^(HSET\|HMSET\|LSET\|LINSERT)/i` | `[native code]` |
| 0.0% | 940us | 0.0% | 940us | `parse` | `/app/node_modules/pg-protocol/dist/parser.js:27` |
| 0.0% | 939us | 0.0% | 939us | `bound onFinish` | `[native code]` |
| 0.0% | 935us | 0.0% | 935us | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:509` |
| 0.0% | 930us | 2.1% | 788.1ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:426` |
| 0.0% | 923us | 0.0% | 923us | `bind` | `[native code]` |
| 0.0% | 918us | 0.0% | 918us | `buildEml` | `/app/src/email.ts:194` |
| 0.0% | 915us | 0.0% | 915us | `Boolean` | `[native code]` |
| 0.0% | 889us | 0.0% | 889us | `finalizeSession` | `/app/node_modules/pg/lib/crypto/sasl.js` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 81.7% | 29.48s | 0.7% | 275.1ms | `processTicksAndRejections` | `[native code]` |
| 60.1% | 21.68s | 1.9% | 716.3ms | `(anonymous)` | `[native code]` |
| 35.0% | 12.64s | 35.0% | 12.64s | `writeBuffered` | `[native code]` |
| 35.0% | 12.64s | 0.0% | 0us | `_write` | `node:net:1719` |
| 26.7% | 9.65s | 0.0% | 20.1ms | `async enqueue` | `/app/src/deps.ts:92` |
| 20.7% | 7.46s | 0.0% | 28.5ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:447` |
| 20.4% | 7.36s | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:251` |
| 20.3% | 7.33s | 0.0% | 0us | `writeOrBuffer` | `internal:streams/writable:285` |
| 16.3% | 5.90s | 0.0% | 0us | `async handle` | `/app/src/server.ts:198` |
| 15.3% | 5.54s | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:263` |
| 15.3% | 5.54s | 0.1% | 43.6ms | `clearBuffer` | `internal:streams/writable:379` |
| 15.2% | 5.50s | 0.0% | 0us | `doWrite` | `internal:streams/writable:298` |
| 13.4% | 4.84s | 0.0% | 8.1ms | `async (anonymous)` | `/app/src/server.ts:131` |
| 13.3% | 4.80s | 0.1% | 57.0ms | `async withDeps` | `/app/src/server.ts:104` |
| 13.1% | 4.75s | 0.0% | 3.2ms | `async withDeps` | `/app/src/server.ts:102` |
| 12.2% | 4.40s | 0.0% | 0us | `async handle` | `/app/src/server.ts:197` |
| 12.2% | 4.40s | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:134` |
| 11.6% | 4.19s | 0.0% | 0us | `_acquireClient` | `/app/node_modules/pg-pool/index.js:357` |
| 11.6% | 4.19s | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:467` |
| 10.8% | 3.91s | 0.0% | 0us | `_pulseQueryQueue` | `/app/node_modules/pg/lib/client.js:628` |
| 10.8% | 3.91s | 0.1% | 71.6ms | `emit` | `node:events:100` |
| 10.8% | 3.91s | 0.0% | 7.7ms | `query` | `/app/node_modules/pg/lib/client.js:783` |
| 10.5% | 3.79s | 0.0% | 4.0ms | `emit` | `node:events:103` |
| 9.9% | 3.58s | 0.0% | 0us | `submit` | `/app/node_modules/pg/lib/query.js:177` |
| 9.4% | 3.40s | 0.0% | 0us | `onNodeHTTPRequest` | `node:_http_server:594` |
| 9.3% | 3.37s | 0.0% | 0us | `(anonymous)` | `/app/src/server.ts:202` |
| 8.5% | 3.07s | 0.0% | 4.9ms | `async handle` | `/app/src/server.ts:186` |
| 8.2% | 2.99s | 0.0% | 20.1ms | `async rateLimit` | `/app/src/deps.ts:63` |
| 8.0% | 2.89s | 0.0% | 2.2ms | `async rateLimit` | `/app/src/deps.ts:61` |
| 6.8% | 2.48s | 0.0% | 0us | `(anonymous)` | `/app/src/server.ts:186` |
| 6.6% | 2.38s | 0.0% | 0us | `data` | `node:net:863` |
| 6.6% | 2.38s | 0.0% | 1.0ms | `pushDataToSocket` | `node:net:360` |
| 6.6% | 2.38s | 0.0% | 12.2ms | `readableAddChunkPushByteMode` | `internal:streams/readable:245` |
| 6.5% | 2.37s | 0.0% | 0us | `addChunk` | `internal:streams/readable:267` |
| 6.5% | 2.35s | 0.0% | 0us | `sendJson` | `/app/src/server.ts:39` |
| 6.1% | 2.21s | 6.1% | 2.21s | `writeHeadAndEnd` | `[native code]` |
| 6.1% | 2.21s | 0.0% | 0us | `(anonymous)` | `node:_http_server:1965` |
| 5.6% | 2.03s | 0.0% | 0us | `onSocketNT` | `node:_http_client:543` |
| 5.5% | 2.00s | 0.0% | 1.4ms | `async sendOne` | `/app/src/server.ts:122` |
| 5.5% | 2.00s | 0.0% | 0us | `validate` | `/app/src/server.ts:92` |
| 5.4% | 1.97s | 0.0% | 6.6ms | `_flush` | `node:_http_outgoing:687` |
| 5.4% | 1.96s | 0.0% | 0us | `_flushOutput` | `node:_http_outgoing:704` |
| 5.2% | 1.88s | 0.0% | 0us | `normalizeEmail` | `/app/src/email.ts:187` |
| 5.1% | 1.84s | 0.0% | 0us | `socketOnDataInner` | `node:_http_client:351` |
| 4.9% | 1.79s | 0.0% | 16.5ms | `processClientData` | `node:_http_client:358` |
| 4.9% | 1.78s | 0.9% | 339.5ms | `execute` | `[native code]` |
| 4.8% | 1.75s | 0.0% | 17.9ms | `async (anonymous)` | `/app/src/server.ts:129` |
| 4.8% | 1.74s | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:128` |
| 4.8% | 1.74s | 0.0% | 5.4ms | `async (anonymous)` | `/app/src/server.ts:133` |
| 4.8% | 1.73s | 0.0% | 16.7ms | `async putObject` | `/app/src/deps.ts:73` |
| 4.7% | 1.70s | 0.0% | 23.6ms | `async putObject` | `/app/src/deps.ts:70` |
| 4.3% | 1.55s | 4.3% | 1.55s | `cloneObject` | `[native code]` |
| 4.2% | 1.52s | 0.0% | 2.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:23` |
| 4.2% | 1.52s | 0.0% | 0us | `send` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:535` |
| 3.9% | 1.43s | 0.0% | 0us | `_pulseQueue` | `/app/node_modules/pg-pool/index.js:164` |
| 3.5% | 1.26s | 0.0% | 19.3ms | `Promise` | `[native code]` |
| 3.3% | 1.22s | 0.0% | 0us | `parserOnIncomingClient` | `node:_http_client:431` |
| 3.1% | 1.12s | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:375` |
| 2.8% | 1.01s | 0.2% | 72.3ms | `emit` | `node:events:97` |
| 2.6% | 967.6ms | 0.0% | 0us | `get` | `node:_http_incoming:101` |
| 2.6% | 942.1ms | 0.4% | 174.8ms | `map` | `[native code]` |
| 2.2% | 802.6ms | 0.0% | 14.5ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:19` |
| 2.1% | 790.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:380` |
| 2.1% | 789.7ms | 0.7% | 285.9ms | `htmlToText` | `/app/src/htmltotext.ts:140` |
| 2.1% | 788.1ms | 0.0% | 930us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:426` |
| 2.1% | 788.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:29` |
| 2.1% | 788.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:72` |
| 2.1% | 787.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:403` |
| 2.1% | 787.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:379` |
| 2.1% | 787.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:408` |
| 2.1% | 774.9ms | 0.0% | 0us | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:424` |
| 2.1% | 774.4ms | 0.0% | 0us | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:301` |
| 2.0% | 747.9ms | 2.0% | 747.9ms | `copyDataProperties` | `[native code]` |
| 1.9% | 719.9ms | 0.0% | 1.2ms | `forEach` | `[native code]` |
| 1.8% | 654.4ms | 0.0% | 7.0ms | `async deserializeResponse` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1374` |
| 1.8% | 653.1ms | 1.4% | 538.4ms | `generatorResume` | `[native code]` |
| 1.7% | 619.6ms | 0.1% | 54.5ms | `next` | `[native code]` |
| 1.6% | 613.0ms | 0.0% | 0us | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:437` |
| 1.5% | 560.4ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:370` |
| 1.5% | 560.4ms | 0.0% | 0us | `request` | `node:http:10` |
| 1.4% | 526.3ms | 0.0% | 0us | `resolve` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:270` |
| 1.4% | 518.5ms | 0.0% | 0us | `emitFreeNT` | `node:_http_client:485` |
| 1.3% | 472.5ms | 0.0% | 0us | `onFree` | `node:_http_agent:206` |
| 1.2% | 439.0ms | 1.2% | 439.0ms | `_addHeaderLine` | `node:_http_incoming:374` |
| 1.1% | 425.7ms | 0.0% | 0us | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:603` |
| 1.1% | 416.1ms | 0.0% | 2.8ms | `streamCollector` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1600` |
| 1.1% | 407.5ms | 0.0% | 0us | `parse` | `/app/node_modules/pg-protocol/dist/parser.js:38` |
| 1.1% | 407.5ms | 0.0% | 11.0ms | `(anonymous)` | `/app/node_modules/pg/lib/connection.js:143` |
| 1.1% | 405.5ms | 0.2% | 79.0ms | `anonymous` | `[native code]` |
| 1.0% | 384.9ms | 1.0% | 384.9ms | `(anonymous)` | `/app/src/server.ts:214` |
| 1.0% | 382.6ms | 0.0% | 0us | `htmlToText` | `/app/src/htmltotext.ts:143` |
| 1.0% | 382.3ms | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:121` |
| 1.0% | 382.3ms | 0.0% | 0us | `parseJson` | `/app/src/server.ts:84` |
| 1.0% | 366.9ms | 0.3% | 120.3ms | `postProcess` | `/app/src/htmltotext.ts:97` |
| 0.9% | 350.0ms | 0.0% | 0us | `concat` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:248` |
| 0.9% | 342.5ms | 0.1% | 50.0ms | `addListener` | `node:events:214` |
| 0.9% | 336.9ms | 0.0% | 0us | `submit` | `/app/node_modules/pg/lib/query.js:173` |
| 0.9% | 331.5ms | 0.0% | 0us | `bind` | `/app/node_modules/pg/lib/connection.js:189` |
| 0.9% | 331.5ms | 0.0% | 0us | `prepare` | `/app/node_modules/pg/lib/query.js:230` |
| 0.9% | 330.3ms | 0.0% | 0us | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:536` |
| 0.9% | 329.2ms | 0.9% | 329.2ms | `parse` | `[native code]` |
| 0.8% | 320.3ms | 0.0% | 0us | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:451` |
| 0.8% | 292.9ms | 0.1% | 36.6ms | `endReadableNT` | `internal:streams/readable:901` |
| 0.8% | 290.3ms | 0.0% | 1.1ms | `bound _handleReadyForQuery` | `[native code]` |
| 0.8% | 288.8ms | 0.3% | 113.3ms | `_addHeaderLine` | `node:_http_incoming:356` |
| 0.7% | 283.3ms | 0.0% | 1.1ms | `bind` | `/app/node_modules/pg-protocol/dist/serializer.js:102` |
| 0.7% | 281.3ms | 0.0% | 10.0ms | `use` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:219` |
| 0.7% | 280.7ms | 0.0% | 2.4ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:294` |
| 0.7% | 278.2ms | 0.0% | 3.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:95` |
| 0.7% | 267.4ms | 0.0% | 19.8ms | `query` | `/app/node_modules/pg/lib/client.js:687` |
| 0.7% | 263.8ms | 0.0% | 9.1ms | `bound require` | `[native code]` |
| 0.7% | 262.8ms | 0.0% | 0us | `async getPayloadHash` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:375` |
| 0.7% | 262.8ms | 0.0% | 0us | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:531` |
| 0.7% | 254.9ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:683` |
| 0.7% | 254.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:413` |
| 0.7% | 254.4ms | 0.0% | 8.8ms | `toStream` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:394` |
| 0.7% | 254.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:253` |
| 0.7% | 254.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:62` |
| 0.7% | 254.2ms | 0.0% | 5.9ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:66` |
| 0.7% | 254.2ms | 0.0% | 0us | `cloneTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:65` |
| 0.7% | 253.9ms | 0.7% | 253.9ms | `Buffer` | `[native code]` |
| 0.6% | 251.6ms | 0.0% | 0us | `require` | `[native code]` |
| 0.6% | 244.8ms | 0.1% | 40.0ms | `htmlToText` | `/app/src/htmltotext.ts:112` |
| 0.6% | 243.9ms | 0.0% | 8.3ms | `async collectBody` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:20` |
| 0.6% | 243.9ms | 0.0% | 0us | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:434` |
| 0.6% | 237.9ms | 0.0% | 1.2ms | `bound schemaLogFilter` | `[native code]` |
| 0.6% | 232.9ms | 0.2% | 79.4ms | `(anonymous)` | `/app/src/htmltotext.ts:97` |
| 0.6% | 226.4ms | 0.0% | 0us | `_handleReadyForQuery` | `/app/node_modules/pg/lib/client.js:393` |
| 0.6% | 225.4ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:200` |
| 0.6% | 224.2ms | 0.4% | 165.5ms | `of` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:323` |
| 0.6% | 223.7ms | 0.0% | 0us | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:421` |
| 0.6% | 223.7ms | 0.0% | 4.4ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:523` |
| 0.6% | 223.1ms | 0.6% | 223.1ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:413` |
| 0.6% | 222.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1603` |
| 0.6% | 218.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:412` |
| 0.6% | 218.0ms | 0.0% | 11.4ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:155` |
| 0.5% | 214.0ms | 0.5% | 214.0ms | `asyncFunctionDrive` | `[native code]` |
| 0.5% | 212.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:19` |
| 0.5% | 212.1ms | 0.0% | 0us | `collectBody` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:432` |
| 0.5% | 209.7ms | 0.5% | 209.7ms | `_addHeaderLine` | `node:_http_incoming:359` |
| 0.5% | 207.8ms | 0.5% | 207.8ms | `get buffer` | `[native code]` |
| 0.5% | 207.1ms | 0.2% | 91.2ms | `(anonymous)` | `internal:streams/readable:541` |
| 0.5% | 206.7ms | 0.0% | 0us | `async writeRequestBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:198` |
| 0.5% | 206.2ms | 0.0% | 20.7ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:37` |
| 0.5% | 205.9ms | 0.4% | 150.2ms | `decodeEntities` | `/app/src/htmltotext.ts:87` |
| 0.5% | 205.7ms | 0.0% | 0us | `handleReadyForQuery` | `/app/node_modules/pg/lib/query.js:142` |
| 0.5% | 202.9ms | 0.5% | 202.9ms | `emit` | `node:events` |
| 0.5% | 202.6ms | 0.0% | 0us | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:601` |
| 0.5% | 199.9ms | 0.5% | 199.9ms | `byteLength` | `[native code]` |
| 0.5% | 199.0ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/pg-pool/index.js:378` |
| 0.5% | 199.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:474` |
| 0.5% | 193.7ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:422` |
| 0.5% | 192.7ms | 0.0% | 12.5ms | `Sha256Node` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:456` |
| 0.5% | 192.0ms | 0.0% | 11.8ms | `writeValues` | `/app/node_modules/pg-protocol/dist/serializer.js:79` |
| 0.5% | 191.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:525` |
| 0.5% | 189.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:232` |
| 0.5% | 185.2ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:141` |
| 0.5% | 183.8ms | 0.1% | 48.6ms | `async resolveParams` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:209` |
| 0.5% | 182.9ms | 0.0% | 0us | `async (anonymous)` | `/app/src/server.ts:130` |
| 0.5% | 181.5ms | 0.0% | 1.0ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:271` |
| 0.4% | 180.1ms | 0.0% | 0us | `createHash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:480` |
| 0.4% | 179.8ms | 0.1% | 72.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:194` |
| 0.4% | 179.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:146` |
| 0.4% | 176.4ms | 0.0% | 0us | `emitResponseFinished` | `node:_http_server:1988` |
| 0.4% | 170.5ms | 0.0% | 5.3ms | `emit` | `node:events:118` |
| 0.4% | 169.0ms | 0.4% | 169.0ms | `/[ \t\n\r\f]+/g` | `[native code]` |
| 0.4% | 168.8ms | 0.0% | 0us | `cloneTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:68` |
| 0.4% | 168.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:69` |
| 0.4% | 168.8ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:469` |
| 0.4% | 167.1ms | 0.0% | 14.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:818` |
| 0.4% | 165.9ms | 0.0% | 13.4ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:137` |
| 0.4% | 164.0ms | 0.0% | 0us | `async insertEmails` | `/app/src/deps.ts:89` |
| 0.4% | 163.1ms | 0.0% | 0us | `defaultEndpointResolver` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:801` |
| 0.4% | 162.2ms | 0.4% | 162.2ms | `parseTag` | `/app/src/htmltotext.ts:36` |
| 0.4% | 162.0ms | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:125` |
| 0.4% | 161.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:284` |
| 0.4% | 160.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:284` |
| 0.4% | 158.5ms | 0.0% | 4.6ms | `(anonymous)` | `node:_http_server:1963` |
| 0.4% | 155.5ms | 0.0% | 3.4ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:582` |
| 0.4% | 154.2ms | 0.0% | 3.2ms | `Query` | `/app/node_modules/pg/lib/query.js:12` |
| 0.4% | 153.7ms | 0.0% | 0us | `send` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:543` |
| 0.4% | 153.7ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:163` |
| 0.4% | 153.2ms | 0.4% | 153.2ms | `_addListener` | `node:events` |
| 0.4% | 151.0ms | 0.0% | 0us | `(anonymous)` | `/app/src/server.ts:62` |
| 0.4% | 151.0ms | 0.0% | 0us | `normalizeQueryConfig` | `/app/node_modules/pg/lib/utils.js:157` |
| 0.4% | 149.9ms | 0.1% | 49.7ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:89` |
| 0.4% | 147.4ms | 0.0% | 0us | `toEndpointV1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:180` |
| 0.4% | 147.4ms | 0.0% | 0us | `parseUrl` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:147` |
| 0.4% | 147.2ms | 0.0% | 0us | `(anonymous)` | `node:_http_agent:65` |
| 0.4% | 146.4ms | 0.4% | 146.4ms | `toString` | `[native code]` |
| 0.3% | 143.5ms | 0.0% | 3.6ms | `Stream` | `internal:streams/legacy:4` |
| 0.3% | 142.5ms | 0.0% | 0us | `sendJson` | `/app/src/server.ts:35` |
| 0.3% | 142.5ms | 0.0% | 0us | `(anonymous)` | `node:_http_server:2162` |
| 0.3% | 141.8ms | 0.0% | 4.8ms | `toUtf8$1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:86` |
| 0.3% | 140.3ms | 0.2% | 79.9ms | `checkInvalidHeaderChar` | `node:_http_common:6` |
| 0.3% | 139.2ms | 0.0% | 10.1ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:188` |
| 0.3% | 138.6ms | 0.3% | 138.6ms | `concat` | `[native code]` |
| 0.3% | 136.7ms | 0.1% | 55.5ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:25` |
| 0.3% | 135.1ms | 0.3% | 135.1ms | `setTimeout` | `[native code]` |
| 0.3% | 132.5ms | 0.0% | 15.1ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:492` |
| 0.3% | 132.4ms | 0.0% | 0us | `closeRequest` | `node:_http_client:49` |
| 0.3% | 132.4ms | 0.0% | 0us | `emitFreeNT` | `node:_http_client:482` |
| 0.3% | 128.8ms | 0.3% | 128.8ms | `decodeEntities` | `/app/src/htmltotext.ts:86` |
| 0.3% | 126.9ms | 0.0% | 22.4ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:420` |
| 0.3% | 126.0ms | 0.1% | 37.0ms | `expandRelativeMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:85` |
| 0.3% | 124.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:92` |
| 0.3% | 124.4ms | 0.3% | 124.4ms | `parseTag` | `/app/src/htmltotext.ts:25` |
| 0.3% | 124.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:87` |
| 0.3% | 122.9ms | 0.0% | 3.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:168` |
| 0.3% | 122.2ms | 0.3% | 122.2ms | `removeEventListener` | `[native code]` |
| 0.3% | 121.8ms | 0.2% | 73.8ms | `reduce` | `[native code]` |
| 0.3% | 120.2ms | 0.3% | 120.2ms | `write` | `[native code]` |
| 0.3% | 119.5ms | 0.0% | 0us | `finish` | `internal:streams/writable:479` |
| 0.3% | 118.7ms | 0.3% | 118.7ms | `resolveMiddleware` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.3% | 118.1ms | 0.3% | 118.1ms | `EventEmitter` | `node:events:16` |
| 0.3% | 115.3ms | 0.0% | 17.4ms | `once` | `node:events:255` |
| 0.3% | 113.4ms | 0.0% | 0us | `setHeader` | `node:_http_outgoing:409` |
| 0.3% | 113.4ms | 0.0% | 0us | `validateHeaderValueLenient` | `node:_http_outgoing:361` |
| 0.3% | 113.3ms | 0.0% | 0us | `get` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:332` |
| 0.3% | 112.8ms | 0.0% | 7.0ms | `async digest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:473` |
| 0.3% | 111.2ms | 0.0% | 3.1ms | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:548` |
| 0.3% | 110.2ms | 0.0% | 12.5ms | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:869` |
| 0.3% | 109.8ms | 0.0% | 0us | `Readable` | `internal:streams/readable:161` |
| 0.3% | 109.3ms | 0.0% | 20.1ms | `async getSigningKey` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:318` |
| 0.3% | 109.1ms | 0.0% | 0us | `_release` | `/app/node_modules/pg-pool/index.js:410` |
| 0.2% | 107.8ms | 0.2% | 107.8ms | `async handle` | `/app/src/server.ts:183` |
| 0.2% | 107.4ms | 0.2% | 107.4ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:477` |
| 0.2% | 106.9ms | 0.2% | 106.9ms | `assign` | `[native code]` |
| 0.2% | 106.7ms | 0.0% | 0us | `async handle` | `/app/src/server.ts:178` |
| 0.2% | 105.6ms | 0.0% | 0us | `update` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:462` |
| 0.2% | 105.6ms | 0.2% | 105.6ms | `update` | `[native code]` |
| 0.2% | 105.4ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:110` |
| 0.2% | 105.2ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:175` |
| 0.2% | 104.4ms | 0.2% | 96.2ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:111` |
| 0.2% | 103.3ms | 0.0% | 6.5ms | `resolve` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:273` |
| 0.2% | 103.1ms | 0.2% | 103.1ms | `headersObject` | `[native code]` |
| 0.2% | 103.1ms | 0.0% | 0us | `get` | `node:_http_incoming:94` |
| 0.2% | 102.1ms | 0.0% | 0us | `parserOnMessageComplete` | `node:_http_common:60` |
| 0.2% | 102.1ms | 0.0% | 0us | `readStart` | `node:_http_incoming:17` |
| 0.2% | 100.1ms | 0.0% | 0us | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:535` |
| 0.2% | 99.7ms | 0.2% | 99.7ms | `matchKnownFields` | `node:_http_incoming:246` |
| 0.2% | 98.8ms | 0.0% | 0us | `parserOnHeadersComplete` | `node:_http_common:31` |
| 0.2% | 98.8ms | 0.0% | 2.6ms | `IncomingMessage` | `node:_http_incoming:37` |
| 0.2% | 97.5ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:265` |
| 0.2% | 97.5ms | 0.2% | 97.5ms | `URLSearchParams` | `[native code]` |
| 0.2% | 96.7ms | 0.0% | 0us | `getSigningKey` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:551` |
| 0.2% | 96.3ms | 0.0% | 0us | `addInt32PrefixedString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:72` |
| 0.2% | 96.3ms | 0.0% | 1.0ms | `flow` | `internal:streams/readable:604` |
| 0.2% | 95.8ms | 0.2% | 95.8ms | `/^ +\| +$/g` | `[native code]` |
| 0.2% | 95.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:184` |
| 0.2% | 95.0ms | 0.2% | 95.0ms | `entries` | `[native code]` |
| 0.2% | 94.7ms | 0.2% | 94.7ms | `removeListener` | `node:events` |
| 0.2% | 92.5ms | 0.0% | 17.5ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:244` |
| 0.2% | 92.3ms | 0.0% | 11.7ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:305` |
| 0.2% | 91.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:372` |
| 0.2% | 90.9ms | 0.0% | 5.1ms | `cloneQueryConfig` | `/app/node_modules/pg/lib/utils.js:175` |
| 0.2% | 90.1ms | 0.0% | 0us | `writeValues` | `/app/node_modules/pg-protocol/dist/serializer.js:65` |
| 0.2% | 88.9ms | 0.2% | 88.9ms | `reverse` | `[native code]` |
| 0.2% | 88.7ms | 0.0% | 1.8ms | `Hash` | `node:crypto:168` |
| 0.2% | 88.7ms | 0.0% | 0us | `createHash` | `node:crypto:191` |
| 0.2% | 88.4ms | 0.0% | 24.9ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:159` |
| 0.2% | 87.3ms | 0.2% | 87.3ms | `(anonymous)` | `node:_http_agent:58` |
| 0.2% | 87.2ms | 0.0% | 0us | `createHmac` | `node:crypto:216` |
| 0.2% | 86.8ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:371` |
| 0.2% | 86.8ms | 0.2% | 86.8ms | `Hash` | `[native code]` |
| 0.2% | 86.7ms | 0.2% | 86.7ms | `ClientRequest` | `node:_http_client:199` |
| 0.2% | 86.5ms | 0.0% | 17.6ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:497` |
| 0.2% | 86.3ms | 0.0% | 18.1ms | `from` | `internal:streams/from:6` |
| 0.2% | 86.0ms | 0.2% | 86.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:718` |
| 0.2% | 85.7ms | 0.2% | 85.7ms | `getOwnPropertyDescriptors` | `[native code]` |
| 0.2% | 85.4ms | 0.0% | 1.1ms | `addRequest` | `node:_http_agent:121` |
| 0.2% | 84.7ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1078` |
| 0.2% | 84.5ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:121` |
| 0.2% | 83.9ms | 0.2% | 83.9ms | `parseUrl` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:156` |
| 0.2% | 83.8ms | 0.0% | 0us | `async insertEmails` | `/app/src/deps.ts:81` |
| 0.2% | 83.8ms | 0.0% | 0us | `addInt32PrefixedString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:64` |
| 0.2% | 83.6ms | 0.2% | 83.6ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:452` |
| 0.2% | 82.5ms | 0.0% | 0us | `traceCommand` | `/app/node_modules/ioredis/built/tracing.js:78` |
| 0.2% | 82.4ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1601` |
| 0.2% | 82.4ms | 0.0% | 1.3ms | `Collector` | `[native code]` |
| 0.2% | 82.3ms | 0.2% | 82.3ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:133` |
| 0.2% | 81.7ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1604` |
| 0.2% | 81.5ms | 0.1% | 39.1ms | `Readable` | `internal:streams/readable:150` |
| 0.2% | 81.1ms | 0.0% | 2.9ms | `writeBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:214` |
| 0.2% | 79.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:373` |
| 0.2% | 78.2ms | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:126` |
| 0.2% | 78.2ms | 0.2% | 78.2ms | `stringify` | `[native code]` |
| 0.2% | 78.1ms | 0.0% | 5.0ms | `end` | `node:_http_outgoing:648` |
| 0.2% | 76.8ms | 0.0% | 0us | `Hmac` | `node:crypto:196` |
| 0.2% | 76.8ms | 0.2% | 76.8ms | `Hmac` | `[native code]` |
| 0.2% | 76.5ms | 0.0% | 1.3ms | `onceWrapper` | `node:events:247` |
| 0.2% | 75.7ms | 0.2% | 75.7ms | `matchKnownFields` | `node:_http_incoming` |
| 0.2% | 75.7ms | 0.0% | 0us | `concat` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:249` |
| 0.2% | 75.3ms | 0.0% | 13.2ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:584` |
| 0.2% | 74.6ms | 0.2% | 74.6ms | `emit` | `node:events:87` |
| 0.2% | 74.0ms | 0.0% | 0us | `onfinish` | `internal:streams/readable:483` |
| 0.2% | 73.5ms | 0.0% | 0us | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:449` |
| 0.2% | 73.1ms | 0.0% | 3.4ms | `emitResponseFinish` | `node:_http_server:1471` |
| 0.2% | 72.9ms | 0.2% | 72.9ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:364` |
| 0.2% | 72.8ms | 0.2% | 72.8ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:418` |
| 0.2% | 72.6ms | 0.2% | 72.6ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:38` |
| 0.2% | 72.5ms | 0.2% | 72.5ms | `push` | `[native code]` |
| 0.2% | 72.4ms | 0.0% | 0us | `emitErrorNextTickIfErrorListener` | `internal:http:39` |
| 0.2% | 72.4ms | 0.2% | 72.4ms | `onDestroy` | `internal:streams/destroy:50` |
| 0.1% | 71.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:227` |
| 0.1% | 71.4ms | 0.1% | 71.4ms | `sort` | `[native code]` |
| 0.1% | 71.2ms | 0.1% | 71.2ms | `Uint8Array` | `[native code]` |
| 0.1% | 70.0ms | 0.1% | 70.0ms | `htmlToText` | `/app/src/htmltotext.ts:138` |
| 0.1% | 69.7ms | 0.1% | 69.7ms | `(anonymous)` | `node:_http_agent:42` |
| 0.1% | 69.7ms | 0.0% | 0us | `(anonymous)` | `node:_http_server:2101` |
| 0.1% | 69.6ms | 0.0% | 11.7ms | `_writev` | `node:net:1691` |
| 0.1% | 69.4ms | 0.1% | 67.6ms | `async createStringToSign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:251` |
| 0.1% | 68.7ms | 0.1% | 68.7ms | `htmlToText` | `/app/src/htmltotext.ts:107` |
| 0.1% | 68.6ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:431` |
| 0.1% | 68.6ms | 0.0% | 0us | `onceWrapper` | `node:events:248` |
| 0.1% | 67.9ms | 0.1% | 67.9ms | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:613` |
| 0.1% | 67.5ms | 0.0% | 0us | `toUint8Array` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:842` |
| 0.1% | 67.4ms | 0.1% | 43.4ms | `htmlToText` | `/app/src/htmltotext.ts:133` |
| 0.1% | 66.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:237` |
| 0.1% | 65.9ms | 0.0% | 0us | `async handle` | `/app/src/server.ts:171` |
| 0.1% | 65.7ms | 0.0% | 8.3ms | `_writeHead` | `node:_http_server:1330` |
| 0.1% | 64.9ms | 0.0% | 18.9ms | `buildEml` | `/app/src/email.ts:199` |
| 0.1% | 64.8ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:235` |
| 0.1% | 64.8ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:714` |
| 0.1% | 64.6ms | 0.1% | 37.9ms | `renderNativeHeaders` | `node:_http_server:1390` |
| 0.1% | 64.5ms | 0.0% | 3.9ms | `parse` | `/app/node_modules/pg-protocol/dist/parser.js:37` |
| 0.1% | 64.4ms | 0.0% | 15.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:335` |
| 0.1% | 63.7ms | 0.0% | 0us | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:334` |
| 0.1% | 63.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:207` |
| 0.1% | 63.4ms | 0.1% | 63.4ms | `toHex` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:805` |
| 0.1% | 63.2ms | 0.0% | 9.6ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:109` |
| 0.1% | 63.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:781` |
| 0.1% | 63.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:796` |
| 0.1% | 63.2ms | 0.1% | 63.2ms | `release` | `[native code]` |
| 0.1% | 62.9ms | 0.0% | 0us | `unpipe` | `internal:streams/readable:487` |
| 0.1% | 62.3ms | 0.1% | 54.0ms | `hasOwn` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:6` |
| 0.1% | 62.1ms | 0.0% | 0us | `resume_` | `internal:streams/readable:591` |
| 0.1% | 62.0ms | 0.0% | 0us | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:557` |
| 0.1% | 61.9ms | 0.1% | 61.9ms | `addRequest` | `node:_http_agent:127` |
| 0.1% | 61.6ms | 0.1% | 50.0ms | `applyToStack` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:982` |
| 0.1% | 61.4ms | 0.0% | 0us | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:730` |
| 0.1% | 61.2ms | 0.0% | 0us | `destroy` | `internal:streams/destroy:41` |
| 0.1% | 61.1ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:99` |
| 0.1% | 60.6ms | 0.1% | 60.6ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:503` |
| 0.1% | 60.5ms | 0.0% | 5.2ms | `ClientRequest` | `node:_http_client:93` |
| 0.1% | 60.5ms | 0.1% | 60.5ms | `resume` | `node:net:1451` |
| 0.1% | 60.4ms | 0.1% | 60.4ms | `htmlToText` | `/app/src/htmltotext.ts:125` |
| 0.1% | 60.4ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:142` |
| 0.1% | 60.2ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/ioredis/built/utils/Commander.js:92` |
| 0.1% | 60.0ms | 0.1% | 60.0ms | `defineProperties` | `[native code]` |
| 0.1% | 59.9ms | 0.1% | 59.9ms | `renderNativeHeaders` | `node:_http_server:1423` |
| 0.1% | 59.3ms | 0.0% | 0us | `hmac` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:327` |
| 0.1% | 59.2ms | 0.1% | 59.2ms | `/[^\t\x20-\x7e\x80-\xff]/` | `[native code]` |
| 0.1% | 58.9ms | 0.0% | 26.3ms | `OutgoingMessage` | `node:_http_outgoing:79` |
| 0.1% | 58.8ms | 0.1% | 58.8ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:212` |
| 0.1% | 58.6ms | 0.1% | 54.0ms | `[Symbol.hasInstance]` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:298` |
| 0.1% | 58.6ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:147` |
| 0.1% | 58.5ms | 0.1% | 58.5ms | `parseUrl` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:149` |
| 0.1% | 58.0ms | 0.0% | 0us | `_destroy` | `internal:streams/destroy:63` |
| 0.1% | 58.0ms | 0.0% | 15.4ms | `(anonymous)` | `internal:streams/readable:430` |
| 0.1% | 57.6ms | 0.0% | 0us | `write_` | `node:_http_outgoing:582` |
| 0.1% | 57.6ms | 0.1% | 57.6ms | `/ {2,}/g` | `[native code]` |
| 0.1% | 57.1ms | 0.0% | 1.0ms | `async insertEmails` | `/app/src/deps.ts:78` |
| 0.1% | 56.9ms | 0.1% | 41.8ms | `nextTick` | `[native code]` |
| 0.1% | 56.5ms | 0.1% | 56.5ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:129` |
| 0.1% | 55.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:884` |
| 0.1% | 55.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:528` |
| 0.1% | 55.1ms | 0.0% | 19.5ms | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:545` |
| 0.1% | 54.8ms | 0.0% | 0us | `arrayString` | `/app/node_modules/pg/lib/utils.js:40` |
| 0.1% | 54.4ms | 0.1% | 42.7ms | `resume` | `node:net:1454` |
| 0.1% | 54.1ms | 0.0% | 8.0ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:230` |
| 0.1% | 53.6ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:266` |
| 0.1% | 53.3ms | 0.1% | 53.3ms | `(anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` |
| 0.1% | 52.9ms | 0.1% | 52.9ms | `removeListener` | `node:events:262` |
| 0.1% | 52.3ms | 0.0% | 1.3ms | `filter` | `[native code]` |
| 0.1% | 52.3ms | 0.0% | 0us | `fromUtf8$1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:37` |
| 0.1% | 52.1ms | 0.0% | 0us | `(anonymous)` | `node:diagnostics_channel:219` |
| 0.1% | 52.1ms | 0.1% | 52.1ms | `PromisePrototypeThen` | `node:diagnostics_channel:2` |
| 0.1% | 52.1ms | 0.0% | 1.5ms | `_release` | `/app/node_modules/pg-pool/index.js:428` |
| 0.1% | 51.9ms | 0.1% | 51.9ms | `htmlToText` | `/app/src/htmltotext.ts:132` |
| 0.1% | 51.9ms | 0.1% | 51.9ms | `subarray` | `[native code]` |
| 0.1% | 51.8ms | 0.0% | 0us | `read` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:836` |
| 0.1% | 51.8ms | 0.0% | 0us | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:245` |
| 0.1% | 51.7ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:522` |
| 0.1% | 51.7ms | 0.0% | 0us | `onunpipe` | `internal:streams/readable:435` |
| 0.1% | 51.7ms | 0.0% | 0us | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:547` |
| 0.1% | 51.6ms | 0.1% | 51.6ms | `emit` | `node:events:127` |
| 0.1% | 51.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:697` |
| 0.1% | 51.0ms | 0.1% | 51.0ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:697` |
| 0.1% | 50.5ms | 0.0% | 0us | `normalizeServerName` | `node:_http_agent:187` |
| 0.1% | 50.5ms | 0.0% | 0us | `addRequest` | `node:_http_agent:125` |
| 0.1% | 50.4ms | 0.0% | 11.0ms | `cleanup` | `internal:streams/readable:445` |
| 0.1% | 50.3ms | 0.1% | 50.3ms | `Query` | `/app/node_modules/pg/lib/query.js` |
| 0.1% | 50.0ms | 0.0% | 0us | `emitReadable_` | `internal:streams/readable:402` |
| 0.1% | 49.7ms | 0.1% | 49.7ms | `get` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:336` |
| 0.1% | 49.7ms | 0.0% | 0us | `fromString` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:21` |
| 0.1% | 49.2ms | 0.0% | 0us | `finish` | `internal:streams/writable:482` |
| 0.1% | 49.0ms | 0.1% | 49.0ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.1% | 48.9ms | 0.0% | 5.5ms | `(anonymous)` | `internal:streams/readable:351` |
| 0.1% | 48.8ms | 0.1% | 48.8ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js` |
| 0.1% | 48.8ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:141` |
| 0.1% | 48.6ms | 0.0% | 0us | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:414` |
| 0.1% | 48.3ms | 0.1% | 48.3ms | `from` | `internal:streams/from:8` |
| 0.1% | 48.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:1` |
| 0.1% | 48.0ms | 0.0% | 13.9ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:143` |
| 0.1% | 47.7ms | 0.0% | 3.3ms | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:862` |
| 0.1% | 47.7ms | 0.0% | 3.6ms | `formatDate` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:290` |
| 0.1% | 47.7ms | 0.0% | 0us | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:525` |
| 0.1% | 47.4ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:376` |
| 0.1% | 47.3ms | 0.0% | 35.9ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:304` |
| 0.1% | 47.2ms | 0.1% | 47.2ms | `_addListener` | `node:events:194` |
| 0.1% | 47.2ms | 0.1% | 47.2ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:267` |
| 0.1% | 47.0ms | 0.0% | 0us | `processClientData` | `node:_http_client:376` |
| 0.1% | 46.5ms | 0.1% | 46.5ms | `escapeElement` | `/app/node_modules/pg/lib/utils.js:15` |
| 0.1% | 46.5ms | 0.1% | 46.5ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:37` |
| 0.1% | 46.1ms | 0.0% | 0us | `toBase64$1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:52` |
| 0.1% | 45.5ms | 0.0% | 22.2ms | `_handleReadyForQuery` | `/app/node_modules/pg/lib/client.js:395` |
| 0.1% | 45.2ms | 0.0% | 29.9ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:100` |
| 0.1% | 45.1ms | 0.1% | 42.7ms | `_unrefTimer` | `node:_http_server:1058` |
| 0.1% | 45.1ms | 0.0% | 0us | `onDataIncomingMessage` | `internal:http:80` |
| 0.1% | 45.0ms | 0.0% | 0us | `htmlToText` | `/app/src/htmltotext.ts:121` |
| 0.1% | 44.6ms | 0.0% | 0us | `async getSignature` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:546` |
| 0.1% | 44.6ms | 0.0% | 0us | `expandRelativeMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:76` |
| 0.1% | 44.5ms | 0.0% | 1.1ms | `normalizeEmail` | `/app/src/email.ts:161` |
| 0.1% | 44.4ms | 0.1% | 44.4ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.1% | 44.2ms | 0.0% | 21.7ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:124` |
| 0.1% | 44.0ms | 0.0% | 0us | `onNodeHTTPRequest` | `node:_http_server:460` |
| 0.1% | 43.9ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:711` |
| 0.1% | 43.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:228` |
| 0.1% | 43.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:178` |
| 0.1% | 42.9ms | 0.1% | 42.9ms | `onNodeHTTPRequest` | `node:_http_server:517` |
| 0.1% | 42.7ms | 0.0% | 32.2ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:306` |
| 0.1% | 42.6ms | 0.1% | 42.6ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:306` |
| 0.1% | 42.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:191` |
| 0.1% | 42.2ms | 0.0% | 0us | `Writable` | `internal:streams/writable:181` |
| 0.1% | 42.0ms | 0.0% | 25.3ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:81` |
| 0.1% | 41.4ms | 0.0% | 0us | `normalizeEmail` | `/app/src/email.ts:159` |
| 0.1% | 41.2ms | 0.0% | 0us | `_implicitHeader` | `node:_http_client:264` |
| 0.1% | 41.1ms | 0.0% | 0us | `resume_` | `internal:streams/readable:590` |
| 0.1% | 41.1ms | 0.0% | 24.0ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:307` |
| 0.1% | 41.0ms | 0.1% | 41.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js` |
| 0.1% | 40.8ms | 0.0% | 0us | `stringHasher` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:145` |
| 0.1% | 40.8ms | 0.0% | 0us | `async digest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:248` |
| 0.1% | 40.5ms | 0.1% | 40.5ms | `emit` | `node:events:86` |
| 0.1% | 39.9ms | 0.0% | 30.1ms | `_dump` | `node:_http_incoming:388` |
| 0.1% | 39.9ms | 0.0% | 0us | `emitResponseFinish` | `node:_http_server:1464` |
| 0.1% | 39.7ms | 0.0% | 2.8ms | `write` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:961` |
| 0.1% | 39.6ms | 0.1% | 39.6ms | `addEventListener` | `[native code]` |
| 0.1% | 39.3ms | 0.0% | 5.9ms | `(anonymous)` | `node:_http_agent:61` |
| 0.1% | 39.3ms | 0.0% | 0us | `skipRaw` | `/app/src/htmltotext.ts:49` |
| 0.1% | 39.3ms | 0.0% | 0us | `Query` | `/app/node_modules/pg/lib/query.js:28` |
| 0.1% | 39.0ms | 0.1% | 39.0ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.1% | 39.0ms | 0.0% | 0us | `IncomingMessage` | `node:_http_incoming:30` |
| 0.1% | 38.8ms | 0.0% | 0us | `resolve` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:271` |
| 0.1% | 38.6ms | 0.0% | 4.3ms | `resolveMiddlewareWithContext` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:600` |
| 0.1% | 38.3ms | 0.1% | 38.3ms | `listenerCount` | `node:events:354` |
| 0.1% | 38.1ms | 0.0% | 0us | `mutate` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:67` |
| 0.1% | 38.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:20` |
| 0.1% | 38.1ms | 0.1% | 38.1ms | `setPrototypeOf` | `[native code]` |
| 0.1% | 38.0ms | 0.0% | 0us | `(anonymous)` | `node:_http_server:1978` |
| 0.1% | 37.8ms | 0.0% | 22.0ms | `async resolveParamsForS3` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:64` |
| 0.1% | 37.8ms | 0.1% | 37.8ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:183` |
| 0.1% | 37.6ms | 0.0% | 3.5ms | `removeSocket` | `node:_http_agent:226` |
| 0.1% | 37.5ms | 0.1% | 37.5ms | `/^(?:(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])\.){3}(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])$/` | `[native code]` |
| 0.1% | 37.5ms | 0.0% | 0us | `isIPv4` | `internal:net/isIP:6` |
| 0.1% | 37.5ms | 0.0% | 0us | `calculateServerName` | `node:_http_agent:200` |
| 0.1% | 37.5ms | 0.0% | 0us | `isIP` | `internal:net/isIP:12` |
| 0.1% | 37.5ms | 0.0% | 0us | `tickOnSocket` | `node:_http_client:495` |
| 0.1% | 37.1ms | 0.1% | 37.1ms | `/&(#[0-9]+\|#[xX][0-9a-fA-F]+\|[a-zA-Z]+);/g` | `[native code]` |
| 0.1% | 36.9ms | 0.0% | 0us | `_writev` | `node:net:1686` |
| 0.1% | 36.9ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:67` |
| 0.1% | 36.8ms | 0.1% | 36.8ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:206` |
| 0.1% | 36.6ms | 0.0% | 0us | `read` | `internal:streams/from:10` |
| 0.1% | 36.6ms | 0.1% | 36.6ms | `async sendOne` | `/app/src/server.ts:124` |
| 0.1% | 36.1ms | 0.0% | 0us | `_write` | `node:net:1713` |
| 0.1% | 36.0ms | 0.1% | 36.0ms | `(anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:245` |
| 0.0% | 35.8ms | 0.0% | 35.8ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 35.8ms | 0.0% | 0us | `processHeader` | `node:_http_outgoing:356` |
| 0.0% | 35.8ms | 0.0% | 0us | `_storeHeader` | `node:_http_outgoing:268` |
| 0.0% | 35.5ms | 0.0% | 0us | `async createStringToSign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:257` |
| 0.0% | 35.4ms | 0.0% | 35.4ms | `_addHeaderLine` | `node:_http_incoming:362` |
| 0.0% | 35.4ms | 0.0% | 28.5ms | `_addListener` | `node:events:193` |
| 0.0% | 35.3ms | 0.0% | 35.3ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:159` |
| 0.0% | 35.2ms | 0.0% | 0us | `race` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:91` |
| 0.0% | 35.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:97` |
| 0.0% | 35.1ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:84` |
| 0.0% | 34.2ms | 0.0% | 2.5ms | `bound ` | `[native code]` |
| 0.0% | 34.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:184` |
| 0.0% | 34.0ms | 0.0% | 8.4ms | `_unrefTimer` | `node:net:1654` |
| 0.0% | 33.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:112` |
| 0.0% | 33.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:89` |
| 0.0% | 33.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:968` |
| 0.0% | 33.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:971` |
| 0.0% | 33.5ms | 0.0% | 33.5ms | `encodeURIComponent` | `[native code]` |
| 0.0% | 33.4ms | 0.0% | 33.4ms | `htmlToText` | `/app/src/htmltotext.ts:120` |
| 0.0% | 33.2ms | 0.0% | 7.2ms | `applyToStack` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:413` |
| 0.0% | 33.1ms | 0.0% | 0us | `storeHeader` | `node:_http_outgoing:368` |
| 0.0% | 33.1ms | 0.0% | 33.1ms | `matchHeader` | `node:_http_outgoing:385` |
| 0.0% | 32.7ms | 0.0% | 32.7ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js` |
| 0.0% | 32.3ms | 0.0% | 0us | `htmlToText` | `/app/src/htmltotext.ts:128` |
| 0.0% | 32.3ms | 0.0% | 0us | `emitResponseFinish` | `node:_http_server:1468` |
| 0.0% | 32.3ms | 0.0% | 0us | `onError` | `node:_http_incoming:391` |
| 0.0% | 32.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:120` |
| 0.0% | 32.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:231` |
| 0.0% | 32.0ms | 0.0% | 32.0ms | `query` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 31.9ms | 0.0% | 31.9ms | `onEofChunk` | `internal:streams/readable` |
| 0.0% | 31.9ms | 0.0% | 0us | `readableAddChunkPushObjectMode` | `internal:streams/readable:249` |
| 0.0% | 31.9ms | 0.0% | 0us | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:125` |
| 0.0% | 31.9ms | 0.0% | 0us | `parseCommandCompleteMessage` | `/app/node_modules/pg-protocol/dist/parser.js:177` |
| 0.0% | 31.4ms | 0.0% | 0us | `skipBalanced` | `/app/src/htmltotext.ts:68` |
| 0.0% | 31.2ms | 0.0% | 31.2ms | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:79` |
| 0.0% | 31.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:164` |
| 0.0% | 30.8ms | 0.0% | 2.5ms | `checkIsHttpToken` | `internal:validators:4` |
| 0.0% | 30.8ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:131` |
| 0.0% | 30.7ms | 0.0% | 0us | `endReadableNT` | `internal:streams/readable:906` |
| 0.0% | 30.6ms | 0.0% | 10.5ms | `postProcess` | `/app/src/htmltotext.ts:98` |
| 0.0% | 30.5ms | 0.0% | 30.5ms | `crc32` | `[native code]` |
| 0.0% | 30.5ms | 0.0% | 0us | `update` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:241` |
| 0.0% | 30.5ms | 0.0% | 0us | `stringHasher` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:144` |
| 0.0% | 30.5ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:601` |
| 0.0% | 30.5ms | 0.0% | 0us | `onDestroy` | `internal:streams/destroy:60` |
| 0.0% | 30.5ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:605` |
| 0.0% | 30.4ms | 0.0% | 30.4ms | `(anonymous)` | `/app/node_modules/ioredis/built/utils/Commander.js` |
| 0.0% | 30.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/index.js:4` |
| 0.0% | 30.2ms | 0.0% | 0us | `bind` | `/app/node_modules/pg-protocol/dist/serializer.js:94` |
| 0.0% | 30.2ms | 0.0% | 0us | `async createStringToSign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:252` |
| 0.0% | 30.1ms | 0.0% | 0us | `sendJson` | `/app/src/server.ts:37` |
| 0.0% | 29.9ms | 0.0% | 29.9ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:193` |
| 0.0% | 29.8ms | 0.0% | 29.8ms | `ReadableState` | `internal:streams/readable:30` |
| 0.0% | 29.7ms | 0.0% | 5.0ms | `(anonymous)` | `internal:streams/readable:489` |
| 0.0% | 29.6ms | 0.0% | 0us | `node:events` | `node:events:655` |
| 0.0% | 29.6ms | 0.0% | 0us | `internal:streams/legacy` | `internal:streams/legacy:2` |
| 0.0% | 29.6ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 29.6ms | 0.0% | 0us | `internal:streams/transform` | `internal:streams/transform:2` |
| 0.0% | 29.6ms | 0.0% | 0us | `internal:streams/lazy_transform` | `internal:streams/lazy_transform:2` |
| 0.0% | 29.6ms | 0.0% | 0us | `node:crypto` | `node:crypto:2` |
| 0.0% | 29.5ms | 0.0% | 0us | `getMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:140` |
| 0.0% | 29.5ms | 0.0% | 1.2ms | `sort` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` |
| 0.0% | 29.5ms | 0.0% | 29.5ms | `toISOString` | `[native code]` |
| 0.0% | 29.5ms | 0.0% | 0us | `iso8601` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:210` |
| 0.0% | 29.4ms | 0.0% | 29.4ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:367` |
| 0.0% | 29.3ms | 0.0% | 28.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:872` |
| 0.0% | 29.3ms | 0.0% | 29.3ms | `resume` | `[native code]` |
| 0.0% | 29.2ms | 0.0% | 29.2ms | `(anonymous)` | `/app/src/deps.ts` |
| 0.0% | 29.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:459` |
| 0.0% | 28.8ms | 0.0% | 0us | `applyToStack` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:415` |
| 0.0% | 28.7ms | 0.0% | 28.7ms | `async handle` | `/app/src/server.ts:168` |
| 0.0% | 28.3ms | 0.0% | 28.3ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` |
| 0.0% | 28.3ms | 0.0% | 28.3ms | ``/^[\^_`a-zA-Z\-0-9!#$%&'*+.\|~]+$/`` | `[native code]` |
| 0.0% | 28.2ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:314` |
| 0.0% | 28.1ms | 0.0% | 1.8ms | `ondata` | `internal:streams/readable:462` |
| 0.0% | 28.1ms | 0.0% | 0us | `emitCloseNT` | `internal:http:47` |
| 0.0% | 27.9ms | 0.0% | 27.9ms | `refresh` | `[native code]` |
| 0.0% | 27.8ms | 0.0% | 25.7ms | `concatBytes` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:857` |
| 0.0% | 27.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1610` |
| 0.0% | 27.7ms | 0.0% | 14.3ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:528` |
| 0.0% | 27.6ms | 0.0% | 8.7ms | `Writable` | `internal:streams/writable:173` |
| 0.0% | 27.6ms | 0.0% | 1.3ms | `ServerResponse` | `node:_http_server:1339` |
| 0.0% | 27.6ms | 0.0% | 0us | `onNodeHTTPRequest` | `node:_http_server:491` |
| 0.0% | 27.2ms | 0.0% | 0us | `finishMaybe` | `internal:streams/writable:465` |
| 0.0% | 27.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:420` |
| 0.0% | 27.2ms | 0.0% | 0us | `onend` | `internal:streams/readable:439` |
| 0.0% | 26.8ms | 0.0% | 0us | `prepareValue` | `/app/node_modules/pg/lib/utils.js:63` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:417` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `isDate` | `[native code]` |
| 0.0% | 26.3ms | 0.0% | 26.3ms | `_write` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1619` |
| 0.0% | 26.2ms | 0.0% | 0us | `Command` | `/app/node_modules/ioredis/built/Command.js:76` |
| 0.0% | 26.1ms | 0.0% | 26.1ms | `_pulseQueue` | `/app/node_modules/pg-pool/index.js:128` |
| 0.0% | 26.1ms | 0.0% | 26.1ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:247` |
| 0.0% | 26.0ms | 0.0% | 0us | `Command` | `/app/node_modules/ioredis/built/Command.js:74` |
| 0.0% | 26.0ms | 0.0% | 26.0ms | `flat` | `[native code]` |
| 0.0% | 25.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:337` |
| 0.0% | 25.9ms | 0.0% | 0us | `setTimeout` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:44` |
| 0.0% | 25.9ms | 0.0% | 0us | `async handle` | `/app/src/server.ts:192` |
| 0.0% | 25.9ms | 0.0% | 0us | `readBody` | `/app/src/server.ts:48` |
| 0.0% | 25.7ms | 0.0% | 0us | `_writeHead` | `node:_http_server:1302` |
| 0.0% | 25.2ms | 0.0% | 7.3ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:96` |
| 0.0% | 25.1ms | 0.0% | 6.4ms | `async userAgentAppId` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:272` |
| 0.0% | 25.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:688` |
| 0.0% | 25.0ms | 0.0% | 25.0ms | `WritableState` | `internal:streams/writable` |
| 0.0% | 25.0ms | 0.0% | 25.0ms | `(anonymous)` | `internal:streams/readable` |
| 0.0% | 24.8ms | 0.0% | 24.8ms | `unref` | `[native code]` |
| 0.0% | 24.8ms | 0.0% | 0us | `keepSocketAlive` | `node:_http_agent:286` |
| 0.0% | 24.8ms | 0.0% | 0us | `unref` | `node:net:1661` |
| 0.0% | 24.7ms | 0.0% | 24.7ms | `getName` | `node:_http_agent:94` |
| 0.0% | 24.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1608` |
| 0.0% | 24.6ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:257` |
| 0.0% | 24.6ms | 0.0% | 24.6ms | `hasHeaderWithPrefix` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js` |
| 0.0% | 24.6ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:158` |
| 0.0% | 24.6ms | 0.0% | 24.6ms | `removeSocket` | `node:_http_agent:235` |
| 0.0% | 24.6ms | 0.0% | 23.5ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:819` |
| 0.0% | 24.4ms | 0.0% | 15.0ms | `addressList` | `/app/src/email.ts:93` |
| 0.0% | 24.1ms | 0.0% | 24.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:139` |
| 0.0% | 23.8ms | 0.0% | 0us | `addCString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:44` |
| 0.0% | 23.8ms | 0.0% | 23.8ms | `_addListener` | `node:events:201` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:185` |
| 0.0% | 23.7ms | 0.0% | 7.4ms | `removeSocket` | `node:_http_agent:234` |
| 0.0% | 23.7ms | 0.0% | 23.7ms | `setFeature` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:78` |
| 0.0% | 23.7ms | 0.0% | 0us | `async checkFeatures` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:615` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `Result` | `/app/node_modules/pg/lib/result.js:20` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `onceWrapper` | `node:events:244` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:315` |
| 0.0% | 23.4ms | 0.0% | 0us | `_writeHead` | `node:_http_server:1295` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `validateStatusCode` | `node:_http_server` |
| 0.0% | 23.4ms | 0.0% | 23.4ms | `_addListener` | `node:events:206` |
| 0.0% | 23.3ms | 0.0% | 0us | `end` | `/app/node_modules/pg/lib/client.js:826` |
| 0.0% | 23.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:413` |
| 0.0% | 23.3ms | 0.0% | 0us | `_remove` | `/app/node_modules/pg-pool/index.js:181` |
| 0.0% | 23.2ms | 0.0% | 0us | `async putObject` | `/app/src/deps.ts:72` |
| 0.0% | 23.2ms | 0.0% | 23.2ms | `timeout` | `[native code]` |
| 0.0% | 23.1ms | 0.0% | 0us | `emit` | `node:events:121` |
| 0.0% | 23.1ms | 0.0% | 23.1ms | `(anonymous)` | `node:_http_server:186` |
| 0.0% | 23.1ms | 0.0% | 23.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 23.0ms | 0.0% | 0us | `applyToStack` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:443` |
| 0.0% | 22.8ms | 0.0% | 0us | `query` | `/app/node_modules/pg-pool/index.js:449` |
| 0.0% | 22.3ms | 0.0% | 22.3ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:481` |
| 0.0% | 22.2ms | 0.0% | 1.2ms | `bound _handleCommandComplete` | `[native code]` |
| 0.0% | 22.1ms | 0.0% | 9.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:142` |
| 0.0% | 22.0ms | 0.0% | 22.0ms | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:179` |
| 0.0% | 22.0ms | 0.0% | 0us | `tags` | `/app/src/email.ts:140` |
| 0.0% | 22.0ms | 0.0% | 22.0ms | `(anonymous)` | `/app/src/email.ts` |
| 0.0% | 22.0ms | 0.0% | 0us | `normalizeEmail` | `/app/src/email.ts:177` |
| 0.0% | 22.0ms | 0.0% | 0us | `applyToStack` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:40` |
| 0.0% | 22.0ms | 0.0% | 10.8ms | `async sign` | `/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:64` |
| 0.0% | 22.0ms | 0.0% | 0us | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:81` |
| 0.0% | 21.9ms | 0.0% | 21.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:150` |
| 0.0% | 21.8ms | 0.0% | 18.5ms | `_write` | `node:net:1729` |
| 0.0% | 21.8ms | 0.0% | 1.2ms | `(anonymous)` | `node:_http_agent:33` |
| 0.0% | 21.8ms | 0.0% | 21.8ms | `tracePromise` | `node:diagnostics_channel:206` |
| 0.0% | 21.5ms | 0.0% | 0us | `_release` | `/app/node_modules/pg-pool/index.js:385` |
| 0.0% | 21.3ms | 0.0% | 0us | `hmac` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:329` |
| 0.0% | 21.1ms | 0.0% | 0us | `writeBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:207` |
| 0.0% | 21.0ms | 0.0% | 0us | `_handleCommandComplete` | `/app/node_modules/pg/lib/client.js:496` |
| 0.0% | 21.0ms | 0.0% | 0us | `handleCommandComplete` | `/app/node_modules/pg/lib/query.js:104` |
| 0.0% | 20.8ms | 0.0% | 20.8ms | `setHeader` | `node:_http_outgoing:412` |
| 0.0% | 20.7ms | 0.0% | 0us | `handleReadyForQuery` | `/app/node_modules/pg/lib/query.js:149` |
| 0.0% | 20.6ms | 0.0% | 0us | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:719` |
| 0.0% | 20.6ms | 0.0% | 20.6ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1188` |
| 0.0% | 20.4ms | 0.0% | 20.4ms | `randomUUID` | `[native code]` |
| 0.0% | 20.2ms | 0.0% | 20.2ms | `prefinish` | `internal:streams/writable:450` |
| 0.0% | 20.1ms | 0.0% | 20.1ms | `/^\n+\|\n+$/g` | `[native code]` |
| 0.0% | 20.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:487` |
| 0.0% | 20.0ms | 0.0% | 20.0ms | `validate` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/util/index.js:3` |
| 0.0% | 19.6ms | 0.0% | 13.9ms | `emitCloseNT` | `internal:streams/destroy:78` |
| 0.0% | 19.3ms | 0.0% | 19.3ms | `of` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:306` |
| 0.0% | 19.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:92` |
| 0.0% | 19.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:198` |
| 0.0% | 19.2ms | 0.0% | 0us | `async putObject` | `/app/src/deps.ts:71` |
| 0.0% | 19.2ms | 0.0% | 0us | `PutObjectCommand` | `[native code]` |
| 0.0% | 18.9ms | 0.0% | 0us | `value` | `internal:streams/writable:206` |
| 0.0% | 18.9ms | 0.0% | 18.9ms | `[Symbol.hasInstance]` | `[native code]` |
| 0.0% | 18.8ms | 0.0% | 0us | `emitResponseFinish` | `node:_http_server:1472` |
| 0.0% | 18.8ms | 0.0% | 0us | `async resolveParamsForS3` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:66` |
| 0.0% | 18.8ms | 0.0% | 18.8ms | `isArnBucketName` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:88` |
| 0.0% | 18.5ms | 0.0% | 18.5ms | `setHeader` | `node:_http_outgoing:413` |
| 0.0% | 18.4ms | 0.0% | 0us | `initPromise` | `/app/node_modules/ioredis/built/Command.js:294` |
| 0.0% | 18.2ms | 0.0% | 3.1ms | `resume` | `node:net:1450` |
| 0.0% | 18.2ms | 0.0% | 18.2ms | `sanitizeTraceHeaders` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:235` |
| 0.0% | 18.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:214` |
| 0.0% | 18.1ms | 0.0% | 18.1ms | `getName` | `node:_http_agent` |
| 0.0% | 18.1ms | 0.0% | 18.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1081` |
| 0.0% | 18.0ms | 0.0% | 18.0ms | `onResponseFinishHandleSocket` | `node:_http_server:1492` |
| 0.0% | 17.8ms | 0.0% | 0us | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:403` |
| 0.0% | 17.7ms | 0.0% | 17.7ms | `toRow` | `/app/src/server.ts:77` |
| 0.0% | 17.7ms | 0.0% | 17.7ms | `advanceResponsePipeline` | `node:_http_server:1599` |
| 0.0% | 17.6ms | 0.0% | 11.6ms | `addCommandComplete` | `/app/node_modules/pg/lib/result.js:32` |
| 0.0% | 17.4ms | 0.0% | 17.4ms | `(anonymous)` | `internal:streams/writable` |
| 0.0% | 17.3ms | 0.0% | 17.3ms | `(anonymous)` | `/app/src/htmltotext.ts:88` |
| 0.0% | 17.1ms | 0.0% | 17.1ms | `_handleReadyForQuery` | `/app/node_modules/pg/lib/client.js` |
| 0.0% | 17.1ms | 0.0% | 14.4ms | `async deserializeResponse` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:436` |
| 0.0% | 17.1ms | 0.0% | 5.7ms | `(anonymous)` | `internal:streams/readable:339` |
| 0.0% | 17.0ms | 0.0% | 3.8ms | `extendedEncodeURIComponent` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:24` |
| 0.0% | 17.0ms | 0.0% | 17.0ms | `get` | `node:_http_incoming:99` |
| 0.0% | 16.9ms | 0.0% | 16.9ms | `(anonymous)` | `/app/node_modules/ioredis/built/Command.js` |
| 0.0% | 16.8ms | 0.0% | 16.8ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:351` |
| 0.0% | 16.8ms | 0.0% | 16.8ms | `(anonymous)` | `internal:streams/readable:327` |
| 0.0% | 16.7ms | 0.0% | 16.7ms | `onNodeHTTPRequest` | `node:_http_server:465` |
| 0.0% | 16.6ms | 0.0% | 7.4ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:686` |
| 0.0% | 16.6ms | 0.0% | 16.6ms | `removeListener` | `node:events:266` |
| 0.0% | 16.5ms | 0.0% | 16.5ms | `copyWithInserted` | `node:events:228` |
| 0.0% | 16.5ms | 0.0% | 0us | `_addListener` | `node:events:208` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `_implicitHeader` | `node:_http_client` |
| 0.0% | 16.4ms | 0.0% | 16.4ms | `isValidAddress` | `/app/src/email.ts:53` |
| 0.0% | 16.3ms | 0.0% | 16.3ms | `splice` | `[native code]` |
| 0.0% | 16.2ms | 0.0% | 3.7ms | `escapeUri` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1096` |
| 0.0% | 16.2ms | 0.0% | 11.2ms | `afterWrite` | `internal:streams/writable:350` |
| 0.0% | 16.1ms | 0.0% | 7.9ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:378` |
| 0.0% | 16.0ms | 0.0% | 16.0ms | `htmlToText` | `/app/src/htmltotext.ts:126` |
| 0.0% | 15.9ms | 0.0% | 10.3ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:524` |
| 0.0% | 15.8ms | 0.0% | 15.8ms | `flow` | `internal:streams/readable:603` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `Result` | `/app/node_modules/pg/lib/result.js:12` |
| 0.0% | 15.7ms | 0.0% | 15.7ms | `createConfigValueProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:97` |
| 0.0% | 15.6ms | 0.0% | 14.6ms | `_writeHead` | `node:_http_server:1327` |
| 0.0% | 15.6ms | 0.0% | 15.6ms | `removeSocket` | `node:_http_agent:230` |
| 0.0% | 15.6ms | 0.0% | 0us | `fromArrayBuffer` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:15` |
| 0.0% | 15.5ms | 0.0% | 15.5ms | `read` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:804` |
| 0.0% | 15.4ms | 0.0% | 15.4ms | `write_` | `node:_http_outgoing` |
| 0.0% | 15.2ms | 0.0% | 0us | `fromUtf8$1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:38` |
| 0.0% | 15.2ms | 0.0% | 0us | `onDataIncomingMessage` | `internal:http:93` |
| 0.0% | 15.2ms | 0.0% | 0us | `resume` | `node:_http_server:1258` |
| 0.0% | 15.2ms | 0.0% | 0us | `#resumeSocket` | `node:_http_server:1133` |
| 0.0% | 15.0ms | 0.0% | 0us | `push` | `internal:fixed_queue:41` |
| 0.0% | 15.0ms | 0.0% | 15.0ms | `push` | `internal:fixed_queue:18` |
| 0.0% | 14.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:1` |
| 0.0% | 14.8ms | 0.0% | 0us | `async useFipsEndpoint` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:640` |
| 0.0% | 14.8ms | 0.0% | 3.6ms | `responseOnEnd` | `node:_http_client:462` |
| 0.0% | 14.7ms | 0.0% | 0us | `isValidAddress` | `/app/src/email.ts:55` |
| 0.0% | 14.7ms | 0.0% | 14.7ms | `asciiTrim` | `/app/src/email.ts:45` |
| 0.0% | 14.5ms | 0.0% | 13.4ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:192` |
| 0.0% | 14.5ms | 0.0% | 14.5ms | `iso8601` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:211` |
| 0.0% | 14.5ms | 0.0% | 1.3ms | `resume` | `node:net:1455` |
| 0.0% | 14.4ms | 0.0% | 13.2ms | `WritableState` | `internal:streams/writable:152` |
| 0.0% | 14.2ms | 0.0% | 4.4ms | `renderNativeHeaders` | `node:_http_server:1382` |
| 0.0% | 14.1ms | 0.0% | 0us | `reuseSocket` | `node:_http_agent:306` |
| 0.0% | 14.1ms | 0.0% | 0us | `addRequest` | `node:_http_agent:137` |
| 0.0% | 14.0ms | 0.0% | 10.3ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:340` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:349` |
| 0.0% | 13.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Redis.js:7` |
| 0.0% | 13.8ms | 0.0% | 13.8ms | `_onceWrap` | `node:events:243` |
| 0.0% | 13.8ms | 0.0% | 0us | `parseReadyForQueryMessage` | `/app/node_modules/pg-protocol/dist/parser.js:173` |
| 0.0% | 13.8ms | 0.0% | 0us | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:128` |
| 0.0% | 13.8ms | 0.0% | 0us | `string` | `/app/node_modules/pg-protocol/dist/buffer-reader.js:36` |
| 0.0% | 13.7ms | 0.0% | 0us | `_pulseQueue` | `/app/node_modules/pg-pool/index.js:161` |
| 0.0% | 13.7ms | 0.0% | 0us | `ref` | `/app/node_modules/pg/lib/client.js:788` |
| 0.0% | 13.7ms | 0.0% | 3.2ms | `ref` | `/app/node_modules/pg/lib/connection.js:210` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `emitCloseNT` | `internal:streams/destroy:72` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `EventEmitter` | `node:events:19` |
| 0.0% | 13.4ms | 0.0% | 1.2ms | `SignatureV4` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:427` |
| 0.0% | 13.4ms | 0.0% | 0us | `SignatureV4MultiRegion` | `/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:57` |
| 0.0% | 13.4ms | 0.0% | 0us | `SignatureV4SignWithCredentials` | `[native code]` |
| 0.0% | 13.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:292` |
| 0.0% | 13.4ms | 0.0% | 13.4ms | `expandRelativeMiddlewareList` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:75` |
| 0.0% | 13.4ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1371` |
| 0.0% | 13.4ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:510` |
| 0.0% | 13.4ms | 0.0% | 13.4ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:309` |
| 0.0% | 13.3ms | 0.0% | 13.3ms | `(anonymous)` | `/app/src/server.ts` |
| 0.0% | 13.3ms | 0.0% | 6.0ms | `onResponseFinishHandleSocket` | `node:_http_server:1483` |
| 0.0% | 13.2ms | 0.0% | 0us | `async insertEmails` | `/app/src/deps.ts:86` |
| 0.0% | 13.2ms | 0.0% | 13.2ms | `restorePausedHold` | `node:net:489` |
| 0.0% | 13.1ms | 0.0% | 13.1ms | `Writable` | `internal:streams/writable:175` |
| 0.0% | 13.1ms | 0.0% | 6.1ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:521` |
| 0.0% | 13.0ms | 0.0% | 13.0ms | `(anonymous)` | `node:net:1262` |
| 0.0% | 13.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:132` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `calculateServerName` | `node:_http_agent:199` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `parseTag` | `/app/src/htmltotext.ts:34` |
| 0.0% | 12.8ms | 0.0% | 12.8ms | `connect` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 12.7ms | 0.0% | 0us | `emitListeningNextTick` | `node:_http_server:161` |
| 0.0% | 12.7ms | 0.0% | 12.7ms | `isStoppedModuleGraphRunning` | `internal:shared:204` |
| 0.0% | 12.6ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:170` |
| 0.0% | 12.5ms | 0.0% | 1.4ms | `applyToStack` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:414` |
| 0.0% | 12.5ms | 0.0% | 12.5ms | `renderNativeHeaders` | `node:_http_server:1365` |
| 0.0% | 12.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:228` |
| 0.0% | 12.3ms | 0.0% | 12.3ms | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:291` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `DefaultIdentityProviderConfig` | `/app/node_modules/@smithy/core/dist-cjs/index.js:212` |
| 0.0% | 12.2ms | 0.0% | 0us | `async identityProviderConfigProvider` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:4944` |
| 0.0% | 12.2ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:49` |
| 0.0% | 12.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:1` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `query` | `/app/node_modules/pg/lib/client.js:673` |
| 0.0% | 12.1ms | 0.0% | 0us | `SignatureV4Base` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:237` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `normalizeProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:117` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:106` |
| 0.0% | 12.0ms | 0.0% | 0us | `onServerConnection` | `node:_http_server:676` |
| 0.0% | 12.0ms | 0.0% | 0us | `_send` | `/app/node_modules/pg/lib/connection.js:175` |
| 0.0% | 12.0ms | 0.0% | 12.0ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 11.9ms | 0.0% | 0us | `Command` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:594` |
| 0.0% | 11.9ms | 0.0% | 0us | `CommandRef` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:716` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `constructStack` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:28` |
| 0.0% | 11.9ms | 0.0% | 11.9ms | `hasHeader` | `node:_http_outgoing` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:100` |
| 0.0% | 11.8ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:111` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `/[^\u0021-\u00ff]/` | `[native code]` |
| 0.0% | 11.7ms | 0.0% | 11.7ms | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:167` |
| 0.0% | 11.7ms | 0.0% | 11.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:109` |
| 0.0% | 11.6ms | 0.0% | 11.6ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:676` |
| 0.0% | 11.6ms | 0.0% | 11.6ms | `async deserializeHttpMessage` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:476` |
| 0.0% | 11.5ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:485` |
| 0.0% | 11.4ms | 0.0% | 0us | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:188` |
| 0.0% | 11.4ms | 0.0% | 11.4ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:719` |
| 0.0% | 11.3ms | 0.0% | 11.3ms | `allocUnsafe` | `[native code]` |
| 0.0% | 11.3ms | 0.0% | 0us | `flush` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:104` |
| 0.0% | 11.2ms | 0.0% | 0us | `addressList` | `/app/src/email.ts:95` |
| 0.0% | 11.2ms | 0.0% | 1.1ms | `responseKeepAlive` | `node:_http_client:443` |
| 0.0% | 11.2ms | 0.0% | 0us | `applyToStack` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:272` |
| 0.0% | 11.2ms | 0.0% | 0us | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:542` |
| 0.0% | 11.2ms | 0.0% | 0us | `async sign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:470` |
| 0.0% | 11.1ms | 0.0% | 11.1ms | `(anonymous)` | `internal:streams/readable:520` |
| 0.0% | 11.1ms | 0.0% | 0us | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:34` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `hash` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:363` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `writeOrBuffer` | `internal:streams/writable:278` |
| 0.0% | 10.7ms | 0.0% | 0us | `prependListener` | `node:events:218` |
| 0.0% | 10.7ms | 0.0% | 0us | `prependListener` | `internal:streams/legacy:51` |
| 0.0% | 10.7ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:477` |
| 0.0% | 10.6ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:274` |
| 0.0% | 10.5ms | 0.0% | 9.3ms | `isValidAddress` | `/app/src/email.ts:51` |
| 0.0% | 10.4ms | 0.0% | 10.4ms | `ref` | `[native code]` |
| 0.0% | 10.4ms | 0.0% | 0us | `ref` | `node:net:1545` |
| 0.0% | 10.4ms | 0.0% | 10.4ms | `Hmac` | `node:crypto` |
| 0.0% | 10.3ms | 0.0% | 10.3ms | `removeListener` | `node:events:278` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `getName` | `node:_http_agent:97` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `onceWrapper` | `node:events` |
| 0.0% | 10.1ms | 0.0% | 0us | `_destroy` | `node:_http_incoming:224` |
| 0.0% | 10.0ms | 0.0% | 0us | `_pulseQueryQueue` | `/app/node_modules/pg/lib/client.js:638` |
| 0.0% | 10.0ms | 0.0% | 10.0ms | `htmlToText` | `/app/src/htmltotext.ts:108` |
| 0.0% | 10.0ms | 0.0% | 7.8ms | `async region` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:633` |
| 0.0% | 9.9ms | 0.0% | 9.9ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:350` |
| 0.0% | 9.9ms | 0.0% | 0us | `emitErrorNextTickIfErrorListenerNT` | `internal:http:32` |
| 0.0% | 9.9ms | 0.0% | 0us | `_destroy` | `node:_http_incoming:215` |
| 0.0% | 9.8ms | 0.0% | 9.8ms | `isArray` | `[native code]` |
| 0.0% | 9.7ms | 0.0% | 0us | `parserOnMessageComplete` | `node:_http_common:58` |
| 0.0% | 9.7ms | 0.0% | 9.7ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:126` |
| 0.0% | 9.6ms | 0.0% | 9.6ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:722` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `_write` | `internal:streams/writable:218` |
| 0.0% | 9.5ms | 0.0% | 9.5ms | `createAwsAuthSigv4HttpAuthOption` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:835` |
| 0.0% | 9.5ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:895` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `digest` | `[native code]` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `tickOnSocket` | `node:_http_client` |
| 0.0% | 9.3ms | 0.0% | 0us | `async resolvedCredentials` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:225` |
| 0.0% | 9.3ms | 0.0% | 2.3ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:220` |
| 0.0% | 9.2ms | 0.0% | 9.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:677` |
| 0.0% | 9.1ms | 0.0% | 0us | `emitReadable_` | `internal:streams/readable:401` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:190` |
| 0.0% | 8.8ms | 0.0% | 8.8ms | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:273` |
| 0.0% | 8.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:180` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `addRequest` | `node:_http_agent:114` |
| 0.0% | 8.7ms | 0.0% | 8.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:46` |
| 0.0% | 8.5ms | 0.0% | 0us | `_buildCommandContext` | `/app/node_modules/ioredis/built/Redis.js:647` |
| 0.0% | 8.5ms | 0.0% | 1.2ms | `sanitizeArgs` | `/app/node_modules/ioredis/built/tracing.js:26` |
| 0.0% | 8.5ms | 0.0% | 0us | `async insertEmails` | `/app/src/deps.ts:88` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:307` |
| 0.0% | 8.5ms | 0.0% | 8.5ms | `keepSocketAlive` | `node:_http_agent:289` |
| 0.0% | 8.5ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:481` |
| 0.0% | 8.4ms | 0.0% | 8.4ms | `prepareValue` | `/app/node_modules/pg/lib/utils.js:77` |
| 0.0% | 8.4ms | 0.0% | 5.4ms | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:353` |
| 0.0% | 8.2ms | 0.0% | 8.2ms | `prepareValue` | `/app/node_modules/pg/lib/utils.js:79` |
| 0.0% | 8.2ms | 0.0% | 6.9ms | `ReadableState` | `internal:streams/readable:34` |
| 0.0% | 8.1ms | 0.0% | 8.1ms | `(anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.0% | 8.0ms | 0.0% | 8.0ms | `/[!'()*]/g` | `[native code]` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `emit` | `node:events:91` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `getTransformedHeaders` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:33` |
| 0.0% | 7.9ms | 0.0% | 7.9ms | `async handle` | `/app/src/server.ts` |
| 0.0% | 7.8ms | 0.0% | 0us | `async digest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:471` |
| 0.0% | 7.8ms | 0.0% | 0us | `_release` | `/app/node_modules/pg-pool/index.js:389` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `writeOrBuffer` | `internal:streams/writable:274` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `addressList` | `/app/src/email.ts:84` |
| 0.0% | 7.6ms | 0.0% | 0us | `cleanup` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:98` |
| 0.0% | 7.6ms | 0.0% | 0us | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:241` |
| 0.0% | 7.5ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:397` |
| 0.0% | 7.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:378` |
| 0.0% | 7.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:205` |
| 0.0% | 7.5ms | 0.0% | 0us | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:85` |
| 0.0% | 7.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:385` |
| 0.0% | 7.5ms | 0.0% | 1.0ms | `(anonymous)` | `internal:streams/readable:360` |
| 0.0% | 7.5ms | 0.0% | 0us | `resume_` | `internal:streams/readable:592` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:13` |
| 0.0% | 7.4ms | 0.0% | 2.5ms | `_write` | `internal:streams/writable:225` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `URL` | `[native code]` |
| 0.0% | 7.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1611` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `CommandRef` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `(anonymous)` | `internal:streams/readable:579` |
| 0.0% | 7.3ms | 0.0% | 0us | `connect` | `/app/node_modules/pg-pool/index.js:235` |
| 0.0% | 7.2ms | 0.0% | 0us | `setHeader` | `node:_http_server:1745` |
| 0.0% | 7.2ms | 0.0% | 7.2ms | `get` | `internal:streams/duplex` |
| 0.0% | 7.1ms | 0.0% | 0us | `maybeReadMore_` | `internal:streams/readable:411` |
| 0.0% | 7.1ms | 0.0% | 7.1ms | `endReadable` | `internal:streams/readable:895` |
| 0.0% | 7.1ms | 0.0% | 7.1ms | `isValidAddress` | `/app/src/email.ts:69` |
| 0.0% | 7.0ms | 0.0% | 0us | `Socket` | `node:_http_server:932` |
| 0.0% | 7.0ms | 0.0% | 0us | `race` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:104` |
| 0.0% | 7.0ms | 0.0% | 7.0ms | `finally` | `[native code]` |
| 0.0% | 7.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:140` |
| 0.0% | 7.0ms | 0.0% | 0us | `prefinish` | `internal:streams/writable:461` |
| 0.0% | 6.9ms | 0.0% | 0us | `async fn` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:333` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:323` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:225` |
| 0.0% | 6.9ms | 0.0% | 0us | `checkListener` | `node:events:564` |
| 0.0% | 6.9ms | 0.0% | 6.9ms | `validateFunction` | `internal:validators:32` |
| 0.0% | 6.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/DataHandler.js:29` |
| 0.0% | 6.8ms | 0.0% | 6.8ms | `isDnsCompatibleBucketName` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:86` |
| 0.0% | 6.8ms | 0.0% | 0us | `async resolveParamsForS3` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:71` |
| 0.0% | 6.8ms | 0.0% | 6.8ms | `Socket` | `node:net:1062` |
| 0.0% | 6.8ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:360` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `(anonymous)` | `internal:streams/readable:420` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `Command` | `/app/node_modules/ioredis/built/Command.js:63` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:809` |
| 0.0% | 6.7ms | 0.0% | 6.7ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:111` |
| 0.0% | 6.6ms | 0.0% | 0us | `(anonymous)` | `node:dns:210` |
| 0.0% | 6.6ms | 0.0% | 0us | `emitLookup` | `node:net:1845` |
| 0.0% | 6.6ms | 0.0% | 0us | `guarded` | `internal:shared:114` |
| 0.0% | 6.5ms | 0.0% | 6.5ms | `fromList` | `internal:streams/readable:887` |
| 0.0% | 6.4ms | 0.0% | 6.4ms | `collectBody` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:429` |
| 0.0% | 6.3ms | 0.0% | 6.3ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:185` |
| 0.0% | 6.2ms | 0.0% | 2.5ms | `newClient` | `/app/node_modules/pg-pool/index.js:241` |
| 0.0% | 6.2ms | 0.0% | 6.2ms | `clearTimeout` | `[native code]` |
| 0.0% | 6.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Command.js:6` |
| 0.0% | 6.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/cluster/index.js:7` |
| 0.0% | 6.1ms | 0.0% | 6.1ms | `_destroy` | `node:_http_incoming:212` |
| 0.0% | 6.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:192` |
| 0.0% | 6.1ms | 0.0% | 6.1ms | `Error` | `[native code]` |
| 0.0% | 6.1ms | 0.0% | 0us | `_flushOutput` | `node:_http_outgoing:702` |
| 0.0% | 6.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:544` |
| 0.0% | 6.0ms | 0.0% | 5.0ms | `read` | `node:net:1484` |
| 0.0% | 6.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:38` |
| 0.0% | 5.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/index.js:3` |
| 0.0% | 5.9ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:242` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `exec` | `[native code]` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:695` |
| 0.0% | 5.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:3` |
| 0.0% | 5.8ms | 0.0% | 5.8ms | `DataView` | `[native code]` |
| 0.0% | 5.7ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:469` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `endReadable` | `internal:streams/readable` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `schemaLogFilter` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `skipRaw` | `/app/src/htmltotext.ts:47` |
| 0.0% | 5.4ms | 0.0% | 5.4ms | `throwIfServerHeadersSent` | `node:_http_server:1742` |
| 0.0% | 5.3ms | 0.0% | 0us | `describe` | `/app/node_modules/pg/lib/connection.js:234` |
| 0.0% | 5.3ms | 0.0% | 0us | `prepare` | `/app/node_modules/pg/lib/query.js:246` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:694` |
| 0.0% | 5.2ms | 0.0% | 5.2ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:192` |
| 0.0% | 5.1ms | 0.0% | 5.1ms | `EventEmitter` | `node:events:13` |
| 0.0% | 5.0ms | 0.0% | 5.0ms | `parserOnMessageComplete` | `node:_http_common:52` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `IncomingMessage` | `node:_http_incoming:29` |
| 0.0% | 4.9ms | 0.0% | 0us | `open` | `node:net:858` |
| 0.0% | 4.9ms | 0.0% | 0us | `afterConnect` | `node:net:1991` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `Socket` | `node:_http_server:933` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `Readable` | `internal:streams/readable:162` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `setPrototypeDirect` | `[native code]` |
| 0.0% | 4.9ms | 0.0% | 0us | `_pulseQueue` | `/app/node_modules/pg-pool/index.js:159` |
| 0.0% | 4.9ms | 0.0% | 4.0ms | `(anonymous)` | `internal:streams/writable:377` |
| 0.0% | 4.9ms | 0.0% | 0us | `internalConnect` | `node:net:1894` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `doConnect` | `[native code]` |
| 0.0% | 4.9ms | 0.0% | 0us | `kConnectDispatch` | `node:net:1021` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `_release` | `/app/node_modules/pg-pool/index.js` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `isEncoding` | `[native code]` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `String` | `[native code]` |
| 0.0% | 4.8ms | 0.0% | 4.8ms | `_onceWrap` | `node:events:252` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `(anonymous)` | `node:_http_server:1955` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `/^(GETSET\|LPUSH\|MSET\|PFA\|PSETEX\|PUBLISH\|RPUSH\|SADD\|SET\|SPUBLISH\|XADD\|ZADD)/i` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 0us | `_acquireClient` | `/app/node_modules/pg-pool/index.js:344` |
| 0.0% | 4.7ms | 0.0% | 0us | `readableAddChunkPushObjectMode` | `internal:streams/readable:256` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `isPrototypeOf` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/redis/event_handler.js:431` |
| 0.0% | 4.6ms | 0.0% | 0us | `tryCatcher` | `/app/node_modules/standard-as-callback/built/utils.js:12` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `size` | `/app/node_modules/denque/index.js` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Redis.js:809` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/redis/event_handler.js:205` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/standard-as-callback/built/index.js:22` |
| 0.0% | 4.6ms | 0.0% | 0us | `streamCollector` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1597` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `isReadableStream` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `removeListener` | `node:events:263` |
| 0.0% | 4.4ms | 0.0% | 0us | `tickOnSocket` | `node:_http_client:497` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `normalizeEmail` | `/app/src/email.ts` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `_storeHeader` | `node:_http_outgoing:263` |
| 0.0% | 4.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:396` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `getBlockingTimeoutInMs` | `/app/node_modules/ioredis/built/Redis.js:484` |
| 0.0% | 4.3ms | 0.0% | 0us | `prepareRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:412` |
| 0.0% | 4.3ms | 0.0% | 0us | `clone` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:44` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `cloneQuery` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:65` |
| 0.0% | 4.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Redis.js:4` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `ReadableState` | `internal:streams/readable` |
| 0.0% | 4.2ms | 0.0% | 3.3ms | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:513` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `initPromise` | `/app/node_modules/ioredis/built/Command.js` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `async signRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 0.0% | 4.2ms | 0.0% | 1.2ms | `flush` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:101` |
| 0.0% | 4.2ms | 0.0% | 1.6ms | `readableAddChunkPushByteMode` | `internal:streams/readable:225` |
| 0.0% | 4.1ms | 0.0% | 0us | `toBuffer` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:489` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `hasOwn` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `createCanonicalRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:243` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `setSocketKeepAlive` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` |
| 0.0% | 4.1ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:415` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `internal:streams/readable:372` |
| 0.0% | 4.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1063` |
| 0.0% | 3.9ms | 0.0% | 1.2ms | `write` | `/app/node_modules/ioredis/built/resp/decoder.js:95` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `WritableState` | `internal:streams/writable:135` |
| 0.0% | 3.9ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:40` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `convertHttpAuthSchemesToMap` | `/app/node_modules/@smithy/core/dist-cjs/index.js:32` |
| 0.0% | 3.9ms | 0.0% | 3.9ms | `toWritable` | `/app/node_modules/ioredis/built/Command.js:161` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `getBlockingTimeoutInMs` | `/app/node_modules/ioredis/built/Redis.js` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:720` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `_write` | `node:net` |
| 0.0% | 3.7ms | 0.0% | 0us | `streamCollector` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1594` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `isBlob` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1074` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `(anonymous)` | `node:_http_server:1930` |
| 0.0% | 3.7ms | 0.0% | 0us | `buildQueryString` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1105` |
| 0.0% | 3.7ms | 0.0% | 3.7ms | `Query` | `/app/node_modules/pg/lib/query.js:22` |
| 0.0% | 3.7ms | 0.0% | 0us | `Client` | `/app/node_modules/pg/lib/client.js:54` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `__lookupGetter__` | `[native code]` |
| 0.0% | 3.6ms | 0.0% | 0us | `get` | `node:_http_incoming:93` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `Readable` | `internal:streams/readable` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `initPromise` | `/app/node_modules/ioredis/built/Command.js:292` |
| 0.0% | 3.5ms | 0.0% | 0us | `async createStringToSign` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:253` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `sin` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/crc/index.js:1` |
| 0.0% | 3.5ms | 0.0% | 0us | `from` | `[native code]` |
| 0.0% | 3.5ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:4` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `fromArrayBuffer` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `addCommandComplete` | `/app/node_modules/pg/lib/result.js:42` |
| 0.0% | 3.4ms | 0.0% | 3.4ms | `Readable` | `internal:streams/readable:144` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async deserializeResponse` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `removeSocket` | `node:_http_agent:243` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/debug/src/index.js:9` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/utils/debug.js:4` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/utils/index.js:8` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async rateLimit` | `/app/src/deps.ts:60` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `addCString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js:42` |
| 0.0% | 3.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:74` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` |
| 0.0% | 3.2ms | 0.0% | 1.0ms | `bound onwrite` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 3.2ms | `data` | `node:net:862` |
| 0.0% | 3.2ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@ioredis/commands/built/index.js:7` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `_destroy` | `internal:streams/destroy:45` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:39` |
| 0.0% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1` |
| 0.0% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:10` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `getName` | `node:_http_agent:95` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/transaction.js:6` |
| 0.0% | 3.0ms | 0.0% | 0us | `genDebugFunction` | `/app/node_modules/ioredis/built/utils/debug.js:54` |
| 0.0% | 3.0ms | 0.0% | 0us | `useColors` | `/app/node_modules/debug/src/node.js:158` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/himport/HimportCoordinator.js:9` |
| 0.0% | 3.0ms | 0.0% | 0us | `WriteStream` | `internal:fs/streams:259` |
| 0.0% | 3.0ms | 0.0% | 0us | `createDebug` | `/app/node_modules/debug/src/common.js:117` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Pipeline.js:11` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/cluster/index.js:11` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/redis/event_handler.js:9` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/Redis.js:11` |
| 0.0% | 3.0ms | 0.0% | 0us | `createSocket` | `node:_http_agent:181` |
| 0.0% | 3.0ms | 0.0% | 0us | `addRequest` | `node:_http_agent:140` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:1` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:2` |
| 0.0% | 3.0ms | 0.0% | 0us | `parserOnHeadersComplete` | `node:_http_common:36` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `_addHeaderLines` | `node:_http_incoming:240` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `addCString` | `/app/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `/^ \| $/g` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:7` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:20` |
| 0.0% | 3.0ms | 0.0% | 0us | `(module)` | `/app/src/server.ts:22` |
| 0.0% | 3.0ms | 0.0% | 0us | `S3Client` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:4942` |
| 0.0% | 3.0ms | 0.0% | 0us | `applyToStack` | `/app/node_modules/@smithy/core/dist-cjs/index.js:80` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 3.0ms | 0.0% | 0us | `realDeps` | `/app/src/deps.ts:49` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `node:_http_server:410` |
| 0.0% | 3.0ms | 0.0% | 0us | `(module)` | `/app/src/server.ts:211` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `(anonymous)` | `node:_http_server:614` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-types/index.js:1` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/client.js:10` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-protocol/dist/index.js:7` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-protocol/dist/serializer.js:153` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-types/lib/textParsers.js:4` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/connection.js:5` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/defaults.js:85` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/client.js:2` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `slice` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/utils.js:3` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1` |
| 0.0% | 2.9ms | 0.0% | 0us | `ClassBuilder` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:5099` |
| 0.0% | 2.9ms | 0.0% | 0us | `makeCommand` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1184` |
| 0.0% | 2.9ms | 0.0% | 0us | `classBuilder` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:597` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/cluster/index.js:18` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/cluster/DelayQueue.js:4` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:11` |
| 0.0% | 2.9ms | 0.0% | 0us | `connect` | `node:net:1700` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:5` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:6` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:1` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `write` | `/app/node_modules/ioredis/built/resp/decoder.js:91` |
| 0.0% | 2.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/ioredis/built/utils/index.js:10` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `_addHeaderLine` | `node:_http_incoming:373` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `(anonymous)` | `node:_http_server:2204` |
| 0.0% | 2.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:1` |
| 0.0% | 2.8ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:5` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `onNodeHTTPRequest` | `node:_http_server:604` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `_read` | `node:net:1488` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `deserializeMetadata` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:134` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `storeHeader` | `node:_http_outgoing:367` |
| 0.0% | 2.6ms | 0.0% | 0us | `dispatch` | `/app/node_modules/ioredis/built/DataHandler.js:44` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `returnReply` | `/app/node_modules/ioredis/built/DataHandler.js:76` |
| 0.0% | 2.6ms | 0.0% | 0us | `_Decoder_handleDecodedValue` | `/app/node_modules/ioredis/built/resp/decoder.js:145` |
| 0.0% | 2.6ms | 0.0% | 0us | `onReply` | `/app/node_modules/ioredis/built/DataHandler.js:17` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `drainOnreadTail` | `node:net` |
| 0.0% | 2.6ms | 0.0% | 0us | `resume` | `node:net:1453` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `constructStack` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:95` |
| 0.0% | 2.6ms | 0.0% | 1.5ms | `connect` | `/app/node_modules/pg-pool/index.js:203` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `ConnectionParameters` | `/app/node_modules/pg/lib/connection-parameters.js:127` |
| 0.0% | 2.6ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:3` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `fromString` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 2.5ms | 0.0% | 0us | `node:http` | `node:http:2` |
| 0.0% | 2.5ms | 0.0% | 0us | `(anonymous)` | `node:_http_agent:34` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `get` | `internal:streams/writable` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `internal:streams/readable:183` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:77` |
| 0.0% | 2.5ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1068` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `OutgoingMessage` | `node:_http_outgoing` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `_read` | `node:net` |
| 0.0% | 2.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:474` |
| 0.0% | 2.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:251` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `getAllAliases` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:11` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:105` |
| 0.0% | 2.4ms | 0.0% | 0us | `resume` | `internal:streams/readable:586` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:580` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `maybeReadMore` | `internal:streams/readable:406` |
| 0.0% | 2.4ms | 0.0% | 0us | `addChunk` | `internal:streams/readable:279` |
| 0.0% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/app/src/server.ts:52` |
| 0.0% | 2.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:54` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `propertiesExtractor` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:839` |
| 0.0% | 2.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/index.js:59` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `async sendOne` | `/app/src/server.ts:109` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `addChunk` | `internal:streams/readable` |
| 0.0% | 2.2ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:154` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `_addListener` | `node:events:197` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `has` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `_release` | `/app/node_modules/pg-pool/index.js:400` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:630` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `async writeRequestBody` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:172` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `run` | `internal:async_context_frame:23` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `EventEmitter` | `node:events:12` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `_unrefTimer` | `node:net:1653` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `_pulseQueryQueue` | `/app/node_modules/pg/lib/client.js:626` |
| 0.0% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/client.js:193` |
| 0.0% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/connection.js:51` |
| 0.0% | 2.0ms | 0.0% | 0us | `startup` | `/app/node_modules/pg/lib/connection.js:152` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `removeListener` | `node:events:290` |
| 0.0% | 2.0ms | 0.0% | 0us | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:137` |
| 0.0% | 2.0ms | 0.0% | 2.0ms | `parseParameterStatusMessage` | `/app/node_modules/pg-protocol/dist/parser.js:240` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `checkContentLengthHeader` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:15` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `isValidAddress` | `/app/src/email.ts:70` |
| 0.0% | 1.9ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:378` |
| 0.0% | 1.9ms | 0.0% | 0us | `async resolve` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:316` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:449` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `throwIfServerHeadersSent` | `node:_http_server` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:332` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:464` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `_unrefTimer` | `node:net` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `async handle` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:292` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `/^ECHO/i` | `[native code]` |
| 0.0% | 1.6ms | 0.0% | 0us | `endReadable` | `internal:streams/readable:897` |
| 0.0% | 1.5ms | 0.0% | 0us | `async digest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:468` |
| 0.0% | 1.5ms | 0.0% | 0us | `addRequest` | `node:_http_agent:126` |
| 0.0% | 1.5ms | 0.0% | 0us | `onNodeHTTPRequest` | `node:_http_server:504` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/app/node_modules/ioredis/built/Command.js:297` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `send` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:516` |
| 0.0% | 1.4ms | 0.0% | 0us | `successHandler` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:120` |
| 0.0% | 1.4ms | 0.0% | 0us | `getUpdatedSystemClockOffset` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:17` |
| 0.0% | 1.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:384` |
| 0.0% | 1.4ms | 0.0% | 0us | `read` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:768` |
| 0.0% | 1.4ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1609` |
| 0.0% | 1.4ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:373` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `socketOnDataInner` | `node:_http_client:345` |
| 0.0% | 1.4ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:236` |
| 0.0% | 1.4ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1357` |
| 0.0% | 1.4ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:361` |
| 0.0% | 1.4ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:85` |
| 0.0% | 1.4ms | 0.0% | 0us | `toEndpointV1` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:166` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:355` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `onEofChunk` | `internal:streams/readable:388` |
| 0.0% | 1.3ms | 0.0% | 0us | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:73` |
| 0.0% | 1.3ms | 0.0% | 0us | `_read` | `node:net:1492` |
| 0.0% | 1.3ms | 0.0% | 0us | `cleanup` | `internal:streams/readable:443` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `setHeader` | `node:_http_outgoing:410` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `emit` | `node:events:114` |
| 0.0% | 1.3ms | 0.0% | 0us | `clearTimeouts` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:309` |
| 0.0% | 1.3ms | 0.0% | 0us | `clearTimeout` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:45` |
| 0.0% | 1.3ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:315` |
| 0.0% | 1.3ms | 0.0% | 0us | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:729` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_destroy` | `node:_http_incoming` |
| 0.0% | 1.2ms | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:253` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `updateServiceEndpoint` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/src/htmltotext.ts:90` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `async insertEmails` | `/app/src/deps.ts:79` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getHighWaterMark` | `internal:streams/state` |
| 0.0% | 1.2ms | 0.0% | 0us | `prepareRequest` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:417` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `indexOf` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `internal:streams/writable:599` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `renderNativeHeaders` | `node:_http_server:1421` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/node_modules/pg-protocol/dist/index.js:12` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `toHex` | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `defaultEndpointResolver` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `onNodeHTTPRequest` | `node:_http_server:447` |
| 0.0% | 1.2ms | 0.0% | 0us | `emitReadable` | `internal:streams/readable:396` |
| 0.0% | 1.2ms | 0.0% | 0us | `onEofChunk` | `internal:streams/readable:389` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `set` | `internal:streams/writable` |
| 0.0% | 1.2ms | 0.0% | 0us | `onwrite` | `internal:streams/writable:313` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `_addListener` | `node:events:198` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:405` |
| 0.0% | 1.2ms | 0.0% | 0us | `sendSCRAMClientFinalMessage` | `/app/node_modules/pg/lib/connection.js:168` |
| 0.0% | 1.2ms | 0.0% | 0us | `async _handleAuthSASLContinue` | `/app/node_modules/pg/lib/client.js:353` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `shift` | `internal:fixed_queue` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `test` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `getCanonicalHeaders` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:341` |
| 0.0% | 1.2ms | 0.0% | 0us | `_acquireClient` | `/app/node_modules/pg-pool/index.js:340` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `query` | `/app/node_modules/pg-pool/index.js:446` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `asciiTrim` | `/app/src/email.ts` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `renderNativeHeaders` | `node:_http_server:1420` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `_flush` | `node:_http_outgoing` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setHeader` | `node:_http_outgoing:406` |
| 0.0% | 1.1ms | 0.0% | 0us | `Duplex` | `internal:streams/duplex:15` |
| 0.0% | 1.1ms | 0.0% | 0us | `Socket` | `node:net:1056` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `resetBuffer` | `internal:streams/writable:155` |
| 0.0% | 1.1ms | 0.0% | 0us | `async validateSigningProperties` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:55` |
| 0.0% | 1.1ms | 0.0% | 0us | `async signer` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:293` |
| 0.0% | 1.1ms | 0.0% | 0us | `async sign` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:62` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:277` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:44` |
| 0.0% | 1.1ms | 0.0% | 0us | `tickOnSocket` | `node:_http_client:491` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `initialize` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `InvokeStoreSingle` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:111` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `InvokeStoreBase` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async getInstanceAsync` | `/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:111` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:102` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:204` |
| 0.0% | 1.1ms | 0.0% | 0us | `async continueSession` | `/app/node_modules/pg/lib/crypto/sasl.js:120` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `isURLInstance` | `node:_http_client` |
| 0.0% | 1.1ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:86` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `advanceResponsePipeline` | `node:_http_server:1596` |
| 0.0% | 1.1ms | 0.0% | 0us | `addChunk` | `internal:streams/readable:277` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `emitReadable` | `internal:streams/readable:394` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:199` |
| 0.0% | 1.1ms | 0.0% | 0us | `find` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:199` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:122` |
| 0.0% | 1.1ms | 0.0% | 0us | `Writable` | `internal:streams/writable:196` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `Number` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `ClientRequest` | `node:_http_client:119` |
| 0.0% | 1.1ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:226` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `hasHeader` | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:81` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `node:_http_outgoing` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `toRow` | `/app/src/server.ts` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `setBuffer` | `/app/node_modules/pg-protocol/dist/buffer-reader.js:13` |
| 0.0% | 1.1ms | 0.0% | 0us | `handlePacket` | `/app/node_modules/pg-protocol/dist/parser.js:94` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async configProvider` | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:106` |
| 0.0% | 1.0ms | 0.0% | 0us | `async sendOne` | `/app/src/server.ts:123` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:724` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/app/node_modules/@ioredis/commands/built/index.js:17` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/app/node_modules/@ioredis/commands/built/index.js:16` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `callWriteHeadIfObservable` | `node:_http_server:2244` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `node:_http_server:1954` |
| 0.0% | 1.0ms | 0.0% | 0us | `getCanonicalQuery` | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:206` |
| 0.0% | 1.0ms | 0.0% | 0us | `parse` | `/app/node_modules/pg-connection-string/index.js:27` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `join` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `ConnectionParameters` | `/app/node_modules/pg/lib/connection-parameters.js:60` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `escapeUserAgent` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:726` |
| 0.0% | 1.0ms | 0.0% | 0us | `connect` | `node:net:1317` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `validateLookupOptions` | `node:dns:178` |
| 0.0% | 1.0ms | 0.0% | 0us | `lookupAndConnect` | `node:net:1783` |
| 0.0% | 1.0ms | 0.0% | 0us | `lookup` | `node:dns:189` |
| 0.0% | 1.0ms | 0.0% | 0us | `lookupAndConnectMultiple` | `node:net:1809` |
| 0.0% | 1.0ms | 0.0% | 0us | `async insertEmails` | `/app/src/deps.ts:84` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `connect` | `node:net:1261` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async serializeRequest` | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1358` |
| 0.0% | 1.0ms | 0.0% | 0us | `newClient` | `/app/node_modules/pg-pool/index.js:266` |
| 0.0% | 1.0ms | 0.0% | 0us | `connect` | `/app/node_modules/pg/lib/client.js:234` |
| 0.0% | 1.0ms | 0.0% | 0us | `_connect` | `/app/node_modules/pg/lib/client.js:181` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `connect` | `/app/node_modules/pg/lib/connection.js:68` |
| 0.0% | 1.0ms | 0.0% | 0us | `async _defaultS3HttpAuthSchemeParametersProvider` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:827` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:812` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:824` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_storeHeader` | `node:_http_outgoing:262` |
| 0.0% | 992us | 0.0% | 992us | `(anonymous)` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:116` |
| 0.0% | 991us | 0.0% | 991us | `removeSocket` | `node:_http_agent` |
| 0.0% | 987us | 0.0% | 987us | `addRelativeTo` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:215` |
| 0.0% | 986us | 0.0% | 986us | `EventEmitter` | `node:events` |
| 0.0% | 984us | 0.0% | 984us | `async serializeRequest` | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:516` |
| 0.0% | 979us | 0.0% | 0us | `async serializeRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:242` |
| 0.0% | 979us | 0.0% | 979us | `HttpRequest` | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` |
| 0.0% | 977us | 0.0% | 977us | `onResponseFinishHandleSocket` | `node:_http_server:1491` |
| 0.0% | 970us | 0.0% | 970us | `skipBalanced` | `/app/src/htmltotext.ts:60` |
| 0.0% | 964us | 0.0% | 964us | `(anonymous)` | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` |
| 0.0% | 963us | 0.0% | 963us | `add` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:150` |
| 0.0% | 960us | 0.0% | 0us | `socketOnData` | `node:_http_client:337` |
| 0.0% | 960us | 0.0% | 960us | `/^(HSET\|HMSET\|LSET\|LINSERT)/i` | `[native code]` |
| 0.0% | 940us | 0.0% | 940us | `parse` | `/app/node_modules/pg-protocol/dist/parser.js:27` |
| 0.0% | 939us | 0.0% | 939us | `bound onFinish` | `[native code]` |
| 0.0% | 939us | 0.0% | 0us | `onwrite` | `internal:streams/writable:340` |
| 0.0% | 935us | 0.0% | 0us | `createConnection` | `node:net:1736` |
| 0.0% | 935us | 0.0% | 935us | `structIterator` | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:509` |
| 0.0% | 923us | 0.0% | 0us | `resolveMiddleware` | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:730` |
| 0.0% | 923us | 0.0% | 923us | `bind` | `[native code]` |
| 0.0% | 919us | 0.0% | 0us | `cb` | `/app/node_modules/pg-pool/index.js:37` |
| 0.0% | 919us | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg-pool/index.js:478` |
| 0.0% | 918us | 0.0% | 918us | `buildEml` | `/app/src/email.ts:194` |
| 0.0% | 915us | 0.0% | 0us | `sendCommand` | `/app/node_modules/ioredis/built/Redis.js:363` |
| 0.0% | 915us | 0.0% | 915us | `Boolean` | `[native code]` |
| 0.0% | 915us | 0.0% | 0us | `isResp2SubscriberMode` | `/app/node_modules/ioredis/built/utils/index.js:382` |
| 0.0% | 903us | 0.0% | 0us | `bound _handleAuthSASL` | `[native code]` |
| 0.0% | 903us | 0.0% | 0us | `sendSASLInitialResponseMessage` | `/app/node_modules/pg/lib/connection.js:164` |
| 0.0% | 903us | 0.0% | 0us | `_handleAuthSASL` | `/app/node_modules/pg/lib/client.js:331` |
| 0.0% | 903us | 0.0% | 0us | `_getPassword` | `/app/node_modules/pg/lib/client.js:296` |
| 0.0% | 903us | 0.0% | 0us | `(anonymous)` | `/app/node_modules/pg/lib/client.js:338` |
| 0.0% | 889us | 0.0% | 0us | `bound _handleAuthSASLFinal` | `[native code]` |
| 0.0% | 889us | 0.0% | 0us | `_handleAuthSASLFinal` | `/app/node_modules/pg/lib/client.js:361` |
| 0.0% | 889us | 0.0% | 889us | `finalizeSession` | `/app/node_modules/pg/lib/crypto/sasl.js` |

## Function Details

### `writeBuffered`
`[native code]` | Self: 35.0% (12.64s) | Total: 35.0% (12.64s) | Samples: 1415

**Called by:**
- `_write` (1415)

### `writeHeadAndEnd`
`[native code]` | Self: 6.1% (2.21s) | Total: 6.1% (2.21s) | Samples: 232

**Called by:**
- `(anonymous)` (232)

### `cloneObject`
`[native code]` | Self: 4.3% (1.55s) | Total: 4.3% (1.55s) | Samples: 153

**Called by:**
- `async (anonymous)` (86)
- `async (anonymous)` (21)
- `async (anonymous)` (15)
- `async (anonymous)` (10)
- `async (anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `copyDataProperties`
`[native code]` | Self: 2.0% (747.9ms) | Total: 2.0% (747.9ms) | Samples: 64

**Called by:**
- `addRelativeTo` (18)
- `add` (14)
- `async (anonymous)` (14)
- `async (anonymous)` (6)
- `async (anonymous)` (5)
- `(anonymous)` (5)
- `addRequest` (2)

### `(anonymous)`
`[native code]` | Self: 1.9% (716.3ms) | Total: 60.1% (21.68s) | Samples: 74

**Called by:**
- `processTicksAndRejections` (2385)
- `async sendOne` (9)
- `toStream` (9)
- `_writev` (5)
- `fromString` (5)
- `fromArrayBuffer` (4)
- `(anonymous)` (4)
- `(anonymous)` (2)
- `async continueSession` (1)
- `(anonymous)` (1)
- `toBuffer` (1)
- `writeBody` (1)
- `cb` (1)
- `useColors` (1)

**Calls:**
- `async (anonymous)` (653)
- `async handle` (463)
- `async handle` (278)
- `async (anonymous)` (162)
- `async (anonymous)` (78)
- `async signRequest` (47)
- `async (anonymous)` (46)
- `Buffer` (29)
- `async (anonymous)` (28)
- `async (anonymous)` (27)
- `async (anonymous)` (25)
- `async (anonymous)` (25)
- `async deserializeHttpMessage` (23)
- `async deserializeResponse` (23)
- `async (anonymous)` (23)
- `async signRequest` (20)
- `async (anonymous)` (18)
- `async (anonymous)` (18)
- `async serializeRequest` (17)
- `async (anonymous)` (16)
- `async (anonymous)` (16)
- `async (anonymous)` (15)
- `async (anonymous)` (13)
- `async (anonymous)` (12)
- `async signRequest` (11)
- `async (anonymous)` (11)
- `async (anonymous)` (11)
- `async (anonymous)` (10)
- `async deserializeHttpMessage` (9)
- `async (anonymous)` (9)
- `async (anonymous)` (9)
- `async (anonymous)` (7)
- `async (anonymous)` (7)
- `async (anonymous)` (6)
- `async (anonymous)` (6)
- `async serializeRequest` (5)
- `async sign` (5)
- `async serializeRequest` (5)
- `async serializeRequest` (5)
- `async getSignature` (5)
- `async (anonymous)` (5)
- `async signRequest` (5)
- `async getSignature` (4)
- `async serializeRequest` (4)
- `async (anonymous)` (4)
- `async deserializeHttpMessage` (4)
- `async (anonymous)` (4)
- `async (anonymous)` (4)
- `async (anonymous)` (4)
- `async (anonymous)` (4)
- `async (anonymous)` (4)
- `async handle` (4)
- `async getSignature` (4)
- `async (anonymous)` (4)
- `async createStringToSign` (3)
- `async signRequest` (3)
- `async serializeRequest` (3)
- `async (anonymous)` (3)
- `async handle` (3)
- `async deserializeResponse` (3)
- `async (anonymous)` (3)
- `async serializeRequest` (2)
- `cleanup` (2)
- `async (anonymous)` (2)
- `async (anonymous)` (2)
- `async serializeRequest` (2)
- `async (anonymous)` (2)
- `async (anonymous)` (2)
- `async (anonymous)` (2)
- `async enqueue` (2)
- `async sign` (2)
- `async (anonymous)` (2)
- `async getSignature` (2)
- `async (anonymous)` (2)
- `async serializeRequest` (2)
- `async (anonymous)` (2)
- `(anonymous)` (2)
- `async (anonymous)` (2)
- `async (anonymous)` (2)
- `(anonymous)` (1)
- `async serializeRequest` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async serializeRequest` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `WriteStream` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async insertEmails` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async signRequest` (1)
- `async (anonymous)` (1)
- `async serializeRequest` (1)
- `async putObject` (1)
- `async (anonymous)` (1)
- `async serializeRequest` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async deserializeHttpMessage` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async rateLimit` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async serializeRequest` (1)
- `async sendOne` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async checkFeatures` (1)
- `async sign` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async deserializeHttpMessage` (1)
- `async serializeRequest` (1)

### `generatorResume`
`[native code]` | Self: 1.4% (538.4ms) | Total: 1.8% (653.1ms) | Samples: 52

**Called by:**
- `next` (57)
- `schemaLogFilter` (3)
- `async deserializeHttpMessage` (3)
- `async serializeRequest` (2)

**Calls:**
- `structIterator` (7)
- `structIterator` (4)
- `structIterator` (1)
- `structIterator` (1)

### `_addHeaderLine`
`node:_http_incoming:374` | Self: 1.2% (439.0ms) | Total: 1.2% (439.0ms) | Samples: 3

**Called by:**
- `get` (3)

### `(anonymous)`
`/app/src/server.ts:214` | Self: 1.0% (384.9ms) | Total: 1.0% (384.9ms) | Samples: 1

### `execute`
`[native code]` | Self: 0.9% (339.5ms) | Total: 4.9% (1.78s) | Samples: 38

**Called by:**
- `processClientData` (175)

**Calls:**
- `parserOnIncomingClient` (105)
- `parserOnHeadersComplete` (13)
- `parserOnMessageComplete` (12)
- `parserOnMessageComplete` (5)
- `parserOnHeadersComplete` (1)
- `parserOnMessageComplete` (1)

### `parse`
`[native code]` | Self: 0.9% (329.2ms) | Total: 0.9% (329.2ms) | Samples: 39

**Called by:**
- `parseJson` (38)
- `getUpdatedSystemClockOffset` (1)

### `htmlToText`
`/app/src/htmltotext.ts:140` | Self: 0.7% (285.9ms) | Total: 2.1% (789.7ms) | Samples: 35

**Called by:**
- `normalizeEmail` (82)

**Calls:**
- `decodeEntities` (22)
- `/[ \t\n\r\f]+/g` (17)
- `decodeEntities` (8)

### `processTicksAndRejections`
`[native code]` | Self: 0.7% (275.1ms) | Total: 81.7% (29.48s) | Samples: 29

**Calls:**
- `(anonymous)` (2385)
- `_acquireClient` (248)
- `onSocketNT` (248)
- `_pulseQueue` (129)
- `emitFreeNT` (64)
- `endReadableNT` (40)
- `(anonymous)` (21)
- `emitFreeNT` (19)
- `emitResponseFinished` (18)
- `emitReadable_` (14)
- `resume_` (12)
- `endReadableNT` (7)
- `maybeReadMore_` (5)
- `resume_` (4)
- `emitCloseNT` (4)
- `emitCloseNT` (3)
- `_pulseQueue` (2)
- `resume_` (2)
- `onError` (2)
- `emitErrorNextTickIfErrorListener` (2)
- `emitCloseNT` (2)
- `afterWrite` (2)
- `shift` (1)
- `_pulseQueue` (1)
- `_acquireClient` (1)
- `_pulseQueue` (1)
- `emitReadable_` (1)
- `(anonymous)` (1)
- `emitListeningNextTick` (1)

### `Buffer`
`[native code]` | Self: 0.7% (253.9ms) | Total: 0.7% (253.9ms) | Samples: 29

**Called by:**
- `(anonymous)` (29)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:413` | Self: 0.6% (223.1ms) | Total: 0.6% (223.1ms) | Samples: 22

**Called by:**
- `async deserializeResponse` (22)

### `asyncFunctionDrive`
`[native code]` | Self: 0.5% (214.0ms) | Total: 0.5% (214.0ms) | Samples: 13

**Called by:**
- `async deserializeResponse` (3)
- `async rateLimit` (2)
- `async enqueue` (2)
- `async resolve` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async userAgentAppId` (1)
- `async sign` (1)
- `async (anonymous)` (1)

### `_addHeaderLine`
`node:_http_incoming:359` | Self: 0.5% (209.7ms) | Total: 0.5% (209.7ms) | Samples: 29

**Called by:**
- `get` (29)

### `get buffer`
`[native code]` | Self: 0.5% (207.8ms) | Total: 0.5% (207.8ms) | Samples: 19

**Called by:**
- `toUtf8$1` (7)
- `async digest` (5)
- `async digest` (4)
- `fromUtf8$1` (2)
- `toBuffer` (1)

### `emit`
`node:events` | Self: 0.5% (202.9ms) | Total: 0.5% (202.9ms) | Samples: 18

**Called by:**
- `onFree` (4)
- `_pulseQueryQueue` (3)
- `endReadableNT` (2)
- `emitCloseNT` (2)
- `parserOnIncomingClient` (2)
- `_acquireClient` (1)
- `emitCloseNT` (1)
- `(anonymous)` (1)
- `prefinish` (1)
- `emitResponseFinished` (1)

### `byteLength`
`[native code]` | Self: 0.5% (199.9ms) | Total: 0.5% (199.9ms) | Samples: 20

**Called by:**
- `addInt32PrefixedString` (9)
- `toWritable` (8)
- `toWritable` (2)
- `sendJson` (1)

### `map`
`[native code]` | Self: 0.4% (174.8ms) | Total: 2.6% (942.1ms) | Samples: 20

**Called by:**
- `postProcess` (28)
- `async (anonymous)` (18)
- `getMiddlewareList` (12)
- `createCanonicalRequest` (7)
- `async serializeRequest` (4)
- `buildEml` (4)
- `resolve` (4)
- `escapeUserAgent` (3)
- `addressList` (2)
- `tags` (2)
- `async insertEmails` (2)
- `async insertEmails` (1)
- `async (anonymous)` (1)
- `async insertEmails` (1)
- `async insertEmails` (1)

**Calls:**
- `(anonymous)` (27)
- `expandRelativeMiddlewareList` (5)
- `escapeUserAgent` (5)
- `expandRelativeMiddlewareList` (4)
- `extendedEncodeURIComponent` (4)
- `(anonymous)` (3)
- `escapeUserAgent` (3)
- `(anonymous)` (2)
- `expandRelativeMiddlewareList` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `escapeUserAgent` (2)
- `escapeUserAgent` (2)
- `escapeUserAgent` (1)
- `escapeUserAgent` (1)
- `(anonymous)` (1)
- `escapeUserAgent` (1)
- `escapeUserAgent` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `/[ \t\n\r\f]+/g`
`[native code]` | Self: 0.4% (169.0ms) | Total: 0.4% (169.0ms) | Samples: 17

**Called by:**
- `htmlToText` (17)

### `of`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:323` | Self: 0.4% (165.5ms) | Total: 0.6% (224.2ms) | Samples: 13

**Called by:**
- `schemaLogFilter` (6)
- `write` (5)
- `async deserializeHttpMessage` (4)
- `read` (3)
- `read` (1)

**Calls:**
- `[Symbol.hasInstance]` (6)

### `parseTag`
`/app/src/htmltotext.ts:36` | Self: 0.4% (162.2ms) | Total: 0.4% (162.2ms) | Samples: 15

**Called by:**
- `htmlToText` (10)
- `skipBalanced` (2)
- `skipRaw` (2)
- `htmlToText` (1)

### `_addListener`
`node:events` | Self: 0.4% (153.2ms) | Total: 0.4% (153.2ms) | Samples: 15

**Called by:**
- `addListener` (14)
- `prependListener` (1)

### `decodeEntities`
`/app/src/htmltotext.ts:87` | Self: 0.4% (150.2ms) | Total: 0.5% (205.9ms) | Samples: 15

**Called by:**
- `htmlToText` (22)

**Calls:**
- `(anonymous)` (4)
- `/&(#[0-9]+\|#[xX][0-9a-fA-F]+\|[a-zA-Z]+);/g` (2)
- `(anonymous)` (1)

### `toString`
`[native code]` | Self: 0.4% (146.4ms) | Total: 0.4% (146.4ms) | Samples: 14

**Called by:**
- `parseJson` (6)
- `string` (4)
- `parseCommandCompleteMessage` (2)
- `toBase64$1` (2)

### `concat`
`[native code]` | Self: 0.3% (138.6ms) | Total: 0.3% (138.6ms) | Samples: 19

**Called by:**
- `_writev` (10)
- `(anonymous)` (9)

### `setTimeout`
`[native code]` | Self: 0.3% (135.1ms) | Total: 0.3% (135.1ms) | Samples: 10

**Called by:**
- `_release` (8)
- `setTimeout` (2)

### `decodeEntities`
`/app/src/htmltotext.ts:86` | Self: 0.3% (128.8ms) | Total: 0.3% (128.8ms) | Samples: 8

**Called by:**
- `htmlToText` (8)

### `parseTag`
`/app/src/htmltotext.ts:25` | Self: 0.3% (124.4ms) | Total: 0.3% (124.4ms) | Samples: 19

**Called by:**
- `htmlToText` (17)
- `skipBalanced` (1)
- `skipRaw` (1)

### `removeEventListener`
`[native code]` | Self: 0.3% (122.2ms) | Total: 0.3% (122.2ms) | Samples: 18

**Called by:**
- `emit` (16)
- `cleanup` (2)

### `postProcess`
`/app/src/htmltotext.ts:97` | Self: 0.3% (120.3ms) | Total: 1.0% (366.9ms) | Samples: 11

**Called by:**
- `htmlToText` (37)
- `normalizeEmail` (2)

**Calls:**
- `map` (28)

### `write`
`[native code]` | Self: 0.3% (120.2ms) | Total: 0.3% (120.2ms) | Samples: 10

**Called by:**
- `addInt32PrefixedString` (8)
- `addCString` (2)

### `resolveMiddleware`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` | Self: 0.3% (118.7ms) | Total: 0.3% (118.7ms) | Samples: 1

**Called by:**
- `send` (1)

### `EventEmitter`
`node:events:16` | Self: 0.3% (118.1ms) | Total: 0.3% (118.1ms) | Samples: 9

**Called by:**
- `Stream` (9)

### `_addHeaderLine`
`node:_http_incoming:356` | Self: 0.3% (113.3ms) | Total: 0.8% (288.8ms) | Samples: 9

**Called by:**
- `get` (31)

**Calls:**
- `matchKnownFields` (15)
- `matchKnownFields` (7)

### `async handle`
`/app/src/server.ts:183` | Self: 0.2% (107.8ms) | Total: 0.2% (107.8ms) | Samples: 8

**Called by:**
- `async handle` (8)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:477` | Self: 0.2% (107.4ms) | Total: 0.2% (107.4ms) | Samples: 13

**Called by:**
- `(anonymous)` (9)
- `async deserializeHttpMessage` (4)

### `assign`
`[native code]` | Self: 0.2% (106.9ms) | Total: 0.2% (106.9ms) | Samples: 7

**Called by:**
- `ClientRequest` (3)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `node:events` (1)

### `update`
`[native code]` | Self: 0.2% (105.6ms) | Total: 0.2% (105.6ms) | Samples: 12

**Called by:**
- `update` (12)

### `headersObject`
`[native code]` | Self: 0.2% (103.1ms) | Total: 0.2% (103.1ms) | Samples: 16

**Called by:**
- `get` (16)

### `matchKnownFields`
`node:_http_incoming:246` | Self: 0.2% (99.7ms) | Total: 0.2% (99.7ms) | Samples: 15

**Called by:**
- `_addHeaderLine` (15)

### `URLSearchParams`
`[native code]` | Self: 0.2% (97.5ms) | Total: 0.2% (97.5ms) | Samples: 5

**Called by:**
- `async serializeRequest` (5)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:111` | Self: 0.2% (96.2ms) | Total: 0.2% (104.4ms) | Samples: 10

**Called by:**
- `forEach` (12)

**Calls:**
- `cloneObject` (2)

### `/^ +\| +$/g`
`[native code]` | Self: 0.2% (95.8ms) | Total: 0.2% (95.8ms) | Samples: 8

**Called by:**
- `(anonymous)` (8)

### `entries`
`[native code]` | Self: 0.2% (95.0ms) | Total: 0.2% (95.0ms) | Samples: 11

**Called by:**
- `async (anonymous)` (11)

### `removeListener`
`node:events` | Self: 0.2% (94.7ms) | Total: 0.2% (94.7ms) | Samples: 18

**Called by:**
- `(anonymous)` (10)
- `onceWrapper` (5)
- `onfinish` (2)
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/readable:541` | Self: 0.2% (91.2ms) | Total: 0.5% (207.1ms) | Samples: 6

**Called by:**
- `processClientData` (8)
- `responseKeepAlive` (5)
- `onceWrapper` (5)
- `cleanup` (3)
- `(anonymous)` (2)
- `reuseSocket` (2)

**Calls:**
- `removeListener` (10)
- `removeListener` (5)
- `removeListener` (2)
- `removeListener` (1)
- `removeListener` (1)

### `reverse`
`[native code]` | Self: 0.2% (88.9ms) | Total: 0.2% (88.9ms) | Samples: 3

**Called by:**
- `expandRelativeMiddlewareList` (3)

### `(anonymous)`
`node:_http_agent:58` | Self: 0.2% (87.3ms) | Total: 0.2% (87.3ms) | Samples: 6

**Called by:**
- `emit` (6)

### `Hash`
`[native code]` | Self: 0.2% (86.8ms) | Total: 0.2% (86.8ms) | Samples: 4

**Called by:**
- `Hash` (4)

### `ClientRequest`
`node:_http_client:199` | Self: 0.2% (86.7ms) | Total: 0.2% (86.7ms) | Samples: 2

**Called by:**
- `request` (2)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:718` | Self: 0.2% (86.0ms) | Total: 0.2% (86.0ms) | Samples: 5

**Called by:**
- `map` (5)

### `getOwnPropertyDescriptors`
`[native code]` | Self: 0.2% (85.7ms) | Total: 0.2% (85.7ms) | Samples: 6

**Called by:**
- `cloneQueryConfig` (6)

### `parseUrl`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:156` | Self: 0.2% (83.9ms) | Total: 0.2% (83.9ms) | Samples: 3

**Called by:**
- `parseUrl` (3)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:452` | Self: 0.2% (83.6ms) | Total: 0.2% (83.6ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `async deserializeHttpMessage` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:133` | Self: 0.2% (82.3ms) | Total: 0.2% (82.3ms) | Samples: 8

**Called by:**
- `forEach` (8)

### `checkInvalidHeaderChar`
`node:_http_common:6` | Self: 0.2% (79.9ms) | Total: 0.3% (140.3ms) | Samples: 7

**Called by:**
- `validateHeaderValueLenient` (11)
- `_writeHead` (1)
- `_writeHead` (1)

**Calls:**
- `/[^\t\x20-\x7e\x80-\xff]/` (5)
- `(anonymous)` (1)

### `(anonymous)`
`/app/src/htmltotext.ts:97` | Self: 0.2% (79.4ms) | Total: 0.6% (232.9ms) | Samples: 11

**Called by:**
- `map` (27)

**Calls:**
- `/^ +\| +$/g` (8)
- `/ {2,}/g` (8)

### `anonymous`
`[native code]` | Self: 0.2% (79.0ms) | Total: 1.1% (405.5ms) | Samples: 19

**Called by:**
- `require` (77)
- `node:crypto` (1)
- `internal:streams/legacy` (1)
- `bound require` (1)
- `internal:streams/duplex` (1)
- `internal:streams/transform` (1)
- `node:http` (1)
- `internal:streams/lazy_transform` (1)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/legacy` (1)
- `internal:streams/transform` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/duplex` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `node:events` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/lazy_transform` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `stringify`
`[native code]` | Self: 0.2% (78.2ms) | Total: 0.2% (78.2ms) | Samples: 4

**Called by:**
- `async sendOne` (4)

### `Hmac`
`[native code]` | Self: 0.2% (76.8ms) | Total: 0.2% (76.8ms) | Samples: 8

**Called by:**
- `Hmac` (8)

### `matchKnownFields`
`node:_http_incoming` | Self: 0.2% (75.7ms) | Total: 0.2% (75.7ms) | Samples: 7

**Called by:**
- `_addHeaderLine` (7)

### `emit`
`node:events:87` | Self: 0.2% (74.6ms) | Total: 0.2% (74.6ms) | Samples: 13

**Called by:**
- `onNodeHTTPRequest` (5)
- `addChunk` (4)
- `onFree` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `tickOnSocket` (1)

### `reduce`
`[native code]` | Self: 0.2% (73.8ms) | Total: 0.3% (121.8ms) | Samples: 3

**Called by:**
- `getMiddlewareList` (8)
- `escapeUserAgent` (2)

**Calls:**
- `(anonymous)` (7)

### `hash`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:364` | Self: 0.2% (72.9ms) | Total: 0.2% (72.9ms) | Samples: 7

**Called by:**
- `get` (7)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:418` | Self: 0.2% (72.8ms) | Total: 0.2% (72.8ms) | Samples: 15

**Called by:**
- `async deserializeResponse` (15)

### `getTransformedHeaders`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:38` | Self: 0.2% (72.6ms) | Total: 0.2% (72.6ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `push`
`[native code]` | Self: 0.2% (72.5ms) | Total: 0.2% (72.5ms) | Samples: 8

**Called by:**
- `(anonymous)` (4)
- `(anonymous)` (2)
- `renderNativeHeaders` (2)

### `onDestroy`
`internal:streams/destroy:50` | Self: 0.2% (72.4ms) | Total: 0.2% (72.4ms) | Samples: 2

**Called by:**
- `emitErrorNextTickIfErrorListener` (2)

### `emit`
`node:events:97` | Self: 0.2% (72.3ms) | Total: 2.8% (1.01s) | Samples: 9

**Called by:**
- `emitFreeNT` (64)
- `endReadableNT` (20)
- `closeRequest` (19)
- `emitResponseFinished` (16)
- `(anonymous)` (2)
- `finish` (1)

**Calls:**
- `onFree` (59)
- `removeEventListener` (16)
- `(anonymous)` (13)
- `emitResponseFinish` (7)
- `onceWrapper` (5)
- `emitResponseFinish` (4)
- `emitResponseFinish` (3)
- `(anonymous)` (2)
- `emitResponseFinish` (2)
- `onceWrapper` (1)
- `onceWrapper` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:194` | Self: 0.1% (72.0ms) | Total: 0.4% (179.8ms) | Samples: 3

**Called by:**
- `(anonymous)` (15)
- `async resolveParams` (2)

**Calls:**
- `async configProvider` (4)
- `createConfigValueProvider` (4)
- `async configProvider` (2)
- `async (anonymous)` (2)
- `async configProvider` (1)
- `async configProvider` (1)

### `emit`
`node:events:100` | Self: 0.1% (71.6ms) | Total: 10.8% (3.91s) | Samples: 8

**Called by:**
- `addChunk` (265)
- `parserOnIncomingClient` (96)
- `(anonymous)` (57)
- `(anonymous)` (10)

**Calls:**
- `socketOnDataInner` (185)
- `(anonymous)` (83)
- `parse` (65)
- `bound _handleReadyForQuery` (45)
- `parse` (10)
- `bound _handleCommandComplete` (8)
- `onceWrapper` (5)
- `ondata` (4)
- `(anonymous)` (4)
- `(anonymous)` (2)
- `socketOnDataInner` (1)
- `socketOnData` (1)
- `onceWrapper` (1)
- `parse` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `run` (1)
- `bound _handleAuthSASL` (1)
- `bound _handleAuthSASLFinal` (1)

### `sort`
`[native code]` | Self: 0.1% (71.4ms) | Total: 0.1% (71.4ms) | Samples: 6

**Called by:**
- `getCanonicalHeaders` (4)
- `createCanonicalRequest` (2)

### `Uint8Array`
`[native code]` | Self: 0.1% (71.2ms) | Total: 0.1% (71.2ms) | Samples: 4

**Called by:**
- `async digest` (3)
- `concatBytes` (1)

### `htmlToText`
`/app/src/htmltotext.ts:138` | Self: 0.1% (70.0ms) | Total: 0.1% (70.0ms) | Samples: 5

**Called by:**
- `normalizeEmail` (5)

### `(anonymous)`
`node:_http_agent:42` | Self: 0.1% (69.7ms) | Total: 0.1% (69.7ms) | Samples: 7

**Called by:**
- `emit` (7)

### `htmlToText`
`/app/src/htmltotext.ts:107` | Self: 0.1% (68.7ms) | Total: 0.1% (68.7ms) | Samples: 7

**Called by:**
- `normalizeEmail` (7)

### `resolveMiddlewareWithContext`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:613` | Self: 0.1% (67.9ms) | Total: 0.1% (67.9ms) | Samples: 2

**Called by:**
- `send` (2)

### `async createStringToSign`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:251` | Self: 0.1% (67.6ms) | Total: 0.1% (69.4ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)
- `async createStringToSign` (1)

**Calls:**
- `Sha256Node` (1)

### `toHex`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:805` | Self: 0.1% (63.4ms) | Total: 0.1% (63.4ms) | Samples: 4

**Called by:**
- `async (anonymous)` (2)
- `async getSignature` (2)

### `release`
`[native code]` | Self: 0.1% (63.2ms) | Total: 0.1% (63.2ms) | Samples: 8

**Called by:**
- `async (anonymous)` (8)

### `addRequest`
`node:_http_agent:127` | Self: 0.1% (61.9ms) | Total: 0.1% (61.9ms) | Samples: 5

**Called by:**
- `ClientRequest` (5)

### `structIterator`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:503` | Self: 0.1% (60.6ms) | Total: 0.1% (60.6ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `resume`
`node:net:1451` | Self: 0.1% (60.5ms) | Total: 0.1% (60.5ms) | Samples: 5

**Called by:**
- `readStart` (3)
- `(anonymous)` (2)

### `htmlToText`
`/app/src/htmltotext.ts:125` | Self: 0.1% (60.4ms) | Total: 0.1% (60.4ms) | Samples: 5

**Called by:**
- `normalizeEmail` (5)

### `defineProperties`
`[native code]` | Self: 0.1% (60.0ms) | Total: 0.1% (60.0ms) | Samples: 6

**Called by:**
- `normalizeQueryConfig` (6)

### `renderNativeHeaders`
`node:_http_server:1423` | Self: 0.1% (59.9ms) | Total: 0.1% (59.9ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `/[^\t\x20-\x7e\x80-\xff]/`
`[native code]` | Self: 0.1% (59.2ms) | Total: 0.1% (59.2ms) | Samples: 5

**Called by:**
- `checkInvalidHeaderChar` (5)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:212` | Self: 0.1% (58.8ms) | Total: 0.1% (58.8ms) | Samples: 5

**Called by:**
- `(anonymous)` (3)
- `applyToStack` (1)
- `applyToStack` (1)

### `parseUrl`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:149` | Self: 0.1% (58.5ms) | Total: 0.1% (58.5ms) | Samples: 7

**Called by:**
- `parseUrl` (6)
- `toEndpointV1` (1)

### `/ {2,}/g`
`[native code]` | Self: 0.1% (57.6ms) | Total: 0.1% (57.6ms) | Samples: 8

**Called by:**
- `(anonymous)` (8)

### `async withDeps`
`/app/src/server.ts:104` | Self: 0.1% (57.0ms) | Total: 13.3% (4.80s) | Samples: 2

**Called by:**
- `async handle` (301)
- `async sendOne` (167)

**Calls:**
- `async withDeps` (466)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:129` | Self: 0.1% (56.5ms) | Total: 0.1% (56.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:25` | Self: 0.1% (55.5ms) | Total: 0.3% (136.7ms) | Samples: 2

**Called by:**
- `(anonymous)` (16)

**Calls:**
- `copyDataProperties` (14)

### `next`
`[native code]` | Self: 0.1% (54.5ms) | Total: 1.7% (619.6ms) | Samples: 3

**Called by:**
- `async deserializeHttpMessage` (25)
- `schemaLogFilter` (17)
- `async serializeRequest` (15)
- `async serializeRequest` (2)
- `structIterator` (1)

**Calls:**
- `generatorResume` (57)

### `hasOwn`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:6` | Self: 0.1% (54.0ms) | Total: 0.1% (62.3ms) | Samples: 9

**Called by:**
- `async deserializeResponse` (5)
- `getTransformedHeaders` (3)
- `async (anonymous)` (2)

**Calls:**
- `_addHeaderLine` (1)

### `[Symbol.hasInstance]`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:298` | Self: 0.1% (54.0ms) | Total: 0.1% (58.6ms) | Samples: 4

**Called by:**
- `of` (6)

**Calls:**
- `isPrototypeOf` (2)

### `(anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` | Self: 0.1% (53.3ms) | Total: 0.1% (53.3ms) | Samples: 2

**Called by:**
- `resolve` (2)

### `removeListener`
`node:events:262` | Self: 0.1% (52.9ms) | Total: 0.1% (52.9ms) | Samples: 6

**Called by:**
- `(anonymous)` (5)
- `_acquireClient` (1)

### `PromisePrototypeThen`
`node:diagnostics_channel:2` | Self: 0.1% (52.1ms) | Total: 0.1% (52.1ms) | Samples: 5

**Called by:**
- `(anonymous)` (5)

### `htmlToText`
`/app/src/htmltotext.ts:132` | Self: 0.1% (51.9ms) | Total: 0.1% (51.9ms) | Samples: 2

**Called by:**
- `normalizeEmail` (2)

### `subarray`
`[native code]` | Self: 0.1% (51.9ms) | Total: 0.1% (51.9ms) | Samples: 9

**Called by:**
- `async (anonymous)` (9)

### `emit`
`node:events:127` | Self: 0.1% (51.6ms) | Total: 0.1% (51.6ms) | Samples: 9

**Called by:**
- `(anonymous)` (6)
- `(anonymous)` (3)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:697` | Self: 0.1% (51.0ms) | Total: 0.1% (51.0ms) | Samples: 4

**Called by:**
- `filter` (4)

### `Query`
`/app/node_modules/pg/lib/query.js` | Self: 0.1% (50.3ms) | Total: 0.1% (50.3ms) | Samples: 1

**Called by:**
- `query` (1)

### `addListener`
`node:events:214` | Self: 0.1% (50.0ms) | Total: 0.9% (342.5ms) | Samples: 10

**Called by:**
- `(anonymous)` (22)
- `(anonymous)` (7)
- `once` (5)
- `(anonymous)` (4)
- `parserOnIncomingClient` (3)
- `_release` (2)
- `onNodeHTTPRequest` (1)
- `(anonymous)` (1)

**Calls:**
- `_addListener` (14)
- `_addListener` (6)
- `_addListener` (5)
- `_addListener` (3)
- `_addListener` (3)
- `_addListener` (2)
- `_addListener` (1)
- `_addListener` (1)

### `applyToStack`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:982` | Self: 0.1% (50.0ms) | Total: 0.1% (61.6ms) | Samples: 4

**Called by:**
- `use` (5)

**Calls:**
- `add` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:89` | Self: 0.1% (49.7ms) | Total: 0.4% (149.9ms) | Samples: 1

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `copyDataProperties` (6)

### `get`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:336` | Self: 0.1% (49.7ms) | Total: 0.1% (49.7ms) | Samples: 2

**Called by:**
- `defaultEndpointResolver` (2)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` | Self: 0.1% (49.0ms) | Total: 0.1% (49.0ms) | Samples: 4

**Called by:**
- `map` (2)
- `forEach` (1)
- `bound ` (1)

### `structIterator`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js` | Self: 0.1% (48.8ms) | Total: 0.1% (48.8ms) | Samples: 7

**Called by:**
- `generatorResume` (7)

### `async resolveParams`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:209` | Self: 0.1% (48.6ms) | Total: 0.5% (183.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (11)
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (11)
- `async (anonymous)` (2)

### `from`
`internal:streams/from:8` | Self: 0.1% (48.3ms) | Total: 0.1% (48.3ms) | Samples: 1

**Called by:**
- `toStream` (1)

### `_addListener`
`node:events:194` | Self: 0.1% (47.2ms) | Total: 0.1% (47.2ms) | Samples: 2

**Called by:**
- `addListener` (2)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:267` | Self: 0.1% (47.2ms) | Total: 0.1% (47.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `escapeElement`
`/app/node_modules/pg/lib/utils.js:15` | Self: 0.1% (46.5ms) | Total: 0.1% (46.5ms) | Samples: 7

**Called by:**
- `arrayString` (7)

### `getTransformedHeaders`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:37` | Self: 0.1% (46.5ms) | Total: 0.1% (46.5ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` | Self: 0.1% (44.4ms) | Total: 0.1% (44.4ms) | Samples: 2

**Called by:**
- `async deserializeHttpMessage` (2)

### `clearBuffer`
`internal:streams/writable:379` | Self: 0.1% (43.6ms) | Total: 15.3% (5.54s) | Samples: 4

**Called by:**
- `(anonymous)` (562)

**Calls:**
- `doWrite` (558)

### `htmlToText`
`/app/src/htmltotext.ts:133` | Self: 0.1% (43.4ms) | Total: 0.1% (67.4ms) | Samples: 6

**Called by:**
- `normalizeEmail` (7)

**Calls:**
- `parseTag` (1)

### `onNodeHTTPRequest`
`node:_http_server:517` | Self: 0.1% (42.9ms) | Total: 0.1% (42.9ms) | Samples: 2

### `_unrefTimer`
`node:_http_server:1058` | Self: 0.1% (42.7ms) | Total: 0.1% (45.1ms) | Samples: 1

**Called by:**
- `onDataIncomingMessage` (2)

**Calls:**
- `refresh` (1)

### `resume`
`node:net:1454` | Self: 0.1% (42.7ms) | Total: 0.1% (54.4ms) | Samples: 2

**Called by:**
- `readStart` (5)

**Calls:**
- `resume` (3)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:306` | Self: 0.1% (42.6ms) | Total: 0.1% (42.6ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `nextTick`
`[native code]` | Self: 0.1% (41.8ms) | Total: 0.1% (56.9ms) | Samples: 5

**Called by:**
- `_destroy` (2)
- `emitErrorNextTickIfErrorListenerNT` (2)
- `emitReadable` (1)
- `resume` (1)
- `endReadable` (1)
- `onDestroy` (1)
- `connect` (1)

**Calls:**
- `push` (4)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js` | Self: 0.1% (41.0ms) | Total: 0.1% (41.0ms) | Samples: 4

**Called by:**
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async configProvider` (1)

### `emit`
`node:events:86` | Self: 0.1% (40.5ms) | Total: 0.1% (40.5ms) | Samples: 7

**Called by:**
- `_release` (2)
- `emitReadable_` (1)
- `addChunk` (1)
- `emitCloseNT` (1)
- `endReadableNT` (1)
- `emitResponseFinished` (1)

### `htmlToText`
`/app/src/htmltotext.ts:112` | Self: 0.1% (40.0ms) | Total: 0.6% (244.8ms) | Samples: 5

**Called by:**
- `normalizeEmail` (34)

**Calls:**
- `parseTag` (17)
- `parseTag` (10)
- `parseTag` (2)

### `addEventListener`
`[native code]` | Self: 0.1% (39.6ms) | Total: 0.1% (39.6ms) | Samples: 7

**Called by:**
- `(anonymous)` (5)
- `(anonymous)` (2)

### `Readable`
`internal:streams/readable:150` | Self: 0.1% (39.1ms) | Total: 0.2% (81.5ms) | Samples: 3

**Called by:**
- `from` (5)
- `IncomingMessage` (2)
- `IncomingMessage` (1)

**Calls:**
- `ReadableState` (3)
- `ReadableState` (1)
- `ReadableState` (1)

### `getCanonicalQuery`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` | Self: 0.1% (39.0ms) | Total: 0.1% (39.0ms) | Samples: 1

**Called by:**
- `createCanonicalRequest` (1)

### `listenerCount`
`node:events:354` | Self: 0.1% (38.3ms) | Total: 0.1% (38.3ms) | Samples: 3

**Called by:**
- `onError` (2)
- `(anonymous)` (1)

### `setPrototypeOf`
`[native code]` | Self: 0.1% (38.1ms) | Total: 0.1% (38.1ms) | Samples: 4

**Called by:**
- `mutate` (4)

### `renderNativeHeaders`
`node:_http_server:1390` | Self: 0.1% (37.9ms) | Total: 0.1% (64.6ms) | Samples: 5

**Called by:**
- `(anonymous)` (8)

**Calls:**
- `push` (2)
- `String` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:183` | Self: 0.1% (37.8ms) | Total: 0.1% (37.8ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `/^(?:(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])\.){3}(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])$/`
`[native code]` | Self: 0.1% (37.5ms) | Total: 0.1% (37.5ms) | Samples: 1

**Called by:**
- `isIPv4` (1)

### `/&(#[0-9]+\|#[xX][0-9a-fA-F]+\|[a-zA-Z]+);/g`
`[native code]` | Self: 0.1% (37.1ms) | Total: 0.1% (37.1ms) | Samples: 2

**Called by:**
- `decodeEntities` (2)

### `expandRelativeMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:85` | Self: 0.1% (37.0ms) | Total: 0.3% (126.0ms) | Samples: 1

**Called by:**
- `map` (4)

**Calls:**
- `reverse` (3)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:206` | Self: 0.1% (36.8ms) | Total: 0.1% (36.8ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `endReadableNT`
`internal:streams/readable:901` | Self: 0.1% (36.6ms) | Total: 0.8% (292.9ms) | Samples: 5

**Called by:**
- `processTicksAndRejections` (40)

**Calls:**
- `emit` (20)
- `emit` (12)
- `emit` (2)
- `emit` (1)

### `async sendOne`
`/app/src/server.ts:124` | Self: 0.1% (36.6ms) | Total: 0.1% (36.6ms) | Samples: 1

**Called by:**
- `async sendOne` (1)

### `(anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:245` | Self: 0.1% (36.0ms) | Total: 0.1% (36.0ms) | Samples: 3

**Called by:**
- `map` (3)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:304` | Self: 0.0% (35.9ms) | Total: 0.1% (47.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `write` (4)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` | Self: 0.0% (35.8ms) | Total: 0.0% (35.8ms) | Samples: 2

**Called by:**
- `map` (1)
- `resolve` (1)

### `_addHeaderLine`
`node:_http_incoming:362` | Self: 0.0% (35.4ms) | Total: 0.0% (35.4ms) | Samples: 6

**Called by:**
- `get` (5)
- `hasOwn` (1)

### `add`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:159` | Self: 0.0% (35.3ms) | Total: 0.0% (35.3ms) | Samples: 3

**Called by:**
- `(anonymous)` (2)
- `applyToStack` (1)

### `encodeURIComponent`
`[native code]` | Self: 0.0% (33.5ms) | Total: 0.0% (33.5ms) | Samples: 6

**Called by:**
- `escapeUri` (2)
- `async resolveParamsForS3` (2)
- `extendedEncodeURIComponent` (2)

### `htmlToText`
`/app/src/htmltotext.ts:120` | Self: 0.0% (33.4ms) | Total: 0.0% (33.4ms) | Samples: 5

**Called by:**
- `normalizeEmail` (5)

### `matchHeader`
`node:_http_outgoing:385` | Self: 0.0% (33.1ms) | Total: 0.0% (33.1ms) | Samples: 3

**Called by:**
- `storeHeader` (3)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js` | Self: 0.0% (32.7ms) | Total: 0.0% (32.7ms) | Samples: 2

**Called by:**
- `async (anonymous)` (1)
- `async useFipsEndpoint` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:306` | Self: 0.0% (32.2ms) | Total: 0.1% (42.7ms) | Samples: 4

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `toHex` (2)

### `query`
`/app/node_modules/pg-pool/index.js` | Self: 0.0% (32.0ms) | Total: 0.0% (32.0ms) | Samples: 2

**Called by:**
- `async insertEmails` (2)

### `onEofChunk`
`internal:streams/readable` | Self: 0.0% (31.9ms) | Total: 0.0% (31.9ms) | Samples: 1

**Called by:**
- `readableAddChunkPushObjectMode` (1)

### `async sign`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:79` | Self: 0.0% (31.2ms) | Total: 0.0% (31.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `crc32`
`[native code]` | Self: 0.0% (30.5ms) | Total: 0.0% (30.5ms) | Samples: 7

**Called by:**
- `update` (7)

### `(anonymous)`
`/app/node_modules/ioredis/built/utils/Commander.js` | Self: 0.0% (30.4ms) | Total: 0.0% (30.4ms) | Samples: 1

**Called by:**
- `async rateLimit` (1)

### `_dump`
`node:_http_incoming:388` | Self: 0.0% (30.1ms) | Total: 0.1% (39.9ms) | Samples: 2

**Called by:**
- `emitResponseFinish` (4)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:100` | Self: 0.0% (29.9ms) | Total: 0.1% (45.2ms) | Samples: 4

**Called by:**
- `forEach` (6)

**Calls:**
- `cloneObject` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:193` | Self: 0.0% (29.9ms) | Total: 0.0% (29.9ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `ReadableState`
`internal:streams/readable:30` | Self: 0.0% (29.8ms) | Total: 0.0% (29.8ms) | Samples: 1

**Called by:**
- `Readable` (1)

### `toISOString`
`[native code]` | Self: 0.0% (29.5ms) | Total: 0.0% (29.5ms) | Samples: 3

**Called by:**
- `iso8601` (3)

### `hash`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:367` | Self: 0.0% (29.4ms) | Total: 0.0% (29.4ms) | Samples: 2

**Called by:**
- `get` (2)

### `resume`
`[native code]` | Self: 0.0% (29.3ms) | Total: 0.0% (29.3ms) | Samples: 6

**Called by:**
- `resume` (3)
- `#resumeSocket` (1)
- `read` (1)
- `_read` (1)

### `(anonymous)`
`/app/src/deps.ts` | Self: 0.0% (29.2ms) | Total: 0.0% (29.2ms) | Samples: 1

**Called by:**
- `map` (1)

### `async handle`
`/app/src/server.ts:168` | Self: 0.0% (28.7ms) | Total: 0.0% (28.7ms) | Samples: 7

**Called by:**
- `async handle` (4)
- `(anonymous)` (3)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:447` | Self: 0.0% (28.5ms) | Total: 20.7% (7.46s) | Samples: 2

**Called by:**
- `async enqueue` (630)
- `async rateLimit` (271)

**Calls:**
- `(anonymous)` (880)
- `toWritable` (12)
- `toWritable` (4)
- `toWritable` (2)
- `toWritable` (1)

### `_addListener`
`node:events:193` | Self: 0.0% (28.5ms) | Total: 0.0% (35.4ms) | Samples: 8

**Called by:**
- `addListener` (6)
- `prependListener` (3)

**Calls:**
- `checkListener` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` | Self: 0.0% (28.3ms) | Total: 0.0% (28.3ms) | Samples: 1

**Called by:**
- `sort` (1)

### ``/^[\^_`a-zA-Z\-0-9!#$%&'*+.\|~]+$/``
`[native code]` | Self: 0.0% (28.3ms) | Total: 0.0% (28.3ms) | Samples: 3

**Called by:**
- `checkIsHttpToken` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:872` | Self: 0.0% (28.2ms) | Total: 0.0% (29.3ms) | Samples: 3

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `Number` (1)

### `refresh`
`[native code]` | Self: 0.0% (27.9ms) | Total: 0.0% (27.9ms) | Samples: 4

**Called by:**
- `_unrefTimer` (3)
- `_unrefTimer` (1)

### `isDate`
`[native code]` | Self: 0.0% (26.8ms) | Total: 0.0% (26.8ms) | Samples: 1

**Called by:**
- `prepareValue` (1)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:417` | Self: 0.0% (26.8ms) | Total: 0.0% (26.8ms) | Samples: 3

**Called by:**
- `async deserializeResponse` (3)

### `OutgoingMessage`
`node:_http_outgoing:79` | Self: 0.0% (26.3ms) | Total: 0.1% (58.9ms) | Samples: 4

**Called by:**
- `ServerResponse` (4)
- `ClientRequest` (1)

**Calls:**
- `Stream` (1)

### `_write`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1619` | Self: 0.0% (26.3ms) | Total: 0.0% (26.3ms) | Samples: 2

**Called by:**
- `writeOrBuffer` (2)

### `_pulseQueue`
`/app/node_modules/pg-pool/index.js:128` | Self: 0.0% (26.1ms) | Total: 0.0% (26.1ms) | Samples: 3

**Called by:**
- `_release` (2)
- `processTicksAndRejections` (1)

### `createCanonicalRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:247` | Self: 0.0% (26.1ms) | Total: 0.0% (26.1ms) | Samples: 2

**Called by:**
- `async signRequest` (2)

### `flat`
`[native code]` | Self: 0.0% (26.0ms) | Total: 0.0% (26.0ms) | Samples: 5

**Called by:**
- `Command` (5)

### `concatBytes`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:857` | Self: 0.0% (25.7ms) | Total: 0.0% (27.8ms) | Samples: 3

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `Uint8Array` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:81` | Self: 0.0% (25.3ms) | Total: 0.1% (42.0ms) | Samples: 2

**Called by:**
- `forEach` (4)

**Calls:**
- `push` (2)

### `WritableState`
`internal:streams/writable` | Self: 0.0% (25.0ms) | Total: 0.0% (25.0ms) | Samples: 3

**Called by:**
- `Writable` (3)

### `(anonymous)`
`internal:streams/readable` | Self: 0.0% (25.0ms) | Total: 0.0% (25.0ms) | Samples: 5

**Called by:**
- `(anonymous)` (3)
- `resume` (1)
- `parserOnMessageComplete` (1)

### `toWritable`
`/app/node_modules/ioredis/built/Command.js:159` | Self: 0.0% (24.9ms) | Total: 0.2% (88.4ms) | Samples: 4

**Called by:**
- `sendCommand` (12)

**Calls:**
- `byteLength` (8)

### `unref`
`[native code]` | Self: 0.0% (24.8ms) | Total: 0.0% (24.8ms) | Samples: 1

**Called by:**
- `unref` (1)

### `getName`
`node:_http_agent:94` | Self: 0.0% (24.7ms) | Total: 0.0% (24.7ms) | Samples: 4

**Called by:**
- `removeSocket` (3)
- `(anonymous)` (1)

### `hasHeaderWithPrefix`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js` | Self: 0.0% (24.6ms) | Total: 0.0% (24.6ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `removeSocket`
`node:_http_agent:235` | Self: 0.0% (24.6ms) | Total: 0.0% (24.6ms) | Samples: 7

**Called by:**
- `(anonymous)` (7)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:139` | Self: 0.0% (24.1ms) | Total: 0.0% (24.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:307` | Self: 0.0% (24.0ms) | Total: 0.1% (41.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `map` (4)

### `_addListener`
`node:events:201` | Self: 0.0% (23.8ms) | Total: 0.0% (23.8ms) | Samples: 5

**Called by:**
- `addListener` (5)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:185` | Self: 0.0% (23.7ms) | Total: 0.0% (23.7ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `setFeature`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:78` | Self: 0.0% (23.7ms) | Total: 0.0% (23.7ms) | Samples: 1

**Called by:**
- `async checkFeatures` (1)

### `async putObject`
`/app/src/deps.ts:70` | Self: 0.0% (23.6ms) | Total: 4.7% (1.70s) | Samples: 1

**Called by:**
- `async putObject` (157)
- `(anonymous)` (1)

**Calls:**
- `send` (143)
- `send` (13)
- `send` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:819` | Self: 0.0% (23.5ms) | Total: 0.0% (24.6ms) | Samples: 4

**Called by:**
- `async (anonymous)` (3)
- `(anonymous)` (2)

**Calls:**
- `async (anonymous)` (1)

### `Result`
`/app/node_modules/pg/lib/result.js:20` | Self: 0.0% (23.5ms) | Total: 0.0% (23.5ms) | Samples: 1

**Called by:**
- `Query` (1)

### `onceWrapper`
`node:events:244` | Self: 0.0% (23.5ms) | Total: 0.0% (23.5ms) | Samples: 2

**Called by:**
- `emit` (1)
- `emit` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:315` | Self: 0.0% (23.4ms) | Total: 0.0% (23.4ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `validateStatusCode`
`node:_http_server` | Self: 0.0% (23.4ms) | Total: 0.0% (23.4ms) | Samples: 2

**Called by:**
- `_writeHead` (2)

### `_addListener`
`node:events:206` | Self: 0.0% (23.4ms) | Total: 0.0% (23.4ms) | Samples: 3

**Called by:**
- `addListener` (3)

### `timeout`
`[native code]` | Self: 0.0% (23.2ms) | Total: 0.0% (23.2ms) | Samples: 5

**Called by:**
- `async putObject` (5)

### `(anonymous)`
`node:_http_server:186` | Self: 0.0% (23.1ms) | Total: 0.0% (23.1ms) | Samples: 5

**Called by:**
- `emit` (5)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` | Self: 0.0% (23.1ms) | Total: 0.0% (23.1ms) | Samples: 2

**Called by:**
- `async collectBody` (2)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:420` | Self: 0.0% (22.4ms) | Total: 0.3% (126.9ms) | Samples: 2

**Called by:**
- `Promise` (14)

**Calls:**
- `async writeRequestBody` (12)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:481` | Self: 0.0% (22.3ms) | Total: 0.0% (22.3ms) | Samples: 1

**Called by:**
- `async enqueue` (1)

### `_handleReadyForQuery`
`/app/node_modules/pg/lib/client.js:395` | Self: 0.0% (22.2ms) | Total: 0.1% (45.5ms) | Samples: 1

**Called by:**
- `bound _handleReadyForQuery` (11)

**Calls:**
- `_pulseQueryQueue` (5)
- `_pulseQueryQueue` (5)

### `add`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:179` | Self: 0.0% (22.0ms) | Total: 0.0% (22.0ms) | Samples: 4

**Called by:**
- `(anonymous)` (3)
- `applyToStack` (1)

### `(anonymous)`
`/app/src/email.ts` | Self: 0.0% (22.0ms) | Total: 0.0% (22.0ms) | Samples: 2

**Called by:**
- `map` (2)

### `async resolveParamsForS3`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:64` | Self: 0.0% (22.0ms) | Total: 0.1% (37.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `encodeURIComponent` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:150` | Self: 0.0% (21.9ms) | Total: 0.0% (21.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `tracePromise`
`node:diagnostics_channel:206` | Self: 0.0% (21.8ms) | Total: 0.0% (21.8ms) | Samples: 3

**Called by:**
- `traceCommand` (3)

### `toWritable`
`/app/node_modules/ioredis/built/Command.js:124` | Self: 0.0% (21.7ms) | Total: 0.1% (44.2ms) | Samples: 2

**Called by:**
- `sendCommand` (4)

**Calls:**
- `byteLength` (2)

### `setHeader`
`node:_http_outgoing:412` | Self: 0.0% (20.8ms) | Total: 0.0% (20.8ms) | Samples: 3

**Called by:**
- `_writeHead` (3)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:37` | Self: 0.0% (20.7ms) | Total: 0.5% (206.2ms) | Samples: 3

**Called by:**
- `(anonymous)` (16)
- `async (anonymous)` (4)

**Calls:**
- `(anonymous)` (7)
- `(anonymous)` (6)
- `async (anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1188` | Self: 0.0% (20.6ms) | Total: 0.0% (20.6ms) | Samples: 1

**Called by:**
- `bound ` (1)

### `randomUUID`
`[native code]` | Self: 0.0% (20.4ms) | Total: 0.0% (20.4ms) | Samples: 3

**Called by:**
- `(anonymous)` (2)
- `async sendOne` (1)

### `prefinish`
`internal:streams/writable:450` | Self: 0.0% (20.2ms) | Total: 0.0% (20.2ms) | Samples: 1

**Called by:**
- `finishMaybe` (1)

### `async enqueue`
`/app/src/deps.ts:92` | Self: 0.0% (20.1ms) | Total: 26.7% (9.65s) | Samples: 5

**Called by:**
- `async (anonymous)` (652)
- `async enqueue` (650)
- `(anonymous)` (2)

**Calls:**
- `async enqueue` (650)
- `sendCommand` (630)
- `traceCommand` (7)
- `(anonymous)` (4)
- `asyncFunctionDrive` (2)
- `sendCommand` (2)
- `sendCommand` (1)
- `sendCommand` (1)
- `sendCommand` (1)
- `sendCommand` (1)

### `async getSigningKey`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:318` | Self: 0.0% (20.1ms) | Total: 0.3% (109.3ms) | Samples: 1

**Called by:**
- `getSigningKey` (13)
- `async signRequest` (1)

**Calls:**
- `async (anonymous)` (12)
- `async (anonymous)` (1)

### `/^\n+\|\n+$/g`
`[native code]` | Self: 0.0% (20.1ms) | Total: 0.0% (20.1ms) | Samples: 4

**Called by:**
- `postProcess` (4)

### `async rateLimit`
`/app/src/deps.ts:63` | Self: 0.0% (20.1ms) | Total: 8.2% (2.99s) | Samples: 4

**Called by:**
- `(anonymous)` (253)
- `async withDeps` (43)

**Calls:**
- `async rateLimit` (289)
- `asyncFunctionDrive` (2)
- `async rateLimit` (1)

### `validate`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/util/index.js:3` | Self: 0.0% (20.0ms) | Total: 0.0% (20.0ms) | Samples: 3

**Called by:**
- `async (anonymous)` (3)

### `query`
`/app/node_modules/pg/lib/client.js:687` | Self: 0.0% (19.8ms) | Total: 0.7% (267.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (19)

**Calls:**
- `Query` (14)
- `Query` (2)
- `Query` (1)
- `Query` (1)

### `async getSignature`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:545` | Self: 0.0% (19.5ms) | Total: 0.1% (55.1ms) | Samples: 2

**Called by:**
- `async getSignature` (9)
- `(anonymous)` (2)

**Calls:**
- `async createStringToSign` (9)

### `of`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:306` | Self: 0.0% (19.3ms) | Total: 0.0% (19.3ms) | Samples: 2

**Called by:**
- `read` (1)
- `async deserializeResponse` (1)

### `Promise`
`[native code]` | Self: 0.0% (19.3ms) | Total: 3.5% (1.26s) | Samples: 3

**Called by:**
- `async handle` (74)
- `streamCollector` (62)
- `race` (5)
- `readBody` (4)
- `initPromise` (3)

**Calls:**
- `(anonymous)` (47)
- `(anonymous)` (34)
- `(anonymous)` (20)
- `(anonymous)` (14)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `buildEml`
`/app/src/email.ts:199` | Self: 0.0% (18.9ms) | Total: 0.1% (64.9ms) | Samples: 4

**Called by:**
- `async sendOne` (8)

**Calls:**
- `map` (4)

### `[Symbol.hasInstance]`
`[native code]` | Self: 0.0% (18.9ms) | Total: 0.0% (18.9ms) | Samples: 7

**Called by:**
- `value` (7)

### `isArnBucketName`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:88` | Self: 0.0% (18.8ms) | Total: 0.0% (18.8ms) | Samples: 2

**Called by:**
- `async resolveParamsForS3` (2)

### `_write`
`node:net:1729` | Self: 0.0% (18.5ms) | Total: 0.0% (21.8ms) | Samples: 2

**Called by:**
- `writeOrBuffer` (2)
- `doWrite` (2)
- `connect` (1)

**Calls:**
- `bound onwrite` (3)

### `setHeader`
`node:_http_outgoing:413` | Self: 0.0% (18.5ms) | Total: 0.0% (18.5ms) | Samples: 1

**Called by:**
- `_writeHead` (1)

### `sanitizeTraceHeaders`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:235` | Self: 0.0% (18.2ms) | Total: 0.0% (18.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `getName`
`node:_http_agent` | Self: 0.0% (18.1ms) | Total: 0.0% (18.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `removeSocket` (1)

### `from`
`internal:streams/from:6` | Self: 0.0% (18.1ms) | Total: 0.2% (86.3ms) | Samples: 4

**Called by:**
- `toStream` (13)

**Calls:**
- `Readable` (5)
- `Readable` (2)
- `Readable` (1)
- `Readable` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1081` | Self: 0.0% (18.1ms) | Total: 0.0% (18.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `onResponseFinishHandleSocket`
`node:_http_server:1492` | Self: 0.0% (18.0ms) | Total: 0.0% (18.0ms) | Samples: 2

**Called by:**
- `emitResponseFinish` (2)

### `async (anonymous)`
`/app/src/server.ts:129` | Self: 0.0% (17.9ms) | Total: 4.8% (1.75s) | Samples: 1

**Called by:**
- `async (anonymous)` (166)
- `(anonymous)` (1)

**Calls:**
- `async putObject` (166)

### `toRow`
`/app/src/server.ts:77` | Self: 0.0% (17.7ms) | Total: 0.0% (17.7ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `advanceResponsePipeline`
`node:_http_server:1599` | Self: 0.0% (17.7ms) | Total: 0.0% (17.7ms) | Samples: 1

**Called by:**
- `emitResponseFinish` (1)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:497` | Self: 0.0% (17.6ms) | Total: 0.2% (86.5ms) | Samples: 3

**Called by:**
- `async deserializeHttpMessage` (5)
- `(anonymous)` (4)

**Calls:**
- `read` (4)
- `read` (1)
- `read` (1)

### `createCanonicalRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:244` | Self: 0.0% (17.5ms) | Total: 0.2% (92.5ms) | Samples: 1

**Called by:**
- `async signRequest` (11)

**Calls:**
- `getCanonicalQuery` (4)
- `getCanonicalQuery` (3)
- `getCanonicalQuery` (1)
- `getCanonicalQuery` (1)
- `getCanonicalQuery` (1)

### `(anonymous)`
`internal:streams/writable` | Self: 0.0% (17.4ms) | Total: 0.0% (17.4ms) | Samples: 2

**Called by:**
- `finish` (2)

### `once`
`node:events:255` | Self: 0.0% (17.4ms) | Total: 0.3% (115.3ms) | Samples: 2

**Called by:**
- `(anonymous)` (6)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `ClientRequest` (1)

**Calls:**
- `(anonymous)` (7)
- `addListener` (5)
- `_onceWrap` (2)
- `_onceWrap` (1)

### `(anonymous)`
`/app/src/htmltotext.ts:88` | Self: 0.0% (17.3ms) | Total: 0.0% (17.3ms) | Samples: 4

**Called by:**
- `decodeEntities` (4)

### `_handleReadyForQuery`
`/app/node_modules/pg/lib/client.js` | Self: 0.0% (17.1ms) | Total: 0.0% (17.1ms) | Samples: 1

**Called by:**
- `bound _handleReadyForQuery` (1)

### `get`
`node:_http_incoming:99` | Self: 0.0% (17.0ms) | Total: 0.0% (17.0ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `(anonymous)`
`/app/node_modules/ioredis/built/Command.js` | Self: 0.0% (16.9ms) | Total: 0.0% (16.9ms) | Samples: 2

**Called by:**
- `Promise` (2)

### `getCanonicalHeaders`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:351` | Self: 0.0% (16.8ms) | Total: 0.0% (16.8ms) | Samples: 2

**Called by:**
- `async signRequest` (2)

### `(anonymous)`
`internal:streams/readable:327` | Self: 0.0% (16.8ms) | Total: 0.0% (16.8ms) | Samples: 3

**Called by:**
- `flow` (3)

### `onNodeHTTPRequest`
`node:_http_server:465` | Self: 0.0% (16.7ms) | Total: 0.0% (16.7ms) | Samples: 1

### `async putObject`
`/app/src/deps.ts:73` | Self: 0.0% (16.7ms) | Total: 4.8% (1.73s) | Samples: 2

**Called by:**
- `async (anonymous)` (166)

**Calls:**
- `async putObject` (157)
- `async putObject` (5)
- `async putObject` (2)

### `removeListener`
`node:events:266` | Self: 0.0% (16.6ms) | Total: 0.0% (16.6ms) | Samples: 5

**Called by:**
- `onceWrapper` (2)
- `cleanup` (1)
- `(anonymous)` (1)
- `cleanup` (1)

### `processClientData`
`node:_http_client:358` | Self: 0.0% (16.5ms) | Total: 4.9% (1.79s) | Samples: 1

**Called by:**
- `socketOnDataInner` (176)

**Calls:**
- `execute` (175)

### `copyWithInserted`
`node:events:228` | Self: 0.0% (16.5ms) | Total: 0.0% (16.5ms) | Samples: 3

**Called by:**
- `_addListener` (3)

### `_implicitHeader`
`node:_http_client` | Self: 0.0% (16.4ms) | Total: 0.0% (16.4ms) | Samples: 1

**Called by:**
- `write_` (1)

### `isValidAddress`
`/app/src/email.ts:53` | Self: 0.0% (16.4ms) | Total: 0.0% (16.4ms) | Samples: 1

**Called by:**
- `normalizeEmail` (1)

### `splice`
`[native code]` | Self: 0.0% (16.3ms) | Total: 0.0% (16.3ms) | Samples: 1

**Called by:**
- `removeSocket` (1)

### `htmlToText`
`/app/src/htmltotext.ts:126` | Self: 0.0% (16.0ms) | Total: 0.0% (16.0ms) | Samples: 4

**Called by:**
- `normalizeEmail` (4)

### `flow`
`internal:streams/readable:603` | Self: 0.0% (15.8ms) | Total: 0.0% (15.8ms) | Samples: 1

**Called by:**
- `emitReadable_` (1)

### `Result`
`/app/node_modules/pg/lib/result.js:12` | Self: 0.0% (15.7ms) | Total: 0.0% (15.7ms) | Samples: 1

**Called by:**
- `Query` (1)

### `createConfigValueProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:97` | Self: 0.0% (15.7ms) | Total: 0.0% (15.7ms) | Samples: 4

**Called by:**
- `async (anonymous)` (4)

### `removeSocket`
`node:_http_agent:230` | Self: 0.0% (15.6ms) | Total: 0.0% (15.6ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `read`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:804` | Self: 0.0% (15.5ms) | Total: 0.0% (15.5ms) | Samples: 1

**Called by:**
- `async deserializeHttpMessage` (1)

### `(anonymous)`
`internal:streams/readable:430` | Self: 0.0% (15.4ms) | Total: 0.1% (58.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `once` (3)

### `write_`
`node:_http_outgoing` | Self: 0.0% (15.4ms) | Total: 0.0% (15.4ms) | Samples: 1

**Called by:**
- `end` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:335` | Self: 0.0% (15.2ms) | Total: 0.1% (64.4ms) | Samples: 1

**Called by:**
- `async (anonymous)` (2)
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:492` | Self: 0.0% (15.1ms) | Total: 0.3% (132.5ms) | Samples: 2

**Called by:**
- `async (anonymous)` (9)

**Calls:**
- `async (anonymous)` (4)
- `cloneObject` (2)
- `asyncFunctionDrive` (1)

### `push`
`internal:fixed_queue:18` | Self: 0.0% (15.0ms) | Total: 0.0% (15.0ms) | Samples: 4

**Called by:**
- `push` (4)

### `addressList`
`/app/src/email.ts:93` | Self: 0.0% (15.0ms) | Total: 0.0% (24.4ms) | Samples: 1

**Called by:**
- `normalizeEmail` (2)

**Calls:**
- `isValidAddress` (1)

### `asciiTrim`
`/app/src/email.ts:45` | Self: 0.0% (14.7ms) | Total: 0.0% (14.7ms) | Samples: 4

**Called by:**
- `isValidAddress` (4)

### `_writeHead`
`node:_http_server:1327` | Self: 0.0% (14.6ms) | Total: 0.0% (15.6ms) | Samples: 4

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `checkInvalidHeaderChar` (1)

### `iso8601`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:211` | Self: 0.0% (14.5ms) | Total: 0.0% (14.5ms) | Samples: 1

**Called by:**
- `formatDate` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:19` | Self: 0.0% (14.5ms) | Total: 2.2% (802.6ms) | Samples: 2

**Called by:**
- `async (anonymous)` (77)
- `(anonymous)` (2)

**Calls:**
- `async (anonymous)` (77)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:436` | Self: 0.0% (14.4ms) | Total: 0.0% (17.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `deserializeMetadata` (1)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:528` | Self: 0.0% (14.3ms) | Total: 0.0% (27.7ms) | Samples: 1

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async serializeRequest` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:818` | Self: 0.0% (14.2ms) | Total: 0.4% (167.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (12)

**Calls:**
- `async resolveParams` (11)

### `emitCloseNT`
`internal:streams/destroy:78` | Self: 0.0% (13.9ms) | Total: 0.0% (19.6ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (2)

**Calls:**
- `emit` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:143` | Self: 0.0% (13.9ms) | Total: 0.1% (48.0ms) | Samples: 3

**Called by:**
- `reduce` (7)

**Calls:**
- `push` (4)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:349` | Self: 0.0% (13.9ms) | Total: 0.0% (13.9ms) | Samples: 1

**Called by:**
- `Promise` (1)

### `_onceWrap`
`node:events:243` | Self: 0.0% (13.8ms) | Total: 0.0% (13.8ms) | Samples: 2

**Called by:**
- `once` (2)

### `emitCloseNT`
`internal:streams/destroy:72` | Self: 0.0% (13.6ms) | Total: 0.0% (13.6ms) | Samples: 3

**Called by:**
- `processTicksAndRejections` (3)

### `EventEmitter`
`node:events:19` | Self: 0.0% (13.6ms) | Total: 0.0% (13.6ms) | Samples: 3

**Called by:**
- `Stream` (3)

### `getCanonicalQuery`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:192` | Self: 0.0% (13.4ms) | Total: 0.0% (14.5ms) | Samples: 3

**Called by:**
- `createCanonicalRequest` (4)

**Calls:**
- `escapeUri` (1)

### `expandRelativeMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:75` | Self: 0.0% (13.4ms) | Total: 0.0% (13.4ms) | Samples: 2

**Called by:**
- `map` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:137` | Self: 0.0% (13.4ms) | Total: 0.4% (165.9ms) | Samples: 2

**Called by:**
- `async (anonymous)` (13)
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (9)
- `async (anonymous)` (3)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:309` | Self: 0.0% (13.4ms) | Total: 0.0% (13.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/app/src/server.ts` | Self: 0.0% (13.3ms) | Total: 0.0% (13.3ms) | Samples: 2

**Called by:**
- `async withDeps` (2)

### `schemaLogFilter`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:584` | Self: 0.0% (13.2ms) | Total: 0.2% (75.3ms) | Samples: 3

**Called by:**
- `bound schemaLogFilter` (9)

**Calls:**
- `schemaLogFilter` (6)

### `WritableState`
`internal:streams/writable:152` | Self: 0.0% (13.2ms) | Total: 0.0% (14.4ms) | Samples: 2

**Called by:**
- `Writable` (2)
- `Duplex` (1)

**Calls:**
- `resetBuffer` (1)

### `restorePausedHold`
`node:net:489` | Self: 0.0% (13.2ms) | Total: 0.0% (13.2ms) | Samples: 2

**Called by:**
- `resume` (2)

### `Writable`
`internal:streams/writable:175` | Self: 0.0% (13.1ms) | Total: 0.0% (13.1ms) | Samples: 3

**Called by:**
- `Collector` (3)

### `(anonymous)`
`node:net:1262` | Self: 0.0% (13.0ms) | Total: 0.0% (13.0ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (1)

### `calculateServerName`
`node:_http_agent:199` | Self: 0.0% (12.9ms) | Total: 0.0% (12.9ms) | Samples: 2

**Called by:**
- `normalizeServerName` (2)

### `parseTag`
`/app/src/htmltotext.ts:34` | Self: 0.0% (12.9ms) | Total: 0.0% (12.9ms) | Samples: 2

**Called by:**
- `htmlToText` (2)

### `connect`
`/app/node_modules/pg-pool/index.js` | Self: 0.0% (12.8ms) | Total: 0.0% (12.8ms) | Samples: 1

**Called by:**
- `query` (1)

### `isStoppedModuleGraphRunning`
`internal:shared:204` | Self: 0.0% (12.7ms) | Total: 0.0% (12.7ms) | Samples: 1

**Called by:**
- `emitListeningNextTick` (1)

### `Sha256Node`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:456` | Self: 0.0% (12.5ms) | Total: 0.5% (192.7ms) | Samples: 1

**Called by:**
- `hmac` (8)
- `async getSignature` (4)
- `async (anonymous)` (4)
- `async createStringToSign` (1)

**Calls:**
- `createHash` (16)

### `renderNativeHeaders`
`node:_http_server:1365` | Self: 0.0% (12.5ms) | Total: 0.0% (12.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:869` | Self: 0.0% (12.5ms) | Total: 0.3% (110.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (6)

**Calls:**
- `copyDataProperties` (5)

### `async handle`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:291` | Self: 0.0% (12.3ms) | Total: 0.0% (12.3ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `DefaultIdentityProviderConfig`
`/app/node_modules/@smithy/core/dist-cjs/index.js:212` | Self: 0.0% (12.2ms) | Total: 0.0% (12.2ms) | Samples: 2

**Called by:**
- `async identityProviderConfigProvider` (2)

### `readableAddChunkPushByteMode`
`internal:streams/readable:245` | Self: 0.0% (12.2ms) | Total: 6.6% (2.38s) | Samples: 1

**Called by:**
- `pushDataToSocket` (272)

**Calls:**
- `addChunk` (270)
- `addChunk` (1)

### `query`
`/app/node_modules/pg/lib/client.js:673` | Self: 0.0% (12.1ms) | Total: 0.0% (12.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `normalizeProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:117` | Self: 0.0% (12.1ms) | Total: 0.0% (12.1ms) | Samples: 1

**Called by:**
- `SignatureV4Base` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:106` | Self: 0.0% (12.1ms) | Total: 0.0% (12.1ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` | Self: 0.0% (12.0ms) | Total: 0.0% (12.0ms) | Samples: 1

**Called by:**
- `async serializeRequest` (1)

### `constructStack`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:28` | Self: 0.0% (11.9ms) | Total: 0.0% (11.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `hasHeader`
`node:_http_outgoing` | Self: 0.0% (11.9ms) | Total: 0.0% (11.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `writeValues`
`/app/node_modules/pg-protocol/dist/serializer.js:79` | Self: 0.0% (11.8ms) | Total: 0.5% (192.0ms) | Samples: 1

**Called by:**
- `bind` (18)

**Calls:**
- `addInt32PrefixedString` (9)
- `addInt32PrefixedString` (8)

### `async configProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:100` | Self: 0.0% (11.8ms) | Total: 0.0% (11.8ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `/[^\u0021-\u00ff]/`
`[native code]` | Self: 0.0% (11.8ms) | Total: 0.0% (11.8ms) | Samples: 3

**Called by:**
- `ClientRequest` (3)

### `handlePacket`
`/app/node_modules/pg-protocol/dist/parser.js:167` | Self: 0.0% (11.7ms) | Total: 0.0% (11.7ms) | Samples: 1

**Called by:**
- `parse` (1)

### `_writev`
`node:net:1691` | Self: 0.0% (11.7ms) | Total: 0.1% (69.6ms) | Samples: 1

**Called by:**
- `doWrite` (11)

**Calls:**
- `concat` (10)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:109` | Self: 0.0% (11.7ms) | Total: 0.0% (11.7ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:305` | Self: 0.0% (11.7ms) | Total: 0.2% (92.3ms) | Samples: 1

**Called by:**
- `async getSigningKey` (12)
- `(anonymous)` (1)

**Calls:**
- `hmac` (8)
- `hmac` (4)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:676` | Self: 0.0% (11.6ms) | Total: 0.0% (11.6ms) | Samples: 1

**Called by:**
- `resolve` (1)

### `addCommandComplete`
`/app/node_modules/pg/lib/result.js:32` | Self: 0.0% (11.6ms) | Total: 0.0% (17.6ms) | Samples: 5

**Called by:**
- `handleCommandComplete` (6)

**Calls:**
- `exec` (1)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:476` | Self: 0.0% (11.6ms) | Total: 0.0% (11.6ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `async deserializeHttpMessage` (1)

### `add`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:155` | Self: 0.0% (11.4ms) | Total: 0.6% (218.0ms) | Samples: 2

**Called by:**
- `(anonymous)` (13)
- `applyToStack` (2)
- `applyToStack` (1)

**Calls:**
- `copyDataProperties` (14)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:719` | Self: 0.0% (11.4ms) | Total: 0.0% (11.4ms) | Samples: 1

**Called by:**
- `map` (1)

### `allocUnsafe`
`[native code]` | Self: 0.0% (11.3ms) | Total: 0.0% (11.3ms) | Samples: 1

**Called by:**
- `flush` (1)

### `afterWrite`
`internal:streams/writable:350` | Self: 0.0% (11.2ms) | Total: 0.0% (16.2ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (2)
- `onwrite` (1)

**Calls:**
- `(anonymous)` (2)

### `(anonymous)`
`internal:streams/readable:520` | Self: 0.0% (11.1ms) | Total: 0.0% (11.1ms) | Samples: 2

**Called by:**
- `unpipe` (2)

### `cleanup`
`internal:streams/readable:445` | Self: 0.0% (11.0ms) | Total: 0.1% (50.4ms) | Samples: 1

**Called by:**
- `onunpipe` (5)

**Calls:**
- `(anonymous)` (3)
- `removeListener` (1)

### `hash`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:363` | Self: 0.0% (11.0ms) | Total: 0.0% (11.0ms) | Samples: 2

**Called by:**
- `get` (2)

### `(anonymous)`
`/app/node_modules/pg/lib/connection.js:143` | Self: 0.0% (11.0ms) | Total: 1.1% (407.5ms) | Samples: 1

**Called by:**
- `parse` (65)

**Calls:**
- `emit` (57)
- `emit` (6)
- `emit` (1)

### `async sign`
`/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:64` | Self: 0.0% (10.8ms) | Total: 0.0% (22.0ms) | Samples: 2

**Called by:**
- `async sign` (5)

**Calls:**
- `async sign` (3)

### `writeOrBuffer`
`internal:streams/writable:278` | Self: 0.0% (10.8ms) | Total: 0.0% (10.8ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `postProcess`
`/app/src/htmltotext.ts:98` | Self: 0.0% (10.5ms) | Total: 0.0% (30.6ms) | Samples: 5

**Called by:**
- `htmlToText` (8)
- `normalizeEmail` (1)

**Calls:**
- `/^\n+\|\n+$/g` (4)

### `ref`
`[native code]` | Self: 0.0% (10.4ms) | Total: 0.0% (10.4ms) | Samples: 2

**Called by:**
- `ref` (2)

### `Hmac`
`node:crypto` | Self: 0.0% (10.4ms) | Total: 0.0% (10.4ms) | Samples: 1

**Called by:**
- `createHmac` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:340` | Self: 0.0% (10.3ms) | Total: 0.0% (14.0ms) | Samples: 2

**Called by:**
- `Promise` (3)

**Calls:**
- `buildQueryString` (1)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:524` | Self: 0.0% (10.3ms) | Total: 0.0% (15.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `prepareRequest` (1)
- `prepareRequest` (1)

### `removeListener`
`node:events:278` | Self: 0.0% (10.3ms) | Total: 0.0% (10.3ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `getName`
`node:_http_agent:97` | Self: 0.0% (10.2ms) | Total: 0.0% (10.2ms) | Samples: 2

**Called by:**
- `addRequest` (1)
- `removeSocket` (1)

### `onceWrapper`
`node:events` | Self: 0.0% (10.2ms) | Total: 0.0% (10.2ms) | Samples: 1

**Called by:**
- `emit` (1)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:188` | Self: 0.0% (10.1ms) | Total: 0.3% (139.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (11)
- `applyToStack` (4)
- `applyToStack` (2)
- `applyToStack` (2)
- `applyToStack` (1)

**Calls:**
- `copyDataProperties` (18)

### `htmlToText`
`/app/src/htmltotext.ts:108` | Self: 0.0% (10.0ms) | Total: 0.0% (10.0ms) | Samples: 1

**Called by:**
- `normalizeEmail` (1)

### `use`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:219` | Self: 0.0% (10.0ms) | Total: 0.7% (281.3ms) | Samples: 1

**Called by:**
- `resolveMiddlewareWithContext` (26)
- `concat` (10)
- `S3Client` (1)

**Calls:**
- `cloneTo` (6)
- `applyToStack` (5)
- `applyToStack` (5)
- `applyToStack` (4)
- `cloneTo` (4)
- `applyToStack` (4)
- `applyToStack` (3)
- `applyToStack` (2)
- `applyToStack` (2)
- `applyToStack` (1)

### `getCanonicalHeaders`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:350` | Self: 0.0% (9.9ms) | Total: 0.0% (9.9ms) | Samples: 2

**Called by:**
- `async signRequest` (2)

### `isArray`
`[native code]` | Self: 0.0% (9.8ms) | Total: 0.0% (9.8ms) | Samples: 2

**Called by:**
- `renderNativeHeaders` (2)

### `toWritable`
`/app/node_modules/ioredis/built/Command.js:126` | Self: 0.0% (9.7ms) | Total: 0.0% (9.7ms) | Samples: 2

**Called by:**
- `sendCommand` (2)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:722` | Self: 0.0% (9.6ms) | Total: 0.0% (9.6ms) | Samples: 2

**Called by:**
- `map` (2)

### `async configProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:109` | Self: 0.0% (9.6ms) | Total: 0.1% (63.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (4)
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async useFipsEndpoint` (1)
- `async region` (1)

### `_write`
`internal:streams/writable:218` | Self: 0.0% (9.5ms) | Total: 0.0% (9.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `createAwsAuthSigv4HttpAuthOption`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:835` | Self: 0.0% (9.5ms) | Total: 0.0% (9.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `digest`
`[native code]` | Self: 0.0% (9.4ms) | Total: 0.0% (9.4ms) | Samples: 3

**Called by:**
- `async digest` (2)
- `async digest` (1)

### `tickOnSocket`
`node:_http_client` | Self: 0.0% (9.4ms) | Total: 0.0% (9.4ms) | Samples: 1

**Called by:**
- `onSocketNT` (1)

### `isValidAddress`
`/app/src/email.ts:51` | Self: 0.0% (9.3ms) | Total: 0.0% (10.5ms) | Samples: 1

**Called by:**
- `normalizeEmail` (1)
- `addressList` (1)

**Calls:**
- `asciiTrim` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:677` | Self: 0.0% (9.2ms) | Total: 0.0% (9.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `bound require`
`[native code]` | Self: 0.0% (9.1ms) | Total: 0.7% (263.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (9)
- `(anonymous)` (8)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `require` (77)
- `anonymous` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:142` | Self: 0.0% (9.0ms) | Total: 0.0% (22.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:190` | Self: 0.0% (9.0ms) | Total: 0.0% (9.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:273` | Self: 0.0% (8.8ms) | Total: 0.0% (8.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `toStream`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:394` | Self: 0.0% (8.8ms) | Total: 0.7% (254.4ms) | Samples: 2

**Called by:**
- `async (anonymous)` (25)

**Calls:**
- `from` (13)
- `(anonymous)` (9)
- `from` (1)

### `getCanonicalQuery`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:180` | Self: 0.0% (8.7ms) | Total: 0.0% (8.7ms) | Samples: 1

**Called by:**
- `createCanonicalRequest` (1)

### `addRequest`
`node:_http_agent:114` | Self: 0.0% (8.7ms) | Total: 0.0% (8.7ms) | Samples: 1

**Called by:**
- `ClientRequest` (1)

### `Writable`
`internal:streams/writable:173` | Self: 0.0% (8.7ms) | Total: 0.0% (27.6ms) | Samples: 3

**Called by:**
- `Collector` (10)

**Calls:**
- `value` (7)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:46` | Self: 0.0% (8.7ms) | Total: 0.0% (8.7ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:307` | Self: 0.0% (8.5ms) | Total: 0.0% (8.5ms) | Samples: 1

**Called by:**
- `async getSigningKey` (1)

### `keepSocketAlive`
`node:_http_agent:289` | Self: 0.0% (8.5ms) | Total: 0.0% (8.5ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `_unrefTimer`
`node:net:1654` | Self: 0.0% (8.4ms) | Total: 0.0% (34.0ms) | Samples: 2

**Called by:**
- `_write` (5)

**Calls:**
- `refresh` (3)

### `prepareValue`
`/app/node_modules/pg/lib/utils.js:77` | Self: 0.0% (8.4ms) | Total: 0.0% (8.4ms) | Samples: 1

**Called by:**
- `writeValues` (1)

### `_writeHead`
`node:_http_server:1330` | Self: 0.0% (8.3ms) | Total: 0.1% (65.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (11)

**Calls:**
- `setHeader` (3)
- `setHeader` (2)
- `setHeader` (2)
- `setHeader` (1)
- `setHeader` (1)
- `setHeader` (1)

### `async collectBody`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:20` | Self: 0.0% (8.3ms) | Total: 0.6% (243.9ms) | Samples: 1

**Called by:**
- `async deserializeResponse` (23)

**Calls:**
- `async (anonymous)` (20)
- `async (anonymous)` (2)

### `prepareValue`
`/app/node_modules/pg/lib/utils.js:79` | Self: 0.0% (8.2ms) | Total: 0.0% (8.2ms) | Samples: 2

**Called by:**
- `arrayString` (2)

### `(anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` | Self: 0.0% (8.1ms) | Total: 0.0% (8.1ms) | Samples: 2

**Called by:**
- `map` (2)

### `async (anonymous)`
`/app/src/server.ts:131` | Self: 0.0% (8.1ms) | Total: 13.4% (4.84s) | Samples: 1

**Called by:**
- `(anonymous)` (653)

**Calls:**
- `async enqueue` (652)

### `/[!'()*]/g`
`[native code]` | Self: 0.0% (8.0ms) | Total: 0.0% (8.0ms) | Samples: 3

**Called by:**
- `escapeUri` (2)
- `extendedEncodeURIComponent` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:230` | Self: 0.0% (8.0ms) | Total: 0.1% (54.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `toBase64$1` (2)

### `emit`
`node:events:91` | Self: 0.0% (7.9ms) | Total: 0.0% (7.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:378` | Self: 0.0% (7.9ms) | Total: 0.0% (16.1ms) | Samples: 2

**Called by:**
- `async enqueue` (2)
- `async rateLimit` (2)

**Calls:**
- `getBlockingTimeoutInMs` (1)
- `getBlockingTimeoutInMs` (1)

### `getTransformedHeaders`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:33` | Self: 0.0% (7.9ms) | Total: 0.0% (7.9ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async handle`
`/app/src/server.ts` | Self: 0.0% (7.9ms) | Total: 0.0% (7.9ms) | Samples: 1

**Called by:**
- `async handle` (1)

### `async region`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:633` | Self: 0.0% (7.8ms) | Total: 0.0% (10.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)
- `async configProvider` (1)
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (2)

### `writeOrBuffer`
`internal:streams/writable:274` | Self: 0.0% (7.7ms) | Total: 0.0% (7.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `query`
`/app/node_modules/pg/lib/client.js:783` | Self: 0.0% (7.7ms) | Total: 10.8% (3.91s) | Samples: 1

**Called by:**
- `(anonymous)` (359)

**Calls:**
- `_pulseQueryQueue` (357)
- `_pulseQueryQueue` (1)

### `addressList`
`/app/src/email.ts:84` | Self: 0.0% (7.7ms) | Total: 0.0% (7.7ms) | Samples: 1

**Called by:**
- `normalizeEmail` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:13` | Self: 0.0% (7.4ms) | Total: 0.0% (7.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:686` | Self: 0.0% (7.4ms) | Total: 0.0% (16.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `assign` (1)

### `removeSocket`
`node:_http_agent:234` | Self: 0.0% (7.4ms) | Total: 0.0% (23.7ms) | Samples: 3

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `splice` (1)

### `URL`
`[native code]` | Self: 0.0% (7.3ms) | Total: 0.0% (7.3ms) | Samples: 3

**Called by:**
- `parseUrl` (2)
- `parse` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:96` | Self: 0.0% (7.3ms) | Total: 0.0% (25.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (1)
- `async configProvider` (1)
- `async sign` (1)

**Calls:**
- `async (anonymous)` (1)

### `CommandRef`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` | Self: 0.0% (7.3ms) | Total: 0.0% (7.3ms) | Samples: 1

**Called by:**
- `PutObjectCommand` (1)

### `(anonymous)`
`internal:streams/readable:579` | Self: 0.0% (7.3ms) | Total: 0.0% (7.3ms) | Samples: 1

**Called by:**
- `_dump` (1)

### `get`
`internal:streams/duplex` | Self: 0.0% (7.2ms) | Total: 0.0% (7.2ms) | Samples: 1

**Called by:**
- `onResponseFinishHandleSocket` (1)

### `applyToStack`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:413` | Self: 0.0% (7.2ms) | Total: 0.0% (33.2ms) | Samples: 1

**Called by:**
- `use` (3)

**Calls:**
- `add` (2)

### `endReadable`
`internal:streams/readable:895` | Self: 0.0% (7.1ms) | Total: 0.0% (7.1ms) | Samples: 3

**Called by:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `isValidAddress`
`/app/src/email.ts:69` | Self: 0.0% (7.1ms) | Total: 0.0% (7.1ms) | Samples: 2

**Called by:**
- `normalizeEmail` (2)

### `finally`
`[native code]` | Self: 0.0% (7.0ms) | Total: 0.0% (7.0ms) | Samples: 1

**Called by:**
- `race` (1)

### `async digest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:473` | Self: 0.0% (7.0ms) | Total: 0.3% (112.8ms) | Samples: 3

**Called by:**
- `hmac` (3)
- `async getSignature` (3)
- `async (anonymous)` (3)
- `async createStringToSign` (1)

**Calls:**
- `get buffer` (4)
- `Uint8Array` (3)

### `async deserializeResponse`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1374` | Self: 0.0% (7.0ms) | Total: 1.8% (654.4ms) | Samples: 1

**Called by:**
- `async (anonymous)` (74)

**Calls:**
- `async deserializeResponse` (70)
- `asyncFunctionDrive` (3)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:323` | Self: 0.0% (6.9ms) | Total: 0.0% (6.9ms) | Samples: 2

**Called by:**
- `async fn` (2)

### `ReadableState`
`internal:streams/readable:34` | Self: 0.0% (6.9ms) | Total: 0.0% (8.2ms) | Samples: 2

**Called by:**
- `Readable` (3)

**Calls:**
- `getHighWaterMark` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:225` | Self: 0.0% (6.9ms) | Total: 0.0% (6.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `validateFunction`
`internal:validators:32` | Self: 0.0% (6.9ms) | Total: 0.0% (6.9ms) | Samples: 1

**Called by:**
- `checkListener` (1)

### `isDnsCompatibleBucketName`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:86` | Self: 0.0% (6.8ms) | Total: 0.0% (6.8ms) | Samples: 1

**Called by:**
- `async resolveParamsForS3` (1)

### `Socket`
`node:net:1062` | Self: 0.0% (6.8ms) | Total: 0.0% (6.8ms) | Samples: 2

**Called by:**
- `Socket` (1)
- `createConnection` (1)

### `(anonymous)`
`internal:streams/readable:420` | Self: 0.0% (6.7ms) | Total: 0.0% (6.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Command`
`/app/node_modules/ioredis/built/Command.js:63` | Self: 0.0% (6.7ms) | Total: 0.0% (6.7ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:809` | Self: 0.0% (6.7ms) | Total: 0.0% (6.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async configProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:111` | Self: 0.0% (6.7ms) | Total: 0.0% (6.7ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `_flush`
`node:_http_outgoing:687` | Self: 0.0% (6.6ms) | Total: 5.4% (1.97s) | Samples: 1

**Called by:**
- `onSocketNT` (241)

**Calls:**
- `_flushOutput` (238)
- `_flushOutput` (2)

### `resolve`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:273` | Self: 0.0% (6.5ms) | Total: 0.2% (103.3ms) | Samples: 2

**Called by:**
- `send` (6)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `fromList`
`internal:streams/readable:887` | Self: 0.0% (6.5ms) | Total: 0.0% (6.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async userAgentAppId`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:272` | Self: 0.0% (6.4ms) | Total: 0.0% (25.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `asyncFunctionDrive` (1)

### `collectBody`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:429` | Self: 0.0% (6.4ms) | Total: 0.0% (6.4ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:185` | Self: 0.0% (6.3ms) | Total: 0.0% (6.3ms) | Samples: 4

**Called by:**
- `(anonymous)` (4)

### `clearTimeout`
`[native code]` | Self: 0.0% (6.2ms) | Total: 0.0% (6.2ms) | Samples: 2

**Called by:**
- `_pulseQueue` (1)
- `clearTimeout` (1)

### `_destroy`
`node:_http_incoming:212` | Self: 0.0% (6.1ms) | Total: 0.0% (6.1ms) | Samples: 1

**Called by:**
- `_destroy` (1)

### `Error`
`[native code]` | Self: 0.0% (6.1ms) | Total: 0.0% (6.1ms) | Samples: 3

**Called by:**
- `async (anonymous)` (3)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:521` | Self: 0.0% (6.1ms) | Total: 0.0% (13.1ms) | Samples: 1

**Called by:**
- `async signRequest` (2)
- `(anonymous)` (1)

**Calls:**
- `async resolvedCredentials` (2)

### `onResponseFinishHandleSocket`
`node:_http_server:1483` | Self: 0.0% (6.0ms) | Total: 0.0% (13.3ms) | Samples: 3

**Called by:**
- `emitResponseFinish` (4)

**Calls:**
- `get` (1)

### `exec`
`[native code]` | Self: 0.0% (5.9ms) | Total: 0.0% (5.9ms) | Samples: 1

**Called by:**
- `addCommandComplete` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:66` | Self: 0.0% (5.9ms) | Total: 0.7% (254.2ms) | Samples: 1

**Called by:**
- `forEach` (23)

**Calls:**
- `add` (13)
- `cloneObject` (4)
- `add` (3)
- `add` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:695` | Self: 0.0% (5.9ms) | Total: 0.0% (5.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`node:_http_agent:61` | Self: 0.0% (5.9ms) | Total: 0.1% (39.3ms) | Samples: 1

**Called by:**
- `emit` (5)

**Calls:**
- `keepSocketAlive` (3)
- `keepSocketAlive` (1)

### `DataView`
`[native code]` | Self: 0.0% (5.8ms) | Total: 0.0% (5.8ms) | Samples: 2

**Called by:**
- `async digest` (2)

### `endReadable`
`internal:streams/readable` | Self: 0.0% (5.7ms) | Total: 0.0% (5.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `schemaLogFilter`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` | Self: 0.0% (5.7ms) | Total: 0.0% (5.7ms) | Samples: 1

**Called by:**
- `bound schemaLogFilter` (1)

### `(anonymous)`
`internal:streams/readable:339` | Self: 0.0% (5.7ms) | Total: 0.0% (17.1ms) | Samples: 1

**Called by:**
- `flow` (3)
- `resume_` (1)

**Calls:**
- `endReadable` (1)
- `endReadable` (1)
- `endReadable` (1)

### `skipRaw`
`/app/src/htmltotext.ts:47` | Self: 0.0% (5.7ms) | Total: 0.0% (5.7ms) | Samples: 1

**Called by:**
- `htmlToText` (1)

### `(anonymous)`
`internal:streams/readable:351` | Self: 0.0% (5.5ms) | Total: 0.1% (48.9ms) | Samples: 2

**Called by:**
- `resume_` (4)
- `maybeReadMore_` (3)
- `flow` (1)

**Calls:**
- `read` (3)
- `_read` (1)
- `_read` (1)
- `_read` (1)

### `throwIfServerHeadersSent`
`node:_http_server:1742` | Self: 0.0% (5.4ms) | Total: 0.0% (5.4ms) | Samples: 1

**Called by:**
- `setHeader` (1)

### `async (anonymous)`
`/app/src/server.ts:133` | Self: 0.0% (5.4ms) | Total: 4.8% (1.74s) | Samples: 1

**Called by:**
- `async withDeps` (167)

**Calls:**
- `async (anonymous)` (166)

### `getCanonicalHeaders`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:353` | Self: 0.0% (5.4ms) | Total: 0.0% (8.4ms) | Samples: 1

**Called by:**
- `async signRequest` (2)

**Calls:**
- `/^ \| $/g` (1)

### `emit`
`node:events:118` | Self: 0.0% (5.3ms) | Total: 0.4% (170.5ms) | Samples: 1

**Called by:**
- `finish` (16)
- `endReadableNT` (12)
- `afterConnect` (5)

**Calls:**
- `onceWrapper` (8)
- `responseOnEnd` (7)
- `(anonymous)` (4)
- `connect` (3)
- `onfinish` (3)
- `onceWrapper` (3)
- `(anonymous)` (2)
- `onend` (1)
- `(anonymous)` (1)

### `ClientRequest`
`node:_http_client:93` | Self: 0.0% (5.2ms) | Total: 0.1% (60.5ms) | Samples: 1

**Called by:**
- `request` (6)

**Calls:**
- `assign` (3)
- `setPrototypeDirect` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:694` | Self: 0.0% (5.2ms) | Total: 0.0% (5.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:192` | Self: 0.0% (5.2ms) | Total: 0.0% (5.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `applyToStack` (1)

### `cloneQueryConfig`
`/app/node_modules/pg/lib/utils.js:175` | Self: 0.0% (5.1ms) | Total: 0.2% (90.9ms) | Samples: 1

**Called by:**
- `normalizeQueryConfig` (7)

**Calls:**
- `getOwnPropertyDescriptors` (6)

### `EventEmitter`
`node:events:13` | Self: 0.0% (5.1ms) | Total: 0.0% (5.1ms) | Samples: 3

**Called by:**
- `Stream` (3)

### `parserOnMessageComplete`
`node:_http_common:52` | Self: 0.0% (5.0ms) | Total: 0.0% (5.0ms) | Samples: 1

**Called by:**
- `execute` (1)

### `(anonymous)`
`internal:streams/readable:489` | Self: 0.0% (5.0ms) | Total: 0.0% (29.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `emit` (3)

### `end`
`node:_http_outgoing:648` | Self: 0.0% (5.0ms) | Total: 0.2% (78.1ms) | Samples: 1

**Called by:**
- `writeBody` (9)

**Calls:**
- `write_` (7)
- `write_` (1)

### `read`
`node:net:1484` | Self: 0.0% (5.0ms) | Total: 0.0% (6.0ms) | Samples: 2

**Called by:**
- `maybeReadMore_` (2)
- `flow` (1)

**Calls:**
- `resume` (1)

### `IncomingMessage`
`node:_http_incoming:29` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 2

**Called by:**
- `parserOnHeadersComplete` (1)
- `onNodeHTTPRequest` (1)

### `Socket`
`node:_http_server:933` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 1

**Called by:**
- `onServerConnection` (1)

### `Readable`
`internal:streams/readable:162` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 1

**Called by:**
- `from` (1)

### `setPrototypeDirect`
`[native code]` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 3

**Called by:**
- `ClientRequest` (2)
- `ClientRequest` (1)

### `async handle`
`/app/src/server.ts:186` | Self: 0.0% (4.9ms) | Total: 8.5% (3.07s) | Samples: 1

**Called by:**
- `async handle` (302)

**Calls:**
- `async withDeps` (301)

### `doConnect`
`[native code]` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 4

**Called by:**
- `kConnectDispatch` (4)

### `_release`
`/app/node_modules/pg-pool/index.js` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `toUtf8$1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:86` | Self: 0.0% (4.8ms) | Total: 0.3% (141.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (14)

**Calls:**
- `get buffer` (7)
- `fromArrayBuffer` (4)
- `fromArrayBuffer` (1)

### `isEncoding`
`[native code]` | Self: 0.0% (4.8ms) | Total: 0.0% (4.8ms) | Samples: 1

**Called by:**
- `_write` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` | Self: 0.0% (4.8ms) | Total: 0.0% (4.8ms) | Samples: 2

**Called by:**
- `emit` (2)

### `String`
`[native code]` | Self: 0.0% (4.8ms) | Total: 0.0% (4.8ms) | Samples: 1

**Called by:**
- `renderNativeHeaders` (1)

### `_onceWrap`
`node:events:252` | Self: 0.0% (4.8ms) | Total: 0.0% (4.8ms) | Samples: 1

**Called by:**
- `once` (1)

### `(anonymous)`
`node:_http_server:1955` | Self: 0.0% (4.7ms) | Total: 0.0% (4.7ms) | Samples: 3

**Called by:**
- `sendJson` (3)

### `/^(GETSET\|LPUSH\|MSET\|PFA\|PSETEX\|PUBLISH\|RPUSH\|SADD\|SET\|SPUBLISH\|XADD\|ZADD)/i`
`[native code]` | Self: 0.0% (4.7ms) | Total: 0.0% (4.7ms) | Samples: 1

**Called by:**
- `sanitizeArgs` (1)

### `isPrototypeOf`
`[native code]` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 2

**Called by:**
- `[Symbol.hasInstance]` (2)

### `size`
`/app/node_modules/denque/index.js` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`node:_http_server:1963` | Self: 0.0% (4.6ms) | Total: 0.4% (158.5ms) | Samples: 1

**Called by:**
- `sendJson` (19)

**Calls:**
- `renderNativeHeaders` (8)
- `renderNativeHeaders` (5)
- `renderNativeHeaders` (2)
- `renderNativeHeaders` (1)
- `renderNativeHeaders` (1)
- `renderNativeHeaders` (1)

### `isReadableStream`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 1

**Called by:**
- `streamCollector` (1)

### `removeListener`
`node:events:263` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `renderNativeHeaders`
`node:_http_server:1382` | Self: 0.0% (4.4ms) | Total: 0.0% (14.2ms) | Samples: 3

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `isArray` (2)

### `normalizeEmail`
`/app/src/email.ts` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 2

**Called by:**
- `validate` (2)

### `_storeHeader`
`node:_http_outgoing:263` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 1

**Called by:**
- `_implicitHeader` (1)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:523` | Self: 0.0% (4.4ms) | Total: 0.6% (223.7ms) | Samples: 1

**Called by:**
- `async deserializeResponse` (23)

**Calls:**
- `async deserializeHttpMessage` (5)
- `async deserializeHttpMessage` (5)
- `async deserializeHttpMessage` (4)
- `async deserializeHttpMessage` (4)
- `async deserializeHttpMessage` (2)
- `async deserializeHttpMessage` (1)
- `async deserializeHttpMessage` (1)

### `resolveMiddlewareWithContext`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:600` | Self: 0.0% (4.3ms) | Total: 0.1% (38.6ms) | Samples: 2

**Called by:**
- `send` (5)

**Calls:**
- `bound ` (3)

### `getBlockingTimeoutInMs`
`/app/node_modules/ioredis/built/Redis.js:484` | Self: 0.0% (4.3ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `cloneQuery`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:65` | Self: 0.0% (4.3ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `clone` (1)

### `ReadableState`
`internal:streams/readable` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `Readable` (1)

### `initPromise`
`/app/node_modules/ioredis/built/Command.js` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `Command` (1)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `async signRequest` (1)

### `hasOwn`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 1

**Called by:**
- `async deserializeResponse` (1)

### `createCanonicalRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:243` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 1

**Called by:**
- `async signRequest` (1)

### `setSocketKeepAlive`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/readable:372` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 1

**Called by:**
- `flow` (1)

### `emit`
`node:events:103` | Self: 0.0% (4.0ms) | Total: 10.5% (3.79s) | Samples: 2

**Called by:**
- `onNodeHTTPRequest` (333)
- `onFree` (54)
- `(anonymous)` (6)

**Calls:**
- `(anonymous)` (333)
- `(anonymous)` (29)
- `(anonymous)` (7)
- `(anonymous)` (6)
- `onunpipe` (6)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/writable:377` | Self: 0.0% (4.0ms) | Total: 0.0% (4.9ms) | Samples: 1

**Called by:**
- `afterWrite` (2)

**Calls:**
- `bound onFinish` (1)

### `parse`
`/app/node_modules/pg-protocol/dist/parser.js:37` | Self: 0.0% (3.9ms) | Total: 0.1% (64.5ms) | Samples: 1

**Called by:**
- `emit` (10)

**Calls:**
- `handlePacket` (4)
- `handlePacket` (2)
- `handlePacket` (1)
- `handlePacket` (1)
- `handlePacket` (1)

### `WritableState`
`internal:streams/writable:135` | Self: 0.0% (3.9ms) | Total: 0.0% (3.9ms) | Samples: 1

**Called by:**
- `Writable` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:95` | Self: 0.0% (3.9ms) | Total: 0.7% (278.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (27)

**Calls:**
- `async (anonymous)` (18)
- `async (anonymous)` (7)

### `convertHttpAuthSchemesToMap`
`/app/node_modules/@smithy/core/dist-cjs/index.js:32` | Self: 0.0% (3.9ms) | Total: 0.0% (3.9ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `toWritable`
`/app/node_modules/ioredis/built/Command.js:161` | Self: 0.0% (3.9ms) | Total: 0.0% (3.9ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `getBlockingTimeoutInMs`
`/app/node_modules/ioredis/built/Redis.js` | Self: 0.0% (3.8ms) | Total: 0.0% (3.8ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `extendedEncodeURIComponent`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:24` | Self: 0.0% (3.8ms) | Total: 0.0% (17.0ms) | Samples: 1

**Called by:**
- `map` (4)

**Calls:**
- `encodeURIComponent` (2)
- `/[!'()*]/g` (1)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:720` | Self: 0.0% (3.8ms) | Total: 0.0% (3.8ms) | Samples: 1

**Called by:**
- `map` (1)

### `_write`
`node:net` | Self: 0.0% (3.8ms) | Total: 0.0% (3.8ms) | Samples: 1

**Called by:**
- `writeOrBuffer` (1)

### `isBlob`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1074` | Self: 0.0% (3.7ms) | Total: 0.0% (3.7ms) | Samples: 1

**Called by:**
- `streamCollector` (1)

### `(anonymous)`
`node:_http_server:1930` | Self: 0.0% (3.7ms) | Total: 0.0% (3.7ms) | Samples: 1

**Called by:**
- `sendJson` (1)

### `escapeUri`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1096` | Self: 0.0% (3.7ms) | Total: 0.0% (16.2ms) | Samples: 1

**Called by:**
- `getCanonicalQuery` (3)
- `getCanonicalQuery` (1)
- `buildQueryString` (1)

**Calls:**
- `/[!'()*]/g` (2)
- `encodeURIComponent` (2)

### `Query`
`/app/node_modules/pg/lib/query.js:22` | Self: 0.0% (3.7ms) | Total: 0.0% (3.7ms) | Samples: 1

**Called by:**
- `query` (1)

### `formatDate`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:290` | Self: 0.0% (3.6ms) | Total: 0.1% (47.7ms) | Samples: 1

**Called by:**
- `async signRequest` (5)

**Calls:**
- `iso8601` (3)
- `iso8601` (1)

### `__lookupGetter__`
`[native code]` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 1

**Called by:**
- `get` (1)

### `Readable`
`internal:streams/readable` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 1

**Called by:**
- `from` (1)

### `Stream`
`internal:streams/legacy:4` | Self: 0.0% (3.6ms) | Total: 0.3% (143.5ms) | Samples: 1

**Called by:**
- `Readable` (16)
- `OutgoingMessage` (1)
- `Writable` (1)

**Calls:**
- `EventEmitter` (9)
- `EventEmitter` (3)
- `EventEmitter` (3)
- `EventEmitter` (1)
- `EventEmitter` (1)

### `responseOnEnd`
`node:_http_client:462` | Self: 0.0% (3.6ms) | Total: 0.0% (14.8ms) | Samples: 1

**Called by:**
- `emit` (7)

**Calls:**
- `responseKeepAlive` (6)

### `initPromise`
`/app/node_modules/ioredis/built/Command.js:292` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 1

**Called by:**
- `Command` (1)

### `sin`
`[native code]` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `fromArrayBuffer`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 1

**Called by:**
- `toUtf8$1` (1)

### `removeSocket`
`node:_http_agent:226` | Self: 0.0% (3.5ms) | Total: 0.1% (37.6ms) | Samples: 2

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `getName` (3)
- `getName` (1)
- `getName` (1)

### `emitResponseFinish`
`node:_http_server:1471` | Self: 0.0% (3.4ms) | Total: 0.2% (73.1ms) | Samples: 1

**Called by:**
- `emit` (3)

**Calls:**
- `(anonymous)` (2)

### `schemaLogFilter`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:582` | Self: 0.0% (3.4ms) | Total: 0.4% (155.5ms) | Samples: 1

**Called by:**
- `bound schemaLogFilter` (21)

**Calls:**
- `next` (17)
- `generatorResume` (3)

### `addCommandComplete`
`/app/node_modules/pg/lib/result.js:42` | Self: 0.0% (3.4ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `handleCommandComplete` (1)

### `Readable`
`internal:streams/readable:144` | Self: 0.0% (3.4ms) | Total: 0.0% (3.4ms) | Samples: 1

**Called by:**
- `IncomingMessage` (1)

### `async deserializeResponse`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `removeSocket`
`node:_http_agent:243` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async rateLimit`
`/app/src/deps.ts:60` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 2

**Called by:**
- `async rateLimit` (1)
- `(anonymous)` (1)

### `structIterator`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:513` | Self: 0.0% (3.3ms) | Total: 0.0% (4.2ms) | Samples: 3

**Called by:**
- `generatorResume` (4)

**Calls:**
- `next` (1)

### `addCString`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:42` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 1

**Called by:**
- `bind` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:862` | Self: 0.0% (3.3ms) | Total: 0.1% (47.7ms) | Samples: 1

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `defaultEndpointResolver` (5)
- `defaultEndpointResolver` (1)

### `ref`
`/app/node_modules/pg/lib/connection.js:210` | Self: 0.0% (3.2ms) | Total: 0.0% (13.7ms) | Samples: 2

**Called by:**
- `ref` (4)

**Calls:**
- `ref` (2)

### `data`
`node:net:862` | Self: 0.0% (3.2ms) | Total: 0.0% (3.2ms) | Samples: 1

### `async withDeps`
`/app/src/server.ts:102` | Self: 0.0% (3.2ms) | Total: 13.1% (4.75s) | Samples: 1

**Called by:**
- `async withDeps` (466)

**Calls:**
- `(anonymous)` (253)
- `async (anonymous)` (167)
- `async rateLimit` (43)
- `(anonymous)` (2)

### `Query`
`/app/node_modules/pg/lib/query.js:12` | Self: 0.0% (3.2ms) | Total: 0.4% (154.2ms) | Samples: 1

**Called by:**
- `query` (14)

**Calls:**
- `normalizeQueryConfig` (13)

### `_destroy`
`internal:streams/destroy:45` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `destroy` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:39` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async getSignature`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:548` | Self: 0.0% (3.1ms) | Total: 0.3% (111.2ms) | Samples: 1

**Called by:**
- `async signRequest` (10)
- `(anonymous)` (5)

**Calls:**
- `async getSignature` (9)
- `async digest` (3)
- `toHex` (2)

### `resume`
`node:net:1450` | Self: 0.0% (3.1ms) | Total: 0.0% (18.2ms) | Samples: 1

**Called by:**
- `readStart` (2)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:168` | Self: 0.0% (3.0ms) | Total: 0.3% (122.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (9)

**Calls:**
- `defaultEndpointResolver` (8)

### `getName`
`node:_http_agent:95` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_addHeaderLines`
`node:_http_incoming:240` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `parserOnHeadersComplete` (1)

### `addCString`
`/app/node_modules/pg-protocol/dist/buffer-writer.js` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `bind` (1)

### `/^ \| $/g`
`[native code]` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `getCanonicalHeaders` (1)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `applyToStack` (1)

### `(anonymous)`
`node:_http_server:614` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `slice`
`[native code]` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 1

**Called by:**
- `flush` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 1

**Called by:**
- `ClassBuilder` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:23` | Self: 0.0% (2.9ms) | Total: 4.2% (1.52s) | Samples: 1

**Called by:**
- `(anonymous)` (162)

**Calls:**
- `cloneObject` (86)
- `async deserializeResponse` (74)
- `async deserializeResponse` (1)

### `writeBody`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:214` | Self: 0.0% (2.9ms) | Total: 0.2% (81.1ms) | Samples: 1

**Called by:**
- `async writeRequestBody` (10)

**Calls:**
- `end` (9)

### `write`
`/app/node_modules/ioredis/built/resp/decoder.js:91` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `write`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:961` | Self: 0.0% (2.8ms) | Total: 0.1% (39.7ms) | Samples: 1

**Called by:**
- `async serializeRequest` (4)
- `async serializeRequest` (2)

**Calls:**
- `of` (5)

### `_addHeaderLine`
`node:_http_incoming:373` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `get` (1)

### `(anonymous)`
`node:_http_server:2204` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `emitCloseNT` (1)

### `streamCollector`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1600` | Self: 0.0% (2.8ms) | Total: 1.1% (416.1ms) | Samples: 1

**Called by:**
- `collectBody` (43)
- `async (anonymous)` (20)

**Calls:**
- `Promise` (62)

### `onNodeHTTPRequest`
`node:_http_server:604` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 1

### `_read`
`node:net:1488` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `deserializeMetadata`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:134` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 1

**Called by:**
- `async deserializeResponse` (1)

### `IncomingMessage`
`node:_http_incoming:37` | Self: 0.0% (2.6ms) | Total: 0.2% (98.8ms) | Samples: 1

**Called by:**
- `parserOnHeadersComplete` (12)
- `onNodeHTTPRequest` (1)

**Calls:**
- `Readable` (9)
- `Readable` (2)
- `Readable` (1)

### `storeHeader`
`node:_http_outgoing:367` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `processHeader` (1)

### `returnReply`
`/app/node_modules/ioredis/built/DataHandler.js:76` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `dispatch` (1)

### `drainOnreadTail`
`node:net` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `resume` (1)

### `constructStack`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:95` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `concat` (1)

### `ConnectionParameters`
`/app/node_modules/pg/lib/connection-parameters.js:127` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `Client` (1)

### `newClient`
`/app/node_modules/pg-pool/index.js:241` | Self: 0.0% (2.5ms) | Total: 0.0% (6.2ms) | Samples: 1

**Called by:**
- `connect` (3)

**Calls:**
- `Client` (2)

### `fromString`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `fromUtf8$1` (1)

### `_write`
`internal:streams/writable:225` | Self: 0.0% (2.5ms) | Total: 0.0% (7.4ms) | Samples: 2

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `isEncoding` (1)

### `get`
`internal:streams/writable` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/readable:183` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `parserOnMessageComplete` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:77` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `OutgoingMessage`
`node:_http_outgoing` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `ClientRequest` (1)

### `bound `
`[native code]` | Self: 0.0% (2.5ms) | Total: 0.0% (34.2ms) | Samples: 1

**Called by:**
- `resolveMiddlewareWithContext` (3)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `_read`
`node:net` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `checkIsHttpToken`
`internal:validators:4` | Self: 0.0% (2.5ms) | Total: 0.0% (30.8ms) | Samples: 1

**Called by:**
- `ClientRequest` (4)

**Calls:**
- ``/^[\^_`a-zA-Z\-0-9!#$%&'*+.\|~]+$/`` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:294` | Self: 0.0% (2.4ms) | Total: 0.7% (280.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (27)
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (27)

### `getAllAliases`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:11` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `maybeReadMore`
`internal:streams/readable:406` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `addChunk` (1)

### `propertiesExtractor`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:839` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:220` | Self: 0.0% (2.3ms) | Total: 0.0% (9.3ms) | Samples: 1

**Called by:**
- `async resolvedCredentials` (3)

**Calls:**
- `async fn` (2)

### `async sendOne`
`/app/src/server.ts:109` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `addChunk`
`internal:streams/readable` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 1

**Called by:**
- `readableAddChunkPushObjectMode` (1)

### `async rateLimit`
`/app/src/deps.ts:61` | Self: 0.0% (2.2ms) | Total: 8.0% (2.89s) | Samples: 1

**Called by:**
- `async rateLimit` (289)

**Calls:**
- `sendCommand` (271)
- `(anonymous)` (9)
- `traceCommand` (5)
- `sendCommand` (2)
- `(anonymous)` (1)

### `_addListener`
`node:events:197` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `addListener` (1)

### `has`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `_release` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:630` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `async region` (2)

### `async writeRequestBody`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:172` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `async writeRequestBody` (1)

### `run`
`internal:async_context_frame:23` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `socketOnData` (1)
- `emit` (1)

### `EventEmitter`
`node:events:12` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `Stream` (1)

### `_unrefTimer`
`node:net:1653` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `_write` (1)

### `_pulseQueryQueue`
`/app/node_modules/pg/lib/client.js:626` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `query` (1)

### `removeListener`
`node:events:290` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `parseParameterStatusMessage`
`/app/node_modules/pg-protocol/dist/parser.js:240` | Self: 0.0% (2.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `handlePacket` (1)

### `checkContentLengthHeader`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:15` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 1

**Called by:**
- `applyToStack` (1)

### `isValidAddress`
`/app/src/email.ts:70` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 1

**Called by:**
- `normalizeEmail` (1)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:449` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `async enqueue` (1)

### `ondata`
`internal:streams/readable:462` | Self: 0.0% (1.8ms) | Total: 0.0% (28.1ms) | Samples: 2

**Called by:**
- `emit` (4)

**Calls:**
- `(anonymous)` (2)

### `Hash`
`node:crypto:168` | Self: 0.0% (1.8ms) | Total: 0.2% (88.7ms) | Samples: 1

**Called by:**
- `createHash` (5)

**Calls:**
- `Hash` (4)

### `throwIfServerHeadersSent`
`node:_http_server` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `setHeader` (1)

### `_unrefTimer`
`node:net` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `emitLookup` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async handle`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:292` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `async handle` (1)

### `/^ECHO/i`
`[native code]` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `sanitizeArgs` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:225` | Self: 0.0% (1.6ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `parserOnMessageComplete` (3)

**Calls:**
- `onEofChunk` (1)
- `onEofChunk` (1)

### `connect`
`/app/node_modules/pg-pool/index.js:203` | Self: 0.0% (1.5ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `query` (2)

**Calls:**
- `nextTick` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/Command.js:297` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `Promise` (1)

### `send`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:516` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `async putObject` (1)

### `_release`
`/app/node_modules/pg-pool/index.js:428` | Self: 0.0% (1.5ms) | Total: 0.1% (52.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (9)

**Calls:**
- `_acquireClient` (3)
- `_pulseQueue` (2)
- `_pulseQueue` (2)
- `_pulseQueue` (1)

### `async sendOne`
`/app/src/server.ts:122` | Self: 0.0% (1.4ms) | Total: 5.5% (2.00s) | Samples: 1

**Called by:**
- `async sendOne` (228)

**Calls:**
- `validate` (227)

### `socketOnDataInner`
`node:_http_client:345` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `emit` (1)

### `applyToStack`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:414` | Self: 0.0% (1.4ms) | Total: 0.0% (12.5ms) | Samples: 1

**Called by:**
- `use` (4)

**Calls:**
- `addRelativeTo` (2)
- `addRelativeTo` (1)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:355` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `async enqueue` (1)

### `onEofChunk`
`internal:streams/readable:388` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `readableAddChunkPushByteMode` (1)

### `setHeader`
`node:_http_outgoing:410` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `_writeHead` (1)

### `emit`
`node:events:114` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `onceWrapper`
`node:events:247` | Self: 0.0% (1.3ms) | Total: 0.2% (76.5ms) | Samples: 1

**Called by:**
- `emit` (5)
- `emit` (5)
- `emit` (3)

**Calls:**
- `removeListener` (5)
- `(anonymous)` (5)
- `removeListener` (2)

### `Collector`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.2% (82.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (20)

**Calls:**
- `Writable` (10)
- `Writable` (5)
- `Writable` (3)
- `Writable` (1)

### `resume`
`node:net:1455` | Self: 0.0% (1.3ms) | Total: 0.0% (14.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)
- `readStart` (1)

**Calls:**
- `restorePausedHold` (2)

### `ServerResponse`
`node:_http_server:1339` | Self: 0.0% (1.3ms) | Total: 0.0% (27.6ms) | Samples: 1

**Called by:**
- `onNodeHTTPRequest` (5)

**Calls:**
- `OutgoingMessage` (4)

### `filter`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.1% (52.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (4)
- `escapeUserAgent` (1)

**Calls:**
- `(anonymous)` (4)

### `_destroy`
`node:_http_incoming` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `_destroy` (1)

### `updateServiceEndpoint`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async serializeRequest` (1)

### `(anonymous)`
`node:_http_agent:33` | Self: 0.0% (1.2ms) | Total: 0.0% (21.8ms) | Samples: 1

**Called by:**
- `emit` (4)

**Calls:**
- `getName` (1)
- `getName` (1)
- `getName` (1)

### `write`
`/app/node_modules/ioredis/built/resp/decoder.js:95` | Self: 0.0% (1.2ms) | Total: 0.0% (3.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `_Decoder_handleDecodedValue` (1)

### `SignatureV4`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:427` | Self: 0.0% (1.2ms) | Total: 0.0% (13.4ms) | Samples: 1

**Called by:**
- `SignatureV4SignWithCredentials` (2)

**Calls:**
- `SignatureV4Base` (1)

### `forEach`
`[native code]` | Self: 0.0% (1.2ms) | Total: 1.9% (719.9ms) | Samples: 1

**Called by:**
- `cloneTo` (23)
- `cloneTo` (20)
- `getMiddlewareList` (13)
- `getMiddlewareList` (10)
- `getMiddlewareList` (9)
- `expandRelativeMiddlewareList` (5)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (23)
- `(anonymous)` (20)
- `(anonymous)` (12)
- `(anonymous)` (8)
- `(anonymous)` (6)
- `(anonymous)` (4)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/app/src/htmltotext.ts:90` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `decodeEntities` (1)

### `async insertEmails`
`/app/src/deps.ts:79` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async insertEmails` (1)

### `getHighWaterMark`
`internal:streams/state` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `ReadableState` (1)

### `indexOf`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `prepareRequest` (1)

### `(anonymous)`
`internal:streams/writable:599` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `finish` (1)

### `renderNativeHeaders`
`node:_http_server:1421` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `sanitizeArgs`
`/app/node_modules/ioredis/built/tracing.js:26` | Self: 0.0% (1.2ms) | Total: 0.0% (8.5ms) | Samples: 1

**Called by:**
- `_buildCommandContext` (4)

**Calls:**
- `/^ECHO/i` (1)
- `/^(GETSET\|LPUSH\|MSET\|PFA\|PSETEX\|PUBLISH\|RPUSH\|SADD\|SET\|SPUBLISH\|XADD\|ZADD)/i` (1)
- `/^(HSET\|HMSET\|LSET\|LINSERT)/i` (1)

### `(anonymous)`
`/app/node_modules/pg-protocol/dist/index.js:12` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `emit` (1)

### `toHex`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `defaultEndpointResolver`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `onNodeHTTPRequest`
`node:_http_server:447` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

### `bound _handleCommandComplete`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (22.2ms) | Samples: 1

**Called by:**
- `emit` (8)

**Calls:**
- `_handleCommandComplete` (7)

### `set`
`internal:streams/writable` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `onwrite` (1)

### `_addListener`
`node:events:198` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `addListener` (1)

### `flush`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:101` | Self: 0.0% (1.2ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)
- `bind` (1)

**Calls:**
- `slice` (1)

### `bound schemaLogFilter`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.6% (237.9ms) | Samples: 1

**Called by:**
- `async (anonymous)` (25)
- `async (anonymous)` (7)

**Calls:**
- `schemaLogFilter` (21)
- `schemaLogFilter` (9)
- `schemaLogFilter` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:405` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `Promise` (1)

### `shift`
`internal:fixed_queue` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (1)

### `test`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `getCanonicalHeaders` (1)

### `query`
`/app/node_modules/pg-pool/index.js:446` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async insertEmails` (1)

### `sort`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:29` | Self: 0.0% (1.2ms) | Total: 0.0% (29.5ms) | Samples: 1

**Called by:**
- `getMiddlewareList` (2)

**Calls:**
- `(anonymous)` (1)

### `asciiTrim`
`/app/src/email.ts` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `isValidAddress` (1)

### `renderNativeHeaders`
`node:_http_server:1420` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `_flush`
`node:_http_outgoing` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `onSocketNT` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/utils/Commander.js:92` | Self: 0.0% (1.1ms) | Total: 0.1% (60.2ms) | Samples: 1

**Called by:**
- `async rateLimit` (9)
- `async enqueue` (4)

**Calls:**
- `Command` (5)
- `Command` (5)
- `Command` (2)

### `setHeader`
`node:_http_outgoing:406` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `_writeHead` (1)

### `resetBuffer`
`internal:streams/writable:155` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `WritableState` (1)

### `responseKeepAlive`
`node:_http_client:443` | Self: 0.0% (1.1ms) | Total: 0.0% (11.2ms) | Samples: 1

**Called by:**
- `responseOnEnd` (6)

**Calls:**
- `(anonymous)` (5)

### `initialize`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `tickOnSocket` (1)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:378` | Self: 0.0% (1.1ms) | Total: 0.5% (199.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (25)

**Calls:**
- `_release` (9)
- `_release` (8)
- `_release` (2)
- `_release` (2)
- `_release` (2)
- `_release` (1)

### `InvokeStoreBase`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `InvokeStoreSingle` (1)

### `isURLInstance`
`node:_http_client` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `ClientRequest` (1)

### `advanceResponsePipeline`
`node:_http_server:1596` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `emitResponseFinish` (1)

### `emitReadable`
`internal:streams/readable:394` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `addChunk` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:199` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `find` (1)

### `bound _handleReadyForQuery`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.8% (290.3ms) | Samples: 1

**Called by:**
- `emit` (45)

**Calls:**
- `_handleReadyForQuery` (32)
- `_handleReadyForQuery` (11)
- `_handleReadyForQuery` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:122` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `addRequest`
`node:_http_agent:121` | Self: 0.0% (1.1ms) | Total: 0.2% (85.4ms) | Samples: 1

**Called by:**
- `ClientRequest` (3)

**Calls:**
- `copyDataProperties` (2)

### `Number`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `hasHeader`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:81` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `normalizeEmail`
`/app/src/email.ts:161` | Self: 0.0% (1.1ms) | Total: 0.1% (44.5ms) | Samples: 1

**Called by:**
- `validate` (6)

**Calls:**
- `addressList` (2)
- `addressList` (2)
- `addressList` (1)

### `(anonymous)`
`node:_http_outgoing` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `checkInvalidHeaderChar` (1)

### `toRow`
`/app/src/server.ts` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `setBuffer`
`/app/node_modules/pg-protocol/dist/buffer-reader.js:13` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `handlePacket` (1)

### `bind`
`/app/node_modules/pg-protocol/dist/serializer.js:102` | Self: 0.0% (1.1ms) | Total: 0.7% (283.3ms) | Samples: 1

**Called by:**
- `bind` (30)

**Calls:**
- `writeValues` (18)
- `writeValues` (11)

### `bound onwrite`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (3.2ms) | Samples: 1

**Called by:**
- `_write` (3)

**Calls:**
- `onwrite` (1)
- `onwrite` (1)

### `async configProvider`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:106` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async insertEmails`
`/app/src/deps.ts:78` | Self: 0.0% (1.0ms) | Total: 0.1% (57.1ms) | Samples: 1

**Called by:**
- `async insertEmails` (10)
- `(anonymous)` (1)

**Calls:**
- `query` (7)
- `query` (2)
- `query` (1)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:724` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `map` (1)

### `(anonymous)`
`/app/node_modules/@ioredis/commands/built/index.js:17` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `callWriteHeadIfObservable`
`node:_http_server:2244` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `join`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `getCanonicalQuery` (1)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:726` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `map` (1)

### `flow`
`internal:streams/readable:604` | Self: 0.0% (1.0ms) | Total: 0.2% (96.3ms) | Samples: 1

**Called by:**
- `emitReadable_` (13)
- `resume_` (12)

**Calls:**
- `(anonymous)` (12)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `read` (1)

### `validateLookupOptions`
`node:dns:178` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `lookup` (1)

### `connect`
`node:net:1261` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `createSocket` (1)

### `pushDataToSocket`
`node:net:360` | Self: 0.0% (1.0ms) | Total: 6.6% (2.38s) | Samples: 1

**Called by:**
- `data` (273)

**Calls:**
- `readableAddChunkPushByteMode` (272)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:271` | Self: 0.0% (1.0ms) | Total: 0.5% (181.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (17)

**Calls:**
- `next` (15)
- `generatorResume` (2)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1358` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `connect`
`/app/node_modules/pg/lib/connection.js:68` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_connect` (1)

### `(anonymous)`
`internal:streams/readable:360` | Self: 0.0% (1.0ms) | Total: 0.0% (7.5ms) | Samples: 1

**Called by:**
- `flow` (2)

**Calls:**
- `fromList` (1)

### `_storeHeader`
`node:_http_outgoing:262` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `_implicitHeader` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:116` | Self: 0.0% (992us) | Total: 0.0% (992us) | Samples: 1

**Called by:**
- `forEach` (1)

### `removeSocket`
`node:_http_agent` | Self: 0.0% (991us) | Total: 0.0% (991us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `addRelativeTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:215` | Self: 0.0% (987us) | Total: 0.0% (987us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `EventEmitter`
`node:events` | Self: 0.0% (986us) | Total: 0.0% (986us) | Samples: 1

**Called by:**
- `Stream` (1)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:516` | Self: 0.0% (984us) | Total: 0.0% (984us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `HttpRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` | Self: 0.0% (979us) | Total: 0.0% (979us) | Samples: 1

**Called by:**
- `async serializeRequest` (1)

### `onResponseFinishHandleSocket`
`node:_http_server:1491` | Self: 0.0% (977us) | Total: 0.0% (977us) | Samples: 1

**Called by:**
- `emitResponseFinish` (1)

### `skipBalanced`
`/app/src/htmltotext.ts:60` | Self: 0.0% (970us) | Total: 0.0% (970us) | Samples: 1

**Called by:**
- `htmlToText` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` | Self: 0.0% (964us) | Total: 0.0% (964us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `add`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:150` | Self: 0.0% (963us) | Total: 0.0% (963us) | Samples: 1

**Called by:**
- `applyToStack` (1)

### `/^(HSET\|HMSET\|LSET\|LINSERT)/i`
`[native code]` | Self: 0.0% (960us) | Total: 0.0% (960us) | Samples: 1

**Called by:**
- `sanitizeArgs` (1)

### `parse`
`/app/node_modules/pg-protocol/dist/parser.js:27` | Self: 0.0% (940us) | Total: 0.0% (940us) | Samples: 1

**Called by:**
- `emit` (1)

### `bound onFinish`
`[native code]` | Self: 0.0% (939us) | Total: 0.0% (939us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `structIterator`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:509` | Self: 0.0% (935us) | Total: 0.0% (935us) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:426` | Self: 0.0% (930us) | Total: 2.1% (788.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (77)

**Calls:**
- `async (anonymous)` (76)

### `bind`
`[native code]` | Self: 0.0% (923us) | Total: 0.0% (923us) | Samples: 1

**Called by:**
- `resolveMiddleware` (1)

### `buildEml`
`/app/src/email.ts:194` | Self: 0.0% (918us) | Total: 0.0% (918us) | Samples: 1

**Called by:**
- `async sendOne` (1)

### `Boolean`
`[native code]` | Self: 0.0% (915us) | Total: 0.0% (915us) | Samples: 1

**Called by:**
- `isResp2SubscriberMode` (1)

### `finalizeSession`
`/app/node_modules/pg/lib/crypto/sasl.js` | Self: 0.0% (889us) | Total: 0.0% (889us) | Samples: 1

**Called by:**
- `_handleAuthSASLFinal` (1)

### `ref`
`node:net:1545` | Self: 0.0% (0us) | Total: 0.0% (10.4ms) | Samples: 0

**Called by:**
- `ref` (2)

**Calls:**
- `ref` (2)

### `(anonymous)`
`/app/node_modules/ioredis/built/Pipeline.js:11` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async sendOne`
`/app/src/server.ts:128` | Self: 0.0% (0us) | Total: 4.8% (1.74s) | Samples: 0

**Called by:**
- `async sendOne` (167)

**Calls:**
- `async withDeps` (167)

### `async insertEmails`
`/app/src/deps.ts:88` | Self: 0.0% (0us) | Total: 0.0% (8.5ms) | Samples: 0

**Called by:**
- `async insertEmails` (1)

**Calls:**
- `map` (1)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1357` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (1)

**Calls:**
- `async serializeRequest` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:236` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (1)

**Calls:**
- `async (anonymous)` (1)

### `update`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:462` | Self: 0.0% (0us) | Total: 0.2% (105.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (10)
- `async createStringToSign` (2)

**Calls:**
- `update` (12)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:711` | Self: 0.0% (0us) | Total: 0.1% (43.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `async (anonymous)` (3)
- `async (anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:373` | Self: 0.0% (0us) | Total: 0.2% (79.1ms) | Samples: 0

**Called by:**
- `async getPayloadHash` (4)

**Calls:**
- `async digest` (3)
- `toHex` (1)
- `async digest` (1)

### `prepare`
`/app/node_modules/pg/lib/query.js:246` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `submit` (1)

**Calls:**
- `describe` (1)

### `sendCommand`
`/app/node_modules/ioredis/built/Redis.js:363` | Self: 0.0% (0us) | Total: 0.0% (915us) | Samples: 0

**Called by:**
- `async enqueue` (1)

**Calls:**
- `isResp2SubscriberMode` (1)

### `async sendOne`
`/app/src/server.ts:125` | Self: 0.0% (0us) | Total: 0.4% (162.0ms) | Samples: 0

**Called by:**
- `async sendOne` (18)

**Calls:**
- `(anonymous)` (9)
- `buildEml` (8)
- `buildEml` (1)

### `hmac`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:327` | Self: 0.0% (0us) | Total: 0.1% (59.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `Sha256Node` (8)

### `parseReadyForQueryMessage`
`/app/node_modules/pg-protocol/dist/parser.js:173` | Self: 0.0% (0us) | Total: 0.0% (13.8ms) | Samples: 0

**Called by:**
- `handlePacket` (4)

**Calls:**
- `string` (4)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:371` | Self: 0.0% (0us) | Total: 0.2% (86.8ms) | Samples: 0

**Called by:**
- `async getPayloadHash` (4)

**Calls:**
- `Sha256Node` (4)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:437` | Self: 0.0% (0us) | Total: 1.6% (613.0ms) | Samples: 0

**Called by:**
- `async deserializeResponse` (70)

**Calls:**
- `async deserializeResponse` (23)
- `async deserializeResponse` (22)
- `async deserializeResponse` (15)
- `async deserializeResponse` (6)
- `async deserializeResponse` (3)
- `async deserializeResponse` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:292` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `SignatureV4MultiRegion` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:72` | Self: 0.0% (0us) | Total: 2.1% (788.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (77)

**Calls:**
- `async (anonymous)` (77)

### `Client`
`/app/node_modules/pg/lib/client.js:54` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `newClient` (2)

**Calls:**
- `ConnectionParameters` (1)
- `ConnectionParameters` (1)

### `_handleReadyForQuery`
`/app/node_modules/pg/lib/client.js:393` | Self: 0.0% (0us) | Total: 0.6% (226.4ms) | Samples: 0

**Called by:**
- `bound _handleReadyForQuery` (32)

**Calls:**
- `handleReadyForQuery` (29)
- `handleReadyForQuery` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:112` | Self: 0.0% (0us) | Total: 0.0% (33.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (4)

### `tickOnSocket`
`node:_http_client:495` | Self: 0.0% (0us) | Total: 0.1% (37.5ms) | Samples: 0

**Called by:**
- `onSocketNT` (3)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)

### `createSocket`
`node:_http_agent:181` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `addRequest` (3)

**Calls:**
- `connect` (1)
- `connect` (1)
- `createConnection` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:315` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `clearTimeouts` (1)

### `validateHeaderValueLenient`
`node:_http_outgoing:361` | Self: 0.0% (0us) | Total: 0.3% (113.4ms) | Samples: 0

**Called by:**
- `setHeader` (11)

**Calls:**
- `checkInvalidHeaderChar` (11)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:191` | Self: 0.0% (0us) | Total: 0.1% (42.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `race` (5)
- `race` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:7` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:487` | Self: 0.0% (0us) | Total: 0.0% (20.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `validate` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:714` | Self: 0.0% (0us) | Total: 0.1% (64.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (9)

**Calls:**
- `async (anonymous)` (8)
- `async (anonymous)` (1)

### `Hmac`
`node:crypto:196` | Self: 0.0% (0us) | Total: 0.2% (76.8ms) | Samples: 0

**Called by:**
- `createHmac` (8)

**Calls:**
- `Hmac` (8)

### `async continueSession`
`/app/node_modules/pg/lib/crypto/sasl.js:120` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `S3Client`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:4942` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `realDeps` (1)

**Calls:**
- `use` (1)

### `cleanup`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:98` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `removeEventListener` (2)

### `_read`
`node:net:1492` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `resume` (1)

### `(anonymous)`
`/app/node_modules/@ioredis/commands/built/index.js:7` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `applyToStack`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:40` | Self: 0.0% (0us) | Total: 0.0% (22.0ms) | Samples: 0

**Called by:**
- `use` (4)

**Calls:**
- `add` (1)
- `checkContentLengthHeader` (1)
- `add` (1)
- `add` (1)

### `finish`
`internal:streams/writable:479` | Self: 0.0% (0us) | Total: 0.3% (119.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (17)

**Calls:**
- `emit` (16)
- `emit` (1)

### `concat`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:249` | Self: 0.0% (0us) | Total: 0.2% (75.7ms) | Samples: 0

**Called by:**
- `resolveMiddlewareWithContext` (10)

**Calls:**
- `use` (10)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:204` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async getInstanceAsync` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:5099` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Calls:**
- `makeCommand` (1)

### `race`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:91` | Self: 0.0% (0us) | Total: 0.0% (35.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `Promise` (5)

### `defaultEndpointResolver`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:801` | Self: 0.0% (0us) | Total: 0.4% (163.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (8)
- `(anonymous)` (5)

**Calls:**
- `get` (11)
- `get` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:378` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async sign` (2)

### `socketOnData`
`node:_http_client:337` | Self: 0.0% (0us) | Total: 0.0% (960us) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `run` (1)

### `emitFreeNT`
`node:_http_client:485` | Self: 0.0% (0us) | Total: 1.4% (518.5ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (64)

**Calls:**
- `emit` (64)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:110` | Self: 0.0% (0us) | Total: 0.2% (105.4ms) | Samples: 0

**Called by:**
- `resolve` (13)

**Calls:**
- `forEach` (13)

### `handleReadyForQuery`
`/app/node_modules/pg/lib/query.js:149` | Self: 0.0% (0us) | Total: 0.0% (20.7ms) | Samples: 0

**Called by:**
- `_handleReadyForQuery` (3)

**Calls:**
- `emit` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:474` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`node:dns:210` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Calls:**
- `guarded` (5)

### `(anonymous)`
`internal:streams/writable:263` | Self: 0.0% (0us) | Total: 15.3% (5.54s) | Samples: 0

**Called by:**
- `submit` (324)
- `_flushOutput` (238)

**Calls:**
- `clearBuffer` (562)

### `_acquireClient`
`/app/node_modules/pg-pool/index.js:344` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `_pulseQueue` (1)

**Calls:**
- `removeListener` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:895` | Self: 0.0% (0us) | Total: 0.0% (9.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `createAwsAuthSigv4HttpAuthOption` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:89` | Self: 0.0% (0us) | Total: 0.0% (33.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (4)

### `Writable`
`internal:streams/writable:196` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `Collector` (1)

**Calls:**
- `Stream` (1)

### `createConnection`
`node:net:1736` | Self: 0.0% (0us) | Total: 0.0% (935us) | Samples: 0

**Called by:**
- `createSocket` (1)

**Calls:**
- `Socket` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:375` | Self: 0.0% (0us) | Total: 3.1% (1.12s) | Samples: 0

**Called by:**
- `emit` (83)

**Calls:**
- `get` (69)
- `getTransformedHeaders` (4)
- `getTransformedHeaders` (3)
- `get` (3)
- `getTransformedHeaders` (2)
- `getTransformedHeaders` (2)

### `storeHeader`
`node:_http_outgoing:368` | Self: 0.0% (0us) | Total: 0.0% (33.1ms) | Samples: 0

**Called by:**
- `processHeader` (3)

**Calls:**
- `matchHeader` (3)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:361` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (1)

**Calls:**
- `async serializeRequest` (1)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:535` | Self: 0.0% (0us) | Total: 0.2% (100.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (11)

**Calls:**
- `getCanonicalHeaders` (4)
- `getCanonicalHeaders` (2)
- `getCanonicalHeaders` (2)
- `getCanonicalHeaders` (2)
- `getCanonicalHeaders` (1)

### `IncomingMessage`
`node:_http_incoming:30` | Self: 0.0% (0us) | Total: 0.1% (39.0ms) | Samples: 0

**Called by:**
- `onNodeHTTPRequest` (6)

**Calls:**
- `Readable` (5)
- `Readable` (1)

### `(anonymous)`
`/app/node_modules/pg-types/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `_handleAuthSASLFinal`
`/app/node_modules/pg/lib/client.js:361` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `bound _handleAuthSASLFinal` (1)

**Calls:**
- `finalizeSession` (1)

### `(anonymous)`
`/app/node_modules/pg-protocol/dist/serializer.js:153` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `flush` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (5.9ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `read`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:836` | Self: 0.0% (0us) | Total: 0.1% (51.8ms) | Samples: 0

**Called by:**
- `async deserializeHttpMessage` (4)

**Calls:**
- `of` (3)
- `of` (1)

### `async handle`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:301` | Self: 0.0% (0us) | Total: 2.1% (774.4ms) | Samples: 0

**Called by:**
- `async handle` (73)

**Calls:**
- `Promise` (74)

### `(anonymous)`
`internal:streams/readable:544` | Self: 0.0% (0us) | Total: 0.0% (6.0ms) | Samples: 0

**Called by:**
- `processClientData` (1)

**Calls:**
- `listenerCount` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:214` | Self: 0.0% (0us) | Total: 0.0% (18.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `sanitizeTraceHeaders` (1)

### `emitResponseFinish`
`node:_http_server:1472` | Self: 0.0% (0us) | Total: 0.0% (18.8ms) | Samples: 0

**Called by:**
- `emit` (2)

**Calls:**
- `advanceResponsePipeline` (1)
- `advanceResponsePipeline` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1608` | Self: 0.0% (0us) | Total: 0.0% (24.6ms) | Samples: 0

**Called by:**
- `Promise` (4)

**Calls:**
- `addListener` (4)

### `toEndpointV1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:180` | Self: 0.0% (0us) | Total: 0.4% (147.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (11)

**Calls:**
- `parseUrl` (11)

### `emitReadable_`
`internal:streams/readable:402` | Self: 0.0% (0us) | Total: 0.1% (50.0ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (14)

**Calls:**
- `flow` (13)
- `flow` (1)

### `internalConnect`
`node:net:1894` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `emitLookup` (4)

**Calls:**
- `kConnectDispatch` (4)

### `(module)`
`/app/src/server.ts:211` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:235` | Self: 0.0% (0us) | Total: 0.1% (64.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (9)

**Calls:**
- `async (anonymous)` (9)

### `destroy`
`internal:streams/destroy:41` | Self: 0.0% (0us) | Total: 0.1% (61.2ms) | Samples: 0

**Called by:**
- `endReadableNT` (7)
- `(anonymous)` (1)

**Calls:**
- `_destroy` (7)
- `_destroy` (1)

### `open`
`node:net:858` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Calls:**
- `afterConnect` (5)

### `async handle`
`/app/src/server.ts:197` | Self: 0.0% (0us) | Total: 12.2% (4.40s) | Samples: 0

**Called by:**
- `(anonymous)` (463)

**Calls:**
- `async sendOne` (463)

### `onDestroy`
`internal:streams/destroy:60` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `nextTick` (1)

### `setHeader`
`node:_http_outgoing:409` | Self: 0.0% (0us) | Total: 0.3% (113.4ms) | Samples: 0

**Called by:**
- `ClientRequest` (9)
- `_writeHead` (2)

**Calls:**
- `validateHeaderValueLenient` (11)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:370` | Self: 0.0% (0us) | Total: 1.5% (560.4ms) | Samples: 0

**Called by:**
- `Promise` (47)

**Calls:**
- `request` (47)

### `connect`
`/app/node_modules/pg/lib/client.js:234` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `newClient` (1)

**Calls:**
- `_connect` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/client.js:338` | Self: 0.0% (0us) | Total: 0.0% (903us) | Samples: 0

**Called by:**
- `_getPassword` (1)

**Calls:**
- `sendSASLInitialResponseMessage` (1)

### `_getPassword`
`/app/node_modules/pg/lib/client.js:296` | Self: 0.0% (0us) | Total: 0.0% (903us) | Samples: 0

**Called by:**
- `_handleAuthSASL` (1)

**Calls:**
- `(anonymous)` (1)

### `get`
`node:_http_incoming:94` | Self: 0.0% (0us) | Total: 0.2% (103.1ms) | Samples: 0

**Called by:**
- `async handle` (16)

**Calls:**
- `headersObject` (16)

### `_implicitHeader`
`node:_http_client:264` | Self: 0.0% (0us) | Total: 0.1% (41.2ms) | Samples: 0

**Called by:**
- `write_` (6)

**Calls:**
- `_storeHeader` (4)
- `_storeHeader` (1)
- `_storeHeader` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:594` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `Command` (1)

**Calls:**
- `constructStack` (1)

### `Command`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `CommandRef` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/writable:469` | Self: 0.0% (0us) | Total: 0.4% (168.8ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (21)

**Calls:**
- `finish` (17)
- `finish` (4)

### `PutObjectCommand`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (19.2ms) | Samples: 0

**Called by:**
- `async putObject` (2)

**Calls:**
- `CommandRef` (1)
- `CommandRef` (1)

### `(anonymous)`
`internal:streams/readable:525` | Self: 0.0% (0us) | Total: 0.5% (191.0ms) | Samples: 0

**Called by:**
- `once` (7)
- `(anonymous)` (4)
- `parserOnIncomingClient` (4)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `tickOnSocket` (1)
- `(anonymous)` (1)

**Calls:**
- `addListener` (22)

### `emitErrorNextTickIfErrorListener`
`internal:http:39` | Self: 0.0% (0us) | Total: 0.2% (72.4ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (2)

**Calls:**
- `onDestroy` (2)

### `(anonymous)`
`/app/node_modules/pg/lib/client.js:10` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `ClientRequest`
`node:_http_client:86` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `request` (1)

**Calls:**
- `isURLInstance` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:274` | Self: 0.0% (0us) | Total: 0.0% (10.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `assign` (1)

### `emit`
`node:events:121` | Self: 0.0% (0us) | Total: 0.0% (23.1ms) | Samples: 0

**Called by:**
- `handleReadyForQuery` (3)
- `_pulseQueryQueue` (2)

**Calls:**
- `(anonymous)` (5)

### `checkListener`
`node:events:564` | Self: 0.0% (0us) | Total: 0.0% (6.9ms) | Samples: 0

**Called by:**
- `_addListener` (1)

**Calls:**
- `validateFunction` (1)

### `(anonymous)`
`internal:streams/readable:477` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `prependListener` (4)

### `_handleCommandComplete`
`/app/node_modules/pg/lib/client.js:496` | Self: 0.0% (0us) | Total: 0.0% (21.0ms) | Samples: 0

**Called by:**
- `bound _handleCommandComplete` (7)

**Calls:**
- `handleCommandComplete` (7)

### `createCanonicalRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:245` | Self: 0.0% (0us) | Total: 0.1% (51.8ms) | Samples: 0

**Called by:**
- `async signRequest` (7)

**Calls:**
- `map` (7)

### `(anonymous)`
`internal:streams/readable:332` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `resume_` (1)

**Calls:**
- `endReadable` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:403` | Self: 0.0% (0us) | Total: 2.1% (787.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (76)

**Calls:**
- `async (anonymous)` (76)

### `traceCommand`
`/app/node_modules/ioredis/built/tracing.js:78` | Self: 0.0% (0us) | Total: 0.2% (82.5ms) | Samples: 0

**Called by:**
- `async enqueue` (7)
- `async rateLimit` (5)

**Calls:**
- `(anonymous)` (5)
- `_buildCommandContext` (4)
- `tracePromise` (3)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:92` | Self: 0.0% (0us) | Total: 0.0% (19.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `randomUUID` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:372` | Self: 0.0% (0us) | Total: 0.2% (91.2ms) | Samples: 0

**Called by:**
- `async getPayloadHash` (10)

**Calls:**
- `update` (10)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `_Decoder_handleDecodedValue`
`/app/node_modules/ioredis/built/resp/decoder.js:145` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `write` (1)

**Calls:**
- `onReply` (1)

### `_release`
`/app/node_modules/pg-pool/index.js:400` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `has` (2)

### `(anonymous)`
`/app/node_modules/standard-as-callback/built/index.js:22` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `tryCatcher` (1)

### `node:crypto`
`node:crypto:2` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:20` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `addRequest`
`node:_http_agent:137` | Self: 0.0% (0us) | Total: 0.0% (14.1ms) | Samples: 0

**Called by:**
- `ClientRequest` (2)

**Calls:**
- `reuseSocket` (2)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `toBuffer`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:489` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `createHash` (2)

**Calls:**
- `(anonymous)` (1)
- `get buffer` (1)

### `get`
`node:_http_incoming:101` | Self: 0.0% (0us) | Total: 2.6% (967.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (69)

**Calls:**
- `_addHeaderLine` (31)
- `_addHeaderLine` (29)
- `_addHeaderLine` (5)
- `_addHeaderLine` (3)
- `_addHeaderLine` (1)

### `isIP`
`internal:net/isIP:12` | Self: 0.0% (0us) | Total: 0.1% (37.5ms) | Samples: 0

**Called by:**
- `calculateServerName` (1)

**Calls:**
- `isIPv4` (1)

### `Duplex`
`internal:streams/duplex:15` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `Socket` (1)

**Calls:**
- `WritableState` (1)

### `async digest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:248` | Self: 0.0% (0us) | Total: 0.1% (40.8ms) | Samples: 0

**Called by:**
- `stringHasher` (7)

**Calls:**
- `get buffer` (5)
- `DataView` (2)

### `ClientRequest`
`node:_http_client:119` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `request` (1)

**Calls:**
- `setPrototypeDirect` (1)

### `async putObject`
`/app/src/deps.ts:72` | Self: 0.0% (0us) | Total: 0.0% (23.2ms) | Samples: 0

**Called by:**
- `async putObject` (5)

**Calls:**
- `timeout` (5)

### `sendSASLInitialResponseMessage`
`/app/node_modules/pg/lib/connection.js:164` | Self: 0.0% (0us) | Total: 0.0% (903us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:192` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `Error` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:408` | Self: 0.0% (0us) | Total: 2.1% (787.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (76)

**Calls:**
- `async (anonymous)` (76)

### `(anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (14.9ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `socketOnDataInner`
`node:_http_client:351` | Self: 0.0% (0us) | Total: 5.1% (1.84s) | Samples: 0

**Called by:**
- `emit` (185)

**Calls:**
- `processClientData` (176)
- `processClientData` (9)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:378` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `async resolve` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:231` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `htmlToText`
`/app/src/htmltotext.ts:128` | Self: 0.0% (0us) | Total: 0.0% (32.3ms) | Samples: 0

**Called by:**
- `normalizeEmail` (4)

**Calls:**
- `skipBalanced` (3)
- `skipBalanced` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:163` | Self: 0.0% (0us) | Total: 0.4% (153.7ms) | Samples: 0

**Called by:**
- `send` (13)

**Calls:**
- `async (anonymous)` (13)

### `(anonymous)`
`/app/src/server.ts:202` | Self: 0.0% (0us) | Total: 9.3% (3.37s) | Samples: 0

**Called by:**
- `emit` (333)

**Calls:**
- `async handle` (333)

### `fromString`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:21` | Self: 0.0% (0us) | Total: 0.1% (49.7ms) | Samples: 0

**Called by:**
- `fromUtf8$1` (5)

**Calls:**
- `(anonymous)` (5)

### `stringHasher`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:144` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `update` (7)

### `prefinish`
`internal:streams/writable:461` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `finishMaybe` (1)

**Calls:**
- `emit` (1)

### `normalizeServerName`
`node:_http_agent:187` | Self: 0.0% (0us) | Total: 0.1% (50.5ms) | Samples: 0

**Called by:**
- `addRequest` (3)

**Calls:**
- `calculateServerName` (2)
- `calculateServerName` (1)

### `onSocketNT`
`node:_http_client:543` | Self: 0.0% (0us) | Total: 5.6% (2.03s) | Samples: 0

**Called by:**
- `processTicksAndRejections` (248)

**Calls:**
- `_flush` (241)
- `tickOnSocket` (3)
- `tickOnSocket` (1)
- `tickOnSocket` (1)
- `_flush` (1)
- `tickOnSocket` (1)

### `_flushOutput`
`node:_http_outgoing:704` | Self: 0.0% (0us) | Total: 5.4% (1.96s) | Samples: 0

**Called by:**
- `_flush` (238)

**Calls:**
- `(anonymous)` (238)

### `fromArrayBuffer`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:15` | Self: 0.0% (0us) | Total: 0.0% (15.6ms) | Samples: 0

**Called by:**
- `toUtf8$1` (4)

**Calls:**
- `(anonymous)` (4)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `_destroy`
`internal:streams/destroy:63` | Self: 0.0% (0us) | Total: 0.1% (58.0ms) | Samples: 0

**Called by:**
- `destroy` (7)

**Calls:**
- `_destroy` (2)
- `_destroy` (2)
- `(anonymous)` (1)
- `_destroy` (1)
- `_destroy` (1)

### `parse`
`/app/node_modules/pg-connection-string/index.js:27` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `ConnectionParameters` (1)

**Calls:**
- `URL` (1)

### `Readable`
`internal:streams/readable:161` | Self: 0.0% (0us) | Total: 0.3% (109.8ms) | Samples: 0

**Called by:**
- `IncomingMessage` (9)
- `IncomingMessage` (5)
- `from` (2)

**Calls:**
- `Stream` (16)

### `end`
`/app/node_modules/pg/lib/client.js:826` | Self: 0.0% (0us) | Total: 0.0% (23.3ms) | Samples: 0

**Called by:**
- `_remove` (1)

**Calls:**
- `(anonymous)` (1)

### `schemaLogFilter`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:557` | Self: 0.0% (0us) | Total: 0.1% (62.0ms) | Samples: 0

**Called by:**
- `schemaLogFilter` (6)

**Calls:**
- `of` (6)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:415` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `setSocketKeepAlive` (1)

### `concat`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:248` | Self: 0.0% (0us) | Total: 0.9% (350.0ms) | Samples: 0

**Called by:**
- `resolveMiddlewareWithContext` (34)

**Calls:**
- `cloneTo` (19)
- `cloneTo` (14)
- `constructStack` (1)

### `onDataIncomingMessage`
`internal:http:80` | Self: 0.0% (0us) | Total: 0.1% (45.1ms) | Samples: 0

**Calls:**
- `_unrefTimer` (2)

### `readableAddChunkPushObjectMode`
`internal:streams/readable:256` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `read` (1)
- `(anonymous)` (1)

**Calls:**
- `addChunk` (1)
- `addChunk` (1)

### `unref`
`node:net:1661` | Self: 0.0% (0us) | Total: 0.0% (24.8ms) | Samples: 0

**Called by:**
- `keepSocketAlive` (1)

**Calls:**
- `unref` (1)

### `handlePacket`
`/app/node_modules/pg-protocol/dist/parser.js:94` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `parse` (1)

**Calls:**
- `setBuffer` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:314` | Self: 0.0% (0us) | Total: 0.0% (28.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `write` (2)

### `makeCommand`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:1184` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `classBuilder` (1)

### `Socket`
`node:_http_server:932` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `onServerConnection` (2)

**Calls:**
- `Socket` (1)
- `Socket` (1)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:719` | Self: 0.0% (0us) | Total: 0.0% (20.6ms) | Samples: 0

**Called by:**
- `map` (3)

**Calls:**
- `map` (3)

### `describe`
`/app/node_modules/pg/lib/connection.js:234` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `prepare` (1)

**Calls:**
- `_send` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:812` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async _defaultS3HttpAuthSchemeParametersProvider` (1)

### `getUpdatedSystemClockOffset`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:17` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `successHandler` (1)

**Calls:**
- `parse` (1)

### `normalizeEmail`
`/app/src/email.ts:177` | Self: 0.0% (0us) | Total: 0.0% (22.0ms) | Samples: 0

**Called by:**
- `validate` (2)

**Calls:**
- `tags` (2)

### `(anonymous)`
`internal:streams/readable:459` | Self: 0.0% (0us) | Total: 0.0% (29.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (9)

**Calls:**
- `(anonymous)` (5)
- `(anonymous)` (4)

### `(anonymous)`
`node:_http_server:2101` | Self: 0.0% (0us) | Total: 0.1% (69.7ms) | Samples: 0

**Called by:**
- `emitResponseFinish` (2)

**Calls:**
- `(anonymous)` (2)

### `onNodeHTTPRequest`
`node:_http_server:594` | Self: 0.0% (0us) | Total: 9.4% (3.40s) | Samples: 0

**Calls:**
- `emit` (333)
- `emit` (5)

### `(anonymous)`
`/app/node_modules/ioredis/built/Redis.js:7` | Self: 0.0% (0us) | Total: 0.0% (13.8ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `Socket`
`node:net:1056` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `Socket` (1)

**Calls:**
- `Duplex` (1)

### `_destroy`
`node:_http_incoming:215` | Self: 0.0% (0us) | Total: 0.0% (9.9ms) | Samples: 0

**Called by:**
- `_destroy` (2)

**Calls:**
- `emitErrorNextTickIfErrorListenerNT` (2)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `onend`
`internal:streams/readable:439` | Self: 0.0% (0us) | Total: 0.0% (27.2ms) | Samples: 0

**Called by:**
- `onceWrapper` (1)
- `emit` (1)

**Calls:**
- `(anonymous)` (2)

### `iso8601`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:210` | Self: 0.0% (0us) | Total: 0.0% (29.5ms) | Samples: 0

**Called by:**
- `formatDate` (3)

**Calls:**
- `toISOString` (3)

### `expandRelativeMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:76` | Self: 0.0% (0us) | Total: 0.1% (44.6ms) | Samples: 0

**Called by:**
- `map` (5)

**Calls:**
- `forEach` (5)

### `onunpipe`
`internal:streams/readable:435` | Self: 0.0% (0us) | Total: 0.1% (51.7ms) | Samples: 0

**Called by:**
- `emit` (6)

**Calls:**
- `cleanup` (5)
- `cleanup` (1)

### `prepare`
`/app/node_modules/pg/lib/query.js:230` | Self: 0.0% (0us) | Total: 0.9% (331.5ms) | Samples: 0

**Called by:**
- `submit` (37)

**Calls:**
- `bind` (37)

### `(anonymous)`
`/app/node_modules/ioredis/built/cluster/index.js:18` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `_release`
`/app/node_modules/pg-pool/index.js:385` | Self: 0.0% (0us) | Total: 0.0% (21.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `addListener` (2)

### `(anonymous)`
`/app/node_modules/pg/lib/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (5.9ms) | Samples: 0

**Calls:**
- `bound require` (2)

### `async sendOne`
`/app/src/server.ts:123` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async sendOne` (1)

**Calls:**
- `randomUUID` (1)

### `sendJson`
`/app/src/server.ts:39` | Self: 0.0% (0us) | Total: 6.5% (2.35s) | Samples: 0

**Called by:**
- `async handle` (257)

**Calls:**
- `(anonymous)` (231)
- `(anonymous)` (19)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/utils/debug.js:4` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `maybeReadMore_`
`internal:streams/readable:411` | Self: 0.0% (0us) | Total: 0.0% (7.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (5)

**Calls:**
- `(anonymous)` (3)
- `read` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:132` | Self: 0.0% (0us) | Total: 0.0% (13.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async configProvider` (1)

### `(anonymous)`
`/app/node_modules/pg-protocol/dist/index.js:7` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `emitReadable_`
`internal:streams/readable:401` | Self: 0.0% (0us) | Total: 0.0% (9.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `Command`
`/app/node_modules/ioredis/built/Command.js:76` | Self: 0.0% (0us) | Total: 0.0% (26.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `initPromise` (3)
- `initPromise` (1)
- `initPromise` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:284` | Self: 0.0% (0us) | Total: 0.4% (161.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (10)

**Calls:**
- `cloneObject` (10)

### `_remove`
`/app/node_modules/pg-pool/index.js:181` | Self: 0.0% (0us) | Total: 0.0% (23.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `end` (1)

### `(anonymous)`
`/app/src/server.ts:62` | Self: 0.0% (0us) | Total: 0.4% (151.0ms) | Samples: 0

**Called by:**
- `emit` (13)
- `Promise` (2)

**Calls:**
- `concat` (9)
- `(anonymous)` (4)
- `(anonymous)` (2)

### `emitErrorNextTickIfErrorListenerNT`
`internal:http:32` | Self: 0.0% (0us) | Total: 0.0% (9.9ms) | Samples: 0

**Called by:**
- `_destroy` (2)

**Calls:**
- `nextTick` (2)

### `_buildCommandContext`
`/app/node_modules/ioredis/built/Redis.js:647` | Self: 0.0% (0us) | Total: 0.0% (8.5ms) | Samples: 0

**Called by:**
- `traceCommand` (4)

**Calls:**
- `sanitizeArgs` (4)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1604` | Self: 0.0% (0us) | Total: 0.2% (81.7ms) | Samples: 0

**Called by:**
- `Promise` (3)

**Calls:**
- `(anonymous)` (3)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:198` | Self: 0.0% (0us) | Total: 0.0% (19.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:49` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `async identityProviderConfigProvider` (2)

### `onNodeHTTPRequest`
`node:_http_server:491` | Self: 0.0% (0us) | Total: 0.0% (27.6ms) | Samples: 0

**Calls:**
- `ServerResponse` (5)

### `hmac`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:329` | Self: 0.0% (0us) | Total: 0.0% (21.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async digest` (3)
- `async digest` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:170` | Self: 0.0% (0us) | Total: 0.0% (12.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `_pulseQueryQueue`
`/app/node_modules/pg/lib/client.js:628` | Self: 0.0% (0us) | Total: 10.8% (3.91s) | Samples: 0

**Called by:**
- `query` (357)
- `_handleReadyForQuery` (5)

**Calls:**
- `submit` (324)
- `submit` (38)

### `(anonymous)`
`node:_http_agent:34` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `get` (1)

### `(anonymous)`
`internal:streams/readable:580` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `_dump` (1)

**Calls:**
- `resume` (1)

### `normalizeEmail`
`/app/src/email.ts:159` | Self: 0.0% (0us) | Total: 0.1% (41.4ms) | Samples: 0

**Called by:**
- `validate` (9)

**Calls:**
- `isValidAddress` (4)
- `isValidAddress` (2)
- `isValidAddress` (1)
- `isValidAddress` (1)
- `isValidAddress` (1)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:536` | Self: 0.0% (0us) | Total: 0.9% (330.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (47)

**Calls:**
- `getSigningKey` (13)
- `createCanonicalRequest` (11)
- `async getSignature` (10)
- `createCanonicalRequest` (7)
- `createCanonicalRequest` (2)
- `createCanonicalRequest` (2)
- `async getSigningKey` (1)
- `createCanonicalRequest` (1)

### `startup`
`/app/node_modules/pg/lib/connection.js:152` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (2)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:730` | Self: 0.0% (0us) | Total: 0.1% (61.4ms) | Samples: 0

**Called by:**
- `map` (2)

**Calls:**
- `reduce` (2)

### `ClientRequest`
`node:_http_client:111` | Self: 0.0% (0us) | Total: 0.0% (11.8ms) | Samples: 0

**Called by:**
- `request` (3)

**Calls:**
- `/[^\u0021-\u00ff]/` (3)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:379` | Self: 0.0% (0us) | Total: 2.1% (787.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (76)

**Calls:**
- `async handle` (74)
- `async handle` (2)

### `onceWrapper`
`node:events:248` | Self: 0.0% (0us) | Total: 0.1% (68.6ms) | Samples: 0

**Called by:**
- `emit` (8)

**Calls:**
- `onfinish` (7)
- `onend` (1)

### `send`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:535` | Self: 0.0% (0us) | Total: 4.2% (1.52s) | Samples: 0

**Called by:**
- `async putObject` (143)

**Calls:**
- `resolve` (54)
- `resolveMiddlewareWithContext` (44)
- `resolveMiddlewareWithContext` (26)
- `resolve` (6)
- `resolveMiddlewareWithContext` (5)
- `resolve` (4)
- `resolveMiddlewareWithContext` (2)
- `resolveMiddleware` (1)
- `resolveMiddleware` (1)

### `(anonymous)`
`node:diagnostics_channel:219` | Self: 0.0% (0us) | Total: 0.1% (52.1ms) | Samples: 0

**Called by:**
- `traceCommand` (5)

**Calls:**
- `PromisePrototypeThen` (5)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:688` | Self: 0.0% (0us) | Total: 0.0% (25.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `async userAgentAppId` (2)

### `Command`
`/app/node_modules/ioredis/built/Command.js:74` | Self: 0.0% (0us) | Total: 0.0% (26.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `flat` (5)

### `async insertEmails`
`/app/src/deps.ts:89` | Self: 0.0% (0us) | Total: 0.4% (164.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (16)

**Calls:**
- `async insertEmails` (10)
- `async insertEmails` (2)
- `async insertEmails` (1)
- `async insertEmails` (1)
- `async insertEmails` (1)
- `async insertEmails` (1)

### `createCanonicalRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:241` | Self: 0.0% (0us) | Total: 0.0% (7.6ms) | Samples: 0

**Called by:**
- `async signRequest` (2)

**Calls:**
- `sort` (2)

### `handlePacket`
`/app/node_modules/pg-protocol/dist/parser.js:137` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `parse` (1)

**Calls:**
- `parseParameterStatusMessage` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1601` | Self: 0.0% (0us) | Total: 0.2% (82.4ms) | Samples: 0

**Called by:**
- `Promise` (20)

**Calls:**
- `Collector` (20)

### `(anonymous)`
`/app/node_modules/ioredis/built/Redis.js:809` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `tryCatcher` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:884` | Self: 0.0% (0us) | Total: 0.1% (55.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (2)
- `cloneObject` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:10` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:451` | Self: 0.0% (0us) | Total: 0.8% (320.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (23)
- `async deserializeHttpMessage` (5)

**Calls:**
- `next` (25)
- `generatorResume` (3)

### `createDebug`
`/app/node_modules/debug/src/common.js:117` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `genDebugFunction` (1)

**Calls:**
- `useColors` (1)

### `tags`
`/app/src/email.ts:140` | Self: 0.0% (0us) | Total: 0.0% (22.0ms) | Samples: 0

**Called by:**
- `normalizeEmail` (2)

**Calls:**
- `map` (2)

### `async (anonymous)`
`/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:111` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async getInstanceAsync` (1)

**Calls:**
- `async (anonymous)` (1)

### `send`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:543` | Self: 0.0% (0us) | Total: 0.4% (153.7ms) | Samples: 0

**Called by:**
- `async putObject` (13)

**Calls:**
- `async (anonymous)` (13)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:140` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `from` (1)
- `anonymous` (1)

**Calls:**
- `from` (1)
- `sin` (1)

### `onEofChunk`
`internal:streams/readable:389` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (1)

**Calls:**
- `emitReadable` (1)

### `sendJson`
`/app/src/server.ts:37` | Self: 0.0% (0us) | Total: 0.0% (30.1ms) | Samples: 0

**Called by:**
- `async handle` (1)

**Calls:**
- `byteLength` (1)

### `async sign`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:62` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async sign` (1)

**Calls:**
- `async validateSigningProperties` (1)

### `clearTimeout`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:45` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `clearTimeouts` (1)

**Calls:**
- `clearTimeout` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/utils/index.js:10` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async resolvedCredentials`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:225` | Self: 0.0% (0us) | Total: 0.0% (9.3ms) | Samples: 0

**Called by:**
- `async signRequest` (2)
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (3)

### `handleCommandComplete`
`/app/node_modules/pg/lib/query.js:104` | Self: 0.0% (0us) | Total: 0.0% (21.0ms) | Samples: 0

**Called by:**
- `_handleCommandComplete` (7)

**Calls:**
- `addCommandComplete` (6)
- `addCommandComplete` (1)

### `skipRaw`
`/app/src/htmltotext.ts:49` | Self: 0.0% (0us) | Total: 0.1% (39.3ms) | Samples: 0

**Called by:**
- `htmlToText` (3)

**Calls:**
- `parseTag` (2)
- `parseTag` (1)

### `getCanonicalHeaders`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:341` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async signRequest` (1)

**Calls:**
- `test` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:120` | Self: 0.0% (0us) | Total: 0.0% (32.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `async (anonymous)` (3)

### `async (anonymous)`
`/app/src/server.ts:130` | Self: 0.0% (0us) | Total: 0.5% (182.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (18)

**Calls:**
- `async insertEmails` (16)
- `toRow` (1)
- `toRow` (1)

### `parserOnHeadersComplete`
`node:_http_common:31` | Self: 0.0% (0us) | Total: 0.2% (98.8ms) | Samples: 0

**Called by:**
- `execute` (13)

**Calls:**
- `IncomingMessage` (12)
- `IncomingMessage` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:697` | Self: 0.0% (0us) | Total: 0.1% (51.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `filter` (4)

### `(anonymous)`
`/app/node_modules/pg/lib/connection.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `addChunk`
`internal:streams/readable:277` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (1)

**Calls:**
- `emitReadable` (1)

### `isResp2SubscriberMode`
`/app/node_modules/ioredis/built/utils/index.js:382` | Self: 0.0% (0us) | Total: 0.0% (915us) | Samples: 0

**Called by:**
- `sendCommand` (1)

**Calls:**
- `Boolean` (1)

### `Query`
`/app/node_modules/pg/lib/query.js:28` | Self: 0.0% (0us) | Total: 0.1% (39.3ms) | Samples: 0

**Called by:**
- `query` (2)

**Calls:**
- `Result` (1)
- `Result` (1)

### `string`
`/app/node_modules/pg-protocol/dist/buffer-reader.js:36` | Self: 0.0% (0us) | Total: 0.0% (13.8ms) | Samples: 0

**Called by:**
- `parseReadyForQueryMessage` (4)

**Calls:**
- `toString` (4)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:164` | Self: 0.0% (0us) | Total: 0.0% (31.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async resolveParams` (4)

### `bound _handleAuthSASL`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (903us) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `_handleAuthSASL` (1)

### `async sign`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:470` | Self: 0.0% (0us) | Total: 0.0% (11.2ms) | Samples: 0

**Called by:**
- `async sign` (3)

**Calls:**
- `async signRequest` (3)

### `onwrite`
`internal:streams/writable:340` | Self: 0.0% (0us) | Total: 0.0% (939us) | Samples: 0

**Called by:**
- `bound onwrite` (1)

**Calls:**
- `afterWrite` (1)

### `async digest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:471` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)
- `async createStringToSign` (1)

**Calls:**
- `digest` (2)

### `async createStringToSign`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:257` | Self: 0.0% (0us) | Total: 0.0% (35.5ms) | Samples: 0

**Called by:**
- `async getSignature` (9)

**Calls:**
- `async createStringToSign` (6)
- `async createStringToSign` (2)
- `async createStringToSign` (1)

### `reuseSocket`
`node:_http_agent:306` | Self: 0.0% (0us) | Total: 0.0% (14.1ms) | Samples: 0

**Called by:**
- `addRequest` (2)

**Calls:**
- `(anonymous)` (2)

### `handleReadyForQuery`
`/app/node_modules/pg/lib/query.js:142` | Self: 0.0% (0us) | Total: 0.5% (205.7ms) | Samples: 0

**Called by:**
- `_handleReadyForQuery` (29)

**Calls:**
- `(anonymous)` (25)
- `(anonymous)` (3)
- `(anonymous)` (1)

### `(anonymous)`
`/app/src/server.ts:52` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `(anonymous)` (1)

### `async insertEmails`
`/app/src/deps.ts:86` | Self: 0.0% (0us) | Total: 0.0% (13.2ms) | Samples: 0

**Called by:**
- `async insertEmails` (1)

**Calls:**
- `map` (1)

### `htmlToText`
`/app/src/htmltotext.ts:143` | Self: 0.0% (0us) | Total: 1.0% (382.6ms) | Samples: 0

**Called by:**
- `normalizeEmail` (45)

**Calls:**
- `postProcess` (37)
- `postProcess` (8)

### `applyToStack`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:272` | Self: 0.0% (0us) | Total: 0.0% (11.2ms) | Samples: 0

**Called by:**
- `use` (5)

**Calls:**
- `addRelativeTo` (4)
- `addRelativeTo` (1)

### `buildQueryString`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1105` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `escapeUri` (1)

### `resume_`
`internal:streams/readable:592` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `value`
`internal:streams/writable:206` | Self: 0.0% (0us) | Total: 0.0% (18.9ms) | Samples: 0

**Called by:**
- `Writable` (7)

**Calls:**
- `[Symbol.hasInstance]` (7)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:413` | Self: 0.0% (0us) | Total: 0.7% (254.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (25)

**Calls:**
- `toStream` (25)

### `SignatureV4Base`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:237` | Self: 0.0% (0us) | Total: 0.0% (12.1ms) | Samples: 0

**Called by:**
- `SignatureV4` (1)

**Calls:**
- `normalizeProvider` (1)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:414` | Self: 0.0% (0us) | Total: 0.1% (48.6ms) | Samples: 0

**Called by:**
- `async deserializeResponse` (6)

**Calls:**
- `hasOwn` (5)
- `hasOwn` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/utils/index.js:8` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `_release`
`/app/node_modules/pg-pool/index.js:389` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `emit` (2)

### `SignatureV4SignWithCredentials`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `SignatureV4MultiRegion` (2)

**Calls:**
- `SignatureV4` (2)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:531` | Self: 0.0% (0us) | Total: 0.7% (262.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (20)

**Calls:**
- `async getPayloadHash` (20)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `addRequest`
`node:_http_agent:126` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `ClientRequest` (1)

**Calls:**
- `getName` (1)

### `dispatch`
`/app/node_modules/ioredis/built/DataHandler.js:44` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `onReply` (1)

**Calls:**
- `returnReply` (1)

### `(anonymous)`
`/app/node_modules/debug/src/index.js:9` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `setTimeout`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:44` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `setTimeout` (2)

### `normalizeEmail`
`/app/src/email.ts:187` | Self: 0.0% (0us) | Total: 5.2% (1.88s) | Samples: 0

**Called by:**
- `validate` (208)

**Calls:**
- `htmlToText` (82)
- `htmlToText` (45)
- `htmlToText` (34)
- `htmlToText` (7)
- `htmlToText` (7)
- `htmlToText` (5)
- `htmlToText` (5)
- `htmlToText` (5)
- `htmlToText` (4)
- `htmlToText` (4)
- `htmlToText` (4)
- `htmlToText` (2)
- `postProcess` (2)
- `htmlToText` (1)
- `postProcess` (1)

### `ClassBuilder`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `classBuilder` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:781` | Self: 0.0% (0us) | Total: 0.1% (63.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `release` (8)

### `finish`
`internal:streams/writable:482` | Self: 0.0% (0us) | Total: 0.1% (49.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`node:_http_server:1978` | Self: 0.0% (0us) | Total: 0.1% (38.0ms) | Samples: 0

**Called by:**
- `sendJson` (2)

**Calls:**
- `emit` (1)
- `emit` (1)

### `(anonymous)`
`internal:streams/writable:420` | Self: 0.0% (0us) | Total: 0.0% (27.2ms) | Samples: 0

**Called by:**
- `onend` (2)

**Calls:**
- `finishMaybe` (2)

### `async getSignature`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:547` | Self: 0.0% (0us) | Total: 0.1% (51.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `toUint8Array` (4)

### `lookup`
`node:dns:189` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `lookupAndConnectMultiple` (1)

**Calls:**
- `validateLookupOptions` (1)

### `kConnectDispatch`
`node:net:1021` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `internalConnect` (4)

**Calls:**
- `doConnect` (4)

### `(anonymous)`
`node:_http_server:1965` | Self: 0.0% (0us) | Total: 6.1% (2.21s) | Samples: 0

**Called by:**
- `sendJson` (231)
- `async handle` (1)

**Calls:**
- `writeHeadAndEnd` (232)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:251` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `async identityProviderConfigProvider`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:4944` | Self: 0.0% (0us) | Total: 0.0% (12.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `DefaultIdentityProviderConfig` (2)

### `setHeader`
`node:_http_server:1745` | Self: 0.0% (0us) | Total: 0.0% (7.2ms) | Samples: 0

**Called by:**
- `_writeHead` (2)

**Calls:**
- `throwIfServerHeadersSent` (1)
- `throwIfServerHeadersSent` (1)

### `submit`
`/app/node_modules/pg/lib/query.js:173` | Self: 0.0% (0us) | Total: 0.9% (336.9ms) | Samples: 0

**Called by:**
- `_pulseQueryQueue` (38)

**Calls:**
- `prepare` (37)
- `prepare` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:242` | Self: 0.0% (0us) | Total: 0.0% (979us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `HttpRequest` (1)

### `async insertEmails`
`/app/src/deps.ts:84` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async insertEmails` (1)

**Calls:**
- `map` (1)

### `get`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:332` | Self: 0.0% (0us) | Total: 0.3% (113.3ms) | Samples: 0

**Called by:**
- `defaultEndpointResolver` (11)

**Calls:**
- `hash` (7)
- `hash` (2)
- `hash` (2)

### `parseCommandCompleteMessage`
`/app/node_modules/pg-protocol/dist/parser.js:177` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `handlePacket` (2)

**Calls:**
- `toString` (2)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:6` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `emitResponseFinished`
`node:_http_server:1988` | Self: 0.0% (0us) | Total: 0.4% (176.4ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (18)

**Calls:**
- `emit` (16)
- `emit` (1)
- `emit` (1)

### `onFree`
`node:_http_agent:206` | Self: 0.0% (0us) | Total: 1.3% (472.5ms) | Samples: 0

**Called by:**
- `emit` (59)

**Calls:**
- `emit` (54)
- `emit` (4)
- `emit` (1)

### `onNodeHTTPRequest`
`node:_http_server:504` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Calls:**
- `addListener` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:40` | Self: 0.0% (0us) | Total: 0.0% (3.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `convertHttpAuthSchemesToMap` (1)

### `createHash`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:480` | Self: 0.0% (0us) | Total: 0.4% (180.1ms) | Samples: 0

**Called by:**
- `Sha256Node` (16)

**Calls:**
- `createHmac` (9)
- `createHash` (5)
- `toBuffer` (2)

### `async signer`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:293` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/himport/HimportCoordinator.js:9` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `genDebugFunction` (1)

### `async digest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:468` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `hmac` (1)

**Calls:**
- `digest` (1)

### `cloneTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:65` | Self: 0.0% (0us) | Total: 0.7% (254.2ms) | Samples: 0

**Called by:**
- `concat` (19)
- `use` (4)

**Calls:**
- `forEach` (23)

### `onNodeHTTPRequest`
`node:_http_server:460` | Self: 0.0% (0us) | Total: 0.1% (44.0ms) | Samples: 0

**Calls:**
- `IncomingMessage` (6)
- `IncomingMessage` (1)
- `IncomingMessage` (1)

### `async putObject`
`/app/src/deps.ts:71` | Self: 0.0% (0us) | Total: 0.0% (19.2ms) | Samples: 0

**Called by:**
- `async putObject` (2)

**Calls:**
- `PutObjectCommand` (2)

### `resolve`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:270` | Self: 0.0% (0us) | Total: 1.4% (526.3ms) | Samples: 0

**Called by:**
- `send` (54)

**Calls:**
- `getMiddlewareList` (13)
- `getMiddlewareList` (12)
- `getMiddlewareList` (10)
- `getMiddlewareList` (9)
- `getMiddlewareList` (8)
- `getMiddlewareList` (2)

### `race`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:104` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `finally` (1)

### `resolve`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:271` | Self: 0.0% (0us) | Total: 0.1% (38.8ms) | Samples: 0

**Called by:**
- `send` (4)

**Calls:**
- `map` (4)

### `(anonymous)`
`node:_http_server:410` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `emitCloseNT`
`internal:http:47` | Self: 0.0% (0us) | Total: 0.0% (28.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (4)

**Calls:**
- `emit` (2)
- `emit` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/defaults.js:85` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:228` | Self: 0.0% (0us) | Total: 0.1% (43.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `async (anonymous)` (5)

### `read`
`internal:streams/from:10` | Self: 0.0% (0us) | Total: 0.1% (36.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `(anonymous)` (2)
- `readableAddChunkPushObjectMode` (1)

### `read`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:768` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async deserializeHttpMessage` (1)

**Calls:**
- `of` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:184` | Self: 0.0% (0us) | Total: 0.2% (95.0ms) | Samples: 0

**Called by:**
- `async resolveParams` (11)

**Calls:**
- `entries` (11)

### `emitListeningNextTick`
`node:_http_server:161` | Self: 0.0% (0us) | Total: 0.0% (12.7ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `isStoppedModuleGraphRunning` (1)

### `guarded`
`internal:shared:114` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `emitLookup` (5)

### `(anonymous)`
`/app/node_modules/ioredis/built/cluster/index.js:11` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `addChunk`
`internal:streams/readable:267` | Self: 0.0% (0us) | Total: 6.5% (2.37s) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (270)

**Calls:**
- `emit` (265)
- `emit` (4)
- `emit` (1)

### `onfinish`
`internal:streams/readable:483` | Self: 0.0% (0us) | Total: 0.2% (74.0ms) | Samples: 0

**Called by:**
- `onceWrapper` (7)
- `emit` (3)

**Calls:**
- `unpipe` (8)
- `removeListener` (2)

### `(anonymous)`
`/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:227` | Self: 0.0% (0us) | Total: 0.1% (71.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (13)

**Calls:**
- `stringHasher` (7)
- `stringHasher` (7)

### `emitFreeNT`
`node:_http_client:482` | Self: 0.0% (0us) | Total: 0.3% (132.4ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (19)

**Calls:**
- `closeRequest` (19)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1610` | Self: 0.0% (0us) | Total: 0.0% (27.8ms) | Samples: 0

**Called by:**
- `emit` (4)

**Calls:**
- `concatBytes` (4)

### `(anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/crc/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:2` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/app/src/server.ts:186` | Self: 0.0% (0us) | Total: 6.8% (2.48s) | Samples: 0

**Called by:**
- `async withDeps` (253)

**Calls:**
- `async rateLimit` (253)

### `htmlToText`
`/app/src/htmltotext.ts:121` | Self: 0.0% (0us) | Total: 0.1% (45.0ms) | Samples: 0

**Called by:**
- `normalizeEmail` (4)

**Calls:**
- `skipRaw` (3)
- `skipRaw` (1)

### `writeBody`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:207` | Self: 0.0% (0us) | Total: 0.0% (21.1ms) | Samples: 0

**Called by:**
- `async writeRequestBody` (1)

**Calls:**
- `(anonymous)` (1)

### `require`
`[native code]` | Self: 0.0% (0us) | Total: 0.6% (251.6ms) | Samples: 0

**Called by:**
- `bound require` (77)

**Calls:**
- `anonymous` (77)

### `(anonymous)`
`/app/node_modules/ioredis/built/Redis.js:11` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:29` | Self: 0.0% (0us) | Total: 2.1% (788.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (77)

**Calls:**
- `async (anonymous)` (77)

### `ClientRequest`
`node:_http_client:175` | Self: 0.0% (0us) | Total: 0.2% (105.2ms) | Samples: 0

**Called by:**
- `request` (9)

**Calls:**
- `setHeader` (9)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:467` | Self: 0.0% (0us) | Total: 11.6% (4.19s) | Samples: 0

**Called by:**
- `_acquireClient` (379)

**Calls:**
- `query` (359)
- `query` (19)
- `query` (1)

### `parserOnMessageComplete`
`node:_http_common:60` | Self: 0.0% (0us) | Total: 0.2% (102.1ms) | Samples: 0

**Called by:**
- `execute` (12)

**Calls:**
- `readStart` (12)

### `_acquireClient`
`/app/node_modules/pg-pool/index.js:357` | Self: 0.0% (0us) | Total: 11.6% (4.19s) | Samples: 0

**Called by:**
- `processTicksAndRejections` (248)
- `_pulseQueue` (129)
- `_release` (3)

**Calls:**
- `(anonymous)` (379)
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:360` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `async getPayloadHash` (2)

**Calls:**
- `hasOwn` (2)

### `async resolveParamsForS3`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:71` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `isDnsCompatibleBucketName` (1)

### `isValidAddress`
`/app/src/email.ts:55` | Self: 0.0% (0us) | Total: 0.0% (14.7ms) | Samples: 0

**Called by:**
- `normalizeEmail` (4)

**Calls:**
- `asciiTrim` (4)

### `emitResponseFinish`
`node:_http_server:1468` | Self: 0.0% (0us) | Total: 0.0% (32.3ms) | Samples: 0

**Called by:**
- `emit` (7)

**Calls:**
- `onResponseFinishHandleSocket` (4)
- `onResponseFinishHandleSocket` (2)
- `onResponseFinishHandleSocket` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:87` | Self: 0.0% (0us) | Total: 0.3% (124.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (18)

**Calls:**
- `cloneObject` (15)
- `async serializeRequest` (3)

### `processClientData`
`node:_http_client:376` | Self: 0.0% (0us) | Total: 0.1% (47.0ms) | Samples: 0

**Called by:**
- `socketOnDataInner` (9)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (1)

### `bind`
`/app/node_modules/pg/lib/connection.js:189` | Self: 0.0% (0us) | Total: 0.9% (331.5ms) | Samples: 0

**Called by:**
- `prepare` (37)

**Calls:**
- `bind` (30)
- `bind` (4)
- `flush` (1)
- `flush` (1)
- `_send` (1)

### `async _handleAuthSASLContinue`
`/app/node_modules/pg/lib/client.js:353` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Calls:**
- `sendSCRAMClientFinalMessage` (1)

### `parseJson`
`/app/src/server.ts:84` | Self: 0.0% (0us) | Total: 1.0% (382.3ms) | Samples: 0

**Called by:**
- `async sendOne` (44)

**Calls:**
- `parse` (38)
- `toString` (6)

### `cb`
`/app/node_modules/pg-pool/index.js:37` | Self: 0.0% (0us) | Total: 0.0% (919us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:38` | Self: 0.0% (0us) | Total: 0.0% (6.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `stringHasher`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:145` | Self: 0.0% (0us) | Total: 0.1% (40.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `async digest` (7)

### `write_`
`node:_http_outgoing:582` | Self: 0.0% (0us) | Total: 0.1% (57.6ms) | Samples: 0

**Called by:**
- `end` (7)

**Calls:**
- `_implicitHeader` (6)
- `_implicitHeader` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/utils.js:3` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/Command.js:6` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/app/node_modules/ioredis/built/cluster/index.js:7` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `internal:streams/lazy_transform`
`internal:streams/lazy_transform:2` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:105` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `forEach` (1)

**Calls:**
- `getAllAliases` (1)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:434` | Self: 0.0% (0us) | Total: 0.6% (243.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (23)

**Calls:**
- `async collectBody` (23)

### `request`
`node:http:10` | Self: 0.0% (0us) | Total: 1.5% (560.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (47)

**Calls:**
- `ClientRequest` (18)
- `ClientRequest` (9)
- `ClientRequest` (6)
- `ClientRequest` (4)
- `ClientRequest` (3)
- `ClientRequest` (2)
- `ClientRequest` (2)
- `ClientRequest` (1)
- `ClientRequest` (1)
- `ClientRequest` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1603` | Self: 0.0% (0us) | Total: 0.6% (222.9ms) | Samples: 0

**Called by:**
- `Promise` (34)

**Calls:**
- `(anonymous)` (9)
- `(anonymous)` (7)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `prepareRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:412` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `async signRequest` (1)

**Calls:**
- `clone` (1)

### `processHeader`
`node:_http_outgoing:356` | Self: 0.0% (0us) | Total: 0.0% (35.8ms) | Samples: 0

**Called by:**
- `_storeHeader` (4)

**Calls:**
- `storeHeader` (3)
- `storeHeader` (1)

### `_write`
`node:net:1713` | Self: 0.0% (0us) | Total: 0.1% (36.1ms) | Samples: 0

**Called by:**
- `writeOrBuffer` (6)

**Calls:**
- `_unrefTimer` (5)
- `_unrefTimer` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:384` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `successHandler` (1)

### `readStart`
`node:_http_incoming:17` | Self: 0.0% (0us) | Total: 0.2% (102.1ms) | Samples: 0

**Called by:**
- `parserOnMessageComplete` (12)

**Calls:**
- `resume` (5)
- `resume` (3)
- `resume` (2)
- `resume` (1)
- `resume` (1)

### `createHash`
`node:crypto:191` | Self: 0.0% (0us) | Total: 0.2% (88.7ms) | Samples: 0

**Called by:**
- `createHash` (5)

**Calls:**
- `Hash` (5)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:99` | Self: 0.0% (0us) | Total: 0.1% (61.1ms) | Samples: 0

**Called by:**
- `resolve` (9)

**Calls:**
- `forEach` (9)

### `_addListener`
`node:events:208` | Self: 0.0% (0us) | Total: 0.0% (16.5ms) | Samples: 0

**Called by:**
- `addListener` (3)

**Calls:**
- `copyWithInserted` (3)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (8.8ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `parse`
`/app/node_modules/pg-protocol/dist/parser.js:38` | Self: 0.0% (0us) | Total: 1.1% (407.5ms) | Samples: 0

**Called by:**
- `emit` (65)

**Calls:**
- `(anonymous)` (65)

### `(anonymous)`
`internal:streams/readable:373` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `flow` (1)

**Calls:**
- `endReadable` (1)

### `onDataIncomingMessage`
`internal:http:93` | Self: 0.0% (0us) | Total: 0.0% (15.2ms) | Samples: 0

**Calls:**
- `resume` (1)

### `streamCollector`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1597` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `collectBody` (1)

**Calls:**
- `isReadableStream` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (30.3ms) | Samples: 0

**Calls:**
- `bound require` (9)

### `readBody`
`/app/src/server.ts:48` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `async handle` (4)

**Calls:**
- `Promise` (4)

### `fromUtf8$1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:37` | Self: 0.0% (0us) | Total: 0.1% (52.3ms) | Samples: 0

**Called by:**
- `toUint8Array` (6)

**Calls:**
- `fromString` (5)
- `fromString` (1)

### `emitLookup`
`node:net:1845` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `guarded` (5)

**Calls:**
- `internalConnect` (4)
- `_unrefTimer` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:85` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (1)

**Calls:**
- `toEndpointV1` (1)

### `async sign`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:73` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `bind`
`/app/node_modules/pg-protocol/dist/serializer.js:94` | Self: 0.0% (0us) | Total: 0.0% (30.2ms) | Samples: 0

**Called by:**
- `bind` (4)

**Calls:**
- `addCString` (2)
- `addCString` (1)
- `addCString` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:242` | Self: 0.0% (0us) | Total: 0.0% (5.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `assign` (1)

### `onReply`
`/app/node_modules/ioredis/built/DataHandler.js:17` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `_Decoder_handleDecodedValue` (1)

**Calls:**
- `dispatch` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:97` | Self: 0.0% (0us) | Total: 0.0% (35.2ms) | Samples: 0

**Called by:**
- `Promise` (5)

**Calls:**
- `addEventListener` (5)

### `(anonymous)`
`internal:streams/readable:376` | Self: 0.0% (0us) | Total: 0.1% (47.4ms) | Samples: 0

**Called by:**
- `flow` (12)

**Calls:**
- `emit` (10)
- `emit` (1)
- `emit` (1)

### `onServerConnection`
`node:_http_server:676` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Calls:**
- `Socket` (2)
- `Socket` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:59` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async resolvedCredentials` (1)

### `keepSocketAlive`
`node:_http_agent:286` | Self: 0.0% (0us) | Total: 0.0% (24.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `unref` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:4` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async fn`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:333` | Self: 0.0% (0us) | Total: 0.0% (6.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:141` | Self: 0.0% (0us) | Total: 0.1% (48.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `copyDataProperties` (5)

### `getSigningKey`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:551` | Self: 0.0% (0us) | Total: 0.2% (96.7ms) | Samples: 0

**Called by:**
- `async signRequest` (13)

**Calls:**
- `async getSigningKey` (13)

### `async createStringToSign`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:252` | Self: 0.0% (0us) | Total: 0.0% (30.2ms) | Samples: 0

**Called by:**
- `async createStringToSign` (6)

**Calls:**
- `toUint8Array` (4)
- `update` (2)

### `tickOnSocket`
`node:_http_client:491` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `onSocketNT` (1)

**Calls:**
- `initialize` (1)

### `addCString`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:44` | Self: 0.0% (0us) | Total: 0.0% (23.8ms) | Samples: 0

**Called by:**
- `bind` (2)

**Calls:**
- `write` (2)

### `async sendOne`
`/app/src/server.ts:126` | Self: 0.0% (0us) | Total: 0.2% (78.2ms) | Samples: 0

**Called by:**
- `async sendOne` (4)

**Calls:**
- `stringify` (4)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:158` | Self: 0.0% (0us) | Total: 0.0% (24.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `hasHeaderWithPrefix` (1)

### `finishMaybe`
`internal:streams/writable:465` | Self: 0.0% (0us) | Total: 0.0% (27.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `prefinish` (1)
- `prefinish` (1)

### `createHmac`
`node:crypto:216` | Self: 0.0% (0us) | Total: 0.2% (87.2ms) | Samples: 0

**Called by:**
- `createHash` (9)

**Calls:**
- `Hmac` (8)
- `Hmac` (1)

### `genDebugFunction`
`/app/node_modules/ioredis/built/utils/debug.js:54` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `createDebug` (1)

### `fromUtf8$1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:38` | Self: 0.0% (0us) | Total: 0.0% (15.2ms) | Samples: 0

**Called by:**
- `toUint8Array` (2)

**Calls:**
- `get buffer` (2)

### `connect`
`/app/node_modules/pg-pool/index.js:235` | Self: 0.0% (0us) | Total: 0.0% (7.3ms) | Samples: 0

**Called by:**
- `query` (4)

**Calls:**
- `newClient` (3)
- `newClient` (1)

### `InvokeStoreSingle`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `InvokeStoreBase` (1)

### `WriteStream`
`internal:fs/streams:259` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `Writable` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:44` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async validateSigningProperties` (1)

**Calls:**
- `async signer` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:74` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `CommandRef`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:716` | Self: 0.0% (0us) | Total: 0.0% (11.9ms) | Samples: 0

**Called by:**
- `PutObjectCommand` (1)

**Calls:**
- `Command` (1)

### `async handle`
`/app/src/server.ts:192` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `readBody` (4)

### `_write`
`node:net:1719` | Self: 0.0% (0us) | Total: 35.0% (12.64s) | Samples: 0

**Called by:**
- `writeOrBuffer` (873)
- `doWrite` (540)
- `connect` (2)

**Calls:**
- `writeBuffered` (1415)

### `prepareRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:417` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async signRequest` (1)

**Calls:**
- `indexOf` (1)

### `getCanonicalQuery`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:188` | Self: 0.0% (0us) | Total: 0.0% (11.4ms) | Samples: 0

**Called by:**
- `createCanonicalRequest` (3)

**Calls:**
- `escapeUri` (3)

### `async insertEmails`
`/app/src/deps.ts:81` | Self: 0.0% (0us) | Total: 0.2% (83.8ms) | Samples: 0

**Called by:**
- `async insertEmails` (2)

**Calls:**
- `map` (2)

### `resume`
`node:net:1453` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `readStart` (1)

**Calls:**
- `drainOnreadTail` (1)

### `prependListener`
`node:events:218` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Called by:**
- `prependListener` (4)

**Calls:**
- `_addListener` (3)
- `_addListener` (1)

### `#resumeSocket`
`node:_http_server:1133` | Self: 0.0% (0us) | Total: 0.0% (15.2ms) | Samples: 0

**Called by:**
- `resume` (1)

**Calls:**
- `resume` (1)

### `internal:streams/legacy`
`internal:streams/legacy:2` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js:205` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `async resolveParamsForS3`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:66` | Self: 0.0% (0us) | Total: 0.0% (18.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `isArnBucketName` (2)

### `cloneTo`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:68` | Self: 0.0% (0us) | Total: 0.4% (168.8ms) | Samples: 0

**Called by:**
- `concat` (14)
- `use` (6)

**Calls:**
- `forEach` (20)

### `Writable`
`internal:streams/writable:181` | Self: 0.0% (0us) | Total: 0.1% (42.2ms) | Samples: 0

**Called by:**
- `Collector` (5)
- `WriteStream` (1)

**Calls:**
- `WritableState` (3)
- `WritableState` (2)
- `WritableState` (1)

### `isIPv4`
`internal:net/isIP:6` | Self: 0.0% (0us) | Total: 0.1% (37.5ms) | Samples: 0

**Called by:**
- `isIP` (1)

**Calls:**
- `/^(?:(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])\.){3}(?:25[0-5]\|2[0-4][0-9]\|1[0-9][0-9]\|[1-9][0-9]\|[0-9])$/` (1)

### `(anonymous)`
`/app/node_modules/pg-types/lib/textParsers.js:4` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `writeValues`
`/app/node_modules/pg-protocol/dist/serializer.js:65` | Self: 0.0% (0us) | Total: 0.2% (90.1ms) | Samples: 0

**Called by:**
- `bind` (11)

**Calls:**
- `arrayString` (9)
- `prepareValue` (1)
- `prepareValue` (1)

### `flush`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:104` | Self: 0.0% (0us) | Total: 0.0% (11.3ms) | Samples: 0

**Called by:**
- `bind` (1)

**Calls:**
- `allocUnsafe` (1)

### `writeOrBuffer`
`internal:streams/writable:285` | Self: 0.0% (0us) | Total: 20.3% (7.33s) | Samples: 0

**Called by:**
- `(anonymous)` (884)

**Calls:**
- `_write` (873)
- `_write` (6)
- `_write` (2)
- `_write` (2)
- `_write` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:257` | Self: 0.0% (0us) | Total: 0.0% (24.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`internal:streams/readable:481` | Self: 0.0% (0us) | Total: 0.0% (8.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `once` (4)

### `_writev`
`node:net:1686` | Self: 0.0% (0us) | Total: 0.1% (36.9ms) | Samples: 0

**Called by:**
- `doWrite` (5)

**Calls:**
- `(anonymous)` (5)

### `streamCollector`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1594` | Self: 0.0% (0us) | Total: 0.0% (3.7ms) | Samples: 0

**Called by:**
- `collectBody` (1)

**Calls:**
- `isBlob` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:232` | Self: 0.0% (0us) | Total: 0.5% (189.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (21)

**Calls:**
- `cloneObject` (21)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js:1371` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (2)

**Calls:**
- `async serializeRequest` (1)
- `async serializeRequest` (1)

### `toUint8Array`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:842` | Self: 0.0% (0us) | Total: 0.1% (67.5ms) | Samples: 0

**Called by:**
- `async getSignature` (4)
- `async createStringToSign` (4)

**Calls:**
- `fromUtf8$1` (6)
- `fromUtf8$1` (2)

### `(anonymous)`
`/app/node_modules/ioredis/built/transaction.js:6` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:19` | Self: 0.0% (0us) | Total: 0.5% (212.3ms) | Samples: 0

**Called by:**
- `async collectBody` (20)

**Calls:**
- `streamCollector` (20)

### `prepareValue`
`/app/node_modules/pg/lib/utils.js:63` | Self: 0.0% (0us) | Total: 0.0% (26.8ms) | Samples: 0

**Called by:**
- `writeValues` (1)

**Calls:**
- `isDate` (1)

### `ref`
`/app/node_modules/pg/lib/client.js:788` | Self: 0.0% (0us) | Total: 0.0% (13.7ms) | Samples: 0

**Called by:**
- `_pulseQueue` (4)

**Calls:**
- `ref` (4)

### `getTransformedHeaders`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:34` | Self: 0.0% (0us) | Total: 0.0% (11.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `hasOwn` (3)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:69` | Self: 0.0% (0us) | Total: 0.4% (168.8ms) | Samples: 0

**Called by:**
- `forEach` (20)

**Calls:**
- `addRelativeTo` (11)
- `addRelativeTo` (3)
- `cloneObject` (2)
- `addRelativeTo` (2)
- `addRelativeTo` (1)
- `addRelativeTo` (1)

### `_pulseQueue`
`/app/node_modules/pg-pool/index.js:164` | Self: 0.0% (0us) | Total: 3.9% (1.43s) | Samples: 0

**Called by:**
- `processTicksAndRejections` (129)
- `_release` (1)

**Calls:**
- `_acquireClient` (129)
- `_acquireClient` (1)

### `validate`
`/app/src/server.ts:92` | Self: 0.0% (0us) | Total: 5.5% (2.00s) | Samples: 0

**Called by:**
- `async sendOne` (227)

**Calls:**
- `normalizeEmail` (208)
- `normalizeEmail` (9)
- `normalizeEmail` (6)
- `normalizeEmail` (2)
- `normalizeEmail` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:178` | Self: 0.0% (0us) | Total: 0.1% (43.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `async (anonymous)` (4)
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/redis/event_handler.js:9` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `resume`
`node:_http_server:1258` | Self: 0.0% (0us) | Total: 0.0% (15.2ms) | Samples: 0

**Called by:**
- `onDataIncomingMessage` (1)

**Calls:**
- `#resumeSocket` (1)

### `getCanonicalHeaders`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:334` | Self: 0.0% (0us) | Total: 0.1% (63.7ms) | Samples: 0

**Called by:**
- `async signRequest` (4)

**Calls:**
- `sort` (4)

### `onwrite`
`internal:streams/writable:313` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `bound onwrite` (1)

**Calls:**
- `set` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:11` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Calls:**
- `bound require` (1)

### `skipBalanced`
`/app/src/htmltotext.ts:68` | Self: 0.0% (0us) | Total: 0.0% (31.4ms) | Samples: 0

**Called by:**
- `htmlToText` (3)

**Calls:**
- `parseTag` (2)
- `parseTag` (1)

### `_storeHeader`
`node:_http_outgoing:268` | Self: 0.0% (0us) | Total: 0.0% (35.8ms) | Samples: 0

**Called by:**
- `_implicitHeader` (4)

**Calls:**
- `processHeader` (4)

### `sendJson`
`/app/src/server.ts:35` | Self: 0.0% (0us) | Total: 0.3% (142.5ms) | Samples: 0

**Called by:**
- `async handle` (20)

**Calls:**
- `(anonymous)` (20)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1068` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `cloneObject` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:284` | Self: 0.0% (0us) | Total: 0.4% (160.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (11)
- `async (anonymous)` (1)

**Calls:**
- `toEndpointV1` (11)
- `asyncFunctionDrive` (1)

### `_destroy`
`node:_http_incoming:224` | Self: 0.0% (0us) | Total: 0.0% (10.1ms) | Samples: 0

**Called by:**
- `_destroy` (2)

**Calls:**
- `nextTick` (2)

### `(anonymous)`
`node:_http_server:2162` | Self: 0.0% (0us) | Total: 0.3% (142.5ms) | Samples: 0

**Called by:**
- `sendJson` (20)

**Calls:**
- `_writeHead` (11)
- `_writeHead` (5)
- `_writeHead` (2)
- `hasHeader` (1)
- `_writeHead` (1)

### `(anonymous)`
`internal:streams/readable:522` | Self: 0.0% (0us) | Total: 0.1% (51.7ms) | Samples: 0

**Called by:**
- `unpipe` (6)

**Calls:**
- `emit` (6)

### `connect`
`node:net:1700` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `emit` (3)

**Calls:**
- `_write` (2)
- `_write` (1)

### `classBuilder`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:597` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `makeCommand` (1)

**Calls:**
- `ClassBuilder` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:147` | Self: 0.0% (0us) | Total: 0.1% (58.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `bound schemaLogFilter` (7)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:266` | Self: 0.0% (0us) | Total: 0.1% (53.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `next` (2)

### `useColors`
`/app/node_modules/debug/src/node.js:158` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `createDebug` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:277` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async signer` (1)

**Calls:**
- `async region` (1)

### `_flushOutput`
`node:_http_outgoing:702` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Called by:**
- `_flush` (2)

**Calls:**
- `(anonymous)` (2)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:121` | Self: 0.0% (0us) | Total: 0.2% (84.5ms) | Samples: 0

**Called by:**
- `resolve` (10)

**Calls:**
- `forEach` (10)

### `async sign`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:85` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `asyncFunctionDrive` (1)
- `async sign` (1)

### `async createStringToSign`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:253` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `async createStringToSign` (2)

**Calls:**
- `async digest` (1)
- `async digest` (1)

### `async deserializeHttpMessage`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:449` | Self: 0.0% (0us) | Total: 0.2% (73.5ms) | Samples: 0

**Called by:**
- `async deserializeHttpMessage` (4)

**Calls:**
- `of` (4)

### `(anonymous)`
`node:_http_agent:65` | Self: 0.0% (0us) | Total: 0.4% (147.2ms) | Samples: 0

**Called by:**
- `emit` (29)

**Calls:**
- `removeSocket` (7)
- `removeSocket` (7)
- `once` (6)
- `removeSocket` (4)
- `removeSocket` (3)
- `removeSocket` (1)
- `removeSocket` (1)

### `ClientRequest`
`node:_http_client:154` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `request` (1)

**Calls:**
- `once` (1)

### `_writeHead`
`node:_http_server:1302` | Self: 0.0% (0us) | Total: 0.0% (25.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `checkInvalidHeaderChar` (1)

### `sendSCRAMClientFinalMessage`
`/app/node_modules/pg/lib/connection.js:168` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async _handleAuthSASLContinue` (1)

**Calls:**
- `_send` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:380` | Self: 0.0% (0us) | Total: 2.1% (790.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (78)

**Calls:**
- `async (anonymous)` (77)
- `cloneObject` (1)

### `ClientRequest`
`node:_http_client:200` | Self: 0.0% (0us) | Total: 0.6% (225.4ms) | Samples: 0

**Called by:**
- `request` (18)

**Calls:**
- `addRequest` (5)
- `addRequest` (3)
- `addRequest` (3)
- `addRequest` (3)
- `addRequest` (2)
- `addRequest` (1)
- `addRequest` (1)

### `async _defaultS3HttpAuthSchemeParametersProvider`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:827` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`node:_http_server:1954` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `sendJson` (1)

**Calls:**
- `callWriteHeadIfObservable` (1)

### `async getPayloadHash`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:375` | Self: 0.0% (0us) | Total: 0.7% (262.8ms) | Samples: 0

**Called by:**
- `async signRequest` (20)

**Calls:**
- `async (anonymous)` (10)
- `async (anonymous)` (4)
- `async (anonymous)` (4)
- `async (anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:385` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `async (anonymous)` (2)

### `bound _handleAuthSASLFinal`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (889us) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `_handleAuthSASLFinal` (1)

### `addChunk`
`internal:streams/readable:279` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `readableAddChunkPushObjectMode` (1)

**Calls:**
- `maybeReadMore` (1)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:421` | Self: 0.0% (0us) | Total: 0.6% (223.7ms) | Samples: 0

**Called by:**
- `async deserializeResponse` (23)

**Calls:**
- `async deserializeHttpMessage` (23)

### `resolveMiddlewareWithContext`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:601` | Self: 0.0% (0us) | Total: 0.5% (202.6ms) | Samples: 0

**Called by:**
- `send` (26)

**Calls:**
- `use` (26)

### `async handle`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:424` | Self: 0.0% (0us) | Total: 2.1% (774.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (74)

**Calls:**
- `async handle` (73)
- `async handle` (1)

### `toEndpointV1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:166` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `parseUrl` (1)

### `connect`
`node:net:1317` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `createSocket` (1)

**Calls:**
- `lookupAndConnect` (1)

### `prependListener`
`internal:streams/legacy:51` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `prependListener` (4)

### `async getInstanceAsync`
`/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:111` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/Redis.js:4` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `_pulseQueue`
`/app/node_modules/pg-pool/index.js:159` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `clearTimeout` (1)

### `realDeps`
`/app/src/deps.ts:49` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `S3Client` (1)

### `async handle`
`/app/src/server.ts:171` | Self: 0.0% (0us) | Total: 0.1% (65.9ms) | Samples: 0

**Called by:**
- `async handle` (1)

**Calls:**
- `(anonymous)` (1)

### `_connect`
`/app/node_modules/pg/lib/client.js:181` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `connect` (1)

### `from`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `toBase64$1`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:52` | Self: 0.0% (0us) | Total: 0.1% (46.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `toString` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:412` | Self: 0.0% (0us) | Total: 0.6% (218.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (46)

**Calls:**
- `collectBody` (45)
- `collectBody` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:228` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `cloneObject` (1)

### `async resolve`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:316` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `asyncFunctionDrive` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/DataHandler.js:29` | Self: 0.0% (0us) | Total: 0.0% (6.8ms) | Samples: 0

**Called by:**
- `emit` (4)

**Calls:**
- `write` (2)
- `write` (2)

### `(anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:5` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:397` | Self: 0.0% (0us) | Total: 0.0% (7.5ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `once` (1)

### `async sign`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:81` | Self: 0.0% (0us) | Total: 0.0% (22.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `async sign` (5)

### `newClient`
`/app/node_modules/pg-pool/index.js:266` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `connect` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/client.js:2` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async useFipsEndpoint`
`/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js:640` | Self: 0.0% (0us) | Total: 0.0% (14.8ms) | Samples: 0

**Called by:**
- `async configProvider` (1)

**Calls:**
- `async (anonymous)` (1)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:140` | Self: 0.0% (0us) | Total: 0.0% (29.5ms) | Samples: 0

**Called by:**
- `resolve` (2)

**Calls:**
- `sort` (2)

### `addInt32PrefixedString`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:72` | Self: 0.0% (0us) | Total: 0.2% (96.3ms) | Samples: 0

**Called by:**
- `writeValues` (8)

**Calls:**
- `write` (8)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:968` | Self: 0.0% (0us) | Total: 0.0% (33.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (4)

### `applyToStack`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:415` | Self: 0.0% (0us) | Total: 0.0% (28.8ms) | Samples: 0

**Called by:**
- `use` (2)

**Calls:**
- `addRelativeTo` (1)
- `addRelativeTo` (1)

### `(anonymous)`
`internal:streams/readable:184` | Self: 0.0% (0us) | Total: 0.0% (34.2ms) | Samples: 0

**Called by:**
- `read` (2)

**Calls:**
- `readableAddChunkPushObjectMode` (1)
- `readableAddChunkPushObjectMode` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:207` | Self: 0.0% (0us) | Total: 0.1% (63.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `async resolveParamsForS3` (4)
- `async resolveParamsForS3` (2)
- `async resolveParamsForS3` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:237` | Self: 0.0% (0us) | Total: 0.1% (66.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `cloneObject` (4)

### `push`
`internal:fixed_queue:41` | Self: 0.0% (0us) | Total: 0.0% (15.0ms) | Samples: 0

**Called by:**
- `nextTick` (4)

**Calls:**
- `push` (4)

### `parserOnMessageComplete`
`node:_http_common:58` | Self: 0.0% (0us) | Total: 0.0% (9.7ms) | Samples: 0

**Called by:**
- `execute` (5)

**Calls:**
- `readableAddChunkPushByteMode` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:54` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `propertiesExtractor` (1)

### `doWrite`
`internal:streams/writable:298` | Self: 0.0% (0us) | Total: 15.2% (5.50s) | Samples: 0

**Called by:**
- `clearBuffer` (558)

**Calls:**
- `_write` (540)
- `_writev` (11)
- `_writev` (5)
- `_write` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js:92` | Self: 0.0% (0us) | Total: 0.3% (124.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (11)

**Calls:**
- `async (anonymous)` (7)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `cloneObject` (1)
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1611` | Self: 0.0% (0us) | Total: 0.0% (7.3ms) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `(anonymous)` (1)

### `_writeHead`
`node:_http_server:1295` | Self: 0.0% (0us) | Total: 0.0% (23.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `validateStatusCode` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:62` | Self: 0.0% (0us) | Total: 0.7% (254.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (28)

**Calls:**
- `async (anonymous)` (29)

### `(anonymous)`
`/app/node_modules/@ioredis/commands/built/index.js:16` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `forEach` (1)

### `async handle`
`/app/src/server.ts:198` | Self: 0.0% (0us) | Total: 16.3% (5.90s) | Samples: 0

**Called by:**
- `(anonymous)` (333)
- `(anonymous)` (278)

**Calls:**
- `async handle` (302)
- `sendJson` (257)
- `sendJson` (20)
- `async handle` (17)
- `async handle` (8)
- `async handle` (4)
- `sendJson` (1)
- `async handle` (1)
- `async handle` (1)

### `async serializeRequest`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:510` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `async serializeRequest` (2)

**Calls:**
- `async serializeRequest` (2)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:413` | Self: 0.0% (0us) | Total: 0.0% (23.3ms) | Samples: 0

**Calls:**
- `_remove` (1)

### `escapeUserAgent`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:729` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `filter` (1)

### `_handleAuthSASL`
`/app/node_modules/pg/lib/client.js:331` | Self: 0.0% (0us) | Total: 0.0% (903us) | Samples: 0

**Called by:**
- `bound _handleAuthSASL` (1)

**Calls:**
- `_getPassword` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:422` | Self: 0.0% (0us) | Total: 0.5% (193.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (23)

**Calls:**
- `toUtf8$1` (14)
- `subarray` (9)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:265` | Self: 0.0% (0us) | Total: 0.2% (97.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `URLSearchParams` (5)

### `unpipe`
`internal:streams/readable:487` | Self: 0.0% (0us) | Total: 0.1% (62.9ms) | Samples: 0

**Called by:**
- `onfinish` (8)

**Calls:**
- `(anonymous)` (6)
- `(anonymous)` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1063` | Self: 0.0% (0us) | Total: 0.0% (4.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `map` (1)

### `tickOnSocket`
`node:_http_client:497` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `onSocketNT` (1)

**Calls:**
- `emit` (1)

### `collectBody`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:432` | Self: 0.0% (0us) | Total: 0.5% (212.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (45)

**Calls:**
- `streamCollector` (43)
- `streamCollector` (1)
- `streamCollector` (1)

### `(anonymous)`
`internal:streams/writable:605` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Called by:**
- `_destroy` (1)

**Calls:**
- `onDestroy` (1)

### `async serializeRequest`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:253` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `updateServiceEndpoint` (1)

### `addRequest`
`node:_http_agent:125` | Self: 0.0% (0us) | Total: 0.1% (50.5ms) | Samples: 0

**Called by:**
- `ClientRequest` (3)

**Calls:**
- `normalizeServerName` (3)

### `(anonymous)`
`internal:streams/readable:528` | Self: 0.0% (0us) | Total: 0.1% (55.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)
- `tickOnSocket` (2)

**Calls:**
- `(anonymous)` (3)
- `resume` (2)
- `resume` (2)

### `lookupAndConnect`
`node:net:1783` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `lookupAndConnectMultiple` (1)

### `lookupAndConnectMultiple`
`node:net:1809` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `lookupAndConnect` (1)

**Calls:**
- `lookup` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/connection.js:51` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `emit` (2)

**Calls:**
- `emit` (2)

### `afterConnect`
`node:net:1991` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `open` (5)

**Calls:**
- `emit` (5)

### `data`
`node:net:863` | Self: 0.0% (0us) | Total: 6.6% (2.38s) | Samples: 0

**Calls:**
- `pushDataToSocket` (273)

### `handlePacket`
`/app/node_modules/pg-protocol/dist/parser.js:128` | Self: 0.0% (0us) | Total: 0.0% (13.8ms) | Samples: 0

**Called by:**
- `parse` (4)

**Calls:**
- `parseReadyForQueryMessage` (4)

### `query`
`/app/node_modules/pg-pool/index.js:449` | Self: 0.0% (0us) | Total: 0.0% (22.8ms) | Samples: 0

**Called by:**
- `async insertEmails` (7)

**Calls:**
- `connect` (4)
- `connect` (2)
- `connect` (1)

### `(anonymous)`
`/app/node_modules/pg/lib/client.js:193` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `emit` (2)

**Calls:**
- `startup` (2)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:971` | Self: 0.0% (0us) | Total: 0.0% (33.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `async (anonymous)` (4)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:469` | Self: 0.0% (0us) | Total: 0.0% (5.7ms) | Samples: 0

**Called by:**
- `handleReadyForQuery` (3)

**Calls:**
- `removeListener` (1)
- `removeListener` (1)
- `removeListener` (1)

### `(anonymous)`
`internal:streams/readable:485` | Self: 0.0% (0us) | Total: 0.0% (11.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `once` (1)

### `(anonymous)`
`internal:streams/readable:431` | Self: 0.0% (0us) | Total: 0.1% (68.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `addListener` (7)

### `resume_`
`internal:streams/readable:591` | Self: 0.0% (0us) | Total: 0.1% (62.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (12)

**Calls:**
- `flow` (12)

### `(anonymous)`
`/app/node_modules/ioredis/built/redis/event_handler.js:205` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:141` | Self: 0.0% (0us) | Total: 0.5% (185.2ms) | Samples: 0

**Called by:**
- `resolve` (12)

**Calls:**
- `map` (12)

### `(module)`
`/app/src/server.ts:22` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Calls:**
- `realDeps` (1)

### `_pulseQueryQueue`
`/app/node_modules/pg/lib/client.js:638` | Self: 0.0% (0us) | Total: 0.0% (10.0ms) | Samples: 0

**Called by:**
- `_handleReadyForQuery` (5)

**Calls:**
- `emit` (3)
- `emit` (2)

### `emitReadable`
`internal:streams/readable:396` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `onEofChunk` (1)

**Calls:**
- `nextTick` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:20` | Self: 0.0% (0us) | Total: 0.1% (38.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `mutate` (4)

### `resolveMiddlewareWithContext`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:603` | Self: 0.0% (0us) | Total: 1.1% (425.7ms) | Samples: 0

**Called by:**
- `send` (44)

**Calls:**
- `concat` (34)
- `concat` (10)

### `async sendOne`
`/app/src/server.ts:134` | Self: 0.0% (0us) | Total: 12.2% (4.40s) | Samples: 0

**Called by:**
- `async handle` (463)

**Calls:**
- `async sendOne` (228)
- `async sendOne` (167)
- `async sendOne` (44)
- `async sendOne` (18)
- `async sendOne` (4)
- `async sendOne` (1)
- `async sendOne` (1)

### `node:events`
`node:events:655` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `assign` (1)

### `async handle`
`/app/src/server.ts:178` | Self: 0.0% (0us) | Total: 0.2% (106.7ms) | Samples: 0

**Called by:**
- `async handle` (17)

**Calls:**
- `get` (16)
- `get` (1)

### `async checkFeatures`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:615` | Self: 0.0% (0us) | Total: 0.0% (23.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `setFeature` (1)

### `applyToStack`
`/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js:443` | Self: 0.0% (0us) | Total: 0.0% (23.0ms) | Samples: 0

**Called by:**
- `use` (2)

**Calls:**
- `addRelativeTo` (2)

### `readableAddChunkPushObjectMode`
`internal:streams/readable:249` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `onEofChunk` (1)

### `addRequest`
`node:_http_agent:140` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `ClientRequest` (3)

**Calls:**
- `createSocket` (3)

### `parseUrl`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:147` | Self: 0.0% (0us) | Total: 0.4% (147.4ms) | Samples: 0

**Called by:**
- `toEndpointV1` (11)

**Calls:**
- `parseUrl` (6)
- `parseUrl` (3)
- `URL` (2)

### `_release`
`/app/node_modules/pg-pool/index.js:410` | Self: 0.0% (0us) | Total: 0.3% (109.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (8)

**Calls:**
- `setTimeout` (8)

### `endReadable`
`internal:streams/readable:897` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `nextTick` (1)

### `(anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:1` | Self: 0.0% (0us) | Total: 0.1% (48.0ms) | Samples: 0

**Calls:**
- `bound require` (8)

### `applyToStack`
`/app/node_modules/@smithy/core/dist-cjs/index.js:80` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `use` (1)

**Calls:**
- `addRelativeTo` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:796` | Self: 0.0% (0us) | Total: 0.1% (63.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `async (anonymous)` (8)

### `tryCatcher`
`/app/node_modules/standard-as-callback/built/utils.js:12` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:683` | Self: 0.0% (0us) | Total: 0.7% (254.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (18)
- `async (anonymous)` (8)

**Calls:**
- `map` (18)
- `async (anonymous)` (8)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js:824` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async _defaultS3HttpAuthSchemeParametersProvider` (1)

**Calls:**
- `async region` (1)

### `mutate`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:67` | Self: 0.0% (0us) | Total: 0.1% (38.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)

**Calls:**
- `setPrototypeOf` (4)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:199` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `find` (1)

### `normalizeQueryConfig`
`/app/node_modules/pg/lib/utils.js:157` | Self: 0.0% (0us) | Total: 0.4% (151.0ms) | Samples: 0

**Called by:**
- `Query` (13)

**Calls:**
- `cloneQueryConfig` (7)
- `defineProperties` (6)

### `internal:streams/transform`
`internal:streams/transform:2` | Self: 0.0% (0us) | Total: 0.0% (29.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:http`
`node:http:2` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js:1609` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `addListener` (1)

### `async sendOne`
`/app/src/server.ts:121` | Self: 0.0% (0us) | Total: 1.0% (382.3ms) | Samples: 0

**Called by:**
- `async sendOne` (44)

**Calls:**
- `parseJson` (44)

### `get`
`node:_http_incoming:93` | Self: 0.0% (0us) | Total: 0.0% (3.6ms) | Samples: 0

**Called by:**
- `async handle` (1)

**Calls:**
- `__lookupGetter__` (1)

### `clearTimeouts`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:309` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `clearTimeout` (1)

### `handlePacket`
`/app/node_modules/pg-protocol/dist/parser.js:125` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `parse` (2)

**Calls:**
- `parseCommandCompleteMessage` (2)

### `resume`
`internal:streams/readable:586` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `nextTick` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:146` | Self: 0.0% (0us) | Total: 0.4% (179.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (25)

**Calls:**
- `bound schemaLogFilter` (25)

### `addInt32PrefixedString`
`/app/node_modules/pg-protocol/dist/buffer-writer.js:64` | Self: 0.0% (0us) | Total: 0.2% (83.8ms) | Samples: 0

**Called by:**
- `writeValues` (9)

**Calls:**
- `byteLength` (9)

### `ConnectionParameters`
`/app/node_modules/pg/lib/connection-parameters.js:60` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `Client` (1)

**Calls:**
- `parse` (1)

### `parserOnIncomingClient`
`node:_http_client:431` | Self: 0.0% (0us) | Total: 3.3% (1.22s) | Samples: 0

**Called by:**
- `execute` (105)

**Calls:**
- `emit` (96)
- `(anonymous)` (4)
- `addListener` (3)
- `emit` (2)

### `async getSignature`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:546` | Self: 0.0% (0us) | Total: 0.1% (44.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `Sha256Node` (4)

### `onError`
`node:_http_incoming:391` | Self: 0.0% (0us) | Total: 0.0% (32.3ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (2)

**Calls:**
- `listenerCount` (2)

### `SignatureV4MultiRegion`
`/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js:57` | Self: 0.0% (0us) | Total: 0.0% (13.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `SignatureV4SignWithCredentials` (2)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:1078` | Self: 0.0% (0us) | Total: 0.2% (84.7ms) | Samples: 0

**Called by:**
- `async (anonymous)` (7)

**Calls:**
- `async (anonymous)` (4)
- `async (anonymous)` (3)

### `calculateServerName`
`node:_http_agent:200` | Self: 0.0% (0us) | Total: 0.1% (37.5ms) | Samples: 0

**Called by:**
- `normalizeServerName` (1)

**Calls:**
- `isIP` (1)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:464` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `_acquireClient` (1)

**Calls:**
- `once` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/index.js:67` | Self: 0.0% (0us) | Total: 0.1% (36.9ms) | Samples: 0

**Called by:**
- `async (anonymous)` (4)
- `(anonymous)` (1)

**Calls:**
- `async (anonymous)` (4)
- `async (anonymous)` (1)

### `submit`
`/app/node_modules/pg/lib/query.js:177` | Self: 0.0% (0us) | Total: 9.9% (3.58s) | Samples: 0

**Called by:**
- `_pulseQueryQueue` (324)

**Calls:**
- `(anonymous)` (324)

### `closeRequest`
`node:_http_client:49` | Self: 0.0% (0us) | Total: 0.3% (132.4ms) | Samples: 0

**Called by:**
- `emitFreeNT` (19)

**Calls:**
- `emit` (19)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:396` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `Promise` (2)

**Calls:**
- `addEventListener` (2)

### `initPromise`
`/app/node_modules/ioredis/built/Command.js:294` | Self: 0.0% (0us) | Total: 0.0% (18.4ms) | Samples: 0

**Called by:**
- `Command` (3)

**Calls:**
- `Promise` (3)

### `(anonymous)`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `resume_`
`internal:streams/readable:590` | Self: 0.0% (0us) | Total: 0.1% (41.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (4)

**Calls:**
- `(anonymous)` (4)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:525` | Self: 0.0% (0us) | Total: 0.1% (47.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `formatDate` (5)

### `_send`
`/app/node_modules/pg/lib/connection.js:175` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Called by:**
- `describe` (1)
- `sendSCRAMClientFinalMessage` (1)
- `bind` (1)

**Calls:**
- `(anonymous)` (3)

### `update`
`/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js:241` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Called by:**
- `stringHasher` (7)

**Calls:**
- `crc32` (7)

### `async (anonymous)`
`/app/node_modules/@aws/lambda-invoke-store/dist-cjs/invoke-store.js:102` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `InvokeStoreSingle` (1)

### `parserOnHeadersComplete`
`node:_http_common:36` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `execute` (1)

**Calls:**
- `_addHeaderLines` (1)

### `(anonymous)`
`internal:streams/writable:601` | Self: 0.0% (0us) | Total: 0.0% (30.5ms) | Samples: 0

**Called by:**
- `finish` (1)

**Calls:**
- `destroy` (1)

### `async deserializeResponse`
`/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js:403` | Self: 0.0% (0us) | Total: 0.0% (17.8ms) | Samples: 0

**Called by:**
- `async deserializeResponse` (1)

**Calls:**
- `of` (1)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:478` | Self: 0.0% (0us) | Total: 0.0% (919us) | Samples: 0

**Called by:**
- `handleReadyForQuery` (1)

**Calls:**
- `cb` (1)

### `getMiddlewareList`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:142` | Self: 0.0% (0us) | Total: 0.1% (60.4ms) | Samples: 0

**Called by:**
- `resolve` (8)

**Calls:**
- `reduce` (8)

### `cleanup`
`internal:streams/readable:443` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `onunpipe` (1)

**Calls:**
- `removeListener` (1)

### `getCanonicalQuery`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:206` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `createCanonicalRequest` (1)

**Calls:**
- `join` (1)

### `async (anonymous)`
`/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js:253` | Self: 0.0% (0us) | Total: 0.7% (254.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (29)

**Calls:**
- `async (anonymous)` (21)
- `async (anonymous)` (5)
- `async (anonymous)` (2)
- `asyncFunctionDrive` (1)

### `async (anonymous)`
`/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js:226` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `hasHeader` (1)

### `(anonymous)`
`internal:streams/writable:251` | Self: 0.0% (0us) | Total: 20.4% (7.36s) | Samples: 0

**Called by:**
- `sendCommand` (880)
- `_send` (3)
- `startup` (2)
- `ondata` (2)
- `_flushOutput` (2)
- `end` (1)
- `sendSASLInitialResponseMessage` (1)

**Calls:**
- `writeOrBuffer` (884)
- `_write` (3)
- `writeOrBuffer` (2)
- `_write` (1)
- `writeOrBuffer` (1)

### `ClientRequest`
`node:_http_client:84` | Self: 0.0% (0us) | Total: 0.0% (35.1ms) | Samples: 0

**Called by:**
- `request` (2)

**Calls:**
- `OutgoingMessage` (1)
- `OutgoingMessage` (1)

### `(anonymous)`
`/app/node_modules/pg-pool/index.js:474` | Self: 0.0% (0us) | Total: 0.5% (199.0ms) | Samples: 0

**Called by:**
- `handleReadyForQuery` (25)

**Calls:**
- `(anonymous)` (25)

### `(anonymous)`
`/app/node_modules/ioredis/built/redis/event_handler.js:431` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `size` (1)

### `async writeRequestBody`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:198` | Self: 0.0% (0us) | Total: 0.5% (206.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (12)
- `async writeRequestBody` (11)

**Calls:**
- `async writeRequestBody` (11)
- `writeBody` (10)
- `async writeRequestBody` (1)
- `writeBody` (1)

### `async signRequest`
`/app/node_modules/@smithy/signature-v4/dist-cjs/index.js:542` | Self: 0.0% (0us) | Total: 0.0% (11.2ms) | Samples: 0

**Called by:**
- `async sign` (3)

**Calls:**
- `async signRequest` (2)
- `async signRequest` (1)

### `find`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `successHandler`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:120` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `getUpdatedSystemClockOffset` (1)

### `clone`
`/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js:44` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `prepareRequest` (1)

**Calls:**
- `cloneQuery` (1)

### `ClientRequest`
`node:_http_client:131` | Self: 0.0% (0us) | Total: 0.0% (30.8ms) | Samples: 0

**Called by:**
- `request` (4)

**Calls:**
- `checkIsHttpToken` (4)

### `(anonymous)`
`/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js:337` | Self: 0.0% (0us) | Total: 0.0% (25.9ms) | Samples: 0

**Called by:**
- `Promise` (2)

**Calls:**
- `setTimeout` (2)

### `emitResponseFinish`
`node:_http_server:1464` | Self: 0.0% (0us) | Total: 0.1% (39.9ms) | Samples: 0

**Called by:**
- `emit` (4)

**Calls:**
- `_dump` (4)

### `_acquireClient`
`/app/node_modules/pg-pool/index.js:340` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `resolveMiddleware`
`/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js:730` | Self: 0.0% (0us) | Total: 0.0% (923us) | Samples: 0

**Called by:**
- `send` (1)

**Calls:**
- `bind` (1)

### `async validateSigningProperties`
`/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js:55` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async sign` (1)

**Calls:**
- `async (anonymous)` (1)

### `(anonymous)`
`/app/node_modules/ioredis/built/cluster/DelayQueue.js:4` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `arrayString`
`/app/node_modules/pg/lib/utils.js:40` | Self: 0.0% (0us) | Total: 0.1% (54.8ms) | Samples: 0

**Called by:**
- `writeValues` (9)

**Calls:**
- `escapeElement` (7)
- `prepareValue` (2)

### `addressList`
`/app/src/email.ts:95` | Self: 0.0% (0us) | Total: 0.0% (11.2ms) | Samples: 0

**Called by:**
- `normalizeEmail` (2)

**Calls:**
- `map` (2)

### `endReadableNT`
`internal:streams/readable:906` | Self: 0.0% (0us) | Total: 0.0% (30.7ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (7)

**Calls:**
- `destroy` (7)

### `_pulseQueue`
`/app/node_modules/pg-pool/index.js:161` | Self: 0.0% (0us) | Total: 0.0% (13.7ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (2)
- `_release` (2)

**Calls:**
- `ref` (4)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 65.7% | 23.72s | `[native code]` |
| 4.1% | 1.49s | `/app/src/htmltotext.ts` |
| 3.6% | 1.30s | `node:events` |
| 2.8% | 1.04s | `node:_http_incoming` |
| 2.5% | 926.0ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js` |
| 2.3% | 851.5ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/client/index.js` |
| 1.9% | 698.8ms | `/app/src/server.ts` |
| 1.7% | 623.0ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js` |
| 1.3% | 479.4ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js` |
| 1.1% | 429.2ms | `internal:streams/readable` |
| 1.0% | 388.9ms | `/app/node_modules/@smithy/signature-v4/dist-cjs/index.js` |
| 1.0% | 374.6ms | `node:_http_server` |
| 1.0% | 369.5ms | `node:_http_agent` |
| 0.8% | 310.1ms | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js` |
| 0.6% | 218.2ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/transport/index.js` |
| 0.5% | 207.4ms | `/app/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/submodules/s3/index.js` |
| 0.5% | 205.5ms | `node:net` |
| 0.5% | 203.2ms | `/app/node_modules/@smithy/node-http-handler/dist-cjs/index.js` |
| 0.5% | 197.7ms | `internal:streams/writable` |
| 0.4% | 153.3ms | `node:_http_outgoing` |
| 0.3% | 141.8ms | `node:_http_client` |
| 0.3% | 139.0ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js` |
| 0.3% | 121.1ms | `/app/src/email.ts` |
| 0.3% | 117.8ms | `/app/src/deps.ts` |
| 0.2% | 103.3ms | `internal:streams/destroy` |
| 0.2% | 93.3ms | `/app/node_modules/ioredis/built/Command.js` |
| 0.2% | 85.0ms | `node:_http_common` |
| 0.2% | 84.0ms | `/app/node_modules/pg-pool/index.js` |
| 0.2% | 81.3ms | `/app/node_modules/pg/lib/client.js` |
| 0.2% | 74.5ms | `/app/node_modules/@aws-sdk/client-s3/dist-cjs/index.js` |
| 0.2% | 74.0ms | `node:diagnostics_channel` |
| 0.1% | 70.4ms | `/app/node_modules/ioredis/built/Redis.js` |
| 0.1% | 68.4ms | `/app/node_modules/pg/lib/utils.js` |
| 0.1% | 66.5ms | `internal:streams/from` |
| 0.1% | 57.2ms | `/app/node_modules/pg/lib/query.js` |
| 0.1% | 54.3ms | `/app/node_modules/pg/lib/result.js` |
| 0.1% | 50.1ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/config/index.js` |
| 0.1% | 47.1ms | `/app/node_modules/@smithy/core/dist-cjs/index.js` |
| 0.1% | 44.9ms | `/app/node_modules/@aws-sdk/checksums/dist-cjs/submodules/flexible-checksums/index.js` |
| 0.0% | 33.5ms | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js` |
| 0.0% | 31.6ms | `/app/node_modules/ioredis/built/utils/Commander.js` |
| 0.0% | 23.4ms | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js` |
| 0.0% | 20.0ms | `/app/node_modules/@aws-sdk/core/dist-cjs/submodules/util/index.js` |
| 0.0% | 19.6ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/checksum/index.js` |
| 0.0% | 18.6ms | `/app/node_modules/pg-protocol/dist/parser.js` |
| 0.0% | 16.3ms | `internal:fixed_queue` |
| 0.0% | 15.3ms | `/app/node_modules/pg/lib/connection.js` |
| 0.0% | 12.9ms | `/app/node_modules/pg-protocol/dist/serializer.js` |
| 0.0% | 12.7ms | `internal:shared` |
| 0.0% | 12.2ms | `node:crypto` |
| 0.0% | 10.8ms | `/app/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js` |
| 0.0% | 9.4ms | `internal:validators` |
| 0.0% | 7.5ms | `/app/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.0% | 7.2ms | `internal:streams/duplex` |
| 0.0% | 6.3ms | `/app/node_modules/@smithy/core/dist-cjs/submodules/retry/index.js` |
| 0.0% | 4.6ms | `/app/node_modules/denque/index.js` |
| 0.0% | 4.2ms | `/app/node_modules/ioredis/built/resp/decoder.js` |
| 0.0% | 3.6ms | `internal:streams/legacy` |
| 0.0% | 2.6ms | `/app/node_modules/ioredis/built/DataHandler.js` |
| 0.0% | 2.6ms | `/app/node_modules/pg/lib/connection-parameters.js` |
| 0.0% | 2.1ms | `internal:async_context_frame` |
| 0.0% | 1.2ms | `internal:streams/state` |
| 0.0% | 1.2ms | `/app/node_modules/ioredis/built/tracing.js` |
| 0.0% | 1.2ms | `/app/node_modules/pg-protocol/dist/index.js` |
| 0.0% | 1.1ms | `/app/node_modules/pg-protocol/dist/buffer-reader.js` |
| 0.0% | 1.0ms | `/app/node_modules/@ioredis/commands/built/index.js` |
| 0.0% | 1.0ms | `node:dns` |
| 0.0% | 889us | `/app/node_modules/pg/lib/crypto/sasl.js` |
