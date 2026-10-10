import type { ArticleTranslation } from "../../types";

// Part 6 of the study-in-Rome series. French and Arabic mirror this structure (same heading ids, one figure, one table).
export const en: ArticleTranslation = {
  slug: "arriving-in-rome-as-a-student",
  title: "Arriving in Rome as a Student: Residence Permit for Study in Italy and Your First 30 Days",
  seoTitle: "Residence Permit for Study in Italy: First 30 Days in Rome",
  metaDescription:
    "Arriving in Rome as a Tunisian student: the residence permit kit within 8 working days, codice fiscale, bank account, enrolment, DiSCo steps and a first budget.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["residence permit for study in Italy", "arriving in Rome as a student", "permesso di soggiorno per studio", "codice fiscale", "student bank account in Italy", "student work in Italy"],
  summary:
    "Within 8 working days of arriving in Italy, you request your residence permit for study by sending the yellow-band kit from a post office with a Sportello Amico (about EUR 116.46 in total); the codice fiscale is assigned with that application. Then open an account, finalise enrolment at your university, send the enrolment papers to your bank in Tunisia and complete your DiSCo steps.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal advice. Residence rules, fees and university procedures can change, so always check the official sources linked below before you pay or sign anything.",
    },
    { type: "p", text: "**You have landed in Rome with your study visa. What do you have to do, and in what order, during your first month?**" },
    {
      type: "p",
      text: "The short answer: within 8 working days of arrival, request your residence permit for study (permesso di soggiorno per studio) at a post office. Your codice fiscale comes with that application, and the post office receipt lets you open an account, finalise enrolment and complete your DiSCo steps.",
    },
    {
      type: "p",
      text: "This is part 6 of our [guide to studying in Italy for Tunisian students](article:study-in-italy), after the visa: your first 30 days in Rome, step by step.",
    },

    { type: "h2", id: "first-30-days", text: "1. Your first 30 days in Rome, in order" },
    {
      type: "ol",
      items: [
        "Within 8 working days: send the residence permit kit from a post office.",
        "Only if a landlord or bank needs it sooner: get your codice fiscale at the Agenzia delle Entrate.",
        "Open a Postepay Evolution card or a bank account.",
        "Finalise enrolment at your university.",
        "Send the enrolment papers to your bank in Tunisia.",
        "DiSCo: upload the permit receipt, book a partner CAF, sign the ISEEUP, add your IBAN and PEC.",
        "Choose your health cover, then look for student work.",
      ],
    },

    { type: "h2", id: "residence-permit", text: "2. How do you request the residence permit for study?" },
    {
      type: "p",
      text: "You must apply within **8 working days** of entering Italy ([Polizia di Stato](https://www.poliziadistato.it/articolo/225)).",
    },
    {
      type: "figure",
      src: "/blog/post-office-rome.webp",
      width: 1600,
      height: 1187,
      alt: "The central post office on Piazza di San Silvestro in Rome under a blue sky",
      caption: "Rome's central post office on Piazza di San Silvestro. The residence permit kit is handed in at a post office with a Sportello Amico desk.",
      credit: {
        text: "Photo: Frank C. Müller, Baden-Baden, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Rom_2013_014_Piazza_di_San_Silvestro_Ufficio_Postale_(fcm).jpg",
      },
    },
    { type: "h3", id: "step-postal-kit", text: "Step 1: get the yellow-band kit" },
    {
      type: "p",
      text: "Go to a post office with a **Sportello Amico** desk and ask for the residence permit kit, the envelope with a yellow band. [Poste Italiane](https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno) explains how to fill it in. Write your name exactly as in your passport.",
    },
    { type: "h3", id: "step-kit-contents", text: "Step 2: put the right documents in the envelope" },
    {
      type: "ul",
      items: [
        "The completed application form from the kit.",
        "A copy of your passport, including the page with your visa.",
        "A copy of your health insurance, valid for the whole length of the permit, and proof of your means (your international office can confirm the full list).",
        "A EUR 16 revenue stamp (marca da bollo), bought at a tobacconist.",
      ],
    },
    { type: "h3", id: "step-pay-receipt", text: "Step 3: pay and keep the receipt" },
    {
      type: "table",
      caption: "What the residence permit application costs at the post office (amounts checked October 2026).",
      head: ["Item", "Cost"],
      rows: [
        ["Revenue stamp (marca da bollo)", "EUR 16"],
        ["Postal service fee", "EUR 30"],
        ["Bollettino: electronic card EUR 30.46 + contribution EUR 40 (permit of 3 to 12 months)", "EUR 70.46"],
        ["**Total**", "**about EUR 116.46**"],
      ],
    },
    {
      type: "p",
      text: "The clerk gives you a **receipt** with a username and password. Keep it with your passport: your university, the bank and DiSCo will ask for it.",
    },
    { type: "h3", id: "step-questura", text: "Step 4: go to the Questura for fingerprints" },
    {
      type: "p",
      text: "You also receive a convocation letter with your appointment at the Questura, where your fingerprints are taken. Check the status of your permit on the [Polizia di Stato permit portal](https://questure.poliziadistato.it/stranieri/) with your receipt details. The Polizia gives about 60 days for processing; Sapienza warns it can take about 90.",
    },
    {
      type: "figure",
      src: "/blog/questura-verbania.webp",
      width: 1600,
      height: 1067,
      alt: "The Questura building in Verbania, Italy, with the Italian and European flags at the entrance",
      caption: "A Questura (provincial police headquarters), the office that handles residence permits.",
      credit: {
        text: "Photo: Francoerbi, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Verbania_Questura_del_VCO.jpg",
      },
    },
    {
      type: "callout",
      tone: "warning",
      title: "Do not leave Italy before you have the permit",
      text: "The Italian Embassy in Tunis advises students not to leave Italy until the residence permit is issued.",
    },
    {
      type: "p",
      text: "Sapienza students can get help on campus: its [residence permit page](https://www.uniroma1.it/en/pagina/residence-permit-study-purposes) lists the campus police desk and the Questura immigration office (Via Teofilo Patini 23).",
    },

    { type: "h2", id: "codice-fiscale", text: "3. How do you get your codice fiscale?" },
    {
      type: "p",
      text: "The codice fiscale is your Italian tax code, needed for a lease, a bank or a phone contract. Usually you do not request it: the Questura assigns it with your permit application.",
    },
    {
      type: "p",
      text: "If you need it earlier, go to any **Agenzia delle Entrate** office with form AA4/8 and your passport with the visa. The [Agenzia delle Entrate leaflet for foreign citizens](https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716) explains the procedure. At Sapienza, the HELLO desk can help you with the forms.",
    },

    { type: "h2", id: "bank-account", text: "4. Opening a student bank account in Italy" },
    {
      type: "p",
      text: "You need an IBAN for DiSCo, rent and a salary. Two common options:",
    },
    {
      type: "ul",
      items: [
        "**Postepay Evolution**: a prepaid card with an IBAN, EUR 5 to issue plus EUR 19 a year ([Poste Italiane](https://www.poste.it/carte-postepay/postepay-evolution)).",
        "**A bank account**: banks ask for your codice fiscale; compare monthly fees.",
      ],
    },
    {
      type: "p",
      text: "According to the [Banca d'Italia](https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html), anyone legally staying in the EU has the right to a basic account (conto di base), and a bank may not refuse your residence permit receipt as an identity document.",
    },

    { type: "h2", id: "finalise-enrolment", text: "5. Finalise enrolment and your scholarship file" },
    {
      type: "p",
      text: "Enrolment is complete only once your university has checked your originals:",
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: send your permit receipt to the [International Student Office](https://www.uniroma1.it/en/pagina/international-student-office), then book the check of your original documents.",
        "**Tor Vergata**: show your visa, originals and permit (or receipt) at the International Students Office, then pay the first instalment ([documents required](https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/)).",
        "**Roma Tre**: book an appointment at the foreign-qualifications office, Via Ostiense 129, and bring your originals ([non-EU enrolment](https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/)).",
      ],
    },
    { type: "h3", id: "unlock-transfers", text: "Unlock the monthly transfers from Tunisia" },
    {
      type: "p",
      text: "Once you are enrolled, send the enrolment papers to your bank in Tunisia. The bank can then let your parents transfer up to **4,000 TND a month** (about EUR 1,188 at the BCT rate of 7 October 2026), as explained in the [blocked account section](article:italy-student-visa#blocked-account).",
    },
    { type: "h3", id: "disco-after-arrival", text: "Complete your DiSCo steps" },
    {
      type: "ul",
      items: [
        "Upload your residence permit or the post office receipt in your DiSCo Profile by about 1 December if you requested housing, otherwise by about 10 February (check the 2027/28 call).",
        "Book an appointment at a [DiSCo partner CAF](https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf) and sign your ISEEUP by about 10 December (check the 2027/28 call).",
        "Add your IBAN and a PEC (certified email) address in your Profile.",
      ],
    },
    {
      type: "p",
      text: "If the ISEEUP is done correctly, the first payments follow; see [when DiSCo pays the scholarship](article:lazio-disco-scholarship#payments).",
    },
    { type: "h3", id: "health-cover", text: "Choose your health cover" },
    {
      type: "p",
      text: "Register voluntarily with the national health service (SSN) for about EUR 700 a year ([Tor Vergata, 2024](https://web.uniroma2.it/en/contenuto/health-insurance)), or keep private insurance. Check the current amount with your ASL or university.",
    },

    { type: "h2", id: "first-month-budget", text: "6. Budget for your first month in Rome" },
    {
      type: "p",
      text: "Your bank in Tunisia can send an installation allowance of up to **6,000 TND** per academic year (about EUR 1,782 at the BCT rate of 7 October 2026). The monthly transfers only start after your enrolment papers reach the bank, so this money must last until then.",
    },
    {
      type: "figure",
      src: "/blog/tram-rome.webp",
      width: 1600,
      height: 1067,
      alt: "A green and silver line 8 tram at Largo di Torre Argentina in Rome",
      caption: "A line 8 tram at Largo di Torre Argentina. Check ATAC's current price for a monthly pass before you plan your budget.",
      credit: {
        text: "Photo: Mariordo (Mario Roberto Durán Ortiz), CC BY-SA 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Roma_ATAC_tram_04_2016_6386.JPG",
      },
    },
    {
      type: "table",
      caption: "How to spend the 6,000 TND installation allowance carefully (only the first two amounts are confirmed).",
      head: ["Item", "Cost", "Tip"],
      rows: [
        ["Residence permit kit", "About EUR 116 (confirmed)", "Pay it first, in your first week."],
        ["Postepay Evolution", "EUR 5 + EUR 19 a year (confirmed)", "Gives you an IBAN for DiSCo and rent."],
        ["Public transport pass", "Check current prices", "Compare monthly and student passes on the ATAC website."],
        ["SIM card and first month", "Check current prices", "Compare offers before you buy."],
        ["Food for the month", "Check current prices", "Cook at home; DiSCo meals start only once the grant is assigned."],
        ["Room: first rent and deposit", "Check current prices", "See our [student housing guide for Rome](article:student-housing-rome)."],
        ["Emergency reserve", "10 to 15% of the allowance", "Do not touch it unless you have to."],
      ],
    },
    {
      type: "p",
      text: "Buy second-hand on [Subito](https://www.subito.it): furniture, a bike, books. And never pay a deposit before you have seen the room; read [how to avoid housing scams](article:student-housing-rome#avoid-scams).",
    },

    { type: "h2", id: "student-work", text: "7. Can you work while you study in Italy?" },
    {
      type: "p",
      text: "Yes, within limits: a student permit allows up to **20 hours a week**, for a maximum of **1,040 hours a year** ([DPR 394/1999, art. 14](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14)). If you only have the first-permit receipt, check with the Questura or your university before you start a job.",
    },
    {
      type: "ul",
      items: [
        "University career offices: [Sapienza](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio), [Tor Vergata](https://placement.uniroma2.it/), [Roma Tre](https://uniroma3.jobsoul.it/studenti-e-laureati/ufficio-job-placement).",
        "Regione Lazio: [job offers](https://www.regione.lazio.it/cittadini/lavoro/offerte-lavoro) and [SpazioLavoro](https://spaziolavoro.regione.lazio.it/).",
        "Job sites: [Subito job ads](https://www.subito.it/annunci-italia/vendita/offerte-lavoro/), [InfoJobs](https://www.infojobs.it), [Indeed](https://it.indeed.com).",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Avoid undeclared work",
      text: "Undeclared work (lavoro nero) leaves you without insurance or legal protection. Read the [Ministry of Labour page on labour exploitation](https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default) and ask for a written contract.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How many days do I have to apply for the permesso di soggiorno?",
          a: "8 working days from your arrival in Italy. You apply by sending the yellow-band kit from a post office with a Sportello Amico desk.",
        },
        {
          q: "How much does the residence permit for study cost?",
          a: "About EUR 116.46 at the post office: a EUR 16 revenue stamp, a EUR 30 postal fee and a EUR 70.46 bollettino (amounts checked October 2026).",
        },
        {
          q: "How do I get a codice fiscale in Rome?",
          a: "It is normally assigned with your residence permit application. If you need it earlier, go to any Agenzia delle Entrate office with form AA4/8 and your passport with the visa.",
        },
        {
          q: "Can I open a bank account with the permit receipt?",
          a: "Yes. According to the Banca d'Italia, a bank may not refuse the residence permit receipt as an identity document, and anyone legally staying in the EU has the right to a basic account.",
        },
        {
          q: "Can I travel back to Tunisia while I wait for my permit?",
          a: "The Italian Embassy in Tunis advises against leaving Italy before your residence permit is issued. Plan trips after you collect it.",
        },
        {
          q: "Can international students work in Italy?",
          a: "Yes, up to 20 hours a week and 1,040 hours a year. If you only have the first-permit receipt, check with the Questura or your university before you start.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Polizia di Stato: residence permit for study", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Polizia di Stato: residence permit status check", url: "https://questure.poliziadistato.it/stranieri/" },
        { label: "Poste Italiane: issuing and renewing a residence permit", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Sapienza: residence permit for study purposes", url: "https://www.uniroma1.it/en/pagina/residence-permit-study-purposes" },
        {
          label: "Agenzia delle Entrate: codice fiscale for foreign citizens (leaflet)",
          url: "https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716",
        },
        { label: "Banca d'Italia: the basic account (conto di base)", url: "https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html" },
        { label: "Poste Italiane: Postepay Evolution", url: "https://www.poste.it/carte-postepay/postepay-evolution" },
        { label: "Sapienza: International Student Office", url: "https://www.uniroma1.it/en/pagina/international-student-office" },
        { label: "Tor Vergata: documents required for enrolment with a foreign qualification", url: "https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/" },
        { label: "Roma Tre: enrolment for non-EU citizens", url: "https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/" },
        { label: "Tor Vergata: health insurance", url: "https://web.uniroma2.it/en/contenuto/health-insurance" },
        { label: "DiSCo Lazio: FAQ for international students (2026/27)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "Banque Centrale de Tunisie: circular 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "Normattiva: DPR 394/1999, art. 14 (student work)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14" },
        {
          label: "Italian Ministry of Labour: fighting labour exploitation",
          url: "https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Amounts are those published in 2026; DiSCo dates are projected for 2027/28 and must be confirmed in the new call. Check the official pages before you pay or travel.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Residence permit", value: "Apply within 8 working days of arrival, at a post office" },
        { label: "Cost of the kit", value: "About EUR 116.46 (2026)" },
        { label: "Codice fiscale", value: "Assigned with the permit application, or earlier at the Agenzia delle Entrate" },
        { label: "Student work", value: "Up to 20 hours a week, 1,040 hours a year" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "The full path in brief" },
    {
      type: "ol",
      items: [
        "[Plan and calendar](article:study-in-italy)",
        "[Choose a university and apply](article:apply-university-rome)",
        "[Prepare and translate documents](article:documents-for-italy)",
        "[DiSCo scholarship](article:lazio-disco-scholarship)",
        "[Visa and blocked account](article:italy-student-visa)",
        "Arrival in Rome",
        "[Accommodation](article:student-housing-rome)",
      ],
    },
  ],
};
