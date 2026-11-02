// Smoke test on the real article registry: fails if its import chain picks up React/Next code
// (the report runs in plain Node) or if a post loses its keywords.
import { test } from "node:test";
import assert from "node:assert/strict";
import { ARTICLES } from "@/content/articles";
import { loadIndex } from "../registry";
import { bestMatch } from "../analyze";

test("every published translation has a URL and keywords", () => {
  const { urls, entries } = loadIndex();
  const translations = ARTICLES.reduce((n, a) => n + Object.keys(a.translations).length, 0);
  assert.equal(entries.length, translations);
  assert.equal([...urls.values()].filter((u) => !u.former).length, translations);
  for (const e of entries) assert.ok(e.keywords.length >= 3, `${e.id} (${e.lang}) has fewer than 3 keywords`);
});

test("former slugs map to the renamed post", () => {
  const { urls } = loadIndex();
  assert.deepEqual(urls.get("/en/blog/work-in-italy-from-tunisia/"), { id: "work-in-italy-from-tunisia", lang: "en", former: true });
});

test("each post's own first keyword matches it", () => {
  const { entries } = loadIndex();
  for (const e of entries) {
    const article = ARTICLES.find((a) => a.id === e.id)!;
    const first = article.translations[e.lang]!.keywords![0];
    assert.equal(bestMatch(first, e.lang, entries)?.id, e.id, `"${first}" should match ${e.id}`);
  }
});
