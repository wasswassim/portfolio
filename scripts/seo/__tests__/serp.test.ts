import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadKey, parseMarkets, parseSerp, renderSerp } from "../serp";
import { ConfigError } from "../config";

const raw = {
  organic: [
    { title: "Guide A", link: "https://www.example.com/a", snippet: "s", position: 1, date: "3 mars 2026" },
    { title: "Our post", link: "https://wassimgatri.com/fr/blog/x/", snippet: "s", position: 2 },
    { title: "No link" },
  ],
  peopleAlsoAsk: [{ question: "Comment obtenir un contrat ?" }, { snippet: "no question" }],
  relatedSearches: [{ query: "visa travail italie" }],
};

test("parseSerp: domains, own position, PAA, related; drops rows without a link", () => {
  const s = parseSerp("q", { gl: "tn", hl: "fr" }, raw, "2026-11-20T00:00:00Z");
  assert.equal(s.organic.length, 2);
  assert.equal(s.organic[0].domain, "example.com");
  assert.equal(s.organic[0].date, "3 mars 2026");
  assert.equal(s.ownPosition, 2);
  assert.deepEqual(s.peopleAlsoAsk, ["Comment obtenir un contrat ?"]);
  assert.deepEqual(s.related, ["visa travail italie"]);
});

test("parseSerp: tolerates an empty or odd response", () => {
  const s = parseSerp("q", { gl: "it", hl: "it" }, null, "t");
  assert.deepEqual([s.organic, s.peopleAlsoAsk, s.related, s.ownPosition], [[], [], [], null]);
});

test("renderSerp: escapes HTML and table breaks in titles", () => {
  const s = parseSerp("q", { gl: "tn", hl: "fr" }, { organic: [{ title: "<b>A|B</b>", link: "https://e.com/" }] }, "t");
  const md = renderSerp(s);
  assert.ok(md.includes("&lt;b&gt;A\\|B&lt;/b&gt;"));
  assert.ok(md.includes("not in the top results"));
});

test("parseMarkets: defaults to Tunisia and Italy in the query language, validates input", () => {
  assert.deepEqual(parseMarkets(undefined, "ar"), [{ gl: "tn", hl: "ar" }, { gl: "it", hl: "ar" }]);
  assert.deepEqual(parseMarkets("tn:fr, IT:it", "en"), [{ gl: "tn", hl: "fr" }, { gl: "it", hl: "it" }]);
  assert.throws(() => parseMarkets("tunisia", "en"), ConfigError);
});

test("loadKey: env first, then the key file; errors never echo the value", () => {
  assert.equal(loadKey({ SERPER_API_KEY: "a".repeat(40) }), "a".repeat(40));
  const dir = mkdtempSync(join(tmpdir(), "serp-"));
  const file = join(dir, "k");
  writeFileSync(file, "b".repeat(40) + "\r\n");
  assert.equal(loadKey({ SERPER_KEY_FILE: file }), "b".repeat(40));
  writeFileSync(file, "SECRET VALUE with spaces");
  assert.throws(() => loadKey({ SERPER_KEY_FILE: file }), (e: Error) => e instanceof ConfigError && !e.message.includes("SECRET"));
  assert.throws(() => loadKey({ SERPER_KEY_FILE: join(dir, "missing") }), ConfigError);
});
