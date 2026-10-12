import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Same heading ids, two tables, two fee boxes.
export const fr: ArticleTranslation = {
  slug: "carte-technologique-internationale",
  title: "Carte technologique internationale (CTI) en Tunisie",
  subtitle: "Plafond, documents, demande, usages autorisés et renouvellement",
  seoTitle: "Carte technologique Tunisie : plafond, Poste, banques 2026",
  metaDescription:
    "Obtenir la carte technologique internationale (CTI) : 1 000 TND par an (environ 297 EUR) en ligne. Documents, banque ou La Poste, usages et renouvellement.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["carte technologique tunisie", "carte technologique internationale", "carte technologique poste", "carte technologique zitouna", "carte internationale tunisie", "plafond carte technologique 1000 dinars", "obtenir la carte technologique", "renouveler la carte technologique"],
  summary:
    "La carte technologique internationale (CTI) permet à un résident tunisien titulaire au moins du baccalauréat de dépenser en ligne jusqu’à 1 000 TND par année civile (environ 297 EUR), selon la circulaire BCT 2016-09, un plafond toujours en vigueur en octobre 2026. Vous la demandez à votre banque ou à La Poste avec votre CIN, une copie certifiée de votre diplôme et une déclaration sur l’honneur, et vous la renouvelez chaque année avec votre déclaration d’impôts visée.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d’information et ne constitue pas un conseil juridique ou financier. Les règles de change, les plafonds et les frais bancaires changent : vérifiez les textes officiels indiqués ci-dessous et interrogez votre banque avant de payer.",
    },
    { type: "p", text: "**Combien la carte technologique peut-elle vraiment payer, comment l’obtenir, et peut-elle régler vos frais universitaires en Italie ?**" },
    {
      type: "p",
      text: "La réponse courte : la carte technologique internationale (CTI) donne à un résident tunisien titulaire au moins du baccalauréat **1 000 TND par année civile** pour payer en ligne à l’étranger, soit environ 297 EUR avant les marges bancaires. Vous l’obtenez auprès de votre banque ou de La Poste, et vous la renouvelez chaque année.",
    },
    {
      type: "p",
      text: "La CTI a été pensée pour des services en ligne (formations, logiciels, abonnements), pas pour les frais de scolarité. Cet article est la partie 2 de notre [guide pour payer ses frais d’inscription en Italie depuis la Tunisie](article:international-card-tunisia), qui compare toutes les solutions.",
    },

    { type: "h2", id: "what-it-is", text: "1. Qu’est-ce que la carte technologique internationale (CTI) ?" },
    {
      type: "p",
      text: "La carte technologique internationale (CTI) est une carte internationale nominative réservée à certains paiements en ligne, et sa base légale est **l’article 15 de la circulaire BCT 2016-09** ([Banque Centrale de Tunisie](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf)). L’allocation de la CTI s’utilise en une ou plusieurs fois et vaut pour une année civile.",
    },
    {
      type: "figure",
      src: "/blog/brand/technology-card-banner.webp",
      width: 860,
      height: 188,
      alt: "Bannière bancaire bleue indiquant Cartes internationales, Carte technologique, Payez et recevez en devises",
      caption: "La bannière d’une banque pour la carte technologique. Chaque émetteur fixe ses propres frais et conditions : vérifiez ceux de votre banque. Image : une banque tunisienne émettrice",
    },
    {
      type: "p",
      text: "Le réseau de la CTI (Visa ou Mastercard) dépend de la banque émettrice : aucune page d’émetteur consultée ne le précise, demandez-le au guichet. BTK Bank et La Poste présentent leur carte comme prépayée : vous chargez des dinars et la carte paie en devises jusqu’à votre plafond annuel.",
    },

    { type: "h2", id: "limit-in-euros", text: "2. Combien valent les 1 000 TND de la CTI en euros ?" },
    {
      type: "p",
      text: "Le plafond annuel de 1 000 TND de la CTI vaut environ **297 EUR** au cours de référence de la BCT du 7 octobre 2026 (1 EUR = 3,3671 TND). Votre banque applique son propre cours et ses frais : comptez un peu moins.",
    },
    {
      type: "fees",
      title: "L’allocation annuelle de la carte",
      feeIds: ["cti-allowance"],
    },
    {
      type: "callout",
      tone: "note",
      title: "D’où vient le chiffre de 10 000 TND",
      text: "10 000 TND par an, c’est l’allocation des **entreprises** résidentes (article 14), et les entreprises labellisées Startup ont droit à 100 000 TND (circulaire 2019-02). Aucun de ces montants ne concerne un particulier ou un étudiant. Des hausses pour les particuliers ont été annoncées en 2022 puis en mai 2025, mais nous n’avons trouvé aucune circulaire BCT modifiant l’article 15 : 1 000 TND reste le chiffre légal en octobre 2026.",
    },
    {
      type: "p",
      text: "Si vous avez besoin de plus de 1 000 TND, ou si vous ne remplissez pas les conditions, l’article 17 de la circulaire 2016-09 permet de déposer une demande auprès de la BCT sur formulaire F2, avec l’avis favorable du ministère des Technologies de la communication.",
    },

    { type: "h2", id: "issuers", text: "3. Quelles banques et quels bureaux de La Poste délivrent la CTI ?" },
    {
      type: "p",
      text: "Banque Zitouna, BTK Bank, Banque de Tunisie et La Poste Tunisienne publient des pages officielles sur la CTI ; d’autres banques délivrent aussi la carte, souvent sans page produit en ligne, et chaque émetteur fixe ses propres frais et filtres marchands.",
    },
    {
      type: "table",
      caption: "Ce que les émetteurs publient sur la CTI (pages consultées le 10 octobre 2026). Les frais absents n’ont pas pu être vérifiés : demandez à votre banque.",
      head: ["Émetteur", "À savoir", "Frais annuels"],
      rows: [
        ["Banque Zitouna", "Demande aussi de travailler dans les nouvelles technologies ou un domaine proche ; paiements en ligne limités aux licences d’app stores, filtrés par code marchand", "20 TND"],
        ["BTK Bank", "Carte prépayée, rechargeable jusqu’au plafond annuel", "Demandez à votre banque"],
        ["Banque de Tunisie", "Usage Internet uniquement, allocation utilisable sur l’année civile", "Demandez à votre banque"],
        ["La Poste Tunisienne", "Compte courant postal (CCP) actif exigé ; prête en 24 heures environ ; gérée sur e-dinar", "Renouvellement 3 TND ; frais d’émission non publiés"],
        ["Autres banques", "Aucune page produit officielle à jour trouvée", "Demandez à votre banque"],
      ],
    },
    {
      type: "figure",
      src: "/blog/stb-bank-branch-tunisia.webp",
      width: 1600,
      height: 1200,
      alt: "Entrée d'une agence de la STB à La Marsa, avec son nom en arabe et en lettres latines au-dessus des portes vitrées",
      caption: "Une agence de la STB à La Marsa. Beaucoup de banques délivrent la carte sans page en ligne : demandez à votre agence.",
      credit: {
        text: "Photo : Cimoi, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Agence_STB_La_Marsa.jpg",
      },
    },
    {
      type: "p",
      text: "Le point essentiel du tableau des émetteurs : **chaque émetteur de la CTI applique ses propres filtres**. Avant de choisir, demandez à l’agence quels types de marchands la carte accepte.",
    },

    { type: "h2", id: "how-to-apply", text: "4. Comment demander la CTI, étape par étape ?" },
    {
      type: "p",
      text: "Vous demandez la CTI à votre banque ou à La Poste avec votre CIN, une copie certifiée de votre diplôme et une déclaration sur l’honneur signée au guichet, puis vous activez les paiements en ligne avant votre première échéance.",
    },
    { type: "h3", id: "step-eligibility", text: "Étape 1 : vérifiez que vous y avez droit" },
    {
      type: "p",
      text: "Pour obtenir la CTI, il faut être **de nationalité tunisienne et résident en Tunisie**, avec un diplôme au moins équivalent au **baccalauréat** (article 15). Une seule allocation CTI par personne : impossible d’en avoir une dans deux banques.",
    },
    { type: "h3", id: "step-documents", text: "Étape 2 : préparez les documents" },
    {
      type: "ul",
      items: [
        "Une copie de votre carte d’identité nationale (CIN).",
        "Une copie certifiée conforme de votre baccalauréat ou d’un diplôme supérieur.",
        "La déclaration sur l’honneur (annexe 3 de la circulaire), signée à la banque : vous n’avez aucune autre allocation CTI et vous n’utiliserez la carte que pour les paiements autorisés.",
        "Ensuite, pour chaque paiement, gardez la **facture** : la circulaire en demande une pour chaque transfert.",
      ],
    },
    { type: "h3", id: "step-bank", text: "Étape 3a : faites la demande à votre banque" },
    {
      type: "p",
      text: "Présentez-vous à votre agence avec les documents et demandez la « carte technologique internationale ». La [fiche du ministère des Technologies de la communication](https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf) cite les mêmes pièces. Certaines banques, comme Zitouna, acceptent aussi les non-clients.",
    },
    { type: "h3", id: "step-post-office", text: "Étape 3b : ou à La Poste" },
    {
      type: "p",
      text: "La Poste Tunisienne demande un compte courant postal (CCP) actif, votre CIN et une copie certifiée de votre diplôme. La procédure est décrite sur [idaraty.tn](https://idaraty.tn/fr/procedures/obtenir-la-carte-technologique-internationale-la-poste-personne-physique). Vous chargez la carte de La Poste en dinars et la gérez sur e-dinar.",
    },
    {
      type: "figure",
      src: "/blog/la-poste-tunisienne-office.webp",
      width: 1600,
      height: 1137,
      alt: "Un bureau de La Poste Tunisienne à Ettadhamen, blanc, avec une enseigne bleue en arabe et en français et une boîte aux lettres jaune",
      caption: "Le bureau de poste d'Ettadhamen. À La Poste, la carte est rattachée à votre compte courant postal (CCP).",
      credit: {
        text: "Photo : Tunisie Guide 360, CC BY-SA 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Bureau_de_poste_ettadhamen.png",
      },
    },
    { type: "h3", id: "step-activate", text: "Étape 4 : activez les paiements en ligne" },
    {
      type: "p",
      text: "Vérifiez que la CTI est activée pour les paiements en ligne et internationaux, et que vous recevez bien le code de confirmation (OTP) sur votre téléphone. Faites-le avant une échéance, pas le jour même.",
    },

    { type: "h2", id: "allowed-uses", text: "5. Que peut payer légalement la carte technologique ?" },
    {
      type: "p",
      text: "La CTI ne peut légalement payer que les services en ligne listés à l’annexe 1 de la circulaire BCT 2016-09 :",
    },
    {
      type: "ul",
      items: [
        "Formations en ligne et sites à caractère éducatif.",
        "Abonnements à des sites étrangers, y compris les plateformes de freelance.",
        "Hébergement de sites web et d’applications mobiles, et publicité en ligne.",
        "Licences de logiciels et outils de développement d’applications.",
        "Frais de collecte d’informations.",
      ],
    },
    {
      type: "p",
      text: "La déclaration sur l’honneur de la CTI exclut **les paris, les frais de séjour, les achats de biens** et les sites prohibés.",
    },
    {
      type: "callout",
      tone: "note",
      title: "La zone grise : frais de scolarité, pagoPA et visa",
      text: "Les frais de scolarité, les avis pagoPA et les frais de visa ne figurent pas dans la liste. « Formations en ligne » et « sites éducatifs » sont les catégories les plus proches, mais rien ne dit qu’elles couvrent ces frais, et les banques peuvent bloquer certains marchands. Interrogez votre banque avant de payer et conservez chaque reçu et facture.",
    },

    { type: "h2", id: "paying-italian-fees", text: "6. Jusqu’où va la CTI face aux frais de première année à Rome ?" },
    {
      type: "p",
      text: "L’allocation de 1 000 TND de la CTI ne couvre pas les quatre frais courants de première année à Rome : ils font 486 EUR, plus que toute l’allocation annuelle, et l’attestation CIMEA seule (300 EUR) dépasse déjà 1 000 TND.",
    },
    {
      type: "fees",
      title: "Frais courants de première année à Rome, en dinars",
      feeIds: ["sapienza-application", "cimea-cv", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
      hub: true,
    },
    {
      type: "table",
      caption: "Quelle voie pour chaque frais (notre lecture des textes BCT ; à confirmer avec votre banque).",
      head: ["Frais", "Avec la CTI ?", "Voie légale plus claire"],
      rows: [
        ["Frais de candidature Sapienza", "Zone grise", "Virement bancaire sur facture (frais d’examen de dossier)"],
        ["Attestation CIMEA", "Zone grise, et au-dessus du plafond", "Virement bancaire sur facture (frais d’examen de dossier)"],
        ["Taxe régionale et timbre (pagoPA)", "Zone grise", "Dossier études à votre banque, si elle peut payer l’avis (à demander)"],
      ],
    },
    {
      type: "p",
      text: "Pour les frais de candidature, de concours et d’examen de dossier, une banque tunisienne peut faire un virement sur présentation de la facture : voir [comment payer ses frais italiens par virement depuis une banque tunisienne](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "paypal-link", text: "7. Peut-on associer la CTI à un compte PayPal tunisien ?" },
    {
      type: "p",
      text: "Oui : un compte PayPal ouvert en Tunisie peut **envoyer des paiements** alimentés par une carte internationale associée comme la CTI. La réception d’argent n’est en général pas disponible. PayPal ajoute environ 4 % quand il convertit la devise, et pagoPA facture 1,50 à 2,50 EUR pour un paiement PayPal.",
    },
    {
      type: "figure",
      src: "/blog/logos/paypal.webp",
      width: 1600,
      height: 400,
      alt: "Logo de PayPal",
      caption: "PayPal est une marque de PayPal, Inc. ; le logo sert seulement à identifier le service.",
      credit: {
        text: "Logo : PayPal, domaine public, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PayPal_2024.svg",
      },
    },
    {
      type: "p",
      text: "Si la banque émettrice filtre les marchands, comme Banque Zitouna, un paiement PayPal avec la CTI peut être refusé : demandez d’abord à la banque. La méthode complète est dans [comment payer un avis pagoPA avec PayPal](article:pay-pagopa-from-abroad#pay-with-paypal).",
    },

    { type: "h2", id: "renewal", text: "8. Comment renouveler la CTI à chaque année civile ?" },
    {
      type: "p",
      text: "Pour renouveler la CTI, adressez une demande écrite à **la même banque**, avec **la déclaration d’impôts de l’année écoulée visée par l’administration fiscale** (article 18 de la circulaire 2016-09). L’allocation annuelle s’arrête au 31 décembre.",
    },
    {
      type: "ul",
      items: [
        "Si cette déclaration n’est pas encore disponible, celle de l’année précédente est acceptée, et la nouvelle doit parvenir à la banque **avant le 15 juillet** ; sinon la banque suspend l’allocation.",
        "À La Poste, apportez la carte expirée, votre CIN et la quittance de déclaration des impôts ; le renouvellement coûte 3 TND ([idaraty.tn](https://idaraty.tn/fr/procedures/renouvellement-de-la-carte-technologique-internationale-la-poste-personne-physique)).",
        "La carte de La Poste est prolongée de 5 ans, mais vous devez la réactiver dans un bureau de poste.",
      ],
    },
    {
      type: "p",
      text: "Les dinars non utilisés sur la CTI ne sont pas reportés sur l’année suivante : prévoyez les gros paiements tôt dans l’année.",
    },

    { type: "h2", id: "card-safety", text: "9. Peut-on prêter ou vendre sa carte technologique ?" },
    {
      type: "p",
      text: "Non : ne prêtez ni ne louez jamais votre CTI, et ne communiquez jamais son CVC2 ni le code OTP : partager la carte viole aussi la déclaration sur l’honneur que vous avez signée. Le 30 mai 2024, la BCT a averti que les cartes internationales vendues sur les réseaux sociaux sont illégales et dangereuses. Pour en savoir plus : [les risques des cartes internationales achetées sur les réseaux sociaux](article:international-card-tunisia#payment-scams).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Quel est le plafond annuel de la CTI en 2026 ?",
          a: "1 000 TND par année civile pour un particulier, soit environ 297 EUR au cours de référence BCT du 7 octobre 2026. L’article 15 de la circulaire BCT 2016-09 fixe ce plafond, et aucune circulaire BCT le relevant n’a été trouvée en octobre 2026. Votre banque applique son propre cours et ses frais : le montant réellement dépensable en euros est un peu plus bas.",
        },
        {
          q: "Le plafond de la carte technologique est-il passé à 10 000 TND ?",
          a: "Non. 10 000 TND par an, c’est l’allocation des entreprises résidentes (article 14 de la circulaire BCT 2016-09), et les entreprises labellisées Startup ont droit à 100 000 TND (circulaire 2019-02). Les particuliers et les étudiants restent à 1 000 TND : des hausses ont été annoncées en 2022 et en mai 2025, mais aucune circulaire modifiant l’article 15 n’a été trouvée en octobre 2026.",
        },
        {
          q: "Quels documents faut-il pour la carte technologique ?",
          a: "Il faut une copie de votre CIN, une copie certifiée de votre baccalauréat ou d’un diplôme supérieur, et la déclaration sur l’honneur (annexe 3 de la circulaire BCT 2016-09) signée à la banque. La Poste Tunisienne exige aussi un compte courant postal (CCP) actif. Une fois la carte délivrée, gardez la facture de chaque paiement.",
        },
        {
          q: "Vaut-il mieux prendre la CTI à La Poste ou dans une banque ?",
          a: "Aucune ne donne plus : La Poste et les banques accordent la même allocation de 1 000 TND. La Poste Tunisienne demande un CCP actif, délivre la carte en 24 heures environ et facture 3 TND le renouvellement. Les banques filtrent les marchands différemment (Banque Zitouna limite les paiements en ligne par code marchand) : demandez à chaque émetteur quels paiements sa carte accepte.",
        },
        {
          q: "Puis-je payer mes frais de scolarité à Sapienza avec la CTI ?",
          a: "Pas clairement. Les frais de scolarité ne figurent pas dans la liste officielle des usages autorisés de la CTI (annexe 1 de la circulaire BCT 2016-09), et les banques tunisiennes peuvent bloquer les marchands universitaires. La voie plus claire pour Sapienza est le virement bancaire dans le cadre de votre dossier études. Demandez d’abord à votre banque et gardez chaque reçu et facture.",
        },
        {
          q: "Que se passe-t-il quand mes 1 000 TND sont épuisés ?",
          a: "La CTI ne paie plus jusqu’à la nouvelle année civile, et les dinars non utilisés ne sont jamais reportés. Vous pouvez demander un montant plus élevé à la BCT sur formulaire F2 (article 17), avec l’avis favorable du ministère des Technologies de la communication, ou passer par une autre solution de la [comparaison des moyens de paiement pour chaque frais italien](article:international-card-tunisia#which-method).",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Banque Centrale de Tunisie : circulaire 2016-09 (articles 14 à 18, annexes 1 et 3)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
        { label: "Circulaire 2019-02 (entreprises et label Startup), hébergée par le ministère des Technologies de la communication", url: "https://www.mtc.gov.tn/fileadmin/StartupAct/Cir_2019_02_fr.pdf" },
        { label: "Ministère des Technologies de la communication : fiche CTI", url: "https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf" },
        { label: "Banque Centrale de Tunisie : cours de référence des devises", url: "https://www.bct.gov.tn/bct/siteprod/cours.jsp" },
        { label: "idaraty.tn : obtenir la CTI à La Poste", url: "https://idaraty.tn/fr/procedures/obtenir-la-carte-technologique-internationale-la-poste-personne-physique" },
        { label: "idaraty.tn : renouveler la CTI à La Poste", url: "https://idaraty.tn/fr/procedures/renouvellement-de-la-carte-technologique-internationale-la-poste-personne-physique" },
        { label: "Banque Zitouna : carte technologique", url: "https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique" },
        { label: "BTK Bank : BTK@TECHCARD", url: "https://www.btkbank.com/site/fr/article.php?id_article=190" },
        { label: "Banque de Tunisie : carte technologique internationale", url: "https://www.bt.com.tn/carte-technologique-international-entreprises" },
        { label: "PayPal Tunisie : frais pour les particuliers", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Le plafond de 1 000 TND, le cours BCT et les frais des émetteurs sont ceux publiés en octobre 2026. Un nouveau code des changes est en discussion au Parlement : vérifiez le site de la BCT avant de vous fier à ces chiffres.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Plafond annuel", value: "1 000 TND par année civile (environ 297 EUR)" },
        { label: "Qui y a droit", value: "Résident tunisien titulaire au moins du baccalauréat" },
        { label: "Où", value: "Votre banque, ou La Poste avec un CCP actif" },
        { label: "Renouvellement", value: "Chaque année, avec la déclaration d’impôts visée de l’année écoulée" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Payer en euros pour les Tunisiens" },
    {
      type: "ol",
      items: [
        "[Quel moyen de paiement pour quels frais](article:international-card-tunisia)",
        "La carte technologique internationale",
        "[Payer pagoPA avec PayPal ou une carte](article:pay-pagopa-from-abroad)",
        "[RedotPay et cartes crypto : les risques](article:redotpay-tunisia)",
        "[Ouvrir un compte bancaire en Italie](article:bank-account-italy-student)",
      ],
    },
  ],
};
