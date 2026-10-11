import type React from "react";
import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { REFERRALS, type Referral } from "@/content/referrals";

/** Three round partner buttons (logo + name) between the guide card and the newsletter card. */
export default function OfferButtons({ dict }: { lang: Lang; dict: Dictionary }) {
  const offers = Object.values(REFERRALS) as Referral[];
  return (
    <ul className="blog-offers blog-offers-list" aria-label={dict.offers.title}>
        {offers.map((r, i) => (
          <li key={r.name} style={{ "--i": i } as React.CSSProperties}>
            <a
              className="blog-offer"
              href={r.url}
              rel="sponsored nofollow noopener"
              target="_blank"
              style={{ "--ref-btn": r.brand.button } as React.CSSProperties}
            >
              {/* Logo and its ring float together; on hover a brand-coloured arc runs around the ring (CSS only) */}
              <span className="blog-offer-logo">
                <span className="blog-offer-ring" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element -- tiny static logo */}
                <img src={r.logo} alt="" width={64} height={64} loading="lazy" />
              </span>
              <span className="blog-offer-name">{r.name}</span>
              <span className="blog-sr">{" " + dict.referral.newTab}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}
