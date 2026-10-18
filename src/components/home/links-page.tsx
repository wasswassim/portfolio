"use client";

import Link from "next/link";
import { AUTHOR_LINKEDIN, AUTHOR_TIKTOK } from "@/content/author";
import { CURRENT_PROJECT } from "@/content/projects";
import { navLinks, navText } from "@/content/site-nav";
import Preloader from "./preloader";
import Particles from "./particles";
import ElasticCursor from "./elastic-cursor";
import { usePerfProfile } from "./use-perf-profile";
import { BlurIn, Reveal, cn } from "./ui";

// /links, following abdulosama.com/links: photo, one line, then every link of mine in one place.
// Draft list (2026-10-18); the owner decides the final links.
type LinkItem = { title: string; text: string; href: string | null; external?: boolean; badge?: string };

const LINKS: LinkItem[] = [
  { title: "Portfolio", text: "Who I am, my projects and how we can work together", href: "/" },
  { title: "Building a Life in Italy", text: "Free guides for Tunisians who study, work and settle in Italy", href: "/en/blog/" },
  { title: CURRENT_PROJECT.name, text: CURRENT_PROJECT.tagline, href: CURRENT_PROJECT.url, external: true, badge: CURRENT_PROJECT.url ? "New" : "Soon" },
  { title: "My stack", text: "The tools and devices I work with", href: "/stack/" },
  { title: "LinkedIn", text: "My professional profile", href: AUTHOR_LINKEDIN, external: true },
  { title: "TikTok", text: "@wassimgatri1", href: AUTHOR_TIKTOK, external: true },
  { title: "GitHub", text: "My code and projects", href: "https://github.com/wasswassim", external: true },
];

const FOOTER_LINKS = [...navLinks("en").filter((l) => l.id !== "links").map((l) => ({ href: l.href, label: l.label })), { href: "/en/privacy/", label: navText("en").privacy }];

function Stars() {
  const { particleCount, maxDpr } = usePerfProfile();
  return particleCount > 0 ? <Particles className="fixed inset-0 -z-10" quantity={particleCount} maxDpr={maxDpr} /> : null;
}

export default function LinksPage() {
  return (
    <Preloader disabled>
      <Stars />
      <ElasticCursor />
      <main id="main" className="mx-auto flex min-h-dvh max-w-md flex-col items-center px-4 pt-16 pb-12">
        <BlurIn>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
          <img src="/img/wassim-avatar.webp" width={240} height={240} alt="" className="size-28 rounded-full border border-border shadow-[0_0_60px_-15px_rgba(255,255,255,0.35)]" />
        </BlurIn>
        <BlurIn delay={0.15}>
          <h1 className="mt-6 text-center text-3xl font-bold">I&apos;m Wassim 👋</h1>
        </BlurIn>
        <BlurIn delay={0.3}>
          <p className="mt-3 text-center text-muted-foreground">Full stack entrepreneur between Tunis and Rome. Everything of mine, in one place.</p>
        </BlurIn>
        <ul className="mt-10 flex w-full flex-col gap-3">
          {LINKS.map((l, i) => {
            const inner = (
              <>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-semibold">
                    {l.title}
                    {l.badge && <span className="rounded-full bg-primary px-2 text-[11px] font-medium text-primary-foreground">{l.badge}</span>}
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-muted-foreground">{l.text}</span>
                </span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 opacity-60"><path d="M7 17 17 7M7 7h10v10" /></svg>
              </>
            );
            const box = "flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card/70 px-5 py-4 backdrop-blur-sm";
            return (
              <li key={l.title}>
                <Reveal delay={0.35 + i * 0.05}>
                  {l.href?.startsWith("/") ? (
                    <Link href={l.href} className={cn(box, "cursor-can-hover transition-colors hover:border-primary/40 hover:bg-secondary")}>
                      {inner}
                    </Link>
                  ) : l.href ? (
                    <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cn(box, "cursor-can-hover transition-colors hover:border-primary/40 hover:bg-secondary")}>
                      {inner}
                    </a>
                  ) : (
                    <span aria-disabled="true" className={cn(box, "opacity-60")}>{inner}</span>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
        <nav aria-label="Footer" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:text-foreground hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <p className="mt-4 text-xs text-muted-foreground">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Wassim Gatri</p>
      </main>
    </Preloader>
  );
}
