import Link from "next/link";
import { AUTHOR_LINKEDIN, AUTHOR_TIKTOK } from "@/content/author";
import { navLinks, navText } from "@/content/site-nav";

// Footer with the same links as the site menu (src/content/site-nav.ts), the privacy page, the social
// profiles and the credit to the design this site is adapted from (see THIRD_PARTY_NOTICES.md).
const LINKS = [...navLinks("en").map((l) => ({ href: l.href, label: l.label })), { href: "/en/privacy/", label: navText("en").privacy }];

export default function Footer() {
  return (
    <footer className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 border-t border-border bg-background/60 px-4 py-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:px-8 md:text-left">
      <p className="text-xs text-muted-foreground">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Wassim Gatri. All rights reserved.
        <br />
        Design inspired by Naresh Khatri&apos;s 3D Portfolio.
      </p>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
          {LINKS.map((l) => (
            <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:underline">{l.label}</Link></li>
          ))}
          <li><a href={AUTHOR_LINKEDIN} target="_blank" rel="me noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a></li>
          <li><a href={AUTHOR_TIKTOK} target="_blank" rel="me noopener noreferrer" className="underline-offset-4 hover:underline">TikTok</a></li>
        </ul>
      </nav>
    </footer>
  );
}
