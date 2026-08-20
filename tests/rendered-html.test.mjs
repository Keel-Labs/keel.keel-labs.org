import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const url = new URL(request.url);
          const path = new URL(`../public${url.pathname}`, import.meta.url);
          try {
            const body = await readFile(path);
            return new Response(body, {
              headers: {
                "content-type": url.pathname.endsWith(".html")
                  ? "text/html; charset=utf-8"
                  : "application/octet-stream",
              },
            });
          } catch {
            return new Response("Not found", { status: 404 });
          }
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Keel product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Bring your/);
  assert.match(html, /memory/);
  assert.match(html, /An AI assistant whose memory belongs to you/);
  assert.match(html, /Local-first desktop app for Mac and Windows/);
  assert.match(html, /Markdown workspace/);
  assert.match(html, /Keel context engine/);
  assert.match(html, /Now available — v0\.5\.1/);
  assert.match(html, /keel-logo\.png/);
  assert.match(html, /_astro\/index\.C3LzDC1v\.css/);
  assert.match(html, /Open source/);
  assert.doesNotMatch(html, /Starter Project|codex-preview|SkeletonPreview/);
});
