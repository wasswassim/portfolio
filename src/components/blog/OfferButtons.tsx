import type React from "react";
import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { REFERRALS, type Referral } from "@/content/referrals";

/** Three round partner buttons (logo + name) between the guide card and the newsletter card. */
export default function OfferButtons({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const offers = Object.values(REFERRALS) as Referral[];
  return (
    <section className="blog-offers" aria-labelledby="offers-title">
      <h2 id="offers-title" className="blog-offers-title">{dict.offers.title}</h2>
      <ul className="blog-offers-list">
        {offers.map((r, i) => (
          <li key={r.name} style={{ "--i": i } as React.CSSProperties}>
            <a
              className="blog-offer"
              href={r.url}
              rel="sponsored nofollow noopener"
              target="_blank"
              style={{ "--ref-btn": r.brand.button } as React.CSSProperties}
            >
              <span className="blog-offer-ring" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element -- tiny static logo */}
              <img src={r.logo} alt="" width={64} height={64} loading="lazy" />
              <span className="blog-offer-name">{r.name}</span>
              <span className="blog-sr">{" " + r.badge[lang] + " " + dict.referral.newTab}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="blog-offers-note">{dict.referral.inline}</p>
    </section>
  );
}
