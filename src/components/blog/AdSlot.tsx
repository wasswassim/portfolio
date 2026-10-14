"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, AD_SLOTS, FEED_LAYOUT_KEY } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One AdSense unit. The whole block, label included, stays hidden until Google fills it, and is
 * removed from the layout when Google has no ad for it (AdSense sets data-ad-status on the <ins>;
 * see .blog-ad in blog.css). Renders nothing while the unit id is not configured in lib/ads.ts.
 */
export default function AdSlot({ kind, label }: { kind: keyof typeof AD_SLOTS; label: string }) {
  const ref = useRef<HTMLModElement>(null);
  const slot = AD_SLOTS[kind];

  useEffect(() => {
    const ins = ref.current;
    // Ask for one ad per unit (the attribute is set once AdSense has processed it)
    if (!ins || ins.getAttribute("data-adsbygoogle-status")) return;
    // Hidden placement (the side column on phones): no width, so no request
    if (ins.offsetWidth === 0) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("[AdSense]", err);
    }
  }, []);

  if (!slot) return null;
  // Format per placement: same <ins> contract, different shape attributes
  const shape: Record<string, string> =
    kind === "inArticle"
      ? { "data-ad-layout": "in-article", "data-ad-format": "fluid" }
      : kind === "feed"
        ? { "data-ad-layout-key": FEED_LAYOUT_KEY, "data-ad-format": "fluid" }
        : kind === "side"
          ? { "data-ad-format": "vertical", "data-full-width-responsive": "false" }
          : { "data-ad-format": "horizontal", "data-full-width-responsive": "true" };
  return (
    <aside className={`blog-ad blog-ad--${kind}`} aria-label={label}>
      <p className="blog-ad-label">{label}</p>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", textAlign: kind === "inArticle" ? "center" : undefined }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        {...shape}
      />
    </aside>
  );
}
