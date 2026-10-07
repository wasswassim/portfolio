import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n/config";
import { articlePath, blogPath, homePath, languageAlternates, preferredPath } from "@/lib/i18n/routes";
import { ARTICLES, langsWithArticles } from "@/content/articles";
import { absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => absoluteUrl(path);
  const absAll = (map: Record<string, string>) =>
    Object.fromEntries(Object.entries(map).map(([k, v]) => [k, abs(v)]));

  const latestUpdate = ARTICLES.map((a) => a.updatedAt).sort().at(-1);

  const entries: MetadataRoute.Sitemap = [{ url: abs(homePath()) }];

  const live = langsWithArticles();
  const landingFor = (l: (typeof LANGS)[number]) => (live.includes(l) ? blogPath(l) : null);
  const landingAlternates = absAll(languageAlternates(landingFor, preferredPath(landingFor, blogPath("en"))));
  for (const lang of live) {
    entries.push({
      url: abs(blogPath(lang)),
      lastModified: latestUpdate,
      alternates: { languages: landingAlternates },
    });
  }

  for (const article of ARTICLES) {
    const pathFor = (l: (typeof LANGS)[number]) => {
      const t = article.translations[l];
      return t ? articlePath(l, t.slug) : null;
    };
    const xDefault = preferredPath(pathFor, blogPath("en"));
    const languages = absAll(languageAlternates(pathFor, xDefault));
    for (const lang of LANGS) {
      const t = article.translations[lang];
      if (!t) continue;
      entries.push({
        url: abs(articlePath(lang, t.slug)),
        lastModified: article.updatedAt,
        alternates: { languages },
      });
    }
  }
  return entries;
}
