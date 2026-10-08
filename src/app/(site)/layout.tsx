import type { Metadata, Viewport } from "next";
import { Syne, Bebas_Neue } from "next/font/google";
import "../globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import { JsonLd, personLd } from "@/lib/seo/jsonld";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";

// Syne: geometric, editorial, high-fashion — replaces Inter across the whole site.
// We keep --font-inter as the variable name so every component picks it up with zero changes.
// Syne is a variable font: one file covers every weight, so no weight list
// (a list just emits 15 duplicate @font-face rules pointing at the same file).
const syne = Syne({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const TITLE = "Wassim Gatri — Web Designer & Digital Marketer";
const DESCRIPTION =
  "Wassim Gatri is a web designer and digital marketer based in Tunisia and Italy, building digital experiences that work. See his projects and his guides on life in Italy.";
const PORTRAIT = { url: "/img/wassimage.webp", width: 832, height: 1280, alt: SITE_NAME };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [PORTRAIT],
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION, images: [PORTRAIT.url] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Hero video host — open the connection before the video tag is parsed */}
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" />
      </head>
      <body
        className={`${syne.variable} ${bebasNeue.variable}`}
        suppressHydrationWarning
      >
        <AhrefsAnalytics />
        <JsonLd data={personLd()} />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
