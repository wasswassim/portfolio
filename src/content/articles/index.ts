import { LANGS, type Lang } from "@/lib/i18n/config";
import type { Article, ArticleTranslation } from "./types";

// SAMPLE ENTRY: demonstrates every body block and exercises routing, hreflang and the
// language switcher. Its text is placeholder copy, not factual guidance. Replace it
// with real, verified articles before publishing.
export const ARTICLES: readonly Article[] = [
  {
    id: "welcome",
    category: "daily-life",
    publishedAt: "2026-10-07",
    updatedAt: "2026-10-07",
    lastVerified: null,
    translations: {
      en: {
        slug: "welcome-to-the-blog",
        title: "Welcome to Building a Life in Italy",
        seoTitle: "Building a Life in Italy: Welcome",
        metaDescription:
          "Practical guides and honest notes on moving to, studying in and working from Italy.",
        summary:
          "Sample article showing every content block this blog supports. Replace it with a real, verified guide before publishing.",
        body: [{ type: "p", text: "Your article starts here. The guide card explains each content block and where it appears; replace this paragraph with the real post." }],
        guide: [
          { type: "h2", id: "how-guides-are-written", text: "How guides on this blog are written" },
          {
            type: "p",
            text: "Each guide starts with a short answer, then walks through the steps in order. Anything that depends on a law, a fee or an office is **checked against an official source** and dated.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Check the date",
            text: "Look for the *Last verified* date under the title. If it is missing, the facts have not been checked yet.",
          },
          { type: "h2", id: "typical-guide", text: "What a typical guide contains" },
          {
            type: "keyFacts",
            items: [
              { label: "Languages", value: "English, French and Arabic" },
              { label: "Sources", value: "Official websites, linked at the end" },
              { label: "Updates", value: "Revised when the rules change" },
            ],
          },
          { type: "h3", id: "steps", text: "The usual structure" },
          {
            type: "steps",
            items: [
              { title: "The short answer", text: "What you need to know in two sentences." },
              { title: "The steps", text: "What to do, in order, with the documents involved." },
              { title: "The pitfalls", text: "Where people usually lose time or money." },
            ],
          },
          {
            type: "ul",
            items: ["Plain language, no jargon", "Dates and sources on every claim", "Honest about what I don't know"],
          },
          {
            type: "callout",
            tone: "warning",
            text: "Guides are general information, not legal advice. Confirm details with the official office before you act.",
          },
          { type: "h2", id: "questions", text: "Questions" },
          {
            type: "faq",
            items: [
              { q: "What is this blog about?", a: "Practical notes on moving to, studying in and working from Italy." },
              { q: "Which languages are available?", a: "English, French and Arabic, with links between the versions." },
            ],
          },
          {
            type: "sources",
            items: [{ label: "Official source (example link)", url: "https://www.example.com" }],
          },
        ],
      },
      fr: {
        slug: "bienvenue-sur-le-blog",
        title: "Bienvenue sur Building a Life in Italy",
        seoTitle: "Building a Life in Italy : Bienvenue",
        metaDescription:
          "Guides pratiques et notes sincères pour s'installer, étudier et travailler en Italie.",
        summary:
          "Article d'exemple qui présente tous les blocs de contenu du blog. À remplacer par un vrai guide vérifié avant publication.",
        body: [{ type: "p", text: "Votre article commence ici. La carte guide explique chaque bloc de contenu et où il apparaît ; remplacez ce paragraphe par le vrai article." }],
        guide: [
          { type: "h2", id: "how-guides-are-written", text: "Comment sont écrits les guides" },
          {
            type: "p",
            text: "Chaque guide commence par une réponse courte, puis détaille les étapes dans l'ordre. Tout ce qui dépend d'une loi, d'un tarif ou d'un bureau est **vérifié auprès d'une source officielle** et daté.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Vérifiez la date",
            text: "Cherchez la date de *dernière vérification* sous le titre. Si elle est absente, les informations n'ont pas encore été vérifiées.",
          },
          { type: "h2", id: "typical-guide", text: "Ce que contient un guide type" },
          {
            type: "keyFacts",
            items: [
              { label: "Langues", value: "Anglais, français et arabe" },
              { label: "Sources", value: "Sites officiels, liés en fin d'article" },
              { label: "Mises à jour", value: "Révisé quand les règles changent" },
            ],
          },
          { type: "h3", id: "steps", text: "La structure habituelle" },
          {
            type: "steps",
            items: [
              { title: "La réponse courte", text: "Ce qu'il faut savoir en deux phrases." },
              { title: "Les étapes", text: "Quoi faire, dans l'ordre, avec les documents concernés." },
              { title: "Les pièges", text: "Là où l'on perd souvent du temps ou de l'argent." },
            ],
          },
          {
            type: "ul",
            items: ["Un langage simple, sans jargon", "Dates et sources pour chaque affirmation", "Honnête sur ce que je ne sais pas"],
          },
          {
            type: "callout",
            tone: "warning",
            text: "Les guides sont des informations générales, pas des conseils juridiques. Confirmez les détails auprès du bureau officiel avant d'agir.",
          },
          { type: "h2", id: "questions", text: "Questions" },
          {
            type: "faq",
            items: [
              { q: "De quoi parle ce blog ?", a: "De notes pratiques pour s'installer, étudier et travailler en Italie." },
              { q: "Quelles langues sont disponibles ?", a: "Anglais, français et arabe, avec des liens entre les versions." },
            ],
          },
          {
            type: "sources",
            items: [{ label: "Source officielle (lien d'exemple)", url: "https://www.example.com" }],
          },
        ],
      },
      ar: {
        slug: "مرحبا-بكم-في-المدونة",
        title: "مرحبًا بكم في Building a Life in Italy",
        seoTitle: "Building a Life in Italy: مرحبًا",
        metaDescription:
          "أدلة عملية وملاحظات صادقة حول الانتقال إلى إيطاليا والدراسة والعمل فيها.",
        summary:
          "مقال تجريبي يعرض كل أنواع المحتوى التي تدعمها المدونة. استبدله بدليل حقيقي تم التحقق منه قبل النشر.",
        body: [{ type: "p", text: "يبدأ مقالك هنا. تشرح بطاقة الدليل كل نوع من أنواع المحتوى وأين يظهر؛ استبدل هذه الفقرة بالمقال الحقيقي." }],
        guide: [
          { type: "h2", id: "how-guides-are-written", text: "كيف تُكتب الأدلة في هذه المدونة" },
          {
            type: "p",
            text: "يبدأ كل دليل بإجابة قصيرة، ثم يشرح الخطوات بالترتيب. وكل ما يتعلق بقانون أو رسوم أو مكتب **يتم التحقق منه من مصدر رسمي** مع ذكر التاريخ.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "تحقق من التاريخ",
            text: "ابحث عن تاريخ *آخر تحقق* تحت العنوان. إذا لم يظهر فهذا يعني أن المعلومات لم تُراجع بعد.",
          },
          { type: "h2", id: "typical-guide", text: "ما الذي يتضمنه الدليل المعتاد" },
          {
            type: "keyFacts",
            items: [
              { label: "اللغات", value: "الإنجليزية والفرنسية والعربية" },
              { label: "المصادر", value: "مواقع رسمية، مرتبطة في نهاية المقال" },
              { label: "التحديث", value: "يُراجع عند تغيّر القواعد" },
            ],
          },
          { type: "h3", id: "steps", text: "البنية المعتادة" },
          {
            type: "steps",
            items: [
              { title: "الإجابة القصيرة", text: "ما تحتاج إلى معرفته في جملتين." },
              { title: "الخطوات", text: "ماذا تفعل بالترتيب، مع الوثائق المطلوبة." },
              { title: "الأخطاء الشائعة", text: "حيث يضيع الناس الوقت أو المال عادةً." },
            ],
          },
          {
            type: "ul",
            items: ["لغة بسيطة بلا مصطلحات معقدة", "تاريخ ومصدر لكل معلومة", "صراحة بشأن ما لا أعرفه"],
          },
          {
            type: "callout",
            tone: "warning",
            text: "الأدلة معلومات عامة وليست استشارة قانونية. تأكد من التفاصيل لدى المكتب الرسمي قبل أي إجراء.",
          },
          { type: "h2", id: "questions", text: "أسئلة" },
          {
            type: "faq",
            items: [
              { q: "عن ماذا تتحدث هذه المدونة؟", a: "ملاحظات عملية حول الانتقال إلى إيطاليا والدراسة والعمل فيها." },
              { q: "ما اللغات المتاحة؟", a: "الإنجليزية والفرنسية والعربية، مع روابط بين النسخ." },
            ],
          },
          {
            type: "sources",
            items: [{ label: "مصدر رسمي (رابط تجريبي)", url: "https://www.example.com" }],
          },
        ],
      },
    },
  },
];

