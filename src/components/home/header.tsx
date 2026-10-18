"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePreloader } from "./preloader";
import { usePerfProfile } from "./use-perf-profile";
import { buttonClass, cn } from "./ui";

// Top bar in the template's style: transparent over the hero, blurred once the page scrolls.
const NAV = [
  { href: "/stack/", label: "Stack" },
  { href: "/en/blog/", label: "Blog" },
  { href: "/#contact", label: "Let's talk", cta: true },
];

export default function Header() {
  const { isLoading } = usePreloader();
  const { reducedMotion } = usePerfProfile();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reducedMotion ? false : { y: -80 }}
      animate={{ y: isLoading ? -80 : 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.8, delay: isLoading || reducedMotion ? 0 : 0.6 }}
      // Off screen while the preloader runs: its links leave the tab order too
      inert={isLoading}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] transition-colors duration-500",
        scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="whitespace-nowrap font-display text-sm font-bold tracking-wide hover:underline hover:underline-offset-4">
          Wassim Gatri
        </Link>
        <ul className="flex items-center gap-0.5 sm:gap-1 md:gap-3">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={item.cta ? buttonClass("default", "min-h-9 px-2.5 sm:px-3") : buttonClass("ghost", "min-h-9 px-2 sm:px-3")}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
