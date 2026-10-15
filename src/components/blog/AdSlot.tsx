"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, AD_SLOTS } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One AdSense unit, with no label. The whole block stays hidden until Google fills it, and is
 * removed from the layout when Google has no ad for it (AdSense sets data-ad-status on the <ins>;
 * see .blog-ad in blog.css). Renders nothing while the unit id is not configured in lib/ads.ts.
 */
export default function AdSlot({ kind }: { kind: keyof typeof AD_SLOTS }) {
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
    // "filled" can still mean an empty ad (e.g. while the site is under review): add the spacing
    // only once the unit really has height, so a blank ad leaves no gap
    const box = ins.parentElement;
    if (!box || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => box.toggleAttribute("data-visible", ins.offsetHeight > 20));
    ro.observe(ins);
    return () => ro.disconnect();
  }, []);

  if (!slot) return null;
  // Format per placement: same <ins> contract, different shape attributes
  const shape: Record<string, string> =
    kind === "inArticle"
      ? { "data-ad-layout": "in-article", "data-ad-format": "fluid" }
      : { "data-ad-format": "vertical", "data-full-width-responsive": "false" };
  return (
    <div className={`blog-ad blog-ad--${kind}`}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", textAlign: kind === "inArticle" ? "center" : undefined }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        {...shape}
      />
    </div>
  );
}
