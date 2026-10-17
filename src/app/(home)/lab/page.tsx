"use client";

import Preloader from "@/components/home/preloader";
import AnimatedBackground from "@/components/home/animated-background";

// TEMPORARY test page for the rebrand (Phase 1): checks that the 3D keyboard runs in this build.
// Not linked, noindex (see ./layout.tsx). Delete before the rebrand ships.
const SECTIONS = [
  { id: "hero", title: "Hero" },
  { id: "skills", title: "Verse (keyboard in the Tech Stack position)" },
  { id: "projects", title: "Projects (keyboard flipped, bongo cat)" },
  { id: "contact", title: "Let's work together" },
];

export default function LabPage() {
  return (
    <Preloader>
      <AnimatedBackground />
      <main className="canvas-overlay-mode relative">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="flex min-h-[150vh] items-start justify-center pt-24">
            <h2 className="text-3xl font-bold md:text-6xl">{s.title}</h2>
          </section>
        ))}
      </main>
    </Preloader>
  );
}
