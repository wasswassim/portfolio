import type { Metadata } from "next";
import { LANGS, type Lang } from "@/lib/i18n/config";
import { langStaticParams, toLang, type LangPageProps as Props } from "@/lib/i18n/params";
import { getDictionary } from "@/lib/i18n";
import { languageAlternates } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";

export const dynamicParams = false;

const CONTACT = "wassimgatri4@gmail.com";
const privacyPath = (lang: Lang) => `/${lang}/privacy/`;

type Section = { h: string; p: string[]; id?: string };
const COPY: Record<Lang, { title: string; description: string; updated: string; sections: Section[] }> = {
  en: {
    title: "Privacy",
    description: "How the Building a Life in Italy blog handles your data: the newsletter sent with Brevo, Ahrefs Analytics, how long data is kept and your rights.",
    updated: "Last updated: 14 October 2026",
    sections: [
      { h: "Who is responsible", p: [`Wassim Gatri runs this blog and is responsible for the data described here. Contact: ${CONTACT}.`] },
      { h: "Newsletter", p: [
        "If you subscribe, your email address and the language of the form are sent to Brevo (Sendinblue SAS, France), which stores them on servers in the European Union and sends the newsletter on my behalf.",
        "You first receive a confirmation email; you are only subscribed after you confirm (double opt-in). The legal basis is your consent. You can unsubscribe at any time with the link in every email, and your address is then no longer used for the newsletter.",
      ] },
      { h: "Reviews", id: "reviews", p: [
        "If you send a review with the form at the bottom of a post, your name, rating, review, your email address if you give one, and the page you were on are sent to me by email through EmailJS (emailjs.com), the service that also runs the contact form.",
        "I read every review before publishing it. Only your name as you wrote it, your rating, your review and the date go online; your email address is optional, never published, and used only if I need to reply to you. The legal basis is your consent. Write to me to have your review changed or removed at any time.",
      ] },
      { h: "Website statistics", p: [
        "The blog uses Ahrefs Analytics to count visits and see which pages are read. It does not use advertising cookies and is not used to identify you.",
      ] },
      { h: "Links to other sites", p: [
        "Articles link to official sources and to some services. A few links are referral links, marked as such: if you sign up through one, the provider may reward me. Those sites have their own privacy policies.",
      ] },
      { h: "Your rights", p: [
        `Under the GDPR you can ask to access, correct or delete your data, or withdraw your consent, by writing to ${CONTACT}. You can also complain to your data protection authority (in Italy, the Garante per la protezione dei dati personali).`,
      ] },
    ],
  },
  fr: {
    title: "Confidentialité",
    description: "Comment le blog Building a Life in Italy traite vos données : la newsletter envoyée avec Brevo, Ahrefs Analytics, la durée de conservation et vos droits.",
    updated: "Dernière mise à jour : 14 octobre 2026",
    sections: [
      { h: "Responsable", p: [`Wassim Gatri édite ce blog et est responsable des données décrites ici. Contact : ${CONTACT}.`] },
      { h: "Newsletter", p: [
        "Si vous vous abonnez, votre adresse e-mail et la langue du formulaire sont transmises à Brevo (Sendinblue SAS, France), qui les conserve sur des serveurs situés dans l'Union européenne et envoie la newsletter pour mon compte.",
        "Vous recevez d'abord un e-mail de confirmation ; vous n'êtes abonné qu'après avoir confirmé (double opt-in). La base légale est votre consentement. Vous pouvez vous désabonner à tout moment avec le lien présent dans chaque e-mail ; votre adresse n'est alors plus utilisée pour la newsletter.",
      ] },
      { h: "Avis", id: "reviews", p: [
        "Si vous envoyez un avis avec le formulaire en bas d’un article, votre nom, votre note, votre avis, votre adresse e-mail si vous la donnez et la page où vous étiez me sont envoyés par e-mail via EmailJS (emailjs.com), le service qui gère aussi le formulaire de contact.",
        "Je lis chaque avis avant de le publier. Seuls votre nom tel que vous l’avez écrit, votre note, votre avis et la date sont mis en ligne ; votre adresse e-mail est facultative, jamais publiée, et ne sert que si je dois vous répondre. La base légale est votre consentement. Écrivez-moi pour faire modifier ou supprimer votre avis à tout moment.",
      ] },
      { h: "Statistiques du site", p: [
        "Le blog utilise Ahrefs Analytics pour compter les visites et voir quelles pages sont lues. Aucun cookie publicitaire n'est utilisé et ces données ne servent pas à vous identifier.",
      ] },
      { h: "Liens vers d'autres sites", p: [
        "Les articles renvoient vers des sources officielles et vers certains services. Quelques liens sont des liens de parrainage, signalés comme tels : si vous vous inscrivez avec l'un d'eux, le prestataire peut me récompenser. Ces sites ont leur propre politique de confidentialité.",
      ] },
      { h: "Vos droits", p: [
        `Selon le RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou retirer votre consentement, en écrivant à ${CONTACT}. Vous pouvez aussi saisir l'autorité de protection des données de votre pays (en Italie, le Garante per la protezione dei dati personali).`,
      ] },
    ],
  },
  ar: {
    title: "الخصوصية",
    description: "كيف تتعامل مدونة بناء حياة في إيطاليا مع بياناتك: النشرة البريدية المرسلة عبر Brevo، وAhrefs Analytics، ومدة الحفظ، وحقوقك.",
    updated: "آخر تحديث: 14 أكتوبر 2026",
    sections: [
      { h: "المسؤول عن البيانات", p: [`يدير وسيم القاطري هذه المدونة وهو المسؤول عن البيانات المذكورة هنا. للتواصل: ${CONTACT}.`] },
      { h: "النشرة البريدية", p: [
        "إذا اشتركت، يُرسل عنوان بريدك الإلكتروني ولغة الاستمارة إلى Brevo (شركة Sendinblue SAS، فرنسا)، التي تحفظها على خوادم داخل الاتحاد الأوروبي وترسل النشرة نيابة عني.",
        "تصلك أولًا رسالة تأكيد، ولا يتم اشتراكك إلا بعد التأكيد (double opt-in). الأساس القانوني هو موافقتك. يمكنك إلغاء الاشتراك في أي وقت عبر الرابط الموجود في كل رسالة، وعندها لا يُستعمل عنوانك للنشرة.",
      ] },
      { h: "التقييمات", id: "reviews", p: [
        "إذا أرسلت تقييمًا عبر الاستمارة في أسفل المقال، يُرسل إليّ اسمك وتقييمك ورأيك وبريدك الإلكتروني إن أعطيته والصفحة التي كنت فيها بالبريد الإلكتروني عبر EmailJS (emailjs.com)، وهي الخدمة التي تشغّل أيضًا استمارة الاتصال.",
        "أقرأ كل تقييم قبل نشره. لا يُنشر إلا اسمك كما كتبته وتقييمك ورأيك والتاريخ؛ وبريدك الإلكتروني اختياري ولا يُنشر أبدًا، ويُستعمل فقط إذا احتجت إلى الرد عليك. الأساس القانوني هو موافقتك. راسلني لتعديل تقييمك أو حذفه في أي وقت.",
      ] },
      { h: "إحصائيات الموقع", p: [
        "تستعمل المدونة Ahrefs Analytics لعدّ الزيارات ومعرفة الصفحات المقروءة. لا تُستعمل ملفات تعريف ارتباط إعلانية ولا تُستعمل هذه البيانات للتعرف على هويتك.",
      ] },
      { h: "روابط نحو مواقع أخرى", p: [
        "تحيل المقالات إلى مصادر رسمية وإلى بعض الخدمات. بعض الروابط روابط إحالة مشار إليها بوضوح: إذا سجلت عبر أحدها، قد تمنحني الشركة مكافأة. لهذه المواقع سياسات خصوصية خاصة بها.",
      ] },
      { h: "حقوقك", p: [
        `حسب اللائحة الأوروبية لحماية البيانات (GDPR) يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، أو سحب موافقتك، بمراسلة ${CONTACT}. ويمكنك أيضًا تقديم شكوى إلى هيئة حماية البيانات في بلدك (في إيطاليا: Garante per la protezione dei dati personali).`,
      ] },
    ],
  },
};

