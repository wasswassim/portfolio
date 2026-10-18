import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Unbounded, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../blog.css";
import { DIR } from "@/lib/i18n/config";
import { langStaticParams, toLang } from "@/lib/i18n/params";
import { SITE_URL } from "@/lib/seo/site";
import { ADSENSE_CLIENT } from "@/lib/ads";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import BlogEvents from "@/components/analytics/BlogEvents";
import BlogCursor from "@/components/blog/BlogCursor";
import ViewTransitionTypes from "@/components/blog/ViewTransitionTypes";

// Second root layout (route group "(blog)"): it owns <html lang dir> so every
// blog page ships the correct language and direction in its static HTML.
// No Preloader, cursor, Lenis or GSAP here; see (site)/layout.tsx for the homepage.

// Same fonts as the homepage (Space Grotesk for text, Unbounded for headings) so the blog looks native.
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], display: "swap" });
// Arabic only: the CSS applies it under :lang(ar). preload:false keeps en/fr pages
// from preloading a font they never use.
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return langStaticParams();
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // AdSense site ownership
  other: { "google-adsense-account": ADSENSE_CLIENT },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020817",
};

export default async function BlogRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang: raw } = await params;
  const lang = toLang(raw);
  return (
    <html lang={lang} dir={DIR[lang]} className={`${grotesk.variable} ${unbounded.variable} ${plexArabic.variable}`}>
      <head>
        <ViewTransitionTypes />
        {/* Consent defaults, then Google Analytics and AdSense (ad units + Google's consent message) */}
        <GoogleAnalytics adsense />
      </head>
      <body>
        <AhrefsAnalytics />
        <BlogEvents lang={lang} />
        <BlogCursor />
        {children}
      </body>
    </html>
  );
}
