import type { ArticleTranslation } from "../../types";

// French version of en.ts (same heading ids, one figure, one table per page). Italian form labels stay in Italian.
export const fr: ArticleTranslation = {
  slug: "remplir-la-dichiarazione-di-residenza",
  title: "Comment remplir la dichiarazione di residenza à Rome, page par page",
  subtitle: "Le formulaire de résidence pour étudiants étrangers, case par case, et la case qui peut ruiner votre ISEE",
  seoTitle: "Remplir la dichiarazione di residenza à Rome",
  metaDescription:
    "Remplissez la dichiarazione di residenza à Rome case par case : quoi cocher, quoi laisser vide et la case de la page 3 qui touche votre ISEE.",
  imageAlt: "Le Colisée de Rome avec un immense drapeau italien suspendu sur son flanc et la foule devant",
  keywords: ["remplir la dichiarazione di residenza", "formulaire dichiarazione di residenza Rome", "formulaire de résidence Rome étudiant", "dichiarazione di residenza exemple rempli", "residenza colocataires ISEE"],
  summary:
    "Pour remplir la dichiarazione di residenza à Rome en tant qu'étudiant étranger, cochez la case de l'arrivée depuis l'étranger, écrivez vos données et votre nouvelle adresse, cochez l'option 2 de la page 4 avec les références de votre bail enregistré, puis datez et signez la page 5. Si des colocataires sont déjà inscrits à l'appartement, cochez seulement la case qui dit que vous n'avez aucun lien familial ou affectif avec eux, car l'autre case vous place dans leur famille et change votre ISEE.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement",
      text: "Ce guide est purement informatif et ne constitue pas un conseil juridique. Il suit le formulaire de Roma Capitale publié en octobre 2026 et la façon dont nous l'avons rempli nous-mêmes. Les formulaires et les pratiques changent et varient d'un Municipio à l'autre : vérifiez toujours les pages officielles citées plus bas.",
    },
    { type: "p", text: "**Vous avez la dichiarazione di residenza devant vous. Quelles cases cocher, quoi écrire, et qu'est-ce qu'il faut laisser vide ?**" },
    {
      type: "p",
      text: "La réponse courte : pour une première inscription depuis l'étranger, vous remplissez bien moins que ce que le formulaire laisse croire. Vous cochez l'arrivée depuis l'étranger, écrivez vos données et votre nouvelle adresse, choisissez votre titre d'occupation à la page 4 et signez la page 5. Les cases pour la famille qui déménage avec vous, les permis de conduire et les véhicules restent vides.",
    },
    {
      type: "p",
      text: "Cette page parcourt les cinq pages du formulaire, case par case, comme nous l'avons rempli dans notre Municipio. Pour les documents et les façons d'envoyer le formulaire, voir [comment demander la residenza à Rome](article:residenza-rome).",
    },

    { type: "h2", id: "before-you-start", text: "1. De quoi avez-vous besoin avant de remplir le formulaire ?" },
    {
      type: "p",
      text: "Avant d'écrire quoi que ce soit, imprimez le formulaire officiel depuis la [page de changement de résidence de Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3) et gardez ces documents à côté de vous :",
    },
    {
      type: "ul",
      items: [
        "Votre **passeport** et votre **permesso di soggiorno** (ou son récépissé).",
        "Votre **codice fiscale**, les 16 caractères.",
        "Votre **contrat de location** et son **reçu d'enregistrement à l'Agenzia delle Entrate** (*ricevuta di registrazione*, modèle RLI). La page 4 demande des numéros qui ne figurent que sur ce reçu.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Écrivez en majuscules, sans jamais raturer",
      text: "Écrivez en majuscules d'imprimerie (*stampatello*) au stylo noir ou bleu. Si vous n'avez qu'une copie imprimée, ne raturez rien. Si vous hésitez sur un numéro, laissez la ligne vide et remplissez-la devant l'employé.",
    },
    {
      type: "p",
      text: "Les astérisques du formulaire comptent. Les champs avec un astérisque sont obligatoires : s'il en manque un, la demande n'est pas recevable. Deux astérisques signalent des données statistiques, et trois des données pour le ministère des Transports (permis et véhicules italiens).",
    },

    { type: "h2", id: "page-1", text: "2. Comment remplir la page 1 de la dichiarazione di residenza ?" },
    { type: "h3", id: "page-1-type", text: "Le tableau du haut : pourquoi vous déclarez une résidence" },
    {
      type: "p",
      text: "Si c'est votre première residenza en Italie, cochez la **deuxième case**, *Dichiarazione di residenza con provenienza dall'estero*, et écrivez votre pays d'origine en italien à côté (par exemple TUNISIA). Laissez les quatre autres cases vides.",
    },
    {
      type: "p",
      text: "Ne cochez la première case que si vous étiez déjà résident dans une autre commune italienne, et la quatrième que si vous changez d'adresse à l'intérieur de Rome.",
    },
    { type: "h3", id: "page-1-personal-data", text: "Section 1, Il sottoscritto : vos données personnelles" },
    {
      type: "table",
      caption: "Ce qu'il faut écrire dans la section 1 (Il sottoscritto) de la page 1.",
      head: ["Champ", "Quoi écrire"],
      rows: [
        ["Cognome, Nome", "Votre nom et votre prénom exactement comme sur le passeport."],
        ["Data di nascita", "Votre date de naissance, JJ/MM/AAAA."],
        ["Luogo di nascita", "Votre ville de naissance avec le pays entre parenthèses, par exemple TUNISI (TUNISIA)."],
        ["Sesso", "M ou F."],
        ["Stato civile", "CELIBE (homme célibataire) ou NUBILE (femme célibataire), CONIUGATO/A si marié."],
        ["Cittadinanza", "Votre nationalité en italien, par exemple TUNISINA."],
        ["Codice Fiscale", "Les 16 caractères, bien lisibles."],
        ["Posizione nella professione", "Laissez vide si vous ne travaillez pas."],
        ["Condizione non professionale", "Cochez **Studente** (case 2)."],
        ["Titolo di studio", "Le diplôme le plus élevé que vous avez **déjà obtenu**, pas celui que vous préparez."],
        ["De Patente à Ciclomotori", "Laissez tout vide. C'est seulement pour les permis italiens et les véhicules immatriculés en Italie."],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "En master ? Cochez Laurea triennale",
      text: "*Titolo di studio* demande le diplôme que vous avez déjà. Si vous avez une licence et faites maintenant un master, cochez **Laurea triennale** (case 4), pas Laurea (case 5). Votre statut d'étudiant est déjà indiqué par la case Studente. Si vous commencez une licence, cochez **Diploma** (case 3).",
    },
    { type: "h3", id: "page-1-dichiara", text: "Le bas de la page 1 : Dichiara" },
    {
      type: "p",
      text: "Cochez la case *Di aver trasferito la dimora abituale al seguente indirizzo*. L'adresse elle-même se met en haut de la page 2.",
    },

    { type: "h2", id: "page-2", text: "3. Qu'écrire sur la page 2 ?" },
    {
      type: "p",
      text: "Sur la page 2, vous remplissez seulement le tableau d'adresse en haut : Comune ROMA, Provincia RM, la rue (*Via/Piazza*) et le numéro (*Numero civico*) exactement comme sur votre contrat. Puis *Scala* (escalier), *Piano* (étage) et *Interno* (numéro d'appartement), aussi d'après le contrat.",
    },
    {
      type: "p",
      text: "Écrivez le numéro de l'**appartement**, pas celui de votre chambre. Si l'immeuble n'a qu'un escalier et que le contrat n'en mentionne aucun, laissez *Scala* vide.",
    },
    {
      type: "p",
      text: "Ne cochez pas *Che nell'abitazione sita al nuovo indirizzo si sono trasferiti anche i familiari*, et laissez les sections 2 et 3 entièrement vides. Elles concernent la famille qui déménage avec vous, pas les colocataires.",
    },

    { type: "h2", id: "page-3", text: "4. Comment remplir la page 3 en colocation ?" },
    {
      type: "p",
      text: "Laissez vide la moitié haute de la page 3 : c'est la suite du tableau des véhicules et la section 4 pour un autre membre de la famille. La moitié basse est celle qui compte si vous êtes en colocation.",
    },
    {
      type: "p",
      text: "Regardez la case *Che nell'abitazione sita al nuovo indirizzo sono già iscritte le seguenti persone*. Elle demande si des personnes sont **déjà inscrites comme résidentes** à l'appartement :",
    },
    {
      type: "ul",
      items: [
        "**Si aucun colocataire n'y est inscrit**, laissez toute cette section vide.",
        "**Si au moins un colocataire y est inscrit**, cochez la case et écrivez les données d'**une seule** personne inscrite (nom, prénom, lieu et date de naissance). Cette personne signe et vous joignez une copie de sa pièce d'identité. Cochez ensuite seulement la case en bas à gauche : *Non sussistono rapporti di coniugio, parentela, affinità, adozione, tutela o vincoli affettivi con i componenti della famiglia già residente*.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Ne cochez jamais la case en bas à droite entre colocataires",
      text: "La case *Sussiste il seguente vincolo* déclare un lien familial ou affectif avec les personnes déjà inscrites. L'anagrafe vous place alors dans **leur** famille (DPR 223/1989, art. 4), et l'ISEE est calculé sur la famille de l'anagrafe (DPCM 159/2013, art. 3). Leurs revenus compteraient dans votre ISEE et peuvent vous coûter la bourse.",
    },
    {
      type: "p",
      text: "Vous ne savez pas si vos colocataires sont inscrits ? Demandez-leur, ou au propriétaire, avant d'envoyer le formulaire. Au guichet, l'employé le vérifie en quelques secondes dans le système de l'anagrafe, donc vous pouvez aussi attendre d'être devant lui pour cette case.",
    },
    {
      type: "p",
      text: "Dernière ligne de la page 3, *Si allegano i seguenti documenti* : listez ce que vous joignez, par exemple PASSAPORTO, PERMESSO DI SOGGIORNO, CODICE FISCALE, CONTRATTO DI LOCAZIONE E RICEVUTA DI REGISTRAZIONE.",
    },

    { type: "h2", id: "page-4", text: "5. Quel titre d'occupation cocher à la page 4 ?" },
    {
      type: "p",
      text: "Cochez la première case en haut de la page 4, *Di occupare legittimamente l'abitazione in base al titolo di seguito descritto*. Puis choisissez **une seule** des six options. Pour la plupart des étudiants qui louent une chambre ou un appartement, c'est l'option 2 :",
    },
    {
      type: "table",
      caption: "Les six titres d'occupation de la page 4 et quand un étudiant les utilise.",
      head: ["Option", "Quand la cocher"],
      rows: [
        ["1. Proprietario", "Vous êtes propriétaire. Pas pour les locataires."],
        ["2. Intestatario del contratto di locazione registrato", "Votre nom figure sur un bail enregistré à l'Agenzia delle Entrate. C'est le cas habituel."],
        ["3. Edilizia Residenziale Pubblica", "Bail d'un logement social public."],
        ["4. Comodato d'uso gratuito", "Un prêt à usage gratuit enregistré (sans loyer)."],
        ["5. Usufruttuario", "Vous avez un droit d'usufruit."],
        ["6. Altro titolo", "Tout autre titre légal, par exemple un hébergé avec la déclaration du propriétaire. Décrivez-le sur les lignes."],
      ],
    },
    {
      type: "p",
      text: "Pour l'option 2, recopiez trois informations de votre **reçu d'enregistrement** (*ricevuta di registrazione*, modèle RLI) : *presso l'Agenzia delle Entrate di* (le bureau qui l'a enregistré, ou TELEMATICO s'il a été enregistré en ligne), *in data* (la date d'enregistrement) et *al n.* (le numéro et la série, par exemple SERIE 3T N. 12345). Laissez les options 3 à 6 vides.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Les références cadastrales de l'option 1",
      text: "L'option 1 concerne les propriétaires, mais certains employés demandent aux locataires les données cadastrales (*foglio, particella, subalterno*) pour trouver l'appartement plus vite. Elles figurent souvent dans le contrat. Laissez ces lignes vides et recopiez-les au guichet seulement si on vous les demande.",
    },
    {
      type: "p",
      text: "Si votre nom ne figure pas sur le bail enregistré (sous-location, reprise du contrat de quelqu'un d'autre ou hébergement), l'option 2 peut ne pas convenir. Demandez à votre Municipio quelle option utiliser et quelle déclaration joindre, comme expliqué dans [ce qu'il faut joindre à la déclaration de résidence](article:residenza-rome#documents).",
    },

    { type: "h2", id: "page-5", text: "6. Comment terminer la page 5 et signer ?" },
    {
      type: "p",
      text: "Cochez la case du haut, *Tutte le comunicazioni inerenti la presente dichiarazione dovranno essere inviate ai seguenti recapiti*, et indiquez où le bureau peut vous joindre : Comune ROMA, Provincia RM, votre rue et votre numéro à Rome, votre portable italien (*Cellulare*) et votre email ou PEC en majuscules bien lisibles. *Telefono* et *Fax* peuvent rester vides.",
    },
    {
      type: "p",
      text: "Écrivez la date à côté de *Data* et signez sous *Firma del richiedente*. Laissez *Firma degli altri componenti maggiorenni della famiglia* vide, sauf si des membres adultes de votre famille déménagent avec vous.",
    },
    {
      type: "figure",
      src: "/blog/anagrafe-rome.webp",
      width: 1375,
      height: 898,
      alt: "Le temple romain de Portunus devant le grand bâtiment en brique de l'anagrafe, via Luigi Petroselli à Rome",
      caption: "Le bâtiment central de l'anagrafe de Rome. Le formulaire rempli va au bureau de l'anagrafe de votre propre Municipio.",
      credit: {
        text: "Photo : Indeciso42, domaine public, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Anagrafe_Roma.jpg",
      },
    },

    { type: "h2", id: "hand-in", text: "7. Où remettre le formulaire rempli ?" },
    {
      type: "p",
      text: "Le formulaire rempli et signé va au bureau de l'anagrafe du Municipio où vous habitez, avec une copie de votre pièce d'identité et les documents de l'Allegato A pour les citoyens non européens (Allegato B pour les citoyens de l'UE). Roma Capitale accepte la PEC, la lettre recommandée, le dépôt au bureau du protocole ou le service en ligne. Le rendez-vous au guichet est réservé à des cas particuliers.",
    },
    {
      type: "p",
      text: "Utilisez un seul canal. Le détail de chaque canal, et ce qui se passe ensuite (le contrôle de la Polizia Locale dans les 45 jours), est dans [comment envoyer la demande de residenza à Rome](article:residenza-rome#book-and-submit).",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Quelle case cocher sur la dichiarazione di residenza si j'arrive de l'étranger ?",
          a: "Cochez la deuxième case en haut de la page 1, Dichiarazione di residenza con provenienza dall'estero, et écrivez votre pays d'origine en italien à côté, par exemple TUNISIA. Cochez la première case seulement si vous étiez déjà résident dans une autre commune italienne, et la quatrième seulement si vous déménagez à l'intérieur de Rome.",
        },
        {
          q: "Que cocher dans Titolo di studio si je suis en master ?",
          a: "Cochez Laurea triennale (case 4). Titolo di studio demande le diplôme le plus élevé que vous avez déjà obtenu, pas celui que vous préparez. Vos études actuelles sont couvertes par la case Studente de Condizione non professionale. Un étudiant qui commence une licence coche Diploma (case 3).",
        },
        {
          q: "Dois-je indiquer mes colocataires sur le formulaire de résidence ?",
          a: "Seulement s'ils sont déjà inscrits comme résidents à l'appartement. Vous écrivez alors les données de l'un d'eux à la page 3, cette personne signe, et vous cochez la case qui dit qu'il n'y a aucun lien familial ou affectif. Les colocataires ne vont jamais dans les sections 2 à 4, réservées à la famille qui déménage avec vous.",
        },
        {
          q: "Le formulaire de résidence peut-il changer mon ISEE ?",
          a: "Oui. À la page 3, la case Sussiste il seguente vincolo vous place dans la famille des personnes déjà inscrites à l'appartement, et l'ISEE est calculé sur cette famille de l'anagrafe. Si vous êtes seulement colocataires, cochez l'autre case, Non sussistono rapporti, pour que votre ISEE reste le vôtre.",
        },
        {
          q: "Où trouver les numéros demandés à la page 4 ?",
          a: "Sur le reçu d'enregistrement de votre bail à l'Agenzia delle Entrate (ricevuta di registrazione, modèle RLI), pas sur le contrat lui-même. Recopiez le bureau qui l'a enregistré (ou TELEMATICO), la date d'enregistrement et le numéro avec sa série. Demandez le reçu à votre propriétaire si vous ne l'avez pas.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Roma Capitale : formulaire dichiarazione di residenza avec Allegato A et B (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/26-Dichiarazione_di_residenza_privacy.pdf" },
        { label: "Roma Capitale : changement de résidence", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale : formulaires de l'anagrafe", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF46336" },
        { label: "DPR 223/1989, règlement de l'anagrafe, art. 4 sur la famille anagrafique (PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Normattiva : DPCM 159/2013, règlement ISEE (art. 3, foyer)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.consiglio.ministri:decreto:2013-12-05;159" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026, sur le formulaire de Roma Capitale. Si le formulaire change, les cases peuvent bouger. Vérifiez le PDF actuel sur comune.roma.it avant de le remplir.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Page 1", value: "Deuxième case (depuis l'étranger), vos données, Studente, Dichiara" },
        { label: "Page 2", value: "Adresse seulement, numéro d'appartement et non de chambre" },
        { label: "Page 3", value: "Colocataires inscrits ? Cochez seulement Non sussistono rapporti" },
        { label: "Page 4", value: "Option 2 avec les numéros du reçu d'enregistrement RLI" },
        { label: "Page 5", value: "Coordonnées, date et votre signature" },
      ],
    },
    { type: "h2", id: "form-path", text: "Le formulaire en bref" },
    {
      type: "ol",
      items: [
        "Imprimer le formulaire et réunir passeport, permis, codice fiscale et reçu du bail",
        "Remplir les pages 1 à 5 en majuscules",
        "Joindre les copies et les documents de l'Allegato A",
        "[L'envoyer par un seul canal](article:residenza-rome#book-and-submit)",
        "Attendre le contrôle de la Polizia Locale",
      ],
    },
  ],
};
