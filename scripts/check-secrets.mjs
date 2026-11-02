// Secret check: node scripts/check-secrets.mjs  (also runs before every `npm run build`)
// Fails when any file git could commit (tracked, staged, or untracked and not ignored) holds a
// Google service-account key or a private key block. Keys belong outside the repo (e.g. ~/.secrets/)
// and reach scripts through env vars such as GSC_SERVICE_ACCOUNT_JSON. Only file paths are printed,
// never the matched text.
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

// Built from parts so this file does not match itself
const PATTERNS = [
  ["service-account key", new RegExp('"type"\\s*:\\s*"service' + '_account"')],
  ["private key block", new RegExp("-----BEGIN [A-Z ]*PRIVATE " + "KEY-----")],
];
const MAX_BYTES = 2 * 1024 * 1024;

let files;
try {
  const out = execFileSync("git", ["ls-files", "-z", "--cached", "--others", "--exclude-standard"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "ignore"],
  });
  files = [...new Set(out.split("\0").filter(Boolean))];
} catch {
  // Builds from an isolated copy without .git: nothing git could commit there
  console.warn("check-secrets: not a git checkout, skipped");
  process.exit(0);
}

const hits = [];
for (const file of files) {
  let text;
  try {
    if (statSync(file).size > MAX_BYTES) continue;
    text = readFileSync(file, "utf8");
  } catch {
    continue; // deleted in the working tree, or unreadable
  }
  for (const [label, re] of PATTERNS) {
    if (re.test(text)) hits.push(`${file}: ${label}`);
  }
}

if (hits.length > 0) {
  console.error("error: secrets found in files git could commit:");
  for (const h of hits) console.error("  " + h);
  console.error("Move the key outside the repo and pass it through an env var (see .gitignore).");
  process.exit(1);
}
console.log(`check-secrets: ${files.length} files clean`);
