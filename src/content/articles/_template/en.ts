import type { ArticleTranslation } from "../types";

// TEMPLATE for a new article (copied by `npm run new-article`). Keep this structure: see ../README.md.
// Every "TODO" must be replaced before the build will pass (scripts/check-articles.mjs).
export const en: ArticleTranslation = {
  slug: "todo-article-slug", // lowercase Latin letters, digits and hyphens only
  title: "TODO: the H1 title readers see",
  seoTitle: "TODO: search title, 30-60 characters, main keyword first", // 30-60 characters
  metaDescription:
    "TODO: search description of 120 to 160 characters. Say what the page covers and the value it gives the reader.", // 120-160
  imageAlt: "TODO: describe the share image in one sentence",
  keywords: ["TODO main search phrase", "TODO second phrase", "TODO third phrase"],
  // Answer-first: two sentences a reader (or an answer engine) could quote on their own.
  summary: "TODO: the short answer in two sentences.",
  body: [
    // Keep a disclaimer first for legal, medical or administrative topics.
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "TODO: this guide is for information only; always check the official sources before acting.",
    },
    { type: "p", text: "**TODO: the question the reader is asking.**" },
    { type: "p", text: "TODO: introduction, 2-3 short paragraphs that answer it plainly." },

    { type: "h2", id: "first-section", text: "1. TODO: first section heading" },
    { type: "p", text: "TODO: paragraph." },

    // PICTURE between paragraphs: copy this block to any spot in `body`. Put the file in /public/blog/
    // (WebP, max 1600px wide, under 250 KB) and write alt text and a caption in every language.
    // Credit is required for CC BY / CC BY-SA photos; leave it out for your own work or CC0.
    // {
    //   type: "figure",
    //   src: "/blog/your-picture.webp",
    //   width: 1600,
    //   height: 1200,
    //   alt: "Describe what the picture shows",
    //   caption: "Short caption that connects the picture to the paragraph.",
    //   credit: { text: "Photo: Author, CC BY 4.0, via Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:..." },
    // },

    // VIDEO between paragraphs: YouTube and Vimeo use privacy-friendly embeds; "file" plays an MP4 from /public/blog/.
    // {
    //   type: "video",
    //   provider: "youtube", // "youtube" | "vimeo" | "file"
    //   id: "VIDEO_ID", // for "file": "/blog/your-video.mp4"
    //   title: "Accessible title of the video",
    //   description: "What the video covers (used for search engines).",
    //   caption: "Short caption shown under the video.",
    //   uploadDate: "2026-01-01",
    //   duration: "PT3M20S", // optional, ISO 8601
    // },

    { type: "h2", id: "second-section", text: "2. TODO: second section heading" },
    { type: "p", text: "TODO: paragraph." },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        { q: "TODO: question readers actually ask?", a: "TODO: short, direct answer." },
        { q: "TODO: second question?", a: "TODO: short, direct answer." },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [{ label: "TODO: name of the official source", url: "https://example.com/" }],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "TODO: Last verified: month and year. Rules can change; check the latest official announcement before acting.",
    },
  ],
  // Side card: key facts and the whole path at a glance.
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "TODO: fact", value: "TODO: value" },
        { label: "TODO: fact", value: "TODO: value" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "The full path in brief" },
    { type: "ol", items: ["TODO: step one", "TODO: step two", "TODO: step three"] },
  ],
};
