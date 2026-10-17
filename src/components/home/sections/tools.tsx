"use client";

import Link from "next/link";
import { STACK, TOOL_COUNT } from "@/content/stack";
import ToolLogo from "../tool-logo";
import { BoxReveal, Card, Reveal, SectionWrapper, buttonClass } from "../ui";

// "The tools I actually use", following abdulosama.com: one wall of logo keys, the category counts,
// and a link to the full /stack page. Hardware has its own place on /stack only.
const SOFTWARE = STACK.filter((c) => c.id !== "hardware");

export default function ToolsSection() {
  return (
    <SectionWrapper id="tools" ariaLabelledby="tools-title" className="w-full py-24">
      <Card className="mx-auto max-w-5xl bg-background/75 px-4 py-12 md:px-10">
        <BoxReveal width="100%">
          <h2 id="tools-title" className="text-center text-4xl font-bold md:text-6xl">My tools</h2>
        </BoxReveal>
        <Reveal>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Not a list copied from the internet: these are the tools my work actually runs on, and I keep the list up to date.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap justify-center gap-2.5" aria-label="Tools">
            {SOFTWARE.flatMap((c) => c.tools).map((tool) => (
              <li key={tool.slug} className="pointer-events-auto">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" title={tool.name} className="block transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1">
                  <ToolLogo tool={tool} size="sm" />
                  <span className="sr-only">{tool.name} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Categories">
            {STACK.map((c) => (
              <li key={c.id}>
                <Link href={`/stack/#${c.id}`} className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm hover:bg-secondary">
                  {c.title} <span className="text-muted-foreground">{c.tools.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Link href="/stack/" className={buttonClass("default")}>Browse all {TOOL_COUNT} tools</Link>
        </Reveal>
      </Card>
    </SectionWrapper>
  );
}
