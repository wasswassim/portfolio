import type { ArticleTranslation } from "../../types";

// Traduction de en.ts : mêmes ids de titres, deux tableaux, un encadré de frais, un bloc de parrainage
// dans la partie P2P, la partie juridique en dernier avant la FAQ.
export const fr: ArticleTranslation = {
  slug: "redotpay-tunisie",
  title: "RedotPay en Tunisie",
  subtitle: "Frais de la carte, recharge en P2P, transferts sûrs et cadre juridique",
  seoTitle: "RedotPay Tunisie 2026 : frais, recharge P2P, risques légaux",
  metaDescription:
    "RedotPay en Tunisie expliqué : frais et plafonds de la carte Visa, recharge P2P via RedotPay ou Binance, envoi sûr d'USDT et ce que dit le code des changes.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["RedotPay Tunisie", "frais carte RedotPay", "recharger RedotPay en P2P", "RedotPay légal en Tunisie", "recharger RedotPay avec Binance P2P", "envoyer des USDT vers RedotPay"],
  summary:
    "RedotPay fonctionne techniquement en Tunisie en octobre 2026 : cette carte crypto Visa de Hong Kong n'exclut pas les citoyens tunisiens et se recharge par le P2P Marketplace de RedotPay ou par Binance P2P. Aucun texte tunisien n'autorise les résidents à acheter ou détenir des cryptos : les résidents de Tunisie qui alimentent une carte RedotPay sont donc juridiquement exposés au regard du code des changes (loi 76-18).",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est purement informatif et ne constitue pas un conseil juridique ou financier. Les règles de change, les règles sur les cryptos et les frais changent souvent. Vérifiez les sources officielles ci-dessous et, en cas de doute, demandez à un avocat ou à votre banque.",
    },
    { type: "p", text: "**Qu'est-ce que RedotPay, comment le recharger, et peut-on l'utiliser depuis la Tunisie ?**" },
    {
      type: "p",
      text: "RedotPay est une fintech de Hong Kong qui permet de dépenser des stablecoins comme l'USDT et l'USDC avec une carte **Visa**, en ligne, en magasin et aux distributeurs. Ses pages officielles n'excluent ni les citoyens tunisiens ni les utilisateurs situés en Tunisie (vérifié le 10 octobre 2026). Vous trouverez ci-dessous le coût de la carte, la recharge en P2P, la comparaison avec la carte technologique tunisienne et la façon d'envoyer des stablecoins en sécurité. Le cadre juridique pour les résidents de Tunisie fait l'objet de la dernière partie.",
    },
    {
      type: "p",
      text: "RedotPay n'est qu'une des cinq solutions comparées dans notre guide [pour payer ses frais d'université en Italie depuis la Tunisie](article:international-card-tunisia), à côté du virement bancaire, de la carte technologique et de PayPal sur pagoPA.",
    },

    { type: "h2", id: "what-is-redotpay", text: "1. Qu'est-ce que RedotPay et comment fonctionne la carte ?" },
    {
      type: "p",
      text: "[RedotPay](ref:redotpay) est un service de carte crypto qui se présente comme « un prestataire de services fintech et non une banque » (RedotPay) : vous déposez des cryptos, surtout des stablecoins comme l'USDT ou l'USDC, et vous les dépensez avec une carte **Visa** (le réseau cité dans ses conditions). La carte physique fonctionne aussi aux distributeurs.",
    },
    {
      type: "figure",
      src: "/blog/brand/redotpay-cards.webp",
      width: 1000,
      height: 563,
      alt: "Des cartes Visa RedotPay roses à côté du logo RedotPay et du slogan Spend Crypto Like Fiat",
      caption: "Pour le commerçant, une carte RedotPay est une carte Visa ordinaire : la crypto est convertie dans la monnaie locale au moment du paiement. Image : RedotPay",
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
        "**Plafonds** : jusqu'à 100 000 USD par opération ; retraits 3 par jour et 30 par mois, jusqu'à 3 750 USD par jour sur une carte en USD (moins dans certains pays) (tableau des frais et plafonds).",
        "**KYC** : photo de votre pièce d'identité originale, scan du visage, adresse et 4 ou 5 questions sur votre métier et l'origine des fonds (vérification d'identité).",
        "**Qui garde l'argent** : les soldes sont détenus par Red Dot Trust Ltd, une société fiduciaire de Hong Kong. Les conditions précisent que le compte n'est pas un compte bancaire.",
        "**Binance Pay** : Binance a mis fin à Binance Pay sur RedotPay le 3 avril 2026 ([Cointelegraph](https://cointelegraph.com/news/binance-redotpay-lawsuit-alleged-473-million-losses)) ; une recharge depuis Binance passe donc désormais par un retrait crypto classique vers une adresse de dépôt RedotPay (voir la partie sur la recharge en P2P ci-dessous).",
      ],
    },

    { type: "h2", id: "p2p-explained", text: "2. Comment recharger RedotPay en P2P ?" },
    {
      type: "p",
      text: "Un solde [RedotPay](ref:redotpay) se recharge en P2P de deux façons : acheter de l'USDT ou de l'USDC à un autre utilisateur sur le P2P Marketplace de RedotPay, ou acheter sur Binance P2P puis retirer les jetons vers votre adresse de dépôt RedotPay. Le P2P (pair à pair) consiste à acheter des cryptos directement à une autre personne sur une plateforme : vous la payez en monnaie locale, et la plateforme bloque ses cryptos sous **séquestre** (escrow) jusqu'à ce qu'elle confirme votre paiement.",
    },
    {
      type: "figure",
      src: "/blog/brand/binance-banner.webp",
      width: 860,
      height: 484,
      alt: "Le logo jaune de Binance sur un fond sombre parsemé de points",
      caption: "Binance P2P est la deuxième voie décrite ici : Binance garde les cryptos du vendeur sous séquestre jusqu'à la fin de la commande. Image : Binance",
    },
    { type: "h3", id: "p2p-redotpay-marketplace", text: "Voie 1 : le P2P Marketplace de RedotPay" },
    {
      type: "p",
      text: "Dans l'application RedotPay, le P2P Marketplace permet d'acheter de l'USDT ou de l'USDC à un autre utilisateur ; les cryptos arrivent directement sur votre solde RedotPay, sans transfert entre applications. Les cryptos du vendeur restent sous séquestre pendant la commande. RedotPay indique que son P2P « ne garantit pas le règlement » des échanges : les précautions habituelles du P2P s'appliquent donc.",
    },
    { type: "h3", id: "p2p-binance-deposit", text: "Voie 2 : Binance P2P, puis un dépôt sur RedotPay" },
    {
      type: "p",
      text: "Achetez de l'USDT ou de l'USDC sur Binance P2P, puis retirez-les de Binance vers votre **adresse de dépôt RedotPay**. Dans RedotPay, ouvrez la page de dépôt et choisissez d'abord le jeton et le réseau ; dans Binance, choisissez exactement **le même jeton et le même réseau** (par exemple de l'USDT sur Tron (TRC20) vers une adresse USDT TRC20). Le réseau prélève des frais de retrait, et une erreur de réseau peut faire perdre les fonds : suivez les étapes de sécurité pour les stablecoins ci-dessous et envoyez d'abord un petit test.",
    },
    { type: "h3", id: "p2p-order-steps", text: "Comment se déroule une commande avec séquestre" },
    {
      type: "steps",
      items: [
        { title: "Choisir une annonce", text: "Dans la zone P2P, vous choisissez le vendeur ; en Express, le système le choisit. Lisez ses conditions et regardez son taux de réussite." },
        { title: "Les cryptos sont bloquées", text: "Dès la commande passée, les cryptos du vendeur sont réservées sous séquestre." },
        { title: "Payer hors de l'application", text: "Payez avec le moyen indiqué dans la commande, depuis un compte **à votre nom**, dans le délai prévu (souvent 15 à 45 minutes)." },
        { title: "Notifier, puis attendre", text: "Appuyez sur « Transféré, notifier le vendeur » seulement après avoir payé. Le vendeur vérifie et libère les cryptos. N'annulez jamais après avoir payé ; utilisez plutôt le bouton Appel ([guide Binance](https://www.binance.com/en/support/faq/detail/360039384951))." },
      ],
    },
    { type: "h3", id: "p2p-fees", text: "Les frais et la règle du nom" },
    {
      type: "p",
      text: "Sur la [page des frais P2P de Binance](https://www.binance.com/en/fee/p2pFeeRate) (vérifiée le 10 octobre 2026), le preneur (taker) en zone P2P payait 0 %, l'annonceur (maker) 0,20 %, et l'Express coûtait 0,10 % au preneur. Le vrai coût est l'écart entre prix d'achat et de vente, plus les frais bancaires et les frais de réseau du retrait. Sur les deux plateformes, le nom du payeur doit correspondre au nom vérifié de la contrepartie : un paiement depuis le compte d'un tiers peut être refusé ou gelé.",
    },
    {
      type: "p",
      text: "En vous inscrivant sur RedotPay avec le lien partenaire ci-dessous, vous recevez sa récompense de bienvenue de 5 USD, et le code promo est appliqué automatiquement.",
    },
    { type: "referral", provider: "redotpay" },
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

    { type: "h2", id: "compare", text: "3. Comment RedotPay se compare-t-il à la carte technologique ?" },
    {
      type: "p",
      text: "RedotPay offre des plafonds plus élevés et se recharge en cryptos, alors que la carte technologique tunisienne (CTI) est la carte autorisée par la BCT pour les résidents de Tunisie, dans la limite d'une allocation annuelle en dinars.",
    },
    {
      type: "table",
      caption: "Les deux cartes sur lesquelles les Tunisiens s'interrogent le plus, en octobre 2026.",
      head: ["", "RedotPay", "Carte technologique (CTI)"],
      rows: [
        ["Qui peut l'ouvrir", "Les citoyens tunisiens ne sont pas exclus ; validation non garantie", "Résidents tunisiens ayant au moins le bac"],
        ["Réseau", "Visa", "Non indiqué sur les pages des émetteurs"],
        ["Frais de carte", "10 USD virtuelle, 100 USD physique, pas de frais mensuels", "Selon l'émetteur (Banque Zitouna : 20 TND par an)"],
        ["Coût de change / conversion", "1,2 % de change + 1 % de conversion", "Taux et frais de votre banque"],
        ["Plafonds", "100 000 USD par opération", "1 000 TND par année civile"],
        ["Alimentation", "Dépôt crypto, carte bancaire (3 %), P2P", "Dinars dans une banque tunisienne ou à La Poste"],
        ["Statut juridique pour un résident de Tunisie", "Aucun texte d'autorisation ; exposé au code des changes (partie 6)", "Légal, pour les usages listés par la BCT"],
        ["Principaux risques", "Gels, pas de garantie des dépôts, procès", "Liste d'usages autorisés étroite"],
      ],
    },
    {
      type: "p",
      text: "Pour un résident de Tunisie, la carte autorisée par la BCT est la [carte technologique internationale](article:technology-card-tunisia), dans la limite [des usages qu'elle permet](article:technology-card-tunisia#allowed-uses).",
    },

    { type: "h2", id: "wallet-safety", text: "4. Comment envoyer des USDT ou des USDC sans les perdre ?" },
    {
      type: "p",
      text: "Pour envoyer des USDT ou des USDC en sécurité, utilisez le même jeton et le même réseau des deux côtés, copiez l'adresse avec le bouton de l'application, vérifiez-la et envoyez d'abord un petit test, car un envoi crypto ne peut pas être annulé. Dans l'UE, Binance signale des restrictions MiCA sur les stablecoins non autorisés : l'USDC peut être plus simple que l'USDT.",
    },
    { type: "h3", id: "step-coin-network", text: "Étape 1 : même jeton et même réseau des deux côtés" },
    {
      type: "p",
      text: "Choisissez d'abord le jeton et le réseau dans l'application **qui reçoit**, puis exactement la même paire dans celle qui envoie (retraits RedotPay).",
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

    { type: "h2", id: "glossary", text: "5. Lexique des termes crypto" },
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

    { type: "h2", id: "legal-status", text: "6. Une carte crypto est-elle légale pour un résident de Tunisie ?" },
    {
      type: "p",
      text: "Aucun texte tunisien ne rend légale l'alimentation d'une carte crypto par un résident de Tunisie : aucune loi ni circulaire de la Banque centrale (BCT) autorisant expressément l'achat de cryptos ou de stablecoins n'a pu être trouvée. Le code des changes ([loi 76-18](https://www.finances.gov.tn/sites/default/files/17.pdf)) fixe le cadre :",
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
      type: "figure",
      src: "/blog/central-bank-tunisia-sign.webp",
      width: 1600,
      height: 681,
      alt: "Plaque de la Banque centrale de Tunisie avec les armoiries nationales et son nom en arabe et en français",
      caption: "La Banque centrale de Tunisie (BCT). Aucune de ses circulaires n'autorise expressément les résidents à acheter de la crypto.",
      credit: {
        text: "Photo : Wael Ghabara, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Tunisia441.jpg",
      },
    },
    {
      type: "p",
      text: "Acheter des USDT en dinars, par P2P ou avec une carte étrangère, sort de ces circuits : les résidents de Tunisie qui alimentent une carte crypto sont donc juridiquement exposés au regard du code des changes. Les [conditions de Binance](https://www.binance.com/en/terms) excluent aussi les utilisateurs pour qui l'usage serait illégal localement, même si leur pays ne figure pas sur sa [liste des pays interdits](https://www.binance.com/en/legal/list-of-prohibited-countries). Un nouveau code des changes (projet de loi 115/2025) est en discussion mais n'était pas adopté au dernier compte rendu trouvé. Pour en savoir plus, lisez [la partie sur la réglementation des changes de notre guide des paiements](article:international-card-tunisia#exchange-rules).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Risques à connaître avant de déposer",
      text: "Les conditions permettent à RedotPay de geler ou fermer un compte « à tout moment, sans préavis », et aucune garantie des dépôts n'est mentionnée. Des utilisateurs sur [Trustpilot](https://www.trustpilot.com/review/www.redotpay.com) signalent des fonds bloqués pendant des semaines lors de contrôles sur l'origine des fonds. En août 2026, des filiales de Binance ont poursuivi les cofondateurs de RedotPay à Hong Kong pour environ 472,8 millions USD ; ce ne sont que des allégations, aucune décision n'a été signalée, et RedotPay dit se défendre.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "RedotPay fonctionne-t-il en Tunisie ?",
          a: "Oui, techniquement : en octobre 2026, la Tunisie ne figure ni sur la liste des nationalités exclues ni sur celle des lieux bloqués par RedotPay, donc un citoyen tunisien peut s'inscrire, sans garantie de validation. Juridiquement, aucune loi ni circulaire de la BCT n'autorise un résident à alimenter une carte crypto : les résidents de Tunisie qui utilisent RedotPay sont exposés au regard du code des changes tunisien (loi 76-18).",
        },
        {
          q: "Combien coûte la carte RedotPay ?",
          a: "La carte virtuelle RedotPay coûte 10 USD et la carte physique 100 USD, sans frais mensuels ni annuels. Un paiement dans une autre devise ajoute 1,2 %, et la conversion des cryptos pour payer ajoute 1 %. RedotPay publie les frais et plafonds à jour dans le tableau des frais et plafonds de son centre d'aide ; ils changent avec le temps, vérifiez-les avant de commander une carte.",
        },
        {
          q: "Comment recharger RedotPay avec des USDT achetés sur Binance ?",
          a: "Achetez les USDT sur Binance P2P, puis retirez-les de Binance vers votre adresse de dépôt RedotPay avec exactement le même jeton et le même réseau des deux côtés, par exemple de l'USDT sur Tron (TRC20). Envoyez d'abord un petit test et attendez qu'il arrive. Binance ne prend plus en charge Binance Pay sur RedotPay, et le P2P Marketplace de RedotPay permet aussi d'acheter des USDT directement dans l'application.",
        },
        {
          q: "Qu'est-ce que Binance P2P et est-ce sûr ?",
          a: "Binance P2P est une place de marché où vous achetez des cryptos à un autre utilisateur pendant que Binance garde celles du vendeur sous séquestre jusqu'à la fin de la commande. Le séquestre réduit le risque mais n'empêche pas les fausses preuves de paiement, les faux SMS, les paiements par un tiers ni les échanges déplacés sur Telegram ou WhatsApp. Payez uniquement depuis un compte à votre nom et n'annulez jamais après avoir payé : utilisez le bouton Appel.",
        },
        {
          q: "Que se passe-t-il si j'envoie des USDT sur le mauvais réseau ?",
          a: "Les fonds sont en général perdus. Les conditions de Binance indiquent que des cryptos envoyées à une adresse incompatible sont perdues, et toute tentative de récupération est payante et sans garantie. Pour l'éviter, choisissez d'abord le jeton et le réseau dans l'application qui reçoit, puis exactement la même paire dans celle qui envoie, et faites un petit envoi test avant le montant principal.",
        },
        {
          q: "RedotPay peut-il geler mon compte ?",
          a: "Oui. Les conditions de RedotPay l'autorisent à geler ou fermer un compte à tout moment, sans préavis, et aucune garantie des dépôts n'est mentionnée. Des utilisateurs sur Trustpilot signalent des fonds bloqués pendant des semaines lors de contrôles sur l'origine des fonds : ne comptez donc pas sur un seul solde RedotPay pour un paiement avec une échéance.",
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
        { label: "Recharge", value: "Dépôt crypto, carte bancaire (3 %) ou P2P (RedotPay ou Binance)" },
        { label: "Résidents de Tunisie", value: "Aucun texte n'autorise les cryptos ; exposition juridique" },
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
