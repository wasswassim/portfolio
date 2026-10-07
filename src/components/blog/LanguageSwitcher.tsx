import type { CSSProperties } from "react";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n/config";

/**
 * Three-way toggle. The options are real links (each language is its own static page,
 * under its own <html lang dir>, so a switch is a full document load). The thumb sits
 * behind the active option; across the page load it slides to its new position through
 * the cross-document view transition (see "lang-thumb" in blog.css). `paths` maps each
 * language to the equivalent page (the blog home when no translation exists).
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
    <div
      className="blog-toggle"
      role="group"
      aria-label={label}
      style={{ "--i": LANGS.indexOf(current) } as CSSProperties}
    >
      <span className="blog-toggle-thumb" aria-hidden="true" />
      <ul className="blog-toggle-options">
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
    </div>
  );
}
