import type { ArticleTranslation } from "../../types";

// Translation of en.ts (same heading ids, one table, two fee boxes). Italian terms on the pagoPA screens stay in Italian.
export const fr: ArticleTranslation = {
  slug: "payer-pagopa-avec-paypal-tunisie",
  title: "Payer un avis pagoPA",
  subtitle: "Avec PayPal ou une carte internationale tunisienne",
  seoTitle: "Payer pagoPA avec PayPal ou une carte tunisienne",
  metaDescription:
    "Payer un avis pagoPA italien avec PayPal ou une carte internationale tunisienne : sans SPID, étape par étape, les frais et que faire si la carte est refusée.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["payer pagoPA", "pagoPA PayPal", "paiement pagoPA Tunisie", "PayPal Tunisie", "carte internationale pagoPA", "avviso di pagamento"],
  summary:
    "Vous pouvez payer un avis pagoPA italien en restant en Tunisie sur checkout.pagopa.it, sans SPID, en saisissant le Codice Avviso et le code fiscal du créancier puis en choisissant PayPal ou une carte Visa, Mastercard ou autre carte internationale. PayPal coûte 1,50 EUR (2,50 EUR au-delà de 248,50 EUR), plus environ 4 % si PayPal convertit la devise ; payez en une fois, testez d’abord un petit avis et gardez une carte en secours.",
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
      text: "Une réserve honnête : PayPal est un moyen de paiement officiel de pagoPA, mais aucune source officielle ne confirme qu’un compte PayPal **enregistré en Tunisie** passe. Testez d’abord avec un petit avis et gardez une carte en secours.",
    },
    {
      type: "p",
      text: "C’est la partie 3 de notre [guide pour payer des frais italiens en Tunisie](article:international-card-tunisia), qui compare tous les moyens de paiement. Pour la liste complète des coûts d’études, voyez [combien coûtent les études en Italie](article:study-in-italy#costs).",
    },

    { type: "h2", id: "what-is-pagopa", text: "1. Qu’est-ce que pagoPA, et quels frais étudiants passent par lui ?" },
    {
      type: "p",
      text: "pagoPA est le système de paiement public italien. Un organisme public (une université, la région du Latium, un ministère) émet un avis de paiement, l’**avviso di pagamento**, et vous le réglez via le prestataire de paiement (PSP) de votre choix. C’est le prestataire, et non pagoPA, qui fixe et perçoit la commission.",
    },
    {
      type: "ul",
      items: [
        "**Sapienza** : vous générez le paiement sur Infostud et vous le réglez uniquement via pagoPA ; le règlement précise qu’aucun autre moyen n’est accepté ([règlement des frais Sapienza 2026/27](https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf)).",
        "**Tor Vergata** : les 30 EUR de frais de candidature se paient via pagoPA ([procédure de candidature](https://web.uniroma2.it/allegato/45147/contenuto/application_procedure)), et les frais d’inscription sont générés sur Delphi.",
        "**Taxe régionale du Latium** : 140 EUR plus un timbre de 16 EUR, payés avec la première tranche par presque tous les étudiants d’une université publique du Latium, candidats DiSCo compris ; les exonérations figurent dans le règlement des frais de votre université ([Sapienza : taxe régionale et timbre](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
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

    { type: "h2", id: "what-you-need", text: "2. Ce qu’il vous faut avant de payer" },
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
      text: "Pour utiliser PayPal, liez d’abord votre carte internationale au compte ; notre guide de la [carte technologique internationale en Tunisie](article:technology-card-tunisia) explique comment l’obtenir. PayPal peut prélever un petit montant temporaire pour confirmer la carte, remboursé après vérification ([frais PayPal Tunisie](https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN)).",
    },
    {
      type: "p",
      text: "Un compte PayPal tunisien est un contrat avec PayPal Pte. Ltd., une société de Singapour. Il permet de payer et d’envoyer ; la réception d’argent n’est proposée que « là où elle est disponible », et le site tunisien de PayPal ne met en avant que le paiement et l’envoi ([conditions d’utilisation PayPal, Tunisie](https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN)). Ce n’est pas un problème ici, puisque votre but est de payer.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Attention au plafond de 1 000 TND",
      text: "L’avis d’exemple ci-dessus (environ 525 TND) consomme près de la moitié de l’allocation annuelle de la CTI, et la liste des usages autorisés de la CTI ne cite pas les frais universitaires. Lisez [ce que la carte technologique peut payer](article:technology-card-tunisia#allowed-uses) avant de compter dessus pour vos frais d’études.",
    },

    { type: "h2", id: "pay-with-paypal", text: "3. Payer un avis pagoPA avec PayPal, étape par étape" },
    {
      type: "p",
      text: "Ces étapes suivent l’article officiel de pagoPA [Pagare con PayPal](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal).",
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
      text: "Les 4 % environ s’appliquent quand PayPal convertit la devise pour vous. Nous n’avons pas pu confirmer si c’est PayPal ou votre banque tunisienne qui convertit pour une carte en dinars : comparez le montant final sur votre relevé après votre paiement test.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Testez d’abord avec un petit avis",
      text: "Un compte PayPal tunisien sur pagoPA n’est pas confirmé officiellement, et pagoPA indique que les moyens de paiement peuvent varier selon l’avis et le prestataire. Essayez d’abord un petit montant (par exemple un timbre de 16 EUR, si votre université l’émet comme avis séparé) bien avant l’échéance, et gardez une carte en secours.",
    },

    { type: "h2", id: "pay-with-card", text: "4. Payer plutôt avec une carte internationale" },
    {
      type: "p",
      text: "pagoPA accepte les cartes de crédit, de débit et prépayées des réseaux American Express, Maestro, Mastercard, Visa et Visa Electron, quel que soit le pays d’émission ([moyens de paiement](https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609)).",
    },
    {
      type: "ol",
      items: [
        "Après votre e-mail, choisissez **Carta di credito o debito**.",
        "Tapez le nom du titulaire, le numéro de carte, la date d’expiration et le CVV.",
        "Choisissez un prestataire ; ce n’est pas forcément votre banque.",
        "Vérifiez le montant commission comprise, puis appuyez sur **Paga**.",
        "Validez le paiement sur la page ou l’application de votre banque (l’étape 3-D Secure).",
      ],
    },
    {
      type: "table",
      caption: "Commissions par carte sur checkout.pagopa.it selon le montant de l’avis (données de coûts pagoPA, relevé du 10 octobre 2026 ; elles changent).",
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

    { type: "h2", id: "card-declined", text: "5. Carte refusée ou paiement échoué : que faire" },
    {
      type: "p",
      text: "La page d’aide de pagoPA sur les [cartes étrangères](https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113) propose trois solutions, dans cet ordre :",
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
      type: "p",
      text: "Vérifiez aussi qu’il reste de l’allocation sur votre CTI cette année, et que vous pouvez recevoir le code de confirmation de votre banque pendant le paiement.",
    },
    {
      type: "p",
      text: "Si l’argent a quitté votre compte mais que le résultat est négatif, le prestataire peut le bloquer temporairement puis le rembourser, parfois après quelques jours ([débit sans paiement](https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561)). Vérifiez l’échéance et payez à nouveau par un autre moyen pour ne pas la manquer. Si rien ne marche, voyez l’[option du virement bancaire](article:international-card-tunisia#bank-transfer) dans notre guide des paiements.",
    },

    { type: "h2", id: "keep-the-receipt", text: "6. Gardez le reçu et vérifiez la validation" },
    {
      type: "p",
      text: "Téléchargez le reçu (**ricevuta**) dès que le paiement réussit et gardez le PDF avec l’e-mail. Certains bureaux le demandent comme preuve de paiement.",
    },
    {
      type: "p",
      text: "L’université valide ensuite le paiement sur son portail, souvent après quelques jours. Vérifiez Infostud ou Delphi ; si rien n’apparaît après environ une semaine, envoyez le reçu au secrétariat étudiant. Tor Vergata prévient que si le paiement de la taxe régionale n’est pas validé, vous n’êtes pas inscrit et vous perdez vos avantages DiSCo ([guide de l’étudiant Tor Vergata 2026/27](https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf)).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "pagoPA accepte-t-il les cartes étrangères ?",
          a: "Oui. Les cartes Visa, Mastercard, Maestro, Visa Electron et American Express de crédit, de débit ou prépayées sont acceptées, à condition d’être activées pour les paiements en ligne et à l’international et de passer la vérification 3-D Secure.",
        },
        {
          q: "Peut-on payer pagoPA en plusieurs fois en vivant en Tunisie ?",
          a: "Non, pas avec PayPal : son paiement en plusieurs fois sur pagoPA exige de résider en Italie. Choisissez de payer en une fois quand PayPal vous le demande.",
        },
        {
          q: "Faut-il SPID pour payer un avis pagoPA ?",
          a: "Non. Sur checkout.pagopa.it, il suffit du Codice Avviso et du Codice Fiscale Ente Creditore (ou du QR code), d’une adresse e-mail et d’un moyen de paiement.",
        },
        {
          q: "Combien coûte un paiement pagoPA avec PayPal ?",
          a: "1,50 EUR jusqu’à 248,50 EUR et 2,50 EUR au-delà (octobre 2026), plus environ 4 % si PayPal convertit la devise pour un compte tunisien.",
        },
        {
          q: "Combien de temps avant que l’université voie mon paiement ?",
          a: "Souvent quelques jours. Gardez le reçu, vérifiez Infostud ou Delphi, et contactez le secrétariat étudiant si le paiement n’apparaît toujours pas après environ une semaine.",
        },
        {
          q: "J’ai perdu mon Codice Avviso. pagoPA peut-il me le renvoyer ?",
          a: "Non. Seul l’organisme qui a émis l’avis peut vous le donner : téléchargez-le de nouveau sur votre portail universitaire ou demandez-le au secrétariat étudiant.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
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
      text: "Dernière vérification : octobre 2026. Les commissions des prestataires sont un relevé du 10 octobre 2026 et changent souvent ; le fonctionnement d’un compte PayPal tunisien sur pagoPA n’est pas confirmé officiellement. Vérifiez les pages officielles avant de payer.",
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
