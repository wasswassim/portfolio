import type { ArticleTranslation } from "../../types";

// French version of en.ts (same heading ids, two fee boxes, two tables). Italian administrative terms stay in Italian.
export const fr: ArticleTranslation = {
  slug: "demander-la-residenza-a-rome",
  title: "Comment demander la residenza à Rome",
  subtitle: "Inscription à l'anagrafe et carta d'identità pour étudiants étrangers",
  seoTitle: "Comment demander la residenza à Rome : guide étudiant",
  metaDescription:
    "S'inscrire à l'anagrafe de Rome, étudiant non européen : documents, envoi en ligne, PEC ou poste, contrôle de la Polizia Locale en 45 jours, carta d'identità.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["demander la residenza à Rome", "residenza anagrafe Rome", "iscrizione anagrafica étranger Rome", "carta d'identità étranger Rome", "residenza étudiant étranger Italie", "TuPassi Rome anagrafe"],
  summary:
    "Pour obtenir la residenza à Rome, vous envoyez une dichiarazione di residenza à Roma Capitale (en ligne avec SPID/CIE/CNS, par PEC, en recommandé ou au guichet) avec votre passeport, votre permesso di soggiorno ou son récépissé (le récépissé d'un premier permis peut ne pas suffire dans tous les Municipi : vérifiez avant) et votre bail ou la déclaration du propriétaire ; c'est gratuit. La commune vous inscrit en 2 jours ouvrables, la Polizia Locale vérifie l'adresse dans les 45 jours, puis vous pouvez demander la carte d'identité électronique (CIE) pour 22,21 EUR.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement",
      text: "Ce guide est purement informatif et ne constitue pas un conseil juridique. Les règles d'inscription, les tarifs et les procédures changent et varient d'un Municipio à l'autre : vérifiez toujours les pages officielles de Roma Capitale citées plus bas avant d'envoyer quoi que ce soit.",
    },
    { type: "p", text: "**Vous avez une chambre et une demande de permis de séjour à Rome. Comment déclarer votre residenza à l'anagrafe, et est-ce que ça vaut la peine ?**" },
    {
      type: "p",
      text: "La réponse courte : remplissez la *dichiarazione di residenza*, joignez votre passeport, votre permesso di soggiorno (ou son récépissé ; celui d'un premier permis peut ne pas suffire dans tous les Municipi : vérifiez avant) et votre bail ou la déclaration du propriétaire, puis envoyez le tout par **un seul** canal : le service en ligne de Roma Capitale, la PEC, la lettre recommandée ou le guichet. C'est gratuit. Vous êtes inscrit en 2 jours ouvrables, et la Polizia Locale vérifie dans les 45 jours que vous habitez vraiment à l'adresse.",
    },
    {
      type: "p",
      text: "Une fois résident, vous pouvez demander la carte d'identité électronique italienne (*carta d'identità elettronica*, CIE). C'est la partie 2 de notre série sur l'installation, après [l'ouverture d'un compte bancaire en Italie pour étudiant](article:bank-account-italy-student).",
    },

    { type: "h2", id: "why-residenza", text: "1. Un étudiant a-t-il besoin de la residenza à Rome ?" },
    {
      type: "p",
      text: "La residenza (*iscrizione anagrafica*) signifie que la commune enregistre votre logement habituel (*dimora abituale*). Ce n'est pas le permesso di soggiorno, que vous demandez d'abord : voir [comment demander le permis de séjour pour études](article:arriving-in-rome#residence-permit). Si vous restez à Rome pendant tout votre diplôme, l'inscription est utile :",
    },
    {
      type: "ul",
      items: [
        "Vous pouvez obtenir des certificats de l'anagrafe et la CIE en tant que résident.",
        "Votre district ASL est clair pour le service national de santé.",
        "La loi demande de déclarer un déménagement dans les **20 jours** (DPR 223/1989, art. 13), et la déclaration est gratuite.",
      ],
    },
    {
      type: "p",
      text: "La résidence aide mais n'est pas strictement obligatoire pour la santé : l'[ASL Roma 1](https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari) accepte une autodéclaration de résidence **ou** de domicile effectif (*effettiva dimora*) pour l'inscription volontaire.",
    },
    {
      type: "fees",
      title: "Inscription volontaire au service national de santé (octobre 2026)",
      feeIds: ["ssn-voluntary"],
      tnd: true,
    },

    { type: "h2", id: "documents", text: "2. Documents pour la residenza à Rome (citoyens non européens)" },
    {
      type: "p",
      text: "Le formulaire est la *dichiarazione di residenza* ministérielle, avec la liste supplémentaire pour les non-Européens (*Allegato A*), sur la [page de Roma Capitale sur le changement de résidence](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3). Remplissez tous les champs marqués d'un astérisque, sinon le dossier est rejeté.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Apportez la carte de séjour, pas seulement le récépissé",
      text: "En pratique, prévoyez de déclarer votre residenza une fois la **carte de séjour** reçue. Le récépissé suffit pour la plupart des autres démarches, mais un récépissé de premier permis peut être refusé à l'anagrafe : vérifiez auprès de votre Municipio avant de réserver.",
    },
    {
      type: "table",
      caption: "Ce qu'il faut joindre à la dichiarazione di residenza (Roma Capitale, Allegato A).",
      head: ["Document", "Remarques"],
      rows: [
        ["Passeport", "Copie d'un passeport valide (DPR 223/1989, art. 14)."],
        ["Permesso di soggiorno", "Copie du permis valide, ou du permis expiré avec le récépissé de la demande de renouvellement."],
        ["Titre de logement", "Votre bail enregistré, ou la déclaration du propriétaire si vous êtes hébergé (*dichiarazione di ospitalità / assenso*) avec sa pièce d'identité."],
        ["Accord des occupants", "Si d'autres personnes vivent déjà dans l'appartement, un adulte signe la page 3 du formulaire."],
        ["E-mail ou PEC", "Recommandé (certains Municipi l'exigent) pour que le bureau puisse vous joindre."],
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Premier permis pas encore délivré ?",
      text: "L'Allegato A prévoit le récépissé d'une première demande pour le travail et le regroupement familial. Nous n'avons pas pu confirmer qu'un récépissé pour études suffit dans chaque Municipio : vérifiez auprès du vôtre avant l'envoi. Sans bail enregistré, il vous faudra la déclaration du propriétaire : voir [comment trouver une chambre avec un vrai contrat](article:student-housing-rome#find-a-room).",
    },
    {
      type: "p",
      text: "Le codice fiscale ne figure pas dans la liste officielle des pièces, mais apportez-le quand même : c'est un conseil pratique, pas une règle.",
    },

    { type: "h2", id: "book-and-submit", text: "3. Envoyer la demande et réserver le guichet de l'anagrafe" },
    {
      type: "p",
      text: "Utilisez **un seul canal**. Envoyer deux fois la même demande ralentit tout.",
    },
    {
      type: "figure",
      src: "/blog/anagrafe-rome.webp",
      width: 1375,
      height: 898,
      alt: "Le temple romain de Portunus devant le grand bâtiment en brique de l'anagrafe, via Luigi Petroselli à Rome",
      caption: "Le bâtiment central de l'anagrafe de Rome, via Luigi Petroselli. Chaque municipio a aussi son propre bureau d'état civil.",
      credit: {
        text: "Photo : Indeciso42, domaine public, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Anagrafe_Roma.jpg",
      },
    },
    { type: "h3", id: "step-online", text: "Étape 1 : en ligne avec SPID, CIE ou CNS" },
    {
      type: "p",
      text: "Le [service en ligne de Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978) couvre aussi les personnes qui arrivent de l'étranger. Vous vous connectez avec SPID, CIE ou CNS et chargez des PDF de 2 Mo maximum chacun.",
    },
    { type: "h3", id: "step-pec-post", text: "Étape 2 : ou par PEC ou lettre recommandée" },
    {
      type: "p",
      text: "Sans identifiant numérique, envoyez le formulaire signé et toutes les pièces **en un seul PDF** par PEC à l'adresse de votre Municipio, ou par lettre recommandée (*raccomandata*). Le simple e-mail n'est plus accepté depuis le 1er mars 2022.",
    },
    { type: "h3", id: "step-counter", text: "Étape 3 : ou au guichet avec TuPassi" },
    {
      type: "p",
      text: "[TuPassi](https://www.tupassi.com/MiroPrenSPID/cliente/cComuneRoma) est le système officiel de rendez-vous et de file d'attente de Roma Capitale pour les guichets de l'anagrafe : réservez en ligne avec SPID, CIE ou CNS, ou prenez un ticket à la borne du bureau. Chaque Municipio l'utilise à sa manière : consultez d'abord la page de votre Municipio.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Pourquoi pas ANPR ?",
      text: "Le [changement de résidence en ligne sur ANPR](https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/) est réservé aux personnes déjà inscrites dans ANPR. Ce n'est pas le cas lors d'une première arrivée de Tunisie : passez par Roma Capitale en ligne, la PEC, la poste ou le guichet.",
    },

    { type: "h2", id: "police-check", text: "4. Le contrôle de la Polizia Locale : ce qui se passe ensuite" },
    {
      type: "table",
      caption: "Calendrier après l'envoi de la déclaration (DL 5/2012, art. 5 ; DPR 223/1989, art. 19).",
      head: ["Quand", "Ce qui se passe"],
      rows: [
        ["Sous 2 jours ouvrables", "La commune vous inscrit."],
        ["Dès la date de la déclaration", "Votre résidence compte à partir du jour de la déclaration."],
        ["Dans les 45 jours", "La Polizia Locale vérifie que vous habitez vraiment à l'adresse."],
        ["Après 45 jours sans avis", "Sans *preavviso di rigetto* (avis de rejet), la résidence est confirmée par *silenzio-assenso*."],
      ],
    },
    {
      type: "figure",
      src: "/blog/polizia-locale-rome-sign.webp",
      width: 1600,
      height: 1106,
      alt: "Une plaque blanche sur une porte en bois : Corpo Polizia Municipale, U.O. I Gruppo, Comune di Roma",
      caption: "Une ancienne plaque de la police municipale de Rome, aujourd'hui appelée Polizia Locale di Roma Capitale. Ce sont ses agents qui vérifient l'adresse.",
      credit: {
        text: "Photo : Wilfredor, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Polizia_locale_di_Roma_Capitale.jpg",
      },
    },
    {
      type: "p",
      text: "Ce qui se passe si personne n'est là lors du contrôle n'est pas décrit dans les sources officielles de Rome. Conseil pratique, pas une règle : mettez votre nom sur la sonnette et la boîte aux lettres, et restez joignable par téléphone et e-mail.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Soyez honnête sur l'adresse",
      text: "Les fausses déclarations sont signalées aux autorités et peuvent entraîner des sanctions pénales (DPR 445/2000, art. 75-76). On ne peut pas s'inscrire dans un logement occupé sans droit.",
    },

    { type: "h2", id: "identity-card", text: "5. La carta d'identità pour les résidents étrangers à Rome" },
    { type: "h3", id: "step-book-cie", text: "Étape 1 : réservez sur le portail du ministère" },
    {
      type: "p",
      text: "Réservez la CIE sur [prenotazionicie.interno.gov.it](https://prenotazionicie.interno.gov.it), dans n'importe quel Municipio. À Rome, elle ne se réserve **pas** via TuPassi ([Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498)). Confirmez le rendez-vous quand l'e-mail de rappel arrive, sinon il est annulé.",
    },
    { type: "h3", id: "step-cie-appointment", text: "Étape 2 : apportez passeport et permis, puis payez" },
    {
      type: "p",
      text: "En tant que citoyen non européen, vous devez présenter votre **passeport et votre permesso di soggiorno** ([Roma Capitale](https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf)). Le paiement se fait par carte ou pagoPA : vérifiez auprès de votre Municipio.",
    },
    {
      type: "fees",
      title: "Carte d'identité électronique à Rome (octobre 2026)",
      feeIds: ["cie-rome"],
      tnd: true,
    },
    { type: "h3", id: "step-cie-delivery", text: "Étape 3 : recevez la carte" },
    {
      type: "p",
      text: "La carte est livrée sous 6 jours ouvrables, à domicile ou à retirer à la commune ([ministère de l'Intérieur](https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/)).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Pas un document de voyage pour les étrangers",
      text: "Pour les résidents étrangers, la CIE est seulement une pièce d'identité et **n'est pas valable pour voyager à l'étranger** (*non costituisce titolo per l'espatrio*). Pour circuler dans l'espace Schengen, il faut votre passeport valide et votre permesso di soggiorno valide, pour 90 jours au maximum sur toute période de 180 jours ([L'Europe est à vous](https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_fr.htm)).",
    },
    {
      type: "p",
      text: "Ce à quoi la CIE sert vraiment : une pièce d'identité italienne à présenter en Italie, et **Entra con CIE**, la connexion aux services publics en ligne avec un code PIN à 8 chiffres et un téléphone NFC ([ministère de l'Intérieur](https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/)).",
    },

    { type: "h2", id: "after-registration", text: "6. Garder sa residenza après chaque renouvellement du permis" },
    {
      type: "p",
      text: "Après **chaque renouvellement** de votre permesso di soggiorno, renouvelez votre *dichiarazione di dimora abituale* à l'anagrafe dans les **60 jours**, avec le nouveau permis (DPR 223/1989, art. 7). Vous restez inscrit pendant le renouvellement du permis.",
    },
    {
      type: "p",
      text: "Si vous oubliez, la commune peut annuler votre résidence un an après l'expiration du permis, après un avis vous laissant 30 jours pour régulariser. En cas de refus, vous pouvez faire un recours auprès du Prefetto dans les 30 jours.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Un étudiant a-t-il besoin de la residenza à Rome ?",
          a: "Ce n'est pas strictement obligatoire, mais c'est utile si vous restez pour tout votre diplôme. Elle permet d'obtenir la CIE et des certificats, et l'ASL Roma 1 accepte la résidence ou le domicile effectif pour la santé.",
        },
        {
          q: "Combien de temps dure le contrôle de la residenza ?",
          a: "Jusqu'à 45 jours. La commune vous inscrit en 2 jours ouvrables, la Polizia Locale vérifie l'adresse dans les 45 jours et, sans avis de rejet, la résidence est confirmée.",
        },
        {
          q: "Peut-on voyager en Europe avec une carte d'identité italienne ?",
          a: "Non, pas en tant que citoyen étranger. Pour vous, la CIE n'est pas valable pour voyager à l'étranger : voyagez avec votre passeport et votre permesso di soggiorno valide, 90 jours au maximum sur 180.",
        },
        {
          q: "TuPassi sert-il à réserver la carte d'identité ?",
          a: "Non. TuPassi sert aux guichets de l'anagrafe dans de nombreux Municipi, mais la CIE se réserve uniquement sur prenotazionicie.interno.gov.it.",
        },
        {
          q: "Peut-on envoyer sa demande de residenza par e-mail ?",
          a: "Non, le simple e-mail n'est plus accepté depuis le 1er mars 2022. Utilisez le service en ligne, la PEC, la lettre recommandée ou le guichet.",
        },
        {
          q: "Combien coûte la residenza à Rome ?",
          a: "Rien : la déclaration de résidence est gratuite. La CIE coûte 22,21 EUR à Rome (27,37 EUR en cas de perte).",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Roma Capitale : changement de résidence (formulaire et Allegato A)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale : changement de résidence en ligne (SPID, CIE, CNS)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978" },
        { label: "Roma Capitale, Municipio XIII : guide de la résidence (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun13_Guida_Residenza_Avviso_Italiano_agg_03.03.22_-unito.pdf" },
        { label: "Roma Capitale : système de réservation TuPassi", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF781945" },
        { label: "Roma Capitale, Municipio VIII : charte des services démographiques (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun08_CdS_SERVIZI_DEMOGRAFICI_Agg_18_01_2024-_AGGIORNATO.pdf" },
        { label: "ANPR : changement de résidence", url: "https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/" },
        { label: "Normattiva : DL 5/2012, art. 5 (résidence en temps réel)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-02-09;5~art5" },
        { label: "DPR 223/1989 (règlement de l'anagrafe, PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Roma Capitale : réservation de la CIE (pas via TuPassi)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498" },
        { label: "Roma Capitale : coût de la CIE", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF141252&pagina=5" },
        { label: "Roma Capitale : cartes d'identité électroniques (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf" },
        { label: "Ministère de l'Intérieur : délivrance et renouvellement de la CIE", url: "https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/" },
        { label: "Ministère de l'Intérieur : Entra con CIE", url: "https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/" },
        { label: "ASL Roma 1 : soins pour les citoyens non européens", url: "https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari" },
        { label: "EUR-Lex : code frontières Schengen, règlement (UE) 2016/399", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0399" },
        { label: "L'Europe est à vous : documents de voyage pour les ressortissants non européens", url: "https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_fr.htm" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les procédures varient d'un Municipio à l'autre et peuvent changer ; consultez la page de votre Municipio sur comune.roma.it avant d'envoyer votre déclaration ou de réserver un guichet.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Coût", value: "La déclaration de résidence est gratuite" },
        { label: "Envoi", value: "Un seul canal : en ligne (SPID/CIE/CNS), PEC, recommandé ou guichet" },
        { label: "Contrôle de l'adresse", value: "Polizia Locale, dans les 45 jours" },
        { label: "CIE à Rome", value: "22,21 EUR, sur prenotazionicie.interno.gov.it, non valable pour voyager pour les étrangers" },
      ],
    },
    { type: "h2", id: "settling-path", text: "S'installer à Rome, étape par étape" },
    {
      type: "ol",
      items: [
        "[Ouvrir un compte bancaire en Italie](article:bank-account-italy-student)",
        "Residenza et carte d'identité",
        "[Trouver un job étudiant à Rome](article:student-jobs-rome)",
        "[Vos 30 premiers jours à Rome](article:arriving-in-rome)",
      ],
    },
  ],
};
