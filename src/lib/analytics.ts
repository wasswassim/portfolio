// Google Analytics events (see components/analytics/GoogleAnalytics.tsx). A no-op until gtag exists,
// so local builds and visitors who block Google send nothing and nothing breaks.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, string | number> = {}): void {
  try {
    window.gtag?.("event", event, params);
  } catch {
    /* analytics must never break the page */
  }
}

/** Referral partner from a sponsored link's host, e.g. wap.redotpay.com -> RedotPay */
export function partnerOf(href: string): string {
  const host = (() => {
    try {
      return new URL(href).hostname;
    } catch {
      return "";
    }
  })();
  if (host.includes("redotpay")) return "RedotPay";
  if (host.includes("revolut")) return "Revolut";
  if (host.includes("wise")) return "Wise";
  return host || "unknown";
}
