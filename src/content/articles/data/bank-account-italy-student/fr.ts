import type { ArticleTranslation } from "../../types";

// Traduction de en.ts : mêmes ids de titres, un tableau, trois encadrés de frais, deux cartes de parrainage.
export const fr: ArticleTranslation = {
  slug: "ouvrir-compte-bancaire-italie-etudiant",
  title: "Ouvrir un compte bancaire en Italie quand on est étudiant à Rome",
  seoTitle: "Ouvrir un compte bancaire en Italie : guide étudiant à Rome",
  metaDescription:
    "Compte bancaire en Italie pour étudiant non européen à Rome : Intesa Sanpaolo, Revolut, Wise et conto di base, documents, coûts et que faire en cas de refus.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["ouvrir un compte bancaire en Italie", "compte bancaire Italie étudiant", "meilleure banque en Italie pour étudiant étranger", "Intesa Sanpaolo étudiant", "IBAN italien Revolut", "conto di base"],
  summary:
    "D'après mon expérience, Intesa Sanpaolo est la meilleure première banque pour un étudiant non européen à Rome : j'ai ouvert un compte courant classique avec mon codice fiscale, mon passeport et mon attestation d'inscription, et l'offre actuelle XME Conto Silver coûte 5,90 EUR par mois. Revolut donne un IBAN italien aux résidents en Italie, Wise sert de solution de secours, et toute personne en séjour régulier dans l'UE a droit à un compte de base (conto di base).",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement",
      text: "Ce guide est purement informatif et ne constitue pas un conseil juridique ou financier. Les conditions, offres et frais des banques changent : vérifiez toujours les pages officielles indiquées plus bas avant de signer ou de payer quoi que ce soit.",
    },
    { type: "p", text: "**Vous venez d'arriver à Rome. Quel compte ouvrir pour avoir un IBAN pour le loyer, DiSCo et un salaire, et que va vous demander la banque ?**" },
    {
      type: "p",
      text: "La réponse courte : d'après mon expérience et celle d'autres étudiants, **Intesa Sanpaolo** est le meilleur premier choix. J'ai ouvert un compte courant classique (environ 6 EUR par mois) avec seulement mon codice fiscale, mon passeport et une attestation d'inscription. **Revolut** est l'alternative rapide dans l'application, **Wise** la solution de secours simple, et le **conto di base** est un droit légal si une banque refuse.",
    },
    {
      type: "p",
      text: "C'est la partie 1 de la série pour s'installer à Rome après l'arrivée. S'il vous reste des frais à payer avant de partir, lisez d'abord [comment payer les frais italiens avec une carte internationale en Tunisie](article:international-card-tunisia). Pour la version courte dans vos 30 premiers jours, voyez [l'étape compte bancaire du guide d'arrivée](article:arriving-in-rome#bank-account).",
    },

    { type: "h2", id: "what-you-need", text: "1. Ce qu'il faut apporter avant d'entrer dans une banque" },
    {
      type: "p",
      text: "Obtenez d'abord votre **codice fiscale** : toutes les banques italiennes le demandent. Il arrive normalement avec la demande de permis de séjour ; voir [comment obtenir le codice fiscale](article:arriving-in-rome#codice-fiscale).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Apportez le récépissé du permis",
      text: "Si vous avez déjà demandé votre permis de séjour, présentez toujours le **récépissé (ricevuta)** avec votre passeport. Les banques s'y attendent : c'est le document qui montre que votre séjour est régulier pendant la fabrication de la carte.",
    },
    {
      type: "ul",
      items: [
        "**Demandé dans mon cas :** codice fiscale, passeport (avec le visa d'études) et attestation d'inscription à l'université.",
        "**Utile à apporter, d'après mon expérience :** le récapitulatif de pré-inscription et l'attestation de votre banque tunisienne sur les fonds bloqués, qui montre les virements mensuels qui arriveront sur votre compte italien (voir [la partie sur le compte bloqué](article:italy-student-visa#blocked-account)).",
        "**À garder aussi sur vous :** le récépissé de la poste (ricevuta) de votre demande de permis de séjour.",
      ],
    },
    {
      type: "p",
      text: "Ces papiers en plus ne sont pas des exigences officielles. Ils montrent simplement à l'agence qui vous êtes, pourquoi vous êtes à Rome et d'où vient votre argent.",
    },

    { type: "h2", id: "intesa-sanpaolo", text: "2. Intesa Sanpaolo : la meilleure première banque, selon mon expérience" },
    {
      type: "p",
      text: "Intesa Sanpaolo est l'une des plus grandes banques d'Italie, avec des agences partout à Rome. Sa [FAQ officielle](https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html) indique qu'un étranger qui réside en Italie peut ouvrir un compte dans l'application, en ligne ou en agence, **seulement s'il a un codice fiscale italien**.",
    },
    {
      type: "figure",
      src: "/blog/intesa-sanpaolo-branch.webp",
      width: 1600,
      height: 1200,
      alt: "Entrée d'angle d'une agence Intesa Sanpaolo en Italie, avec des enseignes vertes au-dessus des portes vitrées",
      caption: "Une agence Intesa Sanpaolo. Apportez votre passeport, le récépissé du permis et votre codice fiscale, et demandez un compte courant (conto corrente).",
      credit: {
        text: "Photo : Pava, CC BY-SA 3.0 IT, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:-_ITALY_-_Intesa_Sanpaolo_filiale.JPG",
      },
    },
    {
      type: "fees",
      title: "Compte courant Intesa Sanpaolo (octobre 2026)",
      feeIds: ["intesa-xme-silver"],
    },
    {
      type: "p",
      text: "L'offre actuelle pour les nouveaux clients est **XME Conto Silver** à 5,90 EUR par mois (fiche tarifaire mise à jour le 1er octobre 2026), ou 2,90 EUR par mois avec un salaire domicilié. La première carte de débit est sans frais, et les retraits aux distributeurs du groupe sont gratuits ([XME Conto Silver](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html)).",
    },
    {
      type: "p",
      text: "Intesa n'a pas d'offre propre pour les moins de 35 ans. La banque mobile du groupe, [isybank](https://www.isybank.com/), propose la formule **isyPrime** à 0 EUR par mois jusqu'à 35 ans. Je n'ai pas pu confirmer les conditions d'isybank pour les étudiants non européens : consultez sa FAQ avant de compter dessus.",
    },
    { type: "h3", id: "step-choose-branch", text: "Étape 1 : choisir une agence près d'une université" },
    {
      type: "p",
      text: "D'après mon expérience et celle d'autres étudiants, les agences proches des universités et des campus ont l'habitude des étudiants non européens et ouvrent généralement ces comptes sans difficulté. Demandez au bureau international de votre université, ou à des étudiants plus anciens, quelle agence ils utilisent.",
    },
    { type: "h3", id: "step-open-account", text: "Étape 2 : demander un compte courant et montrer vos papiers" },
    {
      type: "p",
      text: "Dites que vous êtes étudiant international et que vous voulez un compte courant (conto corrente). Montrez les documents de la partie 1 et demandez s'il manque encore quelque chose.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Si une agence refuse",
      text: "D'après mon expérience, un refus dans une agence ne veut pas dire que la banque vous refuse. Souvent, cette agence ne connaissait simplement pas la procédure pour les étudiants non européens. Essayez une autre agence, de préférence près d'un campus. Les conditions peuvent changer : vérifiez les pages officielles d'Intesa.",
    },

    { type: "h2", id: "revolut", text: "3. Revolut : un IBAN italien depuis l'application" },
    {
      type: "p",
      text: "Revolut donne un **IBAN italien** (qui commence par IT) aux clients qui résident en Italie (aide Revolut). En octobre 2026, ses formules coûtent : Standard gratuite, Plus 3,99 EUR, Premium 9,99 EUR et Metal 15,99 EUR par mois.",
    },
    {
      type: "figure",
      src: "/blog/brand/revolut-app.webp",
      width: 600,
      height: 360,
      alt: "Le logo Revolut derrière un téléphone affichant l'icône de l'application Revolut",
      caption: "Revolut fonctionne entièrement depuis l'application : inscription, vérification d'identité et IBAN italien. Image : Revolut",
    },
    {
      type: "p",
      text: "Revolut n'ouvre pas de compte personnel aux résidents de Tunisie (pays acceptés) : ouvrez-le donc **après votre arrivée**, avec votre adresse italienne. Prévoyez une vérification d'identité avec selfie, et gardez votre codice fiscale sous la main au cas où l'application le demande.",
    },
    { type: "h3", id: "revolut-tessera-sanitaria", text: "Si l'application demande une Tessera Sanitaria" },
    {
      type: "p",
      text: "Pendant l'inscription, l'application peut demander une **Tessera Sanitaria** (la carte de santé italienne), que la plupart des nouveaux étudiants n'ont pas encore. D'après mon expérience et celle d'autres étudiants, envoyer à la place le **document officiel du codice fiscale** a fonctionné. Il peut être refusé la première fois ; le renvoyer fait en général passer le dossier en vérification manuelle par une personne. Ma vérification a pris 3 jours ouvrés et a été acceptée.",
    },
    {
      type: "p",
      text: "Une fois le compte validé, vous avez un IBAN italien directement dans l'application ; si vous en voulez un, vous pouvez vous inscrire avec mon lien d'invitation ci-dessous.",
    },
    { type: "referral", provider: "revolut" },
    {
      type: "callout",
      tone: "warning",
      title: "Uniquement vos vrais documents",
      text: "Aucune page officielle de Revolut que j'ai trouvée ne mentionne l'obligation de la Tessera Sanitaria : c'est une expérience, pas une règle. N'envoyez que vos propres documents authentiques.",
    },

    { type: "h2", id: "compare", text: "4. Intesa, Revolut, Wise ou conto di base : le comparatif" },
    {
      type: "table",
      caption: "Les quatre options pour un étudiant à Rome (prix d'octobre 2026 ; vérifiez chez chaque fournisseur avant de vous inscrire).",
      head: ["Option", "Coût mensuel", "IBAN et documents", "Idéal pour"],
      rows: [
        ["Intesa Sanpaolo XME Conto Silver", "5,90 EUR (2,90 EUR avec un salaire)", "IBAN italien ; codice fiscale, passeport, attestation d'inscription (mon cas)", "Le compte principal pour le loyer, DiSCo et un salaire"],
        ["Revolut", "Standard gratuite ; Plus 3,99 EUR", "IBAN italien pour les résidents en Italie ; pièce d'identité, selfie, adresse italienne", "Un compte rapide dans l'application"],
        ["Wise", "Pas de frais mensuels ; carte 7 EUR une fois", "Coordonnées bancaires en EUR ; pièce d'identité, selfie, adresse dans un pays éligible", "Une carte de secours et un change bon marché"],
        ["Conto di base (Intesa)", "30 EUR par an ; gratuit avec un ISEE inférieur à 11 600 EUR", "IBAN italien ; pièce d'identité, codice fiscale, séjour régulier dans l'UE", "Quand une banque refuse un compte classique"],
      ],
    },

    { type: "h2", id: "wise", text: "5. Wise : la dernière option, la plus simple" },
    {
      type: "p",
      text: "Wise n'est pas une banque, mais son compte vous donne des **coordonnées bancaires en EUR** (émises par Wise Europe à Bruxelles, donc un IBAN belge) et une carte de débit. Il faut une adresse enregistrée dans un pays où Wise propose des coordonnées en EUR (aide Wise).",
    },
    {
      type: "figure",
      src: "/blog/brand/wise-card.webp",
      width: 400,
      height: 500,
      alt: "Une main glisse une carte de débit Wise verte dans une poche de chemise",
      caption: "La carte de débit Wise : pour les résidents en Italie, la carte physique coûte 7 EUR, une seule fois. Image : Wise",
    },
    {
      type: "fees",
      title: "Carte Wise (résidents en Italie, octobre 2026)",
      feeIds: ["wise-card"],
    },
    {
      type: "ul",
      items: [
        "L'inscription et le compte sont gratuits ; la carte physique coûte 7 EUR (frais de la carte Wise).",
        "Les retraits sont gratuits jusqu'à 250 EUR par mois, puis 2,69 % du montant au-delà.",
        "La conversion de devises commence à 0,2 %, selon la devise (tarifs Wise).",
      ],
    },
    {
      type: "p",
      text: "En vous inscrivant avec mon lien d'invitation ci-dessous, vous recevez aussi un transfert sans frais, jusqu'au montant affiché par Wise à l'inscription.",
    },
    { type: "referral", provider: "wise" },
    {
      type: "p",
      text: "L'inscription semble possible en Tunisie, mais la carte Wise n'y est pas disponible (pays de la carte). Je n'ai pas pu confirmer que Wise reçoit des virements en dinars depuis une banque tunisienne : ne prévoyez pas vos virements mensuels sur Wise.",
    },

    { type: "h2", id: "basic-account", text: "6. Le conto di base : votre droit légal à un compte" },
    {
      type: "p",
      text: "La loi italienne (TUB, art. 126-noviesdecies) donne à tout consommateur en séjour régulier dans l'UE le droit à un compte de base, **quel que soit son lieu de résidence**. Le 5 août 2026, la [Banque d'Italie](https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/) a rappelé aux banques que l'accès était parfois bloqué sans raison et que leurs systèmes doivent accepter des documents légitimes comme le **récépissé de la demande de permis de séjour**.",
    },
    {
      type: "fees",
      title: "Conto di base Intesa Sanpaolo (octobre 2026)",
      feeIds: ["intesa-conto-base"],
    },
    {
      type: "p",
      text: "Chez Intesa, le [conto di base](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html) coûte 30 EUR par an et il est gratuit avec un ISEE inférieur à 11 600 EUR. Vous ne devez pas avoir d'autre compte de paiement.",
    },
    {
      type: "p",
      text: "Ce droit n'est pas absolu : les contrôles anti-blanchiment s'appliquent toujours. Si une banque refuse, **demandez le motif par écrit** ; la Banque d'Italie attend des banques qu'elles expliquent leurs refus.",
    },

    { type: "h2", id: "which-to-choose", text: "7. Quel compte ouvrir en premier ?" },
    {
      type: "ul",
      items: [
        "**Compte principal :** Intesa Sanpaolo, dans une agence près de votre campus, dès que vous avez le codice fiscale.",
        "**Besoin d'un IBAN aujourd'hui :** Revolut dans l'application, une fois que vous avez une adresse italienne.",
        "**Carte de secours :** Wise.",
        "**Refusé partout :** demandez un conto di base, avec votre récépissé de permis de séjour.",
      ],
    },
    {
      type: "p",
      text: "Quel que soit votre choix, l'IBAN doit être à votre nom : DiSCo verse la bourse sur votre compte, voir [quand DiSCo paie](article:lazio-disco-scholarship#payments).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Peut-on ouvrir un compte bancaire en Italie avec seulement un passeport et un codice fiscale ?",
          a: "D'après mon expérience, oui, avec une attestation d'inscription : c'est ainsi que j'ai ouvert mon compte Intesa Sanpaolo. Officiellement, Intesa exige un codice fiscale italien pour les étrangers résidant en Italie, et une agence peut demander plus.",
        },
        {
          q: "Quelle est la meilleure banque pour les étudiants étrangers à Rome ?",
          a: "D'après mon expérience et celle d'autres étudiants, Intesa Sanpaolo, dans une agence proche d'une université. Revolut est une bonne alternative mobile une fois que vous vivez en Italie.",
        },
        {
          q: "Revolut donne-t-il un IBAN italien ?",
          a: "Oui, aux clients résidant en Italie. Revolut n'accepte pas les résidents de Tunisie : ouvrez-le après votre arrivée, avec votre adresse italienne.",
        },
        {
          q: "Que faire si une agence refuse d'ouvrir mon compte ?",
          a: "Essayez une autre agence, de préférence près d'un campus : d'après mon expérience, la première agence ne connaissait souvent pas la procédure. Vous pouvez aussi demander un conto di base et exiger tout refus par écrit.",
        },
        {
          q: "Peut-on ouvrir un compte en Italie avant d'arriver ?",
          a: "En pratique, pas chez Intesa ni chez Revolut : Intesa exige un codice fiscale italien et Revolut n'accepte pas les résidents de Tunisie. L'inscription à Wise peut fonctionner en Tunisie, mais sa carte n'y est pas disponible.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Intesa Sanpaolo : FAQ sur l'ouverture de XME Conto con Piano", url: "https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html" },
        { label: "Intesa Sanpaolo : XME Conto Silver", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html" },
        { label: "Intesa Sanpaolo : fiche tarifaire XME Conto Silver (01.10.2026)", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1363.pdf" },
        { label: "Intesa Sanpaolo : conto di base", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html" },
        { label: "Intesa Sanpaolo : fiche tarifaire du conto di base", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1221.pdf" },
        { label: "isybank (groupe Intesa Sanpaolo)", url: "https://www.isybank.com/" },
        { label: "Banque d'Italie : orientations sur le conto di base (5 août 2026)", url: "https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/" },
        { label: "Revolut : obtenir un IBAN italien", url: "https://help.revolut.com/it-IT/help/migration-to-italian-iban/question-getting-an-italian-iban/" },
        { label: "Revolut : pays acceptés", url: "https://help.revolut.com/en-US/help/profile-and-plan/profile-plan/verifying-identity/what-countries-are-supported/" },
        { label: "Wise : tarifs pour les résidents en Italie", url: "https://wise.com/it/pricing/" },
        { label: "Wise : frais de la carte", url: "https://wise.com/it/pricing/card-fees" },
        { label: "Wise : ouvrir des coordonnées bancaires", url: "https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money" },
        { label: "Wise : disponibilité de la carte par pays", url: "https://wise.com/help/articles/2968915/can-i-get-the-wise-card-in-my-country" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les frais sont ceux publiés par les banques en octobre 2026, et l'expérience personnelle de ce guide est la mienne et celle d'autres étudiants, pas une règle officielle. Vérifiez les pages officielles avant d'ouvrir un compte.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Premier choix (mon expérience)", value: "Intesa Sanpaolo, dans une agence près d'une université" },
        { label: "Documents dans mon cas", value: "Codice fiscale, passeport, attestation d'inscription" },
        { label: "IBAN italien dans une appli", value: "Revolut, une fois installé en Italie" },
        { label: "En cas de refus", value: "Demander un conto di base et le motif du refus par écrit" },
      ],
    },
    { type: "h2", id: "settling-path", text: "S'installer à Rome, étape par étape" },
    {
      type: "ol",
      items: [
        "Ouvrir un compte bancaire",
        "[Faire sa residenza à Rome](article:residenza-rome)",
        "[Trouver un job étudiant à Rome](article:student-jobs-rome)",
        "[Les premières démarches après l'arrivée](article:arriving-in-rome)",
      ],
    },
  ],
};
