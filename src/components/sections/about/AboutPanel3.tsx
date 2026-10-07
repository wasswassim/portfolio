import type { RefObject } from "react";
import dynamic from "next/dynamic";
import { LinkPreview } from "@/components/ui/link-preview";
import { Magnetic } from "@/components/ui/magnetic";
import SplineErrorBoundary from "./SplineErrorBoundary";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

/* ════════════════════════════════════════
   Panel 3 — I PAINT.   bg: Spline 3D
════════════════════════════════════════ */
export default function AboutPanel3({
  panelRef,
  innerRef,
  bodyRef,
  loadSpline,
  isTouch,
}: {
  panelRef: RefObject<HTMLDivElement | null>;
  innerRef: RefObject<HTMLDivElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  loadSpline: boolean;
  isTouch: boolean;
}) {
  return (
    <div
      ref={panelRef}
      className="about-panel about-panel-3"
      style={{
        width: "100vw", height: "100vh", flexShrink: 0,
        position: "relative", overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* ── Spline 3D scene — full-panel background ── */}
      {loadSpline && (
        <SplineErrorBoundary>
          <Spline
            scene="https://prod.spline.design/Y6qwPytKdu4Vr5ru/scene.splinecode"
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              // On touch screens the scene is decorative — don't let it swallow scroll
              pointerEvents: isTouch ? "none" : "auto",
            }}
          />
        </SplineErrorBoundary>
      )}

      {/* Subtle dark scrim so text is always legible over the scene */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* ── Parallax content wrapper — centred mid-panel ── */}
      <div
        ref={innerRef}
        className="about-p3-content"
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 4rem", textAlign: "center",
          paddingTop: "22vh",
          pointerEvents: "none", // let mouse events reach the Spline canvas
        }}
      >
        {/* Body, closing line, link — scroll-driven fade-in */}
        <div ref={bodyRef}>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "0.92rem",
            lineHeight: 1.8, color: "rgba(255,255,255,0.72)",
            maxWidth: "38rem", margin: "0 auto",
          }}>
            Landscapes. Seascapes. Canvas before screen. That&apos;s where the creative instinct comes from — the ability to see something that doesn&apos;t exist yet and bring it to life. I carry that into every project I touch.
          </p>

          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "0.78rem",
            fontWeight: 600, letterSpacing: "0.01em",
            color: "rgba(255,255,255,0.9)",
            marginTop: "1.4rem",
          }}>
            Ambitious by nature. Creative by choice. Technical by necessity.
          </p>

          <div style={{ marginTop: "1.4rem", pointerEvents: "auto" }}>
            <Magnetic strength={0.3}>
              <LinkPreview
                url="https://www.tiktok.com/@wassimgatri1"
                isStatic={true}
                imageSrc="/img/tiktok.webp"
                width={140}
                height={240}
                style={{
                  fontFamily: "var(--font-inter)", fontSize: "0.75rem",
                  fontWeight: 500, letterSpacing: "0.03em",
                  color: "rgba(255,255,255,0.65)",
                  borderBottom: "1px solid rgba(255,255,255,0.28)",
                  paddingBottom: "0.1rem",
                  textDecoration: "none",
                }}
              >
                → see my work
              </LinkPreview>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* ── Pointer hint (desktop) ── */}
      {!isTouch && <div style={{
        position: "absolute", top: "2.2rem", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3, pointerEvents: "none",
        display: "flex", alignItems: "center", gap: "0.55rem",
      }}>
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L1 10L4 7.5L5.5 11.5L7 11L5.5 7L9 7L1 1Z" fill="rgba(255,255,255,0.3)" />
        </svg>
        <span style={{
          fontFamily: "var(--font-inter)", fontSize: "0.58rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}>
          Move your cursor to paint
        </span>
      </div>}
    </div>
  );
}
