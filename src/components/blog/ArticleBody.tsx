import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import type { Block } from "@/content/articles/types";
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
          <h2 className="blog-h2">{dict.article.faq}</h2>
          {block.items.map((item, i) => (
            <div key={i}>
              <h3 className="blog-h3">{t(item.q)}</h3>
              <p>{t(item.a)}</p>
            </div>
          ))}
        </section>
      );
    case "sources":
      return (
        <section className="blog-sources">
          <h2 className="blog-h2">{dict.article.sources}</h2>
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
