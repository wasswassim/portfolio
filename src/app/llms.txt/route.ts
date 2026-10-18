import { LANGS, type Lang } from "@/lib/i18n/config";
import { articlePath, blogPath } from "@/lib/i18n/routes";
import { articlesForLang, langsWithArticles } from "@/content/articles";
import { SERIES } from "@/content/articles/series";
import { AUTHOR, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain-Markdown map of the site for language models, built from the
// same article data as the pages, so it never drifts. One section per language, posts grouped by series.
const LANG_NAME: Record<Lang, string> = { en: "English", fr: "Français", ar: "العربية" };

function section(lang: Lang): string {
  const posts = articlesForLang(lang);
  const seriesOf = (id: string) => SERIES.find((s) => s.articleIds.includes(id));
  const lines: string[] = [`## ${LANG_NAME[lang]}: ${absoluteUrl(blogPath(lang))}`, ""];
  let current: string | undefined;
  for (const { article, translation } of posts) {
    const series = seriesOf(article.id);
    const group = series ? (series.topic ?? series.title)[lang] : undefined;
    if (group && group !== current) {
      lines.push("", `### ${group}`, "");
      current = group;
    }
    const title = translation.subtitle ? `${translation.title}: ${translation.subtitle}` : translation.title;
    lines.push(`- [${title}](${absoluteUrl(articlePath(lang, translation.slug))}): ${translation.summary}`);
  }
  return lines.join("\n");
}

export function GET() {
  const live = LANGS.filter((l) => langsWithArticles().includes(l));
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${AUTHOR.description} Guides are written in Arabic, French and English, with each fact checked against an official Italian or Tunisian source and dated.`,
    "",
    `Author: ${SITE_NAME}, ${AUTHOR.jobTitle} (${SITE_URL}). Each guide lists its official sources at the end and shows when it was last verified.`,
    "",
    "## Work with me",
    "",
    `- [Homepage](${SITE_URL}/): who I am, my projects (current project: Quran Edits, an AI studio for Quran recitation videos) and how we can work together: web and app design, e-commerce product pages, campaign analysis, Meta and TikTok ads, SEO, AEO and GEO, agentic AI automation and partnerships.`,
    `- [My stack](${SITE_URL}/stack/): the AI, development, design and marketing tools and the devices I work with.`,
    "",
    ...live.map(section),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
