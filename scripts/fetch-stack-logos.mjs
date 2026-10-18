// One-off helper: downloads the logo of every tool in src/content/stack.ts from SVGL
// (https://svgl.app, the brand-logo library) into public/assets/stack/<slug>.svg.
// Run: node scripts/fetch-stack-logos.mjs   (existing files are kept; delete one to refetch it)
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(new URL("../src/content/stack.ts", import.meta.url), "utf8");
const outDir = new URL("../public/assets/stack/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const tools = [...src.matchAll(/^\s*\{ slug: "([^"]+)", name: "([^"]+)".*$/gm)].map((m) => {
  const svgl = m[0].match(/svgl: (null|"[^"]*")/)?.[1];
  return { slug: m[1], name: m[2], svgl: svgl === "null" ? null : svgl ? svgl.slice(1, -1) : m[2] };
});

// Logos sit on white tiles, so take the variant drawn for light backgrounds
const pick = (route) => (typeof route === "string" ? route : route?.light ?? route?.dark);
const missing = [];
for (const t of tools) {
  const file = new URL(t.slug + ".svg", outDir);
  if (existsSync(file) || t.svgl === null) {
    if (t.svgl === null) missing.push(t.name);
    continue;
  }
  try {
    const hits = await (await fetch("https://api.svgl.app?search=" + encodeURIComponent(t.svgl))).json();
    // Prefer the entry named exactly like the tool or the search term (SVGL also returns product variants)
    const norm = (v) => v.toLowerCase().replace(/[^a-z0-9]/g, "");
    const best = Array.isArray(hits) && hits.length
      ? hits.find((h) => [norm(t.name), norm(t.svgl)].includes(norm(h.title))) ?? hits[0]
      : null;
    const url = best ? pick(best.route) : null;
    if (!url) {
      missing.push(t.name);
      continue;
    }
    const svg = await (await fetch(url)).text();
    if (!svg.includes("<svg")) throw new Error("not an svg");
    writeFileSync(file, svg);
    console.log("ok", t.slug, "<-", best.title);
  } catch (e) {
    missing.push(t.name + " (" + e.message + ")");
  }
}
console.log("\nNo SVGL logo (initials shown):", missing.join(", ") || "none");

// The list of tools that have a logo file, read by components/home/tool-logo.tsx
const slugs = new Set(tools.map((t) => t.slug));
const have = readdirSync(outDir).map((f) => f.replace(/\.svg$/, "")).filter((s) => slugs.has(s)).sort();
writeFileSync(new URL("../src/content/stack-logos.json", import.meta.url), JSON.stringify(have, null, 1) + "\n");
console.log("stack-logos.json:", have.length, "logos");
