"use client";

import type { ReactNode } from "react";
import { BoxReveal, Card, Reveal, SectionWrapper, buttonClass } from "../ui";

// "All the ways we can work together", following abdulosama.com's services section, in the
// template's card style. Owner's list (2026-10-17).
const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const SERVICES = [
  {
    title: "Web & app design",
    text: "Websites and apps designed by hand and built with Claude Code for speed: fast, responsive and ready for search engines.",
    icon: icon(<><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M8 21h8" /></>),
  },
  {
    title: "E-commerce product pages",
    text: "I redesign and customise your product pages for a higher conversion rate: clearer offer, trust signals, faster loading and a checkout path with less friction.",
    icon: icon(<><path d="M6 7h12l-1 13H7z" /><path d="M9 7a3 3 0 0 1 6 0" /><path d="m10 14 1.5 1.5L15 12" /></>),
  },
  {
    title: "Campaign analysis",
    text: "I read your marketing campaigns and their numbers to show what to optimise next, and when it is safe to scale.",
    icon: icon(<><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>),
  },
  {
    title: "Meta & TikTok ads",
    text: "Campaign planning and execution on Meta and TikTok: audiences, creatives, budgets and clear reporting.",
    icon: icon(<><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" /></>),
  },
  {
    title: "SEO, AEO & GEO",
    text: "Research and optimisation so your pages rank on Google, become the answer in search features and get cited by AI assistants.",
    icon: icon(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>),
  },
  {
    title: "Agentic AI automation",
    text: "AI agents and automated workflows that take repetitive work off your team, built with the same tools I use every day.",
    icon: icon(<><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01M2 13h3M19 13h3" /></>),
  },
  {
    title: "Partnerships",
    text: "If you have a product or a tool that fits what I share, let's talk about a content partnership.",
    icon: icon(<><path d="M8 13 5 10a2.5 2.5 0 0 1 3.5-3.5L12 10l3.5-3.5A2.5 2.5 0 0 1 19 10l-7 7-2-2" /></>),
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" ariaLabelledby="services-title" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Services</p>
        <BoxReveal width="100%">
          <h2 id="services-title" className="mt-3 text-center text-4xl font-bold md:text-6xl">How we can work together</h2>
        </BoxReveal>
        <Reveal>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            I work with companies, brands and teams. Pick what fits you, or tell me what you need.
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <Card className="h-full bg-card/90 p-6 transition-colors duration-300 hover:border-primary/30">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-foreground">{s.icon}</span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 flex justify-center">
          <a href="#contact" className={buttonClass("default")}>Contact me</a>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
