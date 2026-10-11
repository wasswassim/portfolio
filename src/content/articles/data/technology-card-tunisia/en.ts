import type { ArticleTranslation } from "../../types";

// Part 2 of the payment series. French and Arabic mirror this structure (same heading ids, two tables, two fee boxes).
export const en: ArticleTranslation = {
  slug: "international-technology-card-tunisia",
  title: "Tunisia's International Technology Card (CTI)",
  subtitle: "Limit, Documents, Uses and Renewal",
  seoTitle: "Tunisia's International Technology Card (CTI): How to Get It",
  metaDescription:
    "The CTI gives Tunisian residents with the bac 1,000 TND a year (about EUR 297) for online payments. Documents, bank or La Poste, allowed uses and renewal.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["international technology card Tunisia", "carte technologique internationale", "CTI Tunisia limit", "technology card 1000 TND", "CTI La Poste", "pay online from Tunisia"],
  summary:
    "The international technology card (CTI) lets a Tunisian resident with at least the baccalaureate spend up to 1,000 TND per calendar year (about EUR 297) online, under BCT circular 2016-09. You request it at your bank or at La Poste with your CIN, a certified copy of your diploma and a sworn statement, and renew it each year with your stamped tax return.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Exchange rules, limits and bank fees change, so check the official texts linked below and ask your bank before you pay anything.",
    },
    { type: "p", text: "**How much can the technology card really pay, how do you get one, and can it cover your Italian university fees?**" },
    {
      type: "p",
      text: "The short answer: the international technology card (carte technologique internationale, CTI) gives a Tunisian resident with at least the baccalaureate **1,000 TND per calendar year** for online payments abroad. That is about EUR 297 before bank margins. You get it from your bank or La Poste, and you renew it every year.",
    },
    {
      type: "p",
      text: "It was designed for online services such as courses, software and subscriptions, not for tuition. This is part 2 of our [guide to paying Italian university fees from Tunisia](article:international-card-tunisia), which compares all the routes.",
    },

    { type: "h2", id: "what-it-is", text: "1. What is the international technology card?" },
    {
      type: "p",
      text: "The CTI is a nominative international card reserved for certain online payments. Its legal basis is **article 15 of BCT circular 2016-09** ([Banque Centrale de Tunisie](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf)). The allowance can be used in one or several payments and is valid for one calendar year.",
    },
    {
      type: "p",
      text: "The card network (Visa or Mastercard) depends on the bank: none of the issuer pages we checked names it, so ask when you apply. BTK Bank and La Poste describe their cards as prepaid: you load dinars, and the card pays in foreign currency up to your yearly limit.",
    },

    { type: "h2", id: "limit-in-euros", text: "2. The 1,000 TND limit, converted to euros" },
    {
      type: "fees",
      title: "The yearly allowance on the card",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "At the BCT reference rate of 7 October 2026 (1 EUR = 3.3671 TND), 1,000 TND is about **EUR 297**. Your bank applies its own card rate and fees, so plan for a little less.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Where the 10,000 TND figure comes from",
      text: "10,000 TND a year is the allowance for resident **companies** (article 14), and companies with the Startup label get 100,000 TND (circular 2019-02). Neither applies to an individual or a student. Raises for individuals were announced in 2022 and again in May 2025, but we found no BCT circular that changes article 15, so 1,000 TND is still the legal figure as of October 2026.",
    },
    {
      type: "p",
      text: "If you need more, or do not meet the conditions, article 17 lets you apply to the BCT on form F2, with a favourable opinion from the Ministry of Communication Technologies.",
    },

    { type: "h2", id: "issuers", text: "3. Banks and La Poste that issue the card" },
    {
      type: "table",
      caption: "What issuers publish about the CTI (pages checked 10 October 2026). Fees not shown here could not be verified: ask your bank.",
      head: ["Issuer", "What to know", "Yearly fee"],
      rows: [
        ["Banque Zitouna", "Also asks that you work in new technologies or a related field; online payments limited to app-store licences, filtered by merchant code", "20 TND"],
        ["BTK Bank", "Prepaid card, reloadable up to the yearly limit", "Ask your bank"],
        ["Banque de Tunisie", "Internet use only, allowance usable over the calendar year", "Ask your bank"],
        ["La Poste Tunisienne", "Needs an active postal account (CCP); ready in about 24 hours; managed on e-dinar", "Renewal 3 TND; issue fee not listed"],
        ["Other banks", "No current official product page found", "Ask your bank"],
      ],
    },
    {
      type: "figure",
      src: "/blog/stb-bank-branch-tunisia.webp",
      width: 1600,
      height: 1200,
      alt: "Entrance of an STB bank branch in La Marsa, with its name in Arabic and Latin letters above glass doors",
      caption: "An STB branch in La Marsa. Many banks issue the card without a product page online, so ask at your own branch.",
      credit: {
        text: "Photo: Cimoi, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Agence_STB_La_Marsa.jpg",
      },
    },
    {
      type: "p",
      text: "The table shows the main point: **each issuer applies its own filters**. Before you choose, ask the branch which kinds of merchants the card accepts.",
    },

    { type: "h2", id: "how-to-apply", text: "4. How to apply for the CTI, step by step" },
    { type: "h3", id: "step-eligibility", text: "Step 1: check that you qualify" },
    {
      type: "p",
      text: "You must be a **Tunisian national, resident in Tunisia**, with a diploma at least equal to the **baccalaureate** (article 15). Only one CTI allowance per person: you cannot hold one at two banks.",
    },
    { type: "h3", id: "step-documents", text: "Step 2: prepare the documents" },
    {
      type: "ul",
      items: [
        "A copy of your national identity card (CIN).",
        "A certified copy of your baccalaureate or higher diploma.",
        "The sworn statement (déclaration sur l'honneur, annex 3 of the circular), signed at the bank: you hold no other CTI allowance and will use the card only for the permitted payments.",
        "Later, for each payment, keep the **invoice**: the circular asks for one for every transfer.",
      ],
    },
    { type: "h3", id: "step-bank", text: "Step 3a: apply at your bank" },
    {
      type: "p",
      text: "Go to your branch with the documents and ask for the “carte technologique internationale”. The [Ministry of Communication Technologies fact sheet](https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf) lists the same papers. Some banks, such as Zitouna, also serve non-clients.",
    },
    { type: "h3", id: "step-post-office", text: "Step 3b: or apply at La Poste" },
    {
      type: "p",
      text: "You need an active postal current account (CCP), your CIN and a certified copy of your diploma. The procedure is on [idaraty.tn](https://idaraty.tn/fr/procedures/obtenir-la-carte-technologique-internationale-la-poste-personne-physique). You load the card in dinars and manage it on e-dinar.",
    },
    {
      type: "figure",
      src: "/blog/la-poste-tunisienne-office.webp",
      width: 1600,
      height: 1137,
      alt: "A white La Poste Tunisienne office in Ettadhamen with a blue sign in Arabic and French and a yellow letterbox",
      caption: "The Ettadhamen post office. At La Poste, the card is linked to your postal current account (CCP).",
      credit: {
        text: "Photo: Tunisie Guide 360, CC BY-SA 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Bureau_de_poste_ettadhamen.png",
      },
    },
    { type: "h3", id: "step-activate", text: "Step 4: activate online payments" },
    {
      type: "p",
      text: "Make sure the card is enabled for online and international payments and that you receive the confirmation code (OTP) on your phone. Check this before a deadline, not on the day.",
    },

    { type: "h2", id: "allowed-uses", text: "5. What the card may legally pay for" },
    {
      type: "p",
      text: "Annex 1 of circular 2016-09 lists the permitted online payments:",
    },
    {
      type: "ul",
      items: [
        "Online training services and educational websites.",
        "Subscriptions to foreign websites, including freelance platforms.",
        "Hosting for websites and mobile apps, and online advertising.",
        "Software licences and app-development tools.",
        "Information-gathering expenses.",
      ],
    },
    {
      type: "p",
      text: "The sworn statement excludes **betting, living costs (frais de séjour), purchases of goods** and prohibited sites.",
    },
    {
      type: "callout",
      tone: "note",
      title: "The grey zone: tuition, pagoPA and visa fees",
      text: "University tuition, pagoPA notices and visa fees are not named in the list. “Online training” and “educational websites” are the closest categories, but whether they cover these fees is not settled, and banks may block some merchants. Ask your bank before you pay, and keep every receipt and invoice.",
    },

    { type: "h2", id: "paying-italian-fees", text: "6. Italian student fees against the 1,000 TND limit" },
    {
      type: "fees",
      title: "Common first-year fees in Rome, in dinars",
      feeIds: ["sapienza-application", "cimea-cv", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
      hub: true,
    },
    {
      type: "p",
      text: "These four fees add up to EUR 486, more than the whole yearly allowance. The CIMEA statement alone (EUR 300) is above 1,000 TND.",
    },
    {
      type: "table",
      caption: "Which route fits each fee (our reading of the BCT texts; confirm with your bank).",
      head: ["Fee", "On the CTI?", "Clearer legal route"],
      rows: [
        ["Sapienza application fee", "Grey zone", "Bank transfer with the invoice (application file fees)"],
        ["CIMEA statement", "Grey zone, and above the limit", "Bank transfer with the invoice (file-assessment fees)"],
        ["Regional tax and stamp (pagoPA)", "Grey zone", "Study file at your bank, if it can pay the notice (ask)"],
      ],
    },
    {
      type: "p",
      text: "For application, exam and file-assessment fees, your bank can make a transfer on presentation of the invoice: see [the bank transfer option](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "paypal-link", text: "7. Linking the CTI to a Tunisian PayPal account" },
    {
      type: "p",
      text: "A PayPal account registered in Tunisia can **send payments**, funded by a linked international card such as the CTI. Receiving money is not generally available. PayPal adds about 4% when it converts the currency, and pagoPA charges EUR 1.50 to EUR 2.50 for a PayPal payment.",
    },
    {
      type: "figure",
      src: "/blog/logos/paypal.webp",
      width: 1600,
      height: 400,
      alt: "PayPal logo",
      caption: "PayPal is a trademark of PayPal, Inc.; the logo is shown only to identify the service.",
      credit: {
        text: "Logo: PayPal, Public domain, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PayPal_2024.svg",
      },
    },
    {
      type: "p",
      text: "If your bank filters merchants (as Zitouna does), PayPal may be refused: ask first. The full method is in [how to pay a pagoPA notice with PayPal](article:pay-pagopa-from-abroad#pay-with-paypal).",
    },

    { type: "h2", id: "renewal", text: "8. Renewing the card every calendar year" },
    {
      type: "p",
      text: "The allowance ends on 31 December. To renew, send a written request to **the same bank**, with **last year's tax return stamped by the tax administration** (article 18).",
    },
    {
      type: "ul",
      items: [
        "If that return is not ready yet, the return for the year before is accepted, and the current one must reach the bank **by 15 July**; otherwise the bank suspends the allowance.",
        "At La Poste, bring the expired card, your CIN and the tax receipt (quittance de déclaration des impôts); renewal costs 3 TND ([idaraty.tn](https://idaraty.tn/fr/procedures/renouvellement-de-la-carte-technologique-internationale-la-poste-personne-physique)).",
        "The La Poste card itself is extended for 5 years, but you must reactivate it at a post office.",
      ],
    },
    {
      type: "p",
      text: "Unused dinars do not carry over: plan big payments early in the year.",
    },

    { type: "h2", id: "card-safety", text: "9. Keep your card for yourself" },
    {
      type: "p",
      text: "Never lend or rent your CTI, and never share its CVC2 or the OTP code: sharing the card also breaks the sworn statement you signed. On 30 May 2024 the BCT warned that international cards sold on social media are illegal and dangerous. Read more in [how to avoid payment scams](article:international-card-tunisia#payment-scams).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "What is the yearly limit of the CTI in 2026?",
          a: "1,000 TND per calendar year for an individual, about EUR 297 at the BCT rate of 7 October 2026. No BCT circular raising it was found as of October 2026.",
        },
        {
          q: "Is the technology card limit 10,000 TND now?",
          a: "No. 10,000 TND is the allowance for resident companies, and 100,000 TND for companies with the Startup label; individuals stay at 1,000 TND.",
        },
        {
          q: "What documents do I need for the carte technologique?",
          a: "A copy of your CIN, a certified copy of your baccalaureate or higher diploma, and the sworn statement signed at the bank. La Poste also requires an active postal account (CCP).",
        },
        {
          q: "Is it better to get the CTI at La Poste or at a bank?",
          a: "Both give the same 1,000 TND allowance. La Poste needs a CCP and is fast (about 24 hours, renewal 3 TND); banks may filter merchants differently, so ask which payments they accept.",
        },
        {
          q: "Can I pay my Sapienza tuition with the CTI?",
          a: "It is not clear: tuition is not in the official list of permitted uses, and banks may block it. The clearer route is a bank transfer under your study file; ask your bank first.",
        },
        {
          q: "What happens when my 1,000 TND is used up?",
          a: "The card stops paying until the new calendar year. You can apply to the BCT for more on form F2, or use another route from the [payment guide](article:international-card-tunisia#which-method).",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Banque Centrale de Tunisie: circular 2016-09 (articles 14 to 18, annexes 1 and 3)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
        { label: "Circular 2019-02 (companies and Startup label), hosted by the Ministry of Communication Technologies", url: "https://www.mtc.gov.tn/fileadmin/StartupAct/Cir_2019_02_fr.pdf" },
        { label: "Ministry of Communication Technologies: CTI fact sheet", url: "https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf" },
        { label: "Banque Centrale de Tunisie: reference exchange rates", url: "https://www.bct.gov.tn/bct/siteprod/cours.jsp" },
        { label: "idaraty.tn: getting the CTI at La Poste", url: "https://idaraty.tn/fr/procedures/obtenir-la-carte-technologique-internationale-la-poste-personne-physique" },
        { label: "idaraty.tn: renewing the CTI at La Poste", url: "https://idaraty.tn/fr/procedures/renouvellement-de-la-carte-technologique-internationale-la-poste-personne-physique" },
        { label: "Banque Zitouna: technology card", url: "https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique" },
        { label: "BTK Bank: BTK@TECHCARD", url: "https://www.btkbank.com/site/fr/article.php?id_article=190" },
        { label: "Banque de Tunisie: international technology card", url: "https://www.bt.com.tn/carte-technologique-international-entreprises" },
        { label: "PayPal Tunisia: consumer fees", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. The 1,000 TND limit, the BCT rate and the issuer fees are those published in October 2026. A new exchange code is under discussion in parliament, so check the BCT site before you rely on these figures.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Yearly limit", value: "1,000 TND per calendar year (about EUR 297)" },
        { label: "Who qualifies", value: "Tunisian resident with at least the baccalaureate" },
        { label: "Where", value: "Your bank, or La Poste with an active CCP" },
        { label: "Renewal", value: "Each year, with last year's stamped tax return" },
      ],
    },
    { type: "h2", id: "payment-path", text: "Paying in euros from Tunisia" },
    {
      type: "ol",
      items: [
        "[Which payment method for which fee](article:international-card-tunisia)",
        "The international technology card",
        "[Paying pagoPA with PayPal or a card](article:pay-pagopa-from-abroad)",
        "[RedotPay and crypto cards: risks](article:redotpay-tunisia)",
        "[Opening a bank account in Italy](article:bank-account-italy-student)",
      ],
    },
  ],
};
