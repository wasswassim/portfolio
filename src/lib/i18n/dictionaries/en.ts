import type { CategoryId } from "@/content/articles/types";

export const en = {
  blogName: "Building a Life in Italy",
  blogTagline: "Practical guides and honest notes on moving to, studying in and working from Italy.",
  nav: { home: "Portfolio", blog: "Blog", language: "Language", skip: "Skip to content" },
  landing: { imageCredit: "Satellite image: NASA MODIS", seoTitle: "Building a Life in Italy: Guides for Moving and Working", metaDescription: "Practical guides based on official sources for moving to, studying in and working from Italy, by Wassim Gatri, in English, French and Arabic.", other: "Available in other languages", heading: "Building a Life in Italy", empty: "No articles in this language yet.", read: "Read article" },
  article: { by: "By", published: "Published", updated: "Updated", verified: "Last verified", back: "All articles", notVerified: "Not yet verified against an official source.", guide: "Guide", summary: "In short", toc: "On this page", faq: "Frequently asked questions", sources: "Sources", photos: "Photos:", keyFacts: "Key facts", readTime: (n: number) => `${n} min read` },
  series: { label: "Series", continue: "Continue the series", part: (n: number, total: number) => `Part ${n} of ${total}`, next: "Next step", previous: "Previous step", start: "Start here" },
  callout: { tip: "Tip", warning: "Warning", note: "Note" },
  footer: { rights: "Wassim Gatri. All rights reserved.", builtBy: "Written by Wassim Gatri" },
  notFound: { title: "Page not found", body: "This page doesn't exist or has moved.", cta: "Back to the blog" },
  categories: {
    documents: "Documents",
    work: "Work",
    language: "Language",
    "daily-life": "Daily life",
  } satisfies Record<CategoryId, string>,
};

export type Dictionary = typeof en;
