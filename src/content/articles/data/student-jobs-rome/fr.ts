import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms and platform labels stay in Italian.
export const fr: ArticleTranslation = {
  slug: "job-etudiant-rome",
  title: "Job étudiant à Rome pour les Tunisiens",
  subtitle: "La règle des 20 heures, puis où trouver du travail : Subito, Indeed, agences d’intérim et jobs sur le campus",
  seoTitle: "Job étudiant à Rome pour les Tunisiens : règle des 20 h",
  metaDescription:
    "Trouvez un job étudiant à Rome : limite de 20 heures par semaine, annonce gratuite sur Subito, Indeed, agences d’intérim, 150 ore et signes d’arnaque.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["job étudiant Rome", "petit boulot étudiant Rome", "heures de travail permis de séjour étudiant Italie", "Subito lavoro Roma", "agence d’intérim Rome", "150 ore Sapienza"],
  summary:
    "Un job étudiant à Rome est légal avec un permis de séjour italien pour études jusqu’à 20 heures par semaine et 1 040 heures par an comme salarié, avec un contrat déclaré, et les 20 heures sont un plafond hebdomadaire, pas une moyenne (vérifié en octobre 2026). La plupart des jobs étudiants à Rome sont dans les cafés et les restaurants, et une annonce gratuite de candidat sur Subito est souvent la porte d’entrée la plus rapide, en plus d’Indeed, des agences d’intérim (qui ne peuvent pas faire payer les travailleurs) et des collaborations 150 ore, payées 1 295 EUR pour 150 heures à la Sapienza.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d’information et ne constitue pas un conseil juridique. Les règles de travail pour les titulaires d’un permis et les règles des plateformes peuvent changer : vérifiez les sources officielles indiquées ci-dessous avant de signer un contrat.",
    },
    { type: "p", text: "**Vous avez votre permis de séjour pour études et vous cherchez un job à temps partiel à Rome. Combien d’heures avez-vous le droit de travailler, et où trouver du travail ?**" },
    {
      type: "p",
      text: "La réponse courte : vous pouvez travailler comme salarié jusqu’à **20 heures par semaine** et **1 040 heures par an**, avec un contrat régulier et déclaré. À Rome, la plupart des jobs étudiants sont dans les cafés, les bars et les restaurants, et une annonce gratuite sur Subito pour dire que vous cherchez du travail est souvent la porte d’entrée la plus rapide.",
    },
    {
      type: "p",
      text: "C’est la partie 3 de notre série sur l’installation, après le compte bancaire et la residenza. Pour la réponse juridique courte dès le premier mois, lisez [si l’on peut travailler avec un permis de séjour étudiant en Italie](article:arriving-in-rome#student-work).",
    },

    { type: "h2", id: "before-you-start", text: "1. De quoi a-t-on besoin avant de chercher un job étudiant à Rome ?" },
    {
      type: "p",
      text: "Avant de chercher un job étudiant à Rome, il vous faut une carte SIM italienne, un IBAN pour le salaire et votre codice fiscale ; la residenza facilite aussi beaucoup de démarches locales.",
    },
    {
      type: "ul",
      items: [
        "**Une carte SIM italienne.** Subito vérifie votre compte par SMS et n’accepte que les numéros des pays de l’UE et de la Suisse : un numéro en +216 ne fonctionnera pas.",
        "**Un IBAN.** Les employeurs versent le salaire par virement. Voir [comment ouvrir un compte bancaire en Italie quand on est étudiant](article:bank-account-italy-student).",
        "**Votre codice fiscale.** Il est normalement attribué avec votre demande de permesso, via la Questura ; si vous en avez besoin plus tôt, demandez-le dans n’importe quel bureau de l’Agenzia delle Entrate avec le formulaire AA4/8.",
        "**Votre residenza** facilite beaucoup de démarches locales ; voir [comment faire sa residenza à Rome auprès de l’anagrafe](article:residenza-rome).",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Montrez le récépissé aux employeurs",
      text: "En attendant la carte de séjour, remettez aux employeurs et aux agences d’intérim de Rome une copie du **récépissé (ricevuta)** du permis avec votre passeport : il montre que vous avez demandé un permis d'études et leur permet de déclarer un contrat en règle.",
    },

    { type: "h2", id: "hour-limits", text: "2. Combien d’heures peut-on travailler avec un permis étudiant en Italie ?" },
    {
      type: "p",
      text: "Le permis de séjour italien pour études autorise le travail salarié (lavoro subordinato) jusqu’à **20 heures par semaine**, sur 52 semaines, dans une limite annuelle de **1 040 heures** ([DPR 394/1999, art. 14, al. 4](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14)).",
    },
    {
      type: "p",
      text: "Dans sa note du **24 mai 2022**, l’Ispettorato Nazionale del Lavoro a précisé que les 20 heures sont un **plafond hebdomadaire, pas une moyenne** : un contrat de plus de 20 heures par semaine n’est pas conforme, même si le total annuel reste sous 1 040 heures. Impossible de faire 35 heures en août pour compenser ensuite. Pour travailler plus de 20 heures par semaine, il faut convertir votre permis pour études en permis de travail, avant l’expiration du permis pour études.",
    },
    {
      type: "table",
      caption: "Les types de contrat que croisent les étudiants en Italie (octobre 2026).",
      head: ["Type", "De quoi il s’agit", "Attention"],
      rows: [
        ["Contrat salarié à temps partiel", "La voie normale : un contrat déclaré avec un horaire hebdomadaire fixe", "Pas plus de 20 heures par semaine dans le contrat"],
        ["Travail occasionnel (PrestO)", "Missions courtes gérées par l’INPS, plafonnées à 5 000 EUR par an et par travailleur", "Aucune source officielle ne dit si ces heures comptent dans les 20 ; demandez à l’employeur ou à un patronato"],
        ["Contrat à l’appel (contratto a chiamata)", "On vous appelle selon les besoins ; ouvert aux moins de 24 ans (travail terminé avant 25 ans) ou aux plus de 55 ans, ou pour les emplois prévus par les conventions collectives", "Votre plafond de 20 heures par semaine s’applique toujours"],
        ["Collaboration universitaire 150 ore", "Travail rémunéré sur le campus, pas un contrat de travail", "Une par année universitaire ; voir la partie 6"],
      ],
    },
    { type: "h3", id: "exams-and-renewal", text: "Gardez le rythme des examens" },
    {
      type: "p",
      text: "Un job étudiant n’empêche pas le renouvellement du permis de séjour pour études, mais vos résultats aux examens comptent. Le permis pour études est renouvelé si vous avez réussi **un examen en première année** et **au moins deux les années suivantes**, et il ne peut pas être délivré pour plus de **3 ans au-delà de la durée de votre cursus** ([DPR 394/1999, art. 46](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46)). Un job qui ruine vos examens met votre permis pour études en danger.",
    },

    { type: "h2", id: "subito", text: "3. Comment trouver un job dans un café ou un restaurant à Rome sur Subito ?" },
    {
      type: "p",
      text: "Pour trouver un job dans un café ou un restaurant à Rome sur Subito, publiez votre propre annonce gratuite dans **Lavoro e servizi > Candidati in cerca di lavoro**, la rubrique des candidats, au lieu de seulement répondre aux annonces des employeurs. [Subito](https://www.subito.it) est le grand site de petites annonces en Italie, et Rome y compte beaucoup d’offres dans les cafés, les bars et les restaurants. Subito donne aux particuliers **20 annonces gratuites** dans la rubrique des candidats, et Subito refuse les offres qui demandent de l’argent aux candidats ([règles Subito](https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-)).",
    },
    {
      type: "figure",
      src: "/blog/trastevere-restaurant.webp",
      width: 1600,
      height: 1067,
      alt: "Intérieur d'un restaurant vide du Trastevere, à Rome, avec les chaises posées sur les tables en bois et de vieilles affiches aux murs",
      caption: "Un restaurant du Trastevere après la fermeture. Les cafés et restaurants de Rome publient beaucoup de leurs offres sur Subito.",
      credit: {
        text: "Photo : Jorge Royan, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Night_life_at_Trastevere,_Rome_-_3398.jpg",
      },
    },
    { type: "h3", id: "step-subito-account", text: "Étape 1 : créez votre compte" },
    {
      type: "p",
      text: "Inscrivez-vous sur le site ou l’application Subito avec votre e-mail, puis confirmez votre numéro italien avec le code reçu par SMS ([vérification du téléphone](https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica)).",
    },
    { type: "h3", id: "step-subito-category", text: "Étape 2 : choisissez la rubrique des candidats" },
    {
      type: "p",
      text: "Touchez **Inserisci annuncio**, choisissez **Lavoro e servizi**, puis **Candidati in cerca di lavoro**. Parcourez d’abord les [annonces de candidats à Rome](https://www.subito.it/annunci-lazio/vendita/cerco-lavoro/roma/) pour voir comment les autres rédigent les leurs.",
    },
    { type: "h3", id: "step-subito-ad", text: "Étape 3 : rédigez une annonce courte et claire" },
    {
      type: "ul",
      items: [
        "**Titre** : le poste et le quartier, par exemple « Cameriere / barista part-time, Roma San Lorenzo ».",
        "**Langues** : arabe, français et anglais, plus votre niveau réel d’italien.",
        "**Disponibilités** : les jours et horaires où vous pouvez travailler, dans la limite de 20 heures par semaine.",
        "**Quartier** : où vous habitez et jusqu’où vous pouvez vous déplacer.",
        "**Photo** : facultative ; une photo nette et souriante peut aider.",
        "**Contact** : demandez aux employeurs de vous écrire via le chat de l’application.",
      ],
    },
    { type: "h3", id: "step-subito-replies", text: "Étape 4 : répondez vite et restez dans la légalité" },
    {
      type: "p",
      text: "D’après mon expérience et celle de mes amis, les appels et les offres arrivaient en général dans la semaine qui suivait la publication d’une annonce Subito. C’est un retour d’expérience, pas une garantie. Quand un employeur vous appelle, demandez un contrat écrit avec vos heures hebdomadaires avant votre premier service.",
    },

    { type: "h2", id: "indeed", text: "4. Comment postuler à un job étudiant à Rome sur Indeed ?" },
    {
      type: "p",
      text: "Pour postuler à un job étudiant à Rome sur Indeed, cherchez « part time studenti » sur [it.indeed.com](https://it.indeed.com) avec Roma comme lieu, puis postulez avec votre CV. Téléversez votre CV ou créez-en un sur Indeed ([importer un CV](https://support.indeed.com/hc/en-us/articles/4408783727629-Uploading-a-Resume-File-to-Your-Profile)) ; certaines offres permettent de postuler directement avec **Indeed Apply**, d’autres renvoient vers le site de l’employeur. Activez une **alerte emploi** pour recevoir les nouvelles offres par e-mail ([alertes emploi](https://support.indeed.com/hc/en-us/articles/204488890-Starting-Stopping-and-Managing-Job-Alerts)).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Vérifiez les heures par semaine",
      text: "Beaucoup d’annonces « étudiant » sur Indeed pour Rome demandent 25 à 30 heures par semaine, au-dessus du plafond de 20 heures du permis pour études. Lisez les horaires de chaque annonce avant de postuler.",
    },

    { type: "h2", id: "agencies", text: "5. Quelles agences d’intérim ont une agence à Rome ?" },
    {
      type: "p",
      text: "Gi Group, Adecco, Randstad, Manpower, Umana, Synergie, Etjca et Orienta sont des agences d’intérim dont une agence à Rome est confirmée sur leur propre site (octobre 2026). Les agences d’intérim (agenzie per il lavoro) placent des candidats dans les magasins, entrepôts, hôtels et événements. Selon la loi, les agences autorisées **ne peuvent faire payer aucun frais aux travailleurs** ([D.Lgs. 276/2003, art. 11](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11)). Vous pouvez vérifier une agence dans le [registre du ministère du Travail](https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro).",
    },
    {
      type: "table",
      caption: "Agences dont une agence à Rome est confirmée sur leur propre site (octobre 2026).",
      head: ["Agence", "Trouver une agence à Rome"],
      rows: [
        ["Gi Group", "[gigroup.it](https://www.gigroup.it/citta-filiali/roma/)"],
        ["Adecco", "[adecco.com](https://www.adecco.com/it-it/filiali/lazio/roma/adecco-roma-esperanto)"],
        ["Randstad", "[randstad.it](https://www.randstad.it/trova-filiale/agenzia-il-lavoro-roma-tiburtina_1141/)"],
        ["Manpower", "[manpower.it](https://www.manpower.it/it/cerca-filiale)"],
        ["Umana", "[umana.it](https://www.umana.it/lista-filiali/)"],
        ["Synergie", "[synergie-italia.it](https://my.synergie-italia.it/branches)"],
        ["Etjca", "[etjca.it](https://etjca.it/le-nostre-filiali/)"],
        ["Orienta", "[orienta.net](https://www.orienta.net/it/chi-siamo/contatti-filiali.html)"],
      ],
    },
    {
      type: "p",
      text: "Quand vous allez dans une agence d’intérim à Rome, apportez votre CV, votre permis (ou le récépissé) et votre codice fiscale, et dites à l’agence dès le départ que vous pouvez travailler au maximum 20 heures par semaine.",
    },

    { type: "h2", id: "university-jobs", text: "6. Que sont les collaborations 150 ore et les autres jobs à l’université à Rome ?" },
    {
      type: "p",
      text: "Les universités de Rome rémunèrent des étudiants pour un travail à temps partiel sur le campus grâce aux **collaborations 150 ore** (borse di collaborazione), et leurs bureaux de job placement publient d’autres offres. L’appel 2025/26 de la Sapienza proposait **250 places**, payées **1 295 EUR pour 150 heures**, sans impôt. Ce n’est pas un contrat de travail, et il fallait **un niveau B2 en italien et B2 en anglais** ([appel Sapienza 2025/26](https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf)). La date limite 2025/26 est passée : surveillez le nouvel appel 150 ore de la Sapienza à l’automne.",
    },
    {
      type: "figure",
      src: "/blog/sapienza-department-entrance.webp",
      width: 1600,
      height: 900,
      alt: "Des marches menant à l'entrée d'un bâtiment de l'université Sapienza à Rome, marqué Fisiologia Generale",
      caption: "L'entrée du département Charles Darwin de la Sapienza. Les étudiants en 150 ore travaillent dans les bureaux, bibliothèques et départements comme celui-ci.",
      credit: {
        text: "Photo : CarloTunv, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Ingresso_Dipartimento_Darwin_Universit%C3%A0_Sapienza_Roma.jpg",
      },
    },
    {
      type: "p",
      text: "Si vous avez la bourse DiSCo du Latium, l’appel DiSCo indique que la bourse est **compatible** avec les collaborations 150 ore ; voir [comment fonctionne la bourse DiSCo Lazio pour les étudiants tunisiens](article:lazio-disco-scholarship).",
    },
    {
      type: "ul",
      items: [
        "**Sapienza** : offres du Career Service sur JobTeaser et stages sur TSP ([opportunités](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio)).",
        "**Tor Vergata** : [bureau placement](https://web.uniroma2.it/it/contenuto/placement) et offres sur uniroma2.jobteaser.com.",
        "**Roma Tre** : le [bureau Job Placement](https://www.uniroma3.it/ufficio-job-placement/).",
        "**Porta Futuro Lazio**, géré par DiSCo, a des guichets à la Sapienza, Roma Tre et Tor Vergata : relecture de CV, orientation et formations gratuites ([portafuturolazio.it](https://www.portafuturolazio.it/)).",
      ],
    },

    { type: "h2", id: "job-scams", text: "7. Comment repérer une arnaque à l’emploi à Rome ?" },
    {
      type: "p",
      text: "Une offre d’emploi à Rome est probablement une arnaque si elle vous demande de l’argent, réclame vos documents ou vos codes bancaires avant un entretien, ou vous pousse à quitter Subito ou Indeed. La Polizia Postale a alerté sur les fausses offres d’emploi le [19 janvier 2024](https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html) et sur la « task scam » par WhatsApp le [30 janvier 2025](https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html). L’ANPAL a aussi signalé [de fausses offres utilisant le logo EURES](https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-). Fuyez une offre d’emploi qui :",
    },
    {
      type: "ul",
      items: [
        "Vous demande de payer quoi que ce soit : formation, kit, frais d’inscription.",
        "Réclame une copie de votre passeport, de votre permis ou vos codes bancaires avant tout entretien.",
        "Arrive sur WhatsApp depuis un numéro inconnu et vous paie pour « liker » des posts ou écrire des avis.",
        "Promet un salaire bien au-dessus de la normale pour un travail très facile.",
        "N’a pas de contrat écrit, ou propose de vous payer en liquide, au noir.",
        "Vous pousse à quitter Subito ou Indeed pour cliquer sur un lien extérieur.",
      ],
    },
    {
      type: "p",
      text: "Signalez les arnaques à l’emploi à Rome au [commissariat en ligne de la Polizia Postale](https://www.commissariatodips.it/) ou dans n’importe quel bureau de police.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Combien d’heures peut-on travailler avec un permis de séjour étudiant en Italie ?",
          a: "Jusqu’à 20 heures par semaine comme salarié, dans une limite de 1 040 heures par an (DPR 394/1999, art. 14). L’Ispettorato Nazionale del Lavoro a précisé en mai 2022 que les 20 heures sont un plafond hebdomadaire, pas une moyenne : un contrat de plus de 20 heures par semaine n’est pas conforme, même si le total annuel reste sous 1 040 heures.",
        },
        {
          q: "Comment trouver un job étudiant dans un café ou un restaurant à Rome ?",
          a: "Publiez une annonce gratuite sur Subito dans la rubrique « Candidati in cerca di lavoro », avec le poste, votre quartier, vos langues et vos disponibilités dans la limite de 20 heures par semaine. Les particuliers y ont droit à 20 annonces gratuites. Répondez aussi aux annonces des employeurs sur Subito et Indeed. D’après mon expérience et celle de mes amis, les appels arrivaient en général dans la semaine, mais ce n’est pas une garantie.",
        },
        {
          q: "Les agences d’intérim en Italie sont-elles payantes ?",
          a: "Non. La loi italienne (D.Lgs. 276/2003, art. 11) interdit aux agences d’intérim autorisées de faire payer quoi que ce soit aux travailleurs : une agence qui vous demande de l’argent est un signal d’alarme. Avant de remettre votre CV et vos documents, vous pouvez vérifier qu’une agence est autorisée dans le registre national des agences pour l’emploi du ministère du Travail.",
        },
        {
          q: "Peut-on travailler quand on reçoit la bourse DiSCo ?",
          a: "Oui pour les collaborations universitaires 150 ore : l’appel DiSCo du Latium indique qu’elles sont compatibles avec la bourse. Dans l’appel 2025/26 de la Sapienza, une collaboration 150 ore était payée 1 295 EUR pour 150 heures, sans impôt. Pour les autres jobs, lisez les règles de revenus de l’appel DiSCo en cours avant de signer un contrat.",
        },
        {
          q: "Peut-on s’inscrire sur Subito avec un numéro tunisien ?",
          a: "Non. Subito vérifie chaque compte par SMS et n’accepte que les numéros des pays de l’UE et de la Suisse : un numéro en +216 ne fonctionnera pas. Prenez d’abord une carte SIM italienne, puis confirmez le numéro avec le code SMS de Subito avant de publier votre annonce de candidat.",
        },
        {
          q: "Et si je veux travailler plus de 20 heures par semaine ?",
          a: "Il faut convertir votre permis pour études en permis de travail, avant l’expiration du permis pour études. En attendant, gardez chaque contrat à 20 heures par semaine au maximum : les 20 heures sont un plafond hebdomadaire, donc faire 35 heures en août et moins ensuite n’est pas permis. Vérifiez les horaires de chaque annonce, car beaucoup d’annonces « étudiant » à Rome demandent 25 à 30 heures par semaine.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Normattiva : DPR 394/1999, art. 14 (travail avec un permis pour études)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14" },
        { label: "Normattiva : DPR 394/1999, art. 46 (renouvellement du permis pour études)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46" },
        { label: "Ispettorato Nazionale del Lavoro : note du 24 mai 2022 sur le permis pour études et le travail", url: "https://portist-int.ispettorato.gov.it/files/2023/01/INL-DCGiuridica-nota-24052022-permesso-soggiorno-per-studio-e-attivita-lavorativa.pdf" },
        { label: "Agenzia delle Entrate : codice fiscale des citoyens étrangers", url: "https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria/che-cos-cittadini" },
        { label: "INPS : contrat de prestation occasionnelle (PrestO)", url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.51100.contratto-di-prestazione-occasionale.html" },
        { label: "Ministère du Travail : travail intermittent (lavoro intermittente)", url: "https://www.lavoro.gov.it/temi-e-priorita/rapporti-di-lavoro-e-relazioni-industriali/focus-on/disciplina-rapporto-lavoro/pagine/lavoro-intermittente" },
        { label: "Subito : règles de la catégorie Lavoro e servizi", url: "https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-" },
        { label: "Subito : limites de publication des annonces", url: "https://assistenza.subito.it/hc/it/articles/11542466735517-Limiti-all-inserimento-degli-annunci" },
        { label: "Subito : vérification du téléphone", url: "https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica" },
        { label: "Aide Indeed : postuler à une offre", url: "https://support.indeed.com/hc/en-us/articles/204652920-Applying-for-a-Job-Using-a-Resume-File" },
        { label: "Normattiva : D.Lgs. 276/2003, art. 11 (aucun frais pour les travailleurs)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11" },
        { label: "Ministère du Travail : registre national des agences pour l’emploi", url: "https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro" },
        { label: "Sapienza : appel collaborations 150 ore 2025/26", url: "https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf" },
        { label: "DiSCo Lazio : appel droit aux études 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "Porta Futuro Lazio", url: "https://www.portafuturolazio.it/" },
        { label: "Polizia Postale : reconnaître les fausses offres d’emploi", url: "https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html" },
        { label: "Polizia Postale : la « task scam » sur WhatsApp", url: "https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html" },
        { label: "ANPAL : alerte sur les fausses offres d’emploi", url: "https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les chiffres des 150 ore viennent de l’appel 2025/26 de la Sapienza ; vérifiez le nouvel appel chaque automne. Subito et Indeed peuvent changer leurs règles à tout moment.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Limite légale", value: "20 heures par semaine, 1 040 heures par an, comme salarié" },
        { label: "Le plus rapide", value: "Une annonce gratuite de candidat sur Subito (SIM italienne nécessaire)" },
        { label: "Agences d’intérim", value: "Aucun frais pour les travailleurs (D.Lgs. 276/2003)" },
        { label: "Sur le campus", value: "Collaborations 150 ore, sans impôt, compatibles avec DiSCo" },
      ],
    },
    { type: "h2", id: "settling-path", text: "S’installer à Rome, étape par étape" },
    {
      type: "ol",
      items: [
        "[Ouvrir un compte bancaire en Italie](article:bank-account-italy-student)",
        "[Faire sa residenza à Rome](article:residenza-rome)",
        "Trouver un job étudiant à Rome",
        "[Vos 30 premiers jours à Rome](article:arriving-in-rome)",
      ],
    },
  ],
};
