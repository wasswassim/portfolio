import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian names (DiSCo, codice fiscale, Agenzia delle Entrate) stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "student-housing-rome",
  title: "سكن الطلاب في روما: إقامات DiSCo والغرف وتجنب الاحتيال",
  seoTitle: "سكن الطلاب في روما: إقامات DiSCo والغرف والاحتيال",
  metaDescription:
    "سكن الطلاب في روما للتونسيين: إقامات DiSCo، وخدمات السكن في الجامعات، ومواقع البحث عن غرفة، وما يجب التحقق منه قبل الإمضاء، وكيف تتجنب الاحتيال في الكراء.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["سكن الطلاب في روما", "إقامات DiSCo", "غرفة طالب في روما", "سكن مشترك في روما", "سكن الطلبة التونسيين في روما", "احتيال الكراء في روما"],
  summary:
    "هناك ثلاث طرق لسكن الطلاب في روما، من الأرخص إلى الأغلى: إقامة DiSCo (تُطلب فقط في طلب منحة DiSCo السنوي، بحوالي 200 إلى 298 يورو شهريًا تُخصم من المنحة في 2026/27)، ثم خدمات السكن في Sapienza وTor Vergata وRoma Tre، ثم غرفة خاصة عبر مواقع مثل HousingAnywhere وUniplaces وSpotahome وImmobiliare.it وIdealista وSubito. لا تدفع أبدًا قبل أن ترى الغرفة، وتأكد من تسجيل عقد الكراء خلال 30 يومًا.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. قواعد السكن وأسعاره وإجراءاته قد تتغير، لذلك تحقق دائمًا من المصادر الرسمية قبل الإمضاء أو دفع أي مبلغ.",
    },
    { type: "p", text: "**أين ستسكن عند وصولك إلى روما، وكيف تجد غرفة دون أن تقع ضحية احتيال؟**" },
    {
      type: "p",
      text: "باختصار: الخيار الأرخص هو إقامة DiSCo، ولا يمكن طلبها إلا في طلب منحة DiSCo السنوي. إن لم تحصل عليها، فاستعن بخدمة السكن في جامعتك، ثم بمواقع الكراء. ومهما كان اختيارك، شاهد الغرفة قبل الدفع، واطلب عقدًا مكتوبًا ووصلًا عن كل دفعة.",
    },
    {
      type: "p",
      text: "هذا هو الجزء الأخير من [دليل الدراسة في إيطاليا للطلبة التونسيين](article:study-in-italy). تناولت الأجزاء السابقة التسجيل في الجامعة، والوثائق، والمنحة، والتأشيرة، وأولى خطواتك في روما. أما هذا الجزء فيتعلق بإيجاد مكان للسكن.",
    },

    { type: "h2", id: "disco-residences", text: "1. إقامات DiSCo: الخيار الأرخص" },
    {
      type: "p",
      text: "DiSCo هي الوكالة الجهوية في Lazio للحق في الدراسة، وتدير إقامات طلابية في روما. لا يوجد طلب منفصل: تطلب مكانًا في نفس الطلب الإلكتروني الخاص بـ[منحة DiSCo](article:lazio-disco-scholarship#eligibility)، وبنفس شروط الدخل.",
    },
    {
      type: "ul",
      items: [
        "**التكلفة:** في 2026/27 حوالي 200 إلى 298 يورو شهريًا تُخصم من منحتك (يُقتطع 700 يورو من القسط الأول). اطلع على [طريقة صرف المنحة](article:lazio-disco-scholarship#payments).",
        "**متى:** تبدأ الأماكن عادة في حدود منتصف أكتوبر، لمدة أقصاها 10 أشهر (تحقق من bando سنتك).",
        "**أين:** إقامات في أنحاء روما، مثل Antonio Ruberti وEzio Tarantelli وFalcone e Borsellino وGiulio Regeni وValco San Paolo وValleranello وTor Vergata. القائمة الكاملة في [صفحة إقامات DiSCo](https://laziodisco.it/servizi-attivi/residenze-universitarie/).",
        "**التوقيت:** نتائج السكن لسنة 2026/27 صدرت بالفعل. خطط لسنة 2027/28: يُتوقع أن يكون التقديم في حدود جوان-جويلية 2027، وترتيب السكن في حدود منتصف سبتمبر (تحقق من إعلان 2027/28).",
      ],
    },
    {
      type: "p",
      text: "إذا حصلت على مكان، ترسل لك DiSCo رسالة في فضائك الشخصي باسم الإقامة. أجب في الوقت المحدد: الرفض أو عدم الرد يعني خسارة المكان لتلك السنة. وإذا كنت مؤهلًا دون مكان، يتقدم الترتيب تلقائيًا، عادة كل أسبوعين تقريبًا، فتابع رسائلك.",
    },
    {
      type: "callout",
      tone: "note",
      title: "الإقامة ليست إثباتًا للتأشيرة",
      text: "طلب إقامة DiSCo ليس إثباتًا صالحًا للسكن في ملف التأشيرة. تحتاج إلى حجز فندق أو تصريح استضافة للفترة الأولى في إيطاليا (اطلع على [وثائق التأشيرة](article:italy-student-visa#visa-documents)).",
    },

    { type: "h2", id: "university-housing", text: "2. خدمات السكن في الجامعات" },
    {
      type: "p",
      text: "الجامعات العمومية الثلاث الكبرى في روما لا تضمن لك غرفة، لكن كل واحدة منها تساعدك في البحث. تواصل معها بمجرد قبولك.",
    },
    { type: "h3", id: "step-sapienza-housing", text: "Sapienza" },
    {
      type: "p",
      text: "افتح [صفحة سكن الطلاب في Sapienza](https://www.uniroma1.it/en/pagina/student-housing). تعرض الصفحة خيارات السكن ومكتب Sturent، وهو خدمة تساعد الطلاب على إيجاد غرفة. اقرأ الصفحة قبل المراسلة حتى تكون أسئلتك دقيقة.",
    },
    { type: "h3", id: "step-tor-vergata-housing", text: "Tor Vergata" },
    {
      type: "p",
      text: "افتح [صفحة السكن في Tor Vergata](https://web.uniroma2.it/en/contenuto/housing)، ثم راسل **housing@uniroma2.it** مع ذكر اسمك واختصاصك وتاريخ وصولك. وابحث في الصفحة عن رموز تخفيض للطلاب في مواقع الكراء.",
    },
    { type: "h3", id: "step-roma-tre-housing", text: "Roma Tre" },
    {
      type: "p",
      text: "توفر Roma Tre [خدمة سكن](https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/) مجانية. راسل **accommodation@uniroma3.it** لطلب المساعدة، وابحث في الصفحة عن رموز التخفيض الخاصة بالمنصات.",
    },

    { type: "h2", id: "find-a-room", text: "3. كيف تجد غرفة أو سكنًا مشتركًا في روما" },
    {
      type: "p",
      text: "أغلب الطلاب يسكنون في غرفة داخل شقة مشتركة. هذه هي الأماكن المعتادة للبحث:",
    },
    {
      type: "table",
      caption: "أين تبحث عن غرفة في روما، وما الذي يجب الانتباه إليه.",
      head: ["الخيار", "مناسب لـ", "انتبه إلى"],
      rows: [
        ["إقامة DiSCo", "أقل تكلفة، إن حصلت على المنحة", "فقط عبر الإعلان السنوي؛ ليست إثباتًا للتأشيرة"],
        ["مكتب السكن في الجامعة", "نصائح وجهات اتصال موثوقة", "مساعدة في البحث، لا غرفة مضمونة"],
        ["[HousingAnywhere](https://housinganywhere.com) و[Uniplaces](https://www.uniplaces.com) و[Spotahome](https://www.spotahome.com)", "الحجز من تونس قبل الوصول", "اقرأ شروط الإلغاء ومعاليم المنصة"],
        ["[Immobiliare.it](https://www.immobiliare.it) و[Idealista](https://www.idealista.it)", "إعلانات كثيرة لغرف وشقق كاملة", "غالبًا بالإيطالية؛ تحقق من صاحب الإعلان"],
        ["[Subito](https://www.subito.it)", "غرف من مالكين خواص", "أغلب الاحتيال يقع في الإعلانات المفتوحة: لا تدفع أبدًا قبل المعاينة"],
      ],
    },
    {
      type: "p",
      text: "تختلف أسعار الكراء كثيرًا حسب الحي والفترة. لا تعتمد على رقم قرأته على الإنترنت: راجع الإعلانات الحالية في الحي القريب من كليتك.",
    },
    { type: "h3", id: "before-signing", text: "ما يجب أن تسأل عنه قبل الإمضاء" },
    {
      type: "ul",
      items: [
        "**نوع العقد:** هل هو عقد كراء مكتوب، ولأي مدة؟ اطلب عقدًا يناسب فترة دراستك.",
        "**الضمان:** كم قيمته، ومتى بالضبط يُرجع؟",
        "**المصاريف:** هل الكهرباء والغاز والماء والإنترنت ومصاريف العمارة مشمولة، أم تُقسم بين الساكنين؟",
        "**التسجيل:** هل سيسجل المالك العقد؟ تحتاج إلى عقد مسجل في إجراءات كثيرة.",
      ],
    },
    {
      type: "p",
      text: "يجب [تسجيل عقد الكراء الجديد لدى Agenzia delle Entrate](https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario) خلال 30 يومًا. هذه مهمة المالك، لكن اطلب إثبات التسجيل واحتفظ بنسخة منه. وقد تحتاج إلى codice fiscale لإمضاء العقد: يمكنك الحصول عليه من أي مكتب لـAgenzia delle Entrate (اطلع على [كيفية الحصول على codice fiscale](article:arriving-in-rome#codice-fiscale)).",
    },
    { type: "h3", id: "first-weeks", text: "الأسابيع الأولى: سكن مؤقت" },
    {
      type: "p",
      text: "يحجز كثير من الطلاب فندقًا أو نُزلًا أو إقامة قصيرة للأسابيع الأولى، ثم يبحثون عن غرفة في عين المكان. وهذا يحل أيضًا مسألة التأشيرة: تحتاج إلى إثبات سكن للفترة الأولى، إما حجز فندق أو تصريح استضافة من الشخص الذي يستقبلك. وتبقى معاينة الغرف بنفسك الطريقة الأكثر أمانًا للاختيار.",
    },

    { type: "h2", id: "avoid-scams", text: "4. كيف تتجنب الاحتيال في الكراء" },
    {
      type: "p",
      text: "الطلاب الذين يبحثون من الخارج هم الأهداف الأسهل. وتتلخص [نصائح Polizia Postale ضد الاحتيال في الكراء](https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146) في قاعدة واحدة: عاين الغرفة، أو تعامل مع وكالة معتمدة، ولا تدفع مسبقًا أبدًا دون ضمانات.",
    },
    {
      type: "ul",
      items: [
        "عاين الغرفة بنفسك، أو اطلب مكالمة فيديو مباشرة يعرض فيها المالك الغرفة ووثيقة هويته.",
        "لا تدفع ضمانًا أو كراء قبل أن ترى الغرفة والعقد.",
        "ارفض الدفع عبر Western Union أو خدمات تحويل الأموال أو بطاقات الهدايا أو العملات المشفرة.",
        "اطلب عقدًا مكتوبًا ووصلًا عن كل دفعة.",
        "احذر من كراء أقل بكثير من غيره في نفس الحي، أو من مالك «موجود في الخارج» ومستعجل.",
        "تأكد من أن اسم المالك يطابق العقد والحساب الذي تدفع إليه.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "إذا كنت قد دفعت بالفعل",
      text: "أوقف كل تواصل، واحتفظ بكل الرسائل والوصولات، وقدم شكوى لدى الشرطة (Polizia Postale). وأعلم أيضًا خدمة السكن في جامعتك، فذلك يساعدها على تنبيه الطلاب الآخرين.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "كيف أجد غرفة في روما كطالب؟",
          a: "ابدأ بإقامات DiSCo (في طلب المنحة)، ثم خدمة السكن في جامعتك، ثم مواقع مثل HousingAnywhere وUniplaces وSpotahome وImmobiliare.it وIdealista وSubito. يحجز كثير من الطلاب إقامة قصيرة للأسابيع الأولى ويعاينون الغرف بأنفسهم.",
        },
        {
          q: "هل إقامات DiSCo بمقابل؟",
          a: "نعم، لكن بمبلغ قليل. في 2026/27 يكلف المكان في روما حوالي 200 إلى 298 يورو شهريًا تُخصم من منحة DiSCo (يُقتطع 700 يورو من القسط الأول).",
        },
        {
          q: "هل يمكنني طلب إقامة DiSCo دون المنحة؟",
          a: "لا. يُطلب المكان في نفس طلب DiSCo الخاص بالمنحة، بنفس شروط الدخل ونفس الآجال.",
        },
        {
          q: "هل أحتاج إلى codice fiscale لكراء غرفة؟",
          a: "غالبًا نعم: يحتاجه المالك للعقد ولتسجيله. يمكنك الحصول عليه من أي مكتب لـAgenzia delle Entrate بجواز سفرك وتأشيرتك.",
        },
        {
          q: "هل يُعد طلب إقامة DiSCo إثباتًا للسكن في ملف التأشيرة؟",
          a: "لا. تحتاج للتأشيرة إلى حجز فندق أو تصريح استضافة للفترة الأولى في إيطاليا.",
        },
        {
          q: "كيف أتجنب الاحتيال في الكراء في روما؟",
          a: "عاين الغرفة أو اطلب مكالمة فيديو مباشرة، ولا تدفع أبدًا قبل رؤيتها، وارفض Western Union وبطاقات الهدايا، واطلب عقدًا ووصلًا عن كل دفعة.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "DiSCo Lazio: الإقامات الجامعية", url: "https://laziodisco.it/servizi-attivi/residenze-universitarie/" },
        { label: "DiSCo Lazio: إعلان الحق في الدراسة 2026/27 (بالإنجليزية)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "Sapienza: سكن الطلاب", url: "https://www.uniroma1.it/en/pagina/student-housing" },
        { label: "Tor Vergata: السكن", url: "https://web.uniroma2.it/en/contenuto/housing" },
        { label: "Roma Tre: خدمة السكن", url: "https://www.uniroma3.it/en/services/services-for-students/daily-life/accommodation-service/" },
        { label: "Agenzia delle Entrate: تسجيل عقد كراء جديد", url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario" },
        { label: "Polizia di Stato: نصائح ضد الاحتيال في الكراء", url: "https://poliziadistato.it/articolo/pdf/201563bd3ae8aee9a742259146" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. تواريخ 2027/28 متوقعة انطلاقًا من إعلان 2026/27 ويجب تأكيدها في إعلان DiSCo الجديد. الأسعار وخدمات السكن قد تتغير، لذلك راجع الصفحات الرسمية قبل التقديم أو الإمضاء.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "إقامة DiSCo", value: "حوالي 200 إلى 298 يورو شهريًا في 2026/27، تُخصم من المنحة" },
        { label: "طريقة الطلب", value: "فقط في طلب DiSCo السنوي" },
        { label: "تسجيل عقد الكراء", value: "خلال 30 يومًا، من طرف المالك؛ اطلب الإثبات" },
        { label: "القاعدة الذهبية", value: "لا تدفع أبدًا قبل معاينة الغرفة" },
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
        "[التأشيرة والحساب المجمد](article:italy-student-visa)",
        "[الوصول إلى روما](article:arriving-in-rome)",
        "السكن",
      ],
    },
  ],
};
