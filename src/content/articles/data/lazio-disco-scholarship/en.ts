import type { ArticleTranslation } from "../../types";

// Facts: DiSCo Lazio call 2026/27 (bando + Allegato L + international FAQ). 2027/28 dates are projected.
export const en: ArticleTranslation = {
  slug: "lazio-disco-scholarship",
  title: "Lazio DiSCo Scholarship for Tunisian Students: Apply, ISEEUP and Payments",
  seoTitle: "Lazio DiSCo Scholarship for Tunisian Students",
  metaDescription:
    "How Tunisian students get the Lazio DiSCo scholarship in Rome: amounts, eligibility, 2027/28 calendar, family documents from Tunisia, ISEEUP and payments.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["Lazio DiSCo scholarship for Tunisian students", "scholarships in Italy", "DiSCo Lazio", "ISEEUP", "ISEE parificato", "scholarship in Rome"],
  summary:
    "The Lazio DiSCo scholarship gives an off-site student enrolled at a university in Rome up to EUR 6,571.11 a year plus two free meals a day (2026/27 values), ranked for first-years on family economic data only. For 2027/28 you apply online around June-July 2027 without SPID, prepare your family documents from Tunisia in advance, then sign the ISEEUP at a DiSCo partner CAF after you arrive.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Scholarship rules, amounts and deadlines change every year, so always check the official DiSCo call before applying.",
    },
    { type: "p", text: "**Can a Tunisian student in Rome get a scholarship that pays for most of the year?**" },
    {
      type: "p",
      text: "Yes. The Lazio DiSCo scholarship (borsa di studio) is open to international students, with a separate ranking for non-EU students. An off-site student receives up to EUR 6,571.11 in cash plus two free meals a day (2026/27 call), and can also ask for a place in a DiSCo residence.",
    },
    {
      type: "p",
      text: "This is part 4 of our [study in Italy guide for Tunisian students](article:study-in-italy). The 2026/27 call closed on **22 July 2026**, so everything below prepares you for **2027/28**. Dates marked “expected” come from the 2026/27 calendar and must be confirmed in the new call.",
    },

    { type: "h2", id: "what-you-get", text: "1. What does the DiSCo scholarship give you?" },
    {
      type: "p",
      text: "If you live abroad and at least half of your family lives abroad, DiSCo treats you as **fuori sede** (off-site) automatically, without a rental contract (except for online courses). In the 2026/27 call, a fuori sede student gets:",
    },
    {
      type: "figure",
      src: "/blog/disco-residence-tor-vergata.webp",
      width: 1600,
      height: 1200,
      alt: "A student residence and canteen building under umbrella pines at Tor Vergata, Rome",
      caption: "A student residence and canteen at Tor Vergata, run by the regional body now called DiSCo Lazio. A housing place is requested in the same scholarship application.",
      credit: {
        text: "Photo: Gigi er Gigliola, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Residenze_Mense_Adisu_Tor_Vergata.jpg",
      },
    },
    {
      type: "ul",
      items: [
        "**EUR 6,571.11 a year**, rising to EUR 7,556.78 (115%) if your ISEE is up to EUR 14,169.94, and falling gradually to EUR 3,285.60 if it is EUR 18,893.25 or more.",
        "**Two free meals a day** in DiSCo canteens (valued at EUR 600).",
        "+20% for women enrolled in STEM courses.",
        "The option of a **place in a DiSCo residence**, requested in the same application. In Rome it cost about EUR 200-298 a month in 2026/27, deducted from the scholarship (EUR 700 from the first instalment). See [DiSCo residences](article:student-housing-rome#disco-residences).",
      ],
    },
    {
      type: "p",
      text: "Tuition is a separate question that depends on your university. At Tor Vergata the flat fee for foreign students still applies to DiSCo winners, and at Sapienza students who pay the flat fee get no refund. Check with your university's student office.",
    },

    { type: "h2", id: "eligibility", text: "2. Who is eligible for the DiSCo scholarship?" },
    { type: "p", text: "In the 2026/27 call you had to meet all of these conditions:" },
    {
      type: "ul",
      items: [
        "Be enrolled, by about **10 February**, at a university in Lazio in a Bachelor, Master, single-cycle or PhD course (PhD only without another grant).",
        "Not already hold a degree of the same level, including one obtained abroad.",
        "Stay within the economic limits: **ISEEUP up to EUR 28,339.88 and ISPEUP up to EUR 61,608.48** (2026/27 values, based on 2024 income and assets at 31 December 2024).",
      ],
    },
    {
      type: "p",
      text: "First-year students are ranked on economic data only: no grades, no merit test. Non-EU students have their own ranking, ordered from the lowest ISEEUP. Tunisia is not on the list of “particularly poor countries”, so your family's real figures are what count.",
    },

    { type: "h2", id: "disco-calendar", text: "3. The DiSCo calendar for 2027/28" },
    {
      type: "table",
      caption: "Expected DiSCo dates for 2027/28, based on the 2026/27 calendar (check the 2027/28 call).",
      head: ["When (expected)", "What"],
      rows: [
        ["Jan - May 2027", "Prepare your family documents in Tunisia (2025 income, assets at 31/12/2025)"],
        ["~10 Jun - 22 Jul 2027, 12:00", "Online application, with the housing request in the same form"],
        ["~30 Jul - 11 Aug 2027, 12:00", "Corrections only (not a late application window)"],
        ["~mid Sep / ~mid Oct 2027", "Final rankings: housing, then scholarship"],
        ["~1 Dec 2027 (housing) or ~10 Feb 2028", "Upload your residence permit, or passport + post office receipt"],
        ["~10 Dec 2027", "Sign the ISEEUP at a DiSCo partner CAF"],
        ["~10 Feb 2028", "Enrolment completed at your university"],
        ["Within 6 months of the award", "Add your IBAN and a PEC address"],
      ],
    },
    {
      type: "p",
      text: "The deadline is at noon, Italian time. The 2025/26 and 2026/27 dates were identical, but only the 2027/28 call is binding.",
    },

    { type: "h2", id: "register", text: "4. How do you register and apply without SPID?" },
    { type: "p", text: "You do not need SPID (the Italian digital identity). International students create DiSCo credentials instead:" },
    { type: "h3", id: "register-step-1", text: "Step 1: create your account" },
    {
      type: "p",
      text: "Open the [DiSCo registration page](https://dirstudio.laziodisco.it/registrazione/index) and fill in your personal data, your residence abroad, an email address and a phone number. Upload your passport as a PDF and choose a username and password.",
    },
    { type: "h3", id: "register-step-2", text: "Step 2: log in and fill in the application" },
    {
      type: "p",
      text: "Log in on the [scholarship portal](https://login.laziodisco.it/access/borse) with your DiSCo credentials. When the call opens, fill in the application, add the housing request if you want a residence place, and submit before the deadline.",
    },
    { type: "h3", id: "register-step-3", text: "Step 3: identity check later" },
    {
      type: "p",
      text: "Your identity is checked in person at the partner CAF when you sign the ISEEUP in Rome (section 6). You apply before enrolling, then must be enrolled by about 10 February. To choose a course, see [how to apply to a university in Rome](article:apply-university-rome).",
    },

    { type: "h2", id: "family-documents", text: "5. Which family documents do you need from Tunisia?" },
    {
      type: "p",
      text: "This is the slow part, so start **while you wait for your acceptance letter (January to May)**. DiSCo uses these documents to calculate your ISEEUP. The call asks for:",
    },
    {
      type: "ol",
      items: [
        "**Family composition**: name, surname and date of birth of each member.",
        "**Gross income of each member** for year N-2 (2025 for the 2027/28 call). If a member had no income, a document must say so explicitly.",
        "**Real estate** owned at 31 December, with the surface area in square metres.",
        "**Financial assets** (bank accounts, savings) at 31 December, or a document stating there are none.",
        "**Rent paid** for the family home, if the family rents.",
      ],
    },
    {
      type: "p",
      text: "Tunisian documents issued by the competent offices are enough. Have each one translated into Italian by a translator on the [Italian Embassy's list](https://ambtunisi.esteri.it/wp-content/uploads/2024/10/Lista-traduttori-25-10-2024.pdf) or the [Ministry of Justice list](https://www.justice.gov.tn/index.php?id=369), with the apostille on both the original and the translation. The full chain is explained in [how to translate and apostille your documents](article:documents-for-italy#translation).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Two rules that exclude students",
      text: "Self-certification is not accepted: every figure needs an official document. And the total family income cannot be zero. If anything is unclear, ask DiSCo at urp@laziodisco.it before you collect your documents.",
    },

    { type: "h2", id: "iseeup", text: "6. How do you get your ISEEUP at a partner CAF?" },
    {
      type: "p",
      text: "The ISEEUP (also called ISEE parificato) is the economic indicator for students with income and assets abroad. You sign it after you arrive in Rome:",
    },
    {
      type: "ul",
      items: [
        "Book an appointment at a CAF on the [list of DiSCo partner CAFs](https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf). The service is free.",
        "Bring your passport and your translated, apostilled family documents. The CAF also does the identity check.",
        "Sign the ISEEUP by about **10 December** (expected for 2027; check the call).",
      ],
    },
    {
      type: "p",
      text: "An ISEEUP made at a CAF that is not a DiSCo partner means exclusion. Corrections made later are paid by you, so check your documents before the appointment. For the other first steps in Rome, see [your residence permit on arrival](article:arriving-in-rome#residence-permit).",
    },

    { type: "h2", id: "payments", text: "7. When is the DiSCo scholarship paid?" },
    {
      type: "table",
      caption: "Official payment instalments in the 2026/27 call (check the 2027/28 call).",
      head: ["Student", "First payment(s)", "Balance"],
      rows: [
        ["First-year Bachelor or single cycle", "20% by 10 Nov + 30% by 27 Dec", "50% from October of the next year, with 20 credits by 10 Aug"],
        ["First-year Master or PhD", "50% by 27 Dec", "From October of the next year"],
        ["Later years", "50% by 27 Dec", "From June"],
      ],
    },
    {
      type: "p",
      text: "In practice, payments can arrive a few weeks late, but rarely more than a month late. If your ISEEUP is signed correctly after you arrive, the first payments follow. To receive them you need an **IBAN** (Italian or SEPA account), added within 6 months of the award, and a **PEC** (certified email) or an elected domicile. See [how to open a bank account in Rome](article:arriving-in-rome#bank-account).",
    },
    {
      type: "p",
      text: "For the visa, a DiSCo grant counts as proof of financial means only once it is awarded, so plan your [blocked account](article:italy-student-visa#blocked-account) without counting on it.",
    },

    { type: "h2", id: "keep-the-grant", text: "8. How do you keep the scholarship?" },
    {
      type: "p",
      text: "First-year Bachelor's, single-cycle and Master's students must earn **20 credits by 10 August** (2026/27 call; PhD students are confirmed when admitted to the second year). If you reach them only by 30 November, the scholarship is cut by 50%. If you miss that too, it is revoked and you must pay back what you received. Later years have their own credit requirements in the call.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Can a Tunisian student get the DiSCo scholarship?",
          a: "Yes. Non-EU students enrolled at a university in Lazio can apply, and they have their own ranking based on the ISEEUP. You must stay within the economic limits and not already hold a degree of the same level.",
        },
        {
          q: "Do I need SPID to apply to DiSCo?",
          a: "No. International students register on the DiSCo website with their passport and get DiSCo credentials. Your identity is checked later at the partner CAF in Rome.",
        },
        {
          q: "Which documents from Tunisia does DiSCo ask for?",
          a: "Family composition, each member's gross income for year N-2 (or a statement of no income), real estate with surface area, financial assets at 31 December (or their absence) and rent paid, translated into Italian and apostilled.",
        },
        {
          q: "When is the DiSCo scholarship paid?",
          a: "For a first-year Bachelor student, 20% by 10 November and 30% by 27 December, with the balance from October of the next year after 20 credits (2026/27 call). Payments can be a few weeks late, rarely more than a month.",
        },
        {
          q: "Can I still apply for the 2026/27 DiSCo scholarship?",
          a: "No. The 2026/27 application closed on 22 July 2026 at noon. The 2027/28 call is expected to open around 10 June 2027.",
        },
        {
          q: "What happens if my ISEEUP is done at a CAF that is not a DiSCo partner?",
          a: "You are excluded. Use only a CAF on the DiSCo partner list, where the service is free.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "DiSCo Lazio: call 2026/27 page", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/" },
        { label: "DiSCo Lazio: call 2026/27 (PDF, Italian)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "DiSCo Lazio: call 2026/27 (PDF, English)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "DiSCo Lazio: Allegato L, deadlines 2026/27 (PDF)", url: "https://laziodisco.it/wp-content/uploads/2026/06/ALLEGATO_L_26-27.pdf" },
        { label: "DiSCo Lazio: FAQ for international students", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "DiSCo Lazio: translation and legalisation of documents", url: "https://laziodisco.it/translation-and-legalisation-of-documents-at-italian-embassies-and-consulates-abroad/?lang=en" },
        { label: "DiSCo Lazio: partner CAFs in Lazio (PDF)", url: "https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf" },
        { label: "DiSCo Lazio: registration without SPID", url: "https://dirstudio.laziodisco.it/registrazione/index" },
        { label: "DiSCo Lazio: scholarship portal login", url: "https://login.laziodisco.it/access/borse" },
        { label: "Italian Embassy in Tunis: list of translators (PDF)", url: "https://ambtunisi.esteri.it/wp-content/uploads/2024/10/Lista-traduttori-25-10-2024.pdf" },
        { label: "Tunisian Ministry of Justice: sworn translators by district", url: "https://www.justice.gov.tn/index.php?id=369" },
        {
          label: "DiSCo Lazio: Allegato E, list of particularly poor countries (Tunisia is not on it)",
          url: "https://laziodisco.it/wp-content/uploads/2026/06/ALLEGATO_E_26-27-2.pdf",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026, against the DiSCo Lazio 2026/27 call. Dates for 2027/28 are projected from the 2026/27 calendar, and amounts and limits are 2026/27 values: confirm everything in the 2027/28 call when it is published.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Fuori sede amount", value: "EUR 6,571.11/year + 2 free meals a day (2026/27)" },
        { label: "Application 2027/28", value: "Expected ~10 Jun - 22 Jul 2027, 12:00 (check the call)" },
        { label: "SPID", value: "Not needed: DiSCo credentials with your passport" },
        { label: "ISEEUP", value: "Only at a DiSCo partner CAF, free, by ~10 Dec" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "The full path in brief" },
    {
      type: "ol",
      items: [
        "[Plan and calendar](article:study-in-italy)",
        "[Choose a university and apply](article:apply-university-rome)",
        "[Prepare and translate documents](article:documents-for-italy)",
        "DiSCo scholarship",
        "[Visa and blocked account](article:italy-student-visa)",
        "[Arrival in Rome](article:arriving-in-rome)",
        "[Accommodation](article:student-housing-rome)",
      ],
    },
  ],
};
