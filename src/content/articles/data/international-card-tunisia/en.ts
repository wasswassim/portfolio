import type { ArticleTranslation } from "../../types";

// Part 1 (hub) of the "paying in euros from Tunisia" series. French and Arabic mirror this structure
// (same heading ids, one table, four fee boxes, no referral blocks).
export const en: ArticleTranslation = {
  slug: "pay-italian-university-fees-for-tunisians",
  formerSlugs: ["pay-italian-university-fees-from-tunisia"],
  title: "How to pay Italian university fees from Tunisia",
  subtitle: "Four payment routes compared: bank transfer, technology card, PayPal with a RedotPay card, and an Italian account",
  seoTitle: "Pay Italian University Fees from Tunisia: 4 Ways (2026)",
  metaDescription:
    "Pay Italian university fees from Tunisia: 4 routes ranked by legal safety, from a bank transfer (BCT circular 2016-09) to the technology card and PayPal.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["pay Italian university fees from Tunisia", "pay Italian tuition from Tunisia", "pay enrolment fees in Italy from Tunisia", "international card Tunisia", "pay in euros from Tunisia", "transfer university fees abroad from Tunisia"],
  summary:
    "In 2026, the safest legal way to pay Italian university fees from Tunisia is a bank transfer: exam and application fees against an invoice, tuition through your study file at one bank. For smaller online payments, the technology card (1,000 TND a year) can work, and PayPal on pagoPA with a linked RedotPay card is the final solution when a Tunisian card is refused. Read the crypto-card warnings first.",
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
      text: "This guide ranks four methods by legal certainty, then cost, then effort. Each section links to the detailed guide for that route: the technology card, pagoPA with PayPal and the RedotPay card.",
    },

    { type: "h2", id: "which-method", text: "1. Which payment method fits which Italian fee?" },
    {
      type: "p",
      text: "A bank transfer fits application, exam and tuition fees. The technology card and PayPal fit only small online amounts, such as the regional tax and the revenue stamp on a pagoPA notice.",
    },
    {
      type: "table",
      caption: "Italian fees and the methods that can work from Tunisia (checked October 2026).",
      head: ["Fee", "How it is collected", "What can work from Tunisia"],
      rows: [
        ["Application, CIMEA and entrance-test fees", "Online, on the university or CIMEA portal", "Bank transfer against the invoice. Technology card or PayPal for small amounts (ask your bank)"],
        ["Tuition instalments", "pagoPA notice or university invoice", "Bank transfer under your study file"],
        ["Regional tax and revenue stamp", "pagoPA notice with the first instalment", "Card or PayPal on pagoPA. Cash at a tabaccheria or an Italian card once you arrive"],
        ["Residence permit kit", "At an Italian post office, after arrival", "Paid in Italy, see [residence permit costs in Rome](article:arriving-in-rome#residence-permit)"],
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

    { type: "h2", id: "bank-transfer", text: "2. Option 1: how do you pay by bank transfer from a Tunisian bank?" },
    {
      type: "p",
      text: "A bank transfer from your Tunisian bank is the easiest legal route to pay Italian fees. [BCT circular 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf), annex 1, item 13, lets residents transfer fees for exams, competitions and the assessment of files for studies abroad, against an invoice. The text sets **no fixed cap**.",
    },
    {
      type: "figure",
      src: "/blog/avenue-habib-bourguiba-tunis.webp",
      width: 1600,
      height: 1200,
      alt: "Aerial view of the tree-lined Avenue Habib Bourguiba in central Tunis, with a glass tower on the right",
      caption: "Avenue Habib Bourguiba in central Tunis. The transfer is ordered at the bank that holds your study file, so that branch is your first stop.",
      credit: {
        text: "Photo: Dacoslett, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:TunisAveHabibBourguiba.jpg",
      },
    },
    {
      type: "p",
      text: "Tuition goes through your **study file**, domiciled at one bank for the academic year. Under [BCT circular 2025-10](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf), tuition is paid against the university invoice, and two allowances come on top. How to open the study file is explained in [the blocked account step of the Italy student visa guide](article:italy-student-visa#blocked-account).",
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
      text: "Many Italian universities issue pagoPA notices rather than a plain bank account number. In my experience, study agencies in Tunisia pay these notices for students as a normal service, and you can also pay one yourself by card, with PayPal or in cash at a tabaccheria once you are in Italy. Ask your bank whether it can pay a notice by transfer.",
    },

    { type: "h2", id: "technology-card", text: "3. Option 2: can the technology card (CTI) pay Italian fees?" },
    {
      type: "p",
      text: "The international technology card (CTI) can pay small Italian fees online, within an allowance of **1,000 TND per calendar year** (circular 2016-09, art. 15), but it is not guaranteed to work for tuition. Any Tunisian resident with at least the bac can get the card. The allowance is about **EUR 297** at the BCT rate of 3.3671 (7 October 2026), a little less after bank fees.",
    },
    {
      type: "fees",
      title: "Technology card allowance",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "The technology card's official list of uses names online training, educational sites, subscriptions and software licences. It does **not** name tuition or pagoPA. Paying university fees with the CTI is a grey zone that depends on the bank: Banque Zitouna, for example, [limits online use by merchant code](https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique). Ask your bank. Eligibility, documents and the issuing banks are covered in [how to get the international technology card in Tunisia](article:technology-card-tunisia).",
    },

    { type: "h2", id: "paypal-pagopa", text: "4. Option 3: how do you pay with PayPal and a RedotPay card?" },
    {
      type: "p",
      text: "PayPal on the pagoPA checkout works from Tunisia, and a [RedotPay](ref:redotpay) Visa card linked to PayPal is the final solution when your Tunisian card is refused. A Tunisian PayPal account can **pay and send** money, even though it cannot receive any, and paying a fee only needs the first part. If you hold a technology card (CTI), you will usually pay with the CTI itself, so the RedotPay card is the second card to link to PayPal.",
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
    {
      type: "p",
      text: "RedotPay is a Hong Kong fintech that issues a Visa card funded with stablecoins such as USDT. RedotPay's help centre says the card can be linked to PayPal, Apple Pay or Google Pay, and a new card can take up to 5 days before PayPal accepts it (see the official sources at the end).",
    },
    {
      type: "ol",
      items: [
        "**Get the RedotPay card** with the promo code j2eb5 and activate it.",
        "**Add the card to PayPal** as a payment method, with the same name and billing address as on your RedotPay account. If PayPal refuses it, wait a few days instead of retrying: RedotPay warns that too many attempts in a row can freeze the card.",
        "**Pay on checkout.pagopa.it**: enter the notice codes, choose PayPal, then pay in full.",
      ],
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
      type: "callout",
      tone: "warning",
      title: "Read the warnings first",
      text: "A crypto card carries legal risk for residents of Tunisia: no BCT text authorises residents to buy crypto, and RedotPay's terms say the account is not a banking service and can be frozen at the company's discretion, with no deposit insurance mentioned. Read [the legal notice and warnings in our RedotPay guide](article:redotpay-tunisia#legal-status) before you use it.",
    },
    {
      type: "p",
      text: "Paying a pagoPA notice is a normal process: by card or PayPal online, or in cash at a tabaccheria or post office once you are in Italy. Every checkout step is in [how to pay a pagoPA notice from abroad with PayPal or a card](article:pay-pagopa-from-abroad).",
    },

    { type: "h2", id: "once-in-italy", text: "5. Option 4: when does an Italian account or card become the best option?" },
    {
      type: "p",
      text: "An Italian account or card becomes the best option once you are in Rome: an Italian account, a Postepay card or a Wise card pays pagoPA directly, usually at a lower cost. The Wise card is not available in Tunisia, but it is in Italy. For the next steps, read [how to open a bank account in Italy as a student](article:bank-account-italy-student) and [where the IBAN fits in your first weeks in Rome](article:arriving-in-rome#bank-account).",
    },
    {
      type: "p",
      text: "**Why this order?** Legal certainty comes first: a bank transfer has a clear legal basis and leaves a paper trail. Then cost: the technology card adds fees and a 1,000 TND cap. PayPal with a RedotPay card is the final online solution when Tunisian cards are refused, once you have read its legal warnings. An Italian account is cheapest but only works after you arrive.",
    },

    { type: "h2", id: "exchange-rules", text: "6. What do Tunisian exchange rules require?" },
    {
      type: "p",
      text: "Tunisian exchange rules require residents to go through the BCT or an authorised intermediary, such as a bank or La Poste, for foreign exchange: that is article 3 of the [Code des changes of 1976](https://www.finances.gov.tn/sites/default/files/17.pdf). Capital transfers outside the rules need an authorisation (art. 1).",
    },
    {
      type: "figure",
      src: "/blog/central-bank-tunisia.webp",
      width: 1600,
      height: 890,
      alt: "The headquarters of the Central Bank of Tunisia in Tunis, a large modern building behind palm trees",
      caption: "The Central Bank of Tunisia (BCT) in Tunis. Its circulars set what a resident may pay abroad, and through which intermediary.",
      credit: {
        text: "Photo: DrFO.Jr.Tn, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:BCT_-_Tunis.jpg",
      },
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
      text: "A new exchange code was still under review in June 2026 ([La Presse](https://www.lapresse.tn/2026/06/04/reglementation-de-change-un-nouveau-code-a-lexamen/)). The press also reported that the 2026 finance law lets residents open foreign-currency accounts ([Business News](https://businessnews.com.tn/2025/12/03/comptes-en-devises-pour-les-residents-tunisiens-tout-ce-quil-faut-savoir/1376299/)). How Tunisian banks apply the foreign-currency account rule is not confirmed, so check with your bank.",
    },

    { type: "h2", id: "payment-scams", text: "7. Can you buy an international card on social media?" },
    {
      type: "p",
      text: "No. On 30 May 2024 the BCT warned that international cards and foreign-currency accounts offered on social media are illegal and potentially dangerous, and that taking part could lead to prosecution ([Managers](https://managers.tn/2024/05/30/alerte-de-la-bct-mefiez-vous-des-cartes-bancaires-internationales-vendues-sur-les-reseaux-sociaux)).",
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
          a: "Sometimes, but it is not guaranteed. pagoPA accepts international Visa and Mastercard cards, so a Tunisian technology card can go through for small amounts. The technology card's official uses do not name tuition, however, and some banks filter online use by merchant code. Ask your bank before paying, and pay tuition by bank transfer, which has a clear legal basis.",
        },
        {
          q: "What is the safest way to pay Italian university fees from Tunisia?",
          a: "A bank transfer from your Tunisian bank is the safest way. BCT circular 2016-09 lets residents transfer application, exam and file-assessment fees against an invoice, and BCT circular 2025-10 covers tuition through a study file domiciled at one bank. Keep the SWIFT copy as proof in case the Italian university cannot find the payment.",
        },
        {
          q: "Can a Tunisian PayPal account pay Italian university fees?",
          a: "Yes, in principle: a Tunisian PayPal account can pay and send money, and PayPal is an official payment method on the pagoPA checkout. A Tunisian account generally cannot receive money, which does not matter for paying a fee. Choose to pay in full, and keep a card as a second option.",
        },
        {
          q: "Can I pay Italian university fees with a crypto card from Tunisia?",
          a: "Technically yes: link a RedotPay card to PayPal and pay the pagoPA notice with PayPal, the final solution when Tunisian cards are refused. The legal risk is yours, though: no Tunisian text authorises residents to buy crypto, the 1976 Code des changes requires residents to use the BCT or an authorised intermediary and to declare assets abroad, and a RedotPay card is not a bank account and can be frozen at the company's discretion.",
        },
        {
          q: "Can a Tunisian bank pay a pagoPA notice by transfer?",
          a: "Possibly, but this could not be confirmed. BCT circulars 2016-09 and 2025-10 give a legal basis for transferring exam fees and tuition, yet many Italian universities issue pagoPA notices rather than a plain bank account number. Ask the bank that holds your study file whether it can pay the notice by transfer, and keep the SWIFT copy.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "RedotPay help centre: using the card with PayPal, Apple Pay and Google Pay", url: "https://helpcenter.redotpay.com/en/articles/11027588-how-do-i-use-my-redotpay-card-for-payments" },
        { label: "RedotPay help centre: when the card will not link to PayPal", url: "https://helpcenter.redotpay.com/en/articles/10621389-why-won-t-my-redotpay-card-link-to-paypal-google-pay-or-other-apps" },
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
        { label: "PayPal on pagoPA", value: "EUR 1.50 to EUR 2.50 fee. Pay in full" },
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
