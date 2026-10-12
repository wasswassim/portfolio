import type { ArticleTranslation } from "../../types";

// Part 1 of the settling-in-Rome series. French and Arabic mirror this structure (same heading ids, one table, three fee boxes, two referral cards).
export const en: ArticleTranslation = {
  slug: "open-bank-account-italy-student",
  title: "How to Open a Bank Account in Italy as a Student",
  subtitle: "Intesa Sanpaolo, Revolut, Wise and the Conto di Base in Rome",
  seoTitle: "Open a Bank Account in Italy as a Student (2026)",
  metaDescription:
    "Open a bank account in Italy as a student in Rome: the documents, Intesa Sanpaolo at EUR 5.90 a month, Revolut's Italian IBAN, Wise, and the conto di base.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["open a bank account in Italy as a student", "bank account Italy student", "student bank account in Rome", "best bank in Italy for international students", "documents to open a bank account in Italy", "Revolut Italian IBAN", "conto di base", "Wise card Tunisia", "open a Revolut account in Italy"],
  summary:
    "To open a bank account in Italy as a student, get your Italian codice fiscale first; in my experience, Intesa Sanpaolo then opened a normal current account with my passport and proof of enrolment, and its XME Conto Silver costs EUR 5.90 a month as of October 2026. Revolut gives Italy residents an Italian IBAN in the app, Wise is an easy backup with a EUR 7 card, and anyone legally staying in the EU has a legal right to a basic account (conto di base).",
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
      text: "This is part 1 of the series on settling in Rome after you arrive. If you still have to pay fees before you leave, read [how to pay Italian fees with an international card from Tunisia](article:international-card-tunisia) first. For where the IBAN fits among your other tasks, see [the IBAN step in your first 30 days in Rome](article:arriving-in-rome#bank-account).",
    },

    { type: "h2", id: "what-you-need", text: "1. What documents do you need to open a bank account in Italy?" },
    {
      type: "p",
      text: "To open a bank account in Italy, you need an Italian **codice fiscale** and your passport; in my case, Intesa Sanpaolo also asked for proof of enrolment. Get the codice fiscale first, because every Italian bank asks for it. The codice fiscale normally comes with your residence permit application; see [how to get your codice fiscale in Rome](article:arriving-in-rome#codice-fiscale).",
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
        "**Useful to bring, in my experience:** your pre-enrolment summary and the certificate from your Tunisian bank about your blocked funds, showing the monthly transfers that will arrive in your Italian account (see [how the blocked account for the student visa works](article:italy-student-visa#blocked-account)).",
        "**Also keep with you:** the post office receipt (ricevuta) of your residence permit application.",
      ],
    },
    {
      type: "p",
      text: "The extra papers in this list are not official requirements. They simply show the bank branch who you are, why you are in Rome and where your money comes from.",
    },

    { type: "h2", id: "intesa-sanpaolo", text: "2. Is Intesa Sanpaolo the best first bank for a student?" },
    {
      type: "p",
      text: "In my experience and that of other students, yes: Intesa Sanpaolo is the best first bank for a non-EU student in Rome, and I opened my current account there with only my codice fiscale, passport and proof of enrolment. Intesa Sanpaolo is one of Italy's largest banks, with branches all over Rome. Its [official FAQ](https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html) says a foreign citizen living in Italy can open an account in the app, online or in a branch, **only with an Italian codice fiscale**.",
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
      text: "Intesa Sanpaolo's current offer for new customers is **XME Conto Silver** at EUR 5.90 a month (fee sheet updated 1 October 2026), or EUR 2.90 a month once a salary is credited. The first debit card has no fee, and withdrawals at the group's ATMs are free ([XME Conto Silver](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html)).",
    },
    {
      type: "p",
      text: "Intesa itself has no under-35 account. The group's app-only bank, [isybank](https://www.isybank.com/), offers its **isyPrime** plan at EUR 0 a month until age 35. I could not confirm isybank's requirements for non-EU students, so check its FAQ before you rely on it.",
    },
    { type: "h3", id: "step-choose-branch", text: "Step 1: choose a branch near a university" },
    {
      type: "p",
      text: "In my experience and that of other students, Intesa Sanpaolo branches near universities and campuses are used to non-EU students and usually open these accounts without trouble. Ask your university's international office or older students which branch they use.",
    },
    { type: "h3", id: "step-open-account", text: "Step 2: ask for a current account and show your papers" },
    {
      type: "p",
      text: "Say you are an international student and want a current account (conto corrente). Show your codice fiscale, passport and proof of enrolment, and ask the Intesa Sanpaolo branch which papers it still needs, if any.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "If one branch says no",
      text: "In my experience, a refusal at one Intesa Sanpaolo branch does not mean the bank has refused you. Often that branch simply did not know the procedure for non-EU students. Try another branch, ideally one near a campus. Requirements can change, so check Intesa's official pages.",
    },

    { type: "h2", id: "revolut", text: "3. Can a student get an Italian IBAN with Revolut?" },
    {
      type: "p",
      text: "Yes: [Revolut](ref:revolut) gives an **Italian IBAN** (starting with IT) to customers who live in Italy (Revolut help), so a student can get one in the app after arriving. As of October 2026, Revolut's plans cost: Standard free, Plus EUR 3.99, Premium EUR 9.99 and Metal EUR 15.99 a month.",
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
      text: "During onboarding, the Revolut app may ask for a **Tessera Sanitaria** (the Italian health card), which most new students do not have yet. In my experience and that of other students, uploading the official **codice fiscale document** instead worked. The codice fiscale document may be rejected at first; resubmitting it usually sends the account to manual review by a person. My review took 3 business days and was approved.",
    },
    {
      type: "p",
      text: "Once approved, the Revolut account gives you an Italian IBAN straight in the app; if you want one, you can sign up through the partner link below.",
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

    { type: "h2", id: "wise", text: "5. Is Wise a good backup account in Italy?" },
    {
      type: "p",
      text: "Yes, Wise is an easy backup, and the last option to try: [Wise](ref:wise) is not a bank, but the Wise account gives you **EUR account details** (issued by Wise Europe in Brussels, so the IBAN is Belgian) and a debit card. You need a registered address in a country where Wise offers EUR details (Wise help).",
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
      text: "Signing up through the partner link below also gives you a gift of one fee-free transfer, up to the amount Wise shows when you register.",
    },
    { type: "referral", provider: "wise" },
    {
      type: "p",
      text: "You can probably register with Wise from Tunisia, but the Wise card is not available there (card countries). I could not confirm that Wise receives transfers in dinars from Tunisia, so do not plan your monthly transfers around it.",
    },

    { type: "h2", id: "basic-account", text: "6. What is the conto di base, and can a bank refuse it?" },
    {
      type: "p",
      text: "The conto di base is a basic bank account that Italian law (TUB, art. 126-noviesdecies) gives to every consumer legally staying in the EU, **regardless of where they live**. On 5 August 2026, the [Bank of Italy](https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/) told banks that access was sometimes blocked without reason and that their systems must accept legitimate documents such as the **receipt of the residence permit application**.",
    },
    {
      type: "fees",
      title: "Intesa Sanpaolo conto di base (as of October 2026)",
      feeIds: ["intesa-conto-base"],
    },
    {
      type: "p",
      text: "At Intesa the [conto di base](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html) costs EUR 30 a year and is free with an ISEE under EUR 11,600. To get the Intesa Sanpaolo conto di base, you must not hold another payment account.",
    },
    {
      type: "p",
      text: "The right to a conto di base is not absolute: anti-money-laundering checks still apply. If a bank refuses, **ask for the reason in writing**; the Bank of Italy expects banks to explain refusals.",
    },

    { type: "h2", id: "which-to-choose", text: "7. Which account should you open first?" },
    {
      type: "p",
      text: "In my experience, most students in Rome should open a current account at Intesa Sanpaolo first; Revolut, Wise and the conto di base cover the other cases.",
    },
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
      text: "Whatever account you choose, the IBAN must be in your own name, because DiSCo Lazio pays the scholarship to your account; see [when DiSCo Lazio pays the scholarship](article:lazio-disco-scholarship#payments).",
    },
    {
      type: "p",
      text: "With an Italian IBAN in your name, the next settling steps are to [register your residenza in Rome at the anagrafe](article:residenza-rome) and to [find a student job in Rome](article:student-jobs-rome), where employers pay the salary by bank transfer.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I open an Italian bank account with only a passport and codice fiscale?",
          a: "Yes, in my experience, as long as you also show proof of enrolment: that is how I opened my Intesa Sanpaolo current account in Rome. Officially, Intesa Sanpaolo requires an Italian codice fiscale from foreign citizens living in Italy, and a branch may still ask for more papers, such as the receipt (ricevuta) of your residence permit application.",
        },
        {
          q: "Which bank is best for international students in Rome?",
          a: "In my experience and that of other students, Intesa Sanpaolo is the best first bank, at a branch near a university where staff know the procedure for non-EU students. Intesa Sanpaolo's XME Conto Silver costs EUR 5.90 a month as of October 2026. Revolut is a good app alternative once you live in Italy, because Revolut gives Italy residents an Italian IBAN.",
        },
        {
          q: "Does Revolut give an Italian IBAN?",
          a: "Yes, Revolut gives an Italian IBAN, starting with IT, to customers resident in Italy. Revolut does not open personal accounts for residents of Tunisia, so a Tunisian student should sign up after arriving, with an Italian address. In my experience, if the Revolut app asks for a Tessera Sanitaria, the official codice fiscale document can work instead after a manual review.",
        },
        {
          q: "Can I get a Wise card in Tunisia?",
          a: "No, not as of October 2026: you can probably register with Wise from Tunisia, but the Wise card is not available to residents of Tunisia, which is not one of Wise's card countries. Once you live in Italy, you can order the Wise card as an Italy resident for EUR 7. Do not plan your monthly transfers in dinars around Wise, because receiving dinar transfers from a Tunisian bank could not be confirmed.",
        },
        {
          q: "What if a bank branch refuses to open my account?",
          a: "Try another branch first, ideally one near a campus: in my experience, the first branch often did not know the procedure for non-EU students. If banks keep refusing, ask for a conto di base, the basic account Italian law gives anyone legally staying in the EU, and ask for the reason for any refusal in writing, as the Bank of Italy expects banks to explain refusals.",
        },
        {
          q: "Can I open a bank account in Italy before I arrive?",
          a: "In practice, no, not with Intesa Sanpaolo or Revolut: Intesa Sanpaolo needs an Italian codice fiscale from a foreign citizen living in Italy, and Revolut does not accept residents of Tunisia. Wise registration may work from Tunisia, but the Wise card is not available there, so plan to open your main account in your first weeks in Rome.",
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
