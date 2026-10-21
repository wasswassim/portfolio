import type { ArticleTranslation } from "../../types";

// French version of en.ts (same heading ids, six figures, one table). Italian and French document names stay as on the documents.
export const fr: ArticleTranslation = {
  slug: "documents-isee-parificato-bourse-italie",
  title: "Quels sont les documents pour l'ISEE parificato (déclaration fiscale étrangère) pour compléter sa demande de bourse en Italie ?",
  subtitle: "Chaque document familial tunisien demandé par le CAF, ce qu'il prouve et où l'obtenir",
  seoTitle: "Documents pour l'ISEE parificato : étudiants tunisiens",
  metaDescription:
    "Les documents de l'ISEE parificato au CAF un par un : vie collective, extrait de naissance, impôts, non-propriété, bail, inscription. Où obtenir chacun.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["documents ISEE parificato", "documents ISEEUP CAF", "documents bourse Italie étudiants tunisiens", "certificat de non-propriété ISEE", "documents CAF DiSCo"],
  summary:
    "Pour l'ISEE parificato (ISEEUP) dans un CAF partenaire de DiSCo, un étudiant tunisien apporte un certificat de vie collective, un extrait de naissance, la déclaration d'impôt de chaque membre de la famille, un certificat de non-propriété de biens immatriculés pour chaque membre, le bail du logement familial si la famille est locataire, et le certificat d'inscription de l'université italienne. Chaque document tunisien doit être officiel, traduit en italien et apostillé, car l'autocertification n'est pas acceptée.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement",
      text: "Ce guide est purement informatif. Il liste les documents que nous avons apportés au CAF pour notre propre ISEE parificato et ce que demande l'appel DiSCo Lazio. Les exigences peuvent changer chaque année et votre situation familiale peut demander d'autres documents : vérifiez toujours l'appel en cours et demandez à votre CAF avant le rendez-vous.",
    },
    { type: "p", text: "**Vous avez demandé la bourse DiSCo et le CAF vous demande maintenant les documents de votre famille. Lesquels exactement, et où les obtenir en Tunisie ?**" },
    {
      type: "p",
      text: "La réponse courte : six documents, cinq de Tunisie et un de votre université italienne. Ensemble, ils montrent au CAF qui compose votre famille, ce que chaque membre a gagné, ce qu'il possède et quel loyer il paie. Le CAF en tire votre **ISEE parificato** (l'ISEEUP), la version étrangère de la déclaration ISEE qui vous classe pour la bourse.",
    },
    {
      type: "p",
      text: "Cette page explique chaque document avec une photo de son titre, pour que vous puissiez le reconnaître. Pour la bourse elle-même (montants, conditions et dates), voir [la bourse DiSCo Lazio pour les étudiants tunisiens](article:lazio-disco-scholarship).",
    },

    { type: "h2", id: "documents-list", text: "1. Quels documents le CAF demande-t-il pour l'ISEE parificato ?" },
    {
      type: "p",
      text: "L'appel DiSCo Lazio demande des documents officiels sur la composition de votre famille, les revenus de chaque membre, leurs biens immobiliers et leur patrimoine au 31 décembre, et le loyer payé pour le logement familial. Voici les documents que nous avons apportés, et ce que chacun prouve :",
    },
    {
      type: "table",
      caption: "Les documents de l'ISEE parificato, ce que chacun prouve et où l'obtenir.",
      head: ["Document", "Ce qu'il prouve", "Où l'obtenir"],
      rows: [
        ["Certificat de vie collective", "Qui compose votre foyer", "Bureau d'état civil de la municipalité (Tunisie)"],
        ["Extrait de naissance", "Votre identité et vos parents", "Bureau d'état civil de la municipalité (Tunisie)"],
        ["Déclaration d'impôt sur le revenu", "Le revenu de chaque membre pour l'année demandée", "Recette des finances (Tunisie)"],
        ["Certificat de non-propriété", "Qu'un membre ne possède aucun bien immobilier immatriculé", "Office National de la Propriété Foncière (Tunisie)"],
        ["Bail du logement familial", "Le loyer payé par votre famille", "Le propriétaire du logement familial (Tunisie)"],
        ["Certificato di iscrizione", "Que vous êtes inscrit à l'université", "Votre université italienne"],
      ],
    },
    {
      type: "p",
      text: "Certains documents existent une fois par membre de la famille. Dans notre dossier, la déclaration d'impôt et le certificat de non-propriété étaient là **une fois pour chaque membre**, avec le même titre sur chaque exemplaire. C'est normal : le CAF a besoin de la situation de chaque membre, pas seulement d'un parent.",
    },

    { type: "h2", id: "family-status-certificate", text: "2. Certificat de vie collective : qui compose votre famille ?" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-status-certificate.webp",
      width: 1600,
      height: 153,
      alt: "Titre d'une traduction italienne : Certificato di vita collettivo",
      caption: "La traduction italienne du certificat de vie collective. Seul le titre est visible.",
    },
    {
      type: "p",
      text: "Le *certificat de vie collective* (en italien *certificato di vita collettivo*) liste les personnes qui vivent ensemble comme une seule famille : en général vos parents et leurs enfants. Le CAF l'utilise comme **composition de la famille** demandée par l'appel, avec le nom, le prénom et la date de naissance de chaque membre.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** au bureau d'état civil de votre municipalité en Tunisie. Demandez la version française, plus facile à traduire en italien.",
    },

    { type: "h2", id: "birth-certificate", text: "3. Extrait de naissance : prouver qui vous êtes" },
    {
      type: "figure",
      src: "/blog/caf-documents/birth-certificate.webp",
      width: 1600,
      height: 214,
      alt: "Titre d'une traduction italienne : Estratto dai registri dello stato civile, Nascite, versione francese",
      caption: "La traduction italienne de l'extrait de naissance. Seul le titre est visible.",
    },
    {
      type: "p",
      text: "L'*extrait de naissance* (en italien *estratto dai registri dello stato civile, nascite*) prouve votre identité et indique vos parents. Avec le certificat de vie collective, il vous rattache à la famille dont le CAF compte les revenus et le patrimoine.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** dans un bureau d'état civil municipal en Tunisie. Là aussi, demandez la version française.",
    },

    { type: "h2", id: "income-tax-return", text: "4. Déclaration d'impôt : ce que chaque membre a gagné" },
    {
      type: "figure",
      src: "/blog/caf-documents/income-tax-return.webp",
      width: 1600,
      height: 174,
      alt: "Titre d'une traduction italienne : Dichiarazione di imposta sul reddito delle persone fisiche",
      caption: "La traduction italienne de la déclaration d'impôt sur le revenu. Un exemplaire pour chaque membre qui a un revenu.",
    },
    {
      type: "p",
      text: "La *déclaration de l'impôt sur le revenu des personnes physiques* (en italien *dichiarazione di imposta sul reddito delle persone fisiche*) montre le revenu brut de chaque membre de la famille. L'appel demande le revenu d'une année précise, deux ans avant l'appel : **2024 pour l'appel 2026/27**. Vérifiez que l'année imprimée sur la déclaration est bien celle que demande votre appel.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** une copie tamponnée de la déclaration déposée auprès de l'administration fiscale, à la *recette des finances* où elle a été déposée. Une pour chaque membre qui a un revenu.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Un membre sans revenu a quand même besoin d'un document",
      text: "Si un membre de la famille n'a eu aucun revenu, un document officiel doit le dire explicitement. Les autocertifications et déclarations sur l'honneur ne sont pas acceptées. Et le revenu total de la famille ne peut pas être nul, sinon la demande est exclue.",
    },

    { type: "h2", id: "non-ownership-certificate", text: "5. Certificat de non-propriété : prouver l'absence de biens" },
    {
      type: "figure",
      src: "/blog/caf-documents/non-ownership-certificate.webp",
      width: 1600,
      height: 237,
      alt: "Titre d'une traduction italienne : Certificato di non proprietà di beni registrati",
      caption: "La traduction italienne du certificat de non-propriété de biens immatriculés. Un exemplaire pour chaque membre de la famille.",
    },
    {
      type: "p",
      text: "Le *certificat de non-propriété* (en italien *certificato di non proprietà di beni registrati*) atteste qu'une personne ne possède aucun bien immobilier immatriculé. L'appel demande les biens immobiliers de chaque membre au 31 décembre, donc un membre qui ne possède rien le prouve avec ce certificat.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** à la direction régionale de l'*Office National de la Propriété Foncière*, qui dépend du ministère des Domaines de l'État et des Affaires foncières. Demandez-en un pour chaque membre de la famille.",
    },
    {
      type: "p",
      text: "Si votre famille **possède** une maison ou un terrain, ce certificat ne suffit pas : l'appel demande chaque bien avec sa surface en mètres carrés. Demandez à votre CAF quels documents de propriété apporter.",
    },

    { type: "h2", id: "family-rental-contract", text: "6. Contrat de location : le loyer payé par votre famille" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-rental-contract.webp",
      width: 1600,
      height: 233,
      alt: "Titre d'une traduction italienne : Contratto di locazione di un immobile ad uso abitativo",
      caption: "La traduction italienne du bail du logement familial. Seul le titre est visible.",
    },
    {
      type: "p",
      text: "Si votre famille loue son logement en Tunisie, le *contrat de location* (en italien *contratto di locazione di un immobile ad uso abitativo*) montre le loyer payé. L'appel le demande parce que le loyer du logement familial est pris en compte dans le calcul de l'ISEE.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** votre famille l'a déjà, signé avec le propriétaire. Si la famille est propriétaire de son logement, vous n'en avez pas besoin.",
    },

    { type: "h2", id: "enrolment-certificate", text: "7. Certificato di iscrizione de votre université" },
    {
      type: "figure",
      src: "/blog/caf-documents/enrolment-certificate.webp",
      width: 1600,
      height: 384,
      alt: "En-tête de l'université LUMSA, Libera Università Maria Santissima Assunta, Rome, en haut d'un certificat d'inscription",
      caption: "Le haut d'un certificat d'inscription de l'université LUMSA à Rome. Les données de l'étudiant sont coupées.",
    },
    {
      type: "p",
      text: "Le *certificato di iscrizione* prouve que vous êtes inscrit dans une université italienne pour l'année en cours, avec votre cursus et votre année. Le CAF nous l'a demandé avec les documents de la famille.",
    },
    {
      type: "p",
      text: "**Où l'obtenir :** téléchargez-le sur le portail étudiant de votre université ou demandez-le au secrétariat (*segreteria studenti*). Il est déjà en italien, donc il ne demande ni traduction ni apostille.",
    },

    { type: "h2", id: "translate-and-apostille", text: "8. Faut-il traduire et apostiller les documents tunisiens ?" },
    {
      type: "p",
      text: "Oui. Chaque document tunisien doit être **traduit en italien et apostillé**, et le CAF n'accepte ni autocertification ni déclaration sur l'honneur à la place. Faites traduire chacun par un traducteur de la liste de l'ambassade d'Italie ou du ministère tunisien de la Justice, avec l'apostille sur l'original et sur la traduction.",
    },
    {
      type: "p",
      text: "La traduction et l'apostille prennent du temps : commencez en Tunisie, des mois avant votre rendez-vous au CAF. Toute la chaîne, étape par étape, est dans [comment traduire et apostiller vos documents tunisiens pour l'Italie](article:documents-for-italy#translation).",
    },

    { type: "h2", id: "caf-appointment", text: "9. Que faut-il apporter au rendez-vous du CAF ?" },
    {
      type: "p",
      text: "Prenez rendez-vous seulement dans un CAF de la liste des partenaires DiSCo, où le service est gratuit. Allez-y en personne avec votre passeport, votre codice fiscale et le dossier complet de documents traduits et apostillés. Le CAF vérifie aussi votre identité pour DiSCo.",
    },
    {
      type: "p",
      text: "Pour l'appel 2026/27, l'ISEE parificato devait être signé avant le **10 décembre 2026**, et dépasser cette date vous exclut. Vérifiez chaque document avec cette liste avant d'y aller, car les corrections faites plus tard sont à vos frais. Plus de détails sur le rendez-vous dans [comment obtenir votre ISEEUP dans un CAF partenaire](article:lazio-disco-scholarship#iseeup).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Épargne et comptes bancaires",
      text: "L'appel compte aussi le patrimoine financier, comme les comptes bancaires et l'épargne au 31 décembre. Si votre famille en a, demandez au CAF et à la banque quel relevé officiel apporter.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Quels documents faut-il pour l'ISEE parificato quand on est étudiant tunisien ?",
          a: "Un certificat de vie collective, un extrait de naissance, la déclaration d'impôt de chaque membre, un certificat de non-propriété de biens immatriculés pour chaque membre, le bail du logement familial si la famille est locataire, et votre certificat d'inscription à l'université. Chaque document tunisien doit être traduit en italien et apostillé.",
        },
        {
          q: "Qu'est-ce que l'ISEE parificato ?",
          a: "L'ISEE parificato, aussi appelé ISEEUP, est l'indicateur économique des étudiants dont la famille a ses revenus et son patrimoine à l'étranger. Un CAF le calcule à partir des documents officiels de votre famille au lieu des données fiscales italiennes. DiSCo Lazio l'utilise pour vérifier vos conditions et vous classer pour la bourse.",
        },
        {
          q: "Où obtenir un certificat de non-propriété en Tunisie ?",
          a: "À la direction régionale de l'Office National de la Propriété Foncière, qui dépend du ministère des Domaines de l'État et des Affaires foncières. Il atteste qu'une personne ne possède aucun bien immobilier immatriculé. Demandez-en un pour chaque membre de la famille, puis faites traduire et apostiller chacun.",
        },
        {
          q: "Pourquoi le CAF demande-t-il un exemplaire de chaque document par membre de la famille ?",
          a: "Parce que l'ISEE parificato compte tout le foyer, pas seulement vous. Le CAF a besoin des revenus et de la situation immobilière de chaque membre, donc la déclaration d'impôt et le certificat de non-propriété existent une fois pour chaque membre, avec le même titre sur chaque exemplaire.",
        },
        {
          q: "Le certificat d'inscription de l'université doit-il être traduit ?",
          a: "Non. Le certificato di iscrizione est délivré en italien par votre université italienne, donc il ne demande ni traduction ni apostille. Téléchargez-le sur le portail étudiant ou demandez-le à la segreteria studenti. Seuls les documents délivrés en Tunisie doivent être traduits et apostillés.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "DiSCo Lazio : FAQ pour les étudiants internationaux (documents ISEEUP)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "DiSCo Lazio : appel 2026/27 (PDF, anglais)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "DiSCo Lazio : CAF partenaires dans le Latium (PDF)", url: "https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf" },
        { label: "DiSCo Lazio : traduction et légalisation des documents", url: "https://laziodisco.it/translation-and-legalisation-of-documents-at-italian-embassies-and-consulates-abroad/?lang=en" },
        { label: "Ambassade d'Italie à Tunis : liste des traducteurs (PDF)", url: "https://ambtunisi.esteri.it/wp-content/uploads/2024/10/Lista-traduttori-25-10-2024.pdf" },
        { label: "Ministère tunisien de la Justice : traducteurs assermentés par district", url: "https://www.justice.gov.tn/index.php?id=369" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026, sur l'appel DiSCo Lazio 2026/27 et sa FAQ. L'année des revenus et la date limite changent à chaque appel : vérifiez l'appel en cours avant de réunir vos documents.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Documents", value: "6 : cinq de Tunisie, un de votre université" },
        { label: "Par membre", value: "Déclaration d'impôt et certificat de non-propriété pour chacun" },
        { label: "Format", value: "Officiels, traduits en italien et apostillés" },
        { label: "Où", value: "Un CAF partenaire de DiSCo, gratuit, en personne" },
        { label: "Date limite 2026/27", value: "Signé avant le 10 décembre 2026" },
      ],
    },
    { type: "h2", id: "documents-path", text: "Les documents en bref" },
    {
      type: "ol",
      items: [
        "Réunir les documents de la famille en Tunisie",
        "[Les faire traduire et apostiller](article:documents-for-italy#translation)",
        "Télécharger votre certificat d'inscription",
        "Prendre rendez-vous dans un CAF partenaire DiSCo",
        "[Signer votre ISEEUP](article:lazio-disco-scholarship#iseeup)",
      ],
    },
  ],
};
