"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkPreview } from "@/components/ui/link-preview";

gsap.registerPlugin(ScrollTrigger);

// ── Unified project data ───────────────────────────────────────────────────────
// "accent" is a dark-tinted hue used as the card placeholder background — each
// category gets a distinct colour so the grid reads as varied at a glance.
const PROJECTS = [
  {
    id: 1,
    title:    "HR MANAGEMENT SYSTEM",
    category: "Web Development",
    type:     "Client Work",
    year:     "2023",
    desc:     "A full-stack web application for managing employee data, performance monitoring and HR processes. Built for ESPRIT School of Business final year project. Graded 16/20.",
    github:   null as string | null,
    live:     null as string | null,
    image:    "/img/work/hr.webp" as string | null,
    accent:   "#0c1a2e",
  },
  {
    id: 2,
    title:    "EVA CUISINE CAMPAIGN",
    category: "Digital Marketing",
    type:     "Client Work",
    year:     "2024",
    desc:     "End-to-end digital marketing campaign including ad creatives, lead generation strategy and campaign management for a food brand in Tunisia.",
    github:   null as string | null,
    live:     null as string | null,
    image:    "/img/work/eva.webp" as string | null,
    accent:   "#1e0d00",
  },
  {
    id: 3,
    title:    "E-COMMERCE REDESIGN",
    category: "Web Design",
    type:     "Client Work",
    year:     "2023",
    desc:     "UX-focused redesign and development for two e-commerce clients — Mekni Tunisian Distribution and EREMA Furniture — improving user experience and conversion.",
    github:   null as string | null,
    live:     null as string | null,
    image:    "/img/work/ecomerce.webp" as string | null,
    accent:   "#150a26",
  },
  {
    id: 4,
    title:    "RANKLY",
    category: "TypeScript",
    type:     "Personal",
    year:     "2023",
    desc:     "An SEO SaaS landing page — clean, fast and conversion focused.",
    github:   "https://github.com/wasswassim/Rankly",
    live:     "https://wasswassim.github.io/Rankly/",
    image:    "/img/work/rankly.webp" as string | null,
    accent:   "#0c1e38",
  },
  {
    id: 5,
    title:    "NEXUS DASHBOARD",
    category: "HTML",
    type:     "Personal",
    year:     "2024",
    desc:     "An ecommerce web app that tracks everything for your online store — inventory, sales and performance in one place.",
    github:   "https://github.com/wasswassim/nexus-dashboard",
    live:     "https://wasswassim.github.io/nexus-dashboard/",
    image:    "/img/work/nexus.webp" as string | null,
    accent:   "#1e0d00",
  },
  {
    id: 6,
    title:    "CIROKEBAP",
    category: "TypeScript",
    type:     "Personal",
    year:     "2023",
    desc:     "A restaurant website with online ordering and a full digital menu — built for a real kebab restaurant.",
    github:   "https://github.com/wasswassim/cirokebap",
    live:     "https://wasswassim.github.io/cirokebap/",
    image:    "/img/work/chirokebap.webp" as string | null,
    accent:   "#0c1e38",
  },
];

const FILTERS = ["All", "Client Work", "Personal"] as const;
type Filter = (typeof FILTERS)[number];

