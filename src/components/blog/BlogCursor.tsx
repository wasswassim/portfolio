"use client";

import Preloader from "@/components/home/preloader";
import ElasticCursor from "@/components/home/elastic-cursor";

// The homepage's elastic cursor on the blog (desktop, motion allowed). The blog has no loading
// screen, so the preloader context is created already finished. The cursor hugs these controls:
const TARGETS = [
  ".blog-logo", ".blog-nav-link", ".blog-lang", ".blog-back", ".blog-footer-nav a",
  ".blog-newsletter-form button", ".blog-referral-cta", ".blog-offer", ".blog-guide-toggle", ".blog-guide-jump",
  ".blog-reviews-btn", ".blog-reviews-more", ".blog-rcar-btn", ".blog-rbadge", ".blog-author-more",
  ".blog-search-clear", ".blog-series-prev", ".blog-series-next", ".cursor-can-hover",
].join(", ");

export default function BlogCursor() {
  return (
    <Preloader disabled>
      <ElasticCursor targets={TARGETS} />
    </Preloader>
  );
}
