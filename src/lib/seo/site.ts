// Single source of truth for the public origin (matches public/CNAME + deploy.yml).
export const SITE_URL = "https://wassimgatri.com";
export const SITE_NAME = "Wassim Gatri";
export const BLOG_NAME = "Building a Life in Italy";
export const AUTHOR_ID = `${SITE_URL}/#wassim`;

/** Absolute URL for a site path. Paths must start with "/" and end with "/" (trailingSlash). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
