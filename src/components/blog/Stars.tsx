// Shared by the server review blocks and the client review carousel (no data imports here).

/** Five star tiles filled to `value` (0-5), coloured by the rounded rating; the parent carries the accessible label. */
export function Stars({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const row = (cls: string) => (
    <span className={cls}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  );
  return (
    <span className="blog-stars" data-tone={Math.max(1, Math.min(5, Math.round(value)))} aria-hidden="true">
      {row("blog-stars-base")}
      <span className="blog-stars-fill" style={{ inlineSize: pct + "%" }}>{row("blog-stars-row")}</span>
    </span>
  );
}
