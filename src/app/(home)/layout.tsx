import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import "./home.css";
import { ADSENSE_CLIENT } from "@/lib/ads";
import { SITE_URL } from "@/lib/seo/site";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";

// Root layout of the new homepage (rebrand): Space Grotesk for text, Unbounded for headings,
// as in the template. The blog keeps its own root layout.
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  other: { "google-adsense-account": ADSENSE_CLIENT },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#020817" };

export default function HomeRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${unbounded.variable} dark`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <AhrefsAnalytics />
        {children}
      </body>
    </html>
  );
}
