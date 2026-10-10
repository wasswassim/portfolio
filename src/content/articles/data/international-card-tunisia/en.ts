import type { ArticleTranslation } from "../../types";

// Part 1 (hub) of the "paying in euros from Tunisia" series. French and Arabic mirror this structure
// (same heading ids, one table, four fee boxes, no referral blocks).
export const en: ArticleTranslation = {
  slug: "pay-italian-university-fees-from-tunisia",
  title: "How to pay Italian university fees from Tunisia with an international card",
  seoTitle: "How to Pay Italian University Fees from Tunisia (2026)",
  metaDescription:
    "How to pay Italian university fees from Tunisia: bank transfer, technology card, PayPal on pagoPA, Italian cards, crypto cards, exchange rules and scams.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["pay Italian university fees from Tunisia", "international card Tunisia", "pay enrolment fees in Italy", "pagoPA from Tunisia", "Tunisian technology card", "pay in euros from Tunisia"],
  summary:
    "The most secure legal way to pay Italian university fees from Tunisia is a bank transfer: exam and application fees against an invoice, tuition through your study file at one bank. For smaller online payments, the technology card (1,000 TND a year) and a Tunisian PayPal account on pagoPA can work, but test first and ask your bank.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Exchange rules, card limits and fees change, so always check the official sources linked below and ask your bank before you pay.",
    },
    { type: "p", text: "**Your Italian university sends you a fee to pay in euros. How do you pay it from Tunisia, legally and without losing money?**" },
    {
      type: "p",
      text: "The short answer: ask your bank for a **bank transfer**. Application, exam and file-assessment fees can be transferred against an invoice, and tuition goes through your study file at one bank. For small online payments, the **technology card** (1,000 TND a year) and **PayPal on pagoPA** are the next options, with limits.",
    },
    {
      type: "p",
      text: "This guide ranks five methods by legal certainty, then cost, then effort. The detailed guides on the card, pagoPA and crypto cards are linked in each section.",
    },

    { type: "h2", id: "which-method", text: "1. Which payment method fits which Italian fee?" },
    {
      type: "table",
      caption: "Italian fees and the methods that can work from Tunisia (checked October 2026).",
      head: ["Fee", "How it is collected", "What can work from Tunisia"],
      rows: [
        ["Application, CIMEA and entrance-test fees", "Online, on the university or CIMEA portal", "Bank transfer against the invoice; technology card or PayPal for small amounts (ask your bank)"],
        ["Tuition instalments", "pagoPA notice or university invoice", "Bank transfer under your study file"],
        ["Regional tax and revenue stamp", "pagoPA notice with the first instalment", "Technology card or PayPal on pagoPA (test first); an Italian card once you arrive"],
        ["Residence permit kit", "At an Italian post office, after arrival", "Paid in Italy, see [the permit costs](article:arriving-in-rome#residence-permit)"],
      ],
    },
    {
      type: "fees",
      title: "Example: first-year fees at Sapienza (lowest band, 2026/27)",
      feeIds: ["sapienza-band-a", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "Sapienza says its fees are paid only through pagoPA, after you generate the notice on Infostud ([regional tax and stamp](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
    },

    { type: "h2", id: "bank-transfer", text: "2. Option 1: a bank transfer from your Tunisian bank" },
    {
      type: "p",
      text: "This is the easiest legal route. [BCT circular 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf), annex 1, item 13, lets residents transfer fees for exams, competitions and the assessment of files for studies abroad, against an invoice. The text sets **no fixed cap**.",
    },
    {
      type: "p",
      text: "Tuition goes through your **study file**, domiciled at one bank for the academic year. Under [BCT circular 2025-10](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf), tuition is paid against the university invoice, and two allowances come on top. The [blocked account section](article:italy-student-visa#blocked-account) explains how to open the file.",
    },
    {
      type: "fees",
      title: "Study file allowances (BCT circular 2025-10)",
      feeIds: ["study-installation", "study-living"],
    },
    { type: "h3", id: "step-get-invoice", text: "Step 1: get the invoice or payment notice" },
    {
      type: "p",
      text: "Download the invoice, or the pagoPA notice, from your university portal. It must be in your name. If there is no notice, ask the university: [pagoPA cannot create it for you](https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617).",
    },
    { type: "h3", id: "step-go-to-bank", text: "Step 2: go to the bank that holds your study file" },
    {
      type: "p",
      text: "Bring the invoice, your CIN and your study file documents. For application or CIMEA fees, mention item 13 of annex 1 of [circular 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf).",
    },
    { type: "h3", id: "step-order-transfer", text: "Step 3: ask for the transfer and keep the SWIFT copy" },
    {
      type: "p",
      text: "Ask for a transfer to the university under your study file, then keep the **SWIFT copy**: it proves the payment if the university cannot find it.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Ask before you rely on it",
      text: "Many Italian universities issue pagoPA notices rather than a plain bank account number. Whether a Tunisian bank will pay a pagoPA notice by transfer could not be confirmed, so ask your bank first.",
    },

    { type: "h2", id: "technology-card", text: "3. Option 2: the international technology card (CTI)" },
    {
      type: "p",
      text: "A Tunisian resident with at least the bac can get a technology card with an allowance of **1,000 TND per calendar year** (circular 2016-09, art. 15). That is about **EUR 297** at the BCT rate of 3.3671 (7 October 2026), a little less after bank fees.",
    },
    {
      type: "fees",
      title: "Technology card allowance",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "Its official list of uses names online training, educational sites, subscriptions and software licences. It does **not** name tuition or pagoPA. Paying university fees with it is a grey zone that depends on the bank: Banque Zitouna, for example, [limits online use by merchant code](https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique). Ask your bank. The [technology card guide](article:technology-card-tunisia) covers how to apply.",
    },

    { type: "h2", id: "paypal-pagopa", text: "4. Option 3: PayPal on the pagoPA checkout" },
    {
      type: "p",
      text: "A Tunisian PayPal account can **pay and send**, but not receive money. That is fine here, because you only want to pay. Link your technology card to it as the funding source.",
    },
    {
      type: "p",
      text: "PayPal is an official method on [checkout.pagopa.it](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal), and [PayPal says](https://www.paypal.com/it/digital-wallet/pagopa) any account holder with a linked card can use it. Instalments need Italian residency, so pay in full.",
    },
    {
      type: "fees",
      title: "Costs of paying a pagoPA notice with PayPal",
      feeIds: ["pagopa-paypal", "paypal-fx"],
    },
    {
      type: "p",
      text: "No official source confirms that a Tunisian account is accepted on pagoPA. Test with a small notice first, such as the EUR 16 stamp. Step by step in [how to pay pagoPA from abroad](article:pay-pagopa-from-abroad).",
    },

    { type: "h2", id: "once-in-italy", text: "5. Option 4: an Italian account or card once you arrive" },
    {
      type: "p",
      text: "Once you are in Rome, an Italian account, a Postepay card or a Wise card pays pagoPA directly, usually at a lower cost. The Wise card is not available in Tunisia, but it is in Italy. Read [opening an account after arrival](article:arriving-in-rome#bank-account) and the [student bank account guide](article:bank-account-italy-student).",
    },

    { type: "h2", id: "crypto-cards", text: "6. Option 5: why crypto cards come last" },
    {
      type: "p",
      text: "RedotPay is a Hong Kong fintech that issues a Visa card funded with stablecoins such as USDT. Its [terms](https://www.redotpay.com/terms) say the account is not a banking service and let the company freeze accounts at its discretion. No deposit insurance is mentioned.",
    },
    {
      type: "p",
      text: "For residents of Tunisia, no BCT text authorises buying crypto, so the legal status is unclear (see the next section). Rizon, another crypto card, does not list Tunisia among the nationalities it accepts, so this guide does not cover it. Details in our [RedotPay explainer](article:redotpay-tunisia).",
    },
    {
      type: "p",
      text: "**Why this order?** Legal certainty comes first: a bank transfer has a clear legal basis and leaves a paper trail. Then cost: the card and PayPal add fees and a 1,000 TND cap. Then effort: an Italian account is cheapest but only works after you arrive. Crypto cards come last because the legal risk falls on you.",
    },

    { type: "h2", id: "exchange-rules", text: "7. What Tunisian exchange rules say" },
    {
      type: "p",
      text: "The [Code des changes of 1976](https://www.finances.gov.tn/sites/default/files/17.pdf) requires residents to go through the BCT or an authorised intermediary, such as a bank or La Poste, for foreign exchange (art. 3). Capital transfers outside the rules need an authorisation (art. 1).",
    },
    {
      type: "ul",
      items: [
        "Residents must declare their assets abroad to the BCT (art. 16) and cannot dispose of them without authorisation (art. 17).",
        "Any manoeuvre to get around the rules is an offence (art. 23).",
        "Penalties include prison, fines of at least five times the amount and confiscation (arts. 35 and 36). In March 2024 the Ministry of Finance said the draft new code would cut some prison terms ([Managers](https://managers.tn/2024/03/18/code-des-changes-peines-de-prison-reduites-a-3-ans-pour-diverses-infractions-financieres/)).",
        "No BCT or CMF text authorising crypto could be found.",
      ],
    },
    {
      type: "p",
      text: "A new exchange code was still under review in June 2026 ([La Presse](https://www.lapresse.tn/2026/06/04/reglementation-de-change-un-nouveau-code-a-lexamen/)). The press also reported that the 2026 finance law lets residents open foreign-currency accounts ([Business News](https://businessnews.com.tn/2025/12/03/comptes-en-devises-pour-les-residents-tunisiens-tout-ce-quil-faut-savoir/1376299/)). How banks apply it is not confirmed, so check with your bank.",
    },

    { type: "h2", id: "payment-scams", text: "8. Scams: cards and accounts sold on social media" },
    {
      type: "p",
      text: "On 30 May 2024 the BCT warned that international cards and foreign-currency accounts offered on social media are illegal and potentially dangerous, and that taking part could lead to prosecution ([Managers](https://managers.tn/2024/05/30/alerte-de-la-bct-mefiez-vous-des-cartes-bancaires-internationales-vendues-sur-les-reseaux-sociaux)).",
    },
    {
      type: "ul",
      items: [
        "Never share your card's CVC2 code or an OTP with anyone, even a “recharge” service.",
        "“Recharge” and card-rental services that ask for your card details are a common trap.",
        "P2P sellers can disappear after you pay them in dinars.",
        "Lending your technology card breaks the sworn statement you signed at the bank.",
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I pay Italian university fees with a Tunisian card?",
          a: "Sometimes, but it is not guaranteed. pagoPA accepts international Visa and Mastercard cards, yet the technology card's official uses do not name tuition, so ask your bank; a bank transfer is the safer route.",
        },
        {
          q: "How much can I spend with the technology card?",
          a: "1,000 TND per calendar year for an individual, about EUR 297 at the BCT rate of 7 October 2026. The 10,000 TND figure applies to companies only.",
        },
        {
          q: "Is PayPal available in Tunisia?",
          a: "Yes, for paying and sending. A Tunisian PayPal account cannot generally receive money, which does not matter when you pay a pagoPA notice.",
        },
        {
          q: "Is buying crypto legal in Tunisia?",
          a: "No Tunisian text authorises it. The exchange code requires residents to use authorised intermediaries and to declare assets abroad, so buying crypto with dinars carries real legal risk.",
        },
        {
          q: "Can my bank pay a pagoPA notice?",
          a: "Possibly, but this could not be confirmed. The legal basis for transferring tuition and exam fees exists, so ask your bank whether it can pay the notice by transfer.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Banque Centrale de Tunisie: circular 2016-09 (current transfers, technology card)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
        { label: "Banque Centrale de Tunisie: circular 2025-10 (studies abroad)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "Banque Centrale de Tunisie: exchange rates", url: "https://www.bct.gov.tn/bct/siteprod/cours.jsp" },
        { label: "Ministry of Finance: Code des changes et du commerce extérieur", url: "https://www.finances.gov.tn/sites/default/files/17.pdf" },
        { label: "Ministry of ICT: international technology card fact sheet", url: "https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf" },
        { label: "Banque Zitouna: technology card", url: "https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique" },
        { label: "pagoPA: paying from abroad as a foreign citizen", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA: paying with PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "PayPal Italy: pagoPA", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal Tunisia: consumer fees", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza: regional tax and revenue stamp", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "RedotPay: terms of service", url: "https://www.redotpay.com/terms" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Euro values use the BCT rate of 7 October 2026. Card limits, PayPal and pagoPA fees and the exchange code can change, so check the official pages and ask your bank before you pay.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Safest route", value: "Bank transfer: fees against an invoice, tuition through your study file" },
        { label: "Technology card", value: "1,000 TND per calendar year (about EUR 297)" },
        { label: "PayPal on pagoPA", value: "EUR 1.50 to EUR 2.50 fee; test with a small notice" },
        { label: "Crypto", value: "No Tunisian text authorises it" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Paying in euros from Tunisia" },
    {
      type: "ol",
      items: [
        "Which method for which fee",
        "[The international technology card](article:technology-card-tunisia)",
        "[Paying pagoPA from abroad](article:pay-pagopa-from-abroad)",
        "[RedotPay and crypto cards](article:redotpay-tunisia)",
        "Once in Rome: [open a bank account](article:bank-account-italy-student)",
      ],
    },
  ],
};
