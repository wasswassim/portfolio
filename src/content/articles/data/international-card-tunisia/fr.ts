import type { ArticleTranslation } from "../../types";

// Translation of en.ts (same heading ids, one table, four fee boxes). Italian terms stay in Italian.
export const fr: ArticleTranslation = {
  slug: "payer-frais-universite-italie-carte-internationale",
  title: "Frais d’inscription en Italie",
  subtitle: "Payer avec une carte internationale tunisienne",
  seoTitle: "Payer ses frais d’inscription en Italie : guide tunisien",
  metaDescription:
    "Payer ses frais d’inscription en Italie pour les Tunisiens : virement, carte technologique, PayPal sur pagoPA, carte italienne, règles de change et arnaques.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["frais d’inscription Italie", "carte internationale Tunisie", "payer université italienne", "pagoPA Tunisie", "carte technologique internationale", "payer en euros Tunisie"],
  summary:
    "La voie légale la plus sûre pour payer vos frais d’université en Italie est le virement bancaire : frais de dossier et d’examen sur facture, frais de scolarité via votre dossier études dans une seule banque. Pour les petits paiements en ligne, la carte technologique (1 000 TND par an) et un compte PayPal tunisien sur pagoPA peuvent fonctionner, mais testez d’abord et demandez à votre banque.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d’information et ne constitue pas un conseil juridique ou financier. Les règles de change, les plafonds de carte et les frais changent : vérifiez toujours les sources officielles ci-dessous et interrogez votre banque avant de payer.",
    },
    { type: "p", text: "**Votre université italienne vous demande de payer des frais en euros. Comment les régler en restant en Tunisie, légalement et sans perdre d’argent ?**" },
    {
      type: "p",
      text: "La réponse courte : demandez un **virement** à votre banque. Les frais de candidature, d’examen et d’étude de dossier se transfèrent sur facture, et les frais de scolarité passent par votre dossier études domicilié dans une banque. Pour les petits paiements en ligne, la **carte technologique** (1 000 TND par an) et **PayPal sur pagoPA** viennent ensuite, avec des limites.",
    },
    {
      type: "p",
      text: "Ce guide classe cinq méthodes selon la sécurité juridique, puis le coût, puis l’effort. Les guides détaillés sur la carte, pagoPA et les cartes crypto sont liés dans chaque section.",
    },

    { type: "h2", id: "which-method", text: "1. Quelle méthode pour quels frais italiens ?" },
    {
      type: "table",
      caption: "Les frais italiens et les méthodes possibles en Tunisie (vérifié en octobre 2026).",
      head: ["Frais", "Mode de perception", "Ce qui peut marcher en Tunisie"],
      rows: [
        ["Frais de candidature, CIMEA et tests d’entrée", "En ligne, sur le portail de l’université ou du CIMEA", "Virement sur facture ; carte technologique ou PayPal pour les petits montants (demandez à votre banque)"],
        ["Tranches des frais de scolarité", "Avis pagoPA ou facture de l’université", "Virement dans le cadre de votre dossier études"],
        ["Taxe régionale et timbre fiscal", "Avis pagoPA avec la première tranche", "Carte technologique ou PayPal sur pagoPA (testez d’abord) ; une carte italienne une fois sur place"],
        ["Kit du permis de séjour", "Dans un bureau de poste italien, après l’arrivée", "Payé en Italie, voir [le coût du permis](article:arriving-in-rome#residence-permit)"],
      ],
    },
    {
      type: "fees",
      title: "Exemple : frais de première année à Sapienza (tranche la plus basse, 2026/27)",
      feeIds: ["sapienza-band-a", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "Sapienza indique que ses frais se paient uniquement par pagoPA, après avoir généré l’avis sur Infostud ([taxe régionale et timbre](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
    },

    { type: "h2", id: "bank-transfer", text: "2. Option 1 : le virement depuis votre banque tunisienne" },
    {
      type: "p",
      text: "C’est la voie légale la plus simple. La [circulaire BCT 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf), annexe 1, point 13, permet aux résidents de transférer sur facture les frais de concours, d’examen et d’« examen de dossiers pour des études à l’étranger ». Le texte ne fixe **aucun plafond**.",
    },
    {
      type: "figure",
      src: "/blog/avenue-habib-bourguiba-tunis.webp",
      width: 1600,
      height: 1200,
      alt: "Vue aérienne de l'avenue Habib Bourguiba, bordée d'arbres, au centre de Tunis, avec une tour vitrée à droite",
      caption: "L'avenue Habib Bourguiba, au centre de Tunis. Le virement se demande à la banque qui détient votre dossier d'études : c'est votre première étape.",
      credit: {
        text: "Photo : Dacoslett, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:TunisAveHabibBourguiba.jpg",
      },
    },
    {
      type: "p",
      text: "Les frais de scolarité passent par votre **dossier études**, domicilié dans une seule banque pour l’année universitaire. Selon la [circulaire BCT 2025-10](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf), ils sont payés sur présentation de la facture de l’université, et deux allocations s’y ajoutent. La [section sur le compte bloqué](article:italy-student-visa#blocked-account) explique comment ouvrir ce dossier.",
    },
    {
      type: "fees",
      title: "Allocations du dossier études (circulaire BCT 2025-10)",
      feeIds: ["study-installation", "study-living"],
    },
    { type: "h3", id: "step-get-invoice", text: "Étape 1 : obtenez la facture ou l’avis de paiement" },
    {
      type: "p",
      text: "Téléchargez la facture, ou l’avis pagoPA, sur le portail de votre université. Il doit être à votre nom. S’il n’existe pas, demandez-le à l’université : [pagoPA ne peut pas le créer pour vous](https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617).",
    },
    { type: "h3", id: "step-go-to-bank", text: "Étape 2 : allez à la banque qui détient votre dossier études" },
    {
      type: "p",
      text: "Apportez la facture, votre CIN et les pièces de votre dossier études. Pour des frais de candidature ou CIMEA, citez le point 13 de l’annexe 1 de la [circulaire 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf).",
    },
    { type: "h3", id: "step-order-transfer", text: "Étape 3 : demandez le virement et gardez la copie SWIFT" },
    {
      type: "p",
      text: "Demandez un virement à l’université dans le cadre de votre dossier études, puis gardez la **copie SWIFT** : elle prouve le paiement si l’université ne le retrouve pas.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Demandez avant de compter dessus",
      text: "Beaucoup d’universités italiennes émettent des avis pagoPA plutôt qu’un simple numéro de compte. Nous n’avons pas pu confirmer qu’une banque tunisienne accepte de payer un avis pagoPA par virement : posez la question à votre banque.",
    },

    { type: "h2", id: "technology-card", text: "3. Option 2 : la carte technologique internationale (CTI)" },
    {
      type: "p",
      text: "Un résident tunisien titulaire au moins du bac peut obtenir une carte technologique avec une allocation de **1 000 TND par année civile** (circulaire 2016-09, art. 15). Cela fait environ **297 EUR** au cours BCT de 3,3671 (7 octobre 2026), un peu moins après les frais bancaires.",
    },
    {
      type: "fees",
      title: "Allocation de la carte technologique",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "Sa liste officielle d’usages cite la formation en ligne, les sites éducatifs, les abonnements et les licences de logiciels. Elle ne cite **ni** les frais de scolarité **ni** pagoPA. Payer l’université avec elle reste une zone grise qui dépend de la banque : la Banque Zitouna, par exemple, [filtre l’usage en ligne par code marchand](https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique). Renseignez-vous auprès de votre banque. Le [guide de la carte technologique](article:technology-card-tunisia) explique comment la demander.",
    },

    { type: "h2", id: "paypal-pagopa", text: "4. Option 3 : PayPal sur la page de paiement pagoPA" },
    {
      type: "p",
      text: "Un compte PayPal tunisien peut **payer et envoyer**, mais pas recevoir d’argent. Ce n’est pas un problème ici, puisque vous voulez seulement payer. Reliez-y votre carte technologique comme source de financement.",
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
      text: "PayPal est un moyen de paiement officiel sur [checkout.pagopa.it](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal), et [PayPal indique](https://www.paypal.com/it/digital-wallet/pagopa) que tout titulaire d’un compte avec une carte reliée peut l’utiliser. Le paiement en plusieurs fois exige de résider en Italie : payez en une fois.",
    },
    {
      type: "fees",
      title: "Coût d’un avis pagoPA payé avec PayPal",
      feeIds: ["pagopa-paypal", "paypal-fx"],
    },
    {
      type: "p",
      text: "Aucune source officielle ne confirme qu’un compte tunisien est accepté sur pagoPA. Testez d’abord avec un petit avis, comme le timbre de 16 EUR. Pas à pas dans [comment payer pagoPA depuis l’étranger](article:pay-pagopa-from-abroad).",
    },

    { type: "h2", id: "once-in-italy", text: "5. Option 4 : un compte ou une carte italienne après l’arrivée" },
    {
      type: "p",
      text: "Une fois à Rome, un compte italien, une carte Postepay ou une carte Wise paie pagoPA directement, en général moins cher. La carte Wise n’est pas disponible en Tunisie, mais elle l’est en Italie. Lisez [ouvrir un compte après l’arrivée](article:arriving-in-rome#bank-account) et le [guide du compte bancaire étudiant](article:bank-account-italy-student).",
    },

    { type: "h2", id: "crypto-cards", text: "6. Option 5 : pourquoi les cartes crypto passent en dernier" },
    {
      type: "p",
      text: "RedotPay est une fintech de Hong Kong qui émet une carte Visa alimentée en stablecoins comme l’USDT. Ses [conditions](https://www.redotpay.com/terms) précisent que le compte n’est pas un service bancaire et autorisent la société à geler un compte à sa discrétion. Aucune garantie des dépôts n’est mentionnée.",
    },
    {
      type: "p",
      text: "Pour les résidents en Tunisie, aucun texte de la BCT n’autorise l’achat de crypto : le statut juridique reste flou (voir la section suivante). Le fonctionnement de la carte, ses frais et la recharge en P2P sont détaillés dans notre [explication sur RedotPay](article:redotpay-tunisia).",
    },
    {
      type: "p",
      text: "**Pourquoi cet ordre ?** La sécurité juridique d’abord : le virement repose sur un texte clair et laisse une trace écrite. Ensuite le coût : la carte et PayPal ajoutent des frais et un plafond de 1 000 TND. Enfin l’effort : un compte italien coûte le moins cher, mais seulement après l’arrivée. Les cartes crypto viennent en dernier, car le risque juridique pèse sur vous.",
    },

    { type: "h2", id: "exchange-rules", text: "7. Ce que disent les règles de change tunisiennes" },
    {
      type: "p",
      text: "Le [Code des changes de 1976](https://www.finances.gov.tn/sites/default/files/17.pdf) impose aux résidents de passer par la BCT ou un intermédiaire agréé, comme une banque ou La Poste, pour les opérations de change (art. 3). Les transferts de capitaux hors du cadre réglementaire exigent une autorisation (art. 1).",
    },
    {
      type: "figure",
      src: "/blog/central-bank-tunisia.webp",
      width: 1600,
      height: 890,
      alt: "Le siège de la Banque centrale de Tunisie à Tunis, un grand bâtiment moderne derrière des palmiers",
      caption: "La Banque centrale de Tunisie (BCT) à Tunis. Ses circulaires fixent ce qu'un résident peut payer à l'étranger, et par quel intermédiaire.",
      credit: {
        text: "Photo : DrFO.Jr.Tn, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:BCT_-_Tunis.jpg",
      },
    },
    {
      type: "ul",
      items: [
        "Les résidents doivent déclarer leurs avoirs à l’étranger à la BCT (art. 16) et ne peuvent pas en disposer sans autorisation (art. 17).",
        "Toute manœuvre pour contourner ces règles est une infraction (art. 23).",
        "Les sanctions comprennent la prison, une amende d’au moins cinq fois le montant et la confiscation (art. 35 et 36). En mars 2024, le ministère des Finances a indiqué que le projet de nouveau code réduirait certaines peines de prison ([Managers](https://managers.tn/2024/03/18/code-des-changes-peines-de-prison-reduites-a-3-ans-pour-diverses-infractions-financieres/)).",
        "Nous n’avons trouvé aucun texte de la BCT ou du CMF qui autorise la crypto.",
      ],
    },
    {
      type: "p",
      text: "Un nouveau code des changes était encore à l’examen en juin 2026 ([La Presse](https://www.lapresse.tn/2026/06/04/reglementation-de-change-un-nouveau-code-a-lexamen/)). La presse a aussi rapporté que la loi de finances 2026 permet aux résidents d’ouvrir des comptes en devises ([Business News](https://businessnews.com.tn/2025/12/03/comptes-en-devises-pour-les-residents-tunisiens-tout-ce-quil-faut-savoir/1376299/)). Son application par les banques n’est pas confirmée : renseignez-vous auprès de la vôtre.",
    },

    { type: "h2", id: "payment-scams", text: "8. Arnaques : cartes et comptes vendus sur les réseaux sociaux" },
    {
      type: "p",
      text: "Le 30 mai 2024, la BCT a averti que les cartes internationales et les comptes en devises proposés sur les réseaux sociaux sont illégaux et potentiellement dangereux, et qu’y participer peut entraîner des poursuites ([Managers](https://managers.tn/2024/05/30/alerte-de-la-bct-mefiez-vous-des-cartes-bancaires-internationales-vendues-sur-les-reseaux-sociaux)).",
    },
    {
      type: "ul",
      items: [
        "Ne communiquez jamais le code CVC2 de votre carte ni un code OTP, même à un service de « recharge ».",
        "Les services de « recharge » ou de location de carte qui demandent vos données bancaires sont un piège courant.",
        "Des vendeurs P2P peuvent disparaître une fois payés en dinars.",
        "Prêter votre carte technologique viole la déclaration sur l’honneur signée à la banque.",
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Peut-on payer les frais d’une université italienne avec une carte tunisienne ?",
          a: "Parfois, mais ce n’est pas garanti. pagoPA accepte les cartes Visa et Mastercard internationales, mais les usages officiels de la carte technologique ne citent pas les frais de scolarité : demandez à votre banque, le virement reste plus sûr.",
        },
        {
          q: "Combien peut-on dépenser avec la carte technologique ?",
          a: "1 000 TND par année civile pour un particulier, soit environ 297 EUR au cours BCT du 7 octobre 2026. Le chiffre de 10 000 TND concerne uniquement les entreprises.",
        },
        {
          q: "PayPal est-il disponible en Tunisie ?",
          a: "Oui, pour payer et envoyer. Un compte PayPal tunisien ne peut en général pas recevoir d’argent, ce qui ne gêne pas pour payer un avis pagoPA.",
        },
        {
          q: "Acheter de la crypto est-il légal en Tunisie ?",
          a: "Aucun texte tunisien ne l’autorise. Le Code des changes impose de passer par des intermédiaires agréés et de déclarer ses avoirs à l’étranger : acheter de la crypto avec des dinars comporte un vrai risque juridique.",
        },
        {
          q: "Ma banque peut-elle payer un avis pagoPA ?",
          a: "Peut-être, mais nous n’avons pas pu le confirmer. La base légale pour transférer les frais de scolarité et d’examen existe : demandez à votre banque si elle peut régler l’avis par virement.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Banque Centrale de Tunisie : circulaire 2016-09 (opérations courantes, carte technologique)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
        { label: "Banque Centrale de Tunisie : circulaire 2025-10 (études à l’étranger)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "Banque Centrale de Tunisie : cours des devises", url: "https://www.bct.gov.tn/bct/siteprod/cours.jsp" },
        { label: "Ministère des Finances : Code des changes et du commerce extérieur", url: "https://www.finances.gov.tn/sites/default/files/17.pdf" },
        { label: "Ministère des Technologies de la communication : fiche de la carte technologique internationale", url: "https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf" },
        { label: "Banque Zitouna : carte technologique", url: "https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique" },
        { label: "pagoPA : payer depuis l’étranger sans être citoyen italien", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA : payer avec PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "PayPal Italie : pagoPA", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal Tunisie : frais pour les particuliers", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza : taxe régionale et timbre fiscal", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "RedotPay : conditions d’utilisation", url: "https://www.redotpay.com/terms" },

      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les montants en euros utilisent le cours BCT du 7 octobre 2026. Les plafonds de carte, les frais PayPal et pagoPA et le Code des changes peuvent évoluer : vérifiez les pages officielles et interrogez votre banque avant de payer.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Voie la plus sûre", value: "Virement : frais sur facture, scolarité via le dossier études" },
        { label: "Carte technologique", value: "1 000 TND par année civile (environ 297 EUR)" },
        { label: "PayPal sur pagoPA", value: "Commission de 1,50 à 2,50 EUR ; testez avec un petit avis" },
        { label: "Crypto", value: "Aucun texte tunisien ne l’autorise" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Payer en euros pour les Tunisiens" },
    {
      type: "ol",
      items: [
        "Quelle méthode pour quels frais",
        "[La carte technologique internationale](article:technology-card-tunisia)",
        "[Payer pagoPA depuis l’étranger](article:pay-pagopa-from-abroad)",
        "[RedotPay et les cartes crypto](article:redotpay-tunisia)",
        "Une fois à Rome : [ouvrir un compte bancaire](article:bank-account-italy-student)",
      ],
    },
  ],
};
