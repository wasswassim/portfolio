import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { articleLink } from "@/content/articles";
import { PERSONAS } from "@/content/personas";
import BidiText from "./BidiText";

/**
 * "Who is this for?" on the blog index: one card per reader profile with links to its guides.
 * Server-rendered, so every card and link is in the static HTML. A grid on tablet and desktop,
 * a swipe row with scroll-snap on phones (see .blog-personas in blog.css).
 */
export default function BlogPersonas({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const copy = dict.landing.personas;
  return (
    // Unnamed section, so the scroll region below is the only landmark here (no nested duplicate)
    <section className="blog-personas">
      <h2 id="blog-personas-title" className="blog-section-title"><BidiText lang={lang}>{copy.title}</BidiText></h2>
      {/* Focusable so keyboard users can scroll the swipe row with the arrow keys */}
      <div className="blog-personas-track" role="region" tabIndex={0} aria-label={copy.regionLabel}>
        <ul className="blog-personas-list">
          {PERSONAS.map((p) => {
            const item = copy.items[p.id];
            return (
              <li key={p.id} className="blog-persona">
                <h3><BidiText lang={lang}>{item.q}</BidiText></h3>
                <p><BidiText lang={lang}>{item.text}</BidiText></p>
                <ul className="blog-persona-links">
                  {p.articleIds.map((id) => {
                    const link = articleLink(lang, id);
                    return (
                      <li key={id}>
                        <a href={link.href}>
                          <BidiText lang={lang}>{link.label}</BidiText> <span className="blog-arrow" aria-hidden="true">→</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
