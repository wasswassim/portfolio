import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian and portal names stay as they are.
export const fr: ArticleTranslation = {
  slug: "inscription-universite-rome",
  title: "Inscription à l'université en Italie pour les Tunisiens : candidater à Rome",
  seoTitle: "Inscription université en Italie pour les Tunisiens",
  metaDescription:
    "Inscription à l'université à Rome pour les Tunisiens : trouver un cours, candidater à Sapienza, Tor Vergata, Roma Tre, LUISS ou LUMSA, puis faire Universitaly.",
  imageAlt: "Le Colisée à Rome, avec un immense drapeau italien accroché sur le côté et la foule devant",
  keywords: ["inscription université en Italie pour les Tunisiens", "préinscription Universitaly", "étudier à Rome pour les étudiants tunisiens", "candidature Sapienza étudiants internationaux", "universités italiennes pour étudiants étrangers", "Luiss Test"],
  summary:
    "Pour étudier à Rome en tant qu'étudiant tunisien, vous candidatez d'abord auprès de l'université, sur son propre portail (MoveIn pour Sapienza, Delphi pour Tor Vergata, GOMP pour Roma Tre, ou les tests d'admission de LUISS et LUMSA). Une fois admis, vous faites la préinscription sur Universitaly, l'université la valide et votre dossier part à l'ambassade d'Italie à Tunis pour le visa. Pour 2027/28, la date limite du visa pour la Licence et le Master est le 31 octobre 2027.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Avertissement important",
      text: "Ce guide est fourni à titre informatif et ne constitue pas un conseil juridique. Les règles d'admission, les frais et les dates changent chaque année : vérifiez toujours l'appel officiel de votre université et Universitaly avant de candidater ou de payer quoi que ce soit.",
    },
    { type: "p", text: "**Vous vivez en Tunisie et voulez une place dans une université à Rome. Où candidater, et dans quel ordre ?**" },
    {
      type: "p",
      text: "En bref : vous candidatez d'abord auprès de l'université, sur son propre portail. Une fois admis, vous remplissez la préinscription Universitaly, que l'université valide et transmet à l'ambassade d'Italie à Tunis pour votre visa d'études. Pour 2027/28, la date limite du visa pour la Licence et le Master est le 31 octobre 2027.",
    },
    {
      type: "p",
      text: "Voici la partie 2 de notre [guide pour étudier en Italie pour les Tunisiens](article:study-in-italy), qui présente tout le parcours et le [calendrier 2027/28](article:study-in-italy#calendar). Ici : choisir un cours, candidater aux cinq grandes universités de Rome, Universitaly et le doctorat.",
    },

    { type: "h2", id: "how-admission-works", text: "1. Comment fonctionne l'admission pour un étudiant non européen résidant en Tunisie" },
    {
      type: "p",
      text: "Vous êtes considéré comme un étudiant non européen résidant à l'étranger, qui a besoin d'un visa. La circulaire du ministère de l'Université (MUR), valable pour 2026/27 et 2027/28, prévoit deux étapes distinctes :",
    },
    {
      type: "ol",
      items: [
        "**La candidature à l'université** : sur le portail de l'université, avec ses frais et, pour certains cours, un test. C'est l'université qui décide de vous admettre.",
        "**La préinscription Universitaly** : une fois admis, vous remplissez un formulaire sur Universitaly. L'université le vérifie et le valide, puis le dossier arrive à l'ambassade à Tunis. Elle est obligatoire pour tout demandeur de visa, doctorat compris.",
      ],
    },
    {
      type: "p",
      text: "Chaque université fixe ses propres dates : il n'y a pas de date limite nationale unique. La médecine a de nouvelles règles d'accès (loi 26/2025) dont les modalités pour les étudiants internationaux ne sont pas encore publiées ; elle n'est donc pas traitée ici.",
    },

    { type: "h2", id: "find-a-course", text: "2. Trouver un cours et vérifier les conditions d'accès" },
    {
      type: "p",
      text: "Ouvrez la [recherche de cours d'Universitaly](https://www.universitaly.it/cerca-corsi) et filtrez par ville (Roma), type de diplôme (Laurea pour une Licence, Laurea Magistrale pour un Master) et langue d'enseignement. Ouvrez ensuite le cours sur le site de l'université : c'est là que se trouvent l'appel, les frais et les dates. Pour chaque cours, vérifiez :",
    },
    {
      type: "ul",
      items: [
        "**Votre diplôme** : une Licence demande un diplôme de fin d'études secondaires après au moins 12 ans de scolarité, ce que remplit le bac tunisien. Un Master demande une Licence et les relevés de notes. Certains cours ajoutent un test d'aptitude.",
        "**La langue** : les cours en italien passent par un test d'italien de niveau B2 ou plus organisé par l'université (un certificat d'italien B2 vous en dispense). Les cours en anglais demandent un certificat d'anglais B2.",
        "**Vos documents** : les diplômes doivent être légalisés et traduits, et l'université peut demander une DOV ou une attestation CIMEA. Voir [comment légaliser vos documents](article:documents-for-italy#legalise-documents) et [DOV ou CIMEA](article:documents-for-italy#dov-or-cimea).",
      ],
    },

    { type: "h2", id: "public-universities", text: "3. Candidater à Sapienza, Tor Vergata ou Roma Tre" },
    {
      type: "p",
      text: "Chaque université publique utilise son propre portail. Les dates ci-dessous viennent des appels 2026/27 ; 2027/28 devrait suivre un calendrier proche, vérifiez donc l'appel 2027/28.",
    },
    { type: "h3", id: "sapienza", text: "Sapienza : MoveIn, puis Infostud" },
    {
      type: "steps",
      items: [
        { title: "Vérifier les conditions", text: "Lisez la page [admissions de Sapienza](https://www.uniroma1.it/en/en/admissions) et les [conditions académiques 2026/27 (PDF)](https://www.uniroma1.it/sites/default/files/field_file_allegati/academic_requirements_movein_2026-2027_web_20260608.pdf). Certaines Licences en anglais demandent un score SAT d'au moins 960, ou un TOLC." },
        { title: "Candidater sur MoveIn", text: "Créez un compte sur [MoveIn](https://sapienza.gomovein.com/), téléversez vos documents et choisissez votre cours. Chaque candidature coûte 30 EUR (sans exonération), 2 au maximum ; la vérification d'éligibilité coûte 10 EUR." },
        { title: "Surveiller la période", text: "En 2026/27, elle allait du 22 décembre 2025 au 15 mai 2026 pour les candidats non européens avec visa. Pour 2027/28, elle devrait ouvrir vers décembre 2026 (vérifiez l'appel 2027/28)." },
        { title: "Après l'admission", text: "Faites la préinscription Universitaly (date limite 30 juin en 2026), puis inscrivez-vous sur [Infostud](https://www.studenti.uniroma1.it/webapps/infostud/registrazione). Questions : recruitment@uniroma1.it." },
      ],
    },
    { type: "h3", id: "tor-vergata", text: "Tor Vergata : Delphi et un appel par cours" },
    {
      type: "steps",
      items: [
        { title: "Trouver l'appel de votre cours", text: "Partez de la page [admissions de Tor Vergata](https://web.uniroma2.it/en/percorso/admissions). Chaque cours a sa date et ses frais : en 2026/27, le MSc in Economics fermait le 29 mai (30 EUR) et EEBL le 28 mai (50 EUR)." },
        { title: "Candidater sur Delphi", text: "Inscrivez-vous sur [Delphi](https://delphi.uniroma2.it/), téléversez vos documents et payez les frais." },
        { title: "Universitaly", text: "En 2026, la préinscription devait être faite avant le 31 juillet, et avant le test pour les cours qui en ont un. Questions : international.students@uniroma2.it." },
      ],
    },
    { type: "h3", id: "roma-tre", text: "Roma Tre : GOMP et Universitaly en parallèle" },
    {
      type: "steps",
      items: [
        { title: "Lire le guide", text: "Téléchargez le [guide de candidature 2026/27 (PDF)](https://orientamento.uniroma3.it/wp-content/uploads/sites/9/file_locked/2026/06/GUIDE-HOW-TO-APPLY-ENG-2026-27.pdf) et lisez la [page des admissions internationales](https://orientamento.uniroma3.it/en/about-roma-tre/international-students-admissions/)." },
        { title: "Candidater sur GOMP et Universitaly", text: "Inscrivez-vous sur [GOMP](https://portalestudente.uniroma3.it/) et téléversez les mêmes documents sur GOMP et sur Universitaly (date limite 15 septembre en 2026)." },
        { title: "Test d'italien", text: "Pour les cours en italien, réservez le test d'italien B2 via GOMP, sauf si vous avez un certificat B2. Questions : international.admissions@uniroma3.it." },
      ],
    },
    {
      type: "p",
      text: "Les frais de scolarité publics dépendent des revenus et du pays (le forfait de Sapienza pour la Tunisie, bande A, est de 300 EUR par an). Voir [les coûts dans la partie 1](article:study-in-italy#costs) et la [bourse DiSCo](article:lazio-disco-scholarship).",
    },

    { type: "h2", id: "private-universities", text: "4. Universités privées : LUISS et LUMSA" },
    { type: "h3", id: "luiss", text: "LUISS : le Luiss Test" },
    {
      type: "p",
      text: "Les étudiants non européens entrent par le Luiss Test ou par des certifications internationales ([page LUISS pour les étudiants non européens](https://www.luiss.it/en/orientation-and-admissions/admission-procedures/admission-bachelors-and-masters-degree-programs-law/non-eu-students)). Pour 2027/28 : candidatures d'octobre 2026 au 10 février 2027, test du 22 au 26 février 2027, inscription avant le 4 mai 2027, frais de 150 EUR. Les frais de scolarité de première année de Licence sont de 15 000 EUR par an, forfaitaires, plus la taxe régionale. Il existe des bourses pour les étudiants non européens (20 exonérations totales en 2025/26), mais l'appel 2027/28 n'est pas encore publié.",
    },
    { type: "h3", id: "lumsa", text: "LUMSA : des Licences en italien" },
    {
      type: "p",
      text: "Les Licences de LUMSA sont enseignées en italien (B2 nécessaire) et commencent par un test d'admission en ligne (100 EUR). Pour un Master, passez par la [page de candidature de LUMSA](https://www.lumsa.it/en/apply-to-enroll) (100 EUR aussi). Les étudiants résidant à l'étranger paient un forfait de 4 390 EUR par an ([guide de l'étudiant 2026/27, PDF](https://backoffice.lumsa.it/sites/default/files/file/3564/2026-07/guida-pratica-per-lo-studente-aa2627.pdf)). Dans les deux universités privées, la préinscription Universitaly reste obligatoire après l'admission.",
    },

    { type: "h2", id: "compare-universities", text: "5. Les cinq universités côte à côte" },
    {
      type: "table",
      caption: "Comment candidater dans chaque université de Rome (appels 2026/27 sauf mention contraire ; vérifiez l'appel 2027/28)",
      head: ["Université", "Comment candidater", "Période habituelle", "Frais de candidature"],
      rows: [
        ["Sapienza", "MoveIn, puis Universitaly et Infostud", "Environ de décembre à mai", "30 EUR chacune (2 max.)"],
        ["Tor Vergata", "Delphi, puis Universitaly", "Selon le cours, souvent fin mai", "30 à 50 EUR"],
        ["Roma Tre", "GOMP et Universitaly", "Voir le guide annuel", "Voir le guide"],
        ["LUISS", "Luiss Test, puis Universitaly", "Octobre 2026 au 10 février 2027", "150 EUR"],
        ["LUMSA", "Test en ligne, puis Universitaly", "Voir la page de LUMSA", "100 EUR"],
      ],
    },
    {
      type: "gallery",
      caption: "Les cinq universités de ce guide : trois publiques (Sapienza, Tor Vergata, Roma Tre) et deux privées (LUISS, LUMSA).",
      items: [
        {
          src: "/blog/gallery/uni-sapienza.webp",
          width: 800,
          height: 600,
          alt: "Le rectorat de l'université Sapienza de Rome et la statue de Minerve",
          label: "Sapienza",
          credit: { text: "Góngora, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:La_Sapienza_Universit%C3%A0_di_Roma.jpg" },
        },
        {
          src: "/blog/gallery/uni-tor-vergata.webp",
          width: 800,
          height: 600,
          alt: "Les bâtiments modernes du rectorat de l'université de Rome Tor Vergata",
          label: "Tor Vergata",
          credit: { text: "Didimo69, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Rettorato_dell%27Universit%C3%A0_di_Roma_Tor_Vergata.jpg" },
        },
        {
          src: "/blog/gallery/uni-roma-tre.webp",
          width: 800,
          height: 451,
          alt: "Le bâtiment en verre du rectorat de l'université Roma Tre, quartier Ostiense",
          label: "Roma Tre",
          credit: { text: "Dobroš, CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:University_Roma_Tre.jpg" },
        },
        {
          src: "/blog/gallery/uni-luiss.webp",
          width: 800,
          height: 450,
          alt: "La Villa Blanc sur la Via Nomentana à Rome, restaurée par la LUISS",
          label: "LUISS",
          credit: { text: "Carlo Dani, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Villa_Blanc_ristrutturata.jpg" },
        },
        {
          src: "/blog/gallery/uni-lumsa.webp",
          width: 800,
          height: 550,
          alt: "Un bâtiment de la LUMSA via della Traspontina, avec la coupole de Saint-Pierre derrière",
          label: "LUMSA",
          credit: { text: "Vitasonline, Public domain", url: "https://commons.wikimedia.org/wiki/File:Traspontina-SanPietro.jpg" },
        },
      ],
    },

    { type: "h2", id: "universitaly-pre-enrolment", text: "6. La préinscription Universitaly, étape par étape" },
    { type: "p", text: "La préinscription n'est pas une deuxième candidature : c'est le formulaire qui relie votre admission à votre visa." },
    {
      type: "steps",
      items: [
        { title: "Créer votre compte", text: "Inscrivez-vous sur [Universitaly](https://universitaly-private.cineca.it/index.php/login) avec votre nom exactement comme sur votre passeport, en lettres latines, sans accents. Utilisez une adresse e-mail que vous consultez : la convocation pour le visa y arrivera." },
        { title: "Remplir le formulaire", text: "Choisissez l'université et le cours où vous êtes admis (un cours par préinscription), l'ambassade d'Italie à Tunis, et les études comme motif du séjour." },
        { title: "Téléverser et envoyer", text: "Téléversez votre passeport, votre diplôme, vos relevés de notes et votre certificat de langue, préparés comme dans [notre guide des documents](article:documents-for-italy). Envoyez et gardez le récapitulatif pour le visa." },
      ],
    },
    {
      type: "p",
      text: "L'université valide ensuite votre dossier. Nouveau depuis 2026/27 : chaque université ne peut valider que ses places réservées aux étudiants étrangers plus 20 %, puis Universitaly bloque les validations suivantes. Candidatez donc tôt. Après la validation, ALMAVIVA vous envoie une date par e-mail : voir [le rendez-vous pour le visa](article:italy-student-visa#almaviva-appointment). La date limite du visa 2027/28 est le 31 octobre 2027. D'autres réponses dans la [FAQ d'Universitaly (PDF)](https://universitaly-private.cineca.it/uploads/universitaly-pubblico/FAQ.pdf).",
    },

    { type: "h2", id: "phd", text: "7. Candidater à un doctorat à Rome" },
    {
      type: "p",
      text: "Chaque université publie un appel de doctorat par an, en général au printemps. Les appels 2026 (42e cycle) ont fermé le 9 juin (Tor Vergata), le 17 juin (Sapienza) et le 14 juillet (Roma Tre). Le 43e cycle (2027/28) est attendu au printemps 2027 (vérifiez chaque appel) :",
    },
    {
      type: "ul",
      items: [
        "[Sapienza : admission au doctorat](https://www.uniroma1.it/it/pagina/ammissione-ai-corsi-di-dottorato)",
        "[Tor Vergata : appels de doctorat](https://dottorati.uniroma2.it/42-ciclo_p10363.aspx)",
        "[Roma Tre : appel de doctorat](https://apps.uniroma3.it/public/bando2026)",
      ],
    },
    {
      type: "p",
      text: "Vous candidatez avec votre Master et vos relevés de notes. Une fois sélectionné, vous faites quand même la préinscription Universitaly ; il n'y a pas de date fixe pour le visa, mais faites la demande avant le début des cours.",
    },

    {
      type: "faq",
      id: "faq",
      title: "Questions fréquentes",
      items: [
        {
          q: "Puis-je candidater à plusieurs universités italiennes ?",
          a: "Oui, chaque université a sa propre candidature et ses frais (Sapienza autorise 2 candidatures). Mais une préinscription Universitaly couvre un seul cours : vous en choisissez un une fois admis.",
        },
        {
          q: "Universitaly, est-ce la même chose que candidater à l'université ?",
          a: "Non. Vous candidatez d'abord sur le portail de l'université ; Universitaly est la préinscription que l'université valide pour votre visa.",
        },
        {
          q: "Faut-il le SAT pour étudier à Rome ?",
          a: "Seulement pour certains cours : à Sapienza, certaines Licences en anglais demandent un score SAT d'au moins 960, ou un TOLC.",
        },
        {
          q: "Peut-on étudier en anglais à Rome ?",
          a: "Oui, certains cours sont enseignés en anglais. Il faut un certificat d'anglais B2 ; utilisez le filtre de langue de la recherche de cours d'Universitaly.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Sources officielles",
      items: [
        { label: "Universitaly : étudiants internationaux", url: "https://www.universitaly.it/studenti-stranieri" },
        { label: "Universitaly : recherche de cours", url: "https://www.universitaly.it/cerca-corsi" },
        { label: "Circulaire du MUR sur les étudiants internationaux 2026/27 et 2027/28 (PDF)", url: "https://universitaly-private.cineca.it/uploads/universitaly-pubblico/Circolare_2026-2027_studenti_internazionali.pdf" },
        { label: "FAQ d'Universitaly (PDF)", url: "https://universitaly-private.cineca.it/uploads/universitaly-pubblico/FAQ.pdf" },
        { label: "Sapienza : admissions", url: "https://www.uniroma1.it/en/en/admissions" },
        { label: "Tor Vergata : admissions", url: "https://web.uniroma2.it/en/percorso/admissions" },
        { label: "Roma Tre : admissions des étudiants internationaux", url: "https://orientamento.uniroma3.it/en/about-roma-tre/international-students-admissions/" },
        { label: "LUISS : admission des étudiants non européens", url: "https://www.luiss.it/en/orientation-and-admissions/admission-procedures/admission-bachelors-and-masters-degree-programs-law/non-eu-students" },
        { label: "LUMSA : candidater", url: "https://www.lumsa.it/en/apply-to-enroll" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Note de mise à jour",
      text: "Dernière vérification : octobre 2026. Les dates 2027/28 indiquées comme attendues reposent sur les appels 2026/27 et doivent être confirmées dans le nouvel appel de chaque université. Vérifiez toujours auprès de l'université et d'Universitaly avant de candidater ou de payer.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "Ordre", value: "D'abord l'université, ensuite Universitaly" },
        { label: "Universitaly", value: "Un cours par préinscription, validée par l'université" },
        { label: "Date limite du visa 2027/28", value: "31 octobre 2027 (Licence et Master)" },
        { label: "Candidatez tôt", value: "Les validations par université sont plafonnées depuis 2026/27" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "Le parcours complet en bref" },
    {
      type: "ol",
      items: [
        "[Préparer et calendrier](article:study-in-italy)",
        "Choisir une université et candidater",
        "[Préparer et traduire les documents](article:documents-for-italy)",
        "[Bourse DiSCo](article:lazio-disco-scholarship)",
        "[Visa et compte bloqué](article:italy-student-visa)",
        "[Arrivée à Rome](article:arriving-in-rome)",
        "[Logement](article:student-housing-rome)",
      ],
    },
  ],
};
