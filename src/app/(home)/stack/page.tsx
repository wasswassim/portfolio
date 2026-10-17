import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import StackPage from "@/components/home/stack-page";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/stack/",
  title: "My Stack: the Tools I Use | Wassim Gatri",
  description:
    "The AI models, development, design and marketing tools and the hardware Wassim Gatri works with, grouped by category, each with a short note.",
  languages: { en: "/stack/", "x-default": "/stack/" },
});

export default function Page() {
  return <StackPage />;
}
