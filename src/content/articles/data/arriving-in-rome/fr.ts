import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms stay in Italian.
export const fr: ArticleTranslation = {
  slug: "arrivee-a-rome-etudiant",
  title: "Arriver à Rome étudiant : permis de séjour étudiant en Italie et 30 premiers jours, pour les Tunisiens",
  seoTitle: "Permis de séjour étudiant Italie : 30 premiers jours à Rome",
  metaDescription:
    "Arriver à Rome étudiant pour les Tunisiens : kit du permis de séjour sous 8 jours ouvrables, codice fiscale, compte bancaire, inscription, DiSCo et budget.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["permis de séjour étudiant Italie", "arriver à Rome étudiant", "permesso di soggiorno per studio", "codice fiscale", "compte bancaire étudiant Italie", "travailler en Italie étudiant"],
  summary:
    "Dans les 8 jours ouvrables qui suivent votre arrivée en Italie, vous demandez votre permis de séjour pour études en envoyant le kit à bande jaune depuis un bureau de poste doté d’un Sportello Amico (environ 116,46 EUR au total) ; le codice fiscale est attribué avec cette demande. Ouvrez ensuite un compte, finalisez votre inscription, envoyez vos papiers d’inscription à votre banque en Tunisie et terminez vos démarches DiSCo.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d’information et ne constitue pas un conseil juridique. Les règles de séjour, les frais et les procédures des universités peuvent changer : vérifiez toujours les sources officielles indiquées ci-dessous avant de payer ou de signer quoi que ce soit.",
    },
    { type: "p", text: "**Vous venez d’atterrir à Rome avec votre visa d’études. Que devez-vous faire, et dans quel ordre, pendant votre premier mois ?**" },
    {
      type: "p",
      text: "La réponse courte : dans les 8 jours ouvrables suivant votre arrivée, demandez votre permis de séjour pour études (permesso di soggiorno per studio) dans un bureau de poste. Votre codice fiscale est attribué avec cette demande, et le récépissé de la poste vous permet d’ouvrir un compte, de finaliser votre inscription et de terminer vos démarches DiSCo.",
    },
    {
      type: "p",
      text: "C’est la partie 6 de notre [guide pour étudier en Italie pour les Tunisiens](article:study-in-italy), après le visa : vos 30 premiers jours à Rome, étape par étape.",
    },

    { type: "h2", id: "first-30-days", text: "1. Vos 30 premiers jours à Rome, dans l’ordre" },
    {
      type: "ol",
      items: [
        "Dans les 8 jours ouvrables : envoyez le kit du permis de séjour depuis un bureau de poste.",
        "Seulement si un propriétaire ou une banque en a besoin plus tôt : demandez votre codice fiscale à l’Agenzia delle Entrate.",
        "Ouvrez une carte Postepay Evolution ou un compte bancaire.",
        "Finalisez votre inscription à l’université.",
        "Envoyez vos papiers d’inscription à votre banque en Tunisie.",
        "DiSCo : téléversez le récépissé du permis, réservez un CAF partenaire, signez l’ISEEUP, ajoutez votre IBAN et votre PEC.",
        "Choisissez votre couverture santé, puis cherchez un job étudiant.",
      ],
    },

    { type: "h2", id: "residence-permit", text: "2. Comment demander le permis de séjour étudiant en Italie ?" },
    {
      type: "p",
      text: "Vous devez faire la demande dans les **8 jours ouvrables** suivant votre entrée en Italie ([Polizia di Stato](https://www.poliziadistato.it/articolo/225)).",
    },
    { type: "h3", id: "step-postal-kit", text: "Étape 1 : récupérer le kit à bande jaune" },
    {
      type: "p",
      text: "Rendez-vous dans un bureau de poste doté d’un guichet **Sportello Amico** et demandez le kit du permis de séjour, l’enveloppe à bande jaune. [Poste Italiane](https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno) explique comment le remplir. Écrivez votre nom exactement comme sur votre passeport.",
    },
    { type: "h3", id: "step-kit-contents", text: "Étape 2 : mettre les bons documents dans l’enveloppe" },
    {
      type: "ul",
      items: [
        "Le formulaire de demande du kit, rempli.",
        "Une copie de votre passeport, y compris la page du visa.",
        "Une copie de votre assurance santé, valable pour toute la durée du permis, et la preuve de vos moyens financiers (votre bureau international peut confirmer la liste complète).",
        "Un timbre fiscal (marca da bollo) de 16 EUR, acheté dans un bureau de tabac.",
      ],
    },
    { type: "h3", id: "step-pay-receipt", text: "Étape 3 : payer et garder le récépissé" },
    {
      type: "table",
      caption: "Ce que coûte la demande de permis de séjour à la poste (montants vérifiés en octobre 2026).",
      head: ["Poste de dépense", "Coût"],
      rows: [
        ["Timbre fiscal (marca da bollo)", "16 EUR"],
        ["Frais de service postal", "30 EUR"],
        ["Bollettino : carte électronique 30,46 EUR + contribution 40 EUR (permis de 3 à 12 mois)", "70,46 EUR"],
        ["**Total**", "**environ 116,46 EUR**"],
      ],
    },
    {
      type: "p",
      text: "Le guichetier vous remet un **récépissé** avec un identifiant et un mot de passe. Gardez-le avec votre passeport : votre université, la banque et DiSCo vous le demanderont.",
    },
    { type: "h3", id: "step-questura", text: "Étape 4 : aller à la Questura pour les empreintes" },
    {
      type: "p",
      text: "Vous recevez aussi une convocation avec votre rendez-vous à la Questura, où l’on relève vos empreintes digitales. Suivez l’état de votre permis sur le [portail de la Polizia di Stato](https://questure.poliziadistato.it/stranieri/) avec les données de votre récépissé. La Polizia indique environ 60 jours de traitement ; la Sapienza prévient que cela peut prendre environ 90 jours.",
    },
    {
      type: "figure",
      src: "/blog/questura-verbania.webp",
      width: 1600,
      height: 1067,
      alt: "Le bâtiment de la Questura de Verbania, en Italie, avec les drapeaux italien et européen à l’entrée",
      caption: "Une Questura (préfecture de police provinciale), le bureau qui gère les permis de séjour.",
      credit: {
        text: "Photo : Francoerbi, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Verbania_Questura_del_VCO.jpg",
      },
    },
    {
      type: "callout",
      tone: "warning",
      title: "Ne quittez pas l’Italie avant d’avoir le permis",
      text: "L’Ambassade d’Italie à Tunis conseille aux étudiants de ne pas quitter l’Italie tant que le permis de séjour n’a pas été délivré.",
    },
    {
      type: "p",
      text: "Les étudiants de la Sapienza peuvent se faire aider sur le campus : sa [page sur le permis de séjour](https://www.uniroma1.it/en/pagina/residence-permit-study-purposes) indique le guichet de police du campus et le bureau immigration de la Questura (Via Teofilo Patini 23).",
    },

    { type: "h2", id: "codice-fiscale", text: "3. Comment obtenir votre codice fiscale ?" },
    {
      type: "p",
      text: "Le codice fiscale est votre code fiscal italien, nécessaire pour un bail, une banque ou un abonnement téléphonique. En général, vous n’avez pas à le demander : la Questura l’attribue avec votre demande de permis.",
    },
    {
      type: "p",
      text: "Si vous en avez besoin plus tôt, allez dans n’importe quel bureau de l’**Agenzia delle Entrate** avec le formulaire AA4/8 et votre passeport avec le visa. Le [dépliant de l’Agenzia delle Entrate pour les citoyens étrangers](https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716) explique la procédure. À la Sapienza, le guichet HELLO peut vous aider à remplir les formulaires.",
    },

    { type: "h2", id: "bank-account", text: "4. Ouvrir un compte bancaire étudiant en Italie" },
    {
      type: "p",
      text: "Il vous faut un IBAN pour DiSCo, le loyer et un salaire. Deux options courantes :",
    },
    {
      type: "ul",
      items: [
        "**Postepay Evolution** : une carte prépayée avec IBAN, 5 EUR à l’émission puis 19 EUR par an ([Poste Italiane](https://www.poste.it/carte-postepay/postepay-evolution)).",
        "**Un compte bancaire** : les banques demandent votre codice fiscale ; comparez les frais mensuels.",
      ],
    },
    {
      type: "p",
      text: "Selon la [Banca d’Italia](https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html), toute personne en séjour régulier dans l’UE a droit à un compte de base (conto di base), et une banque ne peut pas refuser le récépissé du permis de séjour comme pièce d’identité.",
    },

    { type: "h2", id: "finalise-enrolment", text: "5. Finaliser l’inscription et votre dossier de bourse" },
    {
      type: "p",
      text: "L’inscription n’est complète qu’une fois vos originaux vérifiés par l’université :",
    },
    {
      type: "ul",
      items: [
        "**Sapienza** : envoyez le récépissé du permis à l’[International Student Office](https://www.uniroma1.it/en/pagina/international-student-office), puis prenez rendez-vous pour la vérification de vos originaux.",
        "**Tor Vergata** : présentez votre visa, vos originaux et votre permis (ou le récépissé) à l’International Students Office, puis payez la première tranche ([documents demandés](https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/)).",
        "**Roma Tre** : prenez rendez-vous au bureau des diplômes étrangers, Via Ostiense 129, avec vos originaux ([inscription des non-européens](https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/)).",
      ],
    },
    { type: "h3", id: "unlock-transfers", text: "Débloquer les virements mensuels de votre banque tunisienne" },
    {
      type: "p",
      text: "Une fois inscrit, envoyez vos papiers d’inscription à votre banque en Tunisie. La banque peut alors autoriser vos parents à virer jusqu’à **4 000 TND par mois** (environ 1 188 EUR au taux BCT du 7 octobre 2026), comme expliqué dans la [section sur le compte bloqué](article:italy-student-visa#blocked-account).",
    },
    { type: "h3", id: "disco-after-arrival", text: "Terminer vos démarches DiSCo" },
    {
      type: "ul",
      items: [
        "Téléversez votre permis de séjour ou le récépissé de la poste dans votre Profil DiSCo vers le 1er décembre si vous avez demandé un logement, sinon vers le 10 février (à vérifier dans l’appel 2027/28).",
        "Prenez rendez-vous dans un [CAF partenaire de DiSCo](https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf) et signez votre ISEEUP vers le 10 décembre (à vérifier dans l’appel 2027/28).",
        "Ajoutez votre IBAN et une adresse PEC (courriel certifié) dans votre Profil.",
      ],
    },
    {
      type: "p",
      text: "Si l’ISEEUP est fait correctement, les premiers paiements suivent ; voir [quand DiSCo verse la bourse](article:lazio-disco-scholarship#payments).",
    },
    { type: "h3", id: "health-cover", text: "Choisir votre couverture santé" },
    {
      type: "p",
      text: "Inscrivez-vous volontairement au service national de santé (SSN) pour environ 700 EUR par an ([Tor Vergata, 2024](https://web.uniroma2.it/en/contenuto/health-insurance)), ou gardez une assurance privée. Vérifiez le montant actuel auprès de votre ASL ou de votre université.",
    },

    { type: "h2", id: "first-month-budget", text: "6. Budget du premier mois à Rome" },
    {
      type: "p",
      text: "Votre banque en Tunisie peut envoyer une allocation d’installation allant jusqu’à **6 000 TND** par année universitaire (environ 1 782 EUR au taux BCT du 7 octobre 2026). Les virements mensuels ne commencent qu’après l’arrivée de vos papiers d’inscription à la banque : cet argent doit tenir jusque-là.",
    },
    {
      type: "table",
      caption: "Comment dépenser prudemment l’allocation d’installation de 6 000 TND (seuls les deux premiers montants sont confirmés).",
      head: ["Dépense", "Coût", "Conseil"],
      rows: [
        ["Kit du permis de séjour", "Environ 116 EUR (confirmé)", "Payez-le en premier, dès la première semaine."],
        ["Postepay Evolution", "5 EUR + 19 EUR par an (confirmé)", "Vous donne un IBAN pour DiSCo et le loyer."],
        ["Abonnement de transport", "Vérifiez les prix actuels", "Comparez les abonnements mensuels et étudiants sur le site de l’ATAC."],
        ["Carte SIM et premier mois", "Vérifiez les prix actuels", "Comparez les offres avant d’acheter."],
        ["Nourriture du mois", "Vérifiez les prix actuels", "Cuisinez chez vous ; les repas DiSCo ne commencent qu’une fois la bourse attribuée."],
        ["Chambre : premier loyer et caution", "Vérifiez les prix actuels", "Voir notre [guide du logement étudiant à Rome](article:student-housing-rome)."],
        ["Réserve d’urgence", "10 à 15 % de l’allocation", "N’y touchez qu’en cas de besoin."],
      ],
    },
    {
      type: "p",
      text: "Achetez d’occasion sur [Subito](https://www.subito.it) : meubles, vélo, livres. Et ne payez jamais de caution avant d’avoir vu la chambre ; lisez [comment éviter les arnaques au logement](article:student-housing-rome#avoid-scams).",
    },

    { type: "h2", id: "student-work", text: "7. Peut-on travailler pendant ses études en Italie ?" },
    {
      type: "p",
      text: "Oui, dans certaines limites : le permis étudiant autorise jusqu’à **20 heures par semaine**, dans la limite de **1 040 heures par an** ([DPR 394/1999, art. 14](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14)). Si vous n’avez que le récépissé du premier permis, vérifiez auprès de la Questura ou de votre université avant de commencer un emploi.",
    },
    {
      type: "ul",
      items: [
        "Services emploi des universités : [Sapienza](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio), [Tor Vergata](https://placement.uniroma2.it/), [Roma Tre](https://uniroma3.jobsoul.it/studenti-e-laureati/ufficio-job-placement).",
        "Regione Lazio : [offres d’emploi](https://www.regione.lazio.it/cittadini/lavoro/offerte-lavoro) et [SpazioLavoro](https://spaziolavoro.regione.lazio.it/).",
        "Sites d’emploi : [annonces d’emploi Subito](https://www.subito.it/annunci-italia/vendita/offerte-lavoro/), [InfoJobs](https://www.infojobs.it), [Indeed](https://it.indeed.com).",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Évitez le travail non déclaré",
      text: "Le travail non déclaré (lavoro nero) vous laisse sans assurance ni protection juridique. Lisez la [page du ministère du Travail sur l’exploitation au travail](https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default) et demandez un contrat écrit.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Combien de jours ai-je pour demander le permesso di soggiorno ?",
          a: "8 jours ouvrables à partir de votre arrivée en Italie. Vous faites la demande en envoyant le kit à bande jaune depuis un bureau de poste doté d’un guichet Sportello Amico.",
        },
        {
          q: "Combien coûte le permis de séjour pour études ?",
          a: "Environ 116,46 EUR à la poste : un timbre fiscal de 16 EUR, des frais postaux de 30 EUR et un bollettino de 70,46 EUR (montants vérifiés en octobre 2026).",
        },
        {
          q: "Comment obtenir un codice fiscale à Rome ?",
          a: "Il est normalement attribué avec votre demande de permis de séjour. Si vous en avez besoin plus tôt, allez dans un bureau de l’Agenzia delle Entrate avec le formulaire AA4/8 et votre passeport avec le visa.",
        },
        {
          q: "Peut-on ouvrir un compte bancaire avec le récépissé du permis ?",
          a: "Oui. Selon la Banca d’Italia, une banque ne peut pas refuser le récépissé du permis de séjour comme pièce d’identité, et toute personne en séjour régulier dans l’UE a droit à un compte de base.",
        },
        {
          q: "Puis-je rentrer en Tunisie en attendant mon permis ?",
          a: "L’Ambassade d’Italie à Tunis déconseille de quitter l’Italie avant la délivrance du permis de séjour. Prévoyez vos voyages après l’avoir retiré.",
        },
        {
          q: "Les étudiants étrangers peuvent-ils travailler en Italie ?",
          a: "Oui, jusqu’à 20 heures par semaine et 1 040 heures par an. Si vous n’avez que le récépissé du premier permis, vérifiez auprès de la Questura ou de votre université avant de commencer.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Polizia di Stato : permis de séjour pour études", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Polizia di Stato : suivi du permis de séjour", url: "https://questure.poliziadistato.it/stranieri/" },
        { label: "Poste Italiane : délivrance et renouvellement du permis de séjour", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Sapienza : permis de séjour pour études", url: "https://www.uniroma1.it/en/pagina/residence-permit-study-purposes" },
        {
          label: "Agenzia delle Entrate : codice fiscale pour les citoyens étrangers (dépliant)",
          url: "https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716",
        },
        { label: "Banca d’Italia : le compte de base (conto di base)", url: "https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html" },
        { label: "Poste Italiane : Postepay Evolution", url: "https://www.poste.it/carte-postepay/postepay-evolution" },
        { label: "Sapienza : International Student Office", url: "https://www.uniroma1.it/en/pagina/international-student-office" },
        { label: "Tor Vergata : documents demandés pour l’inscription avec un diplôme étranger", url: "https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/" },
        { label: "Roma Tre : inscription des citoyens non européens", url: "https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/" },
        { label: "Tor Vergata : assurance santé", url: "https://web.uniroma2.it/en/contenuto/health-insurance" },
        { label: "DiSCo Lazio : FAQ pour les étudiants internationaux (2026/27)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "Banque Centrale de Tunisie : circulaire 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "Normattiva : DPR 394/1999, art. 14 (travail des étudiants)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14" },
        {
          label: "Ministère italien du Travail : lutte contre l’exploitation au travail",
          url: "https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les montants sont ceux publiés en 2026 ; les dates DiSCo sont projetées pour 2027/28 et doivent être confirmées dans le nouvel appel. Vérifiez les pages officielles avant de payer ou de voyager.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Permis de séjour", value: "Demande dans les 8 jours ouvrables suivant l’arrivée, à la poste" },
        { label: "Coût du kit", value: "Environ 116,46 EUR (2026)" },
        { label: "Codice fiscale", value: "Attribué avec la demande de permis, ou plus tôt à l’Agenzia delle Entrate" },
        { label: "Job étudiant", value: "Jusqu’à 20 heures par semaine, 1 040 heures par an" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "Le parcours complet en bref" },
    {
      type: "ol",
      items: [
        "[Planifier et calendrier](article:study-in-italy)",
        "[Choisir une université et candidater](article:apply-university-rome)",
        "[Préparer et traduire les documents](article:documents-for-italy)",
        "[Bourse DiSCo](article:lazio-disco-scholarship)",
        "[Visa et compte bloqué](article:italy-student-visa)",
        "Arrivée à Rome",
        "[Logement](article:student-housing-rome)",
      ],
    },
  ],
};
