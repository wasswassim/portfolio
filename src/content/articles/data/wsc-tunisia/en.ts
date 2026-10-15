import type { ArticleTranslation } from "../../types";

// The owner's own experience with WSC (World Study Center), the agency that handled his move to Rome.
// Agency facts are from its website (wsctunisia.com) and the step sheet it gave him; official rules link
// to the free study guide. French and Arabic mirror this structure and heading ids.
export const en: ArticleTranslation = {
  slug: "wsc-tunisia-study-in-italy",
  title: "Studying in Italy with WSC Tunisia",
  subtitle: "My experience with the agency: the 5 steps, the 5,500 TND fee paid in three parts, and how to do it yourself for free",
  seoTitle: "WSC Tunisia Review: Fees and Steps to Study in Italy",
  metaDescription:
    "My experience with WSC Tunisia: its 5 steps to study in Italy, the 5,500 TND fee paid in three parts, the documents you bring, and the free DIY route.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["WSC Tunisia", "World Study Center Tunis", "agency to study in Italy from Tunisia", "study in Italy agency Tunisia", "WSC Tunisia fees", "World Study Center Sousse"],
  summary:
    "WSC Tunisia (World Study Center) is the Tunis study-abroad agency that handled my move to study in Rome, and it is on the Ministry of Higher Education's official list of approved study-abroad offices. In 2026, its 5 steps (pre-enrolment, language test, DiSCo scholarship, visa, departure) cost 5,500 TND, paid in three parts as each step is done (1,600, 2,500 and 1,400 TND). You collect every document yourself. The agency checks them, sends them to a sworn translator and builds the files, and every step is also explained for free in our study guide if you cannot pay an agency.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This post describes my own experience as a WSC client and is not legal advice. The agency's fees and steps can change, and university, scholarship and visa rules change every year: ask WSC for its current step sheet and check the official sources before you pay anything. WSC did not pay me or ask me to write this, and I get nothing if you contact it.",
    },
    { type: "p", text: "**Should you use an agency like WSC Tunisia to study in Italy, and what exactly does it do for you?**" },
    {
      type: "p",
      text: "Short answer: WSC (World Study Center) is the Tunis agency I used to leave Tunisia and continue my studies in Rome. It works in 5 numbered steps and you pay its 5,500 TND fee in three parts, only after each step is done: **1,600 TND** for the pre-enrolment file, **2,500 TND** for the scholarship file and **1,400 TND** for the visa file (2026 prices).",
    },
    {
      type: "p",
      text: "The agency does not collect your papers for you. You go out, get every document and bring it to them. WSC checks each one, sends it to a sworn translator and builds the files. If you cannot afford an agency, you can follow the same steps for free with our [guide to studying in Italy for Tunisian students](article:study-in-italy): I link the matching part at each step below.",
    },

    { type: "h2", id: "who-is-wsc", text: "1. Who is WSC Tunisia, and why did I trust it?" },
    {
      type: "p",
      text: "WSC is a study-abroad agency with offices in Tunis and Sousse. Both offices are on the [Ministry of Higher Education's official list of approved study-abroad intermediary offices](https://www.mes.tn/image.php?id=19999), the only offices the Ministry vouches for. On [its website](https://wsctunisia.com/), WSC gives its approval number (04/07) and more than 26 years of experience (as stated in October 2026). Italy is one of its main destinations, next to Romania, Germany and Spain. I trusted it because it did what the step sheet said: I followed its 5 steps and I am now studying in Rome.",
    },
    {
      type: "p",
      text: "What reassured me most was the payment model. I never paid the full amount upfront: each part was due only once the step before it was done, so I could have stopped after any step. Ask the agency to confirm this in writing, and what happens to money already paid if you stop. Whatever agency you choose, check these points before paying:",
    },
    {
      type: "ul",
      items: [
        "**An approval you can check** on the [Ministry's list of approved offices](https://www.mes.tn/image.php?id=19999), and a real office you can visit (WSC's Tunis office is at 6 rue de Mahdia, 3rd floor, phone 71 285 510).",
        "**A written list of steps and fees** (WSC gives one on paper), and a receipt for every payment.",
        "**No promise of a guaranteed admission, scholarship or visa.** For the Dichiarazione di Valore, the Italian Embassy warns that nobody can sell you a faster appointment: see [the Embassy's warning about paid DOV appointments](article:documents-for-italy#which-university-accepts).",
      ],
    },

    { type: "h2", id: "five-steps", text: "2. How does WSC's 5-step process work, and what does each step cost?" },
    {
      type: "p",
      text: "The process follows the order of the Italian procedure itself: admission first, then the scholarship and the visa, then departure. This is how the fee is split in 2026:",
    },
    {
      type: "table",
      caption: "WSC's steps and fees in 2026, as written on its step sheet (ask the agency for its current prices).",
      head: ["Step", "What happens", "WSC fee"],
      rows: [
        ["1. Pre-enrolment file", "You bring your documents. WSC checks them, has them translated and applies to the universities", "1,600 TND"],
        ["2. Language test", "You take IELTS Academic at the British Council (a B2-level score), or prove B2 in Italian for an Italian-taught course", "No separate WSC fee"],
        ["3. Scholarship file", "Your DiSCo scholarship file and a place in a student residence, prepared at the same time as the pre-enrolment", "2,500 TND"],
        ["4. Visa file", "The blocked bank amount, your parents' income and 6 months of their bank statements", "1,400 TND"],
        ["5. Departure", "You leave for Rome with your visa", "No separate WSC fee"],
        ["**Total**", "", "**5,500 TND**"],
      ],
    },
    {
      type: "p",
      text: "The agency fee does not include what you pay to others: the language test, the notary and the translator, the university fees, the visa fee and the blocked amount itself. These are covered step by step below.",
    },

    { type: "h2", id: "your-documents", text: "3. Which documents do you bring to the agency?" },
    {
      type: "p",
      text: "You bring every document yourself, in **3 certified copies** (copies conformes). WSC's list for the pre-enrolment file, for every student:",
    },
    {
      type: "ul",
      items: [
        "Your baccalauréat and its transcript (relevé de notes), 3 certified copies.",
        "3 colour copies of your passport's photo page.",
        "A motivation letter, in English for an English-taught course.",
        "A Europass CV, in English for an English-taught course.",
        "4 photos.",
      ],
    },
    { type: "h3", id: "masters-documents", text: "Extra documents for a Master's" },
    {
      type: "p",
      text: "For a Master's (laurea magistrale), the agency adds the documents that prove your Bachelor's:",
    },
    {
      type: "ul",
      items: [
        "Your Bachelor's degree (licence), 3 certified copies.",
        "All your university transcripts, in certified copies.",
        "Your internship certificates and certificates of participation.",
        "The study plan of your 3 years of Bachelor's (the subjects and hours of each year).",
        "2 recommendation letters from 2 of your professors.",
        "A portfolio, for Design, Architecture and Multimedia courses.",
      ],
    },
    { type: "h3", id: "review-and-translation", text: "What the agency does with your documents" },
    {
      type: "p",
      text: "WSC reviews each document and tells you what is missing or wrong, for example a name spelt differently from your passport. Once the file is correct, it sends the documents to a **sworn translator** on the Tunisian Ministry of Justice list, one of the two lists the Italian Embassy accepts (the other is the Embassy's own list). Before that, your diplomas must be authenticated by the ministry that issued them and apostilled: see [how to legalise and apostille a Tunisian diploma for Italy](article:documents-for-italy#legalise-documents) and [who can translate your documents](article:documents-for-italy#translation).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Doing it yourself?",
      text: "The same lists, as a checklist to compare with your course's call, are in [what goes in a university application file in Rome](article:apply-university-rome#application-file). For a Master's, start with the study plan and the recommendation letters: they depend on your Tunisian university and professors, so they take the longest.",
    },

    { type: "h2", id: "language-test", text: "4. Which language test does the agency ask for?" },
    {
      type: "p",
      text: "For an English-taught course, WSC asks for **IELTS Academic with a B2-level score** (the band your course's call sets), taken at the [British Council in Tunisia](https://www.britishcouncil.tn/en/exam/ielts). For an Italian-taught course, you need **B2 in Italian** instead. You pay the test centre directly. It is not part of the agency fee. Some universities accept other certificates or run their own test, so check your course: [entry requirements for each course](article:apply-university-rome#find-a-course).",
    },

    { type: "h2", id: "university-fees", text: "5. Which fees does the agency ask you to pay besides its own?" },
    {
      type: "p",
      text: "Once your documents are ready, the agency asks you for the **university application fees**: for example Sapienza's fee per application, and a CIMEA statement if your university wants one. These go to the universities, not to WSC. Because most Tunisian cards cannot pay abroad, WSC pays them with its international payment method and you give it the amount in dinars.",
    },
    {
      type: "fees",
      title: "Fees the agency may pay for you",
      feeIds: ["sapienza-application", "cimea-cv"],
      tnd: true,
      hub: true,
    },
    {
      type: "p",
      text: "You can also pay these fees yourself: compare the four legal ways in [how Tunisians pay Italian university fees](article:international-card-tunisia), from a bank transfer to the [international technology card](article:technology-card-tunisia). For a pagoPA notice, see [how to pay pagoPA with PayPal](article:pay-pagopa-from-abroad#pay-with-paypal). When your Tunisian card is declined, a [RedotPay](ref:redotpay) card linked to PayPal is the last resort, explained in [the PayPal and RedotPay route](article:international-card-tunisia#paypal-pagopa).",
    },
    {
      type: "table",
      caption: "Who can pay the university fees, and how.",
      head: ["Option", "How it works", "Good for"],
      rows: [
        ["The agency pays", "You give WSC the amount in dinars. It pays with its international method", "Not having to deal with foreign payments"],
        ["Bank transfer", "Your bank pays the university against its invoice", "Larger fees, the safest legal route"],
        ["Technology card (CTI)", "A Tunisian card for online payments, 1,000 TND a year", "Small online fees"],
        ["PayPal + RedotPay", "A RedotPay card linked to PayPal, for pagoPA and online fees", "When your Tunisian card is declined"],
      ],
    },
    { type: "referral", provider: "redotpay" },

    { type: "h2", id: "scholarship-file", text: "6. How do you prepare the fiscal documents for the scholarship?" },
    {
      type: "p",
      text: "The scholarship step is the DiSCo Lazio grant, which WSC's sheet puts between EUR 6,000 and 8,000 a year (in the 2026/27 call, EUR 6,571.11 a year for most off-site students, up to EUR 7,556.78 for the lowest incomes and less for higher ones, it is a ranking on family income, not a guarantee, and a residence place is deducted from it). The agency prepares it **at the same time as the pre-enrolment**, together with the request for a place in a student residence. Your part is the family's fiscal documents, and they take the longest:",
    },
    {
      type: "ol",
      items: [
        "**Family composition**: an official document listing each member with date of birth.",
        "**Income of each family member** for year N-2 (2025 for 2027/28): for an employee, a salary or income certificate from the employer. For a self-employed parent, the tax return filed with the tax office. For a retired parent, the pension certificate.",
        "**A document for every member without income** that says so explicitly: DiSCo refuses self-declarations, and the family's total income cannot be zero.",
        "**Real estate** owned at 31 December, with the surface in square metres (a property certificate), or a document stating there is none.",
        "**Bank balances** of the family at 31 December, from each bank, or a document stating there are none.",
        "**The lease**, if the family rents its home.",
      ],
    },
    {
      type: "p",
      text: "Check that every document shows the same names as the passports and the same year, then the agency sends them to the sworn translator. Each one needs an apostille on the original and on the translation. After you arrive in Rome, you sign your ISEEUP at a partner CAF with these papers. Every detail is in [the DiSCo family documents](article:lazio-disco-scholarship#family-documents) and [how to get your ISEEUP](article:lazio-disco-scholarship#iseeup).",
    },

    { type: "h2", id: "visa-file", text: "7. How does the visa file work with the agency?" },
    {
      type: "p",
      text: "The visa step rests on money: a **blocked amount at a Tunisian bank**, your parents' income and **6 months of their bank statements**. WSC's sheet says 35,000 TND. The Italian Embassy asked for EUR 10,179.85 for 2026/27, about 34,300 TND at the BCT rate of 7 October 2026 (the bank converts on the day you block, so ask it for the exact dinar amount). The agency checks that the amounts match across your papers and builds the file. You open the student file and block the money at your bank. See [how the blocked account works](article:italy-student-visa#blocked-account) and [the 15 documents of the student visa](article:italy-student-visa#visa-documents).",
    },
    { type: "h3", id: "visa-appointment", text: "How the appointment works" },
    {
      type: "p",
      text: "Neither you nor the agency books the appointment: once your university validates your Universitaly pre-enrolment, Almaviva, the Embassy's visa centre, emails you a date that **cannot be changed**. Check the email address you used on Universitaly every day, spam folder included. The details are in [how you get the Almaviva appointment](article:italy-student-visa#almaviva-appointment).",
    },
    { type: "h3", id: "visa-interview", text: "How to behave and what to say at the visa centre" },
    {
      type: "p",
      text: "At the visa centre, staff check your file, take your fingerprints and may ask you a few questions. From my experience, what helps:",
    },
    {
      type: "ul",
      items: [
        "**Arrive early**, dressed neatly, with the originals and the copies in the order of the Embassy checklist, so you can hand over any page at once.",
        "**Know your own file**: your university, course, city, the length of the course, who pays for your studies and how much, and where you will live for the first weeks.",
        "**Answer briefly and truthfully, in your own words.** Do not learn a script, and never bring a document you cannot explain.",
        "**Say why this course**, and how it fits what you studied before: one or two sentences are enough.",
        "**Stay calm if something is missing**: ask what you can add, and do not argue. Keep your phone silent and go alone unless you are asked to bring someone.",
      ],
    },

    { type: "h2", id: "do-it-yourself", text: "8. Can you do all of this yourself without an agency?" },
    {
      type: "p",
      text: "Yes. Every step WSC handles is a public procedure that you can do yourself. The agency saves you time, checks your papers, works with translators it knows and pays foreign fees for you. Doing it yourself saves the 5,500 TND. If you go alone, follow our free guide in this order:",
    },
    {
      type: "table",
      caption: "Each WSC step and the free guide that explains it.",
      head: ["WSC step", "Free guide"],
      rows: [
        ["1. Pre-enrolment file", "[Apply to university in Rome](article:apply-university-rome) and [legalise and translate your documents](article:documents-for-italy)"],
        ["2. Language test", "[Language requirements of each course](article:apply-university-rome#find-a-course)"],
        ["3. Scholarship and residence", "[The DiSCo scholarship](article:lazio-disco-scholarship) and [student housing in Rome](article:student-housing-rome)"],
        ["4. Visa file", "[The Italy student visa](article:italy-student-visa)"],
        ["5. Departure", "[Your first 30 days in Rome](article:arriving-in-rome)"],
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How much does WSC Tunisia charge to study in Italy?",
          a: "In 2026, WSC charges 5,500 TND, paid in three parts after each step: 1,600 TND for the pre-enrolment file, 2,500 TND for the scholarship file and 1,400 TND for the visa file. University fees, the language test, translations, the visa fee and the blocked amount are paid separately. Prices can change from one year to the next, so ask the agency for its current step sheet.",
        },
        {
          q: "Is WSC Tunisia an approved agency?",
          a: "Yes. WSC's Tunis office (World Study Center, 6 rue de Mahdia) and WSC Sousse are both on the Ministry of Higher Education's official list of approved study-abroad intermediary offices, and the agency gives its approval number (04/07) on its website. I used it myself to go to Rome. Check any agency on that list before paying, and ask for a written list of steps and fees.",
        },
        {
          q: "Which documents does WSC ask for a Master's in Italy?",
          a: "Besides the bac, its transcript, passport copies, a motivation letter (in English for an English-taught course), a Europass CV and 4 photos, a Master's file adds the Bachelor's degree, all university transcripts, internship certificates, the study plan of the 3 years of Bachelor's, 2 recommendation letters from professors and, for Design, Architecture or Multimedia, a portfolio. Everything comes in 3 certified copies.",
        },
        {
          q: "Does the agency get the documents for me?",
          a: "No. You get every document yourself from the offices that issue them and bring them to the agency. WSC checks them, tells you what to fix, sends them to a sworn translator and builds the pre-enrolment, scholarship and visa files.",
        },
        {
          q: "Where is WSC Tunisia and how do I contact it?",
          a: "WSC has an office in Tunis, at 6 rue de Mahdia (3rd floor), phone 71 285 510, and one in Sousse, as listed by the Ministry of Higher Education and on the agency's website. Visit the office and ask for the current step sheet before paying.",
        },
        {
          q: "Does WSC guarantee admission, the scholarship or the visa?",
          a: "No agency can: the university decides admission, DiSCo Lazio ranks scholarship applicants by family income, and the Italian Embassy decides the visa. An agency prepares and checks your files and follows each step with you.",
        },
        {
          q: "Can I study in Italy without an agency?",
          a: "Yes. Pre-enrolment, the DiSCo scholarship and the student visa are public procedures you can do alone. Our free study guide explains each step in order, from choosing a course in Rome to your first 30 days there.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources",
      items: [
        { label: "Ministry of Higher Education: official list of approved study-abroad intermediary offices (communiqué 1106)", url: "https://www.mes.tn/image.php?id=19999" },
        { label: "WSC Tunisia: agency website (approval number, offices, Italy offer)", url: "https://wsctunisia.com/" },
        { label: "British Council Tunisia: IELTS", url: "https://www.britishcouncil.tn/en/exam/ielts" },
        { label: "Tunisian Ministry of Justice: sworn translators by district", url: "https://www.justice.gov.tn/index.php?id=369" },
        {
          label: "Italian Embassy in Tunis: student visa info sheet (July 2026, English and French)",
          url: "https://ambtunisi.esteri.it/wp-content/uploads/2026/07/scheda_informativa_visto_studio_immatricolazione-ENG-FRA.pdf",
        },
        { label: "Universitaly: course search", url: "https://www.universitaly.it/cerca-corsi" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last checked: October 2026. WSC's fees and steps are its 2026 prices, from its step sheet and its website. The agency can change them. Scholarship and visa amounts are from the 2026/27 calls. Check the 2027/28 figures before you plan.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Agency", value: "WSC (World Study Center), Tunis and Sousse, on the Ministry's approved list" },
        { label: "Fee", value: "5,500 TND in three parts: 1,600 + 2,500 + 1,400" },
        { label: "Your job", value: "Collect every document, in 3 certified copies" },
        { label: "Free alternative", value: "Follow our study guide step by step" },
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
        "[Arrival in Rome](article:arriving-in-rome)",
      ],
    },
  ],
};
