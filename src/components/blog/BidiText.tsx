import type { Lang } from "@/lib/i18n/config";
import Ltr from "./Ltr";

// A Latin run starts and ends on a letter/digit, so surrounding Arabic punctuation
// stays outside the isolate. Digit-only runs are left to the bidi algorithm.
const LATIN_RUN = /([\p{Script=Latin}0-9](?:[\p{Script=Latin}0-9 .,&'’+\-/#:]*[\p{Script=Latin}0-9])?)/gu;

/** In Arabic, wraps each Latin term in an LTR isolate; other languages pass through. */
export default function BidiText({ lang, children }: { lang: Lang; children: string }) {
  if (lang !== "ar") return <>{children}</>;
  const parts = children.split(LATIN_RUN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 && /\p{Script=Latin}/u.test(part) ? <Ltr key={i}>{part}</Ltr> : part,
      )}
    </>
  );
}
