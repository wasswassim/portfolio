import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { blogPath, homePath } from "@/lib/i18n/routes";

/** Footer with the same entries as the site menu (portfolio sections, blog) plus the privacy page. */
export default function BlogFooter({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const n = dict.footerNav;
  const links = [
    { label: n.home, href: homePath() },
    { label: n.skills, href: homePath() + "#skills" },
    { label: n.about, href: homePath() + "#about" },
    { label: n.work, href: homePath() + "#work" },
    { label: n.contact, href: homePath() + "#contact" },
    { label: n.blog, href: blogPath(lang) },
    { label: n.privacy, href: `/${lang}/privacy/` },
  ];
  return (
    <footer className="blog-footer">
      <nav aria-label={n.label} className="blog-footer-nav">
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
      <span>
        &copy; {new Date().getFullYear()} {dict.footer.rights}
      </span>
    </footer>
  );
}
