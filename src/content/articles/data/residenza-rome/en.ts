import type { ArticleTranslation } from "../../types";

// Part 2 of the settling-in-Rome series. French and Arabic mirror this structure (same heading ids, two fee boxes, two tables).
export const en: ArticleTranslation = {
  slug: "how-to-apply-for-residenza-in-rome",
  title: "How to Apply for Residenza in Rome",
  subtitle: "Anagrafe Registration and Carta d'Identità for Foreign Students",
  seoTitle: "How to Apply for Residenza in Rome as a Foreign Student",
  metaDescription:
    "Register your residenza at the Rome anagrafe as a non-EU student: documents, online, PEC or post, the 45-day Polizia Locale check and the carta d'identità.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["how to apply for residenza in Rome", "residenza anagrafe Roma", "iscrizione anagrafica stranieri Roma", "carta d'identità stranieri Roma", "residenza for foreign students in Italy", "TuPassi Roma anagrafe"],
  summary:
    "To get residenza in Rome, you send a dichiarazione di residenza to Roma Capitale (online with SPID/CIE/CNS, by PEC, by registered post or at the counter) with your passport, your permesso di soggiorno or its receipt (a first-permit receipt may not be enough in every Municipio: check first) and your lease or the owner's declaration; it is free. The Comune registers you within 2 working days, the Polizia Locale checks the address within 45 days, and once you are resident you can request the electronic identity card (CIE) for EUR 22.21.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal advice. Registration rules, fees and office procedures can change and differ between Municipi, so always check the official Roma Capitale pages linked below before you send anything.",
    },
    { type: "p", text: "**You have a room and a residence permit request in Rome. How do you register your residenza at the anagrafe, and is it worth it?**" },
    {
      type: "p",
      text: "The short answer: fill in the *dichiarazione di residenza*, attach your passport, your permesso di soggiorno (or its receipt; a first-permit receipt may not be enough in every Municipio: check first) and your lease or the owner's declaration, and send it through **one** channel: the Roma Capitale online service, PEC, registered post or the counter. It is free. You are registered within 2 working days, and the Polizia Locale checks that you really live there within 45 days.",
    },
    {
      type: "p",
      text: "Once you are resident, you can ask for the Italian electronic identity card (*carta d'identità elettronica*, CIE). This is part 2 of our settling-in series, after [opening a bank account in Italy as a student](article:bank-account-italy-student).",
    },

    { type: "h2", id: "why-residenza", text: "1. Do you need residenza as a student in Rome?" },
    {
      type: "p",
      text: "Residenza (*iscrizione anagrafica*) means the Comune records your usual home (*dimora abituale*). It is different from the permesso di soggiorno, which you request first; see [how to request the residence permit for study](article:arriving-in-rome#residence-permit). If you plan to stay in Rome for your whole degree, registering is useful:",
    },
    {
      type: "ul",
      items: [
        "You can request anagrafe certificates and the CIE as a resident.",
        "It makes your ASL district clear for the national health service.",
        "The law asks you to declare a move within **20 days** (DPR 223/1989, art. 13), and the declaration is free.",
      ],
    },
    {
      type: "p",
      text: "Residence helps but is not strictly required for health cover: [ASL Roma 1](https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari) accepts a self-declaration of residence **or** of effective dimora for the voluntary registration.",
    },
    {
      type: "fees",
      title: "Voluntary registration with the national health service (as of October 2026)",
      feeIds: ["ssn-voluntary"],
      tnd: true,
    },

    { type: "h2", id: "documents", text: "2. Documents for residenza in Rome (non-EU citizens)" },
    {
      type: "p",
      text: "The form is the ministerial *dichiarazione di residenza*, with the extra list for non-EU citizens (*Allegato A*), on the [Roma Capitale change of residence page](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3). Fill in every field marked with an asterisk, or the file is rejected.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Bring the permit card, not only the receipt",
      text: "In practice, plan to register your residenza once you have the **permit card** itself. The receipt is enough for most other services, but a first-permit receipt may be refused at the anagrafe, so check with your Municipio before you book.",
    },
    {
      type: "table",
      caption: "What to attach to the dichiarazione di residenza (Roma Capitale, Allegato A).",
      head: ["Document", "Notes"],
      rows: [
        ["Passport", "Copy of a valid passport (DPR 223/1989, art. 14)."],
        ["Permesso di soggiorno", "Copy of the valid permit, or the expired permit plus the receipt of the renewal request."],
        ["Housing title", "Your registered rental contract, or the owner's declaration if you are a guest (*dichiarazione di ospitalità / assenso*) with the owner's ID."],
        ["Consent of current residents", "If other people already live in the flat, one adult signs page 3 of the form."],
        ["Email or PEC", "Recommended (some Municipi require it) so the office can contact you."],
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "First permit not issued yet?",
      text: "Allegato A describes the receipt of a first permit request for work and family cases. We could not confirm that a study receipt alone is accepted in every Municipio, so check with yours before you send. Without a registered lease you will need the owner's declaration: see [how to find a room with a proper contract](article:student-housing-rome#find-a-room).",
    },
    {
      type: "p",
      text: "The codice fiscale is not in the official list of attachments, but bring it anyway: it is practical advice, not a rule.",
    },

    { type: "h2", id: "book-and-submit", text: "3. How to send the request and book the anagrafe counter" },
    {
      type: "p",
      text: "Use **one channel only**. Sending the same request twice slows everything down.",
    },
    {
      type: "figure",
      src: "/blog/anagrafe-rome.webp",
      width: 1375,
      height: 898,
      alt: "The Roman Temple of Portunus in front of the large brick anagrafe building on Via Luigi Petroselli in Rome",
      caption: "Rome's central anagrafe building on Via Luigi Petroselli. Each municipio also has its own registry office.",
      credit: {
        text: "Photo: Indeciso42, Public domain, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Anagrafe_Roma.jpg",
      },
    },
    { type: "h3", id: "step-online", text: "Step 1: online with SPID, CIE or CNS" },
    {
      type: "p",
      text: "The [Roma Capitale online residence service](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978) also covers people arriving from abroad. You log in with SPID, CIE or CNS and upload PDFs of at most 2 MB each.",
    },
    { type: "h3", id: "step-pec-post", text: "Step 2: or by PEC or registered post" },
    {
      type: "p",
      text: "Without a digital login, send the signed form and all attachments **in one PDF** by PEC to your Municipio's address, or by registered post (*raccomandata*). Plain email has not been accepted since 1 March 2022.",
    },
    { type: "h3", id: "step-counter", text: "Step 3: or at the counter with TuPassi" },
    {
      type: "p",
      text: "[TuPassi](https://www.tupassi.com/MiroPrenSPID/cliente/cComuneRoma) is Roma Capitale's official booking and queue system for anagrafe counters: book online with SPID, CIE or CNS, or take a ticket at the totem in the office. Each Municipio uses it differently, so check your Municipio page first.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Why not ANPR?",
      text: "The [ANPR online change of residence](https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/) is only for people already registered in ANPR. A first arrival from Tunisia is not, so use Roma Capitale online, PEC, post or the counter.",
    },

    { type: "h2", id: "police-check", text: "4. The Polizia Locale check: what happens after you apply" },
    {
      type: "table",
      caption: "Timeline after you send the declaration (DL 5/2012, art. 5; DPR 223/1989, art. 19).",
      head: ["When", "What happens"],
      rows: [
        ["Within 2 working days", "The Comune registers you."],
        ["From the declaration date", "Your residence counts from the day you declared it."],
        ["Within 45 days", "The Polizia Locale checks that you really live at the address."],
        ["After 45 days with no notice", "If you get no *preavviso di rigetto* (notice of rejection), the residence is confirmed by *silenzio-assenso*."],
      ],
    },
    {
      type: "figure",
      src: "/blog/polizia-locale-rome-sign.webp",
      width: 1600,
      height: 1106,
      alt: "A white plaque on a wooden door reading Corpo Polizia Municipale, U.O. I Gruppo, Comune di Roma",
      caption: "An older plaque of Rome's municipal police, now called Polizia Locale di Roma Capitale. Its officers carry out the address check.",
      credit: {
        text: "Photo: Wilfredor, CC0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Polizia_locale_di_Roma_Capitale.jpg",
      },
    },
    {
      type: "p",
      text: "What happens if nobody is home during the check is not described in official Rome sources. Practical advice, not a rule: put your name on the doorbell and the mailbox, and stay reachable by phone and email.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Be honest about the address",
      text: "False declarations are reported to the authorities and can lead to criminal penalties (DPR 445/2000, arts. 75-76). You cannot register in a property you occupy without a right to it.",
    },

    { type: "h2", id: "identity-card", text: "5. The carta d'identità for foreign residents in Rome" },
    { type: "h3", id: "step-book-cie", text: "Step 1: book on the Ministry portal" },
    {
      type: "p",
      text: "Book the CIE at [prenotazionicie.interno.gov.it](https://prenotazionicie.interno.gov.it), in any Municipio. In Rome it is **not** booked through TuPassi ([Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498)). Confirm the booking when the reminder email arrives, or it is cancelled.",
    },
    { type: "h3", id: "step-cie-appointment", text: "Step 2: bring your passport and permit, and pay" },
    {
      type: "p",
      text: "As a non-EU citizen you must bring your **passport and permesso di soggiorno** ([Roma Capitale](https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf)). Payment is by card or pagoPA: check with your Municipio.",
    },
    {
      type: "fees",
      title: "Electronic identity card in Rome (as of October 2026)",
      feeIds: ["cie-rome"],
      tnd: true,
    },
    { type: "h3", id: "step-cie-delivery", text: "Step 3: receive the card" },
    {
      type: "p",
      text: "The card is delivered within 6 working days, to your home or for pick-up at the Comune ([Ministry of the Interior](https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/)).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Not a travel document for foreign citizens",
      text: "For foreign residents the CIE is only an identity document and is **not valid for travel abroad** (*non costituisce titolo per l'espatrio*). To travel in the Schengen area you need your valid passport plus your valid permesso di soggiorno, for at most 90 days in any 180 ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm)).",
    },
    {
      type: "p",
      text: "What the CIE is really good for: an Italian ID to show in Italy, and **Entra con CIE**, the login to public online services with an 8-digit PIN and an NFC phone ([Ministry of the Interior](https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/)).",
    },

    { type: "h2", id: "after-registration", text: "6. Keeping your residenza after each permit renewal" },
    {
      type: "p",
      text: "After **each renewal** of your permesso di soggiorno, renew your *dichiarazione di dimora abituale* at the anagrafe within **60 days**, with the new permit (DPR 223/1989, art. 7). You keep your registration while the permit is being renewed.",
    },
    {
      type: "p",
      text: "If you forget, the Comune can cancel your residence one year after your permit expires, after a notice giving you 30 days to act. If a request is refused, you can appeal to the Prefetto within 30 days.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need residenza in Rome as a student?",
          a: "It is not strictly required, but it is useful if you stay for your degree. It lets you get the CIE and anagrafe certificates, and ASL Roma 1 accepts residence or effective dimora for the health service.",
        },
        {
          q: "How long does the residenza check take?",
          a: "Up to 45 days. The Comune registers you within 2 working days, the Polizia Locale checks the address within 45 days, and with no notice of rejection the residence is confirmed.",
        },
        {
          q: "Can I travel in Europe with an Italian identity card?",
          a: "No, not as a foreign citizen. For you the CIE is not valid for travel abroad; travel with your passport and valid permesso di soggiorno, for at most 90 days in any 180.",
        },
        {
          q: "Is TuPassi used to book the identity card?",
          a: "No. TuPassi books anagrafe counters in many Municipi, but the CIE is booked only at prenotazionicie.interno.gov.it.",
        },
        {
          q: "Can I send my residenza request by email?",
          a: "No, plain email has not been accepted since 1 March 2022. Use the online service, PEC, registered post or the counter.",
        },
        {
          q: "How much does residenza cost in Rome?",
          a: "Nothing: the declaration of residence is free. The CIE costs EUR 22.21 in Rome (EUR 27.37 if lost).",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Roma Capitale: change of residence (form and Allegato A)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale: online change of residence (SPID, CIE, CNS)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978" },
        { label: "Roma Capitale, Municipio XIII: residence guide (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun13_Guida_Residenza_Avviso_Italiano_agg_03.03.22_-unito.pdf" },
        { label: "Roma Capitale: TuPassi booking system", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF781945" },
        { label: "Roma Capitale, Municipio VIII: demographic services charter (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun08_CdS_SERVIZI_DEMOGRAFICI_Agg_18_01_2024-_AGGIORNATO.pdf" },
        { label: "ANPR: change of residence", url: "https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/" },
        { label: "Normattiva: DL 5/2012, art. 5 (residence in real time)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-02-09;5~art5" },
        { label: "DPR 223/1989 (anagrafe regulation, PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Roma Capitale: CIE booking (not via TuPassi)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498" },
        { label: "Roma Capitale: CIE cost", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF141252&pagina=5" },
        { label: "Roma Capitale: electronic identity cards (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf" },
        { label: "Ministry of the Interior: CIE issue and renewal", url: "https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/" },
        { label: "Ministry of the Interior: Entra con CIE", url: "https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/" },
        { label: "ASL Roma 1: health care for non-EU citizens", url: "https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari" },
        { label: "EUR-Lex: Schengen Borders Code, Regulation (EU) 2016/399", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0399" },
        { label: "Your Europe: travel documents for non-EU nationals", url: "https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Procedures differ between Municipi and can change; check your Municipio page on comune.roma.it before you send your declaration or book a counter.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Cost", value: "The residence declaration is free" },
        { label: "How to send", value: "One channel: online (SPID/CIE/CNS), PEC, registered post or counter" },
        { label: "Address check", value: "Polizia Locale, within 45 days" },
        { label: "CIE in Rome", value: "EUR 22.21, booked at prenotazionicie.interno.gov.it, not valid for travel abroad for foreigners" },
      ],
    },
    { type: "h2", id: "settling-path", text: "Settling in Rome, step by step" },
    {
      type: "ol",
      items: [
        "[Open a bank account in Italy](article:bank-account-italy-student)",
        "Residenza and identity card",
        "[Find a student job in Rome](article:student-jobs-rome)",
        "[Your first 30 days in Rome](article:arriving-in-rome)",
      ],
    },
  ],
};
