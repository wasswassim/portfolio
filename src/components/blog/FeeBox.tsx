import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { BCT_RATE, FEES, eurToTnd, sumFees, type Fee, type FeeId } from "@/content/fees";
import { resolveArticleLink } from "@/content/articles";
import Inline from "./Inline";
import BidiText from "./BidiText";

/** Article id of the payment guide every fee box can point to. */
const PAYMENT_HUB = "article:international-card-tunisia";

function money(lang: Lang, amount: number, currency: Fee["currency"]): string {
  if (currency === "%") return new Intl.NumberFormat(LOCALE[lang], { maximumFractionDigits: 2 }).format(amount) + " %";
  const n = new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: Number.isInteger(amount) ? 0 : 2, maximumFractionDigits: 2 }).format(amount);
  return `${n} ${currency}`;
}

/**
 * Fee box: amounts, sources and check dates read from src/content/fees.ts, so a fee changes
 * in one place for every article. Plain table, no JS.
 */
export default function FeeBox({
  feeIds,
  title,
  text,
  total,
  tnd,
  hub,
  lang,
  dict,
}: {
  feeIds: FeeId[];
  title?: string;
  text?: string;
  total?: boolean;
  tnd?: boolean;
  hub?: boolean;
  lang: Lang;
  dict: Dictionary;
}) {
  const fees = feeIds.map((id) => FEES[id] as Fee);
  const date = new Intl.DateTimeFormat(LOCALE[lang], { dateStyle: "medium", timeZone: "UTC" });
  const fmtDate = (iso: string) => date.format(new Date(iso));
  const sameCurrency = fees.every((f) => f.currency === fees[0]?.currency && f.currency !== "%");
  const hubHref = hub ? resolveArticleLink(lang, PAYMENT_HUB) : null;
  const tndFor = (f: Fee, amount: number) => (tnd && f.currency === "EUR" ? dict.fees.aboutTnd(eurToTnd(amount)) : null);

  return (
    <aside className="blog-fees" aria-label={title ?? dict.fees.title}>
      <p className="blog-fees-title">{title ? <Inline lang={lang} text={title} /> : dict.fees.title}</p>
      {text && <p className="blog-fees-text"><Inline lang={lang} text={text} /></p>}
      <table>
        <tbody>
          {fees.map((f, i) => (
            <tr key={feeIds[i]}>
              <th scope="row">
                <BidiText lang={lang}>{f.label[lang]}</BidiText>
                {f.note && <small><BidiText lang={lang}>{f.note[lang]}</BidiText></small>}
                <small>
                  <a href={f.sourceUrl} rel="noopener noreferrer" target="_blank">{dict.fees.source}</a>
                  {", " + dict.fees.checked(fmtDate(f.lastVerified))}
                </small>
              </th>
              <td>
                <bdi dir="ltr" className="blog-ltr">
                  {f.amountMax ? `${money(lang, f.amount, f.currency)} – ${money(lang, f.amountMax, f.currency)}` : money(lang, f.amount, f.currency)}
                </bdi>
                {f.per && f.per !== "once" && <span className="blog-fees-per"> {dict.fees.per[f.per]}</span>}
                {tndFor(f, f.amount) && <small>{tndFor(f, f.amount)}</small>}
              </td>
            </tr>
          ))}
          {total && sameCurrency && fees.length > 1 && (
            <tr className="blog-fees-total">
              <th scope="row">{dict.fees.total}</th>
              <td>
                <bdi dir="ltr" className="blog-ltr">{money(lang, sumFees(feeIds), fees[0].currency)}</bdi>
                {tndFor(fees[0], sumFees(feeIds)) && <small>{tndFor(fees[0], sumFees(feeIds))}</small>}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="blog-fees-foot">
        {dict.fees.estimate}
        {tnd && " " + dict.fees.rate(BCT_RATE.eurTnd.toString(), fmtDate(BCT_RATE.date))}
        {hubHref && (
          <>
            {" "}
            <a href={hubHref}>{dict.fees.hub}</a>
          </>
        )}
      </p>
    </aside>
  );
}
