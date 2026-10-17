import Link from "next/link";
import { AUTHOR_LINKEDIN } from "@/content/author";

// Footer, with the credit to the design this homepage is adapted from (see THIRD_PARTY_NOTICES.md).
const LINKS = [
  { href: "/stack/", label: "Stack" },
  { href: "/en/blog/", label: "Blog" },
  { href: "/en/privacy/", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 flex w-full shrink-0 flex-col items-center gap-3 border-t border-border bg-background/60 px-4 py-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:px-8 md:text-left">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wassim Gatri. All rights reserved.
        <br />
        Design inspired by{" "}
        <a href="https://github.com/Naresh-Khatri/3d-portfolio" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
          Naresh Khatri&apos;s 3D Portfolio
        </a>
        .
      </p>
      <nav aria-label="Footer">
        <ul className="flex gap-4 text-xs">
          {LINKS.map((l) => (
            <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:underline">{l.label}</Link></li>
          ))}
          <li><a href={AUTHOR_LINKEDIN} target="_blank" rel="me noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a></li>
        </ul>
      </nav>
    </footer>
  );
}
