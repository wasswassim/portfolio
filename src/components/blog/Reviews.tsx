"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo/site";
import { averageOf, useReviews } from "@/lib/reviews-store";
import { Stars } from "./Stars";
import ReviewCarousel from "./ReviewCarousel";
import ReviewForm from "./ReviewForm";

// Reader reviews come from Supabase (see lib/reviews-store.ts): pages are built with the reviews of build
// time and refreshed live in the browser, and a sent review is published at once. The badge and the carousel stay hidden until
// there is at least one review; the section at the bottom is always there, with the review box.

/** id of the reviews section at the bottom of each post; the badge and the carousel link to it */
const SECTION_ID = "reader-reviews";
/** Reviews listed before "Show all", and slides in the carousel */
const LIST_STEP = 6;
const MAX_SLIDES = 8;

const fmtRating = (lang: Lang, r: number) => new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(r);
const dateFormat = (lang: Lang) => new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" });

/** Small rating badge (score + stars + count) above the guide card, linked to the reviews section. */
export function RatingBadge({ lang }: { lang: Lang }) {
  const { reviews } = useReviews();
  const avg = averageOf(reviews);
  if (avg === null) return null;
  const r = getDictionary(lang).reviews;
  const score = fmtRating(lang, avg);
  return (
    <a className="blog-rbadge" href={"#" + SECTION_ID}>
      <span className="blog-sr">{r.badgeLabel(score, reviews.length) + " " + r.goTo}</span>
      <span className="blog-rbadge-score" aria-hidden="true">{score}</span>
      <span className="blog-rbadge-body">
        <Stars value={avg} />
        <span className="blog-rbadge-count" aria-hidden="true">{r.count(reviews.length)}</span>
      </span>
    </a>
  );
}

/** Reviews at the bottom of every post: the request for a review, the review box, then the reviews. */
export function ReviewsSection({ lang, path }: { lang: Lang; path: string }) {
  const { reviews } = useReviews();
  const [showAll, setShowAll] = useState(false);
  const dict = getDictionary(lang);
  const r = dict.reviews;
  const avg = averageOf(reviews);
  const dateFmt = dateFormat(lang);
  const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => Array.from(w)[0]).join("").toUpperCase();
  return (
    <section id={SECTION_ID} className="blog-reviews" aria-labelledby="reader-reviews-title">
      <div className="blog-reviews-head">
        <div>
          <p className="blog-reviews-source">{r.from}</p>
          <h2 id="reader-reviews-title" className="blog-reviews-title">{r.title}</h2>
          <p className="blog-reviews-ask">{r.ask}</p>
        </div>
        {avg !== null && (
          <p className="blog-reviews-summary">
            <span className="blog-sr">{r.badgeLabel(fmtRating(lang, avg), reviews.length)}</span>
            <span className="blog-reviews-score" aria-hidden="true">{fmtRating(lang, avg)}</span>
            <Stars value={avg} />
            <span className="blog-reviews-count" aria-hidden="true">{r.count(reviews.length)}</span>
          </p>
        )}
      </div>
      <ReviewForm
        lang={lang}
        page={SITE_URL + path}
        labels={{
          rate: r.form.rate,
          levels: r.form.levels,
          stars: [1, 2, 3, 4, 5].map((n) => r.stars(n)),
          text: r.form.text,
          textPlaceholder: r.form.textPlaceholder,
          name: r.form.name,
          nameHint: r.form.nameHint,
          email: r.form.email,
          emailHint: r.form.emailHint,
          notice: r.form.notice,
          submit: r.form.submit,
          sending: r.form.sending,
          success: r.form.success,
          error: r.form.error,
          tooMany: r.form.tooMany,
          noLinks: r.form.noLinks,
          privacyLink: dict.newsletter.privacyLink,
        }}
      />
      {reviews.length === 0 && <p className="blog-reviews-empty">{r.empty}</p>}
      {reviews.length > 0 && (
        <ul className="blog-reviews-list">
          {(showAll ? reviews : reviews.slice(0, LIST_STEP)).map((rev) => (
            <li key={rev.id} className="blog-review">
              <div className="blog-review-head">
                <span className="blog-review-avatar" aria-hidden="true">{initials(rev.author)}</span>
                <span className="blog-review-who">
                  <bdi className="blog-review-name">{rev.author}</bdi>
                  <span className="blog-review-meta">
                    <time dateTime={rev.created_at.slice(0, 10)}>{dateFmt.format(new Date(rev.created_at))}</time>
                  </span>
                </span>
              </div>
              <span className="blog-review-stars" role="img" aria-label={r.stars(rev.rating)}><Stars value={rev.rating} /></span>
              <p className="blog-review-text" lang={rev.lang} dir="auto">{rev.body}</p>
            </li>
          ))}
        </ul>
      )}
      {!showAll && reviews.length > LIST_STEP && (
        <button type="button" className="blog-reviews-more" onClick={() => setShowAll(true)}>{r.showAll(reviews.length)}</button>
      )}
    </section>
  );
}

/** Compact carousel of the same reviews under the post header (between the disclosure and the first notice). */
export function ReviewsCarousel({ lang }: { lang: Lang }) {
  const { reviews } = useReviews();
  const avg = averageOf(reviews);
  if (avg === null) return null;
  const r = getDictionary(lang).reviews;
  const score = fmtRating(lang, avg);
  const dateFmt = dateFormat(lang);
  // The newest few; the summary link leads to all of them at the bottom
  const shown = reviews.slice(0, MAX_SLIDES);
  const n = shown.length;
  return (
    <ReviewCarousel
      rating={avg}
      sectionHref={"#" + SECTION_ID}
      slides={shown.map((rev) => ({
        id: rev.id,
        author: rev.author,
        rating: rev.rating,
        ratingLabel: r.stars(rev.rating),
        text: rev.body,
        lang: rev.lang as Lang,
        date: rev.created_at.slice(0, 10),
        dateText: dateFmt.format(new Date(rev.created_at)),
      }))}
      labels={{
        region: r.from,
        track: r.from,
        summary: r.badgeLabel(score, reviews.length) + " " + r.goTo,
        score,
        count: r.count(reviews.length),
        prev: r.prev,
        next: r.next,
        slides: shown.map((_, i) => r.slide(i + 1, n)),
      }}
    />
  );
}
