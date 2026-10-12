import type { ArticleTranslation } from "../../types";

// Source language (author's document). English and French are translations of this text.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "work-contract-in-italy",
  title: "عقد عمل في إيطاليا للتونسيين",
  subtitle: "Nulla Osta وتأشيرة D وأولى خطواتك بعد الوصول إلى إيطاليا",
  seoTitle: "عقد عمل في إيطاليا للتونسيين: Nulla Osta وتأشيرة D",
  metaDescription:
    "كيف يحصل التونسي على عقد عمل في إيطاليا: صاحب العمل يقدم طلب Nulla Osta، ثم تطلب تأشيرة D من تونس، وتمضي Contratto di soggiorno خلال 8 أيام عمل من الوصول.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["عقد عمل في إيطاليا", "عقد عمل في إيطاليا للتونسيين", "Nulla Osta al lavoro", "تأشيرة عمل إيطاليا للتونسيين", "تأشيرة D للعمل في إيطاليا", "Contratto di soggiorno"],
  summary:
    "بالنسبة للتونسيين في مسار التكوين في الخارج، يأتي عقد العمل في إيطاليا من صاحب عمل إيطالي، وهو نفسه من يقدم طلب Nulla Osta؛ ولا يمكن للعامل تقديمه وحده. بعد صدور Nulla Osta تطلب تأشيرة National Visa D من تونس، ثم تطلب من Sportello Unico، خلال 8 أيام عمل من الدخول إلى إيطاليا (حسب الدليل الرسمي، آخر تحقق أكتوبر 2026)، موعدًا لإمضاء Contratto di soggiorno.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. برامج الهجرة وشروطها وإجراءاتها قد تتغير، لذلك يجب دائمًا التحقق من المصادر الرسمية قبل التقديم أو دفع أي مبلغ.",
    },
    { type: "p", text: "**أتممت برنامج تكوين معتمدًا في تونس. كيف تنتقل من ذلك إلى عقد عمل في إيطاليا؟**" },
    {
      type: "p",
      text: "هذا هو الجزء الثاني من دليلنا حول [العمل في إيطاليا للتونسيين عبر مسار التكوين في الخارج](article:work-in-italy-from-tunisia). يشرح الجزء الأول مسار التكوين في الخارج، ومن يمكنه الاستفادة منه، والوثائق، والتكوين نفسه. أما هذا الجزء فيتناول ما يأتي بعد ذلك: صاحب العمل الإيطالي، وعقد العمل، وNulla Osta، وتأشيرة العمل، وأولى خطواتك في إيطاليا.",
    },
    {
      type: "p",
      text: "باختصار: صاحب عمل إيطالي جرى ربطه بك عبر برنامج معتمد يقدم لك عقد العمل ويقدم طلب Nulla Osta. بعد صدور Nulla Osta تطلب تأشيرة National Visa D من تونس. وبعد وصولك تطلب من Sportello Unico خلال 8 أيام عمل موعدًا لإمضاء Contratto di soggiorno، ثم تأتي إجراءات Permesso di soggiorno.",
    },

    { type: "h2", id: "after-training", text: "1. ماذا يحدث بعد إتمام التكوين في تونس؟" },
    { type: "p", text: "بعد أن يُنهي العامل التونسي برنامج التكوين المؤهل، تبدأ مرحلة التوظيف والإجراءات المتعلقة بالدخول إلى إيطاليا." },
    {
      type: "p",
      text: "صاحب العمل الإيطالي هو الذي يقدم طلب Nulla Osta باسم العامل. العامل نفسه لا يقدم طلب Nulla Osta بشكل مستقل.",
    },
    {
      type: "p",
      text: "وبالنسبة للعمال الذين استوفوا شروط المسار الخاص بالتكوين في الخارج، تتم إجراءات الدخول وفق النظام الخاص بمسار التكوين في الخارج وخارج حصص Decreto Flussi.",
    },

    { type: "h2", id: "work-contract", text: "2. كيف يحصل التونسي على عقد عمل في إيطاليا؟" },
    {
      type: "p",
      text: "في مسار التكوين في الخارج، يحصل التونسي على عقد عمل في إيطاليا من صاحب عمل إيطالي جرى ربطه به عبر برنامج معتمد، ثم يقدم صاحب العمل هذا طلب Nulla Osta. عقد العمل الشرعي لا يُشترى أبدًا ولا يُستلم من وسيط.",
    },
    {
      type: "figure",
      src: "/blog/construction-site-italy.webp",
      width: 1600,
      height: 1200,
      alt: "حضيرة بناء في Castegnato بإيطاليا، مع سقالات ورافعة ولوحة الحضيرة على السياج",
      caption: "حضيرة بناء في Castegnato بإقليم لومبارديا. في هذا المسار، يأتي عقد العمل من صاحب عمل إيطالي جرى ربطه بك عبر برنامج معتمد.",
      credit: {
        text: "الصورة: Ensahequ، رخصة CC BY-SA 4.0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Cantiere_edile_a_Castegnato.jpg",
      },
    },
    {
      type: "p",
      text: "لا تخلط بين وثيقتين مختلفتين. عقد العمل (contratto di lavoro) هو الاتفاق بينك وبين صاحب العمل. أما Contratto di soggiorno فهو عقد الإقامة الذي تمضيه لدى Sportello Unico per l'Immigrazione بعد الوصول إلى إيطاليا.",
    },
    { type: "p", text: "قبل أن تقبل أي عرض، تأكد من أن:" },
    {
      type: "ul",
      items: [
        "اسم صاحب العمل وبياناته مذكوران، ويمكنك التحقق من هويته.",
        "الوظيفة والقطاع والبرنامج تتوافق مع تكوينك.",
        "الطلب يمر عبر قناة رسمية وليس عبر رسالة خاصة.",
        "لا أحد يطلب منك دفع مال مقابل عقد أو فيزا مضمونة.",
      ],
    },

    { type: "h2", id: "nulla-osta", text: "3. ما هو Nulla Osta ومن يقدم طلبه؟" },
    {
      type: "p",
      text: "Nulla Osta al lavoro هو الترخيص المطلوب لدخول العامل الأجنبي إلى إيطاليا من أجل العمل، وصاحب العمل الإيطالي، لا العامل، هو من يقدم طلبه.",
    },
    {
      type: "fees",
      title: "طابع nulla osta",
      feeIds: ["nulla-osta-stamp"],
    },
    {
      type: "p",
      text: "بشكل مبسط: العامل مؤهل → يوجد صاحب عمل إيطالي → صاحب العمل يقدم طلب Nulla Osta → بعد الموافقة تبدأ مرحلة التأشيرة.",
    },
    {
      type: "p",
      text: "يقدم صاحب العمل هذا الطلب عبر الإنترنت على [Portale Servizi ALI](https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm) التابع لوزارة الداخلية الإيطالية، باستعمال الاستمارة الخاصة بالعمال المكوّنين في الخارج. تتحقق المنصة من أن اسمك موجود في قائمة العمال الذين أتموا برنامجًا معتمدًا، ولذلك لا يمكن تقديم طلب Nulla Osta لشخص غير موجود فيها. وإذا احتاج صاحب العمل إلى مساعدة، فإن Portale Integrazione Migranti يوفر [دليلًا خطوة بخطوة لأصحاب العمل](https://www.integrazionemigranti.gov.it/Altre-info/id/145/Lavoratori-formati-allestero-cosi-le-domande-dei-datori-di-lavoro).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "تحذير",
      text: "لا تدفع لشخص يبيع لك “Nulla Osta جاهز”. يجب أن تعرف من هو صاحب العمل وما هي القناة الرسمية التي يتم عبرها تقديم طلب Nulla Osta.",
    },

    { type: "h2", id: "siisl", text: "4. ما هو SIISL وهل يجب التسجيل فيه؟" },
    {
      type: "p",
      text: "SIISL هو Sistema Informativo per l'Inclusione Sociale e Lavorativa، وهو نظام إيطالي يدعم الوصول إلى فرص الإدماج والعمل، ويُسجَّل فيه العمال الذين أتموا برنامج تكوين معتمدًا بشكل تلقائي، فلا تحتاج إلى التسجيل بنفسك.",
    },
    {
      type: "p",
      text: "إجراءات تسجيل المواطنين الأجانب الذين أتموا برامج التكوين في بلدهم الأصلي ضمن مسار التكوين في الخارج في SIISL هي تحديث مهم في 2026. ولأن SIISL إضافة حديثة، قد تجد أدلة قديمة على الإنترنت لا تذكره.",
    },
    {
      type: "p",
      text: "منصة SIISL متاحة على [siisl.lavoro.gov.it](https://siisl.lavoro.gov.it/).",
    },

    { type: "h2", id: "work-visa", text: "5. كيف تطلب تأشيرة العمل في إيطاليا من تونس؟" },
    {
      type: "p",
      text: "بعد صدور Nulla Osta، تطلب من تونس تأشيرة National Visa D للعمل، بالاعتماد على المعلومات المنشورة من سفارة إيطاليا في تونس والجهة المعتمدة لديها لمعالجة طلبات التأشيرة.",
    },
    {
      type: "fees",
      title: "معلوم التأشيرة الوطنية D (التعريفة العامة للسفارة: تأكد أنها تنطبق على تأشيرة العمل)",
      feeIds: ["visa-national-d"],
      hub: true,
    },
    {
      type: "p",
      text: "بالنسبة للإقامة الطويلة من أجل العمل في إيطاليا، تكون التأشيرة من نوع National Visa D حسب طبيعة الملف.",
    },
    {
      type: "figure",
      src: "/blog/italy-tunisia-flags.svg",
      width: 1200,
      height: 520,
      alt: "علما إيطاليا وتونس جنبًا إلى جنب",
      caption: "إيطاليا وتونس. تُنجَز مرحلة التأشيرة من تونس عبر سفارة إيطاليا والجهة المعتمدة. (رسم توضيحي)",
    },
    {
      type: "p",
      text: "معلومات التأشيرات: [سفارة إيطاليا في تونس: التأشيرات](https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/)",
    },
    {
      type: "p",
      text: "أين يتم طلب التأشيرة: [أين تطلب التأشيرة](https://ambtunisi.esteri.it/fr/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/dove-chiedere-un-visto/)",
    },
    {
      type: "p",
      text: "تمر طلبات التأشيرة من تونس عبر مزود الخدمة المعتمد لدى السفارة، ALMAVIVA (موقع [avs.com.tn](https://avs.com.tn/))، وهو الذي يتولى المواعيد. أما سفارة إيطاليا في تونس نفسها فلا تمنح مواعيد ولا تقبل طلبات التأشيرة عبر البريد الإلكتروني. ويشرح دليل تأشيرة الدراسة [كيف يعمل نظام مواعيد ALMAVIVA في تونس](article:italy-student-visa#almaviva-appointment)، من زاوية الطالب.",
    },

    { type: "h2", id: "visa-timing", text: "6. ما هي المهلة لطلب تأشيرة العمل بعد التكوين؟" },
    {
      type: "p",
      text: "تُحسب مهلة طلب تأشيرة العمل من نهاية التكوين، لكن المصادر الرسمية تعطي أرقامًا مختلفة، لذلك تأكد منها لدى وزارة العمل الإيطالية قبل أن تخطط لأي شيء. تختلف الأرقام بحسب التاريخ والمرحلة: فقد ذكرت توجيهات سابقة لوزارة العمل 6 أشهر للتأشيرة، بينما تشير قواعد SIISL إلى 12 شهرًا لطلب Nulla Osta. راجع الأسئلة الشائعة الحالية لوزارة العمل لمعرفة المهلة الدقيقة في حالتك.",
    },

    { type: "h2", id: "after-arrival", text: "7. ماذا يحدث بعد الوصول إلى إيطاليا بتأشيرة عمل؟" },
    {
      type: "p",
      text: "بعد الوصول إلى إيطاليا، تمضي Contratto di soggiorno لدى Sportello Unico per l'Immigrazione ثم تستكمل إجراءات Permesso di soggiorno وفق الإجراءات المعمول بها في حالتك. فالوصول إلى إيطاليا لا يعني أن الإجراءات انتهت.",
    },
    {
      type: "fees",
      title: "ظرف طلب الإقامة في مكتب البريد",
      text: "المجموع محسوب لإقامة حتى سنة واحدة؛ لإقامة تتجاوز سنة وحتى سنتين تكون المساهمة 50 يورو، فيصبح المجموع 126.46 يورو",
      feeIds: ["permit-stamp", "permit-postal", "permit-card", "permit-contribution-1y"],
      total: true,
    },
    {
      type: "figure",
      src: "/blog/colosseum-rome.webp",
      width: 1600,
      height: 1200,
      alt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
      caption: "الكولوسيوم في روما مزيّنًا بالعلم الإيطالي في العيد الوطني للجمهورية 2022.",
      credit: {
        text: "الصورة: Horcrux، رخصة CC0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:2022_Italian_Republic_Day_parade_(12).jpg",
      },
    },
    {
      type: "p",
      text: "وفق [الدليل الرسمي على Portale Integrazione Migranti](https://www.integrazionemigranti.gov.it/it-it/Altre-info/id/144/Ingresso-e-assunzione-dei-lavoratori-formati-allestero)، يجب عليك خلال 8 أيام عمل من دخولك إلى إيطاليا أن تطلب من Sportello Unico per l'Immigrazione موعدًا لإمضاء Contratto di soggiorno. وعند الإمضاء يسلمك Sportello Unico أيضًا شهادة الرمز الجبائي ويجعلك تمضي طلب Permesso di soggiorno.",
    },
    {
      type: "callout",
      tone: "note",
      title: "تحقق من هذه المهلة بنفسك",
      text: "تشير بعض المصادر الحديثة إلى أن هذه المهلة أصبحت 15 يومًا بعد تعديل قانوني في 2025، كما تختلف طريقة حجز المواعيد من Prefettura إلى أخرى. قبل السفر، تأكد من المهلة المعمول بها لدى Sportello Unico في الإقليم الذي ستعمل فيه، أو لدى صاحب العمل.",
    },
    { type: "p", text: "احتفظ دائمًا بنسخ من الطلبات والإيصالات والمواعيد والمراسلات والوثائق الرسمية." },

    { type: "h2", id: "checklist", text: "8. قائمة التحقق: من عقد العمل إلى بطاقة الإقامة" },
    { type: "p", text: "قبل السفر، ثم خلال أسابيعك الأولى في إيطاليا، تحقق من كل خطوة:" },
    {
      type: "ul",
      items: [
        "تعرف من هو صاحب عملك، والوظيفة تتوافق مع تكوينك المعتمد.",
        "قدم صاحب العمل طلب Nulla Osta عبر القناة الرسمية، وصدر Nulla Osta.",
        "طلبت تأشيرة National Visa D من تونس ضمن المهلة المطبقة على حالتك.",
        "تعرف أنه يجب عليك طلب موعد من Sportello Unico خلال 8 أيام عمل من الدخول إلى إيطاليا لإمضاء Contratto di soggiorno، وقد تحققت من المهلة المعمول بها.",
        "تستكمل بعد ذلك إجراءات Permesso di soggiorno.",
        "تحتفظ بنسخة من كل طلب وإيصال وموعد ووثيقة رسمية.",
      ],
    },
    {
      type: "figure",
      src: "/blog/questura-verbania.webp",
      width: 1600,
      height: 1067,
      alt: "مبنى Questura في Verbania بإيطاليا، وعند مدخله العلمان الإيطالي والأوروبي",
      caption: "مبنى Questura (مديرية الشرطة في الإقليم) في Verbania. في إيطاليا، الـ Questura هي الجهة التي تتولى بطاقات الإقامة.",
      credit: {
        text: "الصورة: Francoerbi، رخصة CC0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Verbania_Questura_del_VCO.jpg",
      },
    },
    {
      type: "p",
      text: "إذا عرض عليك شخص أيًا من هذه الخطوات مقابل المال، فاقرأ [كيف تتعرف على عروض العمل الاحتيالية](article:work-in-italy-from-tunisia#avoid-scams) قبل أن تواصل.",
    },

    {
      type: "faq",
      id: "faq",
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "من يقدم طلب Nulla Osta للعامل التونسي؟",
          a: "صاحب العمل الإيطالي هو من يقدم طلب Nulla Osta، وليس العامل. في مسار التكوين في الخارج، يقدم صاحب العمل الطلب الاسمي عبر الإنترنت على Portale Servizi ALI التابع لوزارة الداخلية الإيطالية، وتتحقق المنصة من أن العامل موجود في قائمة من أتموا برنامجًا معتمدًا. لا يمكن للعامل التونسي تقديم الطلب وحده، لذلك فإن “Nulla Osta جاهز” معروض للبيع ليس وثيقة رسمية.",
        },
        {
          q: "ما الفرق بين عقد العمل وContratto di soggiorno؟",
          a: "عقد العمل (contratto di lavoro) هو اتفاق الشغل بينك وبين صاحب العمل الإيطالي، أما Contratto di soggiorno فهو عقد الإقامة الذي تمضيه بعد الوصول إلى إيطاليا. تمضي Contratto di soggiorno لدى Sportello Unico per l'Immigrazione، الذي يسلمك في الموعد نفسه شهادة الرمز الجبائي ويجعلك تمضي طلب Permesso di soggiorno.",
        },
        {
          q: "هل يمكن الحصول على تأشيرة عمل لإيطاليا دون Nulla Osta؟",
          a: "لا، ليس في مسار التكوين في الخارج. تبدأ مرحلة التأشيرة فقط بعد الموافقة على طلب Nulla Osta الذي يقدمه صاحب العمل الإيطالي وصدور Nulla Osta. احذر من أي عرض عمل في إيطاليا يعدك بتأشيرة دون صاحب عمل معروف ودون طلب Nulla Osta رسمي، ولا تدفع أبدًا لأي شخص مقابل عقد أو فيزا مضمونة.",
        },
        {
          q: "ما هي التأشيرة التي يحتاجها التونسي للعمل في إيطاليا؟",
          a: "يحتاج التونسي إلى تأشيرة National Visa D للإقامة الطويلة من أجل العمل في إيطاليا. تطلب National Visa D من تونس بعد صدور Nulla Osta، عبر ALMAVIVA، مزود الخدمة المعتمد لدى سفارة إيطاليا الذي يتولى مواعيد التأشيرة. سفارة إيطاليا في تونس لا تمنح مواعيد ولا تقبل طلبات التأشيرة عبر البريد الإلكتروني.",
        },
        {
          q: "كم لدي من وقت بعد التكوين لطلب تأشيرة العمل؟",
          a: "تُحسب المهلة من نهاية التكوين، والمصادر الرسمية تعطي أرقامًا مختلفة. فقد ذكرت توجيهات سابقة لوزارة العمل الإيطالية 6 أشهر للتأشيرة، بينما تشير قواعد SIISL إلى 12 شهرًا لطلب Nulla Osta. راجع الأسئلة الشائعة الحالية لوزارة العمل لمعرفة مهلتك الدقيقة قبل أن تخطط لأي شيء.",
        },
        {
          q: "ماذا يجب أن أفعل في الأيام الأولى بعد الوصول إلى إيطاليا بتأشيرة عمل؟",
          a: "خلال 8 أيام عمل من الدخول إلى إيطاليا، اطلب من Sportello Unico per l'Immigrazione موعدًا لإمضاء Contratto di soggiorno، حسب الدليل الرسمي على Portale Integrazione Migranti. ثم تأتي إجراءات Permesso di soggiorno. تشير بعض المصادر الحديثة إلى أن المهلة أصبحت 15 يومًا بعد تعديل قانوني في 2025، لذلك تأكد منها لدى Sportello Unico في إقليمك أو لدى صاحب العمل.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        {
          label: "وزارة العمل والسياسات الاجتماعية الإيطالية: التكوين في الخارج",
          url: "https://www.lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/ingresso-e-soggiorno-per-lavoro-in-italia/pagine/formazione-all-estero",
        },
        {
          label: "وزارة العمل الإيطالية: معلومات SIISL الخاصة بالعمال المكوّنين في بلدانهم الأصلية",
          url: "https://www.lavoro.gov.it/notizie/pagine/sistema-informativo-per-l-inclusione-sociale-e-lavorativa-siisl-pubblicato-il-decreto-interministeriale-che-definisce-le-modalita-di-iscrizione-dei-cittadini-stranieri-formati-nei-paesi-di-origine",
        },
        {
          label: "سفارة إيطاليا في تونس: التأشيرات",
          url: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/",
        },
        {
          label: "سفارة إيطاليا في تونس: أين تطلب التأشيرة",
          url: "https://ambtunisi.esteri.it/fr/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/dove-chiedere-un-visto/",
        },
        {
          label: "وزارة الداخلية الإيطالية: Portale Servizi ALI (طلبات أصحاب العمل)",
          url: "https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm",
        },
        {
          label: "Portale Integrazione Migranti: توظيف العمال المكوّنين في الخارج، دليل لأصحاب العمل",
          url: "https://www.integrazionemigranti.gov.it/Altre-info/id/145/Lavoratori-formati-allestero-cosi-le-domande-dei-datori-di-lavoro",
        },
        {
          label: "Portale Integrazione Migranti: دخول وتوظيف العمال المكوّنين في الخارج (الدليل الرسمي)",
          url: "https://www.integrazionemigranti.gov.it/it-it/Altre-info/id/144/Ingresso-e-assunzione-dei-lavoratori-formati-allestero",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. المهل وإجراءات التأشيرة والقواعد الإدارية قابلة للتغيير. قبل تقديم أي ملف، تحقق دائمًا من أحدث المعلومات لدى وزارة العمل الإيطالية وسفارة إيطاليا في تونس.",
    },
  ],
  // Shown in the scrollable side card (the section list is generated from the headings)
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "من يقدم Nulla Osta", value: "صاحب العمل الإيطالي، وليس العامل" },
        { label: "التأشيرة", value: "National Visa D، تُطلب من تونس" },
        { label: "المهلة بعد انتهاء التكوين", value: "تُحسب من نهاية التكوين؛ تأكد من الرقم الحالي لدى الوزارة" },
        { label: "Contratto di soggiorno", value: "طلب الموعد خلال 8 أيام عمل من الدخول إلى إيطاليا (الدليل الرسمي)؛ تأكد لدى Sportello Unico" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "المسار الكامل باختصار" },
    {
      type: "ol",
      items: [
        "[العثور على برنامج معتمد](article:work-in-italy-from-tunisia#programs-and-jobs)",
        "[التحقق من الشروط](article:work-in-italy-from-tunisia#who-can-apply)",
        "[الترشح من تونس](article:work-in-italy-from-tunisia#how-to-start)",
        "[الاختبارات والمقابلات](article:work-in-italy-from-tunisia#step-tests-interviews)",
        "[إتمام التكوين](article:work-in-italy-from-tunisia#training)",
        "التوظيف / ربط العامل بصاحب العمل",
        "Nulla Osta من صاحب العمل الإيطالي",
        "طلب تأشيرة العمل",
        "السفر إلى إيطاليا",
        "Contratto di soggiorno",
        "Permesso di soggiorno",
        "استكمال العمل والإقامة بشكل قانوني",
      ],
    },
  ],
};
