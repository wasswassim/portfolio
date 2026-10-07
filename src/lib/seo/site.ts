// Single source of truth for the public origin (matches public/CNAME + deploy.yml).
export const SITE_URL = "https://wassimgatri.com";
export const SITE_NAME = "Wassim Gatri";
export const BLOG_NAME = "Building a Life in Italy";
export const AUTHOR_ID = `${SITE_URL}/#wassim`;

/** Absolute URL for a site path (non-ASCII slugs are percent-encoded). Paths start and end with "/". */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${encodeURI(path)}`;
}

// Public profiles used for the author entity (sameAs) in JSON-LD
export const SOCIAL_PROFILES = [
  "https://github.com/wasswassim",
  "https://www.linkedin.com/in/wassim-gatri-683a12259/",
];

// 1.91:1 share card used when an article has no image of its own
export const DEFAULT_SHARE_IMAGE = { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 };
