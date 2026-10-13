// IndexNow: tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver, Yep) which pages changed,
// so they recrawl them right away instead of waiting. Runs in the deploy workflow, in two steps:
//   node scripts/indexnow.mjs snapshot   before the deploy: saves the live sitemap
//   node scripts/indexnow.mjs submit     after the deploy: waits until the new build is live, then submits
//                                        the URLs that are new, whose <lastmod> changed, or that left
//                                        the sitemap (a renamed post's old URL)
// The first time (key file not live yet), or with INDEXNOW_ALL=1, every URL in the sitemap is submitted.
// The key is public by design: it is served at https://wassimgatri.com/<key>.txt (public/<key>.txt).
// Never fails the deploy: problems are logged and the script exits 0.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const KEY = "40903d7a814449bc933908e514f9559e";
const HOST = "wassimgatri.com";
const ORIGIN = "https://" + HOST;
const KEY_URL = `${ORIGIN}/${KEY}.txt`;
const SNAPSHOT = join(process.env.RUNNER_TEMP || ".", "indexnow-live-sitemap.json");
const NEW_SITEMAP = new URL("../out/sitemap.xml", import.meta.url);

const log = (msg) => console.log("indexnow: " + msg);
const stop = (msg) => {
  log(msg);
  process.exit(0);
};

// Cache-busting query: GitHub Pages caches for up to 10 minutes
const fresh = (url) => url + (url.includes("?") ? "&" : "?") + "t=" + Date.now();
async function getText(url) {
  try {
    const res = await fetch(fresh(url), { signal: AbortSignal.timeout(15000) });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

/** { url: lastmod } from a sitemap.xml */
function parseSitemap(xml) {
  const map = {};
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (loc) map[loc] = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
  }
  return map;
}

const mode = process.argv[2];

if (mode === "snapshot") {
  const keyLive = (await getText(KEY_URL))?.trim() === KEY;
  const xml = await getText(`${ORIGIN}/sitemap.xml`);
  writeFileSync(SNAPSHOT, JSON.stringify({ keyLive, urls: xml ? parseSitemap(xml) : null }));
  stop(`saved the live sitemap (key file live: ${keyLive})`);
}

if (mode !== "submit") stop('usage: node scripts/indexnow.mjs snapshot|submit');

if (!existsSync(NEW_SITEMAP)) stop("out/sitemap.xml not found; nothing submitted");
const newXml = readFileSync(NEW_SITEMAP, "utf8");
const next = parseSitemap(newXml);
const before = existsSync(SNAPSHOT) ? JSON.parse(readFileSync(SNAPSHOT, "utf8")) : { keyLive: false, urls: null };

const all = process.env.INDEXNOW_ALL === "1" || !before.keyLive || !before.urls;
// New or updated URLs, plus URLs that left the sitemap (renamed posts now redirect, removed ones 404)
const urlList = Object.keys(next).filter((u) => all || before.urls[u] !== next[u]);
if (!all) urlList.push(...Object.keys(before.urls).filter((u) => !(u in next)));
if (urlList.length === 0) stop("no new or updated URL in the sitemap; nothing submitted");

// Wait for GitHub Pages to publish the new build: the key file and the new sitemap must both be live
let live = false;
for (let i = 0; i < 40 && !live; i++) {
  if (i) await new Promise((r) => setTimeout(r, 15000));
  live = (await getText(KEY_URL))?.trim() === KEY && (await getText(`${ORIGIN}/sitemap.xml`)) === newXml;
}
if (!live) stop("the new build was not live after 10 minutes; nothing submitted (re-run the workflow later)");

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList }),
    signal: AbortSignal.timeout(30000),
  });
  // 200 = received, 202 = received, key validation pending
  log(`submitted ${urlList.length} URL(s)${all ? " (all)" : ""}: HTTP ${res.status}`);
  if (!res.ok) log(await res.text());
  else urlList.forEach((u) => log("  " + u));
} catch (err) {
  log(`submit failed (${err instanceof Error ? err.message : String(err)})`);
}
