import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, personLd } from "@/lib/seo/jsonld";
import HomePage from "@/components/home/home-page";

const TITLE = "Wassim Gatri | Full Stack Entrepreneur: Web, Marketing and Agentic AI";
const DESCRIPTION =
  "Wassim Gatri is a Tunisian full stack entrepreneur between Tunis and Rome: web and app design, Meta and TikTok campaigns, SEO, AEO and GEO, and agentic AI automation.";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/",
  title: TITLE,
  description: DESCRIPTION,
  languages: { en: "/", "x-default": "/" },
  image: { src: "/img/wassimage.webp", width: 832, height: 1280, alt: "Wassim Gatri" },
});

export default function Page() {
  return (
    <>
      <JsonLd data={personLd()} />
      <HomePage />
    </>
  );
}
