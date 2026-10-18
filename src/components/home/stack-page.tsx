"use client";

import { STACK, TOOL_COUNT } from "@/content/stack";
import Preloader from "./preloader";
import Particles from "./particles";
import SmoothScroll from "./smooth-scroll";
import Header from "./header";
import Footer from "./footer";
import ElasticCursor from "./elastic-cursor";
import ToolLogo from "./tool-logo";
import { usePerfProfile } from "./use-perf-profile";
import { BlurIn, Card, Reveal } from "./ui";

// /stack, following abdulosama.com/stack: every tool by category, each with a one-line note.
// No 3D keyboard on this page, only the template's star background.
function Stars() {
  const { particleCount, maxDpr } = usePerfProfile();
  return particleCount > 0 ? <Particles className="fixed inset-0 -z-10" quantity={particleCount} maxDpr={maxDpr} /> : null;
}

const DEVICES = STACK.find((c) => c.id === "hardware")?.tools.length ?? 0;

export default function StackPage() {
  return (
    <Preloader disabled>
      <SmoothScroll>
        <Stars />
        <ElasticCursor />
        <Header />
        <main id="main" className="mx-auto max-w-6xl px-4 pt-32 pb-24">
          <BlurIn>
            <h1 className="text-center text-4xl font-bold md:text-7xl">My Stack</h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-muted-foreground">
              Software, AI and hardware: everything my work runs on. Maybe you&apos;ll spot a tool you use too.
            </p>
            <p className="mt-3 text-center text-sm text-foreground/80">
              {TOOL_COUNT - DEVICES} tools &amp; apps · {DEVICES} devices
            </p>
          </BlurIn>

          <nav aria-label="Categories" className="sticky top-16 z-20 mt-10 -mx-4 bg-background/70 px-4 py-3 backdrop-blur-md">
            <ul className="flex flex-wrap justify-center gap-2">
              {STACK.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm hover:bg-secondary">
                    {c.title} <span className="text-muted-foreground">{c.tools.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {STACK.map((c) => (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-32 pt-14">
              <Reveal>
                <h2 id={`${c.id}-title`} className="text-2xl font-bold md:text-3xl">{c.title}</h2>
                <p className="mt-1 text-muted-foreground">{c.intro}</p>
              </Reveal>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {c.tools.map((t, i) => (
                  <li key={t.slug}>
                    <Reveal delay={Math.min(i, 8) * 0.03} className="h-full">
                      <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                        <a href={t.url} target="_blank" rel="noopener noreferrer" className="flex h-full items-start gap-4 p-4">
                          <ToolLogo tool={t} size="sm" />
                          <span className="min-w-0">
                            <span className="flex items-center gap-2 font-semibold">
                              {t.name}
                              {t.past && <span className="rounded-full border border-border px-2 text-[11px] font-normal text-muted-foreground">Used before</span>}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{t.desc}</span>
                            <span className="sr-only"> (opens in a new tab)</span>
                          </span>
                        </a>
                      </Card>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
        <Footer />
      </SmoothScroll>
    </Preloader>
  );
}
