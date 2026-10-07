"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToY } from "@/lib/lenis";

type MenuItem = { num: string; label: string; id: string; href?: string };

const ITEMS: MenuItem[] = [
  { num: "01", label: "HOME",    id: "hero"    },
  { num: "02", label: "SKILLS",  id: "skills"  },
  { num: "03", label: "ABOUT",   id: "about"   },
  { num: "04", label: "WORK",    id: "work"    },
  { num: "05", label: "CONTACT", id: "contact" },
  // Real link (own page, own root layout), not an in-page scroll target
  { num: "06", label: "BLOG",    id: "blog", href: "/en/blog/" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RowProps = {
  href?: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  style: React.CSSProperties;
  children: React.ReactNode;
};

// Scroll items are buttons; the blog item is a real anchor with identical styling
function Row({ href, onClick, ...rest }: RowProps) {
  return href ? <a href={href} {...rest} /> : <button onClick={onClick} {...rest} />;
}

export default function Menu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const goTo = useCallback((id: string) => {
    onClose();
    // Wait for close animation before scrolling.
    // Use getBoundingClientRect + window.scrollY for the raw pixel target so
    // GSAP pin spacers (which shift element positions in the DOM flow) don't
    // confuse Lenis's element-based offset calculation.
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const target = el.getBoundingClientRect().top + window.scrollY;
      scrollToY(target, 1.3);
    }, 380);
  }, [onClose]);

  // Escape closes the menu
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#0a0a0a",
            display: "flex", flexDirection: "column",
          }}
        >
          <style>{`
            /* Keep link text centred in its taller touch target */
            @media (pointer: coarse) {
              .mn-foot-link { display: inline-flex; align-items: center; }
            }
            @media (max-width: 767px) {
              .mn-nav   { padding: 0.8rem 1.5rem !important; }
              .mn-label { font-size: clamp(2rem, 11vw, 7.5rem) !important; }
              .mn-foot  { padding: 1rem 1.5rem !important; flex-wrap: wrap !important; gap: 0.8rem !important; }
            }
          `}</style>
          {/* ── Top bar ── */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "1.5rem 2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}>
            {/* Logo */}
            <div style={{
              width: "2.4rem", height: "2.4rem", borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "0.6rem",
                fontWeight: 500, color: "#ffffff",
              }}>
                W.G.
              </span>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="tap-target"
              aria-label="Close menu"
              style={{
                display: "flex", alignItems: "center", gap: "0.55rem",
                background: "none", border: "none", cursor: "none",
                fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              Close
              <span style={{ fontSize: "1.2rem", lineHeight: 1, marginTop: "-0.05em" }}>×</span>
            </button>
          </div>

          {/* ── Nav items ── */}
          <div className="mn-nav" style={{
            flex: 1, display: "flex", flexDirection: "column",
            justifyContent: "center", padding: "1rem 4rem",
            gap: "0",
          }}>
            {ITEMS.map((item, i) => (
              <div key={item.id} style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.55, delay: i * 0.07 + 0.05, ease: EASE }}
                >
                  <Row
                    href={item.href}
                    onClick={() => goTo(item.id)}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "flex", alignItems: "baseline", gap: "1.4rem",
                      background: "none", border: "none", cursor: "none",
                      width: "100%", textAlign: "left",
                      padding: "0.35rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transform: hovered === item.id ? "translateX(14px)" : "translateX(0)",
                      transition: "transform 0.3s cubic-bezier(0.34,1.4,0.64,1)",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-inter)", fontSize: "0.58rem",
                      letterSpacing: "0.16em",
                      color: hovered === item.id ? "#8faa8b" : "rgba(255,255,255,0.22)",
                      transition: "color 0.2s ease",
                      flexShrink: 0, width: "2rem",
                    }}>
                      {item.num}
                    </span>
                    <span className="mn-label" style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(3rem, 7vw, 7.5rem)",
                      lineHeight: 0.92, letterSpacing: "0.01em",
                      color: hovered === item.id ? "#8faa8b" : "#ffffff",
                      transition: "color 0.2s ease",
                    }}>
                      {item.label}
                    </span>
                  </Row>
                </motion.div>
              </div>
            ))}
          </div>

          {/* ── Footer ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mn-foot"
            style={{
              padding: "1.4rem 4rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", gap: "1.4rem",
              flexShrink: 0,
            }}
          >
            {[
              { label: "GitHub",   href: "https://github.com/wasswassim" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/wassim-gatri-683a12259/" },
              { label: "Email",    href: "mailto:wassimgatri4@gmail.com" },
            ].map((link, i, arr) => (
              <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="mn-foot-link tap-target"
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.35rem" }}>◆</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
