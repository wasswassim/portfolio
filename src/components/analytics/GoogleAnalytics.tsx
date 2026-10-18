import { ADSENSE_CLIENT } from "@/lib/ads";

// Google Analytics 4 with Google consent mode v2. The measurement id is public by design (it ships in
// the page HTML). Rendered in the <head> of every root layout (homepage and blog), production only.
//
// Consent: in the EEA, the UK and Switzerland, analytics and ad storage are denied by default, so GA
// sends only cookieless pings until the visitor accepts in Google's consent message (AdSense >
// Privacy & messaging), which updates these signals itself. Elsewhere they are granted by default.
// The Google scripts (gtag.js and, on the blog, adsbygoogle.js) are added by this inline script after the
// defaults are set: React hoists <script async src> above inline scripts, which could run a tag first.
const GA_ID = "G-6RCMQC1GVB";

// EU/EEA member states, plus the UK and Switzerland (ISO 3166-1 alpha-2)
const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU",
  "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

/** JS that appends an async <script> for `src` */
const load = (src: string, crossOrigin = false) =>
  `(function(){var s=document.createElement('script');s.async=true;s.src=${JSON.stringify(src)};` +
  (crossOrigin ? "s.crossOrigin='anonymous';" : "") +
  "document.head.appendChild(s);})();";

const BOOT = [
  // Local test builds never report to the real property (Google's documented opt-out flag)
  `if(/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname))window['ga-disable-${GA_ID}']=true;`,
  "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}",
  `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)},wait_for_update:500});`,
  "gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});",
  "gtag('set','ads_data_redaction',true);",
  "gtag('js',new Date());",
  `gtag('config','${GA_ID}');`,
  load(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`),
  // Google's consent message (AdSense > Privacy & messaging), on every page so a choice made anywhere
  // updates the signals above. adsbygoogle.js does not load it by itself, so this is Google's own tag.
  load(`https://fundingchoicesmessages.google.com/i/${ADSENSE_CLIENT.replace(/^ca-/, "")}?ers=1`),
  "(function signalGooglefcPresent(){if(!window.frames['googlefcPresent']){if(document.body){var f=document.createElement('iframe');f.style.cssText='width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;display:none';f.name='googlefcPresent';document.body.appendChild(f);}else{setTimeout(signalGooglefcPresent,0);}}})();",
];

/** `adsense`: also load AdSense (blog pages: ad units and Google's consent message), after the defaults. */
export default function GoogleAnalytics({ adsense = false }: { adsense?: boolean }) {
  if (process.env.NODE_ENV !== "production") return null;
  const lines = adsense ? [...BOOT, load(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`, true)] : BOOT;
  return <script dangerouslySetInnerHTML={{ __html: lines.join("\n") }} />;
}
