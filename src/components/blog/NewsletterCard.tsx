import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { NEWSLETTER_ACTION } from "@/lib/newsletter";

/**
 * Newsletter sign-up as a plain HTML form posting to Brevo: no script, no cookie on this site.
 * Brevo sends a confirmation email first (double opt-in). The honeypot field must stay empty;
 * bots fill it and Brevo drops the submission. `idPrefix` keeps ids unique when the card is
 * rendered twice (side column on desktop, end of the article on phones).
 */
export default function NewsletterCard({ lang, dict, idPrefix, className = "" }: { lang: Lang; dict: Dictionary; idPrefix: string; className?: string }) {
  const action = NEWSLETTER_ACTION[lang];
  if (!action) return null;
  const t = dict.newsletter;
  return (
    <section className={`blog-newsletter ${className}`.trim()} aria-labelledby={idPrefix + "-title"}>
      <h2 id={idPrefix + "-title"} className="blog-newsletter-title">{t.title}</h2>
      <p className="blog-newsletter-text">{t.text}</p>
      <form method="post" action={action} className="blog-newsletter-form">
        <label htmlFor={idPrefix + "-email"}>{t.email}</label>
        <input id={idPrefix + "-email"} type="email" name="EMAIL" required autoComplete="email" inputMode="email" dir="ltr" />
        <div className="blog-newsletter-hp" aria-hidden="true">
          <input type="text" name="email_address_check" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <input type="hidden" name="locale" value={lang} />
        <input type="hidden" name="html_type" value="simple" />
        <label className="blog-newsletter-consent">
          <input type="checkbox" name="OPT_IN" value="1" required />
          <span>{t.consent}</span>
        </label>
        <button type="submit">{t.submit}</button>
      </form>
      <p className="blog-newsletter-privacy">
        {t.privacy} <a href={`/${lang}/privacy/`}>{t.privacyLink}</a>
      </p>
    </section>
  );
}
