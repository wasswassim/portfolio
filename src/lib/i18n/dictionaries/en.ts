import type { CategoryId } from "@/content/articles/types";

export const en = {
  blogName: "Building a Life in Italy",
  blogTagline: "Practical guides and honest notes on moving to, studying in and working from Italy.",
  nav: { home: "Portfolio", blog: "Blog", language: "Language", skip: "Skip to content" },
  landing: { heading: "Building a Life in Italy", empty: "No articles in this language yet.", read: "Read article" },
  article: { published: "Published", updated: "Updated", verified: "Last verified", back: "All articles", notVerified: "Not yet verified against an official source.", guide: "Guide", summary: "In short", toc: "On this page", faq: "Frequently asked questions", sources: "Sources", keyFacts: "Key facts", readTime: (n: number) => `${n} min read` },
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
