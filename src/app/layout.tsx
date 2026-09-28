import type { Metadata, Viewport } from "next";
import { Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Wassim Gatri — Portfolio",
  description:
    "Web Designer & Digital Marketer based in Tunisia & Italy. Building digital experiences that work.",
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
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
