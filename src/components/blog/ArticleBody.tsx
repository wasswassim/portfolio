import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import type { Block } from "@/content/articles/types";
import Image from "next/image";
import Inline from "./Inline";

function BlockView({ block, lang, dict }: { block: Block; lang: Lang; dict: Dictionary }) {
  const t = (text: string) => <Inline lang={lang} text={text} />;

  switch (block.type) {
    case "h2":
      return <h2 id={block.id} className="blog-h2">{t(block.text)}</h2>;
    case "h3":
      return <h3 id={block.id} className="blog-h3">{t(block.text)}</h3>;
    case "p":
      return <p>{t(block.text)}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className="blog-list-body">
          {block.items.map((item, i) => <li key={i}>{t(item)}</li>)}
        </List>
      );
    }
    case "callout":
      return (
        <aside className={`blog-callout blog-callout--${block.tone}`}>
          <p className="blog-callout-title">{block.title ? t(block.title) : dict.callout[block.tone]}</p>
          <p>{t(block.text)}</p>
        </aside>
      );
    case "steps":
      return (
        <ol className="blog-steps">
          {block.items.map((step, i) => (
            <li key={i}>
              <strong>{t(step.title)}</strong>
              <span>{t(step.text)}</span>
            </li>
          ))}
        </ol>
      );
    case "keyFacts":
      return (
        <section className="blog-facts">
          <h2 className="blog-facts-title">{dict.article.keyFacts}</h2>
          <dl>
            {block.items.map((item, i) => (
              <div key={i}>
                <dt>{t(item.label)}</dt>
                <dd>{t(item.value)}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "figure":
      return (
        <figure className="blog-figure">
          <Image
            src={block.src}
            width={block.width}
            height={block.height}
            alt={block.alt}
            sizes="(min-width: 64rem) 42rem, 100vw"
          />
          <figcaption>
            {t(block.caption)}
            {block.credit && (
              <small>
                <a href={block.credit.url} rel="noopener noreferrer" target="_blank">{block.credit.text}</a>
              </small>
            )}
          </figcaption>
        </figure>
      );
    case "gallery":
      // Bento grid: one large tile and smaller ones, so every trade shows without a long stack of photos
      return (
        <figure className="blog-gallery">
          <ul className="blog-gallery-grid">
            {block.items.map((item, i) => (
              <li key={item.src} className={i === 0 ? "blog-gallery-tile blog-gallery-tile--lead" : "blog-gallery-tile"}>
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  sizes={i === 0 ? "(min-width: 64rem) 21rem, 100vw" : "(min-width: 64rem) 10rem, 50vw"}
                />
                <span className="blog-gallery-label">{t(item.label)}</span>
              </li>
            ))}
          </ul>
          <figcaption>
            {t(block.caption)}
            <small>
              {dict.article.photos}{" "}
              {block.items.map((item, i) => (
                <span key={item.src}>
                  {i > 0 && " · "}
                  <a href={item.credit.url} rel="noopener noreferrer" target="_blank">{item.credit.text}</a>
                </span>
              ))}
            </small>
          </figcaption>
        </figure>
      );
    case "quote":
      return (
        <blockquote className="blog-quote">
          <p>{t(block.text)}</p>
          {block.cite && <footer>{t(block.cite)}</footer>}
        </blockquote>
      );
    case "faq":
      return (
        <section className="blog-faq">
          <h2 id={block.id} className="blog-h2">{block.title ?? dict.article.faq}</h2>
          {/* Native <details>: no JS, keyboard and screen-reader friendly, answers stay in the HTML.
              Items share a name, so opening one closes the others where the browser supports it. */}
          <div className="blog-accordion">
            {block.items.map((item, i) => (
              <details key={i} name={"faq-" + (block.id ?? "faq")} className="blog-acc-item">
                <summary>
                  <h3 className="blog-acc-q">{t(item.q)}</h3>
                  <span className="blog-acc-icon" aria-hidden="true" />
                </summary>
                <div className="blog-acc-panel">
                  <p>{t(item.a)}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      );
    case "video": {
      const ratio = (block.width ?? 16) + " / " + (block.height ?? 9);
      const src =
        block.provider === "youtube"
          ? "https://www.youtube-nocookie.com/embed/" + block.id + "?rel=0"
          : "https://player.vimeo.com/video/" + block.id + "?dnt=1";
      return (
        <figure className="blog-figure blog-video">
          <div className="blog-video-frame" style={{ aspectRatio: ratio }}>
            {block.provider === "file" ? (
              <video controls preload="metadata" playsInline poster={block.thumbnail} aria-label={block.title}>
                <source src={block.id} />
                {block.captions && (
                  <track kind="captions" src={block.captions.src} srcLang={block.captions.lang} label={block.captions.label} />
                )}
              </video>
            ) : (
              <iframe
                src={src}
                title={block.title}
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}
          </div>
          <figcaption>
            {t(block.caption)}
            {block.credit && (
              <small>
                <a href={block.credit.url} rel="noopener noreferrer" target="_blank">{block.credit.text}</a>
              </small>
            )}
          </figcaption>
        </figure>
      );
    }
    case "sources":
      return (
        <section className="blog-sources">
          <h2 id={block.id} className="blog-h2">{block.title ?? dict.article.sources}</h2>
          <ol>
            {block.items.map((item, i) => <li key={i}>{t(`[${item.label}](${item.url})`)}</li>)}
          </ol>
        </section>
      );
  }
}

export default function ArticleBody({
  body,
  lang,
  dict,
  className = "",
}: {
  body: Block[];
  lang: Lang;
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={`blog-prose ${className}`.trim()}>
      {body.map((block, i) => <BlockView key={i} block={block} lang={lang} dict={dict} />)}
    </div>
  );
}
