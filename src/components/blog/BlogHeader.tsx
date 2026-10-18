import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { homePath } from "@/lib/i18n/routes";
import LanguageSwitcher from "./LanguageSwitcher";
import SiteMenu from "@/components/site-menu/site-menu";

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
        <LanguageSwitcher current={lang} label={dict.nav.language} paths={switcherPaths} />
        <SiteMenu lang={lang} />
      </nav>
    </header>
  );
}
