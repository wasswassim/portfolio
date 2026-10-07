import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n/config";

/**
 * Plain anchors on purpose: every language lives under its own root layout, so a
 * switch is a full document load anyway. `paths` maps each language to the
 * equivalent page (null = no translation, link falls back to that blog home).
 */
export default function LanguageSwitcher({
  current,
  label,
  paths,
}: {
  current: Lang;
  label: string;
  paths: Record<Lang, string>;
}) {
  return (
    <ul className="blog-langs" aria-label={label} style={{ listStyle: "none" }}>
      {LANGS.map((lang) => (
        <li key={lang}>
          <a
            className="blog-lang"
            href={paths[lang]}
            lang={lang}
            hrefLang={lang}
            aria-current={lang === current ? "page" : undefined}
          >
            {LANG_LABEL[lang]}
          </a>
        </li>
      ))}
    </ul>
  );
}
