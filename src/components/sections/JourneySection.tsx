"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Status = "idle" | "sending" | "success" | "error";

// Inlined at build time (GitHub Actions secrets in CI, .env.local locally)
const EMAILJS = {
  serviceId:  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim(),
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey:  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim(),
};

export default function JourneySection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const formRef     = useRef<HTMLFormElement>(null);
  const leftColRef  = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  // Right-column elements revealed in stagger order: label, headline, subline, form wrapper, socials
  const rightRefs   = useRef<(HTMLElement | null)[]>([]);

  const [status, setStatus] = useState<Status>("idle");

  // ── Reveal animations ────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const trigger = { trigger: section, start: "top 80%", once: true };
      // Photos sit below the form on mobile, so reveal them when they arrive
      const photoTrigger = { trigger: leftColRef.current, start: "top 85%", once: true };

      // Left column: slides in from left while fading
      gsap.from(leftColRef.current, {
        x: -50, opacity: 0,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: photoTrigger,
      });

      // Portrait: rises from below inside the column (short delay so it follows the column)
      gsap.from(portraitRef.current, {
        y: 50, opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.22,
        scrollTrigger: photoTrigger,
      });

      // Right column: each semantic block staggers up
      const elems = rightRefs.current.filter(Boolean) as HTMLElement[];
      if (elems.length) {
        gsap.from(elems, {
          y: 44, opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: { ...trigger, start: "top 78%" },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // ── Form submission ───────────────────────────────────────────────────────────
  // Field name= attributes map 1-to-1 onto {{name}}, {{email}}, {{subject}},
  // {{message}} and {{time}} in the EmailJS template.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      console.error("[EmailJS] Missing NEXT_PUBLIC_EMAILJS_* env vars at build time.");
      setStatus("error");
      return;
    }

    const timeField = formRef.current.elements.namedItem("time") as HTMLInputElement | null;
    if (timeField) timeField.value = new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, {
        publicKey: EMAILJS.publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      // EmailJS returns { status, text } — the text says exactly what's wrong
      console.error("[EmailJS] send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      suppressHydrationWarning
      style={{ background: "#8faa8b", position: "relative", zIndex: 30 }}
    >
      {/* ── Input + link pseudo-class styles ── */}
      <style>{`
        .cj-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.18);
          padding: 0.8rem 0;
          font-family: var(--font-inter);
          font-size: 0.88rem;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.22s ease;
          box-sizing: border-box;
        }
        .cj-input::placeholder { color: rgba(0,0,0,0.28); }
        .cj-input:focus { border-bottom-color: rgba(0,0,0,0.55); }
        .cj-social {
          font-family: var(--font-inter);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: rgba(0,0,0,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cj-social:hover { color: rgba(0,0,0,0.85); }
        /* iOS zooms into any field under 16px on focus and stays zoomed —
           the page then pans sideways past its edges */
        @media (pointer: coarse), (max-width: 767px) {
          .cj-input { font-size: 16px; }
        }
        @media (max-width: 767px) {
          .cj-grid      { grid-template-columns: 1fr !important; }
          /* Photos drop below the form instead of disappearing */
          .cj-photo-col { order: 2; min-height: 125vw; }
          .cj-portrait-wrap { padding: 0 1.5rem 2.5rem !important; }
          .cj-form-col  { padding: 4rem 1.5rem !important; }
          .cj-footer    { padding: 1.2rem 1.5rem !important; }
        }
      `}</style>

      {/* ── Two-column layout ── */}
      <div className="cj-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>

        {/* ── Left: editorial portrait ── */}
        <div ref={leftColRef} className="cj-photo-col" style={{ position: "relative", overflow: "hidden" }}>
          {/* Background layer — full bleed (studio shot / wassimage2) */}
          <Image
            src="/img/wassimage2.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          {/* Foreground portrait — smaller, pushed toward bottom so more
              of the background environment shows above it */}
          <div className="cj-portrait-wrap" style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "0 3.5rem 4.5rem",
          }}>
            <div
              ref={portraitRef}
              style={{
                position: "relative",
                width: "60%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 6px 24px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/img/wassimage.webp"
                alt="Wassim Gatri"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 767px) 60vw, 35vw"
              />
            </div>
          </div>
        </div>

        {/* ── Right: contact form ── */}
        <div className="cj-form-col" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem 5rem",
        }}>
          {/* Label */}
          <span
            ref={(el) => { rightRefs.current[0] = el; }}
            style={{
              display: "block",
              fontFamily: "var(--font-inter)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)",
              marginBottom: "1rem",
            }}
          >
            Get in touch
          </span>

          {/* Headline */}
          <h2
            ref={(el) => { rightRefs.current[1] = el; }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 5.5vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "0.01em",
              color: "#0a0a0a",
              margin: "0 0 1.1rem",
            }}
          >
            LET&apos;S BUILD SOMETHING.
          </h2>

          {/* Subline */}
          <p
            ref={(el) => { rightRefs.current[2] = el; }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              color: "rgba(0,0,0,0.48)",
              margin: "0 0 2.5rem",
              maxWidth: "32rem",
            }}
          >
            Available for freelance projects, full-time roles, and creative collaborations.
          </p>

          {/* Form */}
          <div ref={(el) => { rightRefs.current[3] = el; }}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="time" />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <input suppressHydrationWarning type="text"  name="name"    placeholder="Your name"                  required className="cj-input" />
                <input suppressHydrationWarning type="email" name="email"   placeholder="Your email"                 required className="cj-input" />
                <input suppressHydrationWarning type="text"  name="subject" placeholder="Subject"                    required className="cj-input" />
                <textarea           suppressHydrationWarning name="message" placeholder="Tell me about your project..." required rows={5} className="cj-input" style={{ resize: "none", lineHeight: 1.6 }} />
              </div>

              {status === "idle" || status === "sending" ? (
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    background: "#0a0a0a",
                    color: "#ffffff",
                    border: "none",
                    padding: "1.1rem",
                    marginTop: "1.8rem",
                    fontFamily: "var(--font-bebas)",
                    fontSize: "1.4rem",
                    letterSpacing: "0.08em",
                    cursor: "none",
                    opacity: status === "sending" ? 0.6 : 1,
                    transition: "opacity 0.2s ease",
                    borderRadius: "2px",
                  }}
                >
                  {status === "sending" ? "SENDING..." : "SEND IT →"}
                </button>
              ) : status === "success" ? (
                <div style={{
                  marginTop: "1.8rem", padding: "1.1rem 1.4rem",
                  background: "rgba(0,0,0,0.08)", borderRadius: "4px",
                  fontFamily: "var(--font-inter)", fontSize: "0.82rem",
                  lineHeight: 1.5, color: "#0a0a0a", textAlign: "center",
                }}>
                  Message sent! I&apos;ll get back to you soon.
                </div>
              ) : (
                <div style={{
                  marginTop: "1.8rem", padding: "1.1rem 1.4rem",
                  background: "rgba(0,0,0,0.08)", borderRadius: "4px",
                  fontFamily: "var(--font-inter)", fontSize: "0.82rem",
                  lineHeight: 1.5, color: "rgba(0,0,0,0.65)", textAlign: "center",
                }}>
                  Something went wrong. Please try again, or message me on{" "}
                  <a href="https://www.linkedin.com/in/wassim-gatri-683a12259/" target="_blank" rel="noopener noreferrer" style={{ color: "#0a0a0a", fontWeight: 600, textDecoration: "none" }}>
                    LinkedIn
                  </a>.
                  {/* Fields keep their values after a failure, so this just resends them */}
                  <button
                    type="submit"
                    className="tap-target"
                    style={{
                      display: "block",
                      width: "100%",
                      marginTop: "1rem",
                      background: "transparent",
                      color: "#0a0a0a",
                      border: "1px solid rgba(0,0,0,0.35)",
                      padding: "0.75rem",
                      fontFamily: "var(--font-bebas)",
                      fontSize: "1.15rem",
                      letterSpacing: "0.08em",
                      borderRadius: "2px",
                    }}
                  >
                    TRY AGAIN ↻
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Social links */}
          <div
            ref={(el) => { rightRefs.current[4] = el; }}
            style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginTop: "2.4rem" }}
          >
            <a href="https://github.com/wasswassim"                              target="_blank" rel="noopener noreferrer" className="cj-social">GitHub</a>
            <span style={{ color: "rgba(0,0,0,0.22)", fontSize: "0.38rem" }}>◆</span>
            <a href="https://www.linkedin.com/in/wassim-gatri-683a12259/"        target="_blank" rel="noopener noreferrer" className="cj-social">LinkedIn</a>
            <span style={{ color: "rgba(0,0,0,0.22)", fontSize: "0.38rem" }}>◆</span>
            <a href="mailto:wassimgatri4@gmail.com"                              className="cj-social">Email</a>
          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="cj-footer" style={{
        background: "#0a0a0a", padding: "1.4rem 4rem",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)" }}>
          &copy; 2025 Wassim Gatri &mdash; Designed &amp; built by me.
        </span>
      </div>
    </section>
  );
}
