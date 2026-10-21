import type { ArticleTranslation } from "../../types";

// Box-by-box guide to the Roma Capitale dichiarazione di residenza. French and Arabic mirror this structure (same heading ids, one figure, one table).
export const en: ArticleTranslation = {
  slug: "how-to-fill-out-the-dichiarazione-di-residenza",
  title: "How to Fill Out the Dichiarazione di Residenza in Rome, Page by Page",
  subtitle: "The residence form for foreign students, box by box, and the one box that can ruin your ISEE",
  seoTitle: "How to Fill Out the Dichiarazione di Residenza",
  metaDescription:
    "Fill out the Rome dichiarazione di residenza as a foreign student box by box: which to tick, what to leave blank and the page 3 box that affects your ISEE.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["how to fill out dichiarazione di residenza", "dichiarazione di residenza Roma form", "residence form Rome student", "dichiarazione di residenza compilata esempio", "residenza form ISEE roommates"],
  summary:
    "To fill out the Rome dichiarazione di residenza as a foreign student, tick the box for arrival from abroad, fill in your personal data and new address, tick box 2 on page 4 with the details of your registered lease, then date and sign page 5. If roommates are already registered at the flat, tick only the box saying you have no family or emotional ties with them, because the other box puts you in their family unit and changes your ISEE.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal advice. It follows the Roma Capitale form as published in October 2026 and how we filled it in ourselves. Forms and office practice can change and differ between Municipi, so always check the official pages linked below.",
    },
    { type: "p", text: "**You have the dichiarazione di residenza in front of you. Which boxes do you tick, what do you write, and what must you leave blank?**" },
    {
      type: "p",
      text: "The short answer: on a first registration from abroad you fill in far less than the form suggests. You tick the box for arrival from abroad, write your own data and your new address, choose your housing title on page 4 and sign page 5. The boxes for family members who move with you, driving licences and vehicles stay empty.",
    },
    {
      type: "p",
      text: "This page walks through the five pages of the form, box by box, as we filled it in at our Municipio. For the documents and the ways to send the form, see [how to apply for residenza in Rome](article:residenza-rome).",
    },

    { type: "h2", id: "before-you-start", text: "1. What do you need before you fill in the form?" },
    {
      type: "p",
      text: "Before you write anything, print the official form from the [Roma Capitale change of residence page](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3) and put these documents next to you:",
    },
    {
      type: "ul",
      items: [
        "Your **passport** and your **permesso di soggiorno** (or its receipt).",
        "Your **codice fiscale**, all 16 characters.",
        "Your **rental contract** and its **Agenzia delle Entrate registration receipt** (*ricevuta di registrazione*, model RLI). Page 4 asks for numbers that are only on this receipt.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Write in capitals, and never cross out",
      text: "Write in block capitals (*stampatello*) with a black or blue pen. If you only have one printed copy, do not cross anything out. When you are not sure about one number, leave that line blank and fill it in in front of the clerk.",
    },
    {
      type: "p",
      text: "The asterisks on the form matter. Fields with one asterisk are mandatory: if one is missing, the request is not accepted. Two asterisks mark statistical data, and three mark data for the Ministry of Transport (Italian driving licences and vehicles).",
    },

    { type: "h2", id: "page-1", text: "2. How do you fill in page 1 of the dichiarazione di residenza?" },
    { type: "h3", id: "page-1-type", text: "The top table: why you are declaring residence" },
    {
      type: "p",
      text: "If this is your first residenza in Italy, tick the **second box**, *Dichiarazione di residenza con provenienza dall'estero*, and write your home country in Italian next to it (for example TUNISIA). Leave the other four boxes blank.",
    },
    {
      type: "p",
      text: "Tick the first box only if you were already resident in another Italian town, and the fourth only if you are moving from another address in Rome.",
    },
    { type: "h3", id: "page-1-personal-data", text: "Section 1, Il sottoscritto: your personal data" },
    {
      type: "table",
      caption: "What to write in section 1 (Il sottoscritto) on page 1.",
      head: ["Field", "What to write"],
      rows: [
        ["Cognome, Nome", "Your surname and first name exactly as in your passport."],
        ["Data di nascita", "Your date of birth, DD/MM/YYYY."],
        ["Luogo di nascita", "Your city of birth with the country in brackets, for example TUNISI (TUNISIA)."],
        ["Sesso", "M or F."],
        ["Stato civile", "CELIBE (unmarried man) or NUBILE (unmarried woman), CONIUGATO/A if married."],
        ["Cittadinanza", "Your nationality in Italian, for example TUNISINA."],
        ["Codice Fiscale", "All 16 characters, clearly."],
        ["Posizione nella professione", "Leave it blank if you do not work."],
        ["Condizione non professionale", "Tick **Studente** (box 2)."],
        ["Titolo di studio", "The highest degree you have **already completed**, not the one you are studying for."],
        ["Patente down to Ciclomotori", "Leave all of it blank. It is only for Italian driving licences and vehicles with Italian plates."],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Master's student? Tick Laurea triennale",
      text: "*Titolo di studio* asks for the degree you already hold. If you have a bachelor's degree and are now doing a master's, tick **Laurea triennale** (box 4), not Laurea (box 5). Your student status is already covered by the Studente box. If you are starting a bachelor's, tick **Diploma** (box 3).",
    },
    { type: "h3", id: "page-1-dichiara", text: "The bottom of page 1: Dichiara" },
    {
      type: "p",
      text: "Tick the box *Di aver trasferito la dimora abituale al seguente indirizzo*. The address itself goes at the top of page 2.",
    },

    { type: "h2", id: "page-2", text: "3. What do you write on page 2?" },
    {
      type: "p",
      text: "On page 2 you only fill in the address table at the top: Comune ROMA, Provincia RM, the street (*Via/Piazza*) and the street number (*Numero civico*) exactly as in your contract. Then *Scala* (staircase), *Piano* (floor) and *Interno* (apartment number), also from the contract.",
    },
    {
      type: "p",
      text: "Write the number of the **apartment**, not of your bedroom. If the building has a single staircase and the contract names none, leave *Scala* blank.",
    },
    {
      type: "p",
      text: "Do not tick *Che nell'abitazione sita al nuovo indirizzo si sono trasferiti anche i familiari*, and leave sections 2 and 3 completely blank. They are for family members who move with you, not for roommates.",
    },

    { type: "h2", id: "page-3", text: "4. How do you fill in page 3 when you share a flat?" },
    {
      type: "p",
      text: "Leave the top half of page 3 blank: it continues the vehicle table and section 4 for another family member. The bottom half is the part that matters if you share a flat.",
    },
    {
      type: "p",
      text: "Look at the box *Che nell'abitazione sita al nuovo indirizzo sono già iscritte le seguenti persone*. It asks whether people are **already registered as residents** at the flat:",
    },
    {
      type: "ul",
      items: [
        "**If none of your roommates is registered there**, leave this whole section blank.",
        "**If at least one roommate is registered there**, tick the box and write the details of **one** registered person (surname, name, place and date of birth). That person signs and you attach a copy of their ID. Then tick the bottom-left box only: *Non sussistono rapporti di coniugio, parentela, affinità, adozione, tutela o vincoli affettivi con i componenti della famiglia già residente*.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Never tick the bottom-right box if you are only roommates",
      text: "The box *Sussiste il seguente vincolo* says you have a family or emotional tie with the people already registered. The anagrafe then puts you in **their** family unit (DPR 223/1989, art. 4), and the ISEE is calculated on the anagrafe family (DPCM 159/2013, art. 3). Their income would count in your ISEE and can cost you the scholarship.",
    },
    {
      type: "p",
      text: "Not sure whether your roommates are registered? Ask them or your landlord before you send the form. At the counter, the clerk can check it in the anagrafe system in seconds, so you can also leave this box until you are in front of them.",
    },
    {
      type: "p",
      text: "Last line of page 3, *Si allegano i seguenti documenti*: list what you attach, for example PASSAPORTO, PERMESSO DI SOGGIORNO, CODICE FISCALE, CONTRATTO DI LOCAZIONE E RICEVUTA DI REGISTRAZIONE.",
    },

    { type: "h2", id: "page-4", text: "5. Which housing title do you tick on page 4?" },
    {
      type: "p",
      text: "Tick the first box at the top of page 4, *Di occupare legittimamente l'abitazione in base al titolo di seguito descritto*. Then choose **one** of the six options. For most students renting a room or a flat, it is option 2:",
    },
    {
      type: "table",
      caption: "The six housing titles on page 4 and when a student uses them.",
      head: ["Option", "When to tick it"],
      rows: [
        ["1. Proprietario", "You own the flat. Not for tenants."],
        ["2. Intestatario del contratto di locazione registrato", "Your name is on a lease registered with the Agenzia delle Entrate. This is the usual case."],
        ["3. Edilizia Residenziale Pubblica", "Public housing lease."],
        ["4. Comodato d'uso gratuito", "A registered free-loan agreement (no rent)."],
        ["5. Usufruttuario", "You hold a right of usufruct."],
        ["6. Altro titolo", "Any other legal title, for example a guest with the owner's declaration. Describe it on the lines."],
      ],
    },
    {
      type: "p",
      text: "For option 2, copy three details from your **registration receipt** (*ricevuta di registrazione*, model RLI): *presso l'Agenzia delle Entrate di* (the office that registered it, or TELEMATICO if it was registered online), *in data* (the registration date) and *al n.* (the registration number and series, for example SERIE 3T N. 12345). Leave options 3 to 6 blank.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "The cadastral numbers in option 1",
      text: "Option 1 is for owners, but some clerks ask tenants for the flat's cadastral data (*foglio, particella, subalterno*) to find it faster. They are usually in your rental contract. Leave those lines blank and copy them at the counter only if the clerk asks.",
    },
    {
      type: "p",
      text: "If your name is not on the registered lease (a sublet, a takeover of someone else's contract, or a stay as a guest), option 2 may not fit. Check with your Municipio which option to use and which declaration to attach, as explained in [what to attach to the residence declaration](article:residenza-rome#documents).",
    },

    { type: "h2", id: "page-5", text: "6. How do you finish page 5 and sign?" },
    {
      type: "p",
      text: "Tick the top box, *Tutte le comunicazioni inerenti la presente dichiarazione dovranno essere inviate ai seguenti recapiti*, and fill in where the office can reach you: Comune ROMA, Provincia RM, your street and number in Rome, your Italian mobile number (*Cellulare*) and your email or PEC in clear capitals. *Telefono* and *Fax* can stay blank.",
    },
    {
      type: "p",
      text: "Write the date next to *Data* and sign under *Firma del richiedente*. Leave *Firma degli altri componenti maggiorenni della famiglia* blank unless adult family members move with you.",
    },
    {
      type: "figure",
      src: "/blog/anagrafe-rome.webp",
      width: 1375,
      height: 898,
      alt: "The Roman Temple of Portunus in front of the large brick anagrafe building on Via Luigi Petroselli in Rome",
      caption: "Rome's central anagrafe building. The completed form goes to the anagrafe office of your own Municipio.",
      credit: {
        text: "Photo: Indeciso42, Public domain, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Anagrafe_Roma.jpg",
      },
    },

    { type: "h2", id: "hand-in", text: "7. Where do you hand in the completed form?" },
    {
      type: "p",
      text: "The completed and signed form goes to the anagrafe office of the Municipio where you live, with a copy of your ID and the documents of Allegato A for non-EU citizens (Allegato B for EU citizens). Roma Capitale lists the accepted channels: PEC, registered post, delivery to the protocol office, or the online service. A counter appointment is for specific cases.",
    },
    {
      type: "p",
      text: "Use one channel only. The step-by-step guide to each channel, and what happens after (the Polizia Locale check within 45 days), is in [how to send the residenza request in Rome](article:residenza-rome#book-and-submit).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Which box do I tick on the dichiarazione di residenza if I come from abroad?",
          a: "Tick the second box at the top of page 1, Dichiarazione di residenza con provenienza dall'estero, and write your home country in Italian next to it, for example TUNISIA. Tick the first box only if you were already resident in another Italian town, and the fourth only if you move within Rome.",
        },
        {
          q: "What do I tick in Titolo di studio if I am a master's student?",
          a: "Tick Laurea triennale (box 4). Titolo di studio asks for the highest degree you have already completed, not the one you are studying for. Your current studies are covered by the Studente box under Condizione non professionale. A student starting a bachelor's degree ticks Diploma (box 3).",
        },
        {
          q: "Do I list my roommates on the residence form?",
          a: "Only if they are already registered as residents at the flat. Then you write the details of one of them on page 3, that person signs, and you tick the box saying there are no family or emotional ties with them. Roommates never go in sections 2 to 4, which are for family members moving with you.",
        },
        {
          q: "Can the residence form affect my ISEE?",
          a: "Yes. On page 3, the box Sussiste il seguente vincolo puts you in the family unit of the people already registered at the flat, and the ISEE is calculated on that anagrafe family. If you are only roommates, tick the other box, Non sussistono rapporti, so your ISEE stays yours.",
        },
        {
          q: "Where do I find the numbers for page 4?",
          a: "On the Agenzia delle Entrate registration receipt of your lease (ricevuta di registrazione, model RLI), not on the contract itself. Copy the office that registered it (or TELEMATICO), the registration date and the registration number with its series. Ask your landlord for the receipt if you do not have it.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "Roma Capitale: dichiarazione di residenza form with Allegato A and B (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/26-Dichiarazione_di_residenza_privacy.pdf" },
        { label: "Roma Capitale: change of residence", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale: anagrafe forms", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF46336" },
        { label: "DPR 223/1989, anagrafe regulation, art. 4 on the anagrafe family (PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Normattiva: DPCM 159/2013, ISEE regulation (art. 3, family unit)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.consiglio.ministri:decreto:2013-12-05;159" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last checked: October 2026, against the Roma Capitale form. If the form changes, the boxes may move. Check the current PDF on comune.roma.it before you fill it in.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Page 1", value: "Second box (from abroad), your data, Studente, Dichiara" },
        { label: "Page 2", value: "Address only, apartment number not room number" },
        { label: "Page 3", value: "Roommates registered? Tick Non sussistono rapporti only" },
        { label: "Page 4", value: "Option 2 with the RLI registration receipt numbers" },
        { label: "Page 5", value: "Contacts, date and your signature" },
      ],
    },
    { type: "h2", id: "form-path", text: "The form in brief" },
    {
      type: "ol",
      items: [
        "Print the form and gather passport, permit, codice fiscale and lease receipt",
        "Fill in pages 1 to 5 in capitals",
        "Attach copies and the Allegato A documents",
        "[Send it through one channel](article:residenza-rome#book-and-submit)",
        "Wait for the Polizia Locale check",
      ],
    },
  ],
};
