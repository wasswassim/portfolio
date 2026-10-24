"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Lang } from "@/lib/i18n/config";
import { navLinks, navText } from "@/content/site-nav";
import { usePerfProfile } from "@/components/home/use-perf-profile";
import styles from "./site-menu.module.css";

// The template's menu (Naresh Khatri's 3D portfolio, MIT), shared by the homepage, /stack, /links
// and the blog: a "Menu" button, then a panel that drops down with very large links; the letters
// rise in, the other links blur while one is hovered, and a picture previews the hovered link.
const EASE = [0.76, 0, 0.24, 1] as const;

export default function SiteMenu({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [current, setCurrent] = useState("");
  const { reducedMotion } = usePerfProfile();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const links = navLinks(lang);
  const t = navText(lang);
  const rtl = lang === "ar";
  // The panel renders into <body>: a blurred (backdrop-filter) header would otherwise trap the
  // fixed panel inside the header bar
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // The blur on the other links follows a mouse. On touch screens there is no cursor to move
  // away, and opening the menu focuses the first link, so the rest would open blurred: skip it.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Where we are (path + hash), to mark the current link
  useEffect(() => {
    const update = () => setCurrent(location.pathname + location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [open]);

  // Escape closes; focus moves into the menu when it opens and back to the button when it closes
  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector("a");
    first?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const d = (s: number) => (reducedMotion ? 0 : s);
  const chars = (word: string) =>
    // Arabic letters join, so Arabic words animate as a whole
    (rtl ? [word] : word.split("")).map((c, i, all) => (
      <motion.span
        key={c + i}
        initial={reducedMotion ? false : { y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: d(1), ease: EASE, delay: d(i * 0.02) } }}
        exit={{ y: "100%", opacity: 0, transition: { duration: d(0.7), ease: EASE, delay: d((all.length - i) * 0.01) } }}
      >
        {c}
      </motion.span>
    ));

  return (
    <div className={open ? styles.open : undefined}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="site-menu-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.label}>
          <span aria-hidden={open}>{t.menu}</span>
          <span aria-hidden={!open}>{t.close}</span>
        </span>
        <span className={styles.burger} aria-hidden="true" />
      </button>

      {mounted && createPortal(
      <div className={open ? styles.open : undefined}>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: d(0.35) } }}
              exit={{ opacity: 0, transition: { duration: d(0.35) } }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="site-menu-panel"
              ref={panelRef}
              dir={rtl ? "rtl" : "ltr"}
              className={styles.panel}
              initial={{ height: 0 }}
              animate={{ height: "auto", transition: { duration: d(1), ease: EASE } }}
              exit={{ height: 0, transition: { duration: d(1), ease: EASE } }}
            >
              <div className={styles.wrapper}>
                <nav aria-label={t.navLabel}>
                  <ul className={styles.list}>
                    {links.map((l, i) => (
                      <li key={l.id}>
                        <Link
                          href={l.href}
                          className={`${styles.link} cursor-can-hover`}
                          aria-current={current === l.href ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          onMouseEnter={() => setHovered(i)}
                          onMouseLeave={() => setHovered(null)}
                          onFocus={() => setHovered(i)}
                          onBlur={() => setHovered(null)}
                        >
                          <motion.p
                            className={styles.word}
                            animate={
                              canHover && hovered !== null && hovered !== i
                                ? { filter: "blur(4px)", opacity: 0.6, transition: { duration: d(0.3) } }
                                : { filter: "blur(0px)", opacity: 1, transition: { duration: d(0.3) } }
                            }
                          >
                            {chars(l.label)}
                          </motion.p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <motion.div
                  className={styles.image}
                  aria-hidden="true"
                  animate={{ opacity: hovered !== null ? 1 : 0, transition: { duration: d(0.35) } }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
                  <img src={links[hovered ?? 0].thumbnail} alt="" width={420} height={380} />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>,
      document.body,
      )}
    </div>
  );
}
