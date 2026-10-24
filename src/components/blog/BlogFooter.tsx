import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { navLinks, navText } from "@/content/site-nav";

/** Footer with the same links as the site menu (src/content/site-nav.ts), the privacy page and the design credit. */
export default function BlogFooter({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const t = navText(lang);
  const links = [...navLinks(lang).map((l) => ({ label: l.label, href: l.href })), { label: t.privacy, href: `/${lang}/privacy/` }];
  return (
    <footer className="blog-footer">
      <nav aria-label={t.navLabel} className="blog-footer-nav">
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
      <span>
        &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {dict.footer.rights}
        <br />
        <span className="blog-footer-credit">Design inspired by Naresh Khatri&apos;s 3D Portfolio.</span>
      </span>
    </footer>
  );
}
