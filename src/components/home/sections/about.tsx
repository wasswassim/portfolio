"use client";

import Link from "next/link";
import { BoxReveal, Card, Reveal, SectionWrapper } from "../ui";

// Who I am, where I am and how we can work together, in the owner's words from the author page
// (src/content/author.ts), with a link to the blog (owner's request 2026-10-18).
export default function AboutSection() {
  return (
    <SectionWrapper id="about" ariaLabelledby="about-title" className="flex min-h-screen w-full items-center py-24">
      <Card className="mx-auto flex max-w-3xl flex-col items-center bg-background/75 px-6 py-10 text-center md:px-12">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
          <img
            src="/img/wassimage.webp"
            width={832}
            height={1280}
            alt="Wassim Gatri"
            className="pointer-events-auto size-40 rounded-full border border-border object-cover object-[50%_20%] shadow-[0_0_60px_-15px_rgba(255,255,255,0.35)] md:size-52"
          />
        </Reveal>
        <BoxReveal width="100%">
          <h2 id="about-title" className="mt-8 text-3xl font-bold md:text-5xl">Who am I?</h2>
        </BoxReveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
            I&apos;m Wassim Gatri, a Tunisian full stack entrepreneur living between Tunis and Rome. I&apos;m currently documenting
            my experience and the solutions I found in my blog,{" "}
            <Link href="/en/blog/" className="pointer-events-auto font-semibold underline underline-offset-4 hover:text-foreground">Building a Life in Italy</Link>:
            free guides, checked against official sources, for Tunisians who study, work and settle in Italy. My background is in
            Business Information Systems, and I&apos;m studying for a Master&apos;s in Digital Marketing at LUMSA University in
            Rome. I design and build websites and apps, plan and analyse marketing campaigns, and work with{" "}
            <mark className="rounded bg-primary px-1.5 py-0.5 font-semibold text-primary-foreground">agentic engineering</mark>{" "}
            skills: AI agents like Claude Code help me ship faster, while every decision stays mine. I speak 4 languages:
            Arabic, French, English and Italian.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-base text-muted-foreground">
            Have a project in mind? See <a href="#services" className="pointer-events-auto underline underline-offset-4 hover:text-foreground">how we can work together</a>.
          </p>
        </Reveal>
      </Card>
    </SectionWrapper>
  );
}
