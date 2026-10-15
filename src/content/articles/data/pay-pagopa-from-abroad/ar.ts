import type { ArticleTranslation } from "../../types";

// Translation of en.ts (same heading ids, one table, two fee boxes). Latin names and Italian screen labels stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "pay-pagopa-with-paypal-for-tunisians",
  formerSlugs: ["pay-pagopa-with-paypal-from-tunisia"],
  title: "كيف يدفع التونسيون إشعار pagoPA من الخارج",
  subtitle: "عبر PayPal أو بطاقة دولية وبدون SPID: الخطوات والرسوم وماذا تفعل إذا فشل الدفع",
  seoTitle: "دفع pagoPA من الخارج عبر PayPal أو بطاقة دولية",
  metaDescription:
    "ادفع إشعار pagoPA وأنت في تونس أو في الخارج عبر PayPal أو بطاقة دولية على checkout.pagopa.it: بدون SPID، 6 خطوات، مع الرسوم، وماذا تفعل إذا رُفضت بطاقتك.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["دفع pagoPA من الخارج", "دفع pagoPA للتونسيين", "دفع pagoPA عبر PayPal", "بطاقة دولية pagoPA", "checkout.pagopa.it", "avviso di pagamento"],
  summary:
    "دفع إشعار pagoPA وأنت في تونس أو في الخارج عملية عادية وبسيطة: تدفع عبر الإنترنت على checkout.pagopa.it بالبطاقة أو عبر PayPal بدون SPID، أو نقدًا في محل tabaccheria أو في مكتب البريد بعد وصولك إلى إيطاليا. في أكتوبر 2026 يكلّف PayPal مبلغ 1.50 يورو (2.50 يورو فوق 248.50 يورو) إضافة إلى حوالي 4% إذا حوّل PayPal العملة، وحسب تجربتي، كثير من الطلبة التونسيين يكلّفون وكالة دراسة في تونس بدفع الإشعار عنهم.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية أو مالية. طرق الدفع وعمولات المزوّدين وقواعد الصرف في تونس قد تتغير، لذلك تحقق دائمًا من المصادر الرسمية المذكورة أدناه قبل أن تدفع.",
    },
    { type: "p", text: "**أرسلت لك جامعتك الإيطالية إشعار دفع pagoPA وأنت ما زلت في تونس. هل يمكنك دفعه عبر PayPal أو ببطاقة دولية تونسية؟**" },
    {
      type: "p",
      text: "في أغلب الحالات، نعم. افتح [checkout.pagopa.it](https://checkout.pagopa.it)، وأدخل Codice Avviso وCodice Fiscale Ente Creditore (أو امسح رمز QR)، ثم اختر PayPal أو بطاقة ائتمان أو بطاقة بنكية أو بطاقة مسبقة الدفع. لدفع إشعار لا تحتاج إلى SPID، ولا إلى حساب بنكي إيطالي، ولا إلى codice fiscale خاص بك.",
    },
    {
      type: "p",
      text: "دفع pagoPA عملية عادية ويومية. حسب تجربتي، كثير من الطلبة التونسيين تدفع عنهم وكالة دراسة في تونس إشعاراتهم. وإذا دفعت بنفسك، فعندك ثلاث طرق بسيطة: بالبطاقة عبر الإنترنت، أو عبر PayPal، أو نقدًا في محل tabaccheria (بيع التبغ) أو في مكتب البريد بعد وصولك إلى إيطاليا.",
    },
    {
      type: "p",
      text: "هذا هو الجزء الثالث من دليلنا حول [دفع رسوم الجامعة الإيطالية للتونسيين](article:international-card-tunisia)، الذي يقارن بين كل طرق الدفع. ولقائمة كاملة بتكاليف الدراسة، اطّلع على [كم تكلّف الدراسة في إيطاليا](article:study-in-italy#costs).",
    },

    { type: "h2", id: "what-is-pagopa", text: "1. ما هو pagoPA، وأي رسوم طلابية تمرّ عبره؟" },
    {
      type: "p",
      text: "pagoPA هو نظام الدفع العمومي في إيطاليا، وتستعمله الجامعات وجهة Lazio لرسوم طلابية مثل معلوم الترشح ورسوم التسجيل والضريبة الجهوية. تُصدر جهة عمومية (جامعة، أو جهة Lazio، أو وزارة) إشعار دفع يُسمّى **avviso di pagamento**، وتدفعه عبر مزوّد خدمة دفع (PSP) تختاره أنت. المزوّد، وليس pagoPA، هو الذي يحدّد العمولة ويقبضها. يمكنك الدفع عبر الإنترنت، أو حضوريًا في مكتب البريد أو في بنك أو في أي محل يحمل شعار pagoPA، مثل tabaccheria أو كشك الجرائد أو المغازة الكبرى ([pagoPA: أين تدفع](https://www.pagopa.gov.it/it/cittadini/dove-pagare/)).",
    },
    {
      type: "figure",
      src: "/blog/logos/pagopa.webp",
      width: 1600,
      height: 400,
      alt: "شعار pagoPA",
      caption: "ابحث عن هذا الشعار في إشعار الدفع وفي بوابة الجامعة: فهو يدل على رسم يمكن دفعه عبر pagoPA.",
      credit: {
        text: "الشعار: PagoPA S.p.A.، ملكية عامة، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:PagoPA_logo.png",
      },
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: تُنشئ عملية الدفع على Infostud وتدفعها عبر pagoPA فقط، وينصّ النظام على أنه لا تُقبل أي طريقة أخرى ([نظام رسوم Sapienza 2026/27](https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf)).",
        "**Tor Vergata**: يُدفع معلوم الترشح البالغ 30 يورو عبر pagoPA ([إجراءات الترشح](https://web.uniroma2.it/allegato/45147/contenuto/application_procedure))، وتُنشأ رسوم التسجيل على Delphi.",
        "**الضريبة الجهوية لـ Lazio**: 140 يورو إضافة إلى طابع بـ 16 يورو، يدفعها مع القسط الأول كل طالب تقريبًا في جامعة عمومية في Lazio، بمن فيهم المترشحون لمنحة DiSCo، والإعفاءات مذكورة في نظام الرسوم بجامعتك ([Sapienza: الضريبة الجهوية والطابع](https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo)).",
      ],
    },
    {
      type: "fees",
      title: "مثال على إشعار: الضريبة الجهوية والطابع (2026/27)",
      text: "أول إشعار pagoPA نموذجي من جامعة عمومية في روما. المبالغ كما هي في أكتوبر 2026.",
      feeIds: ["lazio-regional-tax", "uni-stamp"],
      total: true,
      tnd: true,
    },
    {
      type: "p",
      text: "ليس كل شيء يمرّ عبر pagoPA: ظرف طلب الإقامة يُدفع في مكتب البريد، والتغطية الصحية الاختيارية بمطبوعة F24، كما نشرح في [أول 30 يومًا لك في روما](article:arriving-in-rome#residence-permit).",
    },

    { type: "h2", id: "what-you-need", text: "2. ماذا تحتاج قبل أن تدفع إشعار pagoPA؟" },
    {
      type: "p",
      text: "لدفع إشعار pagoPA من الخارج تحتاج إلى الإشعار ورموزه، وبريد إلكتروني، وإما حساب PayPal وإما بطاقة دولية مفعّلة للدفع عبر الإنترنت.",
    },
    {
      type: "ul",
      items: [
        "**الإشعار**: ملف PDF من Infostud أو Delphi أو بوابة أخرى، وفيه **Codice Avviso** المتكوّن من 18 رقمًا و**Codice Fiscale Ente Creditore** (المعرّف الجبائي للجهة الدائنة)، أو رمز QR الخاص به. إذا لم يكن لديك، اطلبه من الجامعة: pagoPA لا يستطيع إنشاءه لك.",
        "**بريد إلكتروني**: تصلك عليه نتيجة الدفع.",
        "**وسيلة دفع**: حساب PayPal مرتبط ببطاقة مؤكَّدة، أو بطاقة دولية Visa أو Mastercard أو Maestro أو Visa Electron أو American Express مفعّلة للدفع عبر الإنترنت وخارج تونس.",
        "**رصيد كافٍ في البطاقة**: سقف البطاقة التكنولوجية الدولية (CTI) هو 1,000 دينار في السنة للشخص الواحد.",
      ],
    },
    {
      type: "p",
      text: "لاستعمال PayPal، اربط أولًا بطاقتك الدولية بالحساب. ويشرح دليلنا حول [البطاقة التكنولوجية الدولية في تونس](article:technology-card-tunisia) كيف تتحصّل عليها. قد يقتطع PayPal مبلغًا صغيرًا مؤقتًا لتأكيد البطاقة ثم يرجعه بعد التحقق ([رسوم PayPal في تونس](https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN)).",
    },
    {
      type: "p",
      text: "حساب PayPal التونسي هو عقد مع PayPal Pte. Ltd.، وهي شركة سنغافورية. يسمح لك بالدفع والإرسال، أما استقبال الأموال فمتاح فقط «حيثما يتوفر»، وموقع PayPal التونسي لا يعرض إلا الدفع والإرسال ([اتفاقية مستخدم PayPal، تونس](https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN)). وهذا الحدّ لا يمنع الدفع عبر pagoPA، لأن خلاص إشعار هو عملية دفع وليس استقبالًا للأموال.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "انتبه إلى سقف 1,000 دينار",
      text: "أول إشعار للضريبة الجهوية لـ Lazio والطابع (حوالي 525 دينارًا) يستهلك تقريبًا نصف المنحة السنوية للبطاقة CTI، وقائمة الاستعمالات المسموح بها لهذه البطاقة لا تذكر الرسوم الجامعية. اقرأ [ما الذي يمكن دفعه بالبطاقة التكنولوجية](article:technology-card-tunisia#allowed-uses) قبل أن تعتمد عليها لدفع رسوم الدراسة.",
    },

    { type: "h2", id: "pay-with-paypal", text: "3. كيف تدفع إشعار pagoPA عبر PayPal، خطوة بخطوة؟" },
    {
      type: "p",
      text: "لدفع إشعار pagoPA عبر PayPal، افتح checkout.pagopa.it، وأدخل رموز الإشعار وبريدك الإلكتروني، واختر PayPal، ثم سجّل الدخول إلى PayPal وادفع المبلغ كاملًا. تتبع هذه الخطوات الست المقال الرسمي لـ pagoPA بعنوان [Pagare con PayPal](https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal).",
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
    { type: "h3", id: "step-open-checkout", text: "الخطوة 1: افتح checkout.pagopa.it" },
    {
      type: "p",
      text: "ادخل إلى [checkout.pagopa.it](https://checkout.pagopa.it)، أو اضغط على زر pagoPA في بوابة جامعتك. لا حاجة إلى تسجيل الدخول ولا إلى SPID.",
    },
    { type: "h3", id: "step-enter-codes", text: "الخطوة 2: أدخل رموز الإشعار" },
    {
      type: "p",
      text: "امسح رمز QR، أو اكتب Codice Avviso وCodice Fiscale Ente Creditore، ثم اضغط على `Vai al pagamento`. تأكد أن المبلغ واسم الجهة الدائنة يطابقان إشعارك.",
    },
    { type: "h3", id: "step-email", text: "الخطوة 3: اكتب بريدك الإلكتروني مرتين" },
    { type: "p", text: "استعمل عنوانًا تتفقّده فعلًا: تصلك عليه النتيجة وتفاصيل الوصل." },
    { type: "h3", id: "step-choose-paypal", text: "الخطوة 4: اختر PayPal ومزوّد الدفع" },
    {
      type: "p",
      text: "اختر `PayPal (anche a rate)`. إذا ظهر لك أكثر من مزوّد (Intesa Sanpaolo أو Mooney أو Nexi)، اختر واحدًا، وتأكد من المجموع مع العمولة، ثم اضغط على `Paga`.",
    },
    { type: "h3", id: "step-paypal-login", text: "الخطوة 5: ادخل إلى PayPal وادفع المبلغ كاملًا" },
    {
      type: "p",
      text: "تنتقل إلى موقع PayPal. سجّل الدخول، واختر بطاقتك أو رصيدك، ثم اختر الدفع **دفعة واحدة**: الدفع بالتقسيط عبر PayPal في pagoPA يشترط الإقامة في إيطاليا ([PayPal إيطاليا: pagoPA](https://www.paypal.com/it/digital-wallet/pagopa)).",
    },
    { type: "h3", id: "step-outcome", text: "الخطوة 6: اقرأ النتيجة" },
    { type: "p", text: "عند الرجوع إلى pagoPA تظهر النتيجة على الشاشة وتصلك بالبريد الإلكتروني. بعد ذلك احفظ الوصل (القسم 6)." },
    {
      type: "fees",
      title: "ما يضيفه الدفع عبر PayPal",
      text: "فوق مبلغ الإشعار. عمولة pagoPA يحدّدها المزوّد وقد تتغير.",
      feeIds: ["pagopa-paypal", "paypal-fx"],
      tnd: true,
    },
    {
      type: "p",
      text: "تُطبَّق عمولة التحويل في PayPal، وهي حوالي 4%، عندما يحوّل PayPal العملة نيابةً عنك، لذلك راجع المبلغ النهائي في كشف حسابك بعد الدفع.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "احتفظ بخيار ثانٍ",
      text: "إذا لم تنجح طريقة دفع، استعمل ببساطة طريقة أخرى: البطاقة، أو PayPal، أو الدفع نقدًا في tabaccheria أو في مكتب البريد بعد وصولك إلى إيطاليا. ادفع قبل الأجل ببضعة أيام حتى يكون لك وقت لتغيير الطريقة.",
    },

    { type: "h2", id: "pay-with-card", text: "4. كيف تدفع pagoPA ببطاقة دولية بدلًا من PayPal؟" },
    {
      type: "p",
      text: "تدفع pagoPA بالبطاقة في نفس صفحة checkout.pagopa.it: يقبل pagoPA بطاقات الائتمان والبطاقات البنكية والبطاقات مسبقة الدفع من شبكات American Express وMaestro وMastercard وVisa وVisa Electron، مهما كان بلد الإصدار ([طرق الدفع](https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609)). لذلك تصلح البطاقة الدولية التونسية إذا فعّلها بنكك للدفع عبر الإنترنت وخارج تونس.",
    },
    {
      type: "ol",
      items: [
        "بعد إدخال بريدك الإلكتروني، اختر `Carta di credito o debito`.",
        "اكتب اسم صاحب البطاقة ورقمها وتاريخ انتهاء صلاحيتها ورمز CVV.",
        "اختر مزوّدًا. ليس من الضروري أن يكون بنكك.",
        "تأكد من المبلغ مع العمولة، ثم اضغط على `Paga`.",
        "وافق على الدفع في صفحة بنكك أو تطبيقه (مرحلة 3-D Secure).",
      ],
    },
    {
      type: "table",
      caption: "عمولات الدفع بالبطاقة في checkout.pagopa.it حسب مبلغ الإشعار (بيانات التكاليف في pagoPA، لقطة بتاريخ 10 أكتوبر 2026، وهي تتغير).",
      head: ["مبلغ الإشعار", "عروض البطاقات", "عمولة المزوّد"],
      rows: [
        ["16 يورو", "24", "من 0.25 إلى 1.50 يورو"],
        ["100 يورو", "25", "من 0.70 إلى 1.50 يورو"],
        ["500 يورو", "24", "من 1.33 إلى 3.00 يورو"],
        ["2,000 يورو", "13", "من 2.50 إلى 6.00 يورو"],
      ],
    },
    {
      type: "p",
      text: "قارن بين المزوّدين في [صفحة شفافية التكاليف الرسمية](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/). إذا لم يكن لبطاقتك رمز CVV، فيقول pagoPA إنها على الأرجح غير مفعّلة للدفع عبر الإنترنت ([الدفع بالبطاقة](https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041)).",
    },

    { type: "h2", id: "card-declined", text: "5. ماذا تفعل إذا رفض pagoPA بطاقتك؟" },
    {
      type: "p",
      text: "عندما يفشل الدفع في pagoPA، تحقق من قيود البطاقة، ثم غيّر المزوّد، ثم غيّر طريقة الدفع: هذه هي الحلول الثلاثة التي تقترحها صفحة المساعدة في pagoPA الخاصة بـ[البطاقات الأجنبية](https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113)، بهذا الترتيب:",
    },
    {
      type: "ol",
      items: [
        "**تحقق من قيود البطاقة**: يجب أن يكون الدفع خارج البلاد وعبر الإنترنت مفعّلًا. راجع تطبيق بنكك أو اتصل به.",
        "**غيّر المزوّد**: قد يرفض مزوّد ما بطاقة بسبب سياسته الخاصة. في شاشة الملخص، اضغط على `modifica` بجانب المزوّد المقترح واختر غيره.",
        "**غيّر طريقة الدفع**: إذا فشلت البطاقة جرّب PayPal، وإذا فشل PayPal جرّب البطاقة مباشرة.",
      ],
    },
    {
      type: "figure",
      src: "/blog/card-terminal-not-detected.webp",
      width: 1600,
      height: 1243,
      alt: "صورة مقرّبة لجهاز دفع Ingenico تظهر على شاشته عبارة \"Merchant card not detected\"",
      caption: "قد يأتي الرفض من بطاقتك أو من مزوّد الدفع أو من الاتصال. جرّب الحلول بالترتيب قبل أن تعيد المحاولة.",
      credit: {
        text: "الصورة: VulcanSphere، CC BY 4.0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Ingenico_iCT250_payment_terminal_machine.jpg",
      },
    },
    {
      type: "p",
      text: "تأكد أيضًا أنه بقي رصيد من منحة البطاقة التكنولوجية الدولية (CTI) لهذه السنة، وأنك تستطيع استقبال رمز التأكيد من بنكك أثناء الدفع.",
    },
    {
      type: "p",
      text: "إذا خرج المال من حسابك لكن نتيجة pagoPA سلبية، فقد يحجز مزوّد الدفع المبلغ مؤقتًا ثم يرجعه، أحيانًا بعد بضعة أيام ([اقتطاع دون دفع](https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561)). تحقق من الأجل وادفع من جديد بطريقة أخرى حتى لا يفوتك. وإذا لم تنجح أي طريقة عبر الإنترنت، اقرأ كيف [تدفع بتحويل بنكي من بنكك التونسي](article:international-card-tunisia#bank-transfer).",
    },

    { type: "h2", id: "keep-the-receipt", text: "6. كيف تثبت الدفع وتتأكد من المصادقة عليه؟" },
    {
      type: "p",
      text: "تثبت دفع pagoPA بالوصل (**ricevuta**): حمّله فور نجاح الدفع واحتفظ بملف PDF مع البريد الإلكتروني، لأن بعض المكاتب تطلبه كإثبات للدفع.",
    },
    {
      type: "p",
      text: "بعد ذلك تصادق جامعتك على الدفع في بوابتها، غالبًا بعد بضعة أيام. راجع Infostud أو Delphi، وإذا لم يظهر شيء بعد أسبوع تقريبًا، أرسل الوصل إلى مكتب شؤون الطلبة. وتنبّه Tor Vergata إلى أنه إذا لم تتم المصادقة على دفع الضريبة الجهوية فلن تكون مسجّلًا وستخسر امتيازات DiSCo ([دليل الطالب في Tor Vergata 2026/27](https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf)).",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "هل يمكن دفع pagoPA من الخارج ببطاقة أجنبية؟",
          a: "نعم. يقبل pagoPA بطاقات Visa وMastercard وMaestro وVisa Electron وAmerican Express، سواء كانت ائتمانية أو بنكية أو مسبقة الدفع، مهما كان بلد الإصدار. يجب أن تكون البطاقة مفعّلة للدفع عبر الإنترنت وخارج البلاد وأن تجتاز التحقق 3-D Secure لدى بنكك. وإذا رفض مزوّد ما البطاقة، اختر مزوّدًا آخر في شاشة الملخص قبل أن تنتقل إلى PayPal.",
        },
        {
          q: "هل يمكن دفع pagoPA بالتقسيط وأنا في تونس؟",
          a: "لا، ليس عبر PayPal: التقسيط عبر PayPal في pagoPA يشترط الإقامة في إيطاليا. اختر الدفع دفعة واحدة عندما يسألك PayPal عن طريقة الدفع. وقبل الأجل، تأكد أن بطاقتك أو حساب PayPal يغطي المبلغ كاملًا في مرة واحدة، مع عمولة المزوّد.",
        },
        {
          q: "هل أحتاج إلى SPID لدفع إشعار pagoPA؟",
          a: "لا. موقع checkout.pagopa.it لا يطلب تسجيل الدخول، لذلك لا تحتاج إلى SPID لدفع إشعار. يكفيك Codice Avviso وCodice Fiscale Ente Creditore (أو رمز QR)، وبريد إلكتروني، ووسيلة دفع. ولا تحتاج أيضًا إلى حساب بنكي إيطالي ولا إلى codice fiscale خاص بك.",
        },
        {
          q: "كم تكلّف عملية دفع pagoPA عبر PayPal؟",
          a: "1.50 يورو لإشعار حتى 248.50 يورو، و2.50 يورو فوق ذلك، حسب أرقام أكتوبر 2026. ويضيف PayPal حوالي 4% إذا حوّل العملة لحساب تونسي. عمولة pagoPA يحدّدها مزوّد الدفع وقد تتغير، لذلك تأكد من المجموع مع العمولة قبل أن تضغط على Paga.",
        },
        {
          q: "متى ترى الجامعة أنني دفعت عبر pagoPA؟",
          a: "غالبًا بعد بضعة أيام. تصادق جامعتك على الدفع في بوابتها الخاصة، فراجع Infostud أو Delphi بعد الدفع واحتفظ بوصل pagoPA. وإذا لم يظهر الدفع بعد أسبوع تقريبًا، أرسل الوصل إلى مكتب شؤون الطلبة: تنبّه Tor Vergata إلى أن عدم المصادقة على دفع الضريبة الجهوية يعني أنك غير مسجّل.",
        },
        {
          q: "أضعت Codice Avviso. هل يمكن لـ pagoPA أن يرسله لي؟",
          a: "لا. الجهة التي أصدرت الإشعار، وهي عادةً جامعتك، هي وحدها التي يمكنها أن تمنحك Codice Avviso من جديد، وpagoPA لا يستطيع إنشاءه. حمّل الإشعار من جديد من بوابة جامعتك، مثل Infostud أو Delphi، أو اطلب من مكتب شؤون الطلبة أن يرسله لك.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "pagoPA: أين تدفع (عبر الإنترنت وحضوريًا)", url: "https://www.pagopa.gov.it/it/cittadini/dove-pagare/" },
        { label: "pagoPA: الدفع عبر pagoPA", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958790454417-Pagare-con-pagoPA" },
        { label: "pagoPA: دفع إشعار من الخارج لغير الإيطاليين", url: "https://assistenza.pagopa.gov.it/hc/it/articles/37287486009617" },
        { label: "pagoPA: طرق الدفع المقبولة", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39527536398609" },
        { label: "pagoPA: الدفع عبر PayPal", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39530555323409-Pagare-con-PayPal" },
        { label: "pagoPA: الدفع ببطاقات الائتمان أو البطاقات البنكية", url: "https://assistenza.pagopa.gov.it/hc/it/articles/39529857745041" },
        { label: "pagoPA: لا أستطيع الدفع ببطاقة أجنبية", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958814436113" },
        { label: "pagoPA: اقتطاع المبلغ مع فشل الدفع", url: "https://assistenza.pagopa.gov.it/hc/it/articles/46234924012561" },
        { label: "pagoPA: لماذا يأخذ المزوّدون عمولة", url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958813866769" },
        { label: "pagoPA: شفافية التكاليف", url: "https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/" },
        { label: "PayPal إيطاليا: دفع pagoPA عبر PayPal", url: "https://www.paypal.com/it/digital-wallet/pagopa" },
        { label: "PayPal تونس: اتفاقية المستخدم", url: "https://www.paypal.com/tn/legalhub/paypal/useragreement-full?locale.x=en_TN" },
        { label: "PayPal تونس: رسوم الأفراد", url: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN" },
        { label: "Sapienza: الضريبة الجهوية والطابع الجبائي", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "Sapienza: نظام الرسوم 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Tor Vergata: إجراءات الترشح", url: "https://web.uniroma2.it/allegato/45147/contenuto/application_procedure" },
        { label: "Tor Vergata: دليل الطالب 2026/27", url: "https://www-2023.studenti.uniroma2.it/wp-content/uploads/2026/07/Guida-dello-Studente-2026_2027v5.pdf" },
        { label: "البنك المركزي التونسي: المنشور 2016-09 (البطاقة التكنولوجية)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. عمولات المزوّدين لقطة بتاريخ 10 أكتوبر 2026 وتتغير كثيرًا. تحقق من الصفحات الرسمية قبل أن تدفع.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "أين تدفع", value: "checkout.pagopa.it، بدون SPID" },
        { label: "ما تحتاجه", value: "Codice Avviso + Codice Fiscale Ente Creditore، أو رمز QR" },
        { label: "عمولة PayPal", value: "1.50 يورو (2.50 يورو فوق 248.50 يورو) + حوالي 4% للتحويل" },
        { label: "التقسيط", value: "للمقيمين في إيطاليا فقط: ادفع المبلغ كاملًا وأنت في تونس" },
      ],
    },
    { type: "h2", id: "payment-path", text: "دفع الرسوم الإيطالية للتونسيين" },
    {
      type: "ol",
      items: [
        "[أي طريقة دفع تختار](article:international-card-tunisia)",
        "[البطاقة التكنولوجية الدولية](article:technology-card-tunisia)",
        "دفع pagoPA عبر PayPal أو بطاقة",
        "[RedotPay والبطاقات الرقمية](article:redotpay-tunisia)",
        "[حساب بنكي في إيطاليا](article:bank-account-italy-student)",
      ],
    },
  ],
};
