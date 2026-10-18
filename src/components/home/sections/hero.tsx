"use client";

import { AUTHOR_LINKEDIN } from "@/content/author";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal, ScrollDownIcon, SectionWrapper, buttonClass } from "../ui";

// Hero, as in the template: name on the left, the 3D keyboard spinning on the right (drawn by the
// fixed canvas behind the page, see ../animated-background.tsx).
const GITHUB = "https://github.com/wasswassim";

export default function HeroSection() {
  const { isLoading } = usePreloader();
  return (
    <SectionWrapper id="hero" className="relative h-screen w-full" ariaLabelledby="hero-title">
      <div className="grid md:grid-cols-2">
        <div className="z-[2] col-span-1 flex h-[calc(100dvh-3rem)] flex-col items-center justify-start pt-28 sm:pb-16 md:h-[calc(100dvh-4rem)] md:items-start md:justify-center md:p-20 lg:p-24 xl:p-28">
          {/* Always in the HTML (search engines read the h1); hidden behind the preloader, then the
              key change remounts it so the reveal animations play once loading ends */}
          <div key={isLoading ? "loading" : "ready"} className="flex flex-col" style={{ visibility: isLoading ? "hidden" : "visible" }}>
              <BlurIn delay={0.7}>
                <p className="mt-4 cursor-default text-base font-medium text-muted-foreground sm:text-xl">Hi, I am</p>
              </BlurIn>
              <BlurIn delay={1}>
                <h1 id="hero-title" className="-ml-[6px] cursor-default font-display text-6xl leading-none font-bold text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
                  Wassim
                  <br />
                  Gatri
                </h1>
              </BlurIn>
              <BlurIn delay={1.2}>
                <p className="mt-4 cursor-default text-base font-medium text-muted-foreground sm:text-xl">
                  Full Stack Entrepreneur
                </p>
              </BlurIn>
              <div className="mt-8 flex w-fit flex-col gap-3">
                <BoxReveal delay={2} width="100%">
                  <a href="#contact" className={buttonClass("default", "w-full")}>Let&apos;s work together</a>
                </BoxReveal>
                <div className="flex gap-3">
                  {/* The template's "Hire Me" button and its little plea on hover */}
                  <span className="group relative">
                    <a href="#contact" aria-describedby="hire-me-tip" className={buttonClass("outline")}>Hire Me</a>
                    <span
                      id="hire-me-tip"
                      role="tooltip"
                      className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-sm text-background opacity-0 shadow-md transition duration-200 group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100"
                    >
                      pls 🥹 🙏
                    </span>
                  </span>
                  <a href={AUTHOR_LINKEDIN} target="_blank" rel="me noopener noreferrer" className={buttonClass("outline", "px-3")} aria-label="LinkedIn (opens in a new tab)">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
                  </a>
                  <a href={GITHUB} target="_blank" rel="me noopener noreferrer" className={buttonClass("outline", "px-3")} aria-label="GitHub (opens in a new tab)">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" /></svg>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="col-span-1 grid" />
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
}
