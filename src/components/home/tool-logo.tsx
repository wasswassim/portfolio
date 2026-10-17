import type { Tool } from "@/content/stack";
import { cn } from "./ui";

// Logo of a tool on a light tile (most brand marks are drawn for light backgrounds).
// Tools without an SVGL logo show their initials.
const LOGOS = new Set([
  "claude", "claude-code", "chatgpt", "opencode", "perplexity", "whisper", "codex", "gemini", "grok", "kimi", "manus", "openrouter",
  "github", "cloudflare", "n8n", "docker", "shadcn-ui", "radix-ui", "ark-ui", "svgl", "stripe",
  "figma", "affinity", "canva", "midjourney", "instagram-edits", "premiere-pro",
  "meta-ads", "tiktok-ads", "google-workspace", "google-meet",
  "raycast", "arc", "telegram",
  "macbook-pro", "mac-mini", "iphone", "raspberry-pi-500", "ray-ban-meta",
]);

export const hasLogo = (slug: string) => LOGOS.has(slug);

export default function ToolLogo({ tool, size = "md" }: { tool: Tool; size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-12 rounded-xl p-2.5" : "size-14 rounded-2xl p-3";
  if (!hasLogo(tool.slug)) {
    const initials = tool.name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return (
      <span aria-hidden="true" className={cn(box, "flex shrink-0 items-center justify-center bg-white font-display text-sm font-bold text-slate-900 shadow-[inset_0_-3px_0_rgba(0,0,0,0.12)]")}>
        {initials}
      </span>
    );
  }
  return (
    <span aria-hidden="true" className={cn(box, "flex shrink-0 items-center justify-center bg-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.12)]")}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG logos */}
      <img src={`/assets/stack/${tool.slug}.svg`} alt="" width={32} height={32} loading="lazy" className="size-full object-contain" />
    </span>
  );
}
