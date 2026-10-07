import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { blogPath, homePath } from "@/lib/i18n/routes";
import LanguageSwitcher from "./LanguageSwitcher";

export default function BlogHeader({
  lang,
  dict,
  switcherPaths,
}: {
  lang: Lang;
  dict: Dictionary;
  switcherPaths: Record<Lang, string>;
}) {
  return (
    <header className="blog-header">
      <a href={homePath()} className="blog-logo" aria-label={dict.nav.home}>
        W.G.
      </a>
      <nav aria-label="Main">
        <a href={blogPath(lang)} className="blog-nav-link">
          {dict.nav.blog}
        </a>
        <a href={homePath()} className="blog-nav-link">
          {dict.nav.home}
        </a>
        <LanguageSwitcher current={lang} label={dict.nav.language} paths={switcherPaths} />
      </nav>
    </header>
  );
}
