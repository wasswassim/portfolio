import type { Metadata } from "next";
import { Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

// Syne: geometric, editorial, high-fashion — replaces Inter across the whole site.
// We keep --font-inter as the variable name so every component picks it up with zero changes.
const syne = Syne({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wassim Gatri — Portfolio",
  description:
    "Web Designer & Digital Marketer based in Tunisia & Italy. Building digital experiences that work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
