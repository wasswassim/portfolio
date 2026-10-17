"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CURRENT_PROJECT, PROJECTS, type Project } from "@/content/projects";
import { BoxReveal, Reveal, SectionWrapper, buttonClass, cn } from "../ui";

// Projects, as in the template (the keyboard flips and the bongo cat taps behind this section):
// the current project as a large non-clickable card, then cards that open a small presentation.
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
);

function CurrentProject({ dir = "ltr" }: { dir?: "ltr" | "rtl" }) {
  const p = CURRENT_PROJECT;
  return (
    <Reveal>
      <article
        dir={dir}
        aria-labelledby="current-project-title"
        className="pointer-events-auto relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm md:p-12"
      >
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Current project</p>
            <h3 id="current-project-title" className="mt-3 text-4xl font-bold md:text-6xl">{p.name}</h3>
            <p className="mt-3 text-xl text-foreground/85 md:text-2xl">{p.tagline}</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.facts.map((f) => (
                <li key={f} className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80">{f}</li>
              ))}
            </ul>
            <div className="mt-8">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={buttonClass("default")}>
                  Discover {p.name} <Arrow />
                </a>
              ) : (
                <span className={buttonClass("outline", "cursor-default opacity-70")} aria-disabled="true">Coming soon</span>
              )}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
          <img src={p.logo} width={320} height={320} alt={`${p.name} logo`} className="size-28 shrink-0 rounded-3xl md:size-48" />
        </div>
      </article>
    </Reveal>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      aria-labelledby={`project-${project.id}-title`}
      data-lenis-prevent
      className="m-auto max-h-[85vh] w-[min(56rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-border bg-background p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/85 px-6 py-4 backdrop-blur-sm md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <h3 id={`project-${project.id}-title`} className="truncate text-xl font-bold md:text-2xl">{project.title}</h3>
            <span className="shrink-0 rounded-full border border-border px-3 py-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">{project.category}</span>
          </div>
          <button type="button" onClick={onClose} className={buttonClass("ghost", "px-3")} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="px-6 py-6 md:px-8 md:py-8">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
          <img src={project.image.src} width={project.image.width} height={project.image.height} alt={`${project.title}, screenshot`} className="w-full rounded-lg border border-border" />
          <p className="mt-6 text-sm text-muted-foreground">{project.type} · {project.year}</p>
          <p className="mt-3 text-lg leading-relaxed text-foreground/90">{project.desc}</p>
          {(project.live || project.github) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={buttonClass("default")}>Visit <Arrow /></a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClass("outline")}>Source code <Arrow /></a>}
            </div>
          )}
        </div>
      </motion.div>
    </dialog>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group pointer-events-auto relative block aspect-[3/2] w-full overflow-hidden rounded-lg text-left ring-1 ring-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
      <img src={project.image.src} width={project.image.width} height={project.image.height} alt="" loading="lazy" className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
      <span className="absolute inset-x-0 bottom-0 flex h-28 flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent p-4">
        <span className="text-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">{project.title}</span>
        <span className="mt-1 w-fit rounded-lg bg-primary px-2 text-xs text-primary-foreground">{project.category}</span>
      </span>
    </button>
  );
}

export default function ProjectsSection() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <SectionWrapper id="projects" ariaLabelledby="projects-title" className={cn("mx-auto max-w-7xl px-4 py-24 md:min-h-[130vh]")}>
      <div className="sticky top-[70px] mb-16">
        <BoxReveal width="100%">
          <h2 id="projects-title" className="text-center text-4xl font-bold md:text-7xl">Projects</h2>
        </BoxReveal>
      </div>
      <CurrentProject />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={i * 0.05}>
              <ProjectCard project={project} onOpen={() => setOpen(project)} />
            </Reveal>
          </li>
        ))}
      </ul>
      <AnimatePresence>{open && <ProjectDialog key={open.id} project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </SectionWrapper>
  );
}
