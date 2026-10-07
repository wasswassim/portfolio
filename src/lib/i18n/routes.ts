import { LANGS, type Lang } from "./config";

// Every URL ends in "/" because next.config.ts sets trailingSlash: true.
export const homePath = (): string => "/";
export const langHomePath = (lang: Lang): string => `/${lang}/`;
export const blogPath = (lang: Lang): string => `/${lang}/blog/`;
export const articlePath = (lang: Lang, slug: string): string => `/${lang}/blog/${slug}/`;

/** hreflang map ("en" | "fr" | "ar" | "x-default") from a per-language path builder. */
export function languageAlternates(
  pathFor: (lang: Lang) => string | null,
  xDefault: string,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const lang of LANGS) {
    const path = pathFor(lang);
    if (path) out[lang] = path;
  }
  out["x-default"] = xDefault;
  return out;
}
