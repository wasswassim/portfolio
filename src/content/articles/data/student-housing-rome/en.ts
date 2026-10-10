import type { ArticleTranslation } from "../../types";

// Source text for part 7. French and Arabic mirror this structure (same ids, same table).
export const en: ArticleTranslation = {
  slug: "student-housing-rome",
  title: "Student Housing in Rome: DiSCo Residences, Rooms and Scams",
  seoTitle: "Student Housing in Rome: DiSCo, Rooms and Scams",
  metaDescription:
    "Student housing in Rome for Tunisians: DiSCo residences, university housing desks, room platforms, what to check before signing, and how to avoid rental scams.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["student housing in Rome", "DiSCo residences", "room in Rome for students", "shared flat Rome", "student accommodation Rome for Tunisians", "rental scams Rome"],
  summary:
    "There are three routes to student housing in Rome, from cheapest to most expensive: a DiSCo residence (requested only in the yearly DiSCo scholarship application, about EUR 200-298 a month deducted from the grant in 2026/27), the housing services of Sapienza, Tor Vergata and Roma Tre, and a private room found on platforms such as HousingAnywhere, Uniplaces, Spotahome, Immobiliare.it, Idealista or Subito. Never pay before seeing the room, and make sure the lease is registered within 30 days.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal advice. Housing rules, prices and procedures can change, so always check the official sources before signing or paying anything.",
    },
    { type: "p", text: "**Where will you live when you arrive in Rome, and how do you find a room without being scammed?**" },
    {
      type: "p",
      text: "In short: the cheapest option is a DiSCo residence, which you can only request in the yearly DiSCo scholarship application. If you do not get one, use your university's housing service, then the rental platforms. Whatever you choose, see the room before paying, get a written contract and a receipt for every payment.",
    },
    {
      type: "p",
      text: "This is the last part of our [guide to studying in Italy for Tunisian students](article:study-in-italy). The earlier parts cover the application, the documents, the scholarship, the visa and your first steps in Rome. This part is about finding a place to live.",
    },

    { type: "h2", id: "disco-residences", text: "1. DiSCo residences: the cheapest option" },
    {
      type: "p",
      text: "DiSCo, the Lazio regional agency for the right to study, runs student residences in Rome. There is no separate application: you ask for a place in the same online application as the [DiSCo scholarship](article:lazio-disco-scholarship#eligibility), and the same income rules apply.",
    },
    {
      type: "ul",
      items: [
        "**Cost:** in 2026/27, about EUR 200-298 a month, deducted from your scholarship (EUR 700 is taken from the first instalment). See [how the scholarship is paid](article:lazio-disco-scholarship#payments).",
        "**When:** places usually start from around mid-October, for up to 10 months (check the bando for your year).",
        "**Where:** residences across Rome, for example Antonio Ruberti, Ezio Tarantelli, Falcone e Borsellino, Giulio Regeni, Valco San Paolo, Valleranello and Tor Vergata. The full list is on the [DiSCo residences page](https://laziodisco.it/servizi-attivi/residenze-universitarie/).",
        "**Timing:** the 2026/27 housing results are already out. Plan for 2027/28: the application is expected around June-July 2027, with housing rankings around mid-September (check the 2027/28 call).",
      ],
    },
    {
      type: "p",
      text: "If you win a place, DiSCo sends a message to your personal area with the residence. Answer in time: refusing or not replying means you lose the place for that year. If you are eligible but not placed, the ranking moves automatically, usually about every two weeks, so keep checking your messages.",
    },
    {
      type: "callout",
      tone: "note",
      title: "A residence is not proof for the visa",
      text: "Applying for a DiSCo residence is not valid proof of accommodation for the visa. You need a hotel booking or a hospitality declaration for your first period in Italy (see the [visa documents](article:italy-student-visa#visa-documents)).",
    },

    { type: "h2", id: "university-housing", text: "2. University housing services" },
    {
      type: "p",
      text: "The three big public universities in Rome do not guarantee you a room, but each one helps you look. Contact them as soon as you are admitted.",
    },
    { type: "h3", id: "step-sapienza-housing", text: "Sapienza" },
    {
      type: "p",
      text: "Open the [Sapienza student housing page](https://www.uniroma1.it/en/pagina/student-housing). It lists the housing options and the Sturent desk, a service that helps students find rooms. Read the page before writing, so your questions are specific.",
    },
    { type: "h3", id: "step-tor-vergata-housing", text: "Tor Vergata" },
    {
      type: "p",
      text: "Open the [Tor Vergata housing page](https://web.uniroma2.it/en/contenuto/housing), then write to **housing@uniroma2.it** with your name, course and arrival date. Check the page for student discount codes on rental platforms.",
    },
    { type: "h3", id: "step-roma-tre-housing", text: "Roma Tre" },
    {
      type: "p",
      text: "Roma Tre has a free [accommodation service](https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/). Write to **accommodation@uniroma3.it** to ask for help, and look on the page for platform discount codes.",
    },

    { type: "h2", id: "find-a-room", text: "3. How to find a room or a shared flat in Rome" },
    {
      type: "p",
      text: "Most students end up in a room in a shared flat. These platforms are the usual places to look:",
    },
    {
      type: "table",
      caption: "Where to look for a room in Rome, and what to watch out for.",
      head: ["Option", "Good for", "Watch out"],
      rows: [
        ["DiSCo residence", "Lowest cost, if you win the scholarship", "Only through the yearly call; not proof for the visa"],
        ["University housing desk", "Advice and trusted contacts", "Help to search, not a guaranteed room"],
        ["[HousingAnywhere](https://housinganywhere.com), [Uniplaces](https://www.uniplaces.com), [Spotahome](https://www.spotahome.com)", "Booking from Tunisia before you arrive", "Read the cancellation rules and platform fees"],
        ["[Immobiliare.it](https://www.immobiliare.it), [Idealista](https://www.idealista.it)", "Many listings, rooms and whole flats", "Mostly in Italian; check who the advertiser is"],
        ["[Subito](https://www.subito.it)", "Rooms from private owners", "Most scams happen on open classifieds: never pay before seeing"],
      ],
    },
    {
      type: "p",
      text: "Rents vary a lot by area and by month. Do not trust a figure you read online: check current listings for the neighbourhood near your faculty.",
    },
    { type: "h3", id: "before-signing", text: "What to ask before you sign" },
    {
      type: "ul",
      items: [
        "**Contract type:** is it a written lease, and for how long? Ask for a contract that matches your study period.",
        "**Deposit:** how much, and when exactly will it be returned?",
        "**Bills:** are electricity, gas, water, internet and building fees included, or split between flatmates?",
        "**Registration:** will the owner register the lease? You need a registered lease for many procedures.",
      ],
    },
    {
      type: "p",
      text: "A new lease must be [registered with the Agenzia delle Entrate](https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario) within 30 days. This is the owner's job, but ask for proof of registration and keep a copy. To sign a lease you may need a codice fiscale: you can get one at any Agenzia delle Entrate office (see [how to get your codice fiscale](article:arriving-in-rome#codice-fiscale)).",
    },
    { type: "h3", id: "first-weeks", text: "Your first weeks: a temporary place" },
    {
      type: "p",
      text: "Many students book a hotel, a hostel or a short stay for the first weeks, then look for a room on the spot. This also solves the visa: you need proof of accommodation for the first period, either a hotel booking or a hospitality declaration from someone who hosts you. Visiting rooms in person is the safest way to choose.",
    },

    { type: "h2", id: "avoid-scams", text: "4. How to avoid rental scams" },
    {
      type: "p",
      text: "Students who look from abroad are the easiest targets. The Polizia Postale's [advice on rental scams](https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146) comes down to one rule: see the room, or go through an authorised agency, and never pay in advance without guarantees.",
    },
    {
      type: "ul",
      items: [
        "See the room in person, or ask for a live video call where the owner shows the room and an ID document.",
        "Never pay a deposit or rent before you have seen the room and the contract.",
        "Refuse payment by Western Union, money transfer services, gift cards or crypto.",
        "Get a written contract and a receipt for every payment.",
        "Be wary of a rent far below the others in the same area, or an owner who is \"abroad\" and in a hurry.",
        "Check that the owner's name matches the contract and the payment account.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "If you have already paid",
      text: "Stop all contact, keep every message and receipt, and report it to the police (Polizia Postale). Tell your university housing service too: it helps them warn other students.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "How do I find a room in Rome as a student?",
          a: "Start with the DiSCo residences (in the scholarship application), then your university's housing service, then platforms such as HousingAnywhere, Uniplaces, Spotahome, Immobiliare.it, Idealista and Subito. Many students book a short stay for the first weeks and visit rooms in person.",
        },
        {
          q: "Do DiSCo residences cost money?",
          a: "Yes, but little. In 2026/27 a place in Rome costs about EUR 200-298 a month, deducted from your DiSCo scholarship (EUR 700 comes from the first instalment).",
        },
        {
          q: "Can I apply for a DiSCo residence without the scholarship?",
          a: "No. You request the place in the same DiSCo application as the scholarship, with the same income rules and deadlines.",
        },
        {
          q: "Do I need a codice fiscale to rent a room?",
          a: "Usually yes: owners need it for the lease and its registration. You can get one at any Agenzia delle Entrate office with your passport and visa.",
        },
        {
          q: "Does a DiSCo residence application count as accommodation proof for the visa?",
          a: "No. For the visa you need a hotel booking or a hospitality declaration for your first period in Italy.",
        },
        {
          q: "How do I avoid rental scams in Rome?",
          a: "See the room or do a live video call, never pay before seeing it, refuse Western Union and gift cards, and get a contract and a receipt for every payment.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "DiSCo Lazio: university residences", url: "https://laziodisco.it/servizi-attivi/residenze-universitarie/" },
        { label: "DiSCo Lazio: right-to-study call 2026/27 (English)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "Sapienza: student housing", url: "https://www.uniroma1.it/en/pagina/student-housing" },
        { label: "Tor Vergata: housing", url: "https://web.uniroma2.it/en/contenuto/housing" },
        { label: "Roma Tre: accommodation service", url: "https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/" },
        { label: "Agenzia delle Entrate: registering a new lease", url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario" },
        { label: "Polizia di Stato: advice on rental scams", url: "https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Dates for 2027/28 are projected from the 2026/27 call and must be confirmed in the new DiSCo call. Prices and housing services can change, so check the official pages before you apply or sign.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "DiSCo residence", value: "About EUR 200-298/month in 2026/27, deducted from the scholarship" },
        { label: "How to request it", value: "Only in the yearly DiSCo application" },
        { label: "Lease registration", value: "Within 30 days, by the owner; ask for proof" },
        { label: "Golden rule", value: "Never pay before seeing the room" },
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
        "Accommodation",
      ],
    },
  ],
};
