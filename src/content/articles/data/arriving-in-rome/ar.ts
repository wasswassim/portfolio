import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Italian administrative terms and names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "arriving-in-rome-as-a-student",
  title: "بطاقة الإقامة للدراسة في إيطاليا: الوصول إلى روما",
  subtitle: "أول 30 يومًا للطالب التونسي في روما: ظرف الإقامة، وcodice fiscale، والتسجيل، وDiSCo، وميزانية الشهر الأول",
  seoTitle: "بطاقة الإقامة للدراسة في إيطاليا: أول 30 يومًا في روما",
  metaDescription:
    "اطلب بطاقة الإقامة للدراسة في إيطاليا خلال 8 أيام عمل: ظرف البريد بحوالي 116.46 يورو، والبصمات في Questura، وcodice fiscale، وخطوات DiSCo للطلبة التونسيين.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["بطاقة الإقامة للدراسة في إيطاليا", "إقامة الدراسة في إيطاليا", "permesso di soggiorno per studio", "ظرف طلب الإقامة من مكتب البريد", "codice fiscale للطلبة في إيطاليا", "الوصول إلى روما للدراسة"],
  summary:
    "تطلب بطاقة الإقامة للدراسة في إيطاليا خلال 8 أيام عمل من وصولك، بإرسال الظرف ذي الشريط الأصفر من مكتب بريد فيه شباك Sportello Amico (حوالي 116.46 يورو في 2026)، ويُسند إليك codice fiscale مع هذا الطلب. بوصل البريد تفتح بعد ذلك حسابًا، وتتمم تسجيلك في الجامعة، وترسل وثائق التسجيل إلى بنكك في تونس، وتكمل خطوات DiSCo.",
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
      text: "هذا هو الجزء السادس من [دليل الدراسة في إيطاليا للطلاب التونسيين](article:study-in-italy). يبدأ حيث ينتهي [دليل تأشيرة الدراسة في إيطاليا للتونسيين](article:italy-student-visa): أول 30 يومًا لك في روما، خطوة بخطوة.",
    },

    { type: "h2", id: "first-30-days", text: "1. ماذا تفعل في أول 30 يومًا في روما؟" },
    {
      type: "p",
      text: "في أول 30 يومًا في روما، تأتي بطاقة الإقامة للدراسة أولًا: أرسل ظرف البريد خلال 8 أيام عمل، ثم افتح حسابًا، وأتمم تسجيلك، وأكمل خطوات DiSCo، بهذا الترتيب:",
    },
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

    { type: "h2", id: "residence-permit", text: "2. كيف تطلب بطاقة الإقامة للدراسة في إيطاليا؟" },
    {
      type: "p",
      text: "تطلب بطاقة الإقامة للدراسة (Permesso di soggiorno per studio) من مكتب بريد فيه شباك Sportello Amico، خلال **8 أيام عمل** من دخولك إلى إيطاليا ([Polizia di Stato](https://www.poliziadistato.it/articolo/225)). يمر الطلب بأربع خطوات: الظرف، والوثائق، والدفع، وموعد Questura.",
    },
    {
      type: "figure",
      src: "/blog/post-office-rome.webp",
      width: 1600,
      height: 1187,
      alt: "مكتب البريد المركزي في Piazza di San Silvestro بروما تحت سماء زرقاء",
      caption: "مكتب البريد المركزي في روما، Piazza di San Silvestro. يُودَع ظرف طلب الإقامة في مكتب بريد فيه شباك Sportello Amico.",
      credit: {
        text: "الصورة: Frank C. Müller, Baden-Baden، CC BY-SA 3.0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Rom_2013_014_Piazza_di_San_Silvestro_Ufficio_Postale_(fcm).jpg",
      },
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
      type: "fees",
      title: "كلفة مطلب بطاقة الإقامة في مكتب البريد",
      text: "لإقامة تتجاوز سنة واحدة وحتى سنتين تكون المساهمة 50 يورو، فيصبح المجموع 126.46 يورو. اسأل في الشباك عن طرق الدفع المقبولة.",
      feeIds: ["permit-stamp", "permit-postal", "permit-card", "permit-contribution-1y"],
      total: true,
      hub: true,
    },
    {
      type: "p",
      text: "يسلمك موظف البريد **وصلًا** (ricevuta) فيه اسم مستخدم وكلمة سر. احتفظ بالوصل مع جواز سفرك: ستطلبه منك الجامعة والبنك وDiSCo.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "احمل الوصل معك دائمًا",
      text: "من الآن فصاعدًا، قدّم **الوصل (ricevuta)** مع جواز سفرك كلما طلبت خدمة: فتح حساب بنكي، اشتراك هاتف، الـ codice fiscale، عقد عمل، DiSCo. إلى أن تصلك البطاقة، الوصل هو ما يثبت أنك قدمت طلب الإقامة. احتفظ بالأصل في مكان آمن واحمل نسخة منه أيضًا.",
    },
    { type: "h3", id: "step-questura", text: "الخطوة 4: اذهب إلى Questura لأخذ البصمات" },
    {
      type: "p",
      text: "في مكتب البريد تتلقى أيضًا رسالة استدعاء فيها موعدك في Questura، حيث تؤخذ بصماتك. تابع حالة إقامتك على [بوابة Polizia di Stato](https://questure.poliziadistato.it/stranieri/) ببيانات الوصل. تذكر Polizia di Stato أن المعالجة تستغرق حوالي 60 يومًا، بينما تنبه Sapienza إلى أنها قد تصل إلى حوالي 90 يومًا.",
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

    {
      type: "p",
      text: "بعد أن يكون لديك عقد كراء ووصل الإقامة، يمكنك أيضًا تسجيل إقامتك في الـ anagrafe بروما، وهي خطوة منفصلة مشروحة في [كيف تطلب الريزيدنزا في روما](article:residenza-rome).",
    },

    { type: "h2", id: "codice-fiscale", text: "3. كيف يحصل الطالب على codice fiscale في إيطاليا؟" },
    {
      type: "p",
      text: "في الغالب لا تطلب codice fiscale بنفسك: تسنده Questura مع طلب بطاقة الإقامة. الـ codice fiscale هو رقمك الجبائي الإيطالي، وتحتاجه لعقد كراء أو بنك أو اشتراك هاتف.",
    },
    {
      type: "p",
      text: "إذا احتجته قبل ذلك، فاذهب إلى أي مكتب لـ **Agenzia delle Entrate** مع الاستمارة AA4/8 وجواز سفرك الذي يحمل التأشيرة. تشرح [مطوية Agenzia delle Entrate للمواطنين الأجانب](https://www.agenziaentrate.gov.it/portale/documents/20143/233505/Folder_CodiceFiscaleStranieri_08+03+23.pdf/218dc638-ced1-3b2d-f5f2-912686b1f7fe?t=1682082253716) الإجراء. وفي Sapienza يمكن لشباك HELLO مساعدتك في تعبئة الاستمارات.",
    },

    { type: "h2", id: "bank-account", text: "4. لماذا تحتاج إلى IBAN في أسابيعك الأولى؟" },
    {
      type: "p",
      text: "تحتاج إلى IBAN إيطالي في أسابيعك الأولى لأن DiSCo والكراء وأي أجر تمر كلها عبره.",
    },
    {
      type: "p",
      text: "أمامك بنك (Intesa Sanpaolo وغيره)، أو حساب عبر الإنترنت (Revolut وWise)، أو بطاقة Postepay Evolution المسبقة الدفع مع IBAN. تطلب البنوك الـ codice fiscale. الوثائق، والترتيب الذي تجرب به هذه الحلول، وما تفعله إذا رفضت وكالة فتح الحساب، كلها في [دليل فتح حساب بنكي في إيطاليا للطلاب](article:bank-account-italy-student).",
    },
    {
      type: "fees",
      title: "كلفة Postepay Evolution",
      feeIds: ["postepay-issue", "postepay-year"],
    },
    {
      type: "p",
      text: "حسب [Banca d'Italia](https://economiapertutti.bancaditalia.it/aree-tematiche/conto-corrente/il-conto-di-base/index.html)، يحق لكل شخص مقيم بصفة قانونية في الاتحاد الأوروبي فتح حساب أساسي (conto di base)، وتطلب توجيهاتها الصادرة في أوت 2026 من البنوك قبول وصل طلب الإقامة لفتح هذا الحساب.",
    },

    { type: "h2", id: "finalise-enrolment", text: "5. كيف تتمم التسجيل الجامعي وملف DiSCo بعد الوصول؟" },
    {
      type: "p",
      text: "لا يكتمل التسجيل في جامعة بروما إلا بعد أن تتحقق الجامعة من وثائقك الأصلية، ولكل من Sapienza وTor Vergata وRoma Tre طريقتها في هذا التحقق:",
    },
    {
      type: "callout",
      tone: "note",
      title: "التسجيل والوصل",
      text: "لإتمام التسجيل في الجامعة، أحضر الوصل إن كان لديك: هو مفيد، لكن حسب تجربتي لا تشترطه الجامعة.",
    },
    {
      type: "ul",
      items: [
        "**Sapienza**: أرسل وصل الإقامة إلى [International Student Office](https://www.uniroma1.it/en/pagina/international-student-office)، ثم احجز موعدًا للتحقق من وثائقك الأصلية.",
        "**Tor Vergata**: قدّم تأشيرتك ووثائقك الأصلية والإقامة (أو الوصل) في International Students Office، ثم ادفع القسط الأول ([الوثائق المطلوبة](https://www-2023.studenti.uniroma2.it/en/documenti-richiesti-per-liscrizione-con-titolo-estero/)).",
        "**Roma Tre**: احجز موعدًا في مكتب الشهادات الأجنبية، Via Ostiense 129، واحمل وثائقك الأصلية ([تسجيل غير الأوروبيين](https://portalestudente.uniroma3.it/en/enrollment/enrollment-with-a-foreign-qualification/non-eu-citizens/)).",
      ],
    },
    { type: "h3", id: "unlock-transfers", text: "فتح التحويلات الشهرية من عائلتك في تونس" },
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
      text: "لست مجبرًا على التسجيل في المنظومة الصحية الوطنية (SSN) التي تكلّف حوالي 700 يورو في السنة ([Tor Vergata، 2024](https://web.uniroma2.it/en/contenuto/health-insurance))، إذ يُقبل بدلها تأمين صحي خاص صالح في إيطاليا طوال مدة بطاقة الإقامة. حسب تجربتي، تأمين صحي تأخذه في تونس، مثلًا عن طريق بنكك التونسي عند فتح ملف الدراسة، يعوّض التسجيل في SSN بـ 700 يورو؛ تأكد أنه يغطي إيطاليا طوال مدة الإقامة. وتحقق من المبلغ الحالي للـ SSN لدى ASL أو جامعتك.",
    },
    {
      type: "fees",
      title: "معلوم التسجيل في SSN (فقط إذا اخترته)",
      feeIds: ["ssn-voluntary"],
    },

    { type: "h2", id: "first-month-budget", text: "6. كم تحتاج من المال لشهرك الأول في روما؟" },
    {
      type: "p",
      text: "شهرك الأول في روما يقوم على منحة الاستقرار: يمكن لبنكك في تونس أن يحوّل منحة استقرار (allocation d'installation) تصل إلى **6,000 دينار** في السنة الجامعية (حوالي 1,782 يورو حسب سعر البنك المركزي التونسي في 7 أكتوبر 2026). التحويلات الشهرية لا تبدأ إلا بعد وصول وثائق التسجيل إلى البنك، لذلك يجب أن تكفيك منحة الاستقرار حتى ذلك الحين.",
    },
    {
      type: "figure",
      src: "/blog/tram-rome.webp",
      width: 1600,
      height: 1067,
      alt: "ترامواي أخضر وفضي على الخط 8 في Largo di Torre Argentina بروما",
      caption: "ترامواي الخط 8 في Largo di Torre Argentina. تحقق من السعر الحالي للاشتراك الشهري لدى ATAC قبل وضع ميزانيتك.",
      credit: {
        text: "الصورة: Mariordo (Mario Roberto Durán Ortiz)، CC BY-SA 4.0، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Roma_ATAC_tram_04_2016_6386.JPG",
      },
    },
    {
      type: "table",
      caption: "كيف تصرف منحة الاستقرار (6,000 دينار) بحذر (المبالغ الثلاثة الأولى فقط مؤكدة).",
      head: ["البند", "التكلفة", "نصيحة"],
      rows: [
        ["ظرف طلب الإقامة", "حوالي 116 يورو (مؤكد)", "ادفعه أولًا، في أسبوعك الأول."],
        ["Postepay Evolution", "5 يورو + 19 يورو في السنة (مؤكد)", "يمنحك IBAN من أجل DiSCo والكراء."],
        ["اشتراك النقل العمومي", "35 يورو شهريًا أو 250 يورو سنويًا (مؤكد)", "تحقق من عروض الطلبة على موقع ATAC."],
        ["شريحة الهاتف والشهر الأول", "تحقق من الأسعار الحالية", "قارن العروض قبل الشراء."],
        ["الأكل لمدة شهر", "تحقق من الأسعار الحالية", "اطبخ في البيت؛ وجبات DiSCo لا تبدأ إلا بعد إسناد المنحة."],
        ["الغرفة: أول كراء والضمان", "تحقق من الأسعار الحالية", "احسب أول كراء والضمان معًا."],
        ["احتياطي للطوارئ", "10 إلى 15% من المنحة", "لا تلمسه إلا عند الضرورة."],
      ],
    },
    {
      type: "fees",
      title: "اشتراكات النقل العمومي في روما (ATAC)",
      feeIds: ["atac-monthly", "atac-annual"],
    },
    {
      type: "p",
      text: "اشترِ المستعمل على [Subito](https://www.subito.it): الأثاث والدراجة والكتب. ولا تدفع أبدًا ضمان غرفة قبل أن تراها؛ اقرأ [كيف تتجنب الاحتيال في سكن الطلبة بروما](article:student-housing-rome#avoid-scams).",
    },

    { type: "h2", id: "student-work", text: "7. هل يمكنك العمل ببطاقة الإقامة للدراسة في إيطاليا؟" },
    {
      type: "p",
      text: "نعم، في حدود معينة: تسمح بطاقة الإقامة للدراسة بالعمل حتى **20 ساعة في الأسبوع**، وبحد أقصى **1,040 ساعة في السنة** ([DPR 394/1999، المادة 14](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1999-08-31;394~art14)). ويمكنك أن تبدأ العمل بوصل الإقامة (ricevuta) في انتظار البطاقة.",
    },
    {
      type: "p",
      text: "أين تبحث (Subito وIndeed ووكالات التشغيل المؤقت ومكاتب التشغيل في الجامعات)، وكيف تنشر ملفك، وكيف تكشف العروض الكاذبة: اطلع على [كيف تجد عملًا للطلبة في روما](article:student-jobs-rome).",
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
          a: "8 أيام عمل من وصولك إلى إيطاليا، حسب Polizia di Stato. تقدم الطلب بإرسال ظرف طلب الإقامة ذي الشريط الأصفر من مكتب بريد فيه شباك Sportello Amico، مع نسخة من جواز السفر والتأشيرة، والتأمين الصحي، وإثبات مواردك المالية، وطابع جبائي بـ 16 يورو. بعد ذلك يثبت وصل البريد أنك قدمت الطلب إلى أن تصلك البطاقة.",
        },
        {
          q: "كم تكلف إقامة الدراسة في إيطاليا؟",
          a: "حوالي 116.46 يورو في مكتب البريد لإقامة من 3 إلى 12 شهرًا: طابع جبائي بـ 16 يورو، ورسوم بريد بـ 30 يورو، وbollettino بـ 70.46 يورو (مبالغ تم التحقق منها في أكتوبر 2026). لإقامة تتجاوز سنة واحدة وحتى سنتين تكون المساهمة 50 يورو، فيصبح المجموع 126.46 يورو. اسأل في الشباك عن طرق الدفع المقبولة.",
        },
        {
          q: "كيف أحصل على codice fiscale في روما؟",
          a: "في الغالب لا تطلبه بنفسك: تسند Questura الـ codice fiscale مع طلب بطاقة الإقامة. إذا احتاجه صاحب سكن أو بنك قبل ذلك، فاذهب إلى أي مكتب لـ Agenzia delle Entrate مع الاستمارة AA4/8 وجواز سفرك الذي يحمل التأشيرة. وفي Sapienza يمكن لشباك HELLO مساعدتك في تعبئة الاستمارات.",
        },
        {
          q: "ماذا أفعل بوصل طلب الإقامة؟",
          a: "وصل طلب الإقامة (ricevuta) يثبت أنك قدمت طلب بطاقة الإقامة إلى أن تصلك البطاقة. قدّم الوصل مع جواز سفرك لفتح حساب بنكي، واشتراك هاتف، والحصول على codice fiscale، وإمضاء عقد عمل، وإكمال خطوات DiSCo. احتفظ بالأصل في مكان آمن واحمل نسخة منه معك.",
        },
        {
          q: "هل يمكنني العودة إلى تونس وأنا أنتظر الإقامة؟",
          a: "لا يُنصح بذلك: تنصح سفارة إيطاليا في تونس الطلبة بعدم مغادرة إيطاليا قبل صدور بطاقة الإقامة. تذكر Polizia di Stato أن المعالجة تستغرق حوالي 60 يومًا، وتنبه Sapienza إلى أنها قد تصل إلى حوالي 90 يومًا، لذلك خطط لسفرك بعد استلام بطاقتك.",
        },
        {
          q: "كم يستغرق الحصول على بطاقة الإقامة للدراسة؟",
          a: "حوالي 60 يومًا حسب Polizia di Stato، مع أن Sapienza تنبه إلى أنها قد تصل إلى حوالي 90 يومًا. بعد إرسال الظرف، تذهب إلى موعد Questura المذكور في رسالة الاستدعاء لأخذ البصمات، وتتابع حالة ملفك على بوابة Polizia di Stato ببيانات الوصل.",
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
