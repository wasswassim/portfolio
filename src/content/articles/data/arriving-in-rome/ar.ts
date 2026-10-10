import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms and names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "arriving-in-rome-as-a-student",
  title: "الوصول إلى روما كطالب: إقامة الدراسة في إيطاليا وأول 30 يومًا",
  seoTitle: "إقامة الدراسة في إيطاليا: أول 30 يومًا للطالب في روما",
  metaDescription:
    "الوصول إلى روما كطالب تونسي: طلب Permesso di soggiorno خلال 8 أيام عمل، وcodice fiscale، وفتح حساب بنكي، وإتمام التسجيل، وخطوات DiSCo، وميزانية الشهر الأول.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["إقامة الدراسة في إيطاليا", "الوصول إلى روما للدراسة", "permesso di soggiorno per studio", "codice fiscale", "حساب بنكي للطالب في إيطاليا", "عمل الطلاب في إيطاليا"],
  summary:
    "خلال 8 أيام عمل من وصولك إلى إيطاليا، تطلب إقامة الدراسة بإرسال الظرف ذي الشريط الأصفر من مكتب بريد فيه Sportello Amico (حوالي 116.46 يورو في المجموع)، ويُسند إليك codice fiscale مع هذا الطلب. بعد ذلك افتح حسابًا، وأتمم تسجيلك في الجامعة، وأرسل وثائق التسجيل إلى بنكك في تونس، وأكمل خطوات DiSCo.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. قواعد الإقامة والرسوم وإجراءات الجامعات قد تتغير، لذلك تحقق دائمًا من المصادر الرسمية المذكورة أدناه قبل أن تدفع أو تمضي أي شيء.",
    },
    { type: "p", text: "**وصلت إلى روما بتأشيرة الدراسة. ماذا عليك أن تفعل، وبأي ترتيب، خلال شهرك الأول؟**" },
    {
      type: "p",
      text: "الجواب باختصار: خلال 8 أيام عمل من وصولك، اطلب إقامة الدراسة (Permesso di soggiorno per studio) من مكتب البريد. يُسند إليك codice fiscale مع هذا الطلب، ووصل البريد يسمح لك بفتح حساب وإتمام التسجيل وإكمال خطوات DiSCo.",
    },
    {
      type: "p",
      text: "هذا هو الجزء السادس من [دليل الدراسة في إيطاليا للطلاب التونسيين](article:study-in-italy)، ويأتي بعد التأشيرة: أول 30 يومًا لك في روما، خطوة بخطوة.",
    },

    { type: "h2", id: "first-30-days", text: "1. أول 30 يومًا في روما، بالترتيب" },
    {
      type: "ol",
      items: [
        "خلال 8 أيام عمل: أرسل ظرف طلب الإقامة من مكتب البريد.",
        "فقط إذا احتاجه منك صاحب سكن أو بنك قبل ذلك: اطلب codice fiscale من Agenzia delle Entrate.",
        "افتح بطاقة Postepay Evolution أو حسابًا بنكيًا.",
        "أتمم تسجيلك في الجامعة.",
        "أرسل وثائق التسجيل إلى بنكك في تونس.",
        "DiSCo: ارفع وصل الإقامة، واحجز موعدًا في CAF شريك، وأمضِ ISEEUP، وأضف IBAN وعنوان PEC.",
        "اختر تغطيتك الصحية، ثم ابحث عن عمل طلابي.",
      ],
    },

    { type: "h2", id: "residence-permit", text: "2. كيف تطلب إقامة الدراسة في إيطاليا؟" },
    {
      type: "p",
      text: "يجب أن تقدم الطلب خلال **8 أيام عمل** من دخولك إلى إيطاليا ([Polizia di Stato](https://www.poliziadistato.it/articolo/225)).",
    },
    { type: "h3", id: "step-postal-kit", text: "الخطوة 1: احصل على الظرف ذي الشريط الأصفر" },
    {
      type: "p",
      text: "اذهب إلى مكتب بريد فيه شباك **Sportello Amico** واطلب ظرف طلب الإقامة (kit) ذا الشريط الأصفر. يشرح موقع [Poste Italiane](https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno) كيفية تعبئته. اكتب اسمك تمامًا كما هو في جواز السفر.",
    },
    { type: "h3", id: "step-kit-contents", text: "الخطوة 2: ضع الوثائق الصحيحة في الظرف" },
    {
      type: "ul",
      items: [
        "استمارة الطلب الموجودة في الظرف، معبأة.",
        "نسخة من جواز السفر، بما فيها صفحة التأشيرة.",
        "نسخة من التأمين الصحي صالحة طوال مدة الإقامة، وإثبات مواردك المالية (يمكن لمكتب الطلبة الدوليين في جامعتك تأكيد القائمة الكاملة).",
        "طابع جبائي (marca da bollo) بقيمة 16 يورو، يُشترى من محل التبغ (tabaccheria).",
      ],
    },
    { type: "h3", id: "step-pay-receipt", text: "الخطوة 3: ادفع واحتفظ بالوصل" },
    {
      type: "table",
      caption: "تكلفة طلب الإقامة في مكتب البريد (مبالغ تم التحقق منها في أكتوبر 2026).",
      head: ["البند", "التكلفة"],
      rows: [
        ["طابع جبائي (marca da bollo)", "16 يورو"],
        ["رسوم خدمة البريد", "30 يورو"],
        ["Bollettino: البطاقة الإلكترونية 30.46 يورو + مساهمة 40 يورو (إقامة من 3 إلى 12 شهرًا)", "70.46 يورو"],
        ["**المجموع**", "**حوالي 116.46 يورو**"],
      ],
    },
    {
      type: "p",
      text: "يسلمك الموظف **وصلًا** (ricevuta) فيه اسم مستخدم وكلمة سر. احتفظ به مع جواز سفرك: ستطلبه منك الجامعة والبنك وDiSCo.",
    },
    { type: "h3", id: "step-questura", text: "الخطوة 4: اذهب إلى Questura لأخذ البصمات" },
    {
      type: "p",
      text: "تتلقى أيضًا رسالة استدعاء فيها موعدك في Questura، حيث تؤخذ بصماتك. تابع حالة إقامتك على [بوابة Polizia di Stato](https://questure.poliziadistato.it/stranieri/) ببيانات الوصل. تذكر Polizia أن المعالجة تستغرق حوالي 60 يومًا، بينما تنبه Sapienza إلى أنها قد تصل إلى حوالي 90 يومًا.",
    },
    {
      type: "figure",
      src: "/blog/questura-verbania.webp",
      width: 1600,
      height: 1067,
      alt: "مبنى Questura في فيربانيا بإيطاليا، وعند مدخله العلمان الإيطالي والأوروبي",
      caption: "مقر Questura (مديرية الشرطة الإقليمية)، وهو المكتب الذي يتولى ملفات الإقامة.",
      credit: {
        text: "صورة: Francoerbi، CC0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Verbania_Questura_del_VCO.jpg",
      },
    },
    {
      type: "callout",
      tone: "warning",
      title: "لا تغادر إيطاليا قبل الحصول على الإقامة",
      text: "تنصح سفارة إيطاليا في تونس الطلبة بعدم مغادرة إيطاليا قبل صدور بطاقة الإقامة.",
    },
    {
      type: "p",
      text: "يمكن لطلبة Sapienza الحصول على مساعدة داخل الحرم الجامعي: تذكر [صفحة الإقامة في Sapienza](https://www.uniroma1.it/en/pagina/residence-permit-study-purposes) شباك الشرطة في الجامعة ومكتب الهجرة في Questura (Via Teofilo Patini 23).",
    },

    { type: "h2", id: "codice-fiscale", text: "3. كيف تحصل على codice fiscale؟" },
    {
      type: "p",
      text: "codice fiscale هو رقمك الجبائي الإيطالي، وتحتاجه لعقد كراء أو بنك أو اشتراك هاتف. في الغالب لا تطلبه بنفسك: تسنده Questura مع طلب الإقامة.",
    },
    {
      type: "p",
      text: "إذا احتجته قبل ذلك، فاذهب إلى أي مكتب لـ **Agenzia delle Entrate** مع الاستمارة AA4/8 وجواز سفرك الذي يحمل التأشيرة. تشرح [مطوية Agenzia delle Entrate للمواطنين الأجانب](https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716) الإجراء. وفي Sapienza يمكن لشباك HELLO مساعدتك في تعبئة الاستمارات.",
    },

    { type: "h2", id: "bank-account", text: "4. فتح حساب بنكي للطالب في إيطاليا" },
    {
      type: "p",
      text: "تحتاج إلى IBAN من أجل DiSCo والكراء والأجر. هناك خياران شائعان:",
    },
    {
      type: "ul",
      items: [
        "**Postepay Evolution**: بطاقة مسبقة الدفع مع IBAN، بـ 5 يورو عند الإصدار ثم 19 يورو في السنة ([Poste Italiane](https://www.poste.it/carte-postepay/postepay-evolution)).",
        "**حساب بنكي**: تطلب البنوك codice fiscale؛ قارن الرسوم الشهرية.",
      ],
    },
    {
      type: "p",
      text: "حسب [Banca d'Italia](https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html)، يحق لكل شخص مقيم بصفة قانونية في الاتحاد الأوروبي فتح حساب أساسي (conto di base)، ولا يجوز للبنك رفض وصل الإقامة كوثيقة هوية.",
    },

    { type: "h2", id: "finalise-enrolment", text: "5. إتمام التسجيل الجامعي وملف المنحة" },
    {
      type: "p",
      text: "لا يكتمل تسجيلك إلا بعد أن تتحقق الجامعة من وثائقك الأصلية:",
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: أرسل وصل الإقامة إلى [International Student Office](https://www.uniroma1.it/en/pagina/international-student-office)، ثم احجز موعدًا للتحقق من وثائقك الأصلية.",
        "**Tor Vergata**: قدّم تأشيرتك ووثائقك الأصلية والإقامة (أو الوصل) في International Students Office، ثم ادفع القسط الأول ([الوثائق المطلوبة](https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/)).",
        "**Roma Tre**: احجز موعدًا في مكتب الشهادات الأجنبية، Via Ostiense 129، واحمل وثائقك الأصلية ([تسجيل غير الأوروبيين](https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/)).",
      ],
    },
    { type: "h3", id: "unlock-transfers", text: "فتح التحويلات الشهرية من تونس" },
    {
      type: "p",
      text: "بعد التسجيل، أرسل وثائق التسجيل إلى بنكك في تونس. عندها يمكن للبنك أن يسمح لوالديك بتحويل ما يصل إلى **4,000 دينار شهريًا** (حوالي 1,188 يورو حسب سعر البنك المركزي التونسي في 7 أكتوبر 2026)، كما هو مشروح في [قسم الحساب المجمّد](article:italy-student-visa#blocked-account).",
    },
    { type: "h3", id: "disco-after-arrival", text: "أكمل خطوات DiSCo" },
    {
      type: "ul",
      items: [
        "ارفع بطاقة الإقامة أو وصل البريد في Profile على DiSCo في حدود 1 ديسمبر إذا طلبت سكنًا، وإلا ففي حدود 10 فيفري (تحقق من إعلان 2027/28).",
        "احجز موعدًا في [CAF شريك لـ DiSCo](https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf) وأمضِ ISEEUP في حدود 10 ديسمبر (تحقق من إعلان 2027/28).",
        "أضف IBAN وعنوان PEC (بريد إلكتروني مصادق عليه) في Profile.",
      ],
    },
    {
      type: "p",
      text: "إذا أُنجز ISEEUP بشكل صحيح، تأتي الدفعات الأولى بعد ذلك؛ اطلع على [مواعيد صرف منحة DiSCo](article:lazio-disco-scholarship#payments).",
    },
    { type: "h3", id: "health-cover", text: "اختر تغطيتك الصحية" },
    {
      type: "p",
      text: "يمكنك التسجيل طوعًا في المنظومة الصحية الوطنية (SSN) بحوالي 700 يورو في السنة ([Tor Vergata، 2024](https://web.uniroma2.it/en/contenuto/health-insurance))، أو الإبقاء على تأمين خاص. تحقق من المبلغ الحالي لدى ASL أو جامعتك.",
    },

    { type: "h2", id: "first-month-budget", text: "6. ميزانية الشهر الأول في روما" },
    {
      type: "p",
      text: "يمكن لبنكك في تونس أن يحوّل منحة استقرار (allocation d'installation) تصل إلى **6,000 دينار** في السنة الجامعية (حوالي 1,782 يورو حسب سعر البنك المركزي التونسي في 7 أكتوبر 2026). التحويلات الشهرية لا تبدأ إلا بعد وصول وثائق التسجيل إلى البنك، لذلك يجب أن يكفيك هذا المبلغ حتى ذلك الحين.",
    },
    {
      type: "table",
      caption: "كيف تصرف منحة الاستقرار (6,000 دينار) بحذر (المبلغان الأولان فقط مؤكدان).",
      head: ["البند", "التكلفة", "نصيحة"],
      rows: [
        ["ظرف طلب الإقامة", "حوالي 116 يورو (مؤكد)", "ادفعه أولًا، في أسبوعك الأول."],
        ["Postepay Evolution", "5 يورو + 19 يورو في السنة (مؤكد)", "يمنحك IBAN من أجل DiSCo والكراء."],
        ["اشتراك النقل العمومي", "تحقق من الأسعار الحالية", "قارن الاشتراك الشهري واشتراك الطلبة على موقع ATAC."],
        ["شريحة الهاتف والشهر الأول", "تحقق من الأسعار الحالية", "قارن العروض قبل الشراء."],
        ["الأكل لمدة شهر", "تحقق من الأسعار الحالية", "اطبخ في البيت؛ وجبات DiSCo لا تبدأ إلا بعد إسناد المنحة."],
        ["الغرفة: أول كراء والضمان", "تحقق من الأسعار الحالية", "اطلع على [دليل سكن الطلبة في روما](article:student-housing-rome)."],
        ["احتياطي للطوارئ", "10 إلى 15% من المنحة", "لا تلمسه إلا عند الضرورة."],
      ],
    },
    {
      type: "p",
      text: "اشترِ المستعمل على [Subito](https://www.subito.it): الأثاث والدراجة والكتب. ولا تدفع أبدًا ضمانًا قبل أن ترى الغرفة؛ اقرأ [كيف تتجنب عمليات الاحتيال في السكن](article:student-housing-rome#avoid-scams).",
    },

    { type: "h2", id: "student-work", text: "7. هل يمكنك العمل أثناء الدراسة في إيطاليا؟" },
    {
      type: "p",
      text: "نعم، في حدود معينة: تسمح إقامة الدراسة بالعمل حتى **20 ساعة في الأسبوع**، وبحد أقصى **1,040 ساعة في السنة** ([DPR 394/1999، المادة 14](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14)). إذا لم يكن لديك سوى وصل الإقامة الأولى، فتحقق مع Questura أو جامعتك قبل أن تبدأ أي عمل.",
    },
    {
      type: "ul",
      items: [
        "مكاتب التشغيل في الجامعات: [Sapienza](https://www.uniroma1.it/it/pagina/studenti-e-laureati-opportunita-di-lavoro-e-tirocinio)، [Tor Vergata](https://placement.uniroma2.it/)، [Roma Tre](https://uniroma3.jobsoul.it/studenti-e-laureati/ufficio-job-placement).",
        "Regione Lazio: [عروض الشغل](https://www.regione.lazio.it/cittadini/lavoro/offerte-lavoro) و[SpazioLavoro](https://spaziolavoro.regione.lazio.it/).",
        "مواقع التشغيل: [عروض الشغل على Subito](https://www.subito.it/annunci-italia/vendita/offerte-lavoro/)، [InfoJobs](https://www.infojobs.it)، [Indeed](https://it.indeed.com).",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "تجنب العمل غير المصرح به",
      text: "العمل غير المصرح به (lavoro nero) يتركك بلا تأمين ولا حماية قانونية. اقرأ [صفحة وزارة العمل الإيطالية حول الاستغلال في العمل](https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default) واطلب عقدًا مكتوبًا.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة متكررة",
      items: [
        {
          q: "كم يومًا لدي لطلب Permesso di soggiorno؟",
          a: "8 أيام عمل من وصولك إلى إيطاليا. تقدم الطلب بإرسال الظرف ذي الشريط الأصفر من مكتب بريد فيه شباك Sportello Amico.",
        },
        {
          q: "كم تكلف إقامة الدراسة في إيطاليا؟",
          a: "حوالي 116.46 يورو في مكتب البريد: طابع جبائي بـ 16 يورو، ورسوم بريد بـ 30 يورو، وbollettino بـ 70.46 يورو (مبالغ تم التحقق منها في أكتوبر 2026).",
        },
        {
          q: "كيف أحصل على codice fiscale في روما؟",
          a: "يُسند عادة مع طلب الإقامة. إذا احتجته قبل ذلك، فاذهب إلى أي مكتب لـ Agenzia delle Entrate مع الاستمارة AA4/8 وجواز سفرك الذي يحمل التأشيرة.",
        },
        {
          q: "هل يمكنني فتح حساب بنكي بوصل الإقامة؟",
          a: "نعم. حسب Banca d'Italia، لا يجوز للبنك رفض وصل الإقامة كوثيقة هوية، ويحق لكل مقيم بصفة قانونية في الاتحاد الأوروبي فتح حساب أساسي.",
        },
        {
          q: "هل يمكنني العودة إلى تونس وأنا أنتظر الإقامة؟",
          a: "تنصح سفارة إيطاليا في تونس بعدم مغادرة إيطاليا قبل صدور بطاقة الإقامة. خطط لسفرك بعد استلامها.",
        },
        {
          q: "هل يمكن للطلبة الأجانب العمل في إيطاليا؟",
          a: "نعم، حتى 20 ساعة في الأسبوع و1,040 ساعة في السنة. إذا لم يكن لديك سوى وصل الإقامة الأولى، فتحقق مع Questura أو جامعتك قبل أن تبدأ.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Polizia di Stato: إقامة الدراسة", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Polizia di Stato: متابعة حالة الإقامة", url: "https://questure.poliziadistato.it/stranieri/" },
        { label: "Poste Italiane: إصدار الإقامة وتجديدها", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Sapienza: الإقامة لغرض الدراسة", url: "https://www.uniroma1.it/en/pagina/residence-permit-study-purposes" },
        {
          label: "Agenzia delle Entrate: codice fiscale للمواطنين الأجانب (مطوية)",
          url: "https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716",
        },
        { label: "Banca d'Italia: الحساب الأساسي (conto di base)", url: "https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html" },
        { label: "Poste Italiane: Postepay Evolution", url: "https://www.poste.it/carte-postepay/postepay-evolution" },
        { label: "Sapienza: International Student Office", url: "https://www.uniroma1.it/en/pagina/international-student-office" },
        { label: "Tor Vergata: الوثائق المطلوبة للتسجيل بشهادة أجنبية", url: "https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/" },
        { label: "Roma Tre: تسجيل المواطنين من خارج الاتحاد الأوروبي", url: "https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/" },
        { label: "Tor Vergata: التأمين الصحي", url: "https://web.uniroma2.it/en/contenuto/health-insurance" },
        { label: "DiSCo Lazio: أسئلة متكررة للطلبة الدوليين (2026/27)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "البنك المركزي التونسي: المنشور 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "Normattiva: DPR 394/1999، المادة 14 (عمل الطلبة)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14" },
        {
          label: "وزارة العمل الإيطالية: مكافحة الاستغلال في العمل",
          url: "https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/contrasto-allo-sfruttamento-lavorativo-e-al-caporalato/pagine/default",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. المبالغ هي المنشورة في 2026، ومواعيد DiSCo متوقعة لسنة 2027/28 ويجب تأكيدها في الإعلان الجديد. تحقق من الصفحات الرسمية قبل أن تدفع أو تسافر.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الإقامة", value: "الطلب خلال 8 أيام عمل من الوصول، في مكتب البريد" },
        { label: "تكلفة الظرف", value: "حوالي 116.46 يورو (2026)" },
        { label: "codice fiscale", value: "يُسند مع طلب الإقامة، أو قبل ذلك لدى Agenzia delle Entrate" },
        { label: "عمل الطلبة", value: "حتى 20 ساعة في الأسبوع و1,040 ساعة في السنة" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "المسار الكامل باختصار" },
    {
      type: "ol",
      items: [
        "[التخطيط والرزنامة](article:study-in-italy)",
        "[اختيار الجامعة والتقديم](article:apply-university-rome)",
        "[تحضير الوثائق وترجمتها](article:documents-for-italy)",
        "[منحة DiSCo](article:lazio-disco-scholarship)",
        "[التأشيرة والحساب المجمّد](article:italy-student-visa)",
        "الوصول إلى روما",
        "[السكن](article:student-housing-rome)",
      ],
    },
  ],
};
