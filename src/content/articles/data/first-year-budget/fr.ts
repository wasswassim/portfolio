import type { ArticleTranslation } from "../../types";
import { B, BEFORE_LEAVING, ON_ARRIVAL, TOTAL_PRIVATE, UNIVERSITY, YEARLY_LIVING, eur, eurTnd, range, tnd, tndOf } from "./budget";

const L = "fr";

// Mirrors en.ts (same heading ids). Body figures come from ./budget.ts; the summary, title and
// description repeat the totals as plain text, so update them when fees.ts changes.
export const fr: ArticleTranslation = {
  slug: "cout-des-etudes-en-italie-pour-les-tunisiens",
  title: "Combien coûtent les études à Rome pour un étudiant tunisien ? Le budget de la première année 2026/27",
  subtitle: "Tous les frais officiels, de Tunis à votre première année à la Sapienza, en euros et en dinars, avec le loyer et l'argent que vous pouvez transférer",
  seoTitle: "Coût des études en Italie pour les Tunisiens : 2026/27",
  metaDescription:
    "Le budget 2026/27 de la première année à Rome pour les Tunisiens : 1 626 EUR de frais fixes, 7 626 à 10 026 EUR avec une chambre privée, en TND et sourcé.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur sa façade et la foule devant",
  keywords: ["coût des études en Italie pour les Tunisiens", "budget pour étudier en Italie", "budget étudiant Rome", "coût de la vie à Rome pour un étudiant", "étudier en Italie prix en dinars", "budget première année Italie étudiant"],
  summary:
    "La première année d'un étudiant tunisien à la Sapienza de Rome coûte environ 1 626 EUR (environ 5 476 TND) de frais officiels fixes en 2026/27 : visa, candidature, permis de séjour, frais universitaires, service de santé, transports et carte bancaire. Avec une chambre individuelle privée à 500-700 EUR par mois, l'année revient à 7 626-10 026 EUR hors nourriture, tandis que les 10 179,85 EUR bloqués pour le visa restent votre propre argent pour vivre.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce budget est donné à titre d'information. Chaque montant vient d'une page officielle (en lien dans chaque tableau, avec sa date de vérification), mais les frais changent chaque année et vos propres coûts dépendent de votre université, de votre tranche de revenus et de votre logement. Vérifiez les sources officielles avant de payer ou de bloquer de l'argent.",
    },
    { type: "p", text: "**De combien d'argent avez-vous besoin pour votre première année d'étudiant tunisien à Rome ?**" },
    {
      type: "p",
      text: `Réponse courte : environ **${eurTnd(L, B.fixed)}** de frais officiels fixes pour la première année à la Sapienza en 2026/27, puis le loyer en plus. Avec une chambre individuelle privée, l'année revient à **${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}** hors nourriture et dépenses personnelles.`,
    },
    {
      type: "p",
      text: `Cette page additionne tous les frais cités dans nos guides, du visa à Tunis à la première année d'université, avec un exemple : un étudiant en licence ou en master à la Sapienza dans la tranche la plus basse, le forfait des étudiants venant de Tunisie. Le montant bloqué pour le visa (${eur(L, B.blocked)}) n'entre pas dans le total : c'est votre propre argent, qui vous est versé chaque mois pour vivre.`,
    },

    { type: "h2", id: "total", text: "1. Combien coûte la première année à Rome pour un étudiant tunisien ?" },
    {
      type: "p",
      text: `La première année à Rome coûte à un étudiant tunisien environ ${eur(L, B.fixed)} de frais officiels fixes, plus ${range(L, B.privateRoom.min, B.privateRoom.max)} pour 12 mois dans une chambre privée. Chaque ligne est détaillée dans les sections suivantes.`,
    },
    {
      type: "table",
      caption: "Première année à la Sapienza (tranche la plus basse), 2026/27. Montants en dinars au cours de référence de la Banque centrale de Tunisie. La nourriture et les dépenses personnelles ne sont pas incluses.",
      head: ["Poste", "Montant", "En dinars"],
      rows: [
        ["Avant le départ (candidature, visa)", eur(L, B.beforeLeaving), `${tndOf(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)} de frais du centre de visa`],
        ["Premières semaines à Rome (permis de séjour, carte bancaire)", eur(L, B.onArrival), tndOf(L, B.onArrival)],
        ["Frais universitaires, 1re année", eur(L, B.university), tndOf(L, B.university)],
        ["Santé, transports, banque (un an)", eur(L, B.yearlyLiving), tndOf(L, B.yearlyLiving)],
        ["**Frais officiels fixes**", `**${eur(L, B.fixed)}**`, `**${tndOf(L, B.fixed)} + ${tnd(L, B.visaCentreTnd)}**`],
        ["Chambre individuelle privée, 12 mois", range(L, B.privateRoom.min, B.privateRoom.max), `${tndOf(L, B.privateRoom.min)} – ${tndOf(L, B.privateRoom.max)}`],
        ["**Total avec une chambre privée**", `**${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}**`, `**${tndOf(L, TOTAL_PRIVATE.min)} – ${tndOf(L, TOTAL_PRIVATE.max)} + ${tnd(L, B.visaCentreTnd)}**`],
      ],
    },

    { type: "h2", id: "before-leaving", text: "2. Que payez-vous en Tunisie avant de partir ?" },
    {
      type: "p",
      text: `Avant de quitter la Tunisie, vous payez la candidature à l'université et le visa d'études : ${eur(L, B.beforeLeaving)}, plus ${tnd(L, B.visaCentreTnd)} de frais de service Almaviva. Le visa se paie en espèces en dinars au centre de visa de Tunis, donc le montant en dinars suit le taux de change.`,
    },
    { type: "fees", title: "Candidature et visa", feeIds: BEFORE_LEAVING, total: true, tnd: true },
    {
      type: "p",
      text: "Vos documents ajoutent des frais sans prix fixe : un notaire tunisien prend 10 ou 20 TND par apostille, et les traducteurs assermentés fixent leurs propres tarifs. La Dichiarazione di Valore est gratuite pour les études, alors qu'une attestation CIMEA coûte 300 EUR si votre université la demande. Voir [qui peut traduire vos documents tunisiens en italien](article:documents-for-italy#translation) et [s'il vous faut une DOV ou une attestation CIMEA](article:documents-for-italy#dov-or-cimea).",
    },

    { type: "h2", id: "first-weeks", text: "3. Que payez-vous pendant vos premières semaines à Rome ?" },
    {
      type: "p",
      text: `Pendant vos premières semaines à Rome, le kit du permis de séjour et une première carte italienne coûtent ${eur(L, B.onArrival)}. Vous demandez le permesso di soggiorno dans un bureau de poste dans les 8 jours ouvrables suivant votre arrivée : le timbre fiscal s'achète dans un bureau de tabac, et le reste se paie à la poste.`,
    },
    { type: "fees", title: "Permis de séjour et première carte", feeIds: ON_ARRIVAL, total: true, tnd: true },
    { type: "p", text: "Les étapes sont dans [le guide d'arrivée des étudiants à Rome](article:arriving-in-rome)." },

    { type: "h2", id: "university-fees", text: "4. Combien coûtent les frais universitaires la première année ?" },
    {
      type: "p",
      text: `À la Sapienza, la première année coûte ${eur(L, B.university)} à un étudiant venant de Tunisie dans la tranche la plus basse : le forfait, la taxe régionale du Latium et un timbre fiscal. Les universités privées coûtent bien plus : les frais annuels de la LUMSA sont de ${eur(L, B.lumsa)}, taxe régionale incluse.`,
    },
    { type: "fees", title: "Sapienza, première année (tranche la plus basse)", feeIds: UNIVERSITY, total: true, tnd: true },
    { type: "p", text: "Comparez les cinq universités de Rome dans [comment postuler à l'université à Rome](article:apply-university-rome)." },

    { type: "h2", id: "rent", text: "5. Combien paie un étudiant de loyer à Rome ?" },
    {
      type: "p",
      text: `Le loyer est le premier poste de dépense : une chambre individuelle privée standard près d'une université de Rome coûte ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} par mois en 2026, contre ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} pour une place en résidence DiSCo, réservée aux boursiers DiSCo.`,
    },
    { type: "fees", title: "Loyer par mois", feeIds: ["rome-private-room", "disco-residence"] },
    {
      type: "p",
      text: "Un bail privé doit aussi être enregistré auprès de l'Agenzia delle Entrate (au moins 67 EUR, souvent partagés avec le propriétaire). Voir [le logement étudiant à Rome](article:student-housing-rome) pour les plateformes et les arnaques à éviter.",
    },

    { type: "h2", id: "yearly-costs", text: "6. Quels frais annuels s'ajoutent : santé, transports et banque ?" },
    {
      type: "p",
      text: `La santé, les transports et une carte bancaire ajoutent ${eur(L, B.yearlyLiving)} par an : ${eur(L, B.ssn)} pour l'inscription volontaire au service national de santé, l'abonnement annuel ATAC et les frais annuels Postepay.`,
    },
    { type: "fees", title: "Service de santé, transports et banque", feeIds: YEARLY_LIVING, total: true, tnd: true },
    {
      type: "p",
      text: `La ligne santé de ${eur(L, B.ssn)} est le cas le plus cher : une assurance santé privée valable en Italie pour toute la durée du permis est acceptée à la place, et d'après mon expérience, une assurance prise en Tunisie auprès de la banque qui gère votre dossier d'études a remplacé l'inscription au SSN. L'inscription au SSN couvre une année civile, jusqu'au 31 décembre : si vous arrivez à l'automne et restez au SSN, un second paiement est dû pour la nouvelle année. Voir [le guide d'arrivée](article:arriving-in-rome).`,
    },

    { type: "h2", id: "blocked-amount", text: "7. Le montant bloqué pour le visa est-il une dépense ?" },
    {
      type: "p",
      text: `Non : les ${eur(L, B.blocked)} bloqués pour le visa d'études 2026/27 sont votre propre argent. Une banque tunisienne les bloque pour un an et vous les verse à raison de ${eur(L, B.blockedMonth)} par mois pendant 13 mois, ce qui correspond à l'estimation de l'ambassade d'Italie de ce dont un étudiant a besoin pour vivre.`,
    },
    { type: "fees", feeIds: ["visa-blocked-amount"], tnd: true },
    {
      type: "p",
      text: "La nourriture et les dépenses personnelles ne figurent pas dans ce budget car il n'existe pas de chiffre officiel ; le versement mensuel du montant bloqué est la référence pour vous organiser. Voir [comment fonctionne le compte bloqué avec une banque tunisienne](article:italy-student-visa).",
    },

    { type: "h2", id: "money-transfers", text: "8. Combien d'argent pouvez-vous envoyer de Tunisie ?" },
    {
      type: "p",
      text: `Selon la circulaire 2025-10 de la Banque centrale de Tunisie, le dossier d'études d'un étudiant permet une allocation d'installation unique de ${tnd(L, B.installationTnd)} et jusqu'à ${tnd(L, B.livingTnd)} par mois pour les frais de vie, via une seule banque tunisienne par année universitaire.`,
    },
    { type: "fees", title: "Transferts autorisés pour un dossier d'études", feeIds: ["study-installation", "study-living"] },
    { type: "p", text: "Les trois étapes sont dans [comment votre argent vous parvient en Italie](article:study-in-italy#money-plan)." },

    { type: "h2", id: "disco-scholarship", text: "9. Quelle part de ce budget la bourse DiSCo peut-elle couvrir ?" },
    {
      type: "p",
      text: `La bourse DiSCo Lazio verse à un étudiant hors siège ${eur(L, B.discoBase)} par an en 2026/27, et jusqu'à ${eur(L, B.discoMax)} pour les revenus les plus bas, plus les repas. Elle couvre une grande partie du budget de la première année ; une place en résidence DiSCo en est ensuite déduite.`,
    },
    { type: "fees", title: "Bourse DiSCo Lazio 2026/27", feeIds: ["disco-base", "disco-max", "disco-meals"] },
    { type: "p", text: "Les conditions et les documents sont dans [la bourse DiSCo du Latium pour les étudiants tunisiens](article:lazio-disco-scholarship)." },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "De combien d'argent ai-je besoin pour étudier en Italie en tant qu'étudiant tunisien ?",
          a: `Pour la première année à la Sapienza de Rome en 2026/27 : environ ${eurTnd(L, B.fixed)} de frais officiels fixes, plus ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} par mois pour une chambre privée, la nourriture et les dépenses personnelles. Vous bloquez aussi ${eur(L, B.blocked)} pour le visa, votre propre argent pour vivre.`,
        },
        {
          q: "Les études en Italie sont-elles chères pour les Tunisiens ?",
          a: `Les universités publiques sont bon marché pour les étudiants venant de Tunisie : la première année à la Sapienza coûte ${eur(L, B.university)} dans la tranche la plus basse. Le loyer est la principale dépense à Rome, et la bourse DiSCo (${eur(L, B.discoBase)} par an en 2026/27) peut en couvrir une grande partie si vous y avez droit.`,
        },
        {
          q: "Combien coûte le visa d'études pour l'Italie en dinars ?",
          a: `Le visa d'études coûte 50 EUR, payés en espèces en dinars au centre Almaviva de Tunis, plus ${tnd(L, B.visaCentreTnd)} de frais de service. Le montant en dinars suit le taux de change : vérifiez la page des frais de l'ambassade avant votre rendez-vous.`,
        },
        {
          q: "Dois-je dépenser le montant bloqué ?",
          a: `Non. Les ${eur(L, B.blocked)} restent à vous : la banque vous verse ${eur(L, B.blockedMonth)} par mois pendant 13 mois, et c'est avec cet argent mensuel que vous vivez en Italie.`,
        },
        {
          q: "Combien coûte une chambre d'étudiant à Rome ?",
          a: `Environ ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} par mois pour une chambre individuelle privée standard près d'une université en 2026, moins près de Tor Vergata et plus dans les quartiers les plus demandés. Une résidence DiSCo coûte ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} par mois aux boursiers.`,
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Ambassade d'Italie à Tunis : frais de visa et paiement", url: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/" },
        { label: "Ambassade d'Italie à Tunis : conditions du visa d'études 2026/27 (montant bloqué)", url: "https://ambtunisi.esteri.it/it/news/dall_ambasciata/2026/06/iscriversi-alle-universita-italiane-a-a-2026-2027-condizioni-per-la-concessione-del-visto-per-studio-immatricolazione-universitaria/" },
        { label: "Poste Italiane : kit et frais du permis de séjour", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Polizia di Stato : contribution pour le permis de séjour", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Sapienza : règlement des frais 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Sapienza : taxe régionale et timbre fiscal", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "DiSCo Lazio : appel droit aux études 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "ATAC : abonnements", url: "https://www.atac.roma.it/biglietti-e-abbonamenti/abbonamenti" },
        { label: "Banque centrale de Tunisie : circulaire 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "NewsIstruzione : loyers étudiants à Rome en 2026 (données SoloAffitti)", url: "https://www.newsistruzione.it/2026/08/22/affitti-studenti-roma-caro-casa-2026/" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026, pour l'année universitaire 2026/27. Les frais et le montant bloqué changent chaque année ; vérifiez chaque page officielle avant de payer.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Frais officiels fixes, 1re année", value: eurTnd(L, B.fixed) },
        { label: "Avec une chambre privée", value: range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max) },
        { label: "Chambre privée à Rome", value: `${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} par mois` },
        { label: "Montant bloqué (votre argent)", value: `${eur(L, B.blocked)}, ${eur(L, B.blockedMonth)} par mois` },
        { label: "Bourse DiSCo", value: `${eur(L, B.discoBase)} par an (base)` },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "Le parcours en bref" },
    {
      type: "ol",
      items: [
        "Préparez vos documents (apostille, traduction) en Tunisie",
        `Postulez à l'université et payez le visa : ${eur(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)}`,
        `Bloquez ${eur(L, B.blocked)} auprès d'une banque tunisienne`,
        `Payez le permis de séjour dès votre première semaine à Rome : ${eur(L, B.onArrival)}`,
        `Payez les frais universitaires de première année : ${eur(L, B.university)}`,
        "Demandez la bourse DiSCo pour couvrir le loyer et les frais de vie",
      ],
    },
  ],
};
