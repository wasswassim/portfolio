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
    description: "How the Building a Life in Italy blog handles your data: the Brevo newsletter, reader reviews, Google AdSense ads, Ahrefs Analytics and your rights.",
    updated: "Last updated: 14 October 2026",
    sections: [
      { h: "Who is responsible", p: [`Wassim Gatri runs this blog and is responsible for the data described here. Contact: ${CONTACT}.`] },
      { h: "Newsletter", p: [
        "If you subscribe, your email address and the language of the form are sent to Brevo (Sendinblue SAS, France), which stores them on servers in the European Union and sends the newsletter on my behalf.",
        "You first receive a confirmation email. You are only subscribed after you confirm (double opt-in). The legal basis is your consent. You can unsubscribe at any time with the link in every email, and your address is then no longer used for the newsletter.",
      ] },
      { h: "Reviews", id: "reviews", p: [
        "If you send a review with the form at the bottom of a post, your name, rating, review, the page you were on and your email address if you give one are stored in a database run by Supabase on servers in the European Union (Frankfurt). Your name, rating, review and the date are published on the blog at once. Your email address is never published and is used only if I need to reply to you. To limit spam, a scrambled (hashed) form of your IP address is stored with the review.",
        "A copy of each review is sent to me by email through EmailJS (emailjs.com), the service that also runs the contact form. The legal basis is your consent, given by sending the review. Write to me to have your review changed or removed at any time. I may also remove reviews that are spam, abusive or off-topic. Each review has a Report link: a report reaches me by email with the review, and I decide whether to remove it.",
      ] },
      { h: "Advertising", id: "advertising", p: [
        "Blog posts may show ads from Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. See how Google uses information from sites that use its services: https://policies.google.com/technologies/partner-sites",
        "You can opt out of personalised advertising in Google's Ads Settings (https://adssettings.google.com), and out of other vendors' personalised ads at https://www.aboutads.info/choices or https://www.youronlinechoices.eu. Visitors from the European Economic Area, the UK and Switzerland first see a consent message from Google (a certified consent platform) and can change their choice at any time with the privacy and cookie settings link it adds to the page. If you decline, ads may still appear but are not personalised.",
      ] },
      { h: "Google Analytics", id: "google-analytics", p: [
        "The site also uses Google Analytics 4 (Google Ireland Ltd) to understand which pages are read and which links are used, for example clicks on partner links, newsletter sign-ups and reviews sent. Google Analytics sets cookies and processes your IP address in shortened form. Data is kept for 14 months. Visitors from the European Economic Area, the UK and Switzerland are measured with cookies only after they accept in Google's consent message. Until then Google receives only cookieless signals. You can also block it with Google's browser add-on: https://tools.google.com/dlpage/gaoptout",
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
    description: "Comment le blog Building a Life in Italy traite vos données : newsletter Brevo, avis des lecteurs, annonces Google AdSense, Ahrefs Analytics et vos droits.",
    updated: "Dernière mise à jour : 14 octobre 2026",
    sections: [
      { h: "Responsable", p: [`Wassim Gatri édite ce blog et est responsable des données décrites ici. Contact : ${CONTACT}.`] },
      { h: "Newsletter", p: [
        "Si vous vous abonnez, votre adresse e-mail et la langue du formulaire sont transmises à Brevo (Sendinblue SAS, France), qui les conserve sur des serveurs situés dans l'Union européenne et envoie la newsletter pour mon compte.",
        "Vous recevez d'abord un e-mail de confirmation. Vous n'êtes abonné qu'après avoir confirmé (double opt-in). La base légale est votre consentement. Vous pouvez vous désabonner à tout moment avec le lien présent dans chaque e-mail. Votre adresse n'est alors plus utilisée pour la newsletter.",
      ] },
      { h: "Avis", id: "reviews", p: [
        "Si vous envoyez un avis avec le formulaire en bas d’un article, votre nom, votre note, votre avis, la page où vous étiez et votre adresse e-mail si vous la donnez sont enregistrés dans une base de données gérée par Supabase, sur des serveurs situés dans l’Union européenne (Francfort). Votre nom, votre note, votre avis et la date sont publiés sur le blog immédiatement. Votre adresse e-mail n’est jamais publiée et ne sert que si je dois vous répondre. Pour limiter le spam, une forme brouillée (hachée) de votre adresse IP est enregistrée avec l’avis.",
        "Une copie de chaque avis m’est envoyée par e-mail via EmailJS (emailjs.com), le service qui gère aussi le formulaire de contact. La base légale est votre consentement, donné en envoyant l’avis. Écrivez-moi pour faire modifier ou supprimer votre avis à tout moment. Je peux aussi supprimer les avis qui sont du spam, injurieux ou hors sujet. Chaque avis a un lien Signaler : le signalement me parvient par e-mail avec l’avis, et je décide de le supprimer ou non.",
      ] },
      { h: "Publicité", id: "advertising", p: [
        "Les articles du blog peuvent afficher des annonces Google AdSense. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site ou sur d’autres sites. Les cookies publicitaires de Google lui permettent, ainsi qu’à ses partenaires, de vous proposer des annonces en fonction de vos visites sur ce site et/ou sur d’autres sites Internet. Voir comment Google utilise les informations des sites qui utilisent ses services : https://policies.google.com/technologies/partner-sites",
        "Vous pouvez désactiver la publicité personnalisée dans les paramètres des annonces de Google (https://adssettings.google.com), et celle des autres fournisseurs sur https://www.aboutads.info/choices ou https://www.youronlinechoices.eu. Les visiteurs de l’Espace économique européen, du Royaume-Uni et de la Suisse voient d’abord un message de consentement de Google (une plateforme de consentement certifiée) et peuvent changer leur choix à tout moment avec le lien de paramètres de confidentialité et de cookies qu’il ajoute à la page. Si vous refusez, des annonces peuvent encore s’afficher, mais elles ne sont pas personnalisées.",
      ] },
      { h: "Google Analytics", id: "google-analytics", p: [
        "Le site utilise aussi Google Analytics 4 (Google Ireland Ltd) pour savoir quelles pages sont lues et quels liens sont utilisés, par exemple les clics sur les liens partenaires, les inscriptions à la newsletter et les avis envoyés. Google Analytics dépose des cookies et traite votre adresse IP sous forme raccourcie. Les données sont conservées 14 mois. Les visiteurs de l’Espace économique européen, du Royaume-Uni et de la Suisse ne sont mesurés avec des cookies qu’après avoir accepté dans le message de consentement de Google. Avant cela, Google ne reçoit que des signaux sans cookies. Vous pouvez aussi le bloquer avec le module de navigateur de Google : https://tools.google.com/dlpage/gaoptout",
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
    description: "كيف تتعامل مدونة بناء حياة في إيطاليا مع بياناتك: النشرة البريدية عبر Brevo، وتقييمات القرّاء، وإعلانات Google AdSense، وAhrefs Analytics، وحقوقك.",
    updated: "آخر تحديث: 14 أكتوبر 2026",
    sections: [
      { h: "المسؤول عن البيانات", p: [`يدير وسيم القاطري هذه المدونة وهو المسؤول عن البيانات المذكورة هنا. للتواصل: ${CONTACT}.`] },
      { h: "النشرة البريدية", p: [
        "إذا اشتركت، يُرسل عنوان بريدك الإلكتروني ولغة الاستمارة إلى Brevo (شركة Sendinblue SAS، فرنسا)، التي تحفظها على خوادم داخل الاتحاد الأوروبي وترسل النشرة نيابة عني.",
        "تصلك أولًا رسالة تأكيد، ولا يتم اشتراكك إلا بعد التأكيد (double opt-in). الأساس القانوني هو موافقتك. يمكنك إلغاء الاشتراك في أي وقت عبر الرابط الموجود في كل رسالة، وعندها لا يُستعمل عنوانك للنشرة.",
      ] },
      { h: "التقييمات", id: "reviews", p: [
        "إذا أرسلت تقييمًا عبر الاستمارة في أسفل المقال، يُحفظ اسمك وتقييمك ورأيك والصفحة التي كنت فيها وبريدك الإلكتروني إن أعطيته في قاعدة بيانات تديرها Supabase على خوادم داخل الاتحاد الأوروبي (فرانكفورت). يُنشر اسمك وتقييمك ورأيك والتاريخ في المدونة فورًا. ولا يُنشر بريدك الإلكتروني أبدًا، ويُستعمل فقط إذا احتجت إلى الرد عليك. وللحد من الرسائل المزعجة، تُحفظ مع التقييم صيغة مشفّرة (hash) من عنوان IP الخاص بك.",
        "تصلني نسخة من كل تقييم بالبريد الإلكتروني عبر EmailJS (emailjs.com)، وهي الخدمة التي تشغّل أيضًا استمارة الاتصال. الأساس القانوني هو موافقتك، التي تعطيها بإرسال التقييم. راسلني لتعديل تقييمك أو حذفه في أي وقت. ويمكنني أيضًا حذف التقييمات المزعجة أو المسيئة أو الخارجة عن الموضوع. لكل تقييم رابط إبلاغ: يصلني البلاغ بالبريد الإلكتروني مع التقييم، وأقرر حذفه أو إبقاءه.",
      ] },
      { h: "الإعلانات", id: "advertising", p: [
        "قد تعرض مقالات المدونة إعلانات Google AdSense. يستعمل مزوّدون من أطراف ثالثة، ومن بينهم Google، ملفات تعريف الارتباط (cookies) لعرض إعلانات حسب زياراتك السابقة لهذا الموقع أو لمواقع أخرى. وتتيح ملفات تعريف الارتباط الإعلانية لـ Google ولشركائها عرض إعلانات عليك حسب زيارتك لهذا الموقع و/أو لمواقع أخرى على الإنترنت. اطّلع على كيفية استعمال Google للمعلومات من المواقع التي تستعمل خدماتها: https://policies.google.com/technologies/partner-sites",
        "يمكنك إيقاف الإعلانات المخصّصة من إعدادات الإعلانات في Google (https://adssettings.google.com)، وإيقاف إعلانات المزوّدين الآخرين المخصّصة عبر https://www.aboutads.info/choices أو https://www.youronlinechoices.eu. يرى زوّار المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا أولًا رسالة موافقة من Google (منصّة موافقة معتمدة)، ويمكنهم تغيير اختيارهم في أي وقت عبر رابط إعدادات الخصوصية وملفات تعريف الارتباط الذي تضيفه إلى الصفحة. إذا رفضت، قد تظهر إعلانات لكنها لا تكون مخصّصة.",
      ] },
      { h: "Google Analytics", id: "google-analytics", p: [
        "يستعمل الموقع أيضًا Google Analytics 4 (شركة Google Ireland Ltd) لمعرفة الصفحات المقروءة والروابط المستعملة، مثل النقر على روابط الشركاء والاشتراك في النشرة البريدية وإرسال التقييمات. يضع Google Analytics ملفات تعريف الارتباط ويعالج عنوان IP الخاص بك في صيغة مختصرة، وتُحفظ البيانات 14 شهرًا. لا يُقاس زوّار المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا بملفات تعريف الارتباط إلا بعد موافقتهم في رسالة الموافقة من Google، وقبل ذلك لا تتلقى Google سوى إشارات دون ملفات تعريف الارتباط. ويمكنك أيضًا حظره بإضافة المتصفح من Google: https://tools.google.com/dlpage/gaoptout",
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
