// Scaffold a new article from the template and register it.
//   npm run new-article -- <id> [category]
//   id: lowercase letters, digits, hyphens (e.g. renting-a-flat-in-milan)
//   category: documents | work | studies | language | daily-life (default daily-life)
// Add --root <dir> to run against another project copy (used for testing).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const rootFlag = args.indexOf("--root");
const root = rootFlag >= 0 ? resolve(args.splice(rootFlag, 2)[1]) : resolve(fileURLToPath(new URL("..", import.meta.url)));
const [id, category = "daily-life"] = args;

const CATEGORIES = ["documents", "work", "studies", "language", "daily-life"];
const fail = (msg) => {
  console.error("error: " + msg);
  process.exit(1);
};

if (!id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  fail("give an id of lowercase letters, digits and hyphens, e.g. npm run new-article -- renting-a-flat-in-milan");
}
if (!CATEGORIES.includes(category)) fail("category must be one of: " + CATEGORIES.join(", "));

const articles = join(root, "src/content/articles");
const target = join(articles, "data", id);
if (existsSync(target)) fail("src/content/articles/data/" + id + " already exists");

const camel = id.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^[0-9]/, (c) => "a" + c);
const today = new Date().toISOString().slice(0, 10);

// 1) copy the template, adapting the import path, id, name, category and dates
mkdirSync(target, { recursive: true });
for (const file of readdirSync(join(articles, "_template"))) {
  let text = readFileSync(join(articles, "_template", file), "utf8");
  text = text.split('"../types"').join('"../../types"');
  if (file === "article.ts") {
    text = text
      .replace("articleTemplate", camel)
      .replace('id: "template-article"', 'id: "' + id + '"')
      .replace(/category: "[a-z-]+"/, 'category: "' + category + '"')
      .replace(/publishedAt: "[0-9-]+"/, 'publishedAt: "' + today + '"')
      .replace(/updatedAt: "[0-9-]+"/, 'updatedAt: "' + today + '"');
  }
  writeFileSync(join(target, file), text);
}

// 2) register it in the article list
const indexPath = join(articles, "index.ts");
let index = readFileSync(indexPath, "utf8");
const importLine = 'import { ' + camel + ' } from "./data/' + id + '/article";';
const imports = [...index.matchAll(/^import .*from "\.\/data\/.*";$/gm)];
if (imports.length === 0) fail("could not find the article imports in index.ts; register the article by hand");
const last = imports[imports.length - 1];
index = index.slice(0, last.index + last[0].length) + "\n" + importLine + index.slice(last.index + last[0].length);
const listRe = /export const ARTICLES: readonly Article\[\] = \[([^\]]*)\];/;
const m = index.match(listRe);
if (!m) fail("could not find the ARTICLES list in index.ts; register the article by hand");
const entries = m[1].split(",").map((s) => s.trim()).filter(Boolean);
index = index.replace(listRe, "export const ARTICLES: readonly Article[] = [" + [...entries, camel].join(", ") + "];");
writeFileSync(indexPath, index);

console.log("Created src/content/articles/data/" + id + "/ (article.ts, en.ts, fr.ts, ar.ts) and registered it.");
console.log("Next: replace every TODO in the three language files, add pictures/videos between paragraphs,");
console.log("set lastVerified once the facts are checked, then run: npm run check:articles");
console.log("Part of a series? Append \"" + id + "\" to its articleIds in src/content/articles/series.ts.");
