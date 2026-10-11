import type { ArticleTranslation } from "../../types";

// Part 1 of the settling-in-Rome series. French and Arabic mirror this structure (same heading ids, one table, three fee boxes, two referral cards).
export const en: ArticleTranslation = {
  slug: "open-bank-account-italy-student",
  title: "How to Open a Bank Account in Italy as a Student in Rome",
  seoTitle: "How to Open a Bank Account in Italy as a Student (Rome)",
  metaDescription:
    "Bank account in Italy for non-EU students in Rome: Intesa Sanpaolo, Revolut, Wise and the conto di base: documents, monthly costs and what to do if refused.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["open a bank account in Italy as a student", "bank account Italy student", "best bank in Italy for international students", "Intesa Sanpaolo student account", "Revolut Italian IBAN", "conto di base"],
  summary:
    "In my experience, Intesa Sanpaolo is the best first bank for a non-EU student in Rome: I opened a normal current account with my codice fiscale, passport and enrolment proof, and the current XME Conto Silver costs EUR 5.90 a month. Revolut gives Italy residents an Italian IBAN in the app, Wise is an easy backup, and anyone legally staying in the EU has a legal right to a basic account (conto di base).",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Bank requirements, offers and fees change, so always check the bank's official pages linked below before you sign or pay anything.",
    },
    { type: "p", text: "**You have just arrived in Rome. Which bank account should you open to get an IBAN for rent, DiSCo and a salary, and what will the bank ask you for?**" },
    {
      type: "p",
      text: "The short answer: in my experience and that of other students, **Intesa Sanpaolo** is the best first choice. I opened a normal current account (about EUR 6 a month) with only my codice fiscale, my passport and proof of enrolment. **Revolut** is the fast alternative in the app, **Wise** is the easy backup, and the **conto di base** is a legal right if a bank says no.",
    },
    {
      type: "p",
      text: "This is part 1 of the series on settling in Rome after you arrive. If you still have to pay fees before you leave, read [how to pay Italian fees with an international card from Tunisia](article:international-card-tunisia) first. For the short version inside your first 30 days, see [the bank account step of the arrival guide](article:arriving-in-rome#bank-account).",
    },

    { type: "h2", id: "what-you-need", text: "1. What to bring before you walk into a bank" },
    {
      type: "p",
      text: "Get your **codice fiscale** first: every Italian bank asks for it. It normally comes with your residence permit application; see [how to get your codice fiscale](article:arriving-in-rome#codice-fiscale).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Bring the permit receipt",
      text: "If you have already applied for your residence permit, always show the **receipt (ricevuta)** with your passport. Banks expect it, and it is the document that shows you are legally staying in Italy while the card is being made.",
    },
    {
      type: "ul",
      items: [
        "**Required in my case:** codice fiscale, passport (with your study visa) and proof of enrolment at your university.",
        "**Useful to bring, in my experience:** your pre-enrolment summary and the certificate from your Tunisian bank about your blocked funds, showing the monthly transfers that will arrive in your Italian account (see [the blocked account section](article:italy-student-visa#blocked-account)).",
        "**Also keep with you:** the post office receipt (ricevuta) of your residence permit application.",
      ],
    },
    {
      type: "p",
      text: "The extra papers are not official requirements. They simply show the branch who you are, why you are in Rome and where your money comes from.",
    },

    { type: "h2", id: "intesa-sanpaolo", text: "2. Intesa Sanpaolo: the best first bank, in my experience" },
    {
      type: "p",
      text: "Intesa Sanpaolo is one of Italy's largest banks, with branches all over Rome. Its [official FAQ](https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html) says a foreign citizen living in Italy can open an account in the app, online or in a branch, **only with an Italian codice fiscale**.",
    },
    {
      type: "figure",
      src: "/blog/intesa-sanpaolo-branch.webp",
      width: 1600,
      height: 1200,
      alt: "Corner entrance of an Intesa Sanpaolo branch in Italy, with green signs above glass doors",
      caption: "An Intesa Sanpaolo branch. Bring your passport, permit receipt and codice fiscale, and ask for a current account (conto corrente).",
      credit: {
        text: "Photo: Pava, CC BY-SA 3.0 IT, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:-_ITALY_-_Intesa_Sanpaolo_filiale.JPG",
      },
    },
    {
      type: "fees",
      title: "Intesa Sanpaolo current account (as of October 2026)",
      feeIds: ["intesa-xme-silver"],
    },
    {
      type: "p",
      text: "The current offer for new customers is **XME Conto Silver** at EUR 5.90 a month (fee sheet updated 1 October 2026), or EUR 2.90 a month once a salary is credited. The first debit card has no fee, and withdrawals at the group's ATMs are free ([XME Conto Silver](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html)).",
    },
    {
      type: "p",
      text: "Intesa itself has no under-35 account. The group's app-only bank, [isybank](https://www.isybank.com/), offers its **isyPrime** plan at EUR 0 a month until age 35. I could not confirm isybank's requirements for non-EU students, so check its FAQ before you rely on it.",
    },
    { type: "h3", id: "step-choose-branch", text: "Step 1: choose a branch near a university" },
    {
      type: "p",
      text: "In my experience and that of other students, branches near universities and campuses are used to non-EU students and usually open these accounts without trouble. Ask your university's international office or older students which branch they use.",
    },
    { type: "h3", id: "step-open-account", text: "Step 2: ask for a current account and show your papers" },
    {
      type: "p",
      text: "Say you are an international student and want a current account (conto corrente). Show the documents from section 1 and ask which papers they still need, if any.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "If one branch says no",
      text: "In my experience, a refusal at one branch does not mean the bank has refused you. Often that branch simply did not know the procedure for non-EU students. Try another branch, ideally one near a campus. Requirements can change, so check Intesa's official pages.",
    },

    { type: "h2", id: "revolut", text: "3. Revolut: an Italian IBAN from the app" },
    {
      type: "p",
      text: "[Revolut](ref:revolut) gives an **Italian IBAN** (starting with IT) to customers who live in Italy (Revolut help). As of October 2026 its plans cost: Standard free, Plus EUR 3.99, Premium EUR 9.99 and Metal EUR 15.99 a month.",
    },
    {
      type: "figure",
      src: "/blog/brand/revolut-app.webp",
      width: 600,
      height: 360,
      alt: "The Revolut wordmark behind a phone showing the Revolut app icon",
      caption: "Revolut works entirely from the app: sign-up, ID check and your Italian IBAN. Image: Revolut",
    },
    {
      type: "p",
      text: "Revolut does not open personal accounts for residents of Tunisia (supported countries), so open it **after you arrive**, with your Italian address. Expect to verify your ID with a selfie, and have your codice fiscale ready in case the app asks for it.",
    },
    { type: "h3", id: "revolut-tessera-sanitaria", text: "If the app asks for a Tessera Sanitaria" },
    {
      type: "p",
      text: "During onboarding, the app may ask for a **Tessera Sanitaria** (the Italian health card), which most new students do not have yet. In my experience and that of other students, uploading the official **codice fiscale document** instead worked. It may be rejected at first; resubmitting it usually sends the account to manual review by a person. My review took 3 business days and was approved.",
    },
    {
      type: "p",
      text: "Once approved, the account gives you an Italian IBAN straight in the app; if you want one, you can sign up with my invite link below.",
    },
    { type: "referral", provider: "revolut" },
    {
      type: "callout",
      tone: "warning",
      title: "Only your own genuine documents",
      text: "No official Revolut page I found states the Tessera Sanitaria requirement, so this is experience, not a rule. Only ever submit your own genuine documents.",
    },

    { type: "h2", id: "compare", text: "4. Intesa, Revolut, Wise or conto di base: side by side" },
    {
      type: "table",
      caption: "The four options for a student in Rome (prices as of October 2026; check each provider before you sign up).",
      head: ["Option", "Monthly cost", "IBAN and documents", "Best for"],
      rows: [
        ["Intesa Sanpaolo XME Conto Silver", "EUR 5.90 (EUR 2.90 with a salary)", "Italian IBAN; codice fiscale, passport, enrolment proof (my case)", "Your main account for rent, DiSCo and a salary"],
        ["Revolut", "Standard free; Plus EUR 3.99", "Italian IBAN for Italy residents; ID, selfie, Italian address", "A fast account from the app"],
        ["Wise", "No monthly fee; card EUR 7 once", "EUR account details; ID, selfie, address in an eligible country", "A backup card and cheap currency conversion"],
        ["Conto di base (Intesa)", "EUR 30 a year; free with ISEE under EUR 11,600", "Italian IBAN; ID, codice fiscale, legal stay in the EU", "When a bank refuses a normal account"],
      ],
    },

    { type: "h2", id: "wise", text: "5. Wise: the easy last option" },
    {
      type: "p",
      text: "[Wise](ref:wise) is not a bank, but its account gives you **EUR account details** (issued by Wise Europe in Brussels, so the IBAN is Belgian) and a debit card. You need a registered address in a country where Wise offers EUR details (Wise help).",
    },
    {
      type: "figure",
      src: "/blog/brand/wise-card.webp",
      width: 400,
      height: 500,
      alt: "A hand slipping a green Wise debit card into a shirt pocket",
      caption: "The Wise debit card: for Italy residents the physical card costs EUR 7, once. Image: Wise",
    },
    {
      type: "fees",
      title: "Wise card (Italy residents, as of October 2026)",
      feeIds: ["wise-card"],
    },
    {
      type: "ul",
      items: [
        "Registration and the account are free; the physical card is EUR 7 (Wise card fees).",
        "ATM withdrawals are free up to EUR 250 a month, then 2.69% of the extra.",
        "Currency conversion starts from 0.2%, depending on the currency (Wise pricing).",
      ],
    },
    {
      type: "p",
      text: "Signing up through my invite link below also gives you one fee-free transfer, up to the amount Wise shows when you register.",
    },
    { type: "referral", provider: "wise" },
    {
      type: "p",
      text: "You can probably register from Tunisia, but the Wise card is not available there (card countries). I could not confirm that Wise receives transfers in dinars from Tunisia, so do not plan your monthly transfers around it.",
    },

    { type: "h2", id: "basic-account", text: "6. The conto di base: your legal right to an account" },
    {
      type: "p",
      text: "Italian law (TUB, art. 126-noviesdecies) gives every consumer legally staying in the EU the right to a basic account, **regardless of where they live**. On 5 August 2026, the [Bank of Italy](https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/) told banks that access was sometimes blocked without reason and that their systems must accept legitimate documents such as the **receipt of the residence permit application**.",
    },
    {
      type: "fees",
      title: "Intesa Sanpaolo conto di base (as of October 2026)",
      feeIds: ["intesa-conto-base"],
    },
    {
      type: "p",
      text: "At Intesa the [conto di base](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html) costs EUR 30 a year and is free with an ISEE under EUR 11,600. You must not hold another payment account.",
    },
    {
      type: "p",
      text: "The right is not absolute: anti-money-laundering checks still apply. If a bank refuses, **ask for the reason in writing**; the Bank of Italy expects banks to explain refusals.",
    },

    { type: "h2", id: "which-to-choose", text: "7. Which account should you open first?" },
    {
      type: "ul",
      items: [
        "**Main account:** Intesa Sanpaolo, at a branch near your campus, as soon as you have your codice fiscale.",
        "**Need an IBAN today:** Revolut from the app, once you have an Italian address.",
        "**Backup card:** Wise.",
        "**Refused everywhere:** ask for a conto di base, with your permit receipt.",
      ],
    },
    {
      type: "p",
      text: "Whatever you choose, the IBAN must be in your own name: DiSCo pays the scholarship to your account, see [when DiSCo pays](article:lazio-disco-scholarship#payments).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I open an Italian bank account with only a passport and codice fiscale?",
          a: "In my experience, yes, together with proof of enrolment: that is how I opened my Intesa Sanpaolo account. Officially, Intesa requires an Italian codice fiscale for foreigners living in Italy, and branches may ask for more.",
        },
        {
          q: "Which bank is best for international students in Rome?",
          a: "In my experience and that of other students, Intesa Sanpaolo, at a branch near a university. Revolut is a good app alternative once you live in Italy.",
        },
        {
          q: "Does Revolut give an Italian IBAN?",
          a: "Yes, to customers resident in Italy. Revolut does not serve residents of Tunisia, so open it after you arrive, with your Italian address.",
        },
        {
          q: "What if a bank branch refuses to open my account?",
          a: "Try another branch, ideally near a campus: in my experience the first branch often did not know the procedure. You can also request a conto di base and ask for any refusal in writing.",
        },
        {
          q: "Can I open a bank account in Italy before I arrive?",
          a: "Not with Intesa or Revolut in practice: Intesa needs an Italian codice fiscale and Revolut does not accept residents of Tunisia. Wise registration may work from Tunisia, but its card is not available there.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Intesa Sanpaolo: FAQ on opening XME Conto con Piano", url: "https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html" },
        { label: "Intesa Sanpaolo: XME Conto Silver", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html" },
        { label: "Intesa Sanpaolo: XME Conto Silver fee sheet (01.10.2026)", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1363.pdf" },
        { label: "Intesa Sanpaolo: conto di base", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html" },
        { label: "Intesa Sanpaolo: conto di base fee sheet", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1221.pdf" },
        { label: "isybank (Intesa Sanpaolo group)", url: "https://www.isybank.com/" },
        { label: "Bank of Italy: supervisory guidance on the conto di base (5 August 2026)", url: "https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/" },
        { label: "Revolut: getting an Italian IBAN", url: "https://help.revolut.com/it-IT/help/migration-to-italian-iban/question-getting-an-italian-iban/" },
        { label: "Revolut: supported countries", url: "https://help.revolut.com/en-US/help/profile-and-plan/profile-plan/verifying-identity/what-countries-are-supported/" },
        { label: "Wise: pricing for Italy residents", url: "https://wise.com/it/pricing/" },
        { label: "Wise: card fees", url: "https://wise.com/it/pricing/card-fees" },
        { label: "Wise: opening account details", url: "https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money" },
        { label: "Wise: card availability by country", url: "https://wise.com/help/articles/2968915/can-i-get-the-wise-card-in-my-country" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Fees are those published by the banks in October 2026, and the personal experience in this guide is mine and other students', not an official rule. Check the official pages before you open an account.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "First choice (my experience)", value: "Intesa Sanpaolo, at a branch near a university" },
        { label: "Documents in my case", value: "Codice fiscale, passport, proof of enrolment" },
        { label: "Italian IBAN in an app", value: "Revolut, once you live in Italy" },
        { label: "If refused", value: "Ask for a conto di base and the refusal reason in writing" },
      ],
    },
    { type: "h2", id: "settling-path", text: "Settling in Rome, step by step" },
    {
      type: "ol",
      items: [
        "Open a bank account",
        "[Register your residenza in Rome](article:residenza-rome)",
        "[Find a student job in Rome](article:student-jobs-rome)",
        "[First steps after arrival](article:arriving-in-rome)",
      ],
    },
  ],
};
