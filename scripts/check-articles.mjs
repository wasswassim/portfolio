// Article check: node scripts/check-articles.mjs  (also runs before every `npm run build`)
// Each article is a folder under src/content/articles/data/ with article.ts (id, dates) and one
// <lang>.ts per translation. Files are scanned as text (no TS toolchain). Enforces the article
// template (src/content/articles/README.md) so every post ships with the same quality bar:
//   - no unfinished "TODO" left from the template
//   - valid ids, slugs, dates, lastVerified
//   - SEO: title 30-60 characters, description 120-160, image alt, 3+ keywords
//   - structure: FAQ block (id "faq"), sources block (id "official-sources")
//   - all languages mirror each other (same heading ids, same number of pictures and videos)
import { existsSync, readdirSync, readFileSync } from "node:fs";

const dataDir = new URL("../src/content/articles/data/", import.meta.url);
const folders = readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
if (folders.length === 0) {
  console.error("error: no article folders found in src/content/articles/data");
  process.exit(1);
}

const LANGS = ["en", "fr", "ar"];
const errors = [];
const warnings = [];
const dup = (arr) => arr.filter((v, i) => arr.indexOf(v) !== i);
const len = (s) => [...s].length;
const validDate = (v) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));
// Full-line comments are ignored (the template keeps commented picture/video examples and a TODO notice)
const read = (folder, file) =>
  readFileSync(new URL(folder + "/" + file, dataDir), "utf8").replace(/^\s*\/\/.*$/gm, "");
const count = (text, re) => (text.match(re) || []).length;

const ids = [];
const slugsByLang = Object.fromEntries(LANGS.map((l) => [l, []]));

for (const folder of folders) {
  if (!existsSync(new URL(folder + "/article.ts", dataDir))) {
    errors.push(folder + ": article.ts is missing");
    continue;
  }
  const meta = read(folder, "article.ts");
  const id = meta.match(/^\s{2}id:\s*"([^"]+)"/m)?.[1];
  if (!id) {
    errors.push(folder + "/article.ts: no article id found (has the formatting changed?)");
    continue;
  }
  ids.push(id);
  if (id !== folder) errors.push(id + ": folder name must match the article id (" + folder + ")");
  if (/TODO/.test(meta)) errors.push(id + ": article.ts still contains TODO");

  for (const key of ["publishedAt", "updatedAt"]) {
    const value = meta.match(new RegExp(key + String.raw`:\s*"([^"]*)"`))?.[1];
    if (!value || !validDate(value)) errors.push(id + ": " + key + " must be a valid ISO date (got " + value + ")");
  }
  const verified = meta.match(/lastVerified:\s*(null|"[^"]*")/)?.[1];
  if (!verified) errors.push(id + ": lastVerified is missing (use null until verified)");
  else if (verified !== "null" && !validDate(verified.slice(1, -1))) {
    errors.push(id + ": lastVerified must be null or a valid ISO date (got " + verified + ")");
  }

  const structure = {};
  for (const lang of LANGS) {
    if (!existsSync(new URL(folder + "/" + lang + ".ts", dataDir))) {
      warnings.push(id + ": no " + lang + " translation");
      continue;
    }
    const t = read(folder, lang + ".ts");
    const where = id + " (" + lang + ")";

    if (/TODO/.test(t)) errors.push(where + ": still contains TODO from the template");

    const slug = t.match(/^\s{2}slug:\s*"([^"]+)"/m)?.[1];
    if (!slug) errors.push(where + ": missing slug");
    else {
      slugsByLang[lang].push(slug);
      if (!/^[a-z0-9-]+$/.test(slug)) errors.push(where + ': slug must be lowercase Latin letters, digits and hyphens (got "' + slug + '")');
    }

    const seoTitle = t.match(/^\s{2}seoTitle:\s*"([^"]*)"/m)?.[1];
    if (seoTitle === undefined) errors.push(where + ": missing seoTitle");
    else if (len(seoTitle) < 30 || len(seoTitle) > 60) errors.push(where + ": seoTitle is " + len(seoTitle) + " characters (aim for 30-60)");

    const desc = t.match(/^\s{2}metaDescription:\s*\n?\s*"([^"]*)"/m)?.[1];
    if (desc === undefined) errors.push(where + ": missing metaDescription");
    else if (len(desc) < 120 || len(desc) > 160) errors.push(where + ": metaDescription is " + len(desc) + " characters (aim for 120-160)");

    for (const field of ["title", "summary", "imageAlt"]) {
      if (!new RegExp("^\\s{2}" + field + String.raw`:\s*\n?\s*"[^"]+"`, "m").test(t)) errors.push(where + ": missing " + field);
    }
    const kw = t.match(/^\s{2}keywords:\s*\[([^\]]*)\]/m)?.[1];
    if (!kw || kw.split('",').length < 3) errors.push(where + ": add at least 3 keywords");

    if (!/type:\s*"faq"[\s\S]*?id:\s*"faq"/.test(t)) errors.push(where + ': needs a FAQ block with id "faq"');
    if (!/type:\s*"sources"[\s\S]*?id:\s*"official-sources"/.test(t)) errors.push(where + ': needs a sources block with id "official-sources"');
    if (!/tone:\s*"warning"/.test(t)) warnings.push(where + ": no warning callout (keep a disclaimer for legal or administrative topics)");
    if (!/type:\s*"keyFacts"/.test(t)) warnings.push(where + ": the guide card has no keyFacts block");

    // alt text is mandatory for every picture; videos need a title
    const figures = count(t, /type:\s*"figure"/g);
    if (count(t, /^\s+alt:\s*"[^"]+"/gm) < figures) errors.push(where + ": every figure needs alt text");
    const videos = count(t, /type:\s*"video"/g);
    if (count(t, /^\s+title:\s*"[^"]+"/gm) < 1 + videos) errors.push(where + ": every video needs a title");

    structure[lang] = {
      headings: [...t.matchAll(/\bid:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]).sort().join(","),
      figures,
      videos,
    };
  }

  // translations must mirror each other
  const langs = Object.keys(structure);
  for (const lang of langs.slice(1)) {
    const a = structure[langs[0]];
    const b = structure[lang];
    if (a.headings !== b.headings) errors.push(id + ": heading ids differ between " + langs[0] + " and " + lang);
    if (a.figures !== b.figures) errors.push(id + ": " + langs[0] + " has " + a.figures + " pictures, " + lang + " has " + b.figures);
    if (a.videos !== b.videos) errors.push(id + ": " + langs[0] + " has " + a.videos + " videos, " + lang + " has " + b.videos);
  }
}

for (const d of new Set(dup(ids))) errors.push("duplicate article id: " + d);
for (const lang of LANGS) {
  for (const d of new Set(dup(slugsByLang[lang]))) errors.push("duplicate " + lang + " slug: " + d);
}

warnings.forEach((w) => console.warn("warn: " + w));
if (errors.length) {
  errors.forEach((e) => console.error("error: " + e));
  process.exit(1);
}
console.log("articles ok (" + ids.length + " article(s))");
