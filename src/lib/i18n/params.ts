import { DEFAULT_LANG, LANGS, isLang, type Lang } from "./config";

/** generateStaticParams() value for every [lang] segment. */
export function langStaticParams(): { lang: Lang }[] {
  return LANGS.map((lang) => ({ lang }));
}

/** Route param to a supported language (falls back to the default; dynamicParams = false prevents other values). */
export const toLang = (raw: string): Lang => (isLang(raw) ? raw : DEFAULT_LANG);

/** Props shared by pages whose only param is the language. */
export type LangPageProps = { params: Promise<{ lang: string }> };
