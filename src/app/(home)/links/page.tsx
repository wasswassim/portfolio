import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import LinksPage from "@/components/home/links-page";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/links/",
  title: "Wassim Gatri: All Links",
  description: "Everything of mine in one place: my website, my guides for Tunisians in Italy, my tools, Quran Edits and how to contact me.",
  languages: { en: "/links/", "x-default": "/links/" },
});

export default function Page() {
  return <LinksPage />;
}
