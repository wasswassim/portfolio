import type { Metadata } from "next";
import { blogPath } from "@/lib/i18n/routes";

// /blog/ has no content of its own (the blog lives under /{lang}/blog/), but people and AI chatbots
// still type it. Static export can't redirect server-side, so this page forwards to the blog in the
// browser's language (French, Arabic, else English); without JavaScript the meta refresh goes to English.
export const metadata: Metadata = {
  title: "Blog",
  robots: { index: false, follow: true },
  alternates: { canonical: blogPath("en") },
};

const PICK_LANG = `var l=(navigator.languages&&navigator.languages[0]||navigator.language||"").slice(0,2).toLowerCase();location.replace(l==="fr"?${JSON.stringify(blogPath("fr"))}:l==="ar"?${JSON.stringify(blogPath("ar"))}:${JSON.stringify(blogPath("en"))});`;

export default function BlogRedirectPage() {
  return (
    <main style={{ display: "grid", placeContent: "center", minHeight: "100vh" }}>
      <script dangerouslySetInnerHTML={{ __html: PICK_LANG }} />
      {/* http-equiv, not name: metadata.other would render name="refresh", which browsers ignore */}
      <meta httpEquiv="refresh" content={`0; url=${blogPath("en")}`} />
      <p>
        <a href={blogPath("en")}>Blog</a> · <a href={blogPath("fr")}>Blog (FR)</a> · <a href={blogPath("ar")}>المدونة</a>
      </p>
    </main>
  );
}
