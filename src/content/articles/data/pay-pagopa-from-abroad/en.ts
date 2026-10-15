import type { ArticleTranslation } from "../../types";

// Part 3 of the payment series. French and Arabic mirror this structure (same heading ids, one table, two fee boxes).
export const en: ArticleTranslation = {
  slug: "pay-pagopa-with-paypal-for-tunisians",
  formerSlugs: ["pay-pagopa-with-paypal-from-tunisia"],
  title: "How to Pay a pagoPA Notice from Abroad or from Tunisia",
  subtitle: "With PayPal or an international card, without SPID: the steps, the fees and what to do if the payment fails",
  seoTitle: "Pay pagoPA from Abroad with PayPal or a Card (2026)",
  metaDescription:
    "Pay a pagoPA notice from abroad or from Tunisia with PayPal or an international card: no SPID, 6 steps on checkout.pagopa.it, fees and fixes if it fails.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["pay pagoPA from abroad", "pay pagoPA with PayPal", "pay pagoPA from Tunisia", "pagoPA foreign card", "checkout.pagopa.it", "avviso di pagamento"],
  summary:
    "Paying a pagoPA notice from abroad or from Tunisia is a normal, simple payment: pay online on checkout.pagopa.it by card or PayPal, without SPID, or in cash at a tabaccheria or post office once you are in Italy. As of October 2026, PayPal costs EUR 1.50 (EUR 2.50 above EUR 248.50) plus about 4% if PayPal converts the currency. In my experience, many Tunisian students also have a study agency in Tunisia pay the notice for them.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Payment methods, provider fees and Tunisian exchange rules can change, so always check the official sources linked below before you pay.",
    },
    { type: "p", text: "**Your Italian university sent you a pagoPA notice, but you are still in Tunisia. Can you pay it with PayPal or a Tunisian international card?**" },
    {
      type: "p",
      text: "Usually, yes. Open [checkout.pagopa.it](https://checkout.pagopa.it), type the Codice Avviso and the Codice Fiscale Ente Creditore (or scan the QR code), and choose PayPal or a credit, debit or prepaid card. You do not need SPID, an Italian bank account or a codice fiscale of your own to pay a notice.",
    },
    {
      type: "p",
      text: "Paying pagoPA is a normal, everyday process. In my experience, many Tunisian students have a study agency in Tunisia pay their notices for them. If you pay yourself, there are three simple ways: by card online, with PayPal online, or in cash at a tabaccheria (tobacconist) or post office once you are in Italy.",
    },
    {
      type: "p",
      text: "This is part 3 of our guide on [how to pay Italian university fees from Tunisia](article:international-card-tunisia), which compares every way to pay. For the full list of study costs, see [what studying in Italy costs](article:study-in-italy#costs).",
    },

    { type: "h2", id: "what-is-pagopa", text: "1. What is pagoPA, and which student fees use it?" },
    {
      type: "p",
      text: "pagoPA is the Italian public payment system that universities and the Lazio region use for student fees such as application fees, enrolment fees and the regional tax. A public body (a university, the Lazio region, a ministry) issues a payment notice, the **avviso di pagamento**, and you pay it through a payment provider (PSP) of your choice. The provider, not pagoPA, sets and collects the fee. You can pay online, or in person at a post office, a bank or any shop with the pagoPA logo, such as a tabaccheria, a newsagent or a supermarket ([pagoPA: where to pay](https://www.pagopa.gov.it/it/cittadini/dove-pagare/)).",
    },
    {
      type: "figure",
      src: "/blog/logos/pagopa.webp",
      width: 1600,
      height: 400,
      alt: "pagoPA logo",
      caption: "Look for this logo on your payment notice and on the university portal: it marks a fee you can pay through pagoPA.",
      credit: {
        text: "Logo: PagoPA S.p.A., Public domain, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PagoPA_logo.png",
      },
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: you generate the payment on Infostud and pay it only through pagoPA. The rules say no other method is accepted ([Sapienza fee rules 2026/27](https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf)).",
        "**Tor Vergata**: the EUR 30 application fee is paid through pagoPA ([application procedure](https://web.uniroma2.it/allegato/45147/contenuto/application_procedure)), and enrolment fees are generated on Delphi.",
        "**Lazio regional tax**: EUR 140 plus a EUR 16 stamp, paid with the first instalment by almost every student at a public university in Lazio, DiSCo applicants included. Exemptions are listed in your university's fee rules ([Sapienza: regional tax and stamp](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
      ],
    },
    {
      type: "fees",
      title: "Example notice: regional tax and stamp (2026/27)",
      text: "A typical first pagoPA notice from a public university in Rome. Amounts as of October 2026.",
      feeIds: ["lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "Not everything is pagoPA: the residence permit kit is paid at the post office, and voluntary health cover with an F24 form, as explained in [your first 30 days in Rome](article:arriving-in-rome#residence-permit).",
    },

    { type: "h2", id: "what-you-need", text: "2. What do you need before you pay a pagoPA notice?" },
    {
      type: "p",
      text: "To pay a pagoPA notice from abroad, you need the notice with its codes, an email address and either a PayPal account or an international card enabled for online payments.",
    },
    {
      type: "ul",
      items: [
        "**The notice**: the PDF from Infostud, Delphi or another portal, with the 18-digit **Codice Avviso** and the **Codice Fiscale Ente Creditore** (the creditor's tax code), or its QR code. If you do not have it, ask the university: pagoPA cannot generate it for you.",
        "**An email address**: the outcome of the payment is sent there.",
        "**A way to pay**: a PayPal account with a confirmed linked card, or an international Visa, Mastercard, Maestro, Visa Electron or American Express card enabled for online and international payments.",
        "**Enough allowance on the card**: the international technology card (CTI) is capped at 1,000 TND a year per person.",
      ],
    },
    {
      type: "p",
      text: "To use PayPal, link your international card to the account first. Our guide to the [international technology card in Tunisia](article:technology-card-tunisia) explains how to get one. PayPal may place a small temporary charge to confirm the card and refunds it after verification ([PayPal Tunisia fees](https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN)).",
    },
    {
      type: "p",
      text: "A Tunisian PayPal account is a contract with PayPal Pte. Ltd., a Singapore company. It lets you pay and send. Receiving money is offered only “where available”, and PayPal's Tunisian site promotes only paying and sending ([PayPal user agreement, Tunisia](https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN)). That limit does not block a pagoPA payment, because paying a notice is a payment, not a receipt of money.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Watch the 1,000 TND cap",
      text: "A first notice for the Lazio regional tax and stamp (about 525 TND) uses about half of a year's CTI allowance, and the CTI's list of allowed uses does not name university fees. Read [what the technology card may pay for](article:technology-card-tunisia#allowed-uses) before you rely on it for tuition.",
    },

    { type: "h2", id: "pay-with-paypal", text: "3. How do you pay a pagoPA notice with PayPal, step by step?" },
    {
      type: "p",
      text: "To pay a pagoPA notice with PayPal, open checkout.pagopa.it, enter the notice codes and your email, choose PayPal, then log in to PayPal and pay in full. These six steps follow the official pagoPA article [Pagare con PayPal](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal).",
    },
    {
      type: "figure",
      src: "/blog/logos/paypal.webp",
      width: 1600,
      height: 400,
      alt: "PayPal logo",
      caption: "PayPal is a trademark of PayPal, Inc.. The logo is shown only to identify the service.",
      credit: {
        text: "Logo: PayPal, Public domain, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PayPal_2024.svg",
      },
    },
    { type: "h3", id: "step-open-checkout", text: "Step 1: open checkout.pagopa.it" },
    {
      type: "p",
      text: "Go to [checkout.pagopa.it](https://checkout.pagopa.it), or click the pagoPA button on your university portal. There is no login and no SPID.",
    },
    { type: "h3", id: "step-enter-codes", text: "Step 2: enter the notice codes" },
    {
      type: "p",
      text: "Scan the QR code, or type the Codice Avviso and the Codice Fiscale Ente Creditore, then press **Vai al pagamento**. Check that the amount and the creditor's name match your notice.",
    },
    { type: "h3", id: "step-email", text: "Step 3: type your email twice" },
    { type: "p", text: "Use an address you check: the outcome and the receipt details arrive there." },
    { type: "h3", id: "step-choose-paypal", text: "Step 4: choose PayPal and a provider" },
    {
      type: "p",
      text: "Select **PayPal (anche a rate)**. If several providers are offered (Intesa Sanpaolo, Mooney or Nexi), pick one, check the total with the fee included, and press **Paga**.",
    },
    { type: "h3", id: "step-paypal-login", text: "Step 5: log in to PayPal and pay in full" },
    {
      type: "p",
      text: "You are sent to PayPal. Log in, choose your card or balance, and choose to pay **in full**: PayPal's instalments on pagoPA require you to live in Italy ([PayPal Italy: pagoPA](https://www.paypal.com/it/digital-wallet/pagopa)).",
    },
    { type: "h3", id: "step-outcome", text: "Step 6: read the outcome" },
    { type: "p", text: "Back on pagoPA, the result is shown on screen and sent by email. Then save the receipt (section 6)." },
    {
      type: "fees",
      title: "What paying with PayPal adds",
      text: "On top of the notice amount. The pagoPA fee is set by the provider and can change.",
      feeIds: ["pagopa-paypal", "paypal-fx"],
      tnd: true,
    },
    {
      type: "p",
      text: "PayPal's conversion fee of about 4% applies when PayPal converts the currency for you. Check the final amount on your bank statement after you pay.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Keep a second option",
      text: "If one method does not go through, simply use another: card, PayPal, or cash at a tabaccheria or post office once you are in Italy. Pay a few days before the due date so you have time to switch.",
    },

    { type: "h2", id: "pay-with-card", text: "4. How do you pay pagoPA with an international card instead?" },
    {
      type: "p",
      text: "You pay pagoPA by card on the same checkout.pagopa.it page: pagoPA accepts credit, debit and prepaid cards on the American Express, Maestro, Mastercard, Visa and Visa Electron circuits, whatever the issuing country ([payment methods](https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609)). A Tunisian international card therefore works if your bank has enabled it for online and international payments.",
    },
    {
      type: "ol",
      items: [
        "After your email, choose **Carta di credito o debito**.",
        "Type the holder's name, card number, expiry date and CVV.",
        "Choose a provider. It does not have to be your bank.",
        "Check the amount with the fee included, then press **Paga**.",
        "Approve the payment on your bank's page or app (the 3-D Secure step).",
      ],
    },
    {
      type: "table",
      caption: "Card fees on checkout.pagopa.it by notice amount (pagoPA cost data, snapshot of 10 October 2026, fees change).",
      head: ["Notice amount", "Card offers", "Provider fee"],
      rows: [
        ["EUR 16", "24", "EUR 0.25 to 1.50"],
        ["EUR 100", "25", "EUR 0.70 to 1.50"],
        ["EUR 500", "24", "EUR 1.33 to 3.00"],
        ["EUR 2,000", "13", "EUR 2.50 to 6.00"],
      ],
    },
    {
      type: "p",
      text: "Compare providers on the official [cost transparency page](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/). If your card has no CVV, pagoPA says it is probably not enabled for online payments ([paying by card](https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041)).",
    },

    { type: "h2", id: "card-declined", text: "5. What should you do if pagoPA declines your card?" },
    {
      type: "p",
      text: "When a pagoPA payment fails, check the card's restrictions, then change the provider, then change the payment method: pagoPA's own help page for [foreign cards](https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113) gives these three fixes, in this order:",
    },
    {
      type: "ol",
      items: [
        "**Check the card's restrictions**: international and online payments must be enabled. Look in your banking app or call your bank.",
        "**Change the provider**: a provider can refuse a card because of its own policy. On the summary screen, press **modifica** next to the suggested provider and pick another.",
        "**Change the method**: if the card fails, try PayPal, and if PayPal fails, try the card directly.",
      ],
    },
    {
      type: "figure",
      src: "/blog/card-terminal-not-detected.webp",
      width: 1600,
      height: 1243,
      alt: "Close-up of an Ingenico card terminal whose screen reads \"Merchant card not detected\"",
      caption: "A refusal can come from your card, from the provider or from the connection. Work through the fixes in order before you try again.",
      credit: {
        text: "Photo: VulcanSphere, CC BY 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Ingenico_iCT250_payment_terminal_machine.jpg",
      },
    },
    {
      type: "p",
      text: "Also check that your international technology card (CTI) still has allowance left this year, and that you can receive your bank's confirmation code while you pay.",
    },
    {
      type: "p",
      text: "If money left your account but the pagoPA outcome is negative, the payment provider may be holding the money and will refund it, possibly after a few days ([debit without payment](https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561)). Check the due date and pay again through another method so you do not miss it. If no online method works, read about [paying by bank transfer from your Tunisian bank](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "keep-the-receipt", text: "6. How do you prove the payment and check that it was validated?" },
    {
      type: "p",
      text: "You prove a pagoPA payment with the receipt (**ricevuta**): download it as soon as the payment succeeds and keep the PDF with the email, because some offices ask for it as proof of payment.",
    },
    {
      type: "p",
      text: "Your university then validates the payment on its portal, often after a few days. Check Infostud or Delphi. If nothing appears after about a week, send the receipt to the student office. Tor Vergata warns that if the regional tax payment is not validated, you are not enrolled and you lose your DiSCo benefits ([Tor Vergata student guide 2026/27](https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf)).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I pay pagoPA from abroad with a foreign card?",
          a: "Yes. pagoPA accepts credit, debit and prepaid Visa, Mastercard, Maestro, Visa Electron and American Express cards, whatever the issuing country. The card must be enabled for online and international payments and pass the 3-D Secure check with your bank. If one provider refuses the card, pick another provider on the summary screen before you switch to PayPal.",
        },
        {
          q: "Can I pay pagoPA in instalments from Tunisia?",
          a: "No, not with PayPal: PayPal's instalments on pagoPA require you to live in Italy. Choose to pay in full when PayPal asks how you want to pay. Before the due date, check that your card or PayPal account can cover the whole amount at once, including the provider fee.",
        },
        {
          q: "Do I need SPID to pay a pagoPA notice?",
          a: "No. checkout.pagopa.it has no login, so SPID is not needed to pay a notice. You only need the Codice Avviso and the Codice Fiscale Ente Creditore (or the QR code), an email address and a payment method. An Italian bank account or a codice fiscale of your own is not needed either.",
        },
        {
          q: "How much does it cost to pay pagoPA with PayPal?",
          a: "EUR 1.50 for a notice up to EUR 248.50 and EUR 2.50 above, as of October 2026. PayPal adds about 4% if it converts the currency for a Tunisian account. The pagoPA fee is set by the payment provider and can change, so check the total with the fee included before you press Paga.",
        },
        {
          q: "How long until the university sees my pagoPA payment?",
          a: "Often a few days. Your university validates the payment on its own portal, so check Infostud or Delphi after paying and keep the pagoPA receipt. If the payment still does not appear after about a week, send the receipt to the student office: Tor Vergata warns that an unvalidated regional tax payment means you are not enrolled.",
        },
        {
          q: "I lost my Codice Avviso. Can pagoPA send it to me?",
          a: "No. Only the body that issued the notice, usually your university, can give you the Codice Avviso again, and pagoPA cannot generate it. Download the notice again from your university portal, such as Infostud or Delphi, or ask the student office to send it to you.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "pagoPA: where to pay (online and in person)", url: "https://www.pagopa.gov.it/it/cittadini/dove-pagare/" },
        { label: "pagoPA: paying with pagoPA", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958790454417-Pagare-con-pagoPA" },
        { label: "pagoPA: paying a notice from abroad if you are not Italian", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA: accepted payment methods", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609" },
        { label: "pagoPA: paying with PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "pagoPA: paying with credit or debit cards", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041" },
        { label: "pagoPA: I can't pay with a foreign card", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113" },
        { label: "pagoPA: money debited but payment failed", url: "https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561" },
        { label: "pagoPA: why providers charge fees", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958813866769" },
        { label: "pagoPA: cost transparency", url: "https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/" },
        { label: "PayPal Italy: paying pagoPA with PayPal", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal Tunisia: user agreement", url: "https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN" },
        { label: "PayPal Tunisia: consumer fees", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza: regional tax and revenue stamp", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "Sapienza: fee rules 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Tor Vergata: application procedure", url: "https://web.uniroma2.it/allegato/45147/contenuto/application_procedure" },
        { label: "Tor Vergata: student guide 2026/27", url: "https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf" },
        { label: "Banque Centrale de Tunisie: circular 2016-09 (technology card)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Provider fees are a snapshot of 10 October 2026 and change often. Check the official pages before you pay.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Where to pay", value: "checkout.pagopa.it, no SPID needed" },
        { label: "What you need", value: "Codice Avviso + Codice Fiscale Ente Creditore, or the QR code" },
        { label: "PayPal fee", value: "EUR 1.50 (EUR 2.50 above EUR 248.50) + about 4% conversion" },
        { label: "Instalments", value: "Italian residents only: pay in full from Tunisia" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Paying Italian fees from Tunisia" },
    {
      type: "ol",
      items: [
        "[Which payment method to choose](article:international-card-tunisia)",
        "[The international technology card](article:technology-card-tunisia)",
        "Paying pagoPA with PayPal or a card",
        "[RedotPay and crypto cards](article:redotpay-tunisia)",
        "[A bank account in Italy](article:bank-account-italy-student)",
      ],
    },
  ],
};
