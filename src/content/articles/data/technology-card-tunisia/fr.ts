import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Same heading ids, two tables, two fee boxes.
export const fr: ArticleTranslation = {
  slug: "carte-technologique-internationale",
  title: "Carte technologique internationale (CTI) en Tunisie",
  subtitle: "Plafond, documents, usages et renouvellement",
  seoTitle: "Carte technologique internationale en Tunisie : plafond",
  metaDescription:
    "La CTI donne aux résidents tunisiens bacheliers 1 000 TND par an (environ 297 EUR) pour payer en ligne. Documents, banque ou La Poste, usages et renouvellement.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["carte technologique internationale", "carte technologique Tunisie", "plafond carte technologique", "CTI La Poste", "carte technologique 1000 dinars", "payer en ligne en devises Tunisie"],
  summary:
    "La carte technologique internationale (CTI) permet à un résident tunisien titulaire au moins du baccalauréat de dépenser en ligne jusqu’à 1 000 TND par année civile (environ 297 EUR), selon la circulaire BCT 2016-09. Vous la demandez à votre banque ou à La Poste avec votre CIN, une copie certifiée de votre diplôme et une déclaration sur l’honneur, et vous la renouvelez chaque année avec votre déclaration d’impôts visée.",
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
      text: "Elle a été pensée pour des services en ligne (formations, logiciels, abonnements), pas pour les frais de scolarité. C’est la partie 2 de notre [guide pour payer ses frais universitaires italiens en Tunisie](article:international-card-tunisia), qui compare toutes les solutions.",
    },

    { type: "h2", id: "what-it-is", text: "1. Qu’est-ce que la carte technologique internationale ?" },
    {
      type: "p",
      text: "La CTI est une carte internationale nominative réservée à certains paiements en ligne. Sa base légale est **l’article 15 de la circulaire BCT 2016-09** ([Banque Centrale de Tunisie](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf)). L’allocation s’utilise en une ou plusieurs fois et vaut pour une année civile.",
    },
    {
      type: "p",
      text: "Le réseau (Visa ou Mastercard) dépend de la banque : aucune page d’émetteur consultée ne le précise, demandez-le au guichet. BTK Bank et La Poste présentent leur carte comme prépayée : vous chargez des dinars et la carte paie en devises jusqu’à votre plafond annuel.",
    },

    { type: "h2", id: "limit-in-euros", text: "2. Le plafond de 1 000 TND, converti en euros" },
    {
      type: "fees",
      title: "L’allocation annuelle de la carte",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "Au cours de référence de la BCT du 7 octobre 2026 (1 EUR = 3,3671 TND), 1 000 TND font environ **297 EUR**. Votre banque applique son propre cours et ses frais : comptez un peu moins.",
    },
    {
      type: "callout",
      tone: "note",
      title: "D’où vient le chiffre de 10 000 TND",
      text: "10 000 TND par an, c’est l’allocation des **entreprises** résidentes (article 14), et les entreprises labellisées Startup ont droit à 100 000 TND (circulaire 2019-02). Aucun de ces montants ne concerne un particulier ou un étudiant. Des hausses pour les particuliers ont été annoncées en 2022 puis en mai 2025, mais nous n’avons trouvé aucune circulaire BCT modifiant l’article 15 : 1 000 TND reste le chiffre légal en octobre 2026.",
    },
    {
      type: "p",
      text: "Si vous avez besoin de plus, ou si vous ne remplissez pas les conditions, l’article 17 permet de déposer une demande auprès de la BCT sur formulaire F2, avec l’avis favorable du ministère des Technologies de la communication.",
    },

    { type: "h2", id: "issuers", text: "3. Les banques et La Poste qui délivrent la carte" },
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
      text: "Le point essentiel : **chaque émetteur applique ses propres filtres**. Avant de choisir, demandez à l’agence quels types de marchands la carte accepte.",
    },

    { type: "h2", id: "how-to-apply", text: "4. Demander la CTI, étape par étape" },
    { type: "h3", id: "step-eligibility", text: "Étape 1 : vérifiez que vous y avez droit" },
    {
      type: "p",
      text: "Il faut être **de nationalité tunisienne et résident en Tunisie**, avec un diplôme au moins équivalent au **baccalauréat** (article 15). Une seule allocation CTI par personne : impossible d’en avoir une dans deux banques.",
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
      text: "Il vous faut un compte courant postal (CCP) actif, votre CIN et une copie certifiée de votre diplôme. La procédure est décrite sur [idaraty.tn](https://idaraty.tn/fr/procedures/obtenir-la-carte-technologique-internationale-la-poste-personne-physique). Vous chargez la carte en dinars et la gérez sur e-dinar.",
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
      text: "Vérifiez que la carte est activée pour les paiements en ligne et internationaux, et que vous recevez bien le code de confirmation (OTP) sur votre téléphone. Faites-le avant une échéance, pas le jour même.",
    },

    { type: "h2", id: "allowed-uses", text: "5. Ce que la carte peut légalement payer" },
    {
      type: "p",
      text: "L’annexe 1 de la circulaire 2016-09 liste les paiements en ligne autorisés :",
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
      text: "La déclaration sur l’honneur exclut **les paris, les frais de séjour, les achats de biens** et les sites prohibés.",
    },
    {
      type: "callout",
      tone: "note",
      title: "La zone grise : frais de scolarité, pagoPA et visa",
      text: "Les frais de scolarité, les avis pagoPA et les frais de visa ne figurent pas dans la liste. « Formations en ligne » et « sites éducatifs » sont les catégories les plus proches, mais rien ne dit qu’elles couvrent ces frais, et les banques peuvent bloquer certains marchands. Interrogez votre banque avant de payer et conservez chaque reçu et facture.",
    },

    { type: "h2", id: "paying-italian-fees", text: "6. Les frais d’études italiens face au plafond de 1 000 TND" },
    {
      type: "fees",
      title: "Frais courants de première année à Rome, en dinars",
      feeIds: ["sapienza-application", "cimea-cv", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
      hub: true,
    },
    {
      type: "p",
      text: "Ces quatre frais font 486 EUR, plus que toute l’allocation annuelle. L’attestation CIMEA seule (300 EUR) dépasse déjà 1 000 TND.",
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
      text: "Pour les frais de candidature, de concours et d’examen de dossier, votre banque peut faire un virement sur présentation de la facture : voir [la solution du virement bancaire](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "paypal-link", text: "7. Associer la CTI à un compte PayPal tunisien" },
    {
      type: "p",
      text: "Un compte PayPal ouvert en Tunisie peut **envoyer des paiements**, alimentés par une carte internationale associée comme la CTI. La réception d’argent n’est en général pas disponible. PayPal ajoute environ 4 % quand il convertit la devise, et pagoPA facture 1,50 à 2,50 EUR pour un paiement PayPal.",
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
      text: "Si votre banque filtre les marchands (comme Zitouna), PayPal peut être refusé : demandez d’abord. La méthode complète est dans [comment payer un avis pagoPA avec PayPal](article:pay-pagopa-from-abroad#pay-with-paypal).",
    },

    { type: "h2", id: "renewal", text: "8. Renouveler la carte à chaque année civile" },
    {
      type: "p",
      text: "L’allocation s’arrête au 31 décembre. Pour la renouveler, adressez une demande écrite à **la même banque**, avec **la déclaration d’impôts de l’année écoulée visée par l’administration fiscale** (article 18).",
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
      text: "Les dinars non utilisés ne sont pas reportés : prévoyez les gros paiements tôt dans l’année.",
    },

    { type: "h2", id: "card-safety", text: "9. Gardez votre carte pour vous" },
    {
      type: "p",
      text: "Ne prêtez ni ne louez jamais votre CTI, et ne communiquez jamais son CVC2 ni le code OTP : partager la carte viole aussi la déclaration sur l’honneur que vous avez signée. Le 30 mai 2024, la BCT a averti que les cartes internationales vendues sur les réseaux sociaux sont illégales et dangereuses. Pour en savoir plus : [comment éviter les arnaques au paiement](article:international-card-tunisia#payment-scams).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Quel est le plafond annuel de la CTI en 2026 ?",
          a: "1 000 TND par année civile pour un particulier, soit environ 297 EUR au cours BCT du 7 octobre 2026. Aucune circulaire BCT le relevant n’a été trouvée en octobre 2026.",
        },
        {
          q: "Le plafond de la carte technologique est-il passé à 10 000 TND ?",
          a: "Non. 10 000 TND, c’est l’allocation des entreprises résidentes, et 100 000 TND celle des entreprises labellisées Startup ; les particuliers restent à 1 000 TND.",
        },
        {
          q: "Quels documents faut-il pour la carte technologique ?",
          a: "Une copie de votre CIN, une copie certifiée de votre baccalauréat ou d’un diplôme supérieur, et la déclaration sur l’honneur signée à la banque. La Poste exige aussi un CCP actif.",
        },
        {
          q: "Vaut-il mieux prendre la CTI à La Poste ou dans une banque ?",
          a: "Les deux donnent la même allocation de 1 000 TND. La Poste demande un CCP et va vite (24 heures environ, renouvellement à 3 TND) ; les banques filtrent les marchands différemment, demandez quels paiements elles acceptent.",
        },
        {
          q: "Puis-je payer mes frais de scolarité à Sapienza avec la CTI ?",
          a: "Ce n’est pas clair : les frais de scolarité ne figurent pas dans la liste officielle des usages autorisés, et les banques peuvent les bloquer. La voie plus claire est le virement bancaire dans le cadre de votre dossier études ; demandez d’abord à votre banque.",
        },
        {
          q: "Que se passe-t-il quand mes 1 000 TND sont épuisés ?",
          a: "La carte ne paie plus jusqu’à la nouvelle année civile. Vous pouvez demander plus à la BCT sur formulaire F2, ou passer par une autre solution du [guide des paiements](article:international-card-tunisia#which-method).",
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
