// One set of media queries for the whole site, so every section puts a given
// device in the same bucket. Client-only — call from effects or handlers.
export const MQ = {
  touch:   "(hover: none) and (pointer: coarse)",
  fine:    "(hover: hover) and (pointer: fine)",
  mobile:  "(max-width: 767px)",
  reduced: "(prefers-reduced-motion: reduce)",
} as const;

export const matches = (query: string) => window.matchMedia(query).matches;
