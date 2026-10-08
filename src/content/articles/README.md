# Writing a blog article

Every article follows the same template as the first one (`data/work-in-italy-from-tunisia/`).
Do not invent a new layout: fill in the template, and add pictures or videos wherever they help.

## Create a post

```bash
npm run new-article -- my-article-id work
```

- `my-article-id`: lowercase letters, digits and hyphens. It becomes the folder name and is shared by all languages.
- Category: `documents`, `work`, `language` or `daily-life` (default `daily-life`).

This copies `_template/` into `data/my-article-id/` (`article.ts`, `en.ts`, `fr.ts`, `ar.ts`) and registers it in `index.ts`.
Replace every `TODO`. `npm run check:articles` (and every `npm run build`) fails while a `TODO` or a template rule is broken, so an unfinished post cannot be deployed.

## The template (what every post contains)

`body` (the real article, in the main column):

1. A **warning callout** first for legal, medical or administrative topics (a disclaimer).
2. A bold **opening question**, then 2-3 intro paragraphs that answer it plainly.
3. Numbered **`h2` sections** (`h3` for steps inside a section), with unique `id`s. They feed the "On this page" list in the side card.
4. **Pictures and videos between paragraphs** wherever they help (see below). Not one per paragraph.
5. A **FAQ block** (`id: "faq"`, shown as a dropdown, also published as FAQPage structured data).
6. A **sources block** (`id: "official-sources"`) with links to official pages.
7. A closing **update note** callout with the last-verified month.

`guide` (the scrollable side card): a `keyFacts` block and an `ol` with "the full path in brief".

Per language: `slug`, `title` (the H1), `seoTitle`, `metaDescription`, `imageAlt`, `keywords`, `summary` (answer-first, two sentences), `body`, `guide`.

## Pictures and videos between paragraphs

Add a block anywhere in `body`; it renders between the neighbouring paragraphs.

```ts
{
  type: "figure",
  src: "/blog/your-picture.webp",   // file in public/blog/
  width: 1600, height: 1200,
  alt: "What the picture shows",
  caption: "Short caption tying it to the paragraph.",
  credit: { text: "Photo: Author, CC BY 4.0, via Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:..." },
}
```

```ts
{
  type: "video",
  provider: "youtube",              // "youtube" | "vimeo" | "file"
  id: "VIDEO_ID",                   // for "file": "/blog/your-video.mp4"
  title: "Accessible title",
  description: "What the video covers.",
  caption: "Shown under the video.",
  uploadDate: "2026-10-07",
  duration: "PT3M20S",              // optional
}
```

Rules for media:

- Pictures: WebP, at most 1600 px wide, ideally under 250 KB. Real width and height are required (they prevent layout shift). Alt text and caption in **every** language.
- Photos need a **licence you can use**. CC BY / CC BY-SA require a `credit`; CC0 and your own photos do not. Never use an image without checking the licence.
- Do not put a real person's photo in an article unless it is clearly relevant, and keep the caption factual (no implied endorsement).
- YouTube and Vimeo embeds use the privacy-friendly domains and load lazily. YouTube videos get a thumbnail automatically; Vimeo and self-hosted videos need `thumbnail` (a file in `public/blog/`).
- Videos also publish `VideoObject` structured data automatically.
- Optional share image for the article (1200x630 JPG in `public/blog/`): set `image` in `article.ts`.

## SEO rules (enforced by the check)

- `seoTitle`: 30-60 characters, main keyword first.
- `metaDescription`: 120-160 characters, say what the page covers and the value it gives.
- At least 3 `keywords`, an `imageAlt`, one H1 (the `title`), unique heading ids.
- All three languages mirror each other: same heading ids, same number of pictures and videos.
- Slugs: lowercase Latin letters, digits, hyphens (non-ASCII slugs break `next dev`).
- `lastVerified`: `null` until the facts are checked against an official source, then the date. Update `updatedAt` only for real content changes.

Facts about laws, fees, deadlines and offices must come from official sources, linked in the sources block. Do not publish a claim you have not checked.
