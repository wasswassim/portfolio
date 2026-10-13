import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { GOOGLE_REVIEWS as G } from "@/content/google-reviews";
import { GoogleMark, Stars } from "./GoogleIcons";
import ReviewCarousel from "./ReviewCarousel";

const fmtRating = (lang: Lang, r: number) => new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(r);

/** Small rating badge (stars + score + count, linked to the Google profile), shown above the guide card. */
export function GoogleRatingBadge({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (G.rating === null) return null;
  const score = fmtRating(lang, G.rating);
  return (
    <a className="blog-gbadge" href={G.mapsUri} target="_blank" rel="noopener noreferrer"
      aria-label={dict.reviews.badgeLabel(score, G.count) + " " + dict.referral.newTab}>
      <GoogleMark className="blog-gbadge-g" />
      <span className="blog-gbadge-body">
        <span className="blog-gbadge-top">
          <span className="blog-gbadge-score">{score}</span>
          <Stars value={G.rating} />
        </span>
        <span className="blog-gbadge-count">{dict.reviews.count(G.count)}</span>
      </span>
    </a>
  );
}

/** Reviews from the Google profile at the bottom of a post, with author attribution as Google requires. */
export function GoogleReviewsSection({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (G.rating === null || G.reviews.length === 0) return null;
  const score = fmtRating(lang, G.rating);
  const dateFmt = new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" });
  const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <section className="blog-greviews" aria-labelledby="google-reviews-title">
      <div className="blog-greviews-head">
        <div>
          <p className="blog-greviews-source"><GoogleMark className="blog-greviews-g" /> {dict.reviews.from}</p>
          <h2 id="google-reviews-title" className="blog-greviews-title">{dict.reviews.title}</h2>
        </div>
        <p className="blog-greviews-summary" aria-label={dict.reviews.badgeLabel(score, G.count)}>
          <span className="blog-greviews-score">{score}</span>
          <Stars value={G.rating} />
          <span className="blog-greviews-count">{dict.reviews.count(G.count)}</span>
        </p>
      </div>
      <ul className="blog-greviews-list">
        {G.reviews.map((r, i) => (
          <li key={i} className="blog-greview">
            <div className="blog-greview-head">
              <span className="blog-greview-avatar" aria-hidden="true">{initials(r.author)}</span>
              <span className="blog-greview-who">
                {r.authorUri ? (
                  <a href={r.authorUri} target="_blank" rel="noopener noreferrer nofollow" className="blog-greview-name">{r.author}</a>
                ) : (
                  <span className="blog-greview-name">{r.author}</span>
                )}
                {r.date && <time dateTime={r.date} className="blog-greview-date">{dateFmt.format(new Date(r.date))}</time>}
              </span>
            </div>
            <span className="blog-greview-stars" role="img" aria-label={dict.reviews.stars(r.rating)}><Stars value={r.rating} /></span>
            <p className="blog-greview-text" lang={r.lang || undefined} dir="auto">{r.text}</p>
            {r.uri && (
              <a className="blog-greview-more" href={r.uri} target="_blank" rel="noopener noreferrer nofollow">
                {dict.reviews.readOnGoogle}<span className="blog-sr">{" " + dict.referral.newTab}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="blog-greviews-actions">
        <a className="blog-greviews-btn" href={G.mapsUri} target="_blank" rel="noopener noreferrer">
          {dict.reviews.seeAll(G.count)}<span className="blog-sr">{" " + dict.referral.newTab}</span>
        </a>
        {G.writeUri && (
          <a className="blog-greviews-btn blog-greviews-btn--ghost" href={G.writeUri} target="_blank" rel="noopener noreferrer">
            {dict.reviews.write}<span className="blog-sr">{" " + dict.referral.newTab}</span>
          </a>
        )}
      </div>
    </section>
  );
}

/** Compact carousel of the same reviews under the post header (between the disclosure and the first notice). */
export function GoogleReviewsCarousel({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (G.rating === null || G.reviews.length === 0) return null;
  const score = fmtRating(lang, G.rating);
  const dateFmt = new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" });
  const n = G.reviews.length;
  return (
    <ReviewCarousel
      rating={G.rating}
      mapsUri={G.mapsUri}
      slides={G.reviews.map((r) => ({
        author: r.author,
        rating: r.rating,
        ratingLabel: dict.reviews.stars(r.rating),
        text: r.text,
        lang: r.lang,
        date: r.date,
        dateText: r.date ? dateFmt.format(new Date(r.date)) : "",
        uri: r.uri,
      }))}
      labels={{
        region: dict.reviews.from,
        summary: dict.reviews.badgeLabel(score, G.count),
        score,
        count: dict.reviews.count(G.count),
        prev: dict.reviews.prev,
        next: dict.reviews.next,
        slides: G.reviews.map((_, i) => dict.reviews.slide(i + 1, n)),
        readOnGoogle: dict.reviews.readOnGoogle,
        newTab: dict.referral.newTab,
      }}
    />
  );
}
