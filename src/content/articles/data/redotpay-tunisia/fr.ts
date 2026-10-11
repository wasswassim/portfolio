import type { ArticleTranslation } from "../../types";

// Traduction de en.ts : mêmes ids de titres, deux tableaux, un encadré de frais, un bloc de parrainage.
export const fr: ArticleTranslation = {
  slug: "redotpay-tunisie",
  title: "RedotPay en Tunisie",
  subtitle: "Frais de la carte, P2P expliqué, risques juridiques et transferts sûrs",
  seoTitle: "RedotPay en Tunisie : frais, P2P et risques juridiques",
  metaDescription:
    "RedotPay expliqué aux Tunisiens : frais et plafonds de la carte, fonctionnement du P2P avec séquestre, pourquoi pas Rizon, risques juridiques et envois sûrs.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["RedotPay Tunisie", "frais carte RedotPay", "Binance P2P expliqué", "Rizon Tunisie", "carte crypto Tunisie légal", "envoyer des USDT en sécurité"],
  summary:
    "RedotPay est un service de carte crypto (Visa) basé à Hong Kong dont les pages officielles n'excluent pas les citoyens tunisiens, mais aucun texte tunisien n'autorise les résidents à acheter ou détenir des cryptos : l'utiliser depuis la Tunisie comporte un vrai risque juridique et ce guide ne le recommande pas. Pour les lecteurs qui vivent déjà à l'étranger, il explique les frais, le P2P avec séquestre, pourquoi Rizon n'est pas une option et comment envoyer des stablecoins sans les perdre.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est purement informatif et ne constitue pas un conseil juridique ou financier. Les règles de change, les règles sur les cryptos et les frais changent souvent. Vérifiez les sources officielles ci-dessous et, en cas de doute, demandez à un avocat ou à votre banque.",
    },
    { type: "p", text: "**Peut-on utiliser RedotPay en Tunisie, et est-ce un moyen sûr de payer en euros ?**" },
    {
      type: "p",
      text: "En bref : les pages officielles de RedotPay n'excluent ni les citoyens tunisiens ni les utilisateurs situés en Tunisie (vérifié le 10 octobre 2026). Mais le code des changes tunisien impose de passer par des intermédiaires agréés, et aucun texte tunisien n'autorise les résidents à acheter ou détenir des cryptos. Pour un résident de Tunisie, alimenter une carte crypto est juridiquement risqué, et nous ne le recommandons pas.",
    },
    {
      type: "p",
      text: "Les parties pratiques ci-dessous (P2P, sécurité du portefeuille) s'adressent aux lecteurs qui **vivent déjà à l'étranger**, par exemple les étudiants en Italie, où ils peuvent utiliser ces services légalement. Pour les moyens légaux de payer depuis la Tunisie, commencez par notre [guide pour payer les frais italiens avec une carte internationale](article:international-card-tunisia).",
    },

    { type: "h2", id: "what-is-redotpay", text: "1. Qu'est-ce que RedotPay et comment fonctionne la carte ?" },
    {
      type: "p",
      text: "RedotPay se présente comme « un prestataire de services fintech et non une banque » ([RedotPay](https://www.redotpay.com/)). Vous déposez des cryptos, surtout des stablecoins comme l'USDT ou l'USDC, et vous les dépensez avec une carte **Visa** (le réseau cité dans ses [conditions](https://www.redotpay.com/terms)). La carte physique fonctionne aussi aux distributeurs.",
    },
    {
      type: "fees",
      title: "Frais de la carte RedotPay (octobre 2026)",
      text: "Aucuns frais de tenue mensuels ou annuels. Recharger avec une carte bancaire coûte 3 % (minimum 1 USD).",
      feeIds: ["redotpay-virtual", "redotpay-physical", "redotpay-fx", "redotpay-conversion"],
    },
    {
      type: "ul",
      items: [
        "**Plafonds** : jusqu'à 100 000 USD par opération ; retraits 3 par jour et 30 par mois, jusqu'à 3 750 USD par jour sur une carte en USD (moins dans certains pays) ([tableau des frais et plafonds](https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees)).",
        "**KYC** : photo de votre pièce d'identité originale, scan du visage, adresse et 4 ou 5 questions sur votre métier et l'origine des fonds ([vérification d'identité](https://helpcenter.redotpay.com/en/articles/10920717-identity-verification-requirements)).",
        "**Qui garde l'argent** : les soldes sont détenus par Red Dot Trust Ltd, une société fiduciaire de Hong Kong. Les conditions précisent que le compte n'est pas un compte bancaire, et aucune garantie des dépôts n'est mentionnée.",
        "**Binance Pay** : Binance a mis fin à Binance Pay sur RedotPay le 3 avril 2026 ([Cointelegraph](https://cointelegraph.com/news/binance-redotpay-lawsuit-alleged-473-million-losses)) ; ne comptez pas sur ce moyen de recharge.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Risques à connaître avant de déposer",
      text: "Les conditions permettent à RedotPay de geler ou fermer un compte « à tout moment, sans préavis ». Des utilisateurs sur [Trustpilot](https://www.trustpilot.com/review/www.redotpay.com) signalent des fonds bloqués pendant des semaines lors de contrôles sur l'origine des fonds. En août 2026, des filiales de Binance ont poursuivi les cofondateurs de RedotPay à Hong Kong pour environ 472,8 millions USD ; ce ne sont que des allégations, aucune décision n'a été signalée, et RedotPay dit se défendre.",
    },

    { type: "h2", id: "legal-status", text: "2. Une carte crypto est-elle légale pour un résident de Tunisie ?" },
    {
      type: "p",
      text: "Aucune loi ni circulaire de la Banque centrale (BCT) autorisant expressément l'achat de cryptos ou de stablecoins n'a pu être trouvée. Le code des changes ([loi 76-18](https://www.finances.gov.tn/sites/default/files/17.pdf)) fixe le cadre :",
    },
    {
      type: "ul",
      items: [
        "**Art. 3** : les opérations de change passent uniquement par la BCT ou les intermédiaires agréés (banques, La Poste).",
        "**Art. 16 et 17** : les résidents doivent déclarer leurs avoirs à l'étranger et ne peuvent pas en disposer sans autorisation. Un solde crypto sur une plateforme étrangère peut être considéré comme tel.",
        "**Art. 21** : les règlements entre résidents se font en Tunisie et en dinars.",
        "**Art. 35** : les infractions sont punies d'un mois à cinq ans de prison et d'une amende d'au moins cinq fois le montant en cause.",
      ],
    },
    {
      type: "p",
      text: "Acheter des USDT en dinars, par P2P ou avec une carte étrangère, sort de ces circuits. Un nouveau code des changes (projet de loi 115/2025) est en discussion mais n'était pas adopté au dernier compte rendu trouvé. Pour en savoir plus, lisez [la partie sur la réglementation des changes de notre guide des paiements](article:international-card-tunisia#exchange-rules).",
    },

    { type: "h2", id: "compare", text: "3. RedotPay, Rizon et la carte technologique comparés" },
    {
      type: "table",
      caption: "Trois cartes sur lesquelles les Tunisiens s'interrogent, en octobre 2026.",
      head: ["", "RedotPay", "Rizon", "Carte technologique (CTI)"],
      rows: [
        ["Qui peut l'ouvrir", "Les citoyens tunisiens ne sont pas exclus ; validation non garantie", "Ne mentionne pas la Tunisie parmi les nationalités acceptées", "Résidents tunisiens ayant au moins le bac"],
        ["Réseau", "Visa", "Visa", "Non indiqué sur les pages des émetteurs"],
        ["Frais de carte", "10 USD virtuelle, 100 USD physique, pas de frais mensuels", "10 USD virtuelle (formule Standard)", "Selon l'émetteur (Banque Zitouna : 20 TND par an)"],
        ["Coût de change / conversion", "1,2 % de change + 1 % de conversion", "1,7 % + 0,10 USD (Standard)", "Taux et frais de votre banque"],
        ["Plafonds", "100 000 USD par opération", "Aucun plafond de carte indiqué", "1 000 TND par année civile"],
        ["Alimentation", "Dépôt crypto, carte bancaire (3 %), P2P", "USDC ou USDT uniquement", "Dinars dans une banque tunisienne ou à La Poste"],
        ["Statut juridique pour un résident de Tunisie", "Aucun texte d'autorisation ; exposé au code des changes", "Tunisie absente des nationalités acceptées", "Légal, pour les usages listés par la BCT"],
        ["Principaux risques", "Gels, pas de garantie des dépôts, procès", "Refus KYC définitif", "Liste d'usages autorisés étroite"],
      ],
    },
    {
      type: "p",
      text: "Pour un résident de Tunisie, l'option légale est la [carte technologique internationale](article:technology-card-tunisia), dans la limite [des usages autorisés par la BCT](article:technology-card-tunisia#allowed-uses).",
    },
    {
      type: "p",
      text: "Si vous vivez déjà là où l'usage de RedotPay est légal et décidez d'ouvrir un compte, vous pouvez vous inscrire avec la carte ci-dessous ; le code de parrainage doit être saisi à l'inscription, car il ne peut pas être ajouté ensuite.",
    },
    { type: "referral", provider: "redotpay" },

    { type: "h2", id: "why-not-rizon", text: "4. Pourquoi ce guide ne recommande pas Rizon" },
    {
      type: "p",
      text: "Rizon est une application de stablecoins avec une carte Visa, mais l'éligibilité dépend du **passeport**. Son centre d'aide (juillet 2026) ne mentionne pas la Tunisie parmi les nationalités acceptées, ses conditions visent les résidents des États-Unis et d'Amérique latine, et son centre d'aide précise qu'un refus KYC est définitif. Un titulaire de passeport tunisien serait très probablement refusé : nous ne mettons donc pas de lien.",
    },

    { type: "h2", id: "p2p-explained", text: "5. Le P2P expliqué : comment fonctionne une commande avec séquestre" },
    {
      type: "p",
      text: "Le P2P (pair à pair) consiste à acheter des cryptos directement à une autre personne sur une plateforme. Vous la payez en monnaie locale, et la plateforme bloque ses cryptos sous **séquestre** (escrow) jusqu'à ce qu'elle confirme votre paiement. Binance P2P et le P2P Marketplace de RedotPay fonctionnent ainsi. Les [conditions de Binance](https://www.binance.com/en/terms) excluent les utilisateurs pour qui l'usage serait illégal localement, même si leur pays ne figure pas sur sa [liste des pays interdits](https://www.binance.com/en/legal/list-of-prohibited-countries).",
    },
    { type: "h3", id: "p2p-order-steps", text: "Ce que le séquestre protège (et ne protège pas) dans une commande P2P, pour les lecteurs vivant à l'étranger" },
    {
      type: "steps",
      items: [
        { title: "Choisir une annonce", text: "Dans la zone P2P, vous choisissez le vendeur ; en Express, le système le choisit. Lisez ses conditions et regardez son taux de réussite." },
        { title: "Les cryptos sont bloquées", text: "Dès la commande passée, les cryptos du vendeur sont réservées dans le séquestre de Binance." },
        { title: "Payer hors de l'application", text: "Payez avec le moyen indiqué dans la commande, depuis un compte **à votre nom**, dans le délai prévu (souvent 15 à 45 minutes)." },
        { title: "Notifier, puis attendre", text: "Appuyez sur « Transféré, notifier le vendeur » seulement après avoir payé. Le vendeur vérifie et libère les cryptos. N'annulez jamais après avoir payé ; utilisez plutôt le bouton Appel ([guide Binance](https://www.binance.com/en/support/faq/detail/360039384951))." },
      ],
    },
    { type: "h3", id: "p2p-fees", text: "Les frais et la règle du nom" },
    {
      type: "p",
      text: "Sur la [page des frais P2P de Binance](https://www.binance.com/en/fee/p2pFeeRate) (vérifiée le 10 octobre 2026), le preneur (taker) en zone P2P payait 0 %, l'annonceur (maker) 0,20 %, et l'Express coûtait 0,10 % au preneur. Le vrai coût est l'écart entre prix d'achat et de vente, plus les frais bancaires. Le nom du payeur doit correspondre au nom vérifié de la contrepartie. RedotPay indique que son P2P « ne garantit pas le règlement » des échanges ([P2P Marketplace](https://www.redotpay.com/p2p-marketplace)). Acheter de la crypto avec des dinars depuis la Tunisie vous expose au regard du code des changes (voir la section 2) ; ce guide n'explique pas comment le faire.",
    },
    { type: "h3", id: "p2p-scams", text: "Les arnaques P2P courantes" },
    {
      type: "table",
      caption: "Arnaques listées par Binance et comment les repérer.",
      head: ["Arnaque", "Comment la repérer"],
      rows: [
        ["Fausse preuve de paiement", "Vérifiez votre propre application bancaire, jamais une capture d'écran."],
        ["Faux SMS", "Connectez-vous à votre compte ; un SMS peut être falsifié."],
        ["Paiement par un tiers", "Le nom du payeur diffère du nom vérifié."],
        ["Intermédiaire caché", "L'échange commence sur Telegram ou WhatsApp."],
        ["Faux support", "Binance n'envoie jamais d'e-mail pour finir une commande P2P."],
      ],
    },

    { type: "h2", id: "wallet-safety", text: "6. Envoyer des stablecoins en sécurité, pas à pas" },
    {
      type: "p",
      text: "Pour les lecteurs à l'étranger. Un envoi crypto ne peut pas être annulé. Dans l'UE, Binance signale des restrictions MiCA sur les stablecoins non autorisés : l'USDC peut être plus simple que l'USDT.",
    },
    { type: "h3", id: "step-coin-network", text: "Étape 1 : même jeton et même réseau des deux côtés" },
    {
      type: "p",
      text: "Choisissez d'abord le jeton et le réseau dans l'application **qui reçoit**, puis exactement la même paire dans celle qui envoie ([retraits RedotPay](https://helpcenter.redotpay.com/en/articles/10339292-how-do-i-withdraw-crypto-from-redotpay-to-another-wallet-or-platform)).",
    },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "L'USDT sur Tron (TRC20) n'est pas l'USDT sur BNB Smart Chain. Un réseau que le destinataire ne liste pas peut faire perdre les fonds. Un champ « mémo » inattendu signifie : arrêtez-vous." },
    { type: "h3", id: "step-copy-address", text: "Étape 2 : copiez l'adresse avec le bouton copier ou le QR code" },
    { type: "p", text: "Utilisez le bouton copier de l'application ou scannez son QR code. Ne tapez jamais une adresse à la main." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Un logiciel malveillant peut remplacer une adresse copiée. Installez les applications uniquement depuis les magasins officiels." },
    { type: "h3", id: "step-compare-characters", text: "Étape 3 : comparez les premiers et derniers caractères" },
    { type: "p", text: "Comparez les 6 premiers et les 6 derniers caractères avec l'original, plus quelques-uns au milieu." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Si un seul caractère diffère, annulez et copiez à nouveau." },
    { type: "h3", id: "step-address-poisoning", text: "Étape 4 : ne copiez jamais une adresse depuis l'historique" },
    { type: "p", text: "Avec l'**empoisonnement d'adresse** (address poisoning), des escrocs envoient un micro-transfert depuis une adresse ressemblante pour qu'elle apparaisse dans votre historique. Copiez uniquement depuis l'application qui reçoit ou votre carnet d'adresses." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Un minuscule dépôt inattendu est un signal d'alerte. Ne réutilisez jamais son adresse." },
    { type: "h3", id: "step-test-transaction", text: "Étape 5 : envoyez d'abord un petit test" },
    { type: "p", text: "Envoyez un petit montant au-dessus du minimum, attendez qu'il arrive, puis envoyez le reste à la **même adresse enregistrée**." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Le test ne vous protège que si l'envoi principal va exactement à la même adresse." },
    { type: "h3", id: "step-block-explorer", text: "Étape 6 : vérifiez le TxID sur un explorateur de blocs" },
    { type: "p", text: "Collez le TxID dans l'explorateur du réseau (Solscan, BscScan, PolygonScan) pour voir le montant, le destinataire et le statut ([Binance Academy](https://www.binance.com/en/academy/articles/what-is-a-blockchain-explorer))." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "« En attente » ne veut pas dire perdu. Ne renvoyez rien avant la confirmation." },
    { type: "h3", id: "step-whitelist", text: "Étape 7 : mettez vos adresses en liste blanche" },
    { type: "p", text: "Activez la [liste blanche de retrait](https://www.binance.com/en/support/faq/how-to-enable-withdrawal-whitelist-on-binance-1d08944f103b4fc78d3519913b600086) et enregistrez chaque adresse avec un libellé clair, le jeton et le réseau." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Modifier la liste blanche peut suspendre les retraits de 24 à 72 heures. Anticipez vos échéances." },
    { type: "h3", id: "step-seed-phrase", text: "Étape 8 : ne partagez jamais votre phrase de récupération ni vos codes 2FA" },
    { type: "p", text: "Un vrai support ne demande jamais votre phrase de récupération (seed phrase), vos mots de passe ou vos codes 2FA." },
    { type: "callout", tone: "warning", title: "Stop, vérifiez", text: "Quiconque vous les demande, par chat, e-mail ou téléphone, est un escroc." },

    { type: "h2", id: "glossary", text: "7. Lexique des termes crypto" },
    {
      type: "keyFacts",
      items: [
        { label: "Wallet (portefeuille)", value: "Une application ou un compte qui garde vos cryptos et permet d'envoyer et recevoir." },
        { label: "Adresse", value: "Une longue suite de lettres et de chiffres, comme un IBAN pour les cryptos." },
        { label: "Réseau / chain", value: "La route empruntée par l'argent (Solana, BNB Smart Chain, Tron…). Les deux côtés doivent utiliser la même." },
        { label: "Stablecoin", value: "Un jeton conçu pour valoir 1 dollar américain." },
        { label: "USDT", value: "Le stablecoin en dollars le plus courant, émis par Tether." },
        { label: "USDC", value: "Un stablecoin en dollars émis par Circle." },
        { label: "Gas fee (frais de réseau)", value: "Les frais payés pour traiter un transfert sur un réseau." },
        { label: "P2P", value: "Acheter des cryptos directement à une autre personne sur une plateforme." },
        { label: "Escrow (séquestre)", value: "La plateforme bloque les cryptos du vendeur jusqu'à la fin de l'échange." },
        { label: "KYC", value: "La vérification d'identité (pièce et scan du visage) avant d'utiliser le service." },
        { label: "Transaction test", value: "Un petit envoi pour vérifier l'adresse avant le transfert principal." },
        { label: "Explorateur de blocs", value: "Un site public où chacun peut consulter un transfert." },
        { label: "TxID", value: "La référence unique d'un transfert, comme la référence d'un virement." },
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "RedotPay fonctionne-t-il en Tunisie ?",
          a: "Techniquement oui : en octobre 2026, la Tunisie ne figure ni sur la liste des nationalités exclues ni sur celle des lieux bloqués par RedotPay. Juridiquement, aucun texte tunisien n'autorise un résident à alimenter une carte crypto : c'est risqué et nous ne le recommandons pas depuis la Tunisie.",
        },
        {
          q: "Combien coûte la carte RedotPay ?",
          a: "10 USD pour la carte virtuelle et 100 USD pour la carte physique, sans frais mensuels. Un paiement dans une autre devise ajoute 1,2 %, et la conversion crypto 1 %.",
        },
        {
          q: "Un Tunisien peut-il ouvrir un compte Rizon ?",
          a: "Très probablement pas : la Tunisie ne figure pas sur la liste des nationalités acceptées par Rizon, qui précise qu'un refus KYC est définitif.",
        },
        {
          q: "Qu'est-ce que Binance P2P et est-ce sûr ?",
          a: "C'est une place de marché où vous achetez des cryptos à un autre utilisateur pendant que Binance garde celles du vendeur sous séquestre. Le séquestre réduit le risque mais n'empêche pas les fausses preuves de paiement, les paiements par un tiers ni les arnaques hors plateforme.",
        },
        {
          q: "Que se passe-t-il si j'envoie des USDT sur le mauvais réseau ?",
          a: "Les fonds sont en général perdus. Les conditions de Binance indiquent que des cryptos envoyées à une adresse incompatible sont perdues, et toute tentative de récupération est payante et sans garantie.",
        },
        {
          q: "RedotPay peut-il geler mon compte ?",
          a: "Oui. Ses conditions l'autorisent à geler ou fermer un compte à tout moment sans préavis, et des utilisateurs signalent des blocages lors de contrôles sur l'origine des fonds.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "RedotPay : frais et plafonds de la carte", url: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees" },
        { label: "RedotPay : exigences de vérification d'identité", url: "https://helpcenter.redotpay.com/en/articles/10920717-identity-verification-requirements" },
        { label: "RedotPay : pays et régions non pris en charge", url: "https://helpcenter.redotpay.com/en/articles/10339263-redotpay-unsupported-countries-regions" },
        { label: "RedotPay : restrictions d'accès selon la localisation", url: "https://helpcenter.redotpay.com/en/articles/14252906-location-based-access-restrictions" },
        { label: "RedotPay : conditions d'utilisation", url: "https://www.redotpay.com/terms" },
        { label: "RedotPay : P2P Marketplace", url: "https://www.redotpay.com/p2p-marketplace" },
        { label: "RedotPay : retirer des cryptos vers un autre portefeuille", url: "https://helpcenter.redotpay.com/en/articles/10339292-how-do-i-withdraw-crypto-from-redotpay-to-another-wallet-or-platform" },
        { label: "Binance : conditions d'utilisation", url: "https://www.binance.com/en/terms" },
        { label: "Binance : liste des pays interdits", url: "https://www.binance.com/en/legal/list-of-prohibited-countries" },
        { label: "Binance : acheter des cryptos en P2P", url: "https://www.binance.com/en/support/faq/detail/360039384951" },
        { label: "Binance : éviter les arnaques P2P courantes", url: "https://www.binance.com/en/support/faq/detail/0acb8aea955f4970a70bef25ee05f2e2" },
        { label: "Binance : frais P2P", url: "https://www.binance.com/en/fee/p2pFeeRate" },
        { label: "Ministère des Finances (Tunisie) : code des changes (loi 76-18)", url: "https://www.finances.gov.tn/sites/default/files/17.pdf" },
        { label: "Banque Centrale de Tunisie : circulaire 2016-09 (carte technologique)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les frais, pays acceptés et réseaux changent ; vérifiez dans les applications RedotPay et Binance avant tout envoi. Le code des changes tunisien pourrait être réformé : surveillez l'adoption du projet de loi 115/2025.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Carte RedotPay", value: "Visa ; 10 USD virtuelle, 100 USD physique, sans frais mensuels" },
        { label: "Coût d'un paiement en euros", value: "1,2 % de change + 1 % de conversion crypto" },
        { label: "Rizon", value: "Ne mentionne pas la Tunisie parmi les nationalités acceptées" },
        { label: "Résidents de Tunisie", value: "Aucun texte n'autorise les cryptos ; risque juridique" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Le parcours des paiements en bref" },
    {
      type: "ol",
      items: [
        "[Payer les frais italiens avec une carte internationale](article:international-card-tunisia)",
        "[La carte technologique internationale](article:technology-card-tunisia)",
        "[Payer pagoPA depuis l'étranger](article:pay-pagopa-from-abroad)",
        "RedotPay, P2P et sécurité du portefeuille",
        "[Ouvrir un compte bancaire en Italie](article:bank-account-italy-student)",
      ],
    },
  ],
};
