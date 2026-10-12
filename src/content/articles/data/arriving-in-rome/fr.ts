import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms stay in Italian.
export const fr: ArticleTranslation = {
  slug: "arrivee-a-rome-etudiant",
  title: "Permis de séjour étudiant en Italie : arriver à Rome",
  subtitle: "Vos 30 premiers jours à Rome pour les étudiants tunisiens : kit du permis, codice fiscale, inscription, DiSCo et premier budget",
  seoTitle: "Permis de séjour étudiant Italie : 30 premiers jours à Rome",
  metaDescription:
    "Demandez votre permis de séjour étudiant en Italie sous 8 jours ouvrables : kit postal à 116,46 EUR, empreintes à la Questura, codice fiscale et DiSCo.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["permis de séjour étudiant en Italie", "permesso di soggiorno per studio", "titre de séjour étudiant Italie", "kit du permis de séjour à la poste", "codice fiscale étudiant Italie", "arriver à Rome étudiant"],
  summary:
    "Vous demandez le permis de séjour étudiant en Italie dans les 8 jours ouvrables suivant votre arrivée, en envoyant le kit à bande jaune depuis un bureau de poste doté d’un guichet Sportello Amico (environ 116,46 EUR en 2026), et le codice fiscale est attribué avec cette demande. Avec le récépissé de la poste, vous ouvrez ensuite un compte, finalisez votre inscription, envoyez vos papiers d’inscription à votre banque en Tunisie et terminez vos démarches DiSCo.",
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
      text: "C’est la partie 6 de notre [guide pour étudier en Italie pour les Tunisiens](article:study-in-italy). Elle commence là où s’arrête [le guide du visa étudiant pour l’Italie pour les Tunisiens](article:italy-student-visa) : vos 30 premiers jours à Rome, étape par étape.",
    },

    { type: "h2", id: "first-30-days", text: "1. Que faire pendant vos 30 premiers jours à Rome ?" },
    {
      type: "p",
      text: "Pendant vos 30 premiers jours à Rome, le permis de séjour pour études passe en premier : envoyez le kit postal dans les 8 jours ouvrables, puis ouvrez un compte, finalisez votre inscription et terminez vos démarches DiSCo, dans cet ordre :",
    },
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
      text: "Vous demandez le permis de séjour pour études (permesso di soggiorno per studio) dans un bureau de poste doté d’un guichet Sportello Amico, dans les **8 jours ouvrables** suivant votre entrée en Italie ([Polizia di Stato](https://www.poliziadistato.it/articolo/225)). La demande se fait en quatre étapes : le kit, les documents, le paiement et le rendez-vous à la Questura.",
    },
    {
      type: "figure",
      src: "/blog/post-office-rome.webp",
      width: 1600,
      height: 1187,
      alt: "La poste centrale de la Piazza di San Silvestro à Rome sous un ciel bleu",
      caption: "La poste centrale de Rome, Piazza di San Silvestro. Le kit du permis de séjour se dépose dans un bureau de poste doté d'un guichet Sportello Amico.",
      credit: {
        text: "Photo : Frank C. Müller, Baden-Baden, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Rom_2013_014_Piazza_di_San_Silvestro_Ufficio_Postale_(fcm).jpg",
      },
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
      type: "fees",
      title: "Ce que coûte la demande de permis de séjour à la poste",
      text: "Pour un permis de plus d'un an et jusqu'à 2 ans, la contribution est de 50 EUR, soit 126,46 EUR au total. Demandez au guichet quels moyens de paiement sont acceptés.",
      feeIds: ["permit-stamp", "permit-postal", "permit-card", "permit-contribution-1y"],
      total: true,
      hub: true,
    },
    {
      type: "p",
      text: "Le guichetier de la poste vous remet un **récépissé** avec un identifiant et un mot de passe. Gardez le récépissé avec votre passeport : votre université, la banque et DiSCo vous le demanderont.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Gardez le récépissé sur vous",
      text: "À partir de maintenant, présentez le **récépissé (ricevuta)** avec votre passeport pour toute démarche : ouverture d'un compte bancaire, abonnement téléphonique, codice fiscale, contrat de travail, DiSCo. Tant que la carte n'est pas arrivée, c'est le récépissé qui prouve votre demande. Gardez l'original en lieu sûr et ayez aussi une copie sur vous.",
    },
    { type: "h3", id: "step-questura", text: "Étape 4 : aller à la Questura pour les empreintes" },
    {
      type: "p",
      text: "À la poste, vous recevez aussi une convocation avec votre rendez-vous à la Questura, où l’on relève vos empreintes digitales. Suivez l’état de votre permis sur le [portail de la Polizia di Stato](https://questure.poliziadistato.it/stranieri/) avec les données de votre récépissé. La Polizia di Stato indique environ 60 jours de traitement ; la Sapienza prévient que cela peut prendre environ 90 jours.",
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

    {
      type: "p",
      text: "Une fois que vous avez un bail et le récépissé de votre permis, vous pouvez aussi déclarer votre résidence à l'anagrafe de Rome, une démarche à part expliquée dans [comment demander la residenza à Rome](article:residenza-rome).",
    },

    { type: "h2", id: "codice-fiscale", text: "3. Comment obtenir un codice fiscale quand on est étudiant en Italie ?" },
    {
      type: "p",
      text: "En général, vous n’avez pas à demander le codice fiscale : la Questura l’attribue avec votre demande de permis de séjour. Le codice fiscale est votre code fiscal italien, nécessaire pour un bail, une banque ou un abonnement téléphonique.",
    },
    {
      type: "p",
      text: "Si vous en avez besoin plus tôt, allez dans n’importe quel bureau de l’**Agenzia delle Entrate** avec le formulaire AA4/8 et votre passeport avec le visa. Le [dépliant de l’Agenzia delle Entrate pour les citoyens étrangers](https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716) explique la procédure. À la Sapienza, le guichet HELLO peut vous aider à remplir les formulaires.",
    },

    { type: "h2", id: "bank-account", text: "4. Pourquoi faut-il un IBAN dès les premières semaines ?" },
    {
      type: "p",
      text: "Il vous faut un IBAN italien dès les premières semaines, car DiSCo, votre loyer et un éventuel salaire passent tous par lui.",
    },
    {
      type: "p",
      text: "Vous pouvez choisir une banque (Intesa Sanpaolo et d'autres), un compte en ligne (Revolut, Wise) ou la carte prépayée Postepay Evolution avec un IBAN. Les banques demandent votre codice fiscale. Les documents, l'ordre dans lequel essayer et que faire si une agence refuse sont expliqués dans [comment ouvrir un compte bancaire en Italie quand on est étudiant](article:bank-account-italy-student).",
    },
    {
      type: "fees",
      title: "Coût de la Postepay Evolution",
      feeIds: ["postepay-issue", "postepay-year"],
    },
    {
      type: "p",
      text: "Selon la [Banca d’Italia](https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html), toute personne en séjour régulier dans l’UE a droit à un compte de base (conto di base), et ses orientations d’août 2026 demandent aux banques d’accepter le récépissé du permis de séjour pour ce compte.",
    },

    { type: "h2", id: "finalise-enrolment", text: "5. Comment finaliser l’inscription et votre dossier DiSCo après l’arrivée ?" },
    {
      type: "p",
      text: "L’inscription dans une université de Rome n’est complète qu’une fois vos documents originaux vérifiés par l’université, et la Sapienza, Tor Vergata et Roma Tre organisent cette vérification chacune à leur manière :",
    },
    {
      type: "callout",
      tone: "note",
      title: "Inscription et récépissé",
      text: "Pour finaliser l'inscription, apportez le récépissé si vous l'avez déjà : c'est utile, mais d'après mon expérience l'université ne l'exige pas.",
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
      text: "Vous n’êtes pas obligé de vous inscrire au service national de santé (SSN), qui coûte environ 700 EUR par an ([Tor Vergata, 2024](https://web.uniroma2.it/en/contenuto/health-insurance)) : une assurance santé privée valable en Italie pendant toute la durée de votre permis est acceptée à la place. D’après mon expérience, une assurance santé souscrite en Tunisie, par exemple auprès de votre banque tunisienne lors de l’ouverture du dossier études, remplace l’inscription au SSN à 700 EUR ; vérifiez qu’elle couvre l’Italie pendant toute la durée du permis. Vérifiez le montant actuel du SSN auprès de votre ASL ou de votre université.",
    },
    {
      type: "fees",
      title: "Inscription au SSN (seulement si vous la choisissez)",
      feeIds: ["ssn-voluntary"],
    },

    { type: "h2", id: "first-month-budget", text: "6. Combien d’argent prévoir pour le premier mois à Rome ?" },
    {
      type: "p",
      text: "Votre premier mois à Rome repose sur l’allocation d’installation : votre banque en Tunisie peut envoyer jusqu’à **6 000 TND** par année universitaire (environ 1 782 EUR au taux BCT du 7 octobre 2026). Les virements mensuels ne commencent qu’après l’arrivée de vos papiers d’inscription à la banque : l’allocation d’installation doit tenir jusque-là.",
    },
    {
      type: "figure",
      src: "/blog/tram-rome.webp",
      width: 1600,
      height: 1067,
      alt: "Un tram vert et argent de la ligne 8 au Largo di Torre Argentina à Rome",
      caption: "Un tram de la ligne 8 au Largo di Torre Argentina. Vérifiez le prix actuel de l'abonnement mensuel ATAC avant de faire votre budget.",
      credit: {
        text: "Photo : Mariordo (Mario Roberto Durán Ortiz), CC BY-SA 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Roma_ATAC_tram_04_2016_6386.JPG",
      },
    },
    {
      type: "table",
      caption: "Comment dépenser prudemment l’allocation d’installation de 6 000 TND (seuls les trois premiers montants sont confirmés).",
      head: ["Dépense", "Coût", "Conseil"],
      rows: [
        ["Kit du permis de séjour", "Environ 116 EUR (confirmé)", "Payez-le en premier, dès la première semaine."],
        ["Postepay Evolution", "5 EUR + 19 EUR par an (confirmé)", "Vous donne un IBAN pour DiSCo et le loyer."],
        ["Abonnement de transport", "35 EUR par mois ou 250 EUR par an (confirmé)", "Vérifiez les offres étudiantes sur le site de l’ATAC."],
        ["Carte SIM et premier mois", "Vérifiez les prix actuels", "Comparez les offres avant d’acheter."],
        ["Nourriture du mois", "Vérifiez les prix actuels", "Cuisinez chez vous ; les repas DiSCo ne commencent qu’une fois la bourse attribuée."],
        ["Chambre : premier loyer et caution", "Vérifiez les prix actuels", "Prévoyez ensemble le premier loyer et la caution."],
        ["Réserve d’urgence", "10 à 15 % de l’allocation", "N’y touchez qu’en cas de besoin."],
      ],
    },
    {
      type: "fees",
      title: "Abonnements de transport à Rome (ATAC)",
      feeIds: ["atac-monthly", "atac-annual"],
    },
    {
      type: "p",
      text: "Achetez d’occasion sur [Subito](https://www.subito.it) : meubles, vélo, livres. Et ne payez jamais la caution d’une chambre avant de l’avoir vue ; lisez [comment éviter les arnaques au logement étudiant à Rome](article:student-housing-rome#avoid-scams).",
    },

    { type: "h2", id: "student-work", text: "7. Peut-on travailler avec un permis de séjour étudiant en Italie ?" },
    {
      type: "p",
      text: "Oui, dans certaines limites : le permis de séjour pour études autorise jusqu’à **20 heures par semaine**, dans la limite de **1 040 heures par an** ([DPR 394/1999, art. 14](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14)). Vous pouvez commencer à travailler avec le récépissé (ricevuta) en attendant la carte.",
    },
    {
      type: "p",
      text: "Où chercher (Subito, Indeed, agences d'intérim, services emploi des universités), comment publier votre profil et comment repérer les fausses offres : voir [comment trouver un job étudiant à Rome](article:student-jobs-rome).",
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
          a: "8 jours ouvrables à partir de votre arrivée en Italie, selon la Polizia di Stato. Vous faites la demande en envoyant le kit du permis de séjour à bande jaune depuis un bureau de poste doté d’un guichet Sportello Amico, avec une copie du passeport et du visa, votre assurance santé, la preuve de vos moyens et un timbre fiscal de 16 EUR. Le récépissé de la poste prouve ensuite votre demande jusqu’à l’arrivée de la carte.",
        },
        {
          q: "Combien coûte le permis de séjour pour études ?",
          a: "Environ 116,46 EUR à la poste pour un permis de 3 à 12 mois : un timbre fiscal de 16 EUR, des frais postaux de 30 EUR et un bollettino de 70,46 EUR (montants vérifiés en octobre 2026). Pour un permis de plus d'un an et jusqu'à 2 ans, la contribution est de 50 EUR, soit 126,46 EUR au total. Demandez au guichet quels moyens de paiement sont acceptés.",
        },
        {
          q: "Comment obtenir un codice fiscale à Rome ?",
          a: "En général, vous n’avez pas à le demander : la Questura attribue le codice fiscale avec votre demande de permis de séjour. Si un propriétaire ou une banque a besoin du codice fiscale plus tôt, allez dans un bureau de l’Agenzia delle Entrate avec le formulaire AA4/8 et votre passeport avec le visa. À la Sapienza, le guichet HELLO peut vous aider à remplir les formulaires.",
        },
        {
          q: "À quoi sert le récépissé du permis de séjour ?",
          a: "Le récépissé du permis de séjour (ricevuta) prouve que vous avez demandé le permis, jusqu’à l’arrivée de la carte. Présentez le récépissé avec votre passeport pour ouvrir un compte bancaire, souscrire un abonnement téléphonique, obtenir le codice fiscale, signer un contrat de travail et terminer vos démarches DiSCo. Gardez l’original en lieu sûr et ayez une copie sur vous.",
        },
        {
          q: "Puis-je rentrer en Tunisie en attendant mon permis ?",
          a: "C’est déconseillé : l’Ambassade d’Italie à Tunis conseille aux étudiants de ne pas quitter l’Italie tant que le permis de séjour n’a pas été délivré. La Polizia di Stato indique environ 60 jours de traitement et la Sapienza prévient que cela peut prendre environ 90 jours : prévoyez vos voyages après avoir retiré votre permis.",
        },
        {
          q: "Combien de temps faut-il pour obtenir le permis de séjour étudiant ?",
          a: "Environ 60 jours selon la Polizia di Stato, même si la Sapienza prévient que cela peut prendre environ 90 jours. Après l’envoi du kit, vous vous rendez au rendez-vous de la Questura indiqué dans votre convocation pour les empreintes digitales, et vous suivez l’état du dossier sur le portail de la Polizia di Stato avec les données de votre récépissé.",
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
