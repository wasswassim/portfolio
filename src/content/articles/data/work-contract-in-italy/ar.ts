import type { ArticleTranslation } from "../../types";

// Source language (author's document). English and French are translations of this text.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "work-contract-in-italy",
  title: "عقد عمل في إيطاليا من تونس: Nulla Osta والتأشيرة والوصول",
  seoTitle: "عقد عمل في إيطاليا: Nulla Osta والتأشيرة والوصول",
  metaDescription:
    "بعد تكوين معتمد في تونس: كيف تحصل على عقد عمل في إيطاليا، ومن يقدم طلب Nulla Osta، وكيف تطلب تأشيرة D، وما الإجراءات بعد الوصول إلى إيطاليا.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["عقد عمل في إيطاليا", "عقد عمل في إيطاليا من تونس", "Nulla Osta", "تأشيرة عمل إيطاليا للتونسيين", "Contratto di soggiorno", "Permesso di soggiorno", "SIISL"],
  summary:
    "في مسار التكوين في الخارج، يأتي عقد العمل من صاحب عمل إيطالي، وهو نفسه من يقدم طلب Nulla Osta؛ ولا يمكن للعامل تقديمه وحده. بعد صدور Nulla Osta تطلب تأشيرة National Visa D من تونس، ثم تستكمل Contratto di soggiorno خلال 15 يومًا من الدخول إلى إيطاليا.",
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
      text: "هذا هو الجزء الثاني من دليلنا حول [العمل في إيطاليا من تونس](article:work-in-italy-from-tunisia). يشرح الجزء الأول مسار التكوين في الخارج، ومن يمكنه الاستفادة منه، والوثائق، والتكوين نفسه. أما هذا الجزء فيتناول ما يأتي بعد ذلك: صاحب العمل الإيطالي، وعقد العمل، وNulla Osta، وتأشيرة العمل، وأولى خطواتك في إيطاليا.",
    },
    {
      type: "p",
      text: "باختصار: صاحب عمل إيطالي جرى ربطه بك عبر برنامج معتمد يقدم لك عقد العمل ويقدم طلب Nulla Osta. بعد صدور Nulla Osta تطلب تأشيرة National Visa D من تونس. وبعد وصولك تستكمل Contratto di soggiorno خلال 15 يومًا، ثم إجراءات Permesso di soggiorno.",
    },

    { type: "h2", id: "after-training", text: "1. ماذا يحدث بعد إتمام التكوين؟" },
    { type: "p", text: "بعد إنهاء البرنامج المؤهل تبدأ مرحلة التوظيف والإجراءات المتعلقة بالدخول إلى إيطاليا." },
    {
      type: "p",
      text: "صاحب العمل الإيطالي هو الذي يقدم طلب Nulla Osta باسم العامل. العامل نفسه لا يقدم طلب Nulla Osta بشكل مستقل.",
    },
    {
      type: "p",
      text: "وبالنسبة للعمال الذين استوفوا شروط المسار الخاص بالتكوين في الخارج، تتم إجراءات الدخول وفق النظام الخاص بهذا المسار وخارج حصص Decreto Flussi.",
    },

    { type: "h2", id: "work-contract", text: "2. كيف تحصل على عقد عمل في إيطاليا من تونس؟" },
    {
      type: "p",
      text: "عقد العمل الشرعي لا يُشترى ولا يُستلم من وسيط. في هذا المسار يأتي من صاحب عمل إيطالي جرى ربطه بك عبر برنامج معتمد، ثم يقدم بعد ذلك طلب Nulla Osta.",
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
      text: "لا تخلط بين وثيقتين مختلفتين. عقد العمل (contratto di lavoro) هو الاتفاق بينك وبين صاحب العمل. أما Contratto di soggiorno فهو عقد الإقامة الذي تستكمله بعد الوصول إلى إيطاليا، كما نشرح في القسم 7.",
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

    { type: "h2", id: "nulla-osta", text: "3. ما هو Nulla Osta؟" },
    {
      type: "p",
      text: "Nulla Osta al lavoro هو الترخيص المطلوب لاستكمال إجراءات دخول العامل الأجنبي للعمل في إيطاليا.",
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
      text: "لا تدفع لشخص يبيع لك “Nulla Osta جاهز”. يجب أن تعرف من هو صاحب العمل وما هي القناة الرسمية التي يتم عبرها تقديم الطلب.",
    },

    { type: "h2", id: "siisl", text: "4. ما هو SIISL؟" },
    {
      type: "p",
      text: "هناك تحديث مهم في 2026 يجب ألا يغفله الباحثون. SIISL هو Sistema Informativo per l'Inclusione Sociale e Lavorativa، وهو نظام إيطالي يهدف إلى دعم الوصول إلى فرص الإدماج والعمل.",
    },
    {
      type: "p",
      text: "تم تحديد إجراءات تتعلق بتسجيل المواطنين الأجانب الذين أتموا برامج التكوين في بلدهم الأصلي ضمن هذا المسار في هذا النظام. هذه إضافة حديثة، ولذلك قد تجد أدلة قديمة على الإنترنت لا تذكر SIISL.",
    },
    {
      type: "p",
      text: "وفق القواعد الجديدة، يُسجَّل العمال الذين أتموا برنامجًا معتمدًا بشكل تلقائي، فلا تحتاج إلى التسجيل بنفسك. المنصة متاحة على [siisl.lavoro.gov.it](https://siisl.lavoro.gov.it/).",
    },

    { type: "h2", id: "work-visa", text: "5. كيف يتم طلب تأشيرة العمل من تونس؟" },
    {
      type: "p",
      text: "بعد صدور Nulla Osta، تبدأ مرحلة طلب التأشيرة. بالنسبة للمقيمين في تونس، يجب الاعتماد على المعلومات المنشورة من سفارة إيطاليا في تونس والجهة المعتمدة لمعالجة طلبات التأشيرة.",
    },
    {
      type: "p",
      text: "بالنسبة للإقامة الطويلة من أجل العمل، تكون التأشيرة من نوع National Visa D حسب طبيعة الملف.",
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
      text: "تمر طلبات التأشيرة من تونس عبر مزود الخدمة المعتمد لدى السفارة، ALMAVIVA (موقع [avs.com.tn](https://avs.com.tn/))، وهو الذي يتولى المواعيد. أما السفارة نفسها فلا تمنح مواعيد ولا تقبل طلبات التأشيرة عبر البريد الإلكتروني.",
    },

    { type: "h2", id: "visa-timing", text: "6. متى يجب تقديم طلب التأشيرة؟" },
    {
      type: "p",
      text: "بالنسبة للعمال الذين أكملوا برامج التكوين في الخارج، توجد مهلة تُحسب من نهاية التكوين لتقديم طلب التأشيرة. تعطي المصادر الرسمية أرقامًا مختلفة بحسب التاريخ والمرحلة (فقد ذكرت توجيهات سابقة لوزارة العمل 6 أشهر للتأشيرة، بينما تشير قواعد SIISL إلى 12 شهرًا لطلب Nulla Osta)، لذلك راجع الأسئلة الشائعة الحالية للوزارة لمعرفة المهلة الدقيقة في حالتك قبل أن تخطط لأي شيء.",
    },

    { type: "h2", id: "after-arrival", text: "7. ماذا يحدث بعد الوصول إلى إيطاليا؟" },
    {
      type: "p",
      text: "الوصول إلى إيطاليا لا يعني أن الإجراءات انتهت. يجب استكمال الإجراءات المتعلقة بـ Contratto di soggiorno ثم Permesso di soggiorno وفق الإجراءات المعمول بها في حالتك.",
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
      text: "وفي هذا المسار، يجب إتمام Contratto di soggiorno خلال 15 يومًا من الدخول إلى إيطاليا وفق القواعد الحالية.",
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
        "أنت مستعد لإتمام Contratto di soggiorno خلال 15 يومًا من الدخول إلى إيطاليا.",
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
          q: "هل أحتاج إلى صاحب عمل للعمل في إيطاليا عبر هذا المسار؟",
          a: "نعم، في مرحلة طلب Nulla Osta يجب أن يوجد صاحب عمل إيطالي يقدم الطلب الاسمي.",
        },
        {
          q: "ما الفرق بين عقد العمل وContratto di soggiorno؟",
          a: "عقد العمل هو الاتفاق بينك وبين صاحب العمل. أما Contratto di soggiorno فهو عقد الإقامة الذي تستكمله بعد الوصول إلى إيطاليا.",
        },
        {
          q: "هل يمكن العمل في إيطاليا دون عقد؟",
          a: "ليس بشكل قانوني في هذا المسار. يجب أن يقدم صاحب عمل إيطالي طلب Nulla Osta أولًا. احذر من أي عرض عمل في إيطاليا يتجاوز هذه الخطوات.",
        },
        {
          q: "ما هي التأشيرة اللازمة للعمل في إيطاليا؟",
          a: "بالنسبة للإقامة الطويلة من أجل العمل، تأشيرة National Visa D تُطلب من تونس عبر سفارة إيطاليا والجهة المعتمدة بعد صدور Nulla Osta.",
        },
        {
          q: "متى يجب طلب تأشيرة العمل؟",
          a: "ضمن مهلة تُحسب من نهاية التكوين. تعطي المصادر الرسمية أرقامًا مختلفة، لذلك راجع الأسئلة الشائعة الحالية لوزارة العمل الإيطالية بخصوص حالتك.",
        },
        {
          q: "ماذا أفعل بعد الوصول إلى إيطاليا؟",
          a: "تستكمل Contratto di soggiorno خلال 15 يومًا من الدخول إلى إيطاليا، ثم إجراءات Permesso di soggiorno وفق القواعد المطبقة على حالتك.",
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
        { label: "Contratto di soggiorno", value: "خلال 15 يومًا من الدخول إلى إيطاليا" },
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
