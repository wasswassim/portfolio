import type { Lang } from "@/lib/i18n/config";
import Inline from "./Inline";
import BidiText from "./BidiText";

/** Blog index FAQ: same native <details> accordion as the article FAQ, answers stay in the HTML. */
export default function BlogFaq({ lang, title, items }: { lang: Lang; title: string; items: readonly { q: string; a: string }[] }) {
  return (
    <section className="blog-faq blog-landing-faq" aria-labelledby="blog-faq-title">
      <h2 id="blog-faq-title" className="blog-section-title"><BidiText lang={lang}>{title}</BidiText></h2>
      <div className="blog-accordion">
        {items.map((item, i) => (
          <details key={i} name="blog-landing-faq" className="blog-acc-item">
            <summary>
              <h3 className="blog-acc-q"><BidiText lang={lang}>{item.q}</BidiText></h3>
              <span className="blog-acc-icon" aria-hidden="true" />
            </summary>
            <div className="blog-acc-panel">
              <p><Inline lang={lang} text={item.a} /></p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
