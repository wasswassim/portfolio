import type React from "react";
import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { REFERRALS, type Referral, type ReferralId } from "@/content/referrals";
import Inline from "./Inline";

/**
 * Referral link card. rel="sponsored nofollow noopener" marks it as paid for search engines;
 * the disclosure sits right next to the link, and the page adds one at the top of the post.
 */
export default function ReferralCard({ provider, text, lang, dict }: { provider: ReferralId; text?: string; lang: Lang; dict: Dictionary }) {
  const r: Referral = REFERRALS[provider];
  const date = new Intl.DateTimeFormat(LOCALE[lang], { dateStyle: "medium", timeZone: "UTC" }).format(new Date(r.lastVerified));
  return (
    <aside
      className="blog-referral blog-referral--brand"
      aria-label={dict.referral.label + ": " + r.name}
      style={{ "--ref-bg": r.brand.bg, "--ref-fg": r.brand.fg, "--ref-btn": r.brand.button, "--ref-btn-fg": r.brand.buttonText } as React.CSSProperties}
    >
      <p className="blog-referral-title">
        {dict.referral.label} <span aria-hidden="true">·</span> <bdi dir="ltr">{r.name}</bdi>
      </p>
      {text && <p><Inline lang={lang} text={text} /></p>}
      <p className="blog-referral-benefits-title">{dict.referral.benefits}</p>
      <ul className="blog-referral-benefits">
        {r.benefits[lang].map((b) => <li key={b}>{b}</li>)}
      </ul>
      {!r.reward && <p>{dict.referral.generic}</p>}
      {r.code && (
        <p className="blog-referral-code">
          {dict.referral.code} <code className="blog-ltr" dir="ltr">{r.code}</code>
        </p>
      )}
      <p>
        <a className="blog-referral-cta" href={r.url} rel="sponsored nofollow noopener" target="_blank">
          {dict.referral.cta(r.name)}
          <span className="blog-ext" aria-hidden="true">↗</span>
          <span className="blog-sr">{" " + dict.referral.newTab}</span>
        </a>
      </p>
      <p className="blog-referral-note">
        {dict.referral.inline}{" "}
        <a href={r.termsUrl} rel="noopener noreferrer" target="_blank">{dict.referral.terms}</a>
        {", " + dict.fees.checked(date)}
      </p>
    </aside>
  );
}
