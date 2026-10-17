"use client";

// Shared building blocks of the new homepage, adapted from Naresh Khatri's 3D portfolio (MIT):
// the reveal animations, the section wrapper that fades and scales sections on scroll, the sticky
// section header, cards and buttons. Plain Tailwind classes, no shadcn dependency.
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { forwardRef, useEffect, useRef, type ReactNode } from "react";
import { usePerfProfile } from "./use-perf-profile";

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export function BlurIn({ children, className, delay = 0, duration = 1 }: { children: ReactNode; className?: string; delay?: number; duration?: number }) {
  const { reducedMotion } = usePerfProfile();
  return (
    <motion.div
      initial={reducedMotion ? false : { filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: reducedMotion ? 0 : duration, delay: reducedMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slides the content up from behind a mask, once, when it enters the viewport */
export function BoxReveal({ children, width = "fit-content", delay, duration = 0.5 }: { children: ReactNode; width?: "fit-content" | "100%"; delay?: number; duration?: number }) {
  const { reducedMotion } = usePerfProfile();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (reducedMotion || inView) controls.start("visible");
  }, [inView, reducedMotion, controls]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        initial={reducedMotion ? "visible" : "hidden"}
        animate={controls}
        transition={{ duration: reducedMotion ? 0 : duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { reducedMotion } = usePerfProfile();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A page section that fades and scales in and out with the scroll, as in the template */
export function SectionWrapper({ id, className, children, ariaLabelledby }: { id?: string; className?: string; children: ReactNode; ariaLabelledby?: string }) {
  const { reducedMotion } = usePerfProfile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  return (
    <section id={id} ref={ref} aria-labelledby={ariaLabelledby} className={cn("relative", className)}>
      <motion.div style={{ opacity: reducedMotion ? 1 : opacity, scale: reducedMotion ? 1 : scale }} className="h-full w-full">
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ id, title, desc, className, sticky = true }: { id: string; title: ReactNode; desc?: ReactNode; className?: string; sticky?: boolean }) {
  return (
    <div className={cn(sticky && "sticky top-[70px]", "mb-16", className)}>
      <BoxReveal width="100%">
        <h2 id={`${id}-title`} className="text-center text-4xl font-bold text-foreground md:text-7xl">{title}</h2>
      </BoxReveal>
      {desc && <p className="mx-auto mt-3 max-w-3xl text-center text-base font-normal text-muted-foreground">{desc}</p>}
    </div>
  );
}

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  // A background passed in className replaces the default one (two bg- utilities would clash)
  <div ref={ref} className={cn("pointer-events-auto rounded-lg border border-border text-card-foreground shadow-sm backdrop-blur-sm", !/\bbg-/.test(className ?? "") && "bg-card/70", className)} {...props} />
));
Card.displayName = "Card";

const BUTTON = {
  default: "bg-primary text-primary-foreground hover:bg-primary/85",
  outline: "border border-input bg-background/60 hover:bg-secondary",
  ghost: "hover:bg-secondary",
};

export function buttonClass(variant: keyof typeof BUTTON = "default", className?: string) {
  return cn(
    "pointer-events-auto inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    BUTTON[variant],
    className,
  );
}

export function ScrollDownIcon() {
  const { reducedMotion } = usePerfProfile();
  return (
    <div aria-hidden="true" className="min-h-[50px] w-fit rounded-full border-2 border-white p-1">
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 25], opacity: [1, 0] }}
        transition={{ duration: 1, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
        className="h-3 w-3 rounded-full bg-white"
      />
    </div>
  );
}
