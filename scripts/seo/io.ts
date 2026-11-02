// Small input helpers for run.ts, kept apart so tests can import them without running the report.
import { readFileSync } from "node:fs";
import type { GscRow } from "./analyze";
import { ConfigError } from "./config";

/** Host the page URLs use: "sc-domain:example.com" -> "example.com". */
export function siteHostOf(siteUrl: string): string {
  if (siteUrl.startsWith("sc-domain:")) return siteUrl.slice("sc-domain:".length);
  try {
    return new URL(siteUrl).hostname;
  } catch {
    throw new ConfigError(`GSC_SITE_URL must be "sc-domain:<domain>" or a URL prefix, got "${siteUrl}"`);
  }
}

/** Window of WINDOW_DAYS ending LAG_DAYS before today (UTC), as YYYY-MM-DD. */
export function dateWindow(today: Date, windowDays: number, lagDays: number): { start: string; end: string } {
  const day = 86_400_000;
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()) - lagDays * day);
  const start = new Date(end.getTime() - (windowDays - 1) * day);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return { start: iso(start), end: iso(end) };
}

/** Saved rows: either GscRow[] or a raw searchanalytics.query response ({ rows: [{ keys, ... }] }). */
export function readOfflineRows(file: string): GscRow[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    throw new ConfigError(`Cannot read offline rows from ${file}: ${(err as Error).message}`);
  }
  const list = Array.isArray(parsed) ? parsed : parsed && typeof parsed === "object" ? (parsed as { rows?: unknown }).rows : undefined;
  if (!Array.isArray(list)) throw new ConfigError(`${file} must hold an array of rows or { "rows": [...] }`);
  const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : undefined);
  const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);
  const out: GscRow[] = [];
  list.forEach((item: unknown, i) => {
    if (!item || typeof item !== "object") throw new ConfigError(`${file}: row ${i} is not an object`);
    const r = item as Record<string, unknown>;
    const keys = Array.isArray(r.keys) ? r.keys : [];
    const query = str(r.query) ?? str(keys[0]);
    const page = str(r.page) ?? str(keys[1]);
    const impressions = num(r.impressions);
    const position = num(r.position);
    if (!query || !page || impressions === undefined || position === undefined) {
      throw new ConfigError(`${file}: row ${i} needs query, page, numeric impressions and position`);
    }
    const clicks = num(r.clicks) ?? 0;
    out.push({ query, page, clicks, impressions, ctr: num(r.ctr) ?? (impressions ? clicks / impressions : 0), position });
  });
  return out;
}
