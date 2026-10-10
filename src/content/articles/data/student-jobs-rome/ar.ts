import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms, platform labels and company names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "student-jobs-rome",
  title: "العمل أثناء الدراسة في روما للطلاب التونسيين: قاعدة 20 ساعة وSubito وIndeed ووكالات التشغيل",
  seoTitle: "العمل أثناء الدراسة في روما: Subito والقوانين والوكالات",
  metaDescription:
    "العمل أثناء الدراسة في روما للتونسيين: حد 20 ساعة أسبوعيًا، ونشر إعلان على Subito للعمل في مقهى، وIndeed، ووكالات التشغيل، ووظائف 150 ore، وتفادي الاحتيال",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["العمل أثناء الدراسة في روما", "عمل جزئي للطلاب في روما", "ساعات العمل بإقامة الدراسة في إيطاليا", "Subito lavoro Roma", "وكالات التشغيل في روما", "150 ore Sapienza"],
  summary:
    "بإقامة الدراسة يمكنك العمل كأجير حتى 20 ساعة في الأسبوع و1040 ساعة في السنة، بعقد قانوني مصرّح به؛ والـ20 ساعة سقف أسبوعي وليست معدلًا. أسرع طريق للعمل في المقاهي والمطاعم في روما هو إعلان مجاني تنشره كباحث عن عمل على Subito، إلى جانب Indeed ووكالات التشغيل وعقود 150 ore في جامعتك.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. قواعد العمل لحاملي الإقامة وقواعد المنصات نفسها قد تتغير، لذلك تحقق من المصادر الرسمية المذكورة أدناه قبل أن تمضي أي عقد.",
    },
    { type: "p", text: "**عندك إقامة الدراسة وتبحث عن عمل جزئي في روما. كم ساعة يُسمح لك بالعمل، وأين تجد العمل فعلًا؟**" },
    {
      type: "p",
      text: "الجواب باختصار: يمكنك العمل كأجير حتى **20 ساعة في الأسبوع** و**1040 ساعة في السنة**، بعقد قانوني مصرّح به. في روما، أغلب أعمال الطلاب في المقاهي والبارات والمطاعم، وإعلان مجاني على Subito تقول فيه إنك تبحث عن عمل هو غالبًا أسرع طريق.",
    },
    {
      type: "p",
      text: "هذا هو الجزء الثالث من سلسلة الاستقرار في روما، بعد الحساب البنكي والـresidenza. ولأساسيات شهرك الأول، اقرأ [قسم عمل الطلاب في دليل الوصول إلى روما](article:arriving-in-rome#student-work).",
    },

    { type: "h2", id: "before-you-start", text: "1. قبل أن تبدأ: شريحة هاتف وIBAN وcodice fiscale" },
    {
      type: "ul",
      items: [
        "**شريحة هاتف إيطالية.** يطلب منك Subito تأكيد حسابك برسالة SMS ولا يقبل إلا أرقام دول الاتحاد الأوروبي وسويسرا، لذلك لن يعمل رقم يبدأ بـ`+216`.",
        "**رقم IBAN.** المشغّلون يدفعون الأجر بتحويل بنكي. اقرأ [كيف تفتح حسابًا بنكيًا في إيطاليا كطالب](article:bank-account-italy-student).",
        "**codice fiscale.** يُسند إليك عادة مع طلب الـpermesso عن طريق Questura؛ وإذا احتجته قبل ذلك، اطلبه من أي مكتب لـAgenzia delle Entrate بالاستمارة AA4/8.",
        "**الـresidenza** تسهّل عليك إجراءات محلية كثيرة؛ اقرأ [كيف تسجّل residenza في روما](article:residenza-rome).",
      ],
    },

    { type: "h2", id: "hour-limits", text: "2. كم ساعة يمكنك العمل بإقامة الدراسة؟" },
    {
      type: "p",
      text: "إقامة الدراسة تسمح بالعمل كأجير (lavoro subordinato) حتى **20 ساعة في الأسبوع**، على امتداد 52 أسبوعًا، في حدود سنوية قدرها **1040 ساعة** ([DPR 394/1999، المادة 14، الفقرة 4](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14)).",
    },
    {
      type: "p",
      text: "في مذكرتها بتاريخ **24 ماي 2022**، أوضحت Ispettorato Nazionale del Lavoro أن الـ20 ساعة **سقف أسبوعي وليست معدلًا**: العقد الذي يتجاوز 20 ساعة في الأسبوع غير مطابق حتى لو بقي مجموعك السنوي تحت 1040 ساعة. لا يمكنك أن تعمل 35 ساعة في أوت ثم تعوّض لاحقًا. وإذا أردت العمل أكثر، عليك تحويل إقامتك إلى إقامة عمل قبل انتهاء صلاحيتها.",
    },
    {
      type: "table",
      caption: "أنواع العقود التي يصادفها الطلاب في إيطاليا (أكتوبر 2026).",
      head: ["النوع", "ما هو", "انتبه"],
      rows: [
        ["عقد عمل بدوام جزئي", "الطريق العادي: عقد مصرّح به بساعات أسبوعية محددة", "لا أكثر من 20 ساعة في الأسبوع في العقد"],
        ["عمل عرضي (PrestO)", "أعمال قصيرة تديرها INPS، بسقف 5000 يورو في السنة لكل عامل", "لا يوجد مصدر رسمي يحدد هل تُحسب هذه الساعات ضمن الـ20؛ اسأل المشغّل أو patronato"],
        ["عقد عند الطلب (contratto a chiamata)", "يتصلون بك عند الحاجة؛ متاح لمن هم دون 24 سنة", "سقف 20 ساعة في الأسبوع يبقى ساريًا عليك"],
        ["تعاون جامعي 150 ore", "عمل مدفوع داخل الجامعة، وليس عقد عمل", "تعاون واحد في كل سنة جامعية؛ انظر القسم 6"],
      ],
    },
    { type: "h3", id: "exams-and-renewal", text: "حافظ على نسق امتحاناتك" },
    {
      type: "p",
      text: "العمل لا يمنع تجديد الإقامة، لكن الامتحانات هي التي تحسم. تُجدَّد إقامة الدراسة إذا نجحت في **امتحان واحد في السنة الأولى** و**امتحانين على الأقل في كل سنة بعدها**، ولا يمكن إصدارها لأكثر من **3 سنوات بعد المدة الرسمية لدراستك** ([DPR 394/1999، المادة 46](https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46)). عمل يُفسد امتحاناتك يعرّض إقامتك للخطر.",
    },

    { type: "h2", id: "subito", text: "3. ابحث عن عمل في مقهى أو مطعم على Subito" },
    {
      type: "p",
      text: "[Subito](https://www.subito.it) هو أكبر موقع للإعلانات المبوبة في إيطاليا، وفيه عروض كثيرة في مقاهي وبارات ومطاعم روما. بدل أن تكتفي بالرد على إعلانات المشغّلين، انشر إعلانك أنت في **Lavoro e servizi > Candidati in cerca di lavoro**، وهو قسم الباحثين عن عمل. للأفراد **20 إعلانًا مجانيًا** في هذا القسم، وSubito يرفض عروض العمل التي تطلب مالًا من المترشحين ([قواعد Subito](https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-)).",
    },
    { type: "h3", id: "step-subito-account", text: "الخطوة 1: أنشئ حسابك" },
    {
      type: "p",
      text: "سجّل على الموقع أو على تطبيق Subito ببريدك الإلكتروني، ثم أكّد رقمك الإيطالي بالرمز الذي يصلك في SMS ([التحقق من الهاتف](https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica)).",
    },
    { type: "h3", id: "step-subito-category", text: "الخطوة 2: اختر قسم الباحثين عن عمل" },
    {
      type: "p",
      text: "اضغط على **Inserisci annuncio** واختر **Lavoro e servizi** ثم **Candidati in cerca di lavoro**. تصفّح أولًا [إعلانات الباحثين عن عمل في روما](https://www.subito.it/annunci-lazio/vendita/cerco-lavoro/roma/) لترى كيف يكتب الآخرون إعلاناتهم.",
    },
    { type: "h3", id: "step-subito-ad", text: "الخطوة 3: اكتب إعلانًا قصيرًا وواضحًا" },
    {
      type: "ul",
      items: [
        "**العنوان**: الوظيفة والحي، مثلًا «Cameriere / barista part-time, Roma San Lorenzo».",
        "**اللغات**: العربية والفرنسية والإنجليزية، مع مستواك الحقيقي في الإيطالية.",
        "**أوقات التوفر**: الأيام والساعات التي يمكنك العمل فيها، في حدود 20 ساعة في الأسبوع.",
        "**الحي**: أين تسكن وإلى أي مسافة يمكنك التنقل.",
        "**الصورة**: اختيارية؛ صورة واضحة وبشوشة قد تساعد.",
        "**التواصل**: اطلب من المشغّلين مراسلتك عبر المحادثة في التطبيق.",
      ],
    },
    { type: "h3", id: "step-subito-replies", text: "الخطوة 4: ردّ بسرعة وابقَ في الإطار القانوني" },
    {
      type: "p",
      text: "من تجربتي وتجربة أصدقائي، كانت المكالمات والعروض تصل عادة خلال أسبوع من نشر الإعلان. هذه تجربة شخصية وليست ضمانًا. وعندما يتصل بك مشغّل، اطلب عقدًا مكتوبًا يذكر ساعاتك الأسبوعية قبل أول يوم عمل.",
    },

    { type: "h2", id: "indeed", text: "4. قدّم على Indeed إيطاليا" },
    {
      type: "p",
      text: "على [it.indeed.com](https://it.indeed.com) ابحث عن «part time studenti» واكتب Roma كمكان. ارفع سيرتك الذاتية أو أنشئ واحدة على Indeed ([رفع السيرة الذاتية](https://support.indeed.com/hc/en-us/articles/4408783727629-Uploading-a-Resume-File-to-Your-Profile))؛ بعض العروض تسمح بالتقديم مباشرة عبر **Indeed Apply**، وأخرى تحولك إلى موقع المشغّل. فعّل **تنبيه وظائف** لتصلك العروض الجديدة على بريدك ([تنبيهات الوظائف](https://support.indeed.com/hc/en-us/articles/204488890-Starting-Stopping-and-Managing-Job-Alerts)).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "تحقق من الساعات الأسبوعية",
      text: "كثير من إعلانات «الطلاب» في روما تطلب 25 إلى 30 ساعة في الأسبوع، أي أكثر من الحد القانوني المسموح لك. اقرأ الساعات في كل إعلان قبل أن تقدّم.",
    },

    { type: "h2", id: "agencies", text: "5. وكالات التشغيل المؤقت التي لها فرع في روما" },
    {
      type: "p",
      text: "وكالات التشغيل (agenzie per il lavoro) توظّف في المحلات والمخازن والفنادق والتظاهرات. بحكم القانون، **لا يحق للوكالات المرخّصة أن تأخذ أي مبلغ من العامل** ([D.Lgs. 276/2003، المادة 11](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11)). ويمكنك التحقق من أي وكالة في [سجل وزارة العمل](https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro).",
    },
    {
      type: "table",
      caption: "وكالات تأكّد وجود فرع لها في روما على موقعها الرسمي (أكتوبر 2026).",
      head: ["الوكالة", "ابحث عن فرع في روما"],
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
      text: "خذ معك سيرتك الذاتية وإقامتك (أو الوصل) وcodice fiscale، وقل لهم من البداية إنك تستطيع العمل 20 ساعة في الأسبوع على الأكثر.",
    },

    { type: "h2", id: "university-jobs", text: "6. العمل في الجامعة: تعاون 150 ore ومكاتب التشغيل" },
    {
      type: "p",
      text: "الجامعات تدفع لطلاب مقابل عمل جزئي داخل الحرم الجامعي، وهو **تعاون 150 ore** (borse di collaborazione). عرض Sapienza لسنة 2025/26 تضمّن **250 مكانًا**، بأجر **1295 يورو مقابل 150 ساعة**، معفى من الضرائب. ليس عقد عمل، وكان يشترط **مستوى B2 في الإيطالية وB2 في الإنجليزية** ([عرض Sapienza 2025/26](https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf)). آخر أجل لسنة 2025/26 انتهى، فترقّب العرض الجديد في الخريف.",
    },
    {
      type: "p",
      text: "خبر جيد إذا كانت عندك منحة: عرض DiSCo في Lazio ينص على أن منحته **متوافقة** مع تعاون 150 ore؛ اقرأ [دليل منحة DiSCo](article:lazio-disco-scholarship).",
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: عروض Career Service على JobTeaser والتربصات على TSP ([الفرص](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio)).",
        "**Tor Vergata**: [مكتب الـplacement](https://web.uniroma2.it/it/contenuto/placement) والعروض على `uniroma2.jobteaser.com`.",
        "**Roma Tre**: [مكتب Job Placement](https://www.uniroma3.it/ufficio-job-placement/).",
        "**Porta Futuro Lazio**، الذي تديره DiSCo، له شبابيك في Sapienza وRoma Tre وTor Vergata: مراجعة السيرة الذاتية والتوجيه ودورات مجانية ([portafuturolazio.it](https://www.portafuturolazio.it/)).",
      ],
    },

    { type: "h2", id: "job-scams", text: "7. كيف تكتشف عروض العمل الاحتيالية في روما" },
    {
      type: "p",
      text: "حذّرت Polizia Postale من عروض العمل المزيفة في [19 جانفي 2024](https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html) ومن احتيال «المهام» عبر WhatsApp في [30 جانفي 2025](https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html). كما نبّهت ANPAL إلى [عروض مزيفة تستعمل شعار EURES](https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-). ابتعد إذا كان العرض:",
    },
    {
      type: "ul",
      items: [
        "يطلب منك دفع أي مبلغ: دورة تكوين، أو عدّة، أو معلوم تسجيل.",
        "يطلب نسخة من جواز سفرك أو إقامتك أو رموزك البنكية قبل أي مقابلة.",
        "يصلك على WhatsApp من رقم مجهول ويدفع لك مقابل «الإعجاب» بمنشورات أو كتابة تقييمات.",
        "يَعِد بأجر أعلى بكثير من المعتاد مقابل عمل سهل جدًا.",
        "بلا عقد مكتوب، أو يعرض الدفع نقدًا خارج القانون.",
        "يدفعك لمغادرة Subito أو Indeed والضغط على رابط خارجي.",
      ],
    },
    {
      type: "p",
      text: "بلّغ عن الاحتيال لدى [مكتب Polizia Postale على الإنترنت](https://www.commissariatodips.it/) أو في أي مركز شرطة.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "كم ساعة يمكنني العمل بإقامة الدراسة في إيطاليا؟",
          a: "حتى 20 ساعة في الأسبوع كأجير، بحد سنوي قدره 1040 ساعة. والـ20 ساعة سقف أسبوعي وليست معدلًا، فلا يمكنك العمل أكثر في أسبوع وأقل في الأسبوع التالي.",
        },
        {
          q: "كيف أجد عملًا في مقهى أو مطعم في روما؟",
          a: "انشر إعلانًا مجانيًا في قسم «Candidati in cerca di lavoro» على Subito تذكر فيه الوظيفة والحي ولغاتك وأوقات توفرك. وردّ أيضًا على إعلانات المشغّلين على Subito وIndeed.",
        },
        {
          q: "هل تأخذ وكالات التشغيل في إيطاليا مالًا من العامل؟",
          a: "لا. القانون الإيطالي (D.Lgs. 276/2003، المادة 11) يمنع الوكالات المرخّصة من أخذ أي مبلغ من العامل، فأي وكالة تطلب منك مالًا علامة خطر.",
        },
        {
          q: "هل يمكنني العمل مع منحة DiSCo؟",
          a: "نعم بالنسبة لتعاون 150 ore الجامعي: عرض DiSCo ينص على أنه متوافق مع المنحة. أما الأعمال الأخرى، فتحقق من قواعد الدخل في عرض DiSCo الساري.",
        },
        {
          q: "هل يمكنني التسجيل في Subito برقم هاتف تونسي؟",
          a: "لا. التحقق برسالة SMS في Subito لا يقبل إلا أرقام دول الاتحاد الأوروبي وسويسرا، فاشترِ شريحة إيطالية أولًا.",
        },
        {
          q: "ماذا لو أردت العمل أكثر من 20 ساعة في الأسبوع؟",
          a: "عليك تحويل إقامة الدراسة إلى إقامة عمل قبل انتهاء صلاحيتها. وإلى ذلك الحين، اجعل كل عقد في حدود 20 ساعة في الأسبوع أو أقل.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Normattiva: DPR 394/1999، المادة 14 (العمل بإقامة الدراسة)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art14" },
        { label: "Normattiva: DPR 394/1999، المادة 46 (تجديد إقامة الدراسة)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1999-08-31;394~art46" },
        { label: "Ispettorato Nazionale del Lavoro: مذكرة 24 ماي 2022 حول إقامة الدراسة والعمل", url: "https://portist-int.ispettorato.gov.it/files/2023/01/INL-DCGiuridica-nota-24052022-permesso-soggiorno-per-studio-e-attivita-lavorativa.pdf" },
        { label: "Agenzia delle Entrate: codice fiscale للمواطنين الأجانب", url: "https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria/che-cos-cittadini" },
        { label: "INPS: عقد العمل العرضي (PrestO)", url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.51100.contratto-di-prestazione-occasionale.html" },
        { label: "وزارة العمل الإيطالية: العمل عند الطلب (lavoro intermittente)", url: "https://www.lavoro.gov.it/temi-e-priorita/rapporti-di-lavoro-e-relazioni-industriali/focus-on/disciplina-rapporto-lavoro/pagine/lavoro-intermittente" },
        { label: "Subito: قواعد قسم Lavoro e servizi", url: "https://assistenza.subito.it/hc/it/articles/360001165229-Quali-sono-le-regole-per-la-categoria-Lavoro-e-servizi-" },
        { label: "Subito: حدود نشر الإعلانات", url: "https://assistenza.subito.it/hc/it/articles/11542466735517-Limiti-all-inserimento-degli-annunci" },
        { label: "Subito: التحقق من الهاتف", url: "https://assistenza.subito.it/hc/it/articles/6267550105245-La-verifica-telefonica" },
        { label: "مساعدة Indeed: التقديم على عرض عمل", url: "https://support.indeed.com/hc/en-us/articles/204652920-Applying-for-a-Job-Using-a-Resume-File" },
        { label: "Normattiva: D.Lgs. 276/2003، المادة 11 (لا مبالغ على العامل)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art11" },
        { label: "وزارة العمل الإيطالية: السجل الوطني لوكالات التشغيل", url: "https://www.lavoro.gov.it/strumenti-e-servizi/pagine/albo-nazionale-delle-agenzie-il-lavoro" },
        { label: "Sapienza: عرض تعاون 150 ore لسنة 2025/26", url: "https://web.uniroma1.it/trasparenza/sites/default/files/Bando_2025_2026.pdf" },
        { label: "DiSCo Lazio: عرض الحق في الدراسة 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "Porta Futuro Lazio", url: "https://www.portafuturolazio.it/" },
        { label: "Polizia Postale: كيف تتعرف على عروض العمل المزيفة", url: "https://www.commissariatodips.it/notizie/articolo/job-scams-come-riconoscere-le-false-proposte-di-lavoro/index.html" },
        { label: "Polizia Postale: احتيال «المهام» عبر WhatsApp", url: "https://www.commissariatodips.it/notizie/articolo/task-scam-hai-ricevuto-unofferta-di-lavoro-su-whatsapp-non-cadere-nella-truffa/index.html" },
        { label: "ANPAL: تحذير من عروض العمل المزيفة", url: "https://www.anpal.gov.it/en/-/avviso-importante-attenzione-alle-offerte-di-lavoro-truffa-aggiornamenti-" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. أرقام تعاون 150 ore مأخوذة من عرض Sapienza لسنة 2025/26؛ تحقق من العرض الجديد كل خريف. وقد يغيّر Subito وIndeed قواعدهما في أي وقت.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الحد القانوني", value: "20 ساعة في الأسبوع و1040 ساعة في السنة، كأجير" },
        { label: "أسرع طريق", value: "إعلان مجاني كباحث عن عمل على Subito (تحتاج شريحة إيطالية)" },
        { label: "وكالات التشغيل", value: "لا يحق لها أخذ أي مبلغ من العامل (D.Lgs. 276/2003)" },
        { label: "العمل في الجامعة", value: "تعاون 150 ore، معفى من الضرائب ومتوافق مع DiSCo" },
      ],
    },
    { type: "h2", id: "settling-path", text: "الاستقرار في روما، خطوة بخطوة" },
    {
      type: "ol",
      items: [
        "[فتح حساب بنكي في إيطاليا](article:bank-account-italy-student)",
        "[تسجيل الـresidenza في روما](article:residenza-rome)",
        "إيجاد عمل للطالب في روما",
        "[أول 30 يومًا في روما](article:arriving-in-rome)",
      ],
    },
  ],
};
