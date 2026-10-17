"use client";

import { Amiri_Quran } from "next/font/google";
import { useEffect, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../skills";
import { useSceneStatus } from "../scene-health";
import { usePerfProfile } from "../use-perf-profile";
import { BoxReveal, SectionWrapper, cn } from "../ui";

// The section where the template showed "Tech Stack": Surah An-Najm 53:39, centred, with the 3D
// keyboard below it. Translation: Saheeh International (quran.com/53/39).
const amiri = Amiri_Quran({ subsets: ["arabic"], weight: "400", display: "swap", preload: false });

export default function VerseSection() {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  // Without the 3D keyboard (reduced motion, no WebGL, scene failure) the keys show as an HTML grid
  const showGrid = !ready || disable3D || sceneStatus !== "ready";

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  return (
    <SectionWrapper
      id="verse"
      ariaLabelledby="verse-title"
      className={showGrid ? "flex min-h-screen w-full flex-col justify-center py-24" : "pointer-events-none h-screen w-full md:h-[150dvh]"}
    >
      <div className={cn(!showGrid && "sticky top-[70px]", "mx-auto max-w-4xl px-4 text-center")}>
        <h2 id="verse-title" className="sr-only">A verse that guides my work</h2>
        <BoxReveal width="100%">
          <figure>
            <p className="text-sm text-muted-foreground">قال الله تعالى:</p>
            <blockquote lang="ar" dir="rtl" className={cn(amiri.className, "mt-2 text-3xl leading-[1.8] text-foreground md:text-5xl")}>
              «وَأَنْ لَيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَى»
            </blockquote>
            <figcaption className="mt-2">
              <p className="mx-auto max-w-2xl text-base text-foreground/90 md:text-lg">
                &ldquo;And that there is not for man except that [good] for which he strives.&rdquo;
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Surah An-Najm 53:39, translation by{" "}
                <a href="https://quran.com/53/39" target="_blank" rel="noopener noreferrer" className="pointer-events-auto underline underline-offset-4">
                  Saheeh International
                </a>
              </p>
            </figcaption>
          </figure>
        </BoxReveal>
      </div>

      <ul className={showGrid ? "mx-auto mt-14 grid w-full max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5" : "sr-only"} aria-label="Tools on the keyboard">
        {Object.values(SKILLS).map((skill) => (
          <li
            key={skill.name}
            style={{ "--skill": skill.color } as CSSProperties}
            className="group pointer-events-auto relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 p-5 backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--skill)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG logos */}
            <img src={skill.icon} alt="" width={44} height={44} loading="lazy" className="size-9 object-contain md:size-11" />
            <span className="text-center text-xs font-medium text-foreground/80 md:text-sm">{skill.label}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
