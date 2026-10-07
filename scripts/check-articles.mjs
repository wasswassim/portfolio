// Registry integrity check: node scripts/check-articles.mjs
// Parses src/content/articles/index.ts as text (no TS toolchain needed) and fails on
// duplicate slugs/ids or bad dates, and warns when an article lacks a translation.
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/content/articles/index.ts", import.meta.url), "utf8");
const LANGS = ["en", "fr", "ar"];
const errors = [];
const warnings = [];

const ids = [...src.matchAll(/^\s{4}id:\s*"([^"]+)"/gm)].map((m) => m[1]);
if (ids.length === 0) {
  console.error("error: no articles parsed; has the registry formatting changed?");
  process.exit(1);
}
const dup = (arr) => arr.filter((v, i) => arr.indexOf(v) !== i);
for (const d of new Set(dup(ids))) errors.push(`duplicate article id: ${d}`);

for (const lang of LANGS) {
  const slugs = [...src.matchAll(new RegExp(`^\\s{6}${lang}:\\s*\\{[\\s\\S]*?slug:\\s*"([^"]+)"`, "gm"))].map((m) => m[1]);
  for (const d of new Set(dup(slugs))) errors.push(`duplicate ${lang} slug: ${d}`);
  if (slugs.length < ids.length) warnings.push(`${ids.length - slugs.length} article(s) have no ${lang} translation`);
}

const isoDate = /^\d{4}-\d{2}-\d{2}$/;
for (const key of ["publishedAt", "updatedAt"]) {
  for (const m of src.matchAll(new RegExp(`${key}:\\s*"([^"]*)"`, "g"))) {
    if (!isoDate.test(m[1]) || Number.isNaN(Date.parse(m[1]))) errors.push(`${key} is not a valid ISO date: ${m[1]}`);
  }
}
for (const m of src.matchAll(/lastVerified:\s*(null|"[^"]*")/g)) {
  const v = m[1];
  if (v !== "null" && (!isoDate.test(v.slice(1, -1)) || Number.isNaN(Date.parse(v.slice(1, -1))))) {
    errors.push(`lastVerified must be null or a valid ISO date: ${v}`);
  }
}

warnings.forEach((w) => console.warn(`warn: ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`error: ${e}`));
  process.exit(1);
}
console.log(`articles ok (${ids.length} article(s))`);
