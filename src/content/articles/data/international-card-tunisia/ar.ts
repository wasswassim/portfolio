import type { ArticleTranslation } from "../../types";

// Translation of en.ts (same heading ids, one table, four fee boxes). Latin names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "pay-italian-university-fees-from-tunisia",
  title: "كيف تدفع رسوم التسجيل في الجامعات الإيطالية من تونس",
  subtitle: "التحويل البنكي والبطاقة التكنولوجية وPayPal وحلول أخرى",
  seoTitle: "رسوم التسجيل في جامعات إيطاليا: الدفع ببطاقة دولية من تونس",
  metaDescription:
    "كيف تدفع رسوم الجامعة الإيطالية من تونس: التحويل البنكي، البطاقة التكنولوجية، PayPal على pagoPA، البطاقة الإيطالية، العملات الرقمية، قواعد الصرف والاحتيال.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["دفع رسوم الجامعة الإيطالية من تونس", "البطاقة الدولية في تونس", "رسوم التسجيل في إيطاليا", "pagoPA من تونس", "البطاقة التكنولوجية الدولية", "الدفع باليورو من تونس"],
  summary:
    "أضمن طريقة قانونية لدفع رسوم الجامعة الإيطالية من تونس هي التحويل البنكي: معاليم الترشح والامتحانات مقابل فاتورة، ورسوم الدراسة عبر ملف الدراسة في بنك واحد. وللمدفوعات الصغيرة عبر الإنترنت، قد تنفع البطاقة التكنولوجية (1000 دينار في السنة) وحساب PayPal تونسي على pagoPA، لكن جرّب أولًا واسأل بنكك.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية أو مالية. قواعد الصرف وسقوف البطاقات والمعاليم تتغير، لذلك تحقق دائمًا من المصادر الرسمية المذكورة أدناه واسأل بنكك قبل أن تدفع.",
    },
    { type: "p", text: "**أرسلت لك جامعتك الإيطالية معلومًا يجب دفعه باليورو. كيف تدفعه وأنت في تونس، بطريقة قانونية ودون أن تخسر مالك؟**" },
    {
      type: "p",
      text: "الجواب باختصار: اطلب من بنكك **تحويلًا بنكيًا**. معاليم الترشح والامتحانات ودراسة الملفات تُحوَّل مقابل فاتورة، ورسوم الدراسة تمر عبر ملف الدراسة المفتوح في بنك واحد. وللمدفوعات الصغيرة عبر الإنترنت، تأتي بعد ذلك **البطاقة التكنولوجية** (1000 دينار في السنة) و**PayPal على pagoPA**، مع حدود.",
    },
    {
      type: "p",
      text: "يرتب هذا الدليل خمس طرق حسب الأمان القانوني أولًا، ثم الكلفة، ثم الجهد. وفي كل قسم رابط إلى الدليل المفصل عن البطاقة وpagoPA وبطاقات العملات الرقمية.",
    },

    { type: "h2", id: "which-method", text: "1. أي طريقة دفع تناسب أي معلوم إيطالي؟" },
    {
      type: "table",
      caption: "المعاليم الإيطالية والطرق الممكنة من تونس (تم التحقق في أكتوبر 2026).",
      head: ["المعلوم", "طريقة التحصيل", "ما يمكن أن ينجح من تونس"],
      rows: [
        ["معاليم الترشح وCIMEA واختبارات الدخول", "عبر الإنترنت، على منصة الجامعة أو CIMEA", "تحويل بنكي مقابل الفاتورة؛ البطاقة التكنولوجية أو PayPal للمبالغ الصغيرة (اسأل بنكك)"],
        ["أقساط رسوم الدراسة", "إشعار pagoPA أو فاتورة الجامعة", "تحويل بنكي في إطار ملف الدراسة"],
        ["الضريبة الجهوية والطابع الجبائي", "إشعار pagoPA مع القسط الأول", "البطاقة التكنولوجية أو PayPal على pagoPA (جرّب أولًا)؛ بطاقة إيطالية بعد الوصول"],
        ["ظرف طلب الإقامة", "في مكتب بريد إيطالي، بعد الوصول", "يُدفع في إيطاليا، انظر [كلفة الإقامة](article:arriving-in-rome#residence-permit)"],
      ],
    },
    {
      type: "fees",
      title: "مثال: رسوم السنة الأولى في Sapienza (أدنى شريحة، 2026/27)",
      feeIds: ["sapienza-band-a", "lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "تقول Sapienza إن رسومها تُدفع فقط عبر pagoPA، بعد إنشاء الإشعار على Infostud ([الضريبة الجهوية والطابع](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
    },

    { type: "h2", id: "bank-transfer", text: "2. الخيار 1: تحويل بنكي من بنكك التونسي" },
    {
      type: "p",
      text: "هذه أسهل طريق قانونية. يسمح [منشور البنك المركزي 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf)، الملحق 1، البند 13، للمقيمين بتحويل معاليم المناظرات والامتحانات ودراسة الملفات للدراسة في الخارج، مقابل فاتورة. ولا يحدد النص **أي سقف ثابت**.",
    },
    {
      type: "figure",
      src: "/blog/avenue-habib-bourguiba-tunis.webp",
      width: 1600,
      height: 1200,
      alt: "منظر جوي لشارع الحبيب بورقيبة المشجَّر وسط تونس العاصمة، وعلى اليمين برج زجاجي",
      caption: "شارع الحبيب بورقيبة وسط تونس العاصمة. يُطلب التحويل من البنك الذي يحتفظ بملف دراستك، فهو أول مكان تقصده.",
      credit: {
        text: "الصورة: Dacoslett، CC0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:TunisAveHabibBourguiba.jpg",
      },
    },
    {
      type: "p",
      text: "أما رسوم الدراسة فتمر عبر **ملف الدراسة** المفتوح في بنك واحد طوال السنة الجامعية. وحسب [منشور البنك المركزي 2025-10](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf)، تُدفع مقابل فاتورة الجامعة، وتضاف إليها منحتان. يشرح [قسم الحساب المجمد](article:italy-student-visa#blocked-account) كيف تفتح هذا الملف.",
    },
    {
      type: "fees",
      title: "منح ملف الدراسة (منشور البنك المركزي 2025-10)",
      feeIds: ["study-installation", "study-living"],
    },
    { type: "h3", id: "step-get-invoice", text: "الخطوة 1: احصل على الفاتورة أو إشعار الدفع" },
    {
      type: "p",
      text: "حمّل الفاتورة، أو إشعار pagoPA، من منصة جامعتك. يجب أن يكون باسمك. وإذا لم يوجد إشعار، اطلبه من الجامعة: [pagoPA لا يستطيع إنشاءه لك](https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617).",
    },
    { type: "h3", id: "step-go-to-bank", text: "الخطوة 2: اذهب إلى البنك الذي فيه ملف دراستك" },
    {
      type: "p",
      text: "أحضر الفاتورة وبطاقة التعريف ووثائق ملف الدراسة. وبالنسبة لمعاليم الترشح أو CIMEA، اذكر البند 13 من الملحق 1 من [المنشور 2016-09](https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf).",
    },
    { type: "h3", id: "step-order-transfer", text: "الخطوة 3: اطلب التحويل واحتفظ بنسخة SWIFT" },
    {
      type: "p",
      text: "اطلب تحويلًا إلى الجامعة في إطار ملف الدراسة، ثم احتفظ **بنسخة SWIFT**: فهي تثبت الدفع إذا لم تجده الجامعة.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "اسأل قبل أن تعتمد عليه",
      text: "كثير من الجامعات الإيطالية تصدر إشعارات pagoPA بدل رقم حساب عادي. لم نتمكن من التأكد من أن بنكًا تونسيًا يقبل دفع إشعار pagoPA بتحويل، لذلك اسأل بنكك أولًا.",
    },

    { type: "h2", id: "technology-card", text: "3. الخيار 2: البطاقة التكنولوجية الدولية (CTI)" },
    {
      type: "p",
      text: "يمكن للمقيم التونسي المتحصل على الباكالوريا على الأقل أن يحصل على بطاقة تكنولوجية بمنحة قدرها **1000 دينار لكل سنة ميلادية** (المنشور 2016-09، الفصل 15). أي حوالي **297 يورو** بسعر البنك المركزي 3.3671 (7 أكتوبر 2026)، وأقل قليلًا بعد معاليم البنك.",
    },
    {
      type: "fees",
      title: "منحة البطاقة التكنولوجية",
      feeIds: ["cti-allowance"],
    },
    {
      type: "p",
      text: "قائمة استعمالاتها الرسمية تذكر التكوين عبر الإنترنت والمواقع التعليمية والاشتراكات ورخص البرمجيات. لكنها **لا** تذكر رسوم الدراسة ولا pagoPA. لذلك فإن دفع رسوم الجامعة بها منطقة رمادية تتوقف على البنك: Banque Zitouna مثلًا [تحصر الاستعمال عبر الإنترنت حسب رمز التاجر](https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique). اسأل بنكك. ويشرح [دليل البطاقة التكنولوجية](article:technology-card-tunisia) كيف تطلبها.",
    },

    { type: "h2", id: "paypal-pagopa", text: "4. الخيار 3: PayPal على صفحة الدفع pagoPA" },
    {
      type: "p",
      text: "حساب PayPal التونسي يسمح **بالدفع والإرسال**، لكنه لا يسمح باستقبال المال. وهذا لا يضر هنا، لأنك تريد الدفع فقط. اربط به بطاقتك التكنولوجية كمصدر للتمويل.",
    },
    {
      type: "figure",
      src: "/blog/logos/paypal.webp",
      width: 1600,
      height: 400,
      alt: "شعار PayPal",
      caption: "PayPal علامة تجارية مسجلة لشركة PayPal, Inc.، ونعرض الشعار للتعريف بالخدمة فقط.",
      credit: {
        text: "الشعار: PayPal، ملكية عامة، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PayPal_2024.svg",
      },
    },
    {
      type: "p",
      text: "PayPal طريقة دفع رسمية على [checkout.pagopa.it](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal)، و[يقول PayPal](https://www.paypal.com/it/digital-wallet/pagopa) إن كل صاحب حساب ربط بطاقة يمكنه استعمالها. الدفع بالتقسيط يشترط الإقامة في إيطاليا، لذلك ادفع المبلغ كاملًا.",
    },
    {
      type: "fees",
      title: "كلفة دفع إشعار pagoPA عبر PayPal",
      feeIds: ["pagopa-paypal", "paypal-fx"],
    },
    {
      type: "p",
      text: "لا يوجد مصدر رسمي يؤكد قبول حساب تونسي على pagoPA. جرّب أولًا بإشعار صغير، مثل الطابع بـ 16 يورو. الخطوات بالتفصيل في [كيف تدفع pagoPA من الخارج](article:pay-pagopa-from-abroad).",
    },

    { type: "h2", id: "once-in-italy", text: "5. الخيار 4: حساب أو بطاقة إيطالية بعد الوصول" },
    {
      type: "p",
      text: "بعد وصولك إلى روما، يمكنك الدفع على pagoPA مباشرة بحساب إيطالي أو بطاقة Postepay أو بطاقة Wise، وغالبًا بكلفة أقل. بطاقة Wise غير متاحة في تونس، لكنها متاحة في إيطاليا. اقرأ [فتح حساب بعد الوصول](article:arriving-in-rome#bank-account) و[دليل الحساب البنكي للطالب](article:bank-account-italy-student).",
    },

    { type: "h2", id: "crypto-cards", text: "6. الخيار 5: لماذا تأتي بطاقات العملات الرقمية في الأخير" },
    {
      type: "p",
      text: "RedotPay شركة تكنولوجيا مالية في هونغ كونغ تصدر بطاقة Visa تُشحن بعملات مستقرة مثل USDT. تنص [شروطها](https://www.redotpay.com/terms) على أن الحساب ليس خدمة بنكية، وتسمح للشركة بتجميد الحسابات حسب تقديرها. ولا يُذكر أي ضمان للودائع.",
    },
    {
      type: "p",
      text: "بالنسبة للمقيمين في تونس، لا يوجد نص من البنك المركزي يرخص شراء العملات الرقمية، لذلك يبقى الوضع القانوني غير واضح (انظر القسم التالي). طريقة عمل البطاقة ورسومها وكيفية شحنها عبر P2P تجدها في [شرحنا عن RedotPay](article:redotpay-tunisia).",
    },
    {
      type: "p",
      text: "**لماذا هذا الترتيب؟** الأمان القانوني أولًا: التحويل البنكي يستند إلى نص واضح ويترك أثرًا مكتوبًا. ثم الكلفة: البطاقة وPayPal يضيفان معاليم وسقف 1000 دينار. ثم الجهد: الحساب الإيطالي هو الأرخص لكنه لا ينفع إلا بعد الوصول. وتأتي بطاقات العملات الرقمية في الأخير لأن المخاطرة القانونية تقع عليك.",
    },

    { type: "h2", id: "exchange-rules", text: "7. ماذا تقول قواعد الصرف التونسية" },
    {
      type: "p",
      text: "تفرض [مجلة الصرف لسنة 1976](https://www.finances.gov.tn/sites/default/files/17.pdf) (Code des changes) على المقيمين المرور عبر البنك المركزي أو وسيط مرخص، مثل بنك أو البريد التونسي، في عمليات الصرف (الفصل 3). وتحويلات رؤوس الأموال خارج الإطار القانوني تحتاج إلى ترخيص (الفصل 1).",
    },
    {
      type: "figure",
      src: "/blog/central-bank-tunisia.webp",
      width: 1600,
      height: 890,
      alt: "مقر البنك المركزي التونسي في تونس العاصمة، مبنى حديث كبير خلف أشجار النخيل",
      caption: "البنك المركزي التونسي في تونس العاصمة. منشوراته تحدد ما يحق للمقيم دفعه في الخارج، وعن طريق أي وسيط.",
      credit: {
        text: "الصورة: DrFO.Jr.Tn، CC BY-SA 3.0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:BCT_-_Tunis.jpg",
      },
    },
    {
      type: "ul",
      items: [
        "على المقيمين التصريح بأموالهم في الخارج لدى البنك المركزي (الفصل 16)، ولا يمكنهم التصرف فيها دون ترخيص (الفصل 17).",
        "كل مناورة للتحايل على هذه القواعد تُعد مخالفة (الفصل 23).",
        "تشمل العقوبات السجن وخطية لا تقل عن خمسة أضعاف المبلغ والمصادرة (الفصلان 35 و36). وفي مارس 2024 أعلنت وزارة المالية أن مشروع المجلة الجديدة سيخفض بعض عقوبات السجن ([Managers](https://managers.tn/2024/03/18/code-des-changes-peines-de-prison-reduites-a-3-ans-pour-diverses-infractions-financieres/)).",
        "لم نجد أي نص من البنك المركزي أو هيئة السوق المالية (CMF) يرخص العملات الرقمية.",
      ],
    },
    {
      type: "p",
      text: "كانت مجلة صرف جديدة لا تزال قيد الدرس في جوان 2026 ([La Presse](https://www.lapresse.tn/2026/06/04/reglementation-de-change-un-nouveau-code-a-lexamen/)). كما نقلت الصحافة أن قانون المالية لسنة 2026 يسمح للمقيمين بفتح حسابات بالعملة الأجنبية ([Business News](https://businessnews.com.tn/2025/12/03/comptes-en-devises-pour-les-residents-tunisiens-tout-ce-quil-faut-savoir/1376299/)). لم يتأكد بعد كيف تطبقه البنوك، لذلك اسأل بنكك.",
    },

    { type: "h2", id: "payment-scams", text: "8. الاحتيال: بطاقات وحسابات تُباع على مواقع التواصل" },
    {
      type: "p",
      text: "في 30 ماي 2024 حذر البنك المركزي من أن البطاقات الدولية والحسابات بالعملة الأجنبية المعروضة على مواقع التواصل الاجتماعي غير قانونية وقد تكون خطيرة، وأن المشاركة فيها قد تؤدي إلى تتبعات قضائية ([Managers](https://managers.tn/2024/05/30/alerte-de-la-bct-mefiez-vous-des-cartes-bancaires-internationales-vendues-sur-les-reseaux-sociaux)).",
    },
    {
      type: "ul",
      items: [
        "لا تعطِ أبدًا رمز `CVC2` الخاص ببطاقتك ولا رمز `OTP` لأي شخص، حتى لخدمة «شحن».",
        "خدمات «الشحن» أو كراء البطاقات التي تطلب بيانات بطاقتك فخ شائع.",
        "قد يختفي بائعو P2P بعد أن تدفع لهم بالدينار.",
        "إعارة بطاقتك التكنولوجية تخالف التصريح على الشرف الذي أمضيته في البنك.",
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "هل يمكنني دفع رسوم جامعة إيطالية ببطاقة تونسية؟",
          a: "أحيانًا، لكن ذلك غير مضمون. يقبل pagoPA بطاقات Visa وMastercard الدولية، لكن الاستعمالات الرسمية للبطاقة التكنولوجية لا تذكر رسوم الدراسة، لذلك اسأل بنكك؛ والتحويل البنكي أضمن.",
        },
        {
          q: "كم يمكنني أن أصرف بالبطاقة التكنولوجية؟",
          a: "1000 دينار لكل سنة ميلادية للشخص الطبيعي، أي حوالي 297 يورو بسعر البنك المركزي ليوم 7 أكتوبر 2026. أما رقم 10000 دينار فيخص الشركات فقط.",
        },
        {
          q: "هل PayPal متاح في تونس؟",
          a: "نعم، للدفع والإرسال. حساب PayPal التونسي لا يستطيع عمومًا استقبال المال، وهذا لا يمنع دفع إشعار pagoPA.",
        },
        {
          q: "هل شراء العملات الرقمية قانوني في تونس؟",
          a: "لا يوجد نص تونسي يرخصه. مجلة الصرف تفرض المرور عبر وسطاء مرخصين والتصريح بالأموال في الخارج، لذلك فإن شراء العملات الرقمية بالدينار يحمل مخاطرة قانونية حقيقية.",
        },
        {
          q: "هل يستطيع بنكي دفع إشعار pagoPA؟",
          a: "ربما، لكننا لم نتمكن من تأكيد ذلك. الأساس القانوني لتحويل رسوم الدراسة والامتحانات موجود، لذلك اسأل بنكك إن كان يستطيع دفع الإشعار بتحويل.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "البنك المركزي التونسي: المنشور 2016-09 (العمليات الجارية، البطاقة التكنولوجية)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
        { label: "البنك المركزي التونسي: المنشور 2025-10 (الدراسة في الخارج)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "البنك المركزي التونسي: أسعار الصرف", url: "https://www.bct.gov.tn/bct/siteprod/cours.jsp" },
        { label: "وزارة المالية: مجلة الصرف والتجارة الخارجية", url: "https://www.finances.gov.tn/sites/default/files/17.pdf" },
        { label: "وزارة تكنولوجيات الاتصال: بطاقة تعريف البطاقة التكنولوجية الدولية", url: "https://www.mtc.gov.tn/fileadmin/Investisseurs/Carte_technologique_Internationale_CTI_-version_francaise.pdf" },
        { label: "Banque Zitouna: البطاقة التكنولوجية", url: "https://www.banquezitouna.com/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique" },
        { label: "pagoPA: الدفع من الخارج لغير المواطنين الإيطاليين", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA: الدفع عبر PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "PayPal إيطاليا: pagoPA", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal تونس: معاليم الحسابات الشخصية", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza: الضريبة الجهوية والطابع الجبائي", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "RedotPay: شروط الاستخدام", url: "https://www.redotpay.com/terms" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. المبالغ باليورو محسوبة بسعر البنك المركزي ليوم 7 أكتوبر 2026. سقوف البطاقات ومعاليم PayPal وpagoPA ومجلة الصرف قد تتغير، لذلك راجع الصفحات الرسمية واسأل بنكك قبل أن تدفع.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الطريق الأضمن", value: "تحويل بنكي: المعاليم مقابل فاتورة، ورسوم الدراسة عبر ملف الدراسة" },
        { label: "البطاقة التكنولوجية", value: "1000 دينار لكل سنة ميلادية (حوالي 297 يورو)" },
        { label: "PayPal على pagoPA", value: "عمولة من 1.50 إلى 2.50 يورو؛ جرّب بإشعار صغير" },
        { label: "العملات الرقمية", value: "لا يوجد نص تونسي يرخصها" },
      ],
    },
    { type: "h2", id: "payment-path", text: "الدفع باليورو من تونس" },
    {
      type: "ol",
      items: [
        "أي طريقة لأي معلوم",
        "[البطاقة التكنولوجية الدولية](article:technology-card-tunisia)",
        "[دفع pagoPA من الخارج](article:pay-pagopa-from-abroad)",
        "[RedotPay وبطاقات العملات الرقمية](article:redotpay-tunisia)",
        "بعد الوصول إلى روما: [افتح حسابًا بنكيًا](article:bank-account-italy-student)",
      ],
    },
  ],
};
