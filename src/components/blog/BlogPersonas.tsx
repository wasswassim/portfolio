import Image from "next/image";
import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { articleLink, articlePhoto } from "@/content/articles";
import { PERSONAS } from "@/content/personas";
import BidiText from "./BidiText";

/**
 * "Who is this for?" on the blog index: one row per reader profile, a photo next to the text and
 * links to its guides. Rows stack in the width of the ask box, the photo alternates sides from
 * 40rem and sits on top on phones. Server-rendered, so every row and link is in the static HTML.
 */
export default function BlogPersonas({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const copy = dict.landing.personas;
  return (
    <section className="blog-personas" aria-labelledby="blog-personas-title">
      <h2 id="blog-personas-title" className="blog-section-title"><BidiText lang={lang}>{copy.title}</BidiText></h2>
      <ul className="blog-personas-list">
        {PERSONAS.map((p) => {
          const item = copy.items[p.id];
          const photo = articlePhoto(lang, p.photo.articleId, p.photo.src);
          return (
            <li key={p.id} className="blog-persona">
              <figure className="blog-persona-photo">
                <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} sizes="(min-width: 40rem) 26rem, 100vw" />
                {photo.credit && (
                  <figcaption>
                    <a href={photo.credit.url} rel="noopener noreferrer" target="_blank">{photo.credit.text}</a>
                  </figcaption>
                )}
              </figure>
              <div className="blog-persona-body">
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
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
