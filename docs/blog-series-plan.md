# Plan: split the first blog post into a 3-part series + keyword/SEO work

Handoff document for a fresh chat in this project (written 2026-10-08).
Status (2026-10-08): **implemented as a 2-part series, not 3.** The real text was ~1,950 words (EN, with FAQ),
so parts 2 and 3 would each have been under the 600-word floor in section 3; they were merged into
`work-contract-in-italy` (fr `contrat-de-travail-en-italie`). Series registry: `src/content/articles/series.ts`;
how-to: `src/content/articles/README.md` ("Links between posts", "Series"). The sections below are the original plan.
Open: native review of the new French/Arabic sentences; EN/AR keyword data (Mangools returned none).

---

## 0. How to start (read first)

1. Follow the user's global rule: read the `orchestrator` skill first and state the route (this is a **New feature, LARGE-ish**: new data model + component + 6 new content files x 3 languages + SEO work).
2. Load the `seo` skill (and `seo-specialist` agent if useful) **before writing any content**. Section 5 below summarises what it requires and how it maps to this task.
3. Read these files before planning details:
   - `src/content/articles/README.md`, `types.ts`, `blocks.ts`, `index.ts`
   - `src/content/articles/data/work-in-italy-from-tunisia/{article,en,fr,ar}.ts` (current post, 15 numbered H2 sections)
   - `src/content/articles/_template/*` and `scripts/check-articles.mjs`, `scripts/new-article.mjs`
   - `src/app/(blog)/[lang]/blog/[slug]/page.tsx`, `src/app/(blog)/[lang]/blog/page.tsx`
   - `src/components/blog/{ArticleBody,GuideCard,Inline,BidiText}.tsx`, `src/app/(blog)/blog.css`
   - `src/lib/i18n/dictionaries/{en,fr,ar}.ts`, `src/lib/i18n/routes.ts`, `src/lib/seo/{metadata,jsonld,site}.ts`
4. Show the user a short plan and wait for approval before building (the user prefers a gate on big changes).

## 1. Project facts and constraints

