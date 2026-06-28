const { ReadableStream, TransformStream, WritableStream } = require("node:stream/web");
const { Blob, File } = require("node:buffer");

if (typeof globalThis.ReadableStream === "undefined") {
  globalThis.ReadableStream = ReadableStream;
}

if (typeof globalThis.TransformStream === "undefined") {
  globalThis.TransformStream = TransformStream;
}

if (typeof globalThis.WritableStream === "undefined") {
  globalThis.WritableStream = WritableStream;
}

if (typeof globalThis.Blob === "undefined") {
  globalThis.Blob = Blob;
}

if (typeof globalThis.File === "undefined") {
  globalThis.File = File;
}

const { fetch, Headers, Request, Response, FormData } = require("undici");

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = fetch;
}

if (typeof globalThis.Headers === "undefined") {
  globalThis.Headers = Headers;
}

if (typeof globalThis.Request === "undefined") {
  globalThis.Request = Request;
}

if (typeof globalThis.Response === "undefined") {
  globalThis.Response = Response;
}

if (typeof globalThis.FormData === "undefined") {
  globalThis.FormData = FormData;
}
