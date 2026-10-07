// Ahrefs Web Analytics. The data-key is a public site identifier (it ships in the page HTML
// by design), not a secret. Rendered by every root layout (homepage, blog, 404) so all pages
// are tracked. A literal async <script> (not next/script) keeps the tag in the static HTML,
// where Ahrefs' "Verify installation" looks for it. Production only: local `next dev`
// visits would otherwise count as traffic.
const AHREFS_KEY = "17SL7XCRWm3FoxFxlG8Xqw";

export default function AhrefsAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return <script src="https://analytics.ahrefs.com/analytics.js" data-key={AHREFS_KEY} async />;
}
