import type { ArticleTranslation } from "../../types";

// Part 3 of the settling-in-Rome series. French and Arabic mirror this structure (same heading ids, two tables, no figure).
export const en: ArticleTranslation = {
  slug: "student-jobs-rome",
  title: "Student Jobs in Rome for Tunisians",
  subtitle: "The 20-Hour Rule, Subito, Indeed and Agencies",
  seoTitle: "Student Jobs in Rome for Tunisians: Subito, Rules, Agencies",
  metaDescription:
    "Student jobs in Rome for Tunisians: the 20-hour weekly limit, posting a Subito ad for café work, Indeed, temp agencies, 150-ore jobs and how to avoid scams.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["student jobs in Rome", "part-time job Rome student", "student permit work hours Italy", "Subito lavoro Roma", "temp agencies Rome", "150 ore Sapienza"],
  summary:
    "On a study permit you can work as an employee up to 20 hours a week and 1,040 hours a year, with a regular contract; 20 hours is a weekly ceiling, not an average. The fastest way into café and restaurant work in Rome is a free job-seeker ad on Subito, alongside Indeed, temp agencies and your university's 150-ore collaborations.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal advice. Work rules for permit holders and the platforms' own rules can change, so check the official sources linked below before you sign a contract.",
    },
    { type: "p", text: "**You have your residence permit for study and want a part-time job in Rome. How many hours are you allowed, and where do you actually find work?**" },
    {
      type: "p",
      text: "The short answer: you can work as an employee for up to **20 hours a week** and **1,040 hours a year**, with a regular, declared contract. In Rome, most student jobs are in cafés, bars and restaurants, and a free ad on Subito saying you are looking for work is often the quickest way in.",
    },
    {
      type: "p",
      text: "This is part 3 of our settling-in series, after the bank account and the residenza. For the basics of your first month, read [the student work section of our arrival guide](article:arriving-in-rome#student-work).",
    },

    { type: "h2", id: "before-you-start", text: "1. Before you start: SIM, IBAN and codice fiscale" },
    {
      type: "ul",
      items: [
        "**An Italian SIM card.** Subito asks you to verify your account by SMS and only accepts phone numbers from EU countries and Switzerland, so a +216 number will not work.",
        "**An IBAN.** Employers pay salaries by bank transfer. See [how to open a bank account in Italy as a student](article:bank-account-italy-student).",
        "**Your codice fiscale.** It normally comes with your permesso application through the Questura; if you need it earlier, request it at any Agenzia delle Entrate office with form AA4/8.",
        "**Your residenza** helps with many local procedures; see [how to register your residenza in Rome](article:residenza-rome).",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Show the permit receipt to employers",
      text: "Until your permit card arrives, give employers and agencies a copy of the **receipt (ricevuta)** with your passport: it shows you applied for a study permit and lets them register a regular contract.",
    },

    { type: "h2", id: "hour-limits", text: "2. How many hours can you work on a student permit?" },
    {
      type: "p",
      text: "The study permit allows employee work (lavoro subordinato) for up to **20 hours a week**, which can be spread over 52 weeks, within an annual limit of **1,040 hours** ([DPR 394/1999, art. 14, c. 4](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14)).",
    },
    {
      type: "p",
      text: "In its note of **24 May 2022**, the Ispettorato Nazionale del Lavoro made it clear that 20 hours is a **weekly ceiling, not an average**: a contract above 20 hours a week is not compliant even if your yearly total stays under 1,040. You cannot work 35 hours in August and make up for it later. To work more, you must convert your permit to a work permit, before it expires.",
    },
    {
      type: "table",
      caption: "Contract types students in Italy come across (October 2026).",
      head: ["Type", "What it is", "Watch out"],
      rows: [
        ["Part-time employment contract", "The standard route: a declared contract with fixed weekly hours", "No more than 20 hours a week in the contract"],
        ["Occasional work (PrestO)", "Short INPS-managed jobs, capped at EUR 5,000 a year per worker", "No official source says whether these hours count toward the 20; ask the employer or a patronato"],
        ["On-call contract (contratto a chiamata)", "Called in when needed; for people under 24 (work ending by age 25) or over 55, or for jobs listed in collective agreements", "Your weekly 20-hour cap still applies"],
        ["University 150-ore collaboration", "Paid campus work, not an employment contract", "One per academic year; see section 6"],
      ],
    },
    { type: "h3", id: "exams-and-renewal", text: "Keep your exams on track" },
    {
      type: "p",
      text: "Working does not block your renewal, but exams do. Study permits are renewed if you passed **one exam in your first year** and **at least two in each later year**, and they cannot be issued for more than **3 years beyond the length of your course** ([DPR 394/1999, art. 46](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46)). A job that wrecks your exam record puts your permit at risk.",
    },

    { type: "h2", id: "subito", text: "3. Find a café or restaurant job on Subito" },
    {
      type: "p",
      text: "[Subito](https://www.subito.it) is Italy's big classifieds site, and Rome has plenty of café, bar and restaurant jobs on it. Instead of only answering employer ads, post your own ad in **Lavoro e servizi > Candidati in cerca di lavoro**, the section for job seekers. Private users get **20 free ads** there, and Subito refuses job offers that ask candidates for money ([Subito rules](https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-)).",
    },
    { type: "h3", id: "step-subito-account", text: "Step 1: create your account" },
    {
      type: "p",
      text: "Sign up on the website or the Subito app with your email, then confirm your Italian phone number with the SMS code ([phone verification](https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica)).",
    },
    { type: "h3", id: "step-subito-category", text: "Step 2: choose the job-seeker category" },
    {
      type: "p",
      text: "Tap **Inserisci annuncio** and pick **Lavoro e servizi**, then **Candidati in cerca di lavoro**. You can browse the [Rome job-seeker ads](https://www.subito.it/annunci-lazio/vendita/cerco-lavoro/roma/) first to see how others write theirs.",
    },
    { type: "h3", id: "step-subito-ad", text: "Step 3: write a short, clear ad" },
    {
      type: "ul",
      items: [
        "**Title**: the role and the area, for example “Cameriere / barista part-time, Roma San Lorenzo”.",
        "**Languages**: Arabic, French and English, plus your honest Italian level.",
        "**Availability**: the days and times you can work, within 20 hours a week.",
        "**Area**: the neighbourhood you live in and how far you can travel.",
        "**Photo**: optional; a clear, friendly one can help.",
        "**Contact**: ask employers to write to you through the app chat.",
      ],
    },
    { type: "h3", id: "step-subito-replies", text: "Step 4: answer quickly and keep the job legal" },
    {
      type: "p",
      text: "In my experience and that of my friends, calls and offers usually arrived within a week of posting. That is experience, not a guarantee. When someone calls, ask for a written contract with your weekly hours before your first shift.",
    },

    { type: "h2", id: "indeed", text: "4. Apply on Indeed Italy" },
    {
      type: "p",
      text: "On [it.indeed.com](https://it.indeed.com), search for “part time studenti” with Roma as the location. Upload your CV or build one on Indeed ([upload a CV](https://support.indeed.com/hc/en-us/articles/4408783727629-Uploading-a-Resume-File-to-Your-Profile)); some jobs let you apply directly with **Indeed Apply**, others send you to the employer's site. Set a **job alert** so new offers reach your inbox ([job alerts](https://support.indeed.com/hc/en-us/articles/204488890-Starting-Stopping-and-Managing-Job-Alerts)).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Check the weekly hours",
      text: "Many “student” ads in Rome ask for 25 to 30 hours a week, above your legal cap. Read the hours in each ad before you apply.",
    },

    { type: "h2", id: "agencies", text: "5. Temp agencies with a branch in Rome" },
    {
      type: "p",
      text: "Temp agencies (agenzie per il lavoro) place people in shops, warehouses, hotels and events. By law, authorised agencies **cannot charge workers any fee** ([D.Lgs. 276/2003, art. 11](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11)). You can check any agency on the [Ministry of Labour register](https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro).",
    },
    {
      type: "table",
      caption: "Agencies with a Rome branch confirmed on their own website (October 2026).",
      head: ["Agency", "Find a Rome branch"],
      rows: [
        ["Gi Group", "[gigroup.it](https://www.gigroup.it/citta-filiali/roma/)"],
        ["Adecco", "[adecco.com](https://www.adecco.com/it-it/filiali/lazio/roma/adecco-roma-esperanto)"],
        ["Randstad", "[randstad.it](https://www.randstad.it/trova-filiale/agenzia-il-lavoro-roma-tiburtina_1141/)"],
        ["Manpower", "[manpower.it](https://www.manpower.it/it/cerca-filiale)"],
        ["Umana", "[umana.it](https://www.umana.it/lista-filiali/)"],
        ["Synergie", "[synergie-italia.it](https://my.synergie-italia.it/branches)"],
        ["Etjca", "[etjca.it](https://etjca.it/le-nostre-filiali/)"],
        ["Orienta", "[orienta.net](https://www.orienta.net/it/chi-siamo/contatti-filiali.html)"],
      ],
    },
    {
      type: "p",
      text: "Bring your CV, permit (or receipt) and codice fiscale, and tell them upfront that you can work at most 20 hours a week.",
    },

    { type: "h2", id: "university-jobs", text: "6. University jobs: 150-ore collaborations and job placement" },
    {
      type: "p",
      text: "Universities pay students for part-time campus work, the **150-ore collaborations** (borse di collaborazione). Sapienza's 2025/26 call offered **250 places**, paying **EUR 1,295 for 150 hours**, tax-free. It is not an employment contract, and it required **Italian B2 and English B2** ([Sapienza call 2025/26](https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf)). The 2025/26 deadline has passed, so watch for the new call in autumn.",
    },
    {
      type: "p",
      text: "Good news if you have a grant: the Lazio DiSCo call says its scholarship is **compatible** with 150-ore collaborations; see [the DiSCo scholarship guide](article:lazio-disco-scholarship).",
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: Career Service job board on JobTeaser and internships on TSP ([opportunities](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio)).",
        "**Tor Vergata**: [placement office](https://web.uniroma2.it/it/contenuto/placement) and the job board at uniroma2.jobteaser.com.",
        "**Roma Tre**: the [Job Placement office](https://www.uniroma3.it/ufficio-job-placement/).",
        "**Porta Futuro Lazio**, run by DiSCo, has desks at Sapienza, Roma Tre and Tor Vergata: free CV checks, guidance and courses ([portafuturolazio.it](https://www.portafuturolazio.it/)).",
      ],
    },

    { type: "h2", id: "job-scams", text: "7. How to spot a job scam in Rome" },
    {
      type: "p",
      text: "The Polizia Postale warned about fake job offers on [19 January 2024](https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html) and about the WhatsApp “task scam” on [30 January 2025](https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html). ANPAL also flagged [fake offers using the EURES logo](https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-). Walk away if an offer:",
    },
    {
      type: "ul",
      items: [
        "Asks you to pay anything: a course, a kit, a registration fee.",
        "Wants a copy of your passport, permit or your bank codes before any interview.",
        "Arrives on WhatsApp from an unknown number and pays you to “like” posts or write reviews.",
        "Promises pay far above normal for very easy work.",
        "Comes without a written contract, or offers cash in hand.",
        "Pushes you to leave Subito or Indeed and click an outside link.",
      ],
    },
    {
      type: "p",
      text: "Report scams to the [Polizia Postale online office](https://www.commissariatodips.it/) or any police station.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How many hours can I work on a student permit in Italy?",
          a: "Up to 20 hours a week as an employee, with a limit of 1,040 hours a year. The 20 hours are a weekly ceiling, not an average, so you cannot work more one week and less the next.",
        },
        {
          q: "How do I find a job in a café or restaurant in Rome?",
          a: "Post a free ad in Subito's “Candidati in cerca di lavoro” section with the role, your area, your languages and your availability. Also answer employer ads on Subito and Indeed.",
        },
        {
          q: "Do temp agencies in Italy charge a fee?",
          a: "No. Italian law (D.Lgs. 276/2003, art. 11) forbids authorised agencies from charging workers, so any agency that asks you for money is a red flag.",
        },
        {
          q: "Can I work with the DiSCo scholarship?",
          a: "Yes for 150-ore university collaborations: the DiSCo call says they are compatible with the scholarship. For other jobs, check the income rules in the current DiSCo call.",
        },
        {
          q: "Can I sign up on Subito with a Tunisian phone number?",
          a: "No. Subito's SMS verification only accepts numbers from EU countries and Switzerland, so get an Italian SIM first.",
        },
        {
          q: "What if I want to work more than 20 hours a week?",
          a: "You must convert your study permit to a work permit, before it expires. Until then, keep every contract at 20 hours a week or less.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Normattiva: DPR 394/1999, art. 14 (work on a study permit)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14" },
        { label: "Normattiva: DPR 394/1999, art. 46 (renewal of study permits)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46" },
        { label: "Ispettorato Nazionale del Lavoro: note of 24 May 2022 on study permits and work", url: "https://portist-int.ispettorato.gov.it/files/2023/01/INL-DCGiuridica-nota-24052022-permesso-soggiorno-per-studio-e-attivita-lavorativa.pdf" },
        { label: "Agenzia delle Entrate: codice fiscale for foreign citizens", url: "https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria/che-cos-cittadini" },
        { label: "INPS: occasional work contract (PrestO)", url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.51100.contratto-di-prestazione-occasionale.html" },
        { label: "Ministry of Labour: on-call work (lavoro intermittente)", url: "https://www.lavoro.gov.it/temi-e-priorita/rapporti-di-lavoro-e-relazioni-industriali/focus-on/disciplina-rapporto-lavoro/pagine/lavoro-intermittente" },
        { label: "Subito: rules for the Lavoro e servizi category", url: "https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-" },
        { label: "Subito: ad limits", url: "https://assistenza.subito.it/hc/it/articles/11542466735517-Limiti-all-inserimento-degli-annunci" },
        { label: "Subito: phone verification", url: "https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica" },
        { label: "Indeed Support: applying for a job", url: "https://support.indeed.com/hc/en-us/articles/204652920-Applying-for-a-Job-Using-a-Resume-File" },
        { label: "Normattiva: D.Lgs. 276/2003, art. 11 (no fees for workers)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11" },
        { label: "Ministry of Labour: national register of employment agencies", url: "https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro" },
        { label: "Sapienza: 150-ore collaborations call 2025/26", url: "https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf" },
        { label: "Lazio DiSCo: right-to-study call 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "Porta Futuro Lazio", url: "https://www.portafuturolazio.it/" },
        { label: "Polizia Postale: how to recognise fake job offers", url: "https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html" },
        { label: "Polizia Postale: WhatsApp task scam", url: "https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html" },
        { label: "ANPAL: warning about fake job offers", url: "https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. The 150-ore figures come from Sapienza's 2025/26 call; check the new call each autumn. Subito and Indeed can change their rules at any time.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Legal limit", value: "20 hours a week, 1,040 hours a year, as an employee" },
        { label: "Fastest route", value: "A free job-seeker ad on Subito (Italian SIM needed)" },
        { label: "Agencies", value: "Cannot charge workers any fee (D.Lgs. 276/2003)" },
        { label: "Campus work", value: "150-ore collaborations, tax-free, compatible with DiSCo" },
      ],
    },
    { type: "h2", id: "settling-path", text: "Settling in Rome, step by step" },
    {
      type: "ol",
      items: [
        "[Open a bank account in Italy](article:bank-account-italy-student)",
        "[Register your residenza in Rome](article:residenza-rome)",
        "Find a student job in Rome",
        "[Your first 30 days in Rome](article:arriving-in-rome)",
      ],
    },
  ],
};
