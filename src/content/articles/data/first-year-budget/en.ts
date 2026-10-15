import type { ArticleTranslation } from "../../types";
import { B, BEFORE_LEAVING, ON_ARRIVAL, TOTAL_PRIVATE, UNIVERSITY, YEARLY_LIVING, eur, eurTnd, range, tnd, tndOf } from "./budget";

const L = "en";

// First-year budget for a Tunisian student in Rome. Body figures are computed in ./budget.ts from
// src/content/fees.ts; the summary, title and description repeat the totals as plain text (the article
// check reads them as text), so update them when fees.ts changes. fr.ts and ar.ts mirror the heading ids.
export const en: ArticleTranslation = {
  slug: "cost-of-studying-in-italy-tunisian-students",
  title: "How much does studying in Rome cost a Tunisian student? The 2026/27 first-year budget",
  subtitle: "Every official fee from Tunis to your first year at Sapienza, in euros and dinars, with rent and the money you can transfer",
  seoTitle: "Cost of Studying in Italy for Tunisians: 2026/27 Budget",
  metaDescription:
    "The 2026/27 first-year budget in Rome for Tunisian students: EUR 1,626 of fixed fees, EUR 7,626 to 10,026 with a private room, in TND, with sources.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["cost of studying in Italy for Tunisian students", "how much money to study in Italy", "student budget Rome", "cost of living in Rome for students", "study in Italy cost in TND", "first year budget Italy student"],
  summary:
    "A Tunisian student's first year at Sapienza in Rome costs about EUR 1,626 (about 5,476 TND) in fixed official fees in 2026/27: visa, application, residence permit, university fees, health service, transport and a bank card. With a private single room at EUR 500 to 700 a month, the year comes to EUR 7,626 to 10,026 before food, while the EUR 10,179.85 blocked for the visa stays your own money to live on.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This budget is for information only. Every fee comes from an official page (linked in each table, with the date it was checked), but fees change every year and your own costs depend on your university, your income band and where you live. Check the official sources before you pay or block any money.",
    },
    { type: "p", text: "**How much money do you need for your first year as a Tunisian student in Rome?**" },
    {
      type: "p",
      text: `Short answer: about **${eurTnd(L, B.fixed)}** in fixed official costs for the first year at Sapienza in 2026/27, then rent on top. With a private single room, the year comes to **${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}** before food and personal spending.`,
    },
    {
      type: "p",
      text: `This page adds up every fee our guides quote, from the visa in Tunis to the first year of university, using one example: a Bachelor's or Master's student at Sapienza in the lowest fee band, the flat fee for students from Tunisia. The blocked amount for the visa (${eur(L, B.blocked)}) is not in the total: it is your own money, released to you every month to live on.`,
    },

    { type: "h2", id: "total", text: "1. How much does the first year in Rome cost a Tunisian student?" },
    {
      type: "p",
      text: `The first year in Rome costs a Tunisian student about ${eur(L, B.fixed)} in fixed official fees, plus ${range(L, B.privateRoom.min, B.privateRoom.max)} for 12 months in a private room. Each line below is detailed in the next sections.`,
    },
    {
      type: "table",
      caption: `First year at Sapienza (lowest band), 2026/27. Dinar amounts at the Central Bank of Tunisia reference rate. Food and personal spending are not included.`,
      head: ["Item", "Amount", "In dinars"],
      rows: [
        ["Before you leave (application, visa)", eur(L, B.beforeLeaving), `${tndOf(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)} visa-centre fee`],
        ["First weeks in Rome (residence permit, bank card)", eur(L, B.onArrival), tndOf(L, B.onArrival)],
        ["University fees, year 1", eur(L, B.university), tndOf(L, B.university)],
        ["Health service, transport, bank (one year)", eur(L, B.yearlyLiving), tndOf(L, B.yearlyLiving)],
        ["**Fixed official costs**", `**${eur(L, B.fixed)}**`, `**${tndOf(L, B.fixed)} + ${tnd(L, B.visaCentreTnd)}**`],
        ["Private single room, 12 months", range(L, B.privateRoom.min, B.privateRoom.max), `${tndOf(L, B.privateRoom.min)} – ${tndOf(L, B.privateRoom.max)}`],
        ["**Total with a private room**", `**${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}**`, `**${tndOf(L, TOTAL_PRIVATE.min)} – ${tndOf(L, TOTAL_PRIVATE.max)} + ${tnd(L, B.visaCentreTnd)}**`],
      ],
    },

    { type: "h2", id: "before-leaving", text: "2. What do you pay in Tunisia before you leave?" },
    {
      type: "p",
      text: `Before you leave Tunisia, you pay the university application and the study visa: ${eur(L, B.beforeLeaving)}, plus the ${tnd(L, B.visaCentreTnd)} Almaviva service fee. The visa is paid in cash in dinars at the visa centre in Tunis, so the dinar amount follows the exchange rate.`,
    },
    { type: "fees", title: "Application and visa", feeIds: BEFORE_LEAVING, total: true, tnd: true },
    {
      type: "p",
      text: "Your documents add costs that have no fixed price: a Tunisian notary charges 10 or 20 TND per apostille, and sworn translators set their own rates. The Dichiarazione di Valore is free for study, while a CIMEA statement costs EUR 300 when your university asks for it. See [who can translate your Tunisian documents into Italian](article:documents-for-italy#translation) and [whether you need a DOV or a CIMEA statement](article:documents-for-italy#dov-or-cimea).",
    },

    { type: "h2", id: "first-weeks", text: "3. What do you pay in your first weeks in Rome?" },
    {
      type: "p",
      text: `In your first weeks in Rome, the residence permit kit and a first Italian card cost ${eur(L, B.onArrival)}. You apply for the permesso di soggiorno at a post office within 8 working days of arrival: the revenue stamp is bought at a tobacconist, and the rest is paid at the post office.`,
    },
    { type: "fees", title: "Residence permit and first card", feeIds: ON_ARRIVAL, total: true, tnd: true },
    { type: "p", text: "The steps are in [the arrival guide for students in Rome](article:arriving-in-rome)." },

    { type: "h2", id: "university-fees", text: "4. How much are university fees in the first year?" },
    {
      type: "p",
      text: `At Sapienza, the first year costs ${eur(L, B.university)} for a student from Tunisia in the lowest band: the flat fee, the Lazio regional tax and a revenue stamp. Private universities cost far more: LUMSA's yearly tuition is ${eur(L, B.lumsa)}, regional tax included.`,
    },
    { type: "fees", title: "Sapienza, first year (lowest band)", feeIds: UNIVERSITY, total: true, tnd: true },
    { type: "p", text: "Compare the five Rome universities in [how to apply to university in Rome](article:apply-university-rome)." },

    { type: "h2", id: "rent", text: "5. How much does a student pay for rent in Rome?" },
    {
      type: "p",
      text: `Rent is the largest cost: a standard private single room near a Rome university costs ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} a month in 2026, against ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} for a DiSCo residence place, which only DiSCo scholarship winners get.`,
    },
    { type: "fees", title: "Rent per month", feeIds: ["rome-private-room", "disco-residence"] },
    {
      type: "p",
      text: "A private lease must also be registered with the Agenzia delle Entrate (at least EUR 67, often split with the landlord). See [student housing in Rome](article:student-housing-rome) for the platforms and the scam checks.",
    },

    { type: "h2", id: "yearly-costs", text: "6. Which yearly costs come on top: health, transport and bank?" },
    {
      type: "p",
      text: `Health, transport and a bank card add ${eur(L, B.yearlyLiving)} a year: ${eur(L, B.ssn)} for voluntary registration with the national health service, the ATAC annual pass and the Postepay yearly fee.`,
    },
    { type: "fees", title: "Health service, transport and bank", feeIds: YEARLY_LIVING, total: true, tnd: true },
    {
      type: "p",
      text: `The ${eur(L, B.ssn)} health line is the upper case: private health insurance valid in Italy for the whole permit is accepted instead, and in my experience a policy taken in Tunisia through the bank that holds your study file replaced the SSN registration. SSN registration covers one calendar year, to 31 December: if you arrive in the autumn and stay with the SSN, a second payment is due for the new year. See [the arrival guide](article:arriving-in-rome).`,
    },

    { type: "h2", id: "blocked-amount", text: "7. Is the blocked amount for the visa a cost?" },
    {
      type: "p",
      text: `No: the ${eur(L, B.blocked)} blocked for the 2026/27 study visa is your own money. A Tunisian bank blocks it for a year and releases it at ${eur(L, B.blockedMonth)} a month for 13 months, which is the Italian Embassy's own estimate of what a student needs to live on.`,
    },
    { type: "fees", feeIds: ["visa-blocked-amount"], tnd: true },
    {
      type: "p",
      text: "Food and personal spending are not in this budget because there is no official figure for them. The monthly release of the blocked amount is the benchmark to plan with. See [how the blocked account works with a Tunisian bank](article:italy-student-visa).",
    },

    { type: "h2", id: "money-transfers", text: "8. How much money can you send from Tunisia?" },
    {
      type: "p",
      text: `Under Central Bank of Tunisia circular 2025-10, a student's study file allows a one-off installation allowance of ${tnd(L, B.installationTnd)} and up to ${tnd(L, B.livingTnd)} a month for living costs, through one Tunisian bank per academic year.`,
    },
    { type: "fees", title: "Transfers allowed for a study file", feeIds: ["study-installation", "study-living"] },
    { type: "p", text: "The three steps are in [how your money reaches you in Italy](article:study-in-italy#money-plan)." },

    { type: "h2", id: "disco-scholarship", text: "9. How much of this can the DiSCo scholarship cover?" },
    {
      type: "p",
      text: `A DiSCo Lazio scholarship pays an out-of-town student ${eur(L, B.discoBase)} a year in 2026/27, and up to ${eur(L, B.discoMax)} for the lowest incomes, plus meals. That covers a large part of the first-year budget. A DiSCo residence place is then deducted from it.`,
    },
    { type: "fees", title: "DiSCo Lazio scholarship 2026/27", feeIds: ["disco-base", "disco-max", "disco-meals"] },
    { type: "p", text: "Eligibility and the documents are in [the Lazio DiSCo scholarship for Tunisian students](article:lazio-disco-scholarship)." },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How much money do I need to study in Italy as a Tunisian student?",
          a: `For the first year at Sapienza in Rome in 2026/27: about ${eurTnd(L, B.fixed)} in fixed official fees, plus ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} a month for a private room, food and personal spending. You also block ${eur(L, B.blocked)} for the visa, which is your own money to live on.`,
        },
        {
          q: "Is studying in Italy expensive for Tunisians?",
          a: `Public universities are cheap for students from Tunisia: Sapienza's first year costs ${eur(L, B.university)} in the lowest band. Rent is the main cost in Rome, and the DiSCo scholarship (${eur(L, B.discoBase)} a year in 2026/27) can cover most of it if you qualify.`,
        },
        {
          q: "How much is the study visa for Italy in dinars?",
          a: `The study visa costs EUR 50, paid in cash in dinars at the Almaviva centre in Tunis, plus the ${tnd(L, B.visaCentreTnd)} service fee. The dinar amount follows the exchange rate, so check the Embassy's fees page before your appointment.`,
        },
        {
          q: "Do I have to spend the blocked amount?",
          a: `No. The ${eur(L, B.blocked)} stays yours: the bank releases ${eur(L, B.blockedMonth)} a month for 13 months, and that monthly money is what you live on in Italy.`,
        },
        {
          q: "How much is a student room in Rome?",
          a: `About ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} a month for a standard private single room near a university in 2026, less near Tor Vergata and more in the most sought-after areas. A DiSCo residence costs ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} a month for scholarship winners.`,
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Italian Embassy in Tunis: visa fees and payment", url: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/" },
        { label: "Italian Embassy in Tunis: student visa conditions for 2026/27 (blocked amount)", url: "https://ambtunisi.esteri.it/it/news/dall_ambasciata/2026/06/iscriversi-alle-universita-italiane-a-a-2026-2027-condizioni-per-la-concessione-del-visto-per-studio-immatricolazione-universitaria/" },
        { label: "Poste Italiane: residence permit kit and fees", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Polizia di Stato: residence permit contribution", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Sapienza: fee regulations 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Sapienza: regional tax and revenue stamp", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "DiSCo Lazio: right-to-study call 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "ATAC: passes", url: "https://www.atac.roma.it/biglietti-e-abbonamenti/abbonamenti" },
        { label: "Central Bank of Tunisia: circular 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "NewsIstruzione: student rents in Rome in 2026 (SoloAffitti data)", url: "https://www.newsistruzione.it/2026/08/22/affitti-studenti-roma-caro-casa-2026/" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026, for the 2026/27 academic year. Fees and the blocked amount change every year. Check each official page before you pay.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Fixed official costs, year 1", value: eurTnd(L, B.fixed) },
        { label: "With a private room", value: range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max) },
        { label: "Private room in Rome", value: `${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} a month` },
        { label: "Blocked amount (your money)", value: `${eur(L, B.blocked)}, ${eur(L, B.blockedMonth)} a month` },
        { label: "DiSCo scholarship", value: `${eur(L, B.discoBase)} a year (base)` },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "The full path in brief" },
    {
      type: "ol",
      items: [
        "Prepare your documents (apostille, translation) in Tunisia",
        `Apply to the university and pay the visa: ${eur(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)}`,
        `Block ${eur(L, B.blocked)} at one Tunisian bank`,
        `Pay the residence permit in your first week in Rome: ${eur(L, B.onArrival)}`,
        `Pay the first-year university fees: ${eur(L, B.university)}`,
        "Apply for the DiSCo scholarship to cover rent and living costs",
      ],
    },
  ],
};