// Fail the build on content mistakes: duplicate heading ids would break the table of
// contents and in-page links.
for (const article of ARTICLES) {
  for (const lang of LANGS) {
    const t = article.translations[lang];
    if (!t) continue;
    const ids = [...t.body, ...(t.guide ?? [])].flatMap((b) => (b.type === "h2" || b.type === "h3" ? [b.id] : []));
    const dupe = ids.find((id, i) => ids.indexOf(id) !== i);
    if (dupe) throw new Error(`Article "${article.id}" (${lang}): duplicate heading id "${dupe}"`);
  }
}

export function articleById(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}

export function translationFor(article: Article, lang: Lang): ArticleTranslation | undefined {
  return article.translations[lang];
}

export function articleBySlug(
  lang: Lang,
  slug: string,
): { article: Article; translation: ArticleTranslation } | undefined {
  for (const article of ARTICLES) {
    const translation = article.translations[lang];
    if (translation && translation.slug === slug) return { article, translation };
  }
  return undefined;
}

/** (lang, slug) pairs for generateStaticParams; only languages that exist for the article. */
export function allArticleParams(): { lang: Lang; slug: string }[] {
  const out: { lang: Lang; slug: string }[] = [];
  for (const article of ARTICLES) {
    for (const lang of LANGS) {
      const t = article.translations[lang];
      if (t) out.push({ lang, slug: t.slug });
    }
  }
  return out;
}

export function articlesForLang(lang: Lang): { article: Article; translation: ArticleTranslation }[] {
  return ARTICLES.flatMap((article) => {
    const translation = article.translations[lang];
    return translation ? [{ article, translation }] : [];
  }).sort((a, b) => b.article.publishedAt.localeCompare(a.article.publishedAt));
}