// ── Component ─────────────────────────────────────────────────────────────────
export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === filter);

  // Header stagger-up on scroll entry
  useEffect(() => {
    const section = sectionRef.current;
    const header  = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      gsap.from(Array.from(header.children), {
        y: 40, opacity: 0,
        duration: 0.8, stagger: 0.1, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      suppressHydrationWarning
      style={{ background: "#0a0a0a", position: "relative", zIndex: 20 }}
    >
      {/* ── Component-scoped styles ── */}
      <style>{`
        /* Card lift on hover — real pointers only, avoids sticky hover on tap */
        .ws-card {
          transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1),
                      border-color 0.28s ease,
                      box-shadow 0.28s ease;
        }
        @media (hover: hover) {
          .ws-card:hover {
            transform: translateY(-9px);
            border-color: rgba(143,170,139,0.32) !important;
            box-shadow: 0 22px 50px rgba(0,0,0,0.55);
          }
        }

        /* Hover overlay on placeholder */
        .ws-ph { position: relative; overflow: visible; }
        .ws-ph-inner { overflow: hidden; width: 100%; aspect-ratio: 16/9; }
        .ws-ov {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.84);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 0.9rem;
          opacity: 0;
          transition: opacity 0.22s ease;
          z-index: 2;
        }
        .ws-ph:hover .ws-ov { opacity: 1; }
        .ws-ph:focus-within .ws-ov { opacity: 1; }
        .ws-ph:focus { outline: none; }
        .ws-ph:focus-visible { outline: 1px solid #8faa8b; outline-offset: 2px; }

        /* Touch: first tap on the image reveals the overlay (focus), second tap
           hits the link. Hidden overlay can't swallow taps. */
        @media (hover: none) {
          .ws-ov { pointer-events: none; }
          .ws-ph:hover .ws-ov { opacity: 0; }
          .ws-ph:focus-within .ws-ov { opacity: 1; pointer-events: auto; }
          .ws-link { display: inline-flex; align-items: center; padding: 0 0.75rem; }
        }

        /* Link style inside overlay */
        .ws-link {
          font-family: var(--font-inter);
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.18s ease;
        }
        .ws-link:hover { color: #ffffff; }

        /* Filter pill button */
        .ws-filter { transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease; }

        @media (max-width: 767px) {
          .ws-grid   { grid-template-columns: 1fr !important; }
          .ws-header { padding: 4rem 1.5rem 2rem !important; }
          .ws-filters{ padding: 1.5rem 1.5rem 0 !important; flex-wrap: wrap !important; }
          .ws-gallery{ padding: 1.5rem 1.5rem 4rem !important; }
          .ws-ph-inner { aspect-ratio: 16/9 !important; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="ws-header" style={{ padding: "7rem 4rem 0" }}>
        <div ref={headerRef}>
          <span style={{
            display: "block",
            fontFamily: "var(--font-inter)", fontSize: "0.6rem",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)", marginBottom: "1rem",
          }}>
            All work
          </span>
          <h2 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 9vw, 9rem)",
            lineHeight: 0.88, letterSpacing: "0.01em",
            color: "#ffffff", margin: "0 0 1.2rem",
          }}>
            PROJECTS & EXPERIMENTS.
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "0.82rem",
            lineHeight: 1.7, color: "rgba(255,255,255,0.36)",
            maxWidth: "36rem", margin: 0,
          }}>
            Client work and personal experiments — built to solve real problems and scratch creative itches.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "2.5rem 4rem 0" }} />

      {/* ── Filter pills ── */}
      <div className="ws-filters" style={{ padding: "2rem 4rem 0", display: "flex", gap: "0.6rem" }}>
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              suppressHydrationWarning
              className="ws-filter tap-target"
              onClick={() => setFilter(f)}
              style={{
                padding: "0.45rem 1.4rem",
                borderRadius: "999px",
                border: `1px solid ${active ? "#8faa8b" : "rgba(255,255,255,0.12)"}`,
                background: active ? "#8faa8b" : "transparent",
                color: active ? "#0a0a0a" : "rgba(255,255,255,0.42)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.62rem",
                fontWeight: active ? 600 : 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "none",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* ── Grid ── */}
      <div className="ws-gallery" style={{ padding: "2.5rem 4rem 8rem" }}>
        <motion.div
          layout
          className="ws-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.28, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="ws-card"
                  style={{
                    background: "#111111",
                    border: "1px solid #1e1e1e",
                    borderRadius: "6px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* ── Image / placeholder + hover overlay ── */}
                  <div className="ws-ph" tabIndex={project.github ? 0 : -1}>
                    <div
                      className="ws-ph-inner"
                      style={{
                        background: project.image ? "#0a0a0a" : project.accent,
                        position: "relative",
                      }}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          loading="lazy"
                          decoding="async"
                          style={{ objectFit: "cover", objectPosition: "top center" }}
                          sizes="(max-width: 767px) 100vw, (max-width: 1440px) 33vw, 480px"
                        />
                      ) : (
                        /* Accent gradient for client-work cards without images */
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 55%)",
                          pointerEvents: "none",
                        }} />
                      )}
                    </div>

                    {/* Hover overlay — shows category, type, and links */}
                    <div className="ws-ov">
                      {/* Badges */}
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <span style={{
                          fontFamily: "var(--font-inter)", fontSize: "0.58rem", fontWeight: 500,
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          background: "#8faa8b", color: "#0a0a0a",
                          padding: "0.28rem 0.7rem", borderRadius: "999px",
                        }}>
                          {project.category}
                        </span>
                        <span style={{
                          fontFamily: "var(--font-inter)", fontSize: "0.58rem",
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "rgba(255,255,255,0.55)",
                          padding: "0.28rem 0.7rem", borderRadius: "999px",
                        }}>
                          {project.type}
                        </span>
                      </div>

                      {/* Links — personal projects only */}
                      {project.github && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ws-link tap-target"
                          >
                            → View on GitHub
                          </a>
                          {project.live && (
                            <LinkPreview
                              url={project.live}
                              isStatic={false}
                              width={200}
                              height={125}
                              className="ws-link tap-target"
                            >
                              → View Live
                            </LinkPreview>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div style={{
                    padding: "1.4rem 1.6rem 1.7rem",
                    flex: 1, display: "flex", flexDirection: "column",
                  }}>
                    {/* Title + year */}
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "flex-start", marginBottom: "0.65rem", gap: "0.75rem",
                    }}>
                      <h3 style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "1.85rem", color: "#ffffff",
                        letterSpacing: "0.02em", lineHeight: 1,
                        margin: 0, flex: 1,
                      }}>
                        {project.title}
                      </h3>
                      <span style={{
                        fontFamily: "var(--font-inter)", fontSize: "0.58rem",
                        letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)",
                        whiteSpace: "nowrap", marginTop: "0.2rem",
                      }}>
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontFamily: "var(--font-inter)", fontSize: "0.71rem",
                      lineHeight: 1.65, color: "rgba(255,255,255,0.33)",
                      margin: 0, flex: 1,
                    }}>
                      {project.desc}
                    </p>

                    {/* Footer — type tag */}
                    <div style={{
                      marginTop: "1.2rem", paddingTop: "1rem",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-inter)", fontSize: "0.57rem", fontWeight: 500,
                        letterSpacing: "0.11em", textTransform: "uppercase",
                        background: project.type === "Personal"
                          ? "rgba(143,170,139,0.14)"
                          : "rgba(255,255,255,0.05)",
                        color: project.type === "Personal"
                          ? "#8faa8b"
                          : "rgba(255,255,255,0.3)",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "999px",
                      }}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
