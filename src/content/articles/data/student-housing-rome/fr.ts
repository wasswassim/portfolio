import type { ArticleTranslation } from "../../types";

// Traduction de en.ts. Les noms italiens (DiSCo, codice fiscale, Agenzia delle Entrate) restent en italien.
export const fr: ArticleTranslation = {
  slug: "logement-etudiant-rome",
  title: "Logement étudiant à Rome pour les Tunisiens : résidences DiSCo, chambres et arnaques",
  seoTitle: "Logement étudiant à Rome : DiSCo, chambres, arnaques",
  metaDescription:
    "Logement étudiant à Rome pour les Tunisiens : résidences DiSCo, services logement des universités, sites de chambres, contrat à vérifier et arnaques à éviter.",
  imageAlt: "Le Colisée à Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["logement étudiant à Rome", "résidences DiSCo", "chambre étudiant Rome", "colocation Rome", "logement étudiant Rome pour les Tunisiens", "arnaque location Rome"],
  summary:
    "Il existe trois voies pour se loger à Rome, de la moins chère à la plus chère : une résidence DiSCo (demandée uniquement dans la candidature annuelle à la bourse DiSCo, environ 200 à 298 EUR par mois retenus sur la bourse en 2026/27), les services logement de Sapienza, Tor Vergata et Roma Tre, et une chambre privée trouvée sur des sites comme HousingAnywhere, Uniplaces, Spotahome, Immobiliare.it, Idealista ou Subito. Ne payez jamais avant d'avoir vu la chambre, et vérifiez que le bail est enregistré dans les 30 jours.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d'information et ne constitue pas un conseil juridique. Les règles, les prix et les démarches de logement peuvent changer : vérifiez toujours les sources officielles avant de signer ou de payer quoi que ce soit.",
    },
    { type: "p", text: "**Où allez-vous vivre en arrivant à Rome, et comment trouver une chambre sans vous faire arnaquer ?**" },
    {
      type: "p",
      text: "En bref : l'option la moins chère est une résidence DiSCo, que l'on ne peut demander que dans la candidature annuelle à la bourse DiSCo. Si vous n'en obtenez pas, passez par le service logement de votre université, puis par les sites de location. Dans tous les cas, voyez la chambre avant de payer, exigez un contrat écrit et un reçu pour chaque paiement.",
    },
    {
      type: "p",
      text: "Voici la dernière partie de notre [guide des études en Italie pour les étudiants tunisiens](article:study-in-italy). Les parties précédentes couvrent la candidature, les documents, la bourse, le visa et vos premiers pas à Rome. Celle-ci porte sur le logement.",
    },

    { type: "h2", id: "disco-residences", text: "1. Les résidences DiSCo : l'option la moins chère" },
    {
      type: "p",
      text: "DiSCo, l'agence régionale du Latium pour le droit aux études, gère des résidences étudiantes à Rome. Il n'y a pas de demande séparée : vous demandez une place dans la même candidature en ligne que la [bourse DiSCo](article:lazio-disco-scholarship#eligibility), avec les mêmes conditions de revenus.",
    },
    {
      type: "ul",
      items: [
        "**Coût :** en 2026/27, environ 200 à 298 EUR par mois, retenus sur votre bourse (700 EUR sont prélevés sur la première tranche). Voir [comment la bourse est versée](article:lazio-disco-scholarship#payments).",
        "**Quand :** les places commencent en général vers la mi-octobre, pour 10 mois au maximum (vérifiez le bando de votre année).",
        "**Où :** des résidences dans toute la ville, par exemple Antonio Ruberti, Ezio Tarantelli, Falcone e Borsellino, Giulio Regeni, Valco San Paolo, Valleranello et Tor Vergata. La liste complète est sur la [page des résidences DiSCo](https://laziodisco.it/servizi-attivi/residenze-universitarie/).",
        "**Calendrier :** les résultats logement 2026/27 sont déjà publiés. Visez 2027/28 : la candidature est attendue vers juin-juillet 2027, avec un classement logement vers la mi-septembre (à vérifier dans l'appel 2027/28).",
      ],
    },
    {
      type: "p",
      text: "Si vous obtenez une place, DiSCo vous envoie un message dans votre espace personnel avec le nom de la résidence. Répondez à temps : refuser ou ne pas répondre vous fait perdre la place pour l'année. Si vous êtes éligible sans place, le classement avance automatiquement, en général toutes les deux semaines environ : surveillez vos messages.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Une résidence n'est pas une preuve pour le visa",
      text: "Une demande de résidence DiSCo n'est pas une preuve d'hébergement valable pour le visa. Il vous faut une réservation d'hôtel ou une déclaration d'hébergement pour votre première période en Italie (voir les [documents du visa](article:italy-student-visa#visa-documents)).",
    },

    { type: "h2", id: "university-housing", text: "2. Les services logement des universités" },
    {
      type: "p",
      text: "Les trois grandes universités publiques de Rome ne vous garantissent pas de chambre, mais chacune vous aide à chercher. Contactez-les dès votre admission.",
    },
    { type: "h3", id: "step-sapienza-housing", text: "Sapienza" },
    {
      type: "p",
      text: "Ouvrez la [page logement étudiant de Sapienza](https://www.uniroma1.it/en/pagina/student-housing). Elle présente les solutions de logement et le guichet Sturent, un service qui aide les étudiants à trouver une chambre. Lisez la page avant d'écrire, pour poser des questions précises.",
    },
    { type: "h3", id: "step-tor-vergata-housing", text: "Tor Vergata" },
    {
      type: "p",
      text: "Ouvrez la [page logement de Tor Vergata](https://web.uniroma2.it/en/contenuto/housing), puis écrivez à **housing@uniroma2.it** avec votre nom, votre formation et votre date d'arrivée. Regardez sur la page s'il existe des codes de réduction étudiants pour les sites de location.",
    },
    { type: "h3", id: "step-roma-tre-housing", text: "Roma Tre" },
    {
      type: "p",
      text: "Roma Tre propose un [service d'hébergement](https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/) gratuit. Écrivez à **accommodation@uniroma3.it** pour demander de l'aide, et cherchez sur la page les codes de réduction pour les plateformes.",
    },

    { type: "h2", id: "find-a-room", text: "3. Trouver une chambre ou une colocation à Rome" },
    {
      type: "p",
      text: "La plupart des étudiants finissent dans une chambre en colocation. Voici où chercher en général :",
    },
    {
      type: "table",
      caption: "Où chercher une chambre à Rome, et à quoi faire attention.",
      head: ["Option", "Idéal pour", "Attention"],
      rows: [
        ["Résidence DiSCo", "Le coût le plus bas, si vous obtenez la bourse", "Uniquement via l'appel annuel ; pas une preuve pour le visa"],
        ["Service logement de l'université", "Conseils et contacts fiables", "Aide à la recherche, pas une chambre garantie"],
        ["[HousingAnywhere](https://housinganywhere.com), [Uniplaces](https://www.uniplaces.com), [Spotahome](https://www.spotahome.com)", "Réserver depuis la Tunisie avant d'arriver", "Lisez les conditions d'annulation et les frais du site"],
        ["[Immobiliare.it](https://www.immobiliare.it), [Idealista](https://www.idealista.it)", "Beaucoup d'annonces, chambres et appartements", "Surtout en italien ; vérifiez qui publie l'annonce"],
        ["[Subito](https://www.subito.it)", "Chambres de propriétaires privés", "Les arnaques sont fréquentes sur les petites annonces : ne payez jamais avant de voir"],
      ],
    },
    {
      type: "p",
      text: "Les loyers varient beaucoup selon le quartier et la période. Ne vous fiez pas à un chiffre lu en ligne : consultez les annonces actuelles dans le quartier proche de votre faculté.",
    },
    { type: "h3", id: "before-signing", text: "Les questions à poser avant de signer" },
    {
      type: "ul",
      items: [
        "**Type de contrat :** s'agit-il d'un bail écrit, et pour quelle durée ? Demandez un contrat adapté à votre période d'études.",
        "**Caution :** quel montant, et quand exactement sera-t-elle rendue ?",
        "**Charges :** électricité, gaz, eau, internet et charges d'immeuble sont-ils inclus, ou partagés entre colocataires ?",
        "**Enregistrement :** le propriétaire va-t-il enregistrer le bail ? Un bail enregistré est demandé pour de nombreuses démarches.",
      ],
    },
    {
      type: "p",
      text: "Un nouveau bail doit être [enregistré auprès de l'Agenzia delle Entrate](https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario) dans les 30 jours. C'est au propriétaire de le faire, mais demandez une preuve d'enregistrement et gardez-en une copie. Pour signer, on peut vous demander un codice fiscale : vous pouvez l'obtenir dans n'importe quel bureau de l'Agenzia delle Entrate (voir [comment obtenir votre codice fiscale](article:arriving-in-rome#codice-fiscale)).",
    },
    { type: "h3", id: "first-weeks", text: "Les premières semaines : un logement temporaire" },
    {
      type: "p",
      text: "Beaucoup d'étudiants réservent un hôtel, une auberge ou un court séjour pour les premières semaines, puis cherchent une chambre sur place. Cela règle aussi la question du visa : il faut une preuve d'hébergement pour la première période, soit une réservation d'hôtel, soit une déclaration d'hébergement de la personne qui vous accueille. Visiter les chambres en personne reste la façon la plus sûre de choisir.",
    },

    { type: "h2", id: "avoid-scams", text: "4. Éviter les arnaques à la location" },
    {
      type: "p",
      text: "Les étudiants qui cherchent depuis l'étranger sont les cibles les plus faciles. Les [conseils de la Polizia Postale contre les arnaques à la location](https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146) se résument à une règle : voyez la chambre, ou passez par une agence agréée, et ne payez jamais d'avance sans garanties.",
    },
    {
      type: "ul",
      items: [
        "Voyez la chambre en personne, ou demandez un appel vidéo en direct où le propriétaire montre la chambre et une pièce d'identité.",
        "Ne versez jamais de caution ni de loyer avant d'avoir vu la chambre et le contrat.",
        "Refusez les paiements par Western Union, services de transfert d'argent, cartes cadeaux ou cryptomonnaies.",
        "Exigez un contrat écrit et un reçu pour chaque paiement.",
        "Méfiez-vous d'un loyer bien plus bas que les autres dans le même quartier, ou d'un propriétaire « à l'étranger » et pressé.",
        "Vérifiez que le nom du propriétaire correspond au contrat et au compte de paiement.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Si vous avez déjà payé",
      text: "Coupez tout contact, gardez chaque message et chaque reçu, et portez plainte auprès de la police (Polizia Postale). Prévenez aussi le service logement de votre université : cela l'aide à alerter les autres étudiants.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Comment trouver une chambre à Rome quand on est étudiant ?",
          a: "Commencez par les résidences DiSCo (dans la candidature à la bourse), puis le service logement de votre université, puis des sites comme HousingAnywhere, Uniplaces, Spotahome, Immobiliare.it, Idealista et Subito. Beaucoup d'étudiants réservent un court séjour pour les premières semaines et visitent les chambres sur place.",
        },
        {
          q: "Les résidences DiSCo sont-elles payantes ?",
          a: "Oui, mais peu. En 2026/27, une place à Rome coûte environ 200 à 298 EUR par mois, retenus sur votre bourse DiSCo (700 EUR sont pris sur la première tranche).",
        },
        {
          q: "Peut-on demander une résidence DiSCo sans la bourse ?",
          a: "Non. La place se demande dans la même candidature DiSCo que la bourse, avec les mêmes conditions de revenus et les mêmes délais.",
        },
        {
          q: "Faut-il un codice fiscale pour louer une chambre ?",
          a: "En général oui : le propriétaire en a besoin pour le bail et son enregistrement. Vous pouvez l'obtenir dans n'importe quel bureau de l'Agenzia delle Entrate avec votre passeport et votre visa.",
        },
        {
          q: "Une demande de résidence DiSCo compte-t-elle comme preuve d'hébergement pour le visa ?",
          a: "Non. Pour le visa, il faut une réservation d'hôtel ou une déclaration d'hébergement pour votre première période en Italie.",
        },
        {
          q: "Comment éviter les arnaques à la location à Rome ?",
          a: "Voyez la chambre ou faites un appel vidéo en direct, ne payez jamais avant de l'avoir vue, refusez Western Union et les cartes cadeaux, et exigez un contrat et un reçu pour chaque paiement.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "DiSCo Lazio : résidences universitaires", url: "https://laziodisco.it/servizi-attivi/residenze-universitarie/" },
        { label: "DiSCo Lazio : appel droit aux études 2026/27 (anglais)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "Sapienza : logement étudiant", url: "https://www.uniroma1.it/en/pagina/student-housing" },
        { label: "Tor Vergata : logement", url: "https://web.uniroma2.it/en/contenuto/housing" },
        { label: "Roma Tre : service d'hébergement", url: "https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/" },
        { label: "Agenzia delle Entrate : enregistrer un nouveau bail", url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario" },
        { label: "Polizia di Stato : conseils contre les arnaques à la location", url: "https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les dates 2027/28 sont projetées à partir de l'appel 2026/27 et doivent être confirmées dans le nouvel appel DiSCo. Les prix et les services de logement peuvent changer : vérifiez les pages officielles avant de postuler ou de signer.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Résidence DiSCo", value: "Environ 200 à 298 EUR/mois en 2026/27, retenus sur la bourse" },
        { label: "Comment la demander", value: "Uniquement dans la candidature DiSCo annuelle" },
        { label: "Enregistrement du bail", value: "Dans les 30 jours, par le propriétaire ; demandez la preuve" },
        { label: "Règle d'or", value: "Ne jamais payer avant d'avoir vu la chambre" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "Le parcours en bref" },
    {
      type: "ol",
      items: [
        "[Planifier et calendrier](article:study-in-italy)",
        "[Choisir une université et candidater](article:apply-university-rome)",
        "[Préparer et traduire les documents](article:documents-for-italy)",
        "[Bourse DiSCo](article:lazio-disco-scholarship)",
        "[Visa et compte bloqué](article:italy-student-visa)",
        "[Arrivée à Rome](article:arriving-in-rome)",
        "Logement",
      ],
    },
  ],
};
