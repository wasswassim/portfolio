// Thresholds for the opportunity report. Every value can be overridden by an env var of the same
// name (e.g. MIN_IMPRESSIONS=5 npm run seo:report) to tune a run without editing code.

export type Config = {
  /** Ignore queries seen fewer times than this in the window */
  MIN_IMPRESSIONS: number;
  /** Average position band that counts as "ranks, but not on page 1 top" */
  POS_MIN: number;
  POS_MAX: number;
  /** Queries with a CTR above this already get their clicks */
  MAX_CTR: number;
  /** Days of data, ending LAG_DAYS ago (Search Console "final" data lags 2-3 days) */
  WINDOW_DAYS: number;
  LAG_DAYS: number;
  /** Fewer qualifying queries than this = thin data: the seed keyword list is added */
  THIN_ROWS: number;
  /** Match score (0-1) from which a post counts as targeting a query */
  MATCH_THRESHOLD: number;
  /** CTR a query could reach near position 3; the score is the clicks the page is missing */
  TARGET_CTR: number;
  /** Rows kept in the report */
  TOP_N: number;
};

export const DEFAULTS: Config = {
  MIN_IMPRESSIONS: 20,
  POS_MIN: 8,
  POS_MAX: 50,
  MAX_CTR: 0.02,
  WINDOW_DAYS: 28,
  LAG_DAYS: 3,
  THIN_ROWS: 50,
  MATCH_THRESHOLD: 0.6,
  TARGET_CTR: 0.1,
  TOP_N: 100,
};

export function loadConfig(env: Record<string, string | undefined> = process.env): Config {
  const out = { ...DEFAULTS };
  for (const key of Object.keys(DEFAULTS) as (keyof Config)[]) {
    const raw = env[key];
    if (raw === undefined || raw === "") continue;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0) throw new ConfigError(`${key} must be a non-negative number`);
    out[key] = n;
  }
  for (const key of ["MIN_IMPRESSIONS", "WINDOW_DAYS", "LAG_DAYS", "THIN_ROWS", "TOP_N"] as const) {
    if (!Number.isInteger(out[key])) throw new ConfigError(`${key} must be a whole number`);
  }
  if (out.WINDOW_DAYS < 1 || out.WINDOW_DAYS > 480) throw new ConfigError("WINDOW_DAYS must be 1-480 (Search Console keeps 16 months)");
  if (out.POS_MIN > out.POS_MAX) throw new ConfigError("POS_MIN must not be above POS_MAX");
  for (const key of ["MAX_CTR", "MATCH_THRESHOLD", "TARGET_CTR"] as const) {
    if (out[key] > 1) throw new ConfigError(`${key} must be between 0 and 1`);
  }
  return out;
}

/** Bad or missing configuration (exit code 2). Messages never include secret values. */
export class ConfigError extends Error {}
