"use client";

import { useEffect } from "react";
import { partnerOf, track } from "@/lib/analytics";

/**
 * Page-wide Google Analytics events for the blog, with one listener each instead of code in every
 * component: referral_click on any sponsored link (cards, side buttons, links in the text), with the
 * partner and where the link sits; newsletter_signup when a newsletter form is sent. Review events
 * are sent by the review form and the report link themselves.
 */
export default function BlogEvents({ lang }: { lang: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[rel~="sponsored"]') as HTMLAnchorElement | null;
      if (!a) return;
      const placement = a.closest(".blog-referral") ? "card" : a.closest(".blog-side, .blog-offers") ? "side_buttons" : "text";
      track("referral_click", { partner: partnerOf(a.href), placement, page_language: lang, page_path: location.pathname });
    };
    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form?.classList.contains("blog-newsletter-form")) return;
      track("newsletter_signup", { page_language: lang, page_path: location.pathname });
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [lang]);
  return null;
}
