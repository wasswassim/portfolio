import type { Metadata, Viewport } from "next";
import { Syne, Bebas_Neue, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../blog.css";
import { DIR } from "@/lib/i18n/config";
import { langStaticParams, toLang } from "@/lib/i18n/params";
import { SITE_URL } from "@/lib/seo/site";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import ViewTransitionTypes from "@/components/blog/ViewTransitionTypes";

// Second root layout (route group "(blog)"): it owns <html lang dir> so every
// blog page ships the correct language and direction in its static HTML.
// No Preloader, cursor, Lenis or GSAP here; see (site)/layout.tsx for the homepage.

// Same fonts and CSS variable names as the homepage so the blog looks native.
const syne = Syne({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400", display: "swap" });
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default async function BlogRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang: raw } = await params;
  const lang = toLang(raw);
  return (
    <html lang={lang} dir={DIR[lang]} className={`${syne.variable} ${bebasNeue.variable} ${plexArabic.variable}`}>
      <head>
        <ViewTransitionTypes />
      </head>
      <body>
        <AhrefsAnalytics />
        {children}
      </body>
    </html>
  );
}
