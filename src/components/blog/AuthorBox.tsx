import type { Lang } from "@/lib/i18n/config";
import { aboutPath } from "@/lib/i18n/routes";
import { SITE_NAME } from "@/lib/seo/site";
import { AUTHOR_AVATAR, AUTHOR_COPY } from "@/content/author";
import BidiText from "./BidiText";

/** Who wrote the post and why they know the topic, with a link to the author page (E-E-A-T). */
export default function AuthorBox({ lang }: { lang: Lang }) {
  const c = AUTHOR_COPY[lang];
  return (
    <aside className="blog-author" aria-label={c.more}>
      {/* eslint-disable-next-line @next/next/no-img-element -- 3 KB static avatar; static export has no image optimiser */}
      <img className="blog-author-photo" src={AUTHOR_AVATAR} width={240} height={240} alt="" loading="lazy" decoding="async" />
      <div>
        <p className="blog-author-name">{SITE_NAME}</p>
        <p className="blog-author-role"><BidiText lang={lang}>{c.role}</BidiText></p>
        <p className="blog-author-bio"><BidiText lang={lang}>{c.short}</BidiText></p>
        <a className="blog-author-more" href={aboutPath(lang)} rel="author">{c.more}</a>
      </div>
    </aside>
  );
}
