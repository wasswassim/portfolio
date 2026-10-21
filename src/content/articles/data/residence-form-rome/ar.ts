import type { ArticleTranslation } from "../../types";

// Arabic version of en.ts (same heading ids, one figure, same tables). Italian form labels stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "how-to-fill-out-the-dichiarazione-di-residenza",
  title: "كيف تملأ استمارة dichiarazione di residenza في روما، صفحة بصفحة",
  subtitle: "استمارة الإقامة للطالب الأجنبي خانة بخانة، والخانة التي قد تفسد الـ ISEE الخاص بك",
  seoTitle: "كيف تملأ استمارة الإقامة dichiarazione di residenza",
  metaDescription:
    "املأ استمارة dichiarazione di residenza في روما كطالب أجنبي خانة بخانة: ماذا تشطب، وماذا تترك فارغًا، وخانة الصفحة 3 التي تؤثر على الـ ISEE الخاص بك.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["ملء استمارة dichiarazione di residenza", "استمارة الإقامة في روما", "dichiarazione di residenza Roma", "استمارة الريزيدنزا للطالب", "الريزيدنزا مع زملاء السكن وISEE"],
  summary:
    "لملء استمارة dichiarazione di residenza في روما كطالب أجنبي، اشطب خانة القدوم من الخارج، واكتب بياناتك وعنوانك الجديد، واشطب الخيار 2 في الصفحة 4 مع بيانات تسجيل عقد الكراء، ثم أرّخ ووقّع الصفحة 5. إذا كان زملاء السكن مسجلين مسبقًا في الشقة، فاشطب فقط الخانة التي تقول إنه لا تربطك بهم أي علاقة عائلية أو عاطفية، لأن الخانة الأخرى تضمّك إلى عائلتهم وتغيّر الـ ISEE الخاص بك.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. يتبع استمارة Roma Capitale كما نُشرت في أكتوبر 2026 والطريقة التي ملأناها بها بأنفسنا. الاستمارات وممارسات المكاتب قد تتغير وتختلف من Municipio إلى آخر، لذلك تحقق دائمًا من الصفحات الرسمية المذكورة أدناه.",
    },
    { type: "p", text: "**الاستمارة dichiarazione di residenza أمامك. أي الخانات تشطب، وماذا تكتب، وماذا يجب أن تترك فارغًا؟**" },
    {
      type: "p",
      text: "الجواب باختصار: في التسجيل الأول القادم من الخارج، تملأ أقل بكثير مما توحي به الاستمارة. تشطب خانة القدوم من الخارج، وتكتب بياناتك وعنوانك الجديد، وتختار سند السكن في الصفحة 4، وتوقّع الصفحة 5. أما خانات أفراد العائلة الذين ينتقلون معك ورخص السياقة والسيارات فتبقى فارغة.",
    },
    {
      type: "p",
      text: "تشرح هذه الصفحة الصفحات الخمس للاستمارة خانة بخانة، كما ملأناها في الـ Municipio الخاص بنا. أما الوثائق وطرق إرسال الاستمارة فتجدها في [كيف تطلب الريزيدنزا في روما](article:residenza-rome).",
    },

    { type: "h2", id: "before-you-start", text: "1. ماذا تحتاج قبل أن تملأ الاستمارة؟" },
    {
      type: "p",
      text: "قبل أن تكتب أي شيء، اطبع الاستمارة الرسمية من [صفحة تغيير الإقامة في Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3) وضع هذه الوثائق بجانبك:",
    },
    {
      type: "ul",
      items: [
        "**جواز سفرك** و**Permesso di soggiorno** (أو وصله).",
        "**الـ codice fiscale**، بأحرفه الستة عشر.",
        "**عقد الكراء** و**وصل تسجيله لدى Agenzia delle Entrate** (*ricevuta di registrazione*، نموذج RLI). الصفحة 4 تطلب أرقامًا موجودة فقط في هذا الوصل.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "اكتب بحروف كبيرة ولا تشطب أبدًا",
      text: "اكتب بحروف لاتينية كبيرة (*stampatello*) بقلم أسود أو أزرق. إذا كانت عندك نسخة مطبوعة واحدة فقط فلا تشطب أي شيء. وإذا لم تكن متأكدًا من رقم ما، اترك ذلك السطر فارغًا واملأه أمام الموظف.",
    },
    {
      type: "p",
      text: "النجوم في الاستمارة مهمة. الحقول التي عليها نجمة واحدة إجبارية: إذا نقص أحدها لا يُقبل الطلب. النجمتان تعنيان بيانات إحصائية، والثلاث نجوم تعني بيانات لوزارة النقل (رخص السياقة والسيارات الإيطالية).",
    },

    { type: "h2", id: "page-1", text: "2. كيف تملأ الصفحة 1 من dichiarazione di residenza؟" },
    { type: "h3", id: "page-1-type", text: "الجدول العلوي: سبب التصريح بالإقامة" },
    {
      type: "p",
      text: "إذا كانت هذه أول residenza لك في إيطاليا، اشطب **الخانة الثانية**، *Dichiarazione di residenza con provenienza dall'estero*، واكتب بجانبها بلدك بالإيطالية (مثلًا TUNISIA). اترك الخانات الأربع الأخرى فارغة.",
    },
    {
      type: "p",
      text: "لا تشطب الخانة الأولى إلا إذا كنت مقيمًا من قبل في بلدية إيطالية أخرى، ولا الرابعة إلا إذا كنت تنتقل من عنوان آخر داخل روما.",
    },
    { type: "h3", id: "page-1-personal-data", text: "القسم 1، Il sottoscritto: بياناتك الشخصية" },
    {
      type: "table",
      caption: "ماذا تكتب في القسم 1 (Il sottoscritto) من الصفحة 1.",
      head: ["الحقل", "ماذا تكتب"],
      rows: [
        ["Cognome, Nome", "اللقب والاسم كما هما في جواز السفر بالضبط."],
        ["Data di nascita", "تاريخ ولادتك، يوم/شهر/سنة."],
        ["Luogo di nascita", "مدينة ولادتك والبلد بين قوسين، مثلًا TUNISI (TUNISIA)."],
        ["Sesso", "M أو F."],
        ["Stato civile", "CELIBE (أعزب) أو NUBILE (عزباء)، وCONIUGATO/A إذا كنت متزوجًا."],
        ["Cittadinanza", "جنسيتك بالإيطالية، مثلًا TUNISINA."],
        ["Codice Fiscale", "الأحرف الستة عشر كلها بخط واضح."],
        ["Posizione nella professione", "اتركه فارغًا إذا كنت لا تعمل."],
        ["Condizione non professionale", "اشطب **Studente** (الخانة 2)."],
        ["Titolo di studio", "أعلى شهادة **تحصلت عليها فعلًا**، وليس الشهادة التي تدرس من أجلها."],
        ["من Patente إلى Ciclomotori", "اترك كل شيء فارغًا. هذا الجزء خاص برخص السياقة الإيطالية والسيارات ذات اللوحات الإيطالية."],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "طالب ماستر؟ اشطب Laurea triennale",
      text: "حقل *Titolo di studio* يسأل عن الشهادة التي عندك. إذا كانت عندك إجازة وتدرس الآن الماستر، اشطب **Laurea triennale** (الخانة 4) وليس Laurea (الخانة 5). صفتك كطالب مذكورة أصلًا في خانة Studente. وإذا كنت تبدأ الإجازة، اشطب **Diploma** (الخانة 3).",
    },
    { type: "h3", id: "page-1-dichiara", text: "أسفل الصفحة 1: Dichiara" },
    {
      type: "p",
      text: "اشطب خانة *Di aver trasferito la dimora abituale al seguente indirizzo*. العنوان نفسه يُكتب في أعلى الصفحة 2.",
    },

    { type: "h2", id: "page-2", text: "3. ماذا تكتب في الصفحة 2؟" },
    {
      type: "p",
      text: "في الصفحة 2 تملأ فقط جدول العنوان في الأعلى: Comune ROMA، وProvincia RM، والشارع (*Via/Piazza*) والرقم (*Numero civico*) كما في عقدك بالضبط. ثم *Scala* (الدرج) و*Piano* (الطابق) و*Interno* (رقم الشقة)، من العقد أيضًا.",
    },
    {
      type: "p",
      text: "اكتب رقم **الشقة** وليس رقم غرفتك. وإذا كان للعمارة درج واحد ولم يذكر العقد أي درج، اترك *Scala* فارغًا.",
    },
    {
      type: "p",
      text: "لا تشطب *Che nell'abitazione sita al nuovo indirizzo si sono trasferiti anche i familiari*، واترك القسمين 2 و3 فارغين تمامًا. هما لأفراد العائلة الذين ينتقلون معك، وليس لزملاء السكن.",
    },

    { type: "h2", id: "page-3", text: "4. كيف تملأ الصفحة 3 إذا كنت تتقاسم الشقة؟" },
    {
      type: "p",
      text: "اترك النصف العلوي من الصفحة 3 فارغًا: هو تكملة جدول السيارات والقسم 4 لفرد آخر من العائلة. النصف السفلي هو المهم إذا كنت تسكن مع آخرين.",
    },
    {
      type: "p",
      text: "انظر إلى خانة *Che nell'abitazione sita al nuovo indirizzo sono già iscritte le seguenti persone*. هي تسأل إن كان هناك أشخاص **مسجلون مسبقًا كمقيمين** في الشقة:",
    },
    {
      type: "ul",
      items: [
        "**إذا لم يكن أي من زملائك مسجلًا هناك**، اترك هذا القسم كله فارغًا.",
        "**إذا كان زميل واحد على الأقل مسجلًا هناك**، اشطب الخانة واكتب بيانات **شخص واحد** مسجل (اللقب، الاسم، مكان وتاريخ الولادة). هذا الشخص يوقّع وترفق نسخة من بطاقة هويته. ثم اشطب الخانة السفلى على اليسار فقط: *Non sussistono rapporti di coniugio, parentela, affinità, adozione, tutela o vincoli affettivi con i componenti della famiglia già residente*.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "لا تشطب أبدًا الخانة السفلى على اليمين إذا كنتم مجرد زملاء سكن",
      text: "خانة *Sussiste il seguente vincolo* تعني أن بينك وبين المسجلين مسبقًا علاقة عائلية أو عاطفية. عندها تضمّك anagrafe إلى عائلتهم (DPR 223/1989، الفصل 4)، والـ ISEE يُحسب على أساس عائلة anagrafe (DPCM 159/2013، الفصل 3). مداخيلهم ستُحسب في الـ ISEE الخاص بك وقد تخسر بسببها المنحة.",
    },
    {
      type: "p",
      text: "لا تعرف إن كان زملاؤك مسجلين؟ اسألهم أو اسأل صاحب الشقة قبل إرسال الاستمارة. وفي الشباك، يتحقق الموظف من ذلك في نظام anagrafe في ثوانٍ، لذلك يمكنك أيضًا ترك هذه الخانة حتى تكون أمامه.",
    },
    {
      type: "p",
      text: "السطر الأخير في الصفحة 3، *Si allegano i seguenti documenti*: اكتب ما ترفقه، مثلًا PASSAPORTO، PERMESSO DI SOGGIORNO، CODICE FISCALE، CONTRATTO DI LOCAZIONE E RICEVUTA DI REGISTRAZIONE.",
    },

    { type: "h2", id: "page-4", text: "5. أي سند سكن تشطب في الصفحة 4؟" },
    {
      type: "p",
      text: "اشطب الخانة الأولى أعلى الصفحة 4، *Di occupare legittimamente l'abitazione in base al titolo di seguito descritto*. ثم اختر **خيارًا واحدًا** من الخيارات الستة. لأغلب الطلبة الذين يكترون غرفة أو شقة، هو الخيار 2:",
    },
    {
      type: "table",
      caption: "سندات السكن الستة في الصفحة 4 ومتى يستعملها الطالب.",
      head: ["الخيار", "متى تشطبه"],
      rows: [
        ["1. Proprietario", "أنت مالك الشقة. ليس للمكترين."],
        ["2. Intestatario del contratto di locazione registrato", "اسمك موجود في عقد كراء مسجل لدى Agenzia delle Entrate. هذه هي الحالة العادية."],
        ["3. Edilizia Residenziale Pubblica", "عقد كراء في سكن عمومي."],
        ["4. Comodato d'uso gratuito", "عقد إعارة مجانية مسجل (بدون كراء)."],
        ["5. Usufruttuario", "لك حق انتفاع."],
        ["6. Altro titolo", "أي سند قانوني آخر، مثلًا ضيف مع تصريح المالك. صِفه في الأسطر."],
      ],
    },
    {
      type: "p",
      text: "في الخيار 2، انقل ثلاث معلومات من **وصل التسجيل** (*ricevuta di registrazione*، نموذج RLI): *presso l'Agenzia delle Entrate di* (المكتب الذي سجّله، أو TELEMATICO إذا سُجّل عبر الإنترنت)، و*in data* (تاريخ التسجيل)، و*al n.* (رقم التسجيل والسلسلة، مثلًا SERIE 3T N. 12345). اترك الخيارات من 3 إلى 6 فارغة.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "المراجع العقارية في الخيار 1",
      text: "الخيار 1 خاص بالمالكين، لكن بعض الموظفين يطلبون من المكترين المراجع العقارية للشقة (*foglio, particella, subalterno*) لإيجادها بسرعة. غالبًا تجدها في عقد الكراء. اترك هذه الأسطر فارغة وانقلها في الشباك فقط إذا طلبها الموظف.",
    },
    {
      type: "p",
      text: "إذا لم يكن اسمك في العقد المسجل (كراء من الباطن، أو أخذ عقد شخص آخر، أو إقامة كضيف)، فقد لا يناسبك الخيار 2. اسأل الـ Municipio أي خيار تستعمل وأي تصريح ترفق، كما هو مشروح في [ما يجب إرفاقه بتصريح الإقامة](article:residenza-rome#documents).",
    },

    { type: "h2", id: "page-5", text: "6. كيف تُنهي الصفحة 5 وتوقّع؟" },
    {
      type: "p",
      text: "اشطب الخانة العليا، *Tutte le comunicazioni inerenti la presente dichiarazione dovranno essere inviate ai seguenti recapiti*، واكتب أين يمكن للمكتب أن يتواصل معك: Comune ROMA، وProvincia RM، وشارعك ورقمه في روما، ورقم هاتفك الإيطالي (*Cellulare*)، وبريدك الإلكتروني أو PEC بحروف كبيرة واضحة. *Telefono* و*Fax* يمكن تركهما فارغين.",
    },
    {
      type: "p",
      text: "اكتب التاريخ بجانب *Data* ووقّع تحت *Firma del richiedente*. اترك *Firma degli altri componenti maggiorenni della famiglia* فارغًا إلا إذا كان أفراد بالغون من عائلتك ينتقلون معك.",
    },
    {
      type: "figure",
      src: "/blog/anagrafe-rome.webp",
      width: 1375,
      height: 898,
      alt: "معبد بورتونوس الروماني أمام مبنى anagrafe الكبير المبني بالآجر في شارع Luigi Petroselli في روما",
      caption: "المبنى المركزي لـ anagrafe في روما. الاستمارة المملوءة تذهب إلى مكتب anagrafe في الـ Municipio الخاص بك.",
      credit: {
        text: "صورة: Indeciso42، ملكية عامة، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Anagrafe_Roma.jpg",
      },
    },

    { type: "h2", id: "hand-in", text: "7. أين تسلّم الاستمارة بعد ملئها؟" },
    {
      type: "p",
      text: "الاستمارة المملوءة والموقّعة تذهب إلى مكتب anagrafe في الـ Municipio الذي تسكن فيه، مع نسخة من وثيقة هويتك ووثائق Allegato A لغير الأوروبيين (Allegato B لمواطني الاتحاد الأوروبي). تقبل Roma Capitale الإرسال عبر PEC، أو الرسالة المضمونة، أو الإيداع في مكتب الضبط (protocollo)، أو الخدمة على الإنترنت. موعد الشباك مخصص لحالات خاصة.",
    },
    {
      type: "p",
      text: "استعمل قناة واحدة فقط. تفاصيل كل قناة، وما يحدث بعدها (مراقبة Polizia Locale خلال 45 يومًا)، تجدها في [كيف ترسل طلب الريزيدنزا في روما](article:residenza-rome#book-and-submit).",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة متكررة",
      items: [
        {
          q: "أي خانة أشطب في dichiarazione di residenza إذا كنت قادمًا من الخارج؟",
          a: "اشطب الخانة الثانية أعلى الصفحة 1، Dichiarazione di residenza con provenienza dall'estero، واكتب بجانبها بلدك بالإيطالية، مثلًا TUNISIA. لا تشطب الخانة الأولى إلا إذا كنت مقيمًا من قبل في بلدية إيطالية أخرى، ولا الرابعة إلا إذا كنت تنتقل داخل روما.",
        },
        {
          q: "ماذا أشطب في Titolo di studio إذا كنت طالب ماستر؟",
          a: "اشطب Laurea triennale (الخانة 4). حقل Titolo di studio يسأل عن أعلى شهادة تحصلت عليها فعلًا، وليس الشهادة التي تدرس من أجلها. دراستك الحالية مذكورة في خانة Studente ضمن Condizione non professionale. والطالب الذي يبدأ الإجازة يشطب Diploma (الخانة 3).",
        },
        {
          q: "هل أذكر زملاء السكن في استمارة الإقامة؟",
          a: "فقط إذا كانوا مسجلين مسبقًا كمقيمين في الشقة. عندها تكتب بيانات واحد منهم في الصفحة 3، ويوقّع هو، وتشطب الخانة التي تقول إنه لا توجد أي علاقة عائلية أو عاطفية. زملاء السكن لا يُكتبون أبدًا في الأقسام من 2 إلى 4، فهي لأفراد العائلة الذين ينتقلون معك.",
        },
        {
          q: "هل يمكن أن تؤثر استمارة الإقامة على الـ ISEE؟",
          a: "نعم. في الصفحة 3، خانة Sussiste il seguente vincolo تضمّك إلى عائلة الأشخاص المسجلين مسبقًا في الشقة، والـ ISEE يُحسب على أساس عائلة anagrafe هذه. إذا كنتم مجرد زملاء سكن، اشطب الخانة الأخرى، Non sussistono rapporti، حتى يبقى الـ ISEE خاصًا بك.",
        },
        {
          q: "أين أجد الأرقام المطلوبة في الصفحة 4؟",
          a: "في وصل تسجيل عقد الكراء لدى Agenzia delle Entrate (ricevuta di registrazione، نموذج RLI)، وليس في العقد نفسه. انقل المكتب الذي سجّله (أو TELEMATICO)، وتاريخ التسجيل، ورقم التسجيل مع السلسلة. اطلب الوصل من صاحب الشقة إذا لم يكن عندك.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Roma Capitale: استمارة dichiarazione di residenza مع Allegato A وB (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/26-Dichiarazione_di_residenza_privacy.pdf" },
        { label: "Roma Capitale: تغيير الإقامة", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale: استمارات anagrafe", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF46336" },
        { label: "DPR 223/1989، نظام anagrafe، الفصل 4 حول عائلة anagrafe (PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Normattiva: DPCM 159/2013، نظام ISEE (الفصل 3، الأسرة)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.consiglio.ministri:decreto:2013-12-05;159" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026، على استمارة Roma Capitale. إذا تغيّرت الاستمارة فقد تتغير أماكن الخانات. راجع ملف PDF الحالي على comune.roma.it قبل أن تملأه.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الصفحة 1", value: "الخانة الثانية (من الخارج)، بياناتك، Studente، Dichiara" },
        { label: "الصفحة 2", value: "العنوان فقط، رقم الشقة وليس رقم الغرفة" },
        { label: "الصفحة 3", value: "زملاء مسجلون؟ اشطب Non sussistono rapporti فقط" },
        { label: "الصفحة 4", value: "الخيار 2 مع أرقام وصل التسجيل RLI" },
        { label: "الصفحة 5", value: "بيانات الاتصال، التاريخ وتوقيعك" },
      ],
    },
    { type: "h2", id: "form-path", text: "الاستمارة باختصار" },
    {
      type: "ol",
      items: [
        "اطبع الاستمارة واجمع الجواز والإقامة والـ codice fiscale ووصل العقد",
        "املأ الصفحات من 1 إلى 5 بحروف كبيرة",
        "أرفق النسخ ووثائق Allegato A",
        "[أرسلها عبر قناة واحدة](article:residenza-rome#book-and-submit)",
        "انتظر مراقبة Polizia Locale",
      ],
    },
  ],
};
