import type { Lang } from "@/lib/i18n/config";

// The author box at the end of every post and the author page (/{lang}/about/). First person, and only
// facts the owner has confirmed; keep them in sync with AUTHOR in lib/seo/site.ts and the homepage.
export const AUTHOR_EMAIL = "wassimgatri4@gmail.com";
/** 240px square crop of /img/wassimage.webp for the author box and page */
export const AUTHOR_AVATAR = "/img/wassim-avatar.webp";
export const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/wassim-gatri-683a12259/";

type Section = { h: string; p?: string[]; items?: string[] };

export const AUTHOR_COPY: Record<
  Lang,
  { role: string; short: string; more: string; title: string; description: string; intro: string; sections: Section[]; contact: string }
> = {
  en: {
    role: "Tunisian web designer and digital marketer in Rome",
    short:
      "I'm a Tunisian web designer and digital marketer, studying for a Master's in Digital Marketing at LUMSA University in Rome. I went through the steps these guides describe myself, and I check every rule and fee against official sources.",
    more: "About the author",
    title: "About the author",
    description:
      "Wassim Gatri, a Tunisian Master's student at LUMSA in Rome, writes the Building a Life in Italy guides. Who he is and how every guide is checked.",
    intro:
      "I'm Wassim Gatri, a Tunisian web designer and digital marketer living between Tunis and Rome. I write the Building a Life in Italy guides for Tunisians who study, work and settle in Italy.",
    sections: [
      {
        h: "Who I am",
        items: [
          "Tunisian, studying for a Master's in Digital Marketing at LUMSA University in Rome",
          "Background in Business Information Systems, with agentic engineering skills",
          "Web designer and digital marketer",
          "I speak 4 languages: Arabic, French, English and Italian",
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
    role: "Web designer et marketeur digital tunisien à Rome",
    short:
      "Je suis web designer et marketeur digital tunisien, en master de marketing digital à l'université LUMSA de Rome. J'ai suivi moi-même les étapes décrites dans ces guides, et je vérifie chaque règle et chaque frais auprès des sources officielles.",
    more: "À propos de l'auteur",
    title: "À propos de l'auteur",
    description:
      "Wassim Gatri, étudiant tunisien en master à la LUMSA de Rome, écrit les guides Building a Life in Italy. Qui il est et comment chaque guide est vérifié.",
    intro:
      "Je suis Wassim Gatri, web designer et marketeur digital tunisien, entre Tunis et Rome. J'écris les guides Building a Life in Italy pour les Tunisiens qui étudient, travaillent et s'installent en Italie.",
    sections: [
      {
        h: "Qui je suis",
        items: [
          "Tunisien, en master de marketing digital à l'université LUMSA de Rome",
          "Formation en informatique de gestion (Business Information Systems), avec des compétences en ingénierie agentique (agentic engineering)",
          "Web designer et marketeur digital",
          "Je parle 4 langues : arabe, français, anglais et italien",
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
    role: "مصمم مواقع ومسوّق رقمي تونسي في روما",
    short:
      "أنا مصمم مواقع ومسوّق رقمي تونسي، أدرس الماجستير في التسويق الرقمي بجامعة LUMSA في روما. مررت بنفسي بالخطوات التي تشرحها هذه الأدلة، وأتحقق من كل قاعدة وكل معلوم في المصادر الرسمية.",
    more: "عن الكاتب",
    title: "عن الكاتب",
    description:
      "وسيم القاطري، طالب ماجستير تونسي في LUMSA بروما، يكتب أدلة «بناء حياة في إيطاليا». من هو وكيف يُتحقق من كل دليل.",
    intro:
      "أنا وسيم القاطري، مصمم مواقع ومسوّق رقمي تونسي، أعيش بين تونس وروما. أكتب أدلة «بناء حياة في إيطاليا» للتونسيين الذين يدرسون ويعملون ويستقرون في إيطاليا.",
    sections: [
      {
        h: "من أنا",
        items: [
          "تونسي، أدرس الماجستير في التسويق الرقمي بجامعة LUMSA في روما",
          "تكويني الأساسي في نظم المعلومات التجارية (Business Information Systems)، مع مهارات في الهندسة الوكيلية (agentic engineering)",
          "مصمم مواقع ومسوّق رقمي",
          "أتكلم 4 لغات: العربية والفرنسية والإنجليزية والإيطالية",
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