export function generateStaticParams() {
  return langStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const c = COPY[lang];
  return buildMetadata({
    lang,
    path: privacyPath(lang),
    title: c.title + " | " + getDictionary(lang).blogName,
    description: c.description,
    languages: languageAlternates(privacyPath, privacyPath("en")),
  });
}

export default async function PrivacyPage({ params }: Props) {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  const c = COPY[lang];
  const switcherPaths = Object.fromEntries(LANGS.map((l) => [l, privacyPath(l)])) as Record<Lang, string>;
  return (
    <>
      <a href="#main" className="blog-skip">{dict.nav.skip}</a>
      <div className="blog-paper">
        <BlogHeader lang={lang} dict={dict} switcherPaths={switcherPaths} />
        <main id="main" className="blog-main">
          <article className="blog-article">
            <h1 className="blog-h1">{c.title}</h1>
            <p className="blog-meta"><span>{c.updated}</span></p>
            <div className="blog-prose">
              {c.sections.map((s) => (
                <section key={s.h} id={s.id}>
                  <h2 className="blog-h2">{s.h}</h2>
                  {s.p.map((p) => <p key={p}>{p}</p>)}
                </section>
              ))}
            </div>
          </article>
        </main>
        <BlogFooter lang={lang} dict={dict} />
      </div>
    </>
  );
}
