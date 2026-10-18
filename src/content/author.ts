import type { Lang } from "@/lib/i18n/config";

// The author box at the end of every post and the author page (/{lang}/about/). First person, and only
// facts the owner has confirmed; keep them in sync with AUTHOR in lib/seo/site.ts and the homepage.
export const AUTHOR_EMAIL = "wassimgatri4@gmail.com";
/** 240px square crop of /img/wassimage.webp for the author box and page */
export const AUTHOR_AVATAR = "/img/wassim-avatar.webp";
export const AUTHOR_TIKTOK = "https://www.tiktok.com/@wassimgatri1";
export const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/wassim-gatri-683a12259/";

type Section = { h: string; p?: string[]; items?: string[] };

// Mirrors the "Who am I?" section of the homepage (components/home/sections/about.tsx). House style:
// no semicolons, the Arabic name is وسيم القاطري.
export const AUTHOR_COPY: Record<
  Lang,
  { role: string; short: string; more: string; portfolio: string; title: string; description: string; intro: string; sections: Section[]; contact: string }
> = {
  en: {
    role: "Tunisian full stack entrepreneur between Tunis and Rome",
    short:
      "I'm Wassim Gatri, a Tunisian full stack entrepreneur living between Tunis and Rome. I document my experience and the solutions I found in these guides, checked against official sources. I design and build websites and apps, plan and analyse marketing campaigns, and work with agentic engineering skills.",
    more: "About the author",
    portfolio: "My portfolio",
    title: "About the author",
    description:
      "Wassim Gatri, a Tunisian full stack entrepreneur between Tunis and Rome, writes the Building a Life in Italy guides. Who I am, what I work on and how every guide is checked.",
    intro:
      "I'm Wassim Gatri, a Tunisian full stack entrepreneur living between Tunis and Rome. I'm currently documenting my experience and the solutions I found in this blog, Building a Life in Italy: free guides, checked against official sources, for Tunisians who study, work and settle in Italy.",
    sections: [
      {
        h: "Who I am",
        items: [
          "Background in Business Information Systems",
          "Studying for a Master's in Digital Marketing at LUMSA University in Rome",
          "I design and build websites and apps, and plan and analyse marketing campaigns",
          "Agentic engineering skills: AI agents like Claude Code help me ship faster, while every decision stays mine",
          "I speak 4 languages: Arabic, French, English and Italian",
        ],
      },
      {
        h: "What I work on",
        items: [
          "Quran Edits, my current project: an AI studio for Quran recitation videos",
          "Web and app design, and e-commerce product pages built to convert",
          "Marketing campaign analysis, and Meta and TikTok campaigns",
          "SEO, AEO and GEO research and optimisation",
          "Agentic AI automation",
        ],
      },
      {
        h: "Why I write these guides",
        p: [
          "I made the move myself: an agency file with WSC Tunisia, the study visa, the residence permit and a bank account in Rome. The information was scattered, often out of date and rarely written for Tunisians. These guides put it in one place, in Arabic, French and English.",
        ],
      },
      {
        h: "How I write and check every guide",
        items: [
          "Every rule and fee links to its official source: the Italian Embassy in Tunis, universities, DiSCo, the Central Bank of Tunisia, Poste Italiane.",
          "Every post shows when it was updated and when its facts were last verified, and I re-check the fees every year.",
          "When something comes from my own experience rather than an official rule, I say so (\"in my experience\").",
          "Some posts contain partner links, always marked as such. The blog also shows Google ads. Neither changes what I recommend.",
          "Nobody pays me to write about an agency, a bank or a university.",
        ],
      },
    ],
    contact: "Spotted a mistake or a rule that changed? Write to me and I'll correct it.",
  },
  fr: {
    role: "Entrepreneur full stack tunisien entre Tunis et Rome",
    short:
      "Je suis Wassim Gatri, entrepreneur full stack tunisien, entre Tunis et Rome. Je documente dans ces guides mon expérience et les solutions que j'ai trouvées, vérifiées auprès des sources officielles. Je conçois et développe des sites et des applications, je planifie et j'analyse des campagnes marketing, et je travaille avec des compétences en ingénierie agentique.",
    more: "À propos de l'auteur",
    portfolio: "Mon portfolio",
    title: "À propos de l'auteur",
    description:
      "Wassim Gatri, entrepreneur full stack tunisien entre Tunis et Rome, écrit les guides Building a Life in Italy. Qui je suis, sur quoi je travaille et comment chaque guide est vérifié.",
    intro:
      "Je suis Wassim Gatri, entrepreneur full stack tunisien, entre Tunis et Rome. Je documente en ce moment mon expérience et les solutions que j'ai trouvées dans ce blog, Building a Life in Italy : des guides gratuits, vérifiés auprès des sources officielles, pour les Tunisiens qui étudient, travaillent et s'installent en Italie.",
    sections: [
      {
        h: "Qui je suis",
        items: [
          "Formation en informatique de gestion (Business Information Systems)",
          "En master de marketing digital à l'université LUMSA de Rome",
          "Je conçois et développe des sites et des applications, et je planifie et analyse des campagnes marketing",
          "Compétences en ingénierie agentique : des agents IA comme Claude Code m'aident à livrer plus vite, et chaque décision reste la mienne",
          "Je parle 4 langues : arabe, français, anglais et italien",
        ],
      },
      {
        h: "Sur quoi je travaille",
        items: [
          "Quran Edits, mon projet actuel : un studio IA pour les vidéos de récitation du Coran",
          "Design web et d'applications, et pages produit e-commerce pensées pour convertir",
          "Analyse de campagnes marketing, et campagnes Meta et TikTok",
          "Recherche et optimisation SEO, AEO et GEO",
          "Automatisation par l'IA agentique",
        ],
      },
      {
        h: "Pourquoi j'écris ces guides",
        p: [
          "J'ai fait le parcours moi-même : un dossier avec l'agence WSC Tunisia, le visa d'études, le permis de séjour et un compte bancaire à Rome. Les informations étaient dispersées, souvent périmées et rarement écrites pour les Tunisiens. Ces guides les réunissent en un seul endroit, en arabe, en français et en anglais.",
        ],
      },
      {
        h: "Comment j'écris et vérifie chaque guide",
        items: [
          "Chaque règle et chaque frais renvoie à sa source officielle : l'ambassade d'Italie à Tunis, les universités, DiSCo, la Banque centrale de Tunisie, Poste Italiane.",
          "Chaque article indique sa date de mise à jour et la date de dernière vérification, et je revérifie les frais chaque année.",
          "Quand une information vient de mon expérience et non d'une règle officielle, je le précise (« d'après mon expérience »).",
          "Certains articles contiennent des liens partenaires, toujours signalés. Le blog affiche aussi des annonces Google. Ni l'un ni l'autre ne change ce que je recommande.",
          "Personne ne me paie pour parler d'une agence, d'une banque ou d'une université.",
        ],
      },
    ],
    contact: "Vous avez repéré une erreur ou une règle qui a changé ? Écrivez-moi et je la corrigerai.",
  },
  ar: {
    role: "رائد أعمال تونسي Full Stack بين تونس وروما",
    short:
      "أنا وسيم القاطري، رائد أعمال تونسي Full Stack، أعيش بين تونس وروما. أوثّق في هذه الأدلة تجربتي والحلول التي وجدتها، بعد التحقق منها في المصادر الرسمية. أصمم وأطوّر المواقع والتطبيقات، وأخطط للحملات التسويقية وأحللها، وأعمل بمهارات في الهندسة الوكيلية (agentic engineering).",
    more: "عن الكاتب",
    portfolio: "ملفي المهني",
    title: "عن الكاتب",
    description:
      "وسيم القاطري، رائد أعمال تونسي Full Stack بين تونس وروما، يكتب أدلة «بناء حياة في إيطاليا». من أنا، وعلى ماذا أعمل، وكيف أتحقق من كل دليل.",
    intro:
      "أنا وسيم القاطري، رائد أعمال تونسي Full Stack، أعيش بين تونس وروما. أوثّق حاليًا تجربتي والحلول التي وجدتها في هذه المدونة، «بناء حياة في إيطاليا»: أدلة مجانية، مُتحقَّق منها في المصادر الرسمية، للتونسيين الذين يدرسون ويعملون ويستقرون في إيطاليا.",
    sections: [
      {
        h: "من أنا",
        items: [
          "تكويني الأساسي في نظم المعلومات التجارية (Business Information Systems)",
          "أدرس الماجستير في التسويق الرقمي بجامعة LUMSA في روما",
          "أصمم وأطوّر المواقع والتطبيقات، وأخطط للحملات التسويقية وأحللها",
          "مهارات في الهندسة الوكيلية: وكلاء الذكاء الاصطناعي مثل Claude Code يساعدونني على الإنجاز بسرعة، والقرار يبقى دائمًا لي",
          "أتكلم 4 لغات: العربية والفرنسية والإنجليزية والإيطالية",
        ],
      },
      {
        h: "على ماذا أعمل",
        items: [
          "Quran Edits، مشروعي الحالي: استوديو بالذكاء الاصطناعي لفيديوهات تلاوة القرآن",
          "تصميم المواقع والتطبيقات، وصفحات منتجات المتاجر الإلكترونية المصممة لرفع المبيعات",
          "تحليل الحملات التسويقية، وحملات Meta وTikTok",
          "البحث والتحسين في SEO وAEO وGEO",
          "الأتمتة بالذكاء الاصطناعي الوكيلي",
        ],
      },
      {
        h: "لماذا أكتب هذه الأدلة",
        p: [
          "قمت بهذا المسار بنفسي: ملف مع وكالة WSC Tunisia، وتأشيرة الدراسة، وبطاقة الإقامة، وحساب بنكي في روما. كانت المعلومات مشتتة، وكثيرًا ما كانت قديمة، ونادرًا ما كُتبت للتونسيين. هذه الأدلة تجمعها في مكان واحد، بالعربية والفرنسية والإنجليزية.",
        ],
      },
      {
        h: "كيف أكتب كل دليل وأتحقق منه",
        items: [
          "كل قاعدة وكل معلوم مرتبط بمصدره الرسمي: السفارة الإيطالية بتونس، والجامعات، وDiSCo، والبنك المركزي التونسي، وPoste Italiane.",
          "كل مقال يبيّن تاريخ تحديثه وتاريخ آخر تحقق من معلوماته، وأعيد التحقق من المعاليم كل سنة.",
          "عندما تأتي معلومة من تجربتي الشخصية وليس من قاعدة رسمية، أذكر ذلك («حسب تجربتي»).",
          "بعض المقالات تحتوي على روابط شركاء، وهي دائمًا مُعلَّمة. كما تعرض المدونة إعلانات Google. لا هذا ولا ذاك يغيّر ما أنصح به.",
          "لا أحد يدفع لي لأكتب عن وكالة أو بنك أو جامعة.",
        ],
      },
    ],
    contact: "لاحظت خطأ أو قاعدة تغيّرت؟ راسلني وسأصححها.",
  },
};
