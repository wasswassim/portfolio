import type { ArticleTranslation } from "../../types";

// Translation of en.ts (same heading ids, one table, two fee boxes). Italian terms on the pagoPA screens stay in Italian.
export const fr: ArticleTranslation = {
  slug: "payer-pagopa-avec-paypal-tunisie",
  title: "Payer un avis pagoPA depuis l’étranger",
  subtitle: "Avec PayPal ou une carte internationale tunisienne, sans SPID : les étapes, les frais et que faire si le paiement échoue",
  seoTitle: "Payer pagoPA depuis l’étranger avec PayPal ou une carte",
  metaDescription:
    "Payer un avis pagoPA depuis l’étranger ou la Tunisie avec PayPal ou une carte internationale : sans SPID, 6 étapes, les frais et que faire en cas de refus.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["payer pagoPA depuis l’étranger", "payer pagoPA avec PayPal", "paiement pagoPA Tunisie", "carte internationale pagoPA", "checkout.pagopa.it", "avviso di pagamento"],
  summary:
    "Payer un avis pagoPA depuis l’étranger ou depuis la Tunisie est un paiement normal et simple : en ligne sur checkout.pagopa.it par carte ou PayPal, sans SPID, ou en espèces dans un bureau de tabac (tabaccheria) ou un bureau de poste une fois en Italie. En octobre 2026, PayPal coûte 1,50 EUR (2,50 EUR au-delà de 248,50 EUR), plus environ 4 % si PayPal convertit la devise. D’après mon expérience, beaucoup d’étudiants tunisiens font aussi payer l’avis par une agence d’études en Tunisie.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre d’information et ne constitue pas un conseil juridique ou financier. Les moyens de paiement, les commissions des prestataires et la réglementation des changes tunisienne peuvent changer : vérifiez toujours les sources officielles indiquées ci-dessous avant de payer.",
    },
    { type: "p", text: "**Votre université italienne vous a envoyé un avis pagoPA, mais vous êtes encore en Tunisie. Pouvez-vous le payer avec PayPal ou une carte internationale tunisienne ?**" },
    {
      type: "p",
      text: "En général, oui. Ouvrez [checkout.pagopa.it](https://checkout.pagopa.it), saisissez le Codice Avviso et le Codice Fiscale Ente Creditore (ou scannez le QR code), puis choisissez PayPal ou une carte de crédit, de débit ou prépayée. Pour payer un avis, vous n’avez besoin ni de SPID, ni d’un compte bancaire italien, ni de votre propre codice fiscale.",
    },
    {
      type: "p",
      text: "Payer pagoPA est une démarche normale et courante. D’après mon expérience, beaucoup d’étudiants tunisiens font payer leurs avis par une agence d’études en Tunisie. Si vous payez vous-même, il y a trois façons simples : par carte en ligne, avec PayPal en ligne, ou en espèces dans un bureau de tabac (tabaccheria) ou un bureau de poste une fois en Italie.",
    },
    {
      type: "p",
      text: "C’est la partie 3 de notre guide pour [payer les frais d’inscription en Italie depuis la Tunisie](article:international-card-tunisia), qui compare tous les moyens de paiement. Pour la liste complète des coûts d’études, voyez [combien coûtent les études en Italie](article:study-in-italy#costs).",
    },

    { type: "h2", id: "what-is-pagopa", text: "1. Qu’est-ce que pagoPA, et quels frais étudiants passent par lui ?" },
    {
      type: "p",
      text: "pagoPA est le système de paiement public italien que les universités et la région du Latium utilisent pour des frais étudiants comme les frais de candidature, les frais d’inscription et la taxe régionale. Un organisme public (une université, la région du Latium, un ministère) émet un avis de paiement, l’**avviso di pagamento**, et vous le réglez via le prestataire de paiement (PSP) de votre choix. C’est le prestataire, et non pagoPA, qui fixe et perçoit la commission. Vous pouvez payer en ligne, ou sur place dans un bureau de poste, une banque ou tout commerce affichant le logo pagoPA, comme un bureau de tabac (tabaccheria), un marchand de journaux ou un supermarché ([pagoPA : où payer](https://www.pagopa.gov.it/it/cittadini/dove-pagare/)).",
    },
    {
      type: "figure",
      src: "/blog/logos/pagopa.webp",
      width: 1600,
      height: 400,
      alt: "Logo de pagoPA",
      caption: "Cherchez ce logo sur votre avis de paiement et sur le portail de l'université : il signale un frais payable via pagoPA.",
      credit: {
        text: "Logo : PagoPA S.p.A., domaine public, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PagoPA_logo.png",
      },
    },
    {
      type: "ul",
      items: [
        "**Sapienza** : vous générez le paiement sur Infostud et vous le réglez uniquement via pagoPA. Le règlement précise qu’aucun autre moyen n’est accepté ([règlement des frais Sapienza 2026/27](https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf)).",
        "**Tor Vergata** : les 30 EUR de frais de candidature se paient via pagoPA ([procédure de candidature](https://web.uniroma2.it/allegato/45147/contenuto/application_procedure)), et les frais d’inscription sont générés sur Delphi.",
        "**Taxe régionale du Latium** : 140 EUR plus un timbre de 16 EUR, payés avec la première tranche par presque tous les étudiants d’une université publique du Latium, candidats DiSCo compris. Les exonérations figurent dans le règlement des frais de votre université ([Sapienza : taxe régionale et timbre](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
      ],
    },
    {
      type: "fees",
      title: "Exemple d’avis : taxe régionale et timbre (2026/27)",
      text: "Un premier avis pagoPA typique d’une université publique de Rome. Montants d’octobre 2026.",
      feeIds: ["lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "Tout ne passe pas par pagoPA : le kit du permis de séjour se paie au bureau de poste, et l’assurance santé volontaire avec un formulaire F24, comme expliqué dans [vos 30 premiers jours à Rome](article:arriving-in-rome#residence-permit).",
    },

    { type: "h2", id: "what-you-need", text: "2. De quoi avez-vous besoin avant de payer un avis pagoPA ?" },
    {
      type: "p",
      text: "Pour payer un avis pagoPA depuis l’étranger, il vous faut l’avis avec ses codes, une adresse e-mail et soit un compte PayPal, soit une carte internationale activée pour les paiements en ligne.",
    },
    {
      type: "ul",
      items: [
        "**L’avis** : le PDF d’Infostud, de Delphi ou d’un autre portail, avec le **Codice Avviso** à 18 chiffres et le **Codice Fiscale Ente Creditore** (le code fiscal du créancier), ou son QR code. Si vous ne l’avez pas, demandez-le à l’université : pagoPA ne peut pas le générer pour vous.",
        "**Une adresse e-mail** : le résultat du paiement y est envoyé.",
        "**Un moyen de paiement** : un compte PayPal avec une carte liée et confirmée, ou une carte internationale Visa, Mastercard, Maestro, Visa Electron ou American Express activée pour les paiements en ligne et à l’international.",
        "**Assez d’allocation sur la carte** : la carte technologique internationale (CTI) est plafonnée à 1 000 TND par an et par personne.",
      ],
    },
    {
      type: "p",
      text: "Pour utiliser PayPal, liez d’abord votre carte internationale au compte. Notre guide de la [carte technologique internationale en Tunisie](article:technology-card-tunisia) explique comment l’obtenir. PayPal peut prélever un petit montant temporaire pour confirmer la carte, remboursé après vérification ([frais PayPal Tunisie](https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN)).",
    },
    {
      type: "p",
      text: "Un compte PayPal tunisien est un contrat avec PayPal Pte. Ltd., une société de Singapour. Il permet de payer et d’envoyer. La réception d’argent n’est proposée que « là où elle est disponible », et le site tunisien de PayPal ne met en avant que le paiement et l’envoi ([conditions d’utilisation PayPal, Tunisie](https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN)). Cette limite ne bloque pas un paiement pagoPA, puisque régler un avis est un paiement, pas une réception d’argent.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Attention au plafond de 1 000 TND",
      text: "Un premier avis pour la taxe régionale du Latium et le timbre (environ 525 TND) consomme près de la moitié de l’allocation annuelle de la CTI, et la liste des usages autorisés de la CTI ne cite pas les frais universitaires. Lisez [ce que la carte technologique peut payer](article:technology-card-tunisia#allowed-uses) avant de compter dessus pour vos frais d’études.",
    },

    { type: "h2", id: "pay-with-paypal", text: "3. Comment payer un avis pagoPA avec PayPal, étape par étape ?" },
    {
      type: "p",
      text: "Pour payer un avis pagoPA avec PayPal, ouvrez checkout.pagopa.it, saisissez les codes de l’avis et votre e-mail, choisissez PayPal, puis connectez-vous à PayPal et payez en une fois. Ces six étapes suivent l’article officiel de pagoPA [Pagare con PayPal](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal).",
    },
    {
      type: "figure",
      src: "/blog/logos/paypal.webp",
      width: 1600,
      height: 400,
      alt: "Logo de PayPal",
      caption: "PayPal est une marque de PayPal, Inc.. Le logo sert seulement à identifier le service.",
      credit: {
        text: "Logo : PayPal, domaine public, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PayPal_2024.svg",
      },
    },
    { type: "h3", id: "step-open-checkout", text: "Étape 1 : ouvrez checkout.pagopa.it" },
    {
      type: "p",
      text: "Allez sur [checkout.pagopa.it](https://checkout.pagopa.it), ou cliquez sur le bouton pagoPA de votre portail universitaire. Pas de connexion, pas de SPID.",
    },
    { type: "h3", id: "step-enter-codes", text: "Étape 2 : saisissez les codes de l’avis" },
    {
      type: "p",
      text: "Scannez le QR code, ou tapez le Codice Avviso et le Codice Fiscale Ente Creditore, puis appuyez sur **Vai al pagamento**. Vérifiez que le montant et le nom du créancier correspondent à votre avis.",
    },
    { type: "h3", id: "step-email", text: "Étape 3 : tapez deux fois votre e-mail" },
    { type: "p", text: "Utilisez une adresse que vous consultez : le résultat et les détails du reçu y arrivent." },
    { type: "h3", id: "step-choose-paypal", text: "Étape 4 : choisissez PayPal et un prestataire" },
    {
      type: "p",
      text: "Sélectionnez **PayPal (anche a rate)**. Si plusieurs prestataires sont proposés (Intesa Sanpaolo, Mooney ou Nexi), choisissez-en un, vérifiez le total commission comprise et appuyez sur **Paga**.",
    },
    { type: "h3", id: "step-paypal-login", text: "Étape 5 : connectez-vous à PayPal et payez en une fois" },
    {
      type: "p",
      text: "Vous êtes redirigé vers PayPal. Connectez-vous, choisissez votre carte ou votre solde, et choisissez de payer **en une fois** : le paiement en plusieurs fois de PayPal sur pagoPA exige de résider en Italie ([PayPal Italie : pagoPA](https://www.paypal.com/it/digital-wallet/pagopa)).",
    },
    { type: "h3", id: "step-outcome", text: "Étape 6 : lisez le résultat" },
    { type: "p", text: "De retour sur pagoPA, le résultat s’affiche à l’écran et arrive par e-mail. Enregistrez ensuite le reçu (section 6)." },
    {
      type: "fees",
      title: "Ce que le paiement PayPal ajoute",
      text: "En plus du montant de l’avis. La commission pagoPA est fixée par le prestataire et peut changer.",
      feeIds: ["pagopa-paypal", "paypal-fx"],
      tnd: true,
    },
    {
      type: "p",
      text: "Les frais de conversion PayPal d’environ 4 % s’appliquent quand PayPal convertit la devise pour vous. Vérifiez le montant final sur votre relevé après le paiement.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Gardez une deuxième option",
      text: "Si un moyen de paiement ne passe pas, utilisez-en simplement un autre : la carte, PayPal, ou les espèces dans un bureau de tabac ou un bureau de poste une fois en Italie. Payez quelques jours avant l’échéance pour avoir le temps de changer.",
    },

    { type: "h2", id: "pay-with-card", text: "4. Comment payer pagoPA plutôt avec une carte internationale ?" },
    {
      type: "p",
      text: "Vous payez pagoPA par carte sur la même page checkout.pagopa.it : pagoPA accepte les cartes de crédit, de débit et prépayées des réseaux American Express, Maestro, Mastercard, Visa et Visa Electron, quel que soit le pays d’émission ([moyens de paiement](https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609)). Une carte internationale tunisienne fonctionne donc si votre banque l’a activée pour les paiements en ligne et à l’international.",
    },
    {
      type: "ol",
      items: [
        "Après votre e-mail, choisissez **Carta di credito o debito**.",
        "Tapez le nom du titulaire, le numéro de carte, la date d’expiration et le CVV.",
        "Choisissez un prestataire. Ce n’est pas forcément votre banque.",
        "Vérifiez le montant commission comprise, puis appuyez sur **Paga**.",
        "Validez le paiement sur la page ou l’application de votre banque (l’étape 3-D Secure).",
      ],
    },
    {
      type: "table",
      caption: "Commissions par carte sur checkout.pagopa.it selon le montant de l’avis (données de coûts pagoPA, relevé du 10 octobre 2026, elles changent).",
      head: ["Montant de l’avis", "Offres carte", "Commission"],
      rows: [
        ["16 EUR", "24", "0,25 à 1,50 EUR"],
        ["100 EUR", "25", "0,70 à 1,50 EUR"],
        ["500 EUR", "24", "1,33 à 3,00 EUR"],
        ["2 000 EUR", "13", "2,50 à 6,00 EUR"],
      ],
    },
    {
      type: "p",
      text: "Comparez les prestataires sur la [page officielle de transparence des coûts](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/). Si votre carte n’a pas de CVV, pagoPA indique qu’elle n’est probablement pas activée pour les paiements en ligne ([payer par carte](https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041)).",
    },

    { type: "h2", id: "card-declined", text: "5. Que faire si pagoPA refuse votre carte ?" },
    {
      type: "p",
      text: "Quand un paiement pagoPA échoue, vérifiez les restrictions de la carte, puis changez de prestataire, puis de moyen de paiement : la page d’aide de pagoPA sur les [cartes étrangères](https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113) propose ces trois solutions, dans cet ordre :",
    },
    {
      type: "ol",
      items: [
        "**Vérifiez les restrictions de la carte** : les paiements à l’international et en ligne doivent être activés. Regardez dans votre application bancaire ou appelez votre banque.",
        "**Changez de prestataire** : un prestataire peut refuser une carte à cause de sa propre politique. Sur l’écran récapitulatif, appuyez sur **modifica** à côté du prestataire proposé et choisissez-en un autre.",
        "**Changez de moyen de paiement** : si la carte échoue, essayez PayPal, et si PayPal échoue, essayez directement la carte.",
      ],
    },
    {
      type: "figure",
      src: "/blog/card-terminal-not-detected.webp",
      width: 1600,
      height: 1243,
      alt: "Gros plan sur un terminal de paiement Ingenico dont l'écran affiche « Merchant card not detected »",
      caption: "Un refus peut venir de votre carte, du prestataire ou de la connexion. Suivez les solutions dans l'ordre avant de réessayer.",
      credit: {
        text: "Photo : VulcanSphere, CC BY 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Ingenico_iCT250_payment_terminal_machine.jpg",
      },
    },
    {
      type: "p",
      text: "Vérifiez aussi qu’il reste de l’allocation sur votre carte technologique internationale (CTI) cette année, et que vous pouvez recevoir le code de confirmation de votre banque pendant le paiement.",
    },
    {
      type: "p",
      text: "Si l’argent a quitté votre compte mais que le résultat pagoPA est négatif, le prestataire de paiement peut bloquer l’argent temporairement puis le rembourser, parfois après quelques jours ([débit sans paiement](https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561)). Vérifiez l’échéance et payez à nouveau par un autre moyen pour ne pas la manquer. Si aucun moyen en ligne ne marche, lisez comment [payer par virement depuis votre banque tunisienne](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "keep-the-receipt", text: "6. Comment prouver le paiement et vérifier qu’il est validé ?" },
    {
      type: "p",
      text: "Vous prouvez un paiement pagoPA avec le reçu (**ricevuta**) : téléchargez-le dès que le paiement réussit et gardez le PDF avec l’e-mail, car certains bureaux le demandent comme preuve de paiement.",
    },
    {
      type: "p",
      text: "Votre université valide ensuite le paiement sur son portail, souvent après quelques jours. Vérifiez Infostud ou Delphi. Si rien n’apparaît après environ une semaine, envoyez le reçu au secrétariat étudiant. Tor Vergata prévient que si le paiement de la taxe régionale n’est pas validé, vous n’êtes pas inscrit et vous perdez vos avantages DiSCo ([guide de l’étudiant Tor Vergata 2026/27](https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf)).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Peut-on payer pagoPA depuis l’étranger avec une carte étrangère ?",
          a: "Oui. pagoPA accepte les cartes Visa, Mastercard, Maestro, Visa Electron et American Express de crédit, de débit ou prépayées, quel que soit le pays d’émission. La carte doit être activée pour les paiements en ligne et à l’international et passer la vérification 3-D Secure de votre banque. Si un prestataire refuse la carte, choisissez-en un autre sur l’écran récapitulatif avant de passer à PayPal.",
        },
        {
          q: "Peut-on payer pagoPA en plusieurs fois en vivant en Tunisie ?",
          a: "Non, pas avec PayPal : le paiement en plusieurs fois de PayPal sur pagoPA exige de résider en Italie. Choisissez de payer en une fois quand PayPal vous demande comment payer. Avant l’échéance, vérifiez que votre carte ou votre compte PayPal peut couvrir tout le montant d’un coup, commission du prestataire comprise.",
        },
        {
          q: "Faut-il SPID pour payer un avis pagoPA ?",
          a: "Non. checkout.pagopa.it n’a pas de connexion, donc SPID n’est pas nécessaire pour payer un avis. Il suffit du Codice Avviso et du Codice Fiscale Ente Creditore (ou du QR code), d’une adresse e-mail et d’un moyen de paiement. Un compte bancaire italien ou votre propre codice fiscale ne sont pas nécessaires non plus.",
        },
        {
          q: "Combien coûte un paiement pagoPA avec PayPal ?",
          a: "1,50 EUR pour un avis jusqu’à 248,50 EUR et 2,50 EUR au-delà, en octobre 2026. PayPal ajoute environ 4 % s’il convertit la devise pour un compte tunisien. La commission pagoPA est fixée par le prestataire de paiement et peut changer : vérifiez le total commission comprise avant d’appuyer sur Paga.",
        },
        {
          q: "Combien de temps avant que l’université voie mon paiement pagoPA ?",
          a: "Souvent quelques jours. Votre université valide le paiement sur son propre portail : vérifiez Infostud ou Delphi après avoir payé et gardez le reçu pagoPA. Si le paiement n’apparaît toujours pas après environ une semaine, envoyez le reçu au secrétariat étudiant : Tor Vergata prévient qu’un paiement de la taxe régionale non validé signifie que vous n’êtes pas inscrit.",
        },
        {
          q: "J’ai perdu mon Codice Avviso. pagoPA peut-il me le renvoyer ?",
          a: "Non. Seul l’organisme qui a émis l’avis, en général votre université, peut vous redonner le Codice Avviso, et pagoPA ne peut pas le générer. Téléchargez de nouveau l’avis sur votre portail universitaire, comme Infostud ou Delphi, ou demandez au secrétariat étudiant de vous l’envoyer.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "pagoPA : où payer (en ligne et sur place)", url: "https://www.pagopa.gov.it/it/cittadini/dove-pagare/" },
        { label: "pagoPA : payer avec pagoPA", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958790454417-Pagare-con-pagoPA" },
        { label: "pagoPA : payer un avis de l’étranger si vous n’êtes pas italien", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA : moyens de paiement acceptés", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609" },
        { label: "pagoPA : payer avec PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "pagoPA : payer par carte de crédit ou de débit", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041" },
        { label: "pagoPA : impossible de payer avec une carte étrangère", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113" },
        { label: "pagoPA : montant débité mais paiement échoué", url: "https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561" },
        { label: "pagoPA : pourquoi les prestataires prennent une commission", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958813866769" },
        { label: "pagoPA : transparence des coûts", url: "https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/" },
        { label: "PayPal Italie : payer pagoPA avec PayPal", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal Tunisie : conditions d’utilisation", url: "https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN" },
        { label: "PayPal Tunisie : frais pour les particuliers", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza : taxe régionale et timbre fiscal", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "Sapienza : règlement des frais 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Tor Vergata : procédure de candidature", url: "https://web.uniroma2.it/allegato/45147/contenuto/application_procedure" },
        { label: "Tor Vergata : guide de l’étudiant 2026/27", url: "https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf" },
        { label: "Banque Centrale de Tunisie : circulaire 2016-09 (carte technologique)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les commissions des prestataires sont un relevé du 10 octobre 2026 et changent souvent. Vérifiez les pages officielles avant de payer.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Où payer", value: "checkout.pagopa.it, sans SPID" },
        { label: "Ce qu’il faut", value: "Codice Avviso + Codice Fiscale Ente Creditore, ou le QR code" },
        { label: "Commission PayPal", value: "1,50 EUR (2,50 EUR au-delà de 248,50 EUR) + environ 4 % de conversion" },
        { label: "Paiement en plusieurs fois", value: "Réservé aux résidents en Italie : payez en une fois" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Payer des frais italiens en Tunisie" },
    {
      type: "ol",
      items: [
        "[Quel moyen de paiement choisir](article:international-card-tunisia)",
        "[La carte technologique internationale](article:technology-card-tunisia)",
        "Payer pagoPA avec PayPal ou une carte",
        "[RedotPay et les cartes crypto](article:redotpay-tunisia)",
        "[Un compte bancaire en Italie](article:bank-account-italy-student)",
      ],
    },
  ],
};
