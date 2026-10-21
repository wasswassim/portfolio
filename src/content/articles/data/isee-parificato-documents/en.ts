import type { ArticleTranslation } from "../../types";

// One section per document, each with a title-only crop of the owner's own translated document.
// French and Arabic mirror this structure (same heading ids, six figures, one table).
export const en: ArticleTranslation = {
  slug: "isee-parificato-documents-scholarship-italy",
  title: "What Are the Documents for the ISEE Parificato (Foreign Tax Declaration) to Complete Your Scholarship Request in Italy?",
  subtitle: "Each Tunisian family document the CAF asks for, what it proves and where to get it",
  seoTitle: "ISEE Parificato Documents for Tunisian Students",
  metaDescription:
    "The documents for the ISEE parificato at the CAF, one by one: family certificate, birth extract, tax return, non-ownership, lease, enrolment. Where to get each.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["ISEE parificato documents", "ISEEUP documents CAF", "documents for scholarship Italy Tunisian students", "certificat de non-propriété ISEE", "DiSCo CAF documents"],
  summary:
    "For the ISEE parificato (ISEEUP) at a DiSCo partner CAF, a Tunisian student brings a family status certificate, a birth certificate, each family member's income tax return, a certificate of non-ownership of registered property for each member, the family's rental contract if they rent, and the Italian university enrolment certificate. Every Tunisian document must be official, translated into Italian and apostilled, because self-certification is not accepted.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only. It lists the documents we brought to the CAF for our own ISEE parificato and what the DiSCo Lazio call asks for. Requirements can change every year and your family situation may need other documents, so always check the current call and ask your CAF before your appointment.",
    },
    { type: "p", text: "**You applied for the DiSCo scholarship and now the CAF asks for your family documents. Which ones exactly, and where do you get them in Tunisia?**" },
    {
      type: "p",
      text: "The short answer: six documents, five from Tunisia and one from your Italian university. Together they show the CAF who is in your family, what each member earned, what they own and what rent they pay. The CAF turns them into your **ISEE parificato** (the ISEEUP), the foreign version of the ISEE tax declaration that ranks you for the scholarship.",
    },
    {
      type: "p",
      text: "This page explains each document with a picture of its title, so you can recognise it. For the scholarship itself (amounts, eligibility and dates), see [the Lazio DiSCo scholarship for Tunisian students](article:lazio-disco-scholarship).",
    },

    { type: "h2", id: "documents-list", text: "1. Which documents does the CAF need for the ISEE parificato?" },
    {
      type: "p",
      text: "The DiSCo Lazio call asks for official documents on your family's composition, the income of each member, their real estate and assets at 31 December, and the rent paid for the family home. This is the set we brought, and what each one proves:",
    },
    {
      type: "table",
      caption: "The documents for the ISEE parificato, what each proves and where to get it.",
      head: ["Document", "What it proves", "Where to get it"],
      rows: [
        ["Certificat de vie collective", "Who lives in your family unit", "Municipality civil status office (Tunisia)"],
        ["Extrait de naissance", "Your identity and your parents", "Municipality civil status office (Tunisia)"],
        ["Income tax return", "Each member's income for the year required", "Recette des finances (Tunisia)"],
        ["Certificate of non-ownership", "That a member owns no registered real estate", "Office National de la Propriété Foncière (Tunisia)"],
        ["Rental contract of the family home", "The rent your family pays", "Your family's landlord (Tunisia)"],
        ["Certificato di iscrizione", "That you are enrolled at the university", "Your Italian university"],
      ],
    },
    {
      type: "p",
      text: "Some documents come once per family member. In our file, the tax return and the non-ownership certificate were there **once for each member**, with the same title on each copy. That is normal: the CAF needs every member's situation, not only one parent's.",
    },

    { type: "h2", id: "family-status-certificate", text: "2. Certificat de vie collective: who is in your family?" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-status-certificate.webp",
      width: 1600,
      height: 153,
      alt: "Title of an Italian translation reading Certificato di vita collettivo",
      caption: "The Italian translation of the certificat de vie collective. Only the title is shown.",
    },
    {
      type: "p",
      text: "The *certificat de vie collective* (in Italian *certificato di vita collettivo*) lists the people who live together as one family: usually your parents and their children. The CAF uses it as the **family composition** the call asks for, with the name, surname and date of birth of each member.",
    },
    {
      type: "p",
      text: "**Where to get it:** at the civil status office (*état civil*) of your municipality in Tunisia. Ask for the French version, which is easier to translate into Italian.",
    },

    { type: "h2", id: "birth-certificate", text: "3. Birth certificate: proving who you are" },
    {
      type: "figure",
      src: "/blog/caf-documents/birth-certificate.webp",
      width: 1600,
      height: 214,
      alt: "Title of an Italian translation reading Estratto dai registri dello stato civile, Nascite, versione francese",
      caption: "The Italian translation of the birth certificate (extrait de naissance). Only the title is shown.",
    },
    {
      type: "p",
      text: "The *extrait de naissance* (in Italian *estratto dai registri dello stato civile, nascite*) proves your identity and names your parents. With the family certificate, it links you to the family whose income and assets the CAF counts.",
    },
    {
      type: "p",
      text: "**Where to get it:** at a municipality civil status office in Tunisia. Again, ask for the French version.",
    },

    { type: "h2", id: "income-tax-return", text: "4. Income tax return: what each member earned" },
    {
      type: "figure",
      src: "/blog/caf-documents/income-tax-return.webp",
      width: 1600,
      height: 174,
      alt: "Title of an Italian translation reading Dichiarazione di imposta sul reddito delle persone fisiche",
      caption: "The Italian translation of the personal income tax return. One copy for each family member with income.",
    },
    {
      type: "p",
      text: "The *déclaration de l'impôt sur le revenu des personnes physiques* (in Italian *dichiarazione di imposta sul reddito delle persone fisiche*) shows the gross income of each family member. The call asks for the income of a precise year, two years before the call: **2024 for the 2026/27 call**. Check that the year printed on the return is the one your call asks for.",
    },
    {
      type: "p",
      text: "**Where to get it:** a stamped copy of the return filed with the tax administration, from the *recette des finances* where it was filed. Bring one for each member who earns an income.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "A member with no income still needs a document",
      text: "If a family member had no income, an official document must say so explicitly. Self-certifications and sworn statements are not accepted. And the total family income cannot be zero, or the application is excluded.",
    },

    { type: "h2", id: "non-ownership-certificate", text: "5. Certificate of non-ownership: proving there is no property" },
    {
      type: "figure",
      src: "/blog/caf-documents/non-ownership-certificate.webp",
      width: 1600,
      height: 237,
      alt: "Title of an Italian translation reading Certificato di non proprietà di beni registrati",
      caption: "The Italian translation of the certificate of non-ownership of registered property. One copy for each family member.",
    },
    {
      type: "p",
      text: "The *certificat de non-propriété* (in Italian *certificato di non proprietà di beni registrati*) states that a person owns no registered real estate. The call asks for every member's real estate at 31 December, so a member who owns nothing proves it with this certificate.",
    },
    {
      type: "p",
      text: "**Where to get it:** at the regional directorate of the *Office National de la Propriété Foncière*, under the Ministry of State Domains and Land Affairs. Ask for one for each family member.",
    },
    {
      type: "p",
      text: "If your family **does** own a house or land, this certificate is not enough: the call asks for each property with its surface area in square metres. Ask your CAF which property documents to bring.",
    },

    { type: "h2", id: "family-rental-contract", text: "6. Rental contract: the rent your family pays" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-rental-contract.webp",
      width: 1600,
      height: 233,
      alt: "Title of an Italian translation reading Contratto di locazione di un immobile ad uso abitativo",
      caption: "The Italian translation of the family home's rental contract. Only the title is shown.",
    },
    {
      type: "p",
      text: "If your family rents its home in Tunisia, the *contrat de location* (in Italian *contratto di locazione di un immobile ad uso abitativo*) shows the rent paid. The call asks for it because rent paid for the family home is counted in the ISEE calculation.",
    },
    {
      type: "p",
      text: "**Where to get it:** your family already has it, signed with the landlord. If the family owns its home, you do not need it.",
    },

    { type: "h2", id: "enrolment-certificate", text: "7. Certificato di iscrizione from your university" },
    {
      type: "figure",
      src: "/blog/caf-documents/enrolment-certificate.webp",
      width: 1600,
      height: 384,
      alt: "Letterhead of LUMSA University, Libera Università Maria Santissima Assunta, Rome, at the top of an enrolment certificate",
      caption: "The top of an enrolment certificate from LUMSA University in Rome. The student's details are cropped out.",
    },
    {
      type: "p",
      text: "The *certificato di iscrizione* proves you are enrolled at an Italian university for the current academic year, with your course and year. The CAF asked us for it with the family documents.",
    },
    {
      type: "p",
      text: "**Where to get it:** download it from your university's student portal or ask the student office (*segreteria studenti*). It is already in Italian, so it needs no translation or apostille.",
    },

    { type: "h2", id: "translate-and-apostille", text: "8. Do the Tunisian documents need translation and apostille?" },
    {
      type: "p",
      text: "Yes. Every Tunisian document must be **translated into Italian and apostilled**, and the CAF does not accept self-certifications or sworn statements in their place. Have each one translated by a translator on the Italian Embassy's list or the Tunisian Ministry of Justice list, with the apostille on both the original and the translation.",
    },
    {
      type: "p",
      text: "Translation and apostille take time, so start in Tunisia, months before your CAF appointment. The full chain, step by step, is in [how to translate and apostille your Tunisian documents for Italy](article:documents-for-italy#translation).",
    },

    { type: "h2", id: "caf-appointment", text: "9. What do you bring to the CAF appointment?" },
    {
      type: "p",
      text: "Book the appointment only at a CAF on the DiSCo partner list, where the service is free. Go in person with your passport, your codice fiscale and the full set of translated and apostilled documents. The CAF also checks your identity for DiSCo.",
    },
    {
      type: "p",
      text: "For the 2026/27 call, the ISEE parificato had to be signed by **10 December 2026**, and missing that date excludes you. Check every document against this list before you go, because corrections made later are paid by you. More on the appointment in [how to get your ISEEUP at a partner CAF](article:lazio-disco-scholarship#iseeup).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Savings and bank accounts",
      text: "The call also counts financial assets, such as bank accounts and savings at 31 December. If your family has them, ask the CAF and the bank which official statement to bring.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "What documents do I need for the ISEE parificato as a Tunisian student?",
          a: "A family status certificate (certificat de vie collective), a birth certificate, each member's income tax return, a certificate of non-ownership of registered property for each member, the family's rental contract if they rent, and your university enrolment certificate. Every Tunisian document must be translated into Italian and apostilled.",
        },
        {
          q: "What is the ISEE parificato?",
          a: "The ISEE parificato, also called ISEEUP, is the economic indicator for students whose family income and assets are abroad. A CAF calculates it from your family's official documents instead of the Italian tax data. DiSCo Lazio uses it to check your eligibility and rank you for the scholarship.",
        },
        {
          q: "Where do I get a certificat de non-propriété in Tunisia?",
          a: "At the regional directorate of the Office National de la Propriété Foncière, part of the Ministry of State Domains and Land Affairs. It states that a person owns no registered real estate. Ask for one for each family member, then have each translated into Italian and apostilled.",
        },
        {
          q: "Why does the CAF need one copy of each document per family member?",
          a: "Because the ISEE parificato counts the whole family unit, not only you. The CAF needs each member's income and each member's property situation, so the tax return and the non-ownership certificate come once for every member, with the same title on each copy.",
        },
        {
          q: "Does the university enrolment certificate need translation?",
          a: "No. The certificato di iscrizione is issued in Italian by your Italian university, so it needs no translation or apostille. Download it from the student portal or ask the segreteria studenti. Only the documents issued in Tunisia must be translated and apostilled.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "DiSCo Lazio: FAQ for international students (ISEEUP documents)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "DiSCo Lazio: call 2026/27 (PDF, English)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "DiSCo Lazio: partner CAFs in Lazio (PDF)", url: "https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf" },
        { label: "DiSCo Lazio: translation and legalisation of documents", url: "https://laziodisco.it/translation-and-legalisation-of-documents-at-italian-embassies-and-consulates-abroad/?lang=en" },
        { label: "Italian Embassy in Tunis: list of translators (PDF)", url: "https://ambtunisi.esteri.it/wp-content/uploads/2024/10/Lista-traduttori-25-10-2024.pdf" },
        { label: "Tunisian Ministry of Justice: sworn translators by district", url: "https://www.justice.gov.tn/index.php?id=369" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last checked: October 2026, against the DiSCo Lazio 2026/27 call and FAQ. The income year and the deadline change with each call, so check the current call before you collect your documents.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Documents", value: "6: five from Tunisia, one from your university" },
        { label: "Per member", value: "Tax return and non-ownership certificate for each" },
        { label: "Format", value: "Official, translated into Italian and apostilled" },
        { label: "Where", value: "A DiSCo partner CAF, free, in person" },
        { label: "Deadline 2026/27", value: "Signed by 10 December 2026" },
      ],
    },
    { type: "h2", id: "documents-path", text: "The documents in brief" },
    {
      type: "ol",
      items: [
        "Collect the family documents in Tunisia",
        "[Translate and apostille them](article:documents-for-italy#translation)",
        "Download your enrolment certificate",
        "Book a DiSCo partner CAF",
        "[Sign your ISEEUP](article:lazio-disco-scholarship#iseeup)",
      ],
    },
  ],
};
