import type { Metadata } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import Link from "next/link";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import "./(blog)/blog.css";

// Global 404 (becomes out/404.html, which GitHub Pages serves for unknown URLs).
// Needed because two root layouts leave no single layout to wrap Next's default
// not-found. Uses the blog stylesheet: dark, on-brand, and the system cursor
// (the blog stylesheet, without the homepage's 3D scene).
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Page not found | Wassim Gatri",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={`${grotesk.variable} ${unbounded.variable}`}>
      <body>
        <AhrefsAnalytics />
        <main className="blog-main" style={{ display: "grid", placeContent: "center", textAlign: "center" }}>
          <p className="blog-eyebrow">404</p>
          <h1 className="blog-h1">Page not found</h1>
          <p className="blog-lead" style={{ marginInline: "auto" }}>
            This page doesn&apos;t exist or has moved.
          </p>
          <p style={{ marginBlockStart: "1.5rem" }}>
            <Link href="/" className="blog-back">Home</Link>
            {" · "}
            <Link href="/en/blog/" className="blog-back">Blog</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