- Site: `wassimgatri.com` (GitHub Pages), Next.js 15.5 (webpack, never Turbopack), `output: "export"`, `trailingSlash: true`, TypeScript, typed dictionaries (no middleware/next-intl).
- Blog: "Building a Life in Italy", languages **en / fr / ar** (Arabic is RTL; Latin terms inside Arabic are wrapped with `BidiText`). URLs: `/{lang}/blog/` and `/{lang}/blog/{slug}/`.
- Article system: one `Article` (id, category, dates, image) + one translation per language (slug, title, seoTitle, metaDescription, imageAlt, keywords, summary, body blocks, guide blocks). Blocks: h2/h3, p, ul/ol, callout, figure, video, faq (accordion), sources, keyFacts. Inline markup supports `**bold**` and `[text](url)`; `safeHref` allows `/internal/` paths and `https://` URLs.
- `scripts/check-articles.mjs` runs as `prebuild` and `npm run check:articles`. It enforces: no TODO, seoTitle 30-60 chars, metaDescription 120-160, FAQ block with id `faq`, sources block with id `official-sources`, mirrored structure across the 3 languages (same block types/counts), alt text, etc. Extend it for the new series rules.
- **Do not run `next build` inside the project folder while the user's dev server may be running** (it clobbers `.next`). Verify with `npx tsc --noEmit`, `npx eslint`, `npm run check:articles`, and for full builds use an isolated copy (copy the project without `node_modules`, junction `node_modules`). Low free RAM on this machine can crash builds (retry).
- Windows machine; PowerShell/Bash both exist. Write scripts with the Write tool (shell escaping of quotes/backticks/backslashes has broken one-liners before).
- Git: commit and push **only when the user asks**. Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` (or the model that does the work). Separate logical commits. Untracked files to leave alone: `public/0419.mp4`, `ahref-repports/`, `kwfinder_travailler_en_italie_export.csv`.
- User preferences: do not change the homepage design; keep the email private (never publish it); blog pages use the light-gray "paper" theme; header positions must not move between languages; page transitions use cross-document view transitions (do not reintroduce a title view-transition-name).
- **Never name "Article 23" in titles, slugs or text.** It is a real provision (art. 23 of D.Lgs. 286/1998) but the post mixes several sources and readers do not search for it; the user decided to drop it. Say "this route / the training-abroad route".

## 2. Current state of the repo (uncommitted work to preserve)

HEAD is `8400aa4`. The working tree has **uncommitted edits** in `data/work-in-italy-from-tunisia/{en,fr,ar,article}.ts`:

- new section 13 "work contract" (id `work-contract`) and section 14 "job offers" (id `find-job-offers`); "Beware of scams" renumbered to 15;
- 3 new FAQ items (contract vs Contratto di soggiorno; work without a contract; where to find an offer);
- meta description + keywords updated (contract / jobs keywords); `updatedAt` and `lastVerified` set to 2026-10-08.

These edits pass `check:articles`, `tsc`, `eslint`. **Reuse this text** when distributing sections to the three posts. If the user prefers, commit it first as the single-post version; otherwise it is folded into the split commit.

Already shipped (do not redo): slugs without "Article 23"; homepage SEO (H1, canonical, OG/X, Person JSON-LD); visa-deadline sentence rewritten (see section 6).

Current slugs: en and ar `work-in-italy-from-tunisia`, fr `travailler-en-italie-depuis-la-tunisie`. Article id `work-in-italy-from-tunisia`; folder `src/content/articles/data/work-in-italy-from-tunisia/`; export `workInItalyFromTunisia`. Nothing is indexed yet (the user is just starting Search Console), so URL changes now are free.

## 3. Decision: split into three posts (a series)

Why: the single post would exceed ~2,400 words (readers drop off), and one page cannot rank well for several different searches. Each post should answer one search intent fully. Hub-and-spoke: Post 1 is the hub.

| # | Working title | Content (current section ids) | Word target (EN) |
|---|---|---|---|
| 1 | Start here: the route, who qualifies, how to begin | `what-is-this-route`, `who-can-apply`, `programs-and-jobs`, `how-to-start` (3 steps), `documents`, `training`, `find-job-offers`, `avoid-scams`, FAQ (route/eligibility/employer/buy-a-contract/occupations/Italian/training/job-offer questions), sources | 900-1,100 |
| 2 | Employer, work contract and Nulla Osta | `after-training`, `nulla-osta`, `work-contract`, `siisl`, short scam callout re "ready-made Nulla Osta", FAQ (employer; contract vs Contratto di soggiorno; work without a contract), sources | 700-900 |
| 3 | Visa and arrival | `work-visa`, `visa-timing`, `after-arrival`, closing checklist, FAQ (what after arriving; visa deadline), sources | 600-800 |

Notes:
- Section numbers restart in each post (1., 2., ...). Cross-references like "section 11" become links to the right post.
- Keep the three images: Meloni portrait stays in Post 1 (section "what is this route"), flags SVG in Post 3 (visa), Colosseum in Post 3 (after arrival). Post 2 needs no image (optional; do not invent a new image without the user).
- Each post must stand alone: 1-2 sentence recap at the top, plus a link to the previous/next post. Do not copy sections between posts (duplicate content).
- Risk to watch: Post 3 may be thin. Do not pad with unverified claims; if it stays under ~600 words, merge Post 3 into Post 2 and make it a 2-part series instead (tell the user).

## 4. Keyword plan (one primary intent per post, no cannibalization)

Data collected so far (all marked free-tier/limited):
- Mangools KWFinder, French, Tunisia: **"travailler en italie" ~120-140 searches/month, difficulty 20 ("still easy")**, intent informational, People Also Ask present; **"contrat de travail en italie" difficulty 16** (informational/transactional); **"emploi italie" difficulty 23**; "coût de la vie en Italie" ~10/month. Volumes for the other related terms are not shown on the free tier.
- SERP for "travailler en italie": Indeed, Jooble, Workwide, Italiahello, EURES, Meteojob, UFE, Welcome to the Jungle, ItalianCompanyFormation (domain authority 14-97). Many do not have the exact phrase in the title (Mangools flags "missing words in title") -> opportunity for exact-match titles.
- Ahrefs: the user has only the free Ahrefs Webmaster Tools (Site Audit health score 100, 0 errors, 0 backlinks). The Ahrefs MCP connector returns "Insufficient plan" on every call: **do not try to use it**. Keyword research is done by the user in Mangools (free) and pasted/exported to chat.
- **Pending from the user:** Mangools results for the English seed "work in Italy from Tunisia" and the Arabic seed "العمل في إيطاليا" (location Tunisia). Ask for them (screenshot or CSV) before locking EN/AR titles. French is the strongest-evidence language.

Proposed mapping (titles must be 30-60 chars; descriptions 120-160; verify with the check script; wording below is a starting point, not final):

| Post | Primary keyword (FR / EN / AR) | Secondary keywords | Proposed seoTitle FR | EN | AR |
|---|---|---|---|---|---|
| 1 | travailler en Italie depuis la Tunisie / work in Italy from Tunisia / العمل في إيطاليا من تونس | emploi Italie Tunisie, offre d'emploi Italie, THAMM Plus, travailler en Italie hors quotas | Travailler en Italie depuis la Tunisie : guide 2026 (already live) | Work in Italy from Tunisia: Legal Guide (2026) (already live) | العمل في إيطاليا من تونس: دليل قانوني (2026) (already live) |
| 2 | contrat de travail en Italie / work contract in Italy / عقد عمل في إيطاليا | Nulla Osta, contratto di soggiorno vs contrat de travail, SIISL | Contrat de travail en Italie et Nulla Osta : mode d'emploi | Work Contract and Nulla Osta in Italy: How It Works | عقد العمل وNulla Osta في إيطاليا: كيف يتم؟ |
| 3 | visa de travail Italie Tunisie / Italy work visa for Tunisians / تأشيرة عمل إيطاليا للتونسيين | visa D, permesso di soggiorno, contratto di soggiorno | Visa de travail Italie pour les Tunisiens : étapes | Italy Work Visa for Tunisians: From Visa D to Permit | تأشيرة عمل إيطاليا للتونسيين: من الفيزا إلى الإقامة |

Rules for the content writer:
- Put the primary keyword (natural wording) in: seoTitle (near the front), H1, first paragraph, one H2, metaDescription, slug, image alt where relevant. No stuffing. Use the Arabic/English/French natural phrasing, not word-for-word translations.
- The user said keyword work will later be refined with data: keep titles/descriptions easy to edit (they live in the translation files).
- Proposed slugs (Latin, keep existing for Post 1): Post 2 en/ar `work-contract-nulla-osta-italy`, fr `contrat-de-travail-nulla-osta-italie`; Post 3 en/ar `italy-work-visa-tunisians`, fr `visa-travail-italie-tunisiens`.
- Future article ideas (not part of this task): Decreto Flussi explained simply; Is there a minimum wage in Italy? (verify first; Italy has no national statutory minimum wage as far as known); cost of living in Italy (very low volume).

## 5. SEO skill rules to apply (from the `seo` skill and earlier work)

- One page, one primary search intent; map one primary keyword/theme to one URL; detect cannibalization between the three posts.
- Title 50-60 chars (repo rule 30-60), primary concept near the front; meta description 120-160 chars, honest; one H1 (the article title), H2/H3 reflect real hierarchy.
- Internal linking with **descriptive anchors** (e.g. "work contract and Nulla Osta", not "click here"); the hub (Post 1) links to both other posts; each post links to previous/next; blog list links to all.
- Structured data: BlogPosting + BreadcrumbList + Person; FAQPage only when the FAQ truly matches visible content; add `isPartOf`/`position` hints for the series only if they stay valid schema.org (do not invent properties).
- hreflang/canonical per post (existing `languageAlternates`): the three language versions of each part must reference each other. Sitemap must list all 9 new URLs automatically (it iterates `allArticleParams`).
- GEO/AEO: direct answer in the first 2 paragraphs, `summary` field filled, visible "last verified" note, official sources block, FAQ in question form people actually type (French: "Peut-on travailler en Italie sans contrat ?").
- Core Web Vitals: no new heavy JS; reuse `next/image`; the series card is plain HTML/CSS.
- Tools: Ahrefs Site Audit (user re-runs after deploys), Google Search Console (user must verify the domain and submit `sitemap.xml`; they had trouble finding the TXT record; HTML-tag verification can be added to metadata `verification.google` if they send the content value), Bing Webmaster Tools (import from GSC).

## 6. Facts that must be verified before publishing (do not invent)

| Claim in the content | Status |
|---|---|
| Training-abroad route (art. 23 TU 286/1998, as amended by DL 20/2023 / L. 50/2023) allows entry outside the Decreto Flussi quotas | Confirmed on lavoro.gov.it "formazione all'estero" |
| Visa application deadline after training | **Conflicting.** Ministry communications (2023) say **6 months**; SIISL decree says the profile is archived if the Nulla Osta is not requested within **12 months** of the end of training. The post currently says "a deadline counted from the end of training; check the Ministry's current FAQ". Keep that wording unless the user supplies a primary source. |
| Contratto di soggiorno within **15 days** of entering Italy (was 8) | Confirmed by secondary sources (DL 146/2025 converted by L. 179/2025, in force 2 Dec 2025); not checked in the Gazzetta Ufficiale text. Nulla Osta confirmation by the employer also went 7 -> 15 days. |
| SIISL registration of workers trained abroad | Confirmed: interministerial decree of 22 June 2026 implementing art. 14 c.6 DL 159/2025; automatic registration. The claim that SIISL applies to **all** Decreto Flussi entrants was **not** supported; do not write it. |
| THAMM Plus | Active; first group of Tunisian workers left 23 Feb 2026; ANCE is promoter, ELIS executive partner. Project end date is inconsistent (31 Dec 2026 vs 2027): do not state one. |
| Meloni caption "Italy's prime minister" | Office status as of Oct 2026 not independently verified. Re-check or reword. |
| Embassy links (`ambtunisi.esteri.it`) | Return 403 to bots (Ahrefs) but load in browsers; not broken. |

Gemini-sourced statements from the user are **not** primary sources; verify against lavoro.gov.it, integrazionemigranti.gov.it, Normattiva/Gazzetta Ufficiale, INPS, ANCE, ambtunisi.esteri.it. Each post's `official-sources` block should list only sources relevant to that post.

## 7. Technical design: series ("next step") card

Goal: a small designed card at the bottom of each post leading to the next step (another post), plus "previous". Works in en/fr/ar (RTL), light-gray paper theme, no JS.

- **Data model.** Add a series registry, e.g. `src/content/articles/series.ts`: `{ id: "work-in-italy-from-tunisia", articleIds: [post1, post2, post3] }` (order = array order). Keep `Article` unchanged except optionally `seriesId?: string` (derive part number from the registry). Helper in `index.ts`: `seriesFor(article)`, `neighbours(article, lang)` returning `{ index, total, prev, next }` using only articles that have a translation in the requested language.
- **Dictionaries.** Add strings in `en/fr/ar.ts`: `series.part` ("Part {n} of {total}"), `series.next` ("Next step"), `series.previous` ("Previous step"), `series.seriesLabel`. Arabic copy must be natural; mark for native review.
- **Component.** `src/components/blog/SeriesNav.tsx` (server component): renders `<nav aria-label=...>` with the next card (large, with arrow that flips in RTL via logical CSS) and a smaller previous link; shows "Part 2 of 3" and the target post's title + summary line. Add CSS in `blog.css` using logical properties; reuse existing tokens; hover = small shift (same feel as the blog list cards); respect `prefers-reduced-motion`.
- **Placement.** In `[slug]/page.tsx` after `ArticleBody` and before the footer; also a compact series strip (Part n of N + link to hub) near the top under the byline.
- **Blog list.** Show a "Part n of N" chip on cards that belong to a series; keep list order sensible (hub first).
- **In-text links.** Post 1 links to Post 2 and 3 where the topic first appears; Post 2/3 link back to Post 1 in the recap line. Use `[descriptive anchor](/{lang}/blog/{slug}/)` (build with `articlePath`/`routes.ts` helpers so slugs are never hardcoded in text where avoidable; if text must contain paths, add a check that they resolve).
- **Check script.** Extend `check-articles.mjs`: every series article exists in all 3 languages; part order contiguous; links in body that point to `/{lang}/blog/...` resolve to a real slug in that language; no duplicate H2 text across parts of the same series; each post has its own FAQ and sources blocks.
- **JSON-LD.** Optionally add each post's `isPartOf` pointing to the hub URL only if valid for `BlogPosting`; otherwise skip. BreadcrumbList stays.
- **Template.** Update `_template/*` and `README.md` + `scripts/new-article.mjs` so new posts can opt into a series; document how to add Part 4 later. Update the memory note `project_blog_template.md` after implementation.

## 8. Implementation order (suggested)

1. Confirm approach with the user (3 posts vs 2 if Post 3 is thin). Ask for the EN/AR Mangools data if they have it.
2. Add series data model + helper + dictionary strings + `SeriesNav` + CSS + page wiring + blog-list chip (with a temporary 2-part test using the current post if needed).
3. Create folders `data/{post2-slug}/` and `data/{post3-slug}/` (use `npm run new-article` as a base), move/reword the sections per section 3 in all 3 languages; trim Post 1; renumber headings; add recap lines and links.
4. Per-post metadata: seoTitle, metaDescription, keywords, summary, imageAlt, `guide` card (keyFacts + "path in brief"; the path list can be shared, with the current step visible), FAQ per post, sources per post.
5. Extend `check-articles.mjs`; run `check:articles`, `tsc --noEmit`, `eslint`; then an isolated-copy production build; verify the 9 pages + sitemap + hreflang/canonical + JSON-LD + the series card in LTR and RTL (light theme, mobile width) and view-transition behaviour (open/close slide; language switch fade).
6. Show the user a summary; **ask before committing/pushing**. Suggested commits: (a) series feature, (b) content split, (c) docs/template update.
7. After deploy, the user: requests indexing in Search Console for the new URLs, re-runs Ahrefs Site Audit, checks the Pages report after 3 days.

## 9. Acceptance criteria

- Three posts x 3 languages build and appear in the sitemap; Post 1 keeps its current URLs; no "Article 23" anywhere; no TODOs.
- Every post is 600-1,100 words (EN), stands alone, has one H1, its own FAQ (visible and matching FAQPage JSON-LD) and sources.
- Series card works in en/fr/ar (RTL arrow flips), is keyboard accessible, has no layout shift, and links resolve in the same language.
- Titles/descriptions pass the length checks and each post has a distinct primary keyword.
- `tsc`, `eslint`, `check:articles` pass; isolated production build passes.
- The homepage design is unchanged; no email address appears in the blog content or the new code.
- Open items listed in section 10 are either resolved or clearly flagged in the final report.

## 10. Open items / risks to flag to the user

- EN and AR keyword data (Mangools) still missing; AR/EN titles are provisional.
- Native-speaker review of the French and especially Arabic text is recommended.
- Google Search Console verification status is unknown (the user could not find the TXT record; offer the HTML-tag method).
- Optional follow-ups: crawlable link from the homepage to the blog (the homepage currently has 0 internal links, found by Ahrefs; user must choose footer link vs menu links rendered in HTML), IndexNow, the remaining `mailto:` links that expose the email, EmailJS form possibly failing on the live site, removing the unused `WordsPullUp` export.

## 11. Kickoff prompt to paste into the new chat

> Read `docs/blog-series-plan.md` fully, then follow section 0 (orchestrator route, `seo` skill, read the listed files). Plan only first: reply with your concrete implementation plan, any questions, and wait for my approval. Do not commit or push unless I ask.
