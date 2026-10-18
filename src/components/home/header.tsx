"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePreloader } from "./preloader";
import { usePerfProfile } from "./use-perf-profile";
import { cn } from "./ui";
import SiteMenu from "@/components/site-menu/site-menu";

// Top bar in the template's style: name on the left, the Menu button on the right; transparent over
// the hero, blurred once the page scrolls.
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
        <SiteMenu />
      </nav>
    </motion.header>
  );
}
