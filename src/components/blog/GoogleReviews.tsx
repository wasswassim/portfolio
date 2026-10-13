import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { GOOGLE_REVIEWS as G } from "@/content/google-reviews";

/** Google's "G" mark, used as the source attribution next to the rating and the reviews. */
function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/** Five stars filled to `value` (0-5); the parent element carries the accessible label. */
function Stars({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const row = (cls: string) => (
    <span className={cls}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  );
  return (
    <span className="blog-stars" aria-hidden="true">
      {row("blog-stars-base")}
      <span className="blog-stars-fill" style={{ inlineSize: pct + "%" }}>{row("blog-stars-row")}</span>
    </span>
  );
}

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
