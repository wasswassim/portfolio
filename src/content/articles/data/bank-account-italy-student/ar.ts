import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Bank names and Italian terms stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "open-bank-account-italy-student",
  title: "كيف تفتح حسابًا بنكيًا في إيطاليا كطالب",
  subtitle: "Intesa Sanpaolo وRevolut وWise وconto di base في روما",
  seoTitle: "فتح حساب بنكي في إيطاليا للطلبة: دليل 2026",
  metaDescription:
    "فتح حساب بنكي في إيطاليا للطلبة في روما: الوثائق المطلوبة، وIntesa Sanpaolo بـ 5.90 يورو شهريًا، وIBAN إيطالي من Revolut، وWise، وconto di base إذا رُفض طلبك.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["فتح حساب بنكي في إيطاليا للطلبة", "فتح حساب بنكي في إيطاليا", "حساب بنكي للطالب في إيطاليا", "افضل حساب بنكي في ايطاليا", "شروط فتح حساب بنكي في ايطاليا", "IBAN إيطالي Revolut", "conto di base", "بطاقة Wise تونس", "فتح حساب Revolut في إيطاليا"],
  summary:
    "لفتح حساب بنكي في إيطاليا كطالب، احصل أولًا على codice fiscale إيطالي؛ حسب تجربتي، فتح لي Intesa Sanpaolo بعدها حسابًا جاريًا عاديًا بجواز السفر وشهادة التسجيل، ويكلف XME Conto Silver لديه 5.90 يورو شهريًا في أكتوبر 2026. يعطي Revolut رقم IBAN إيطاليًا للمقيمين في إيطاليا عبر التطبيق، وWise حل احتياطي سهل ببطاقة بـ 7 يورو، ولكل من يقيم بصفة قانونية في الاتحاد الأوروبي حق قانوني في حساب أساسي (conto di base).",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية فقط ولا يمثل استشارة قانونية أو مالية. شروط البنوك وعروضها ومعاليمها تتغير، لذلك تحقق دائمًا من الصفحات الرسمية المذكورة أدناه قبل أن تمضي أو تدفع أي شيء.",
    },
    { type: "p", text: "**وصلت للتو إلى روما. أي حساب تفتح لتحصل على IBAN للكراء ولـ DiSCo وللأجر، وماذا سيطلب منك البنك؟**" },
    {
      type: "p",
      text: "الجواب باختصار: حسب تجربتي وتجربة طلبة آخرين، **Intesa Sanpaolo** هو الخيار الأول الأفضل. فتحت حسابًا جاريًا عاديًا (حوالي 6 يورو شهريًا) بثلاث وثائق فقط: codice fiscale وجواز السفر وشهادة التسجيل في الجامعة. **Revolut** هو البديل السريع عبر التطبيق، و**Wise** هو الحل الاحتياطي السهل، و**conto di base** حق قانوني إذا رفضك بنك.",
    },
    {
      type: "p",
      text: "هذا هو الجزء الأول من سلسلة الاستقرار في روما بعد الوصول. إذا بقيت عليك معاليم تدفعها قبل السفر، اقرأ أولًا [كيف يدفع التونسيون المعاليم الإيطالية ببطاقة دولية](article:international-card-tunisia). ولتعرف مكان IBAN بين إجراءاتك الأخرى، راجع [خطوة IBAN في أول 30 يومًا لك في روما](article:arriving-in-rome#bank-account).",
    },

    { type: "h2", id: "what-you-need", text: "1. ما الوثائق المطلوبة لفتح حساب بنكي في إيطاليا؟" },
    {
      type: "p",
      text: "لفتح حساب بنكي في إيطاليا تحتاج إلى **codice fiscale** إيطالي وجواز سفرك؛ وفي حالتي طلب Intesa Sanpaolo أيضًا شهادة التسجيل في الجامعة. احصل أولًا على codice fiscale، فكل البنوك الإيطالية تطلبه. يصلك codice fiscale عادة مع طلب الإقامة؛ راجع [كيف تحصل على codice fiscale في روما](article:arriving-in-rome#codice-fiscale).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "أحضر وصل الإقامة",
      text: "إذا كنت قد قدمت طلب الإقامة، قدّم دائمًا **الوصل (ricevuta)** مع جواز سفرك. البنوك تنتظره، فهو الوثيقة التي تثبت أن إقامتك قانونية في انتظار صدور البطاقة.",
    },
    {
      type: "ul",
      items: [
        "**ما طُلب مني:** codice fiscale، وجواز السفر (مع تأشيرة الدراسة)، وشهادة التسجيل في الجامعة.",
        "**مفيد أن تحمله، حسب تجربتي:** ملخص التسجيل المسبق (pre-enrolment)، وشهادة بنكك التونسي حول الأموال المجمدة التي تبيّن التحويلات الشهرية التي ستصل إلى حسابك الإيطالي (راجع [كيف يعمل الحساب المجمد لتأشيرة الدراسة](article:italy-student-visa#blocked-account)).",
        "**احتفظ معك أيضًا:** بوصل البريد (ricevuta) الخاص بطلب الإقامة.",
      ],
    },
    {
      type: "p",
      text: "الأوراق الإضافية في هذه القائمة ليست شروطًا رسمية. هي فقط تُظهر لفرع البنك من أنت، ولماذا أنت في روما، ومن أين يأتي مالك.",
    },

    { type: "h2", id: "intesa-sanpaolo", text: "2. هل Intesa Sanpaolo أفضل بنك يبدأ به الطالب؟" },
    {
      type: "p",
      text: "حسب تجربتي وتجربة طلبة آخرين، نعم: Intesa Sanpaolo هو أفضل بنك يبدأ به الطالب غير الأوروبي في روما، وقد فتحت فيه حسابي الجاري بثلاث وثائق فقط: codice fiscale وجواز السفر وشهادة التسجيل. Intesa Sanpaolo من أكبر البنوك في إيطاليا، وفروعه منتشرة في كل روما. تقول [الأسئلة الشائعة الرسمية](https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html) إن الأجنبي المقيم في إيطاليا يمكنه فتح حساب عبر التطبيق أو الإنترنت أو في الفرع، **فقط إذا كان لديه codice fiscale إيطالي**.",
    },
    {
      type: "figure",
      src: "/blog/intesa-sanpaolo-branch.webp",
      width: 1600,
      height: 1200,
      alt: "مدخل فرع لبنك Intesa Sanpaolo في إيطاليا عند زاوية شارع، ولافتات خضراء فوق أبواب زجاجية",
      caption: "فرع لبنك Intesa Sanpaolo. أحضر جواز سفرك ووصل طلب الإقامة والـ codice fiscale، واطلب حسابًا جاريًا (conto corrente).",
      credit: {
        text: "الصورة: Pava، CC BY-SA 3.0 IT، عبر Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:-_ITALY_-_Intesa_Sanpaolo_filiale.JPG",
      },
    },
    {
      type: "fees",
      title: "الحساب الجاري في Intesa Sanpaolo (أكتوبر 2026)",
      feeIds: ["intesa-xme-silver"],
    },
    {
      type: "p",
      text: "العرض الحالي لـ Intesa Sanpaolo للحرفاء الجدد هو **XME Conto Silver** بـ 5.90 يورو شهريًا (حسب ورقة المعاليم المحدّثة في 1 أكتوبر 2026)، أو 2.90 يورو شهريًا عند تحويل أجر إلى الحساب. أول بطاقة دفع دون معلوم، والسحب من موزعات المجموعة مجاني ([XME Conto Silver](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html)).",
    },
    {
      type: "p",
      text: "لا يقدم Intesa نفسه حسابًا خاصًا بمن هم دون 35 سنة. أما البنك الرقمي التابع للمجموعة، [isybank](https://www.isybank.com/)، فيقدم باقة **isyPrime** بـ 0 يورو شهريًا حتى سن 35. لم أتمكن من التأكد من شروط isybank للطلبة غير الأوروبيين، فراجع أسئلته الشائعة قبل أن تعتمد عليه.",
    },
    { type: "h3", id: "step-choose-branch", text: "الخطوة 1: اختر فرعًا قريبًا من جامعة" },
    {
      type: "p",
      text: "حسب تجربتي وتجربة طلبة آخرين، فروع Intesa Sanpaolo القريبة من الجامعات والمركّبات الجامعية متعوّدة على الطلبة غير الأوروبيين، وعادة ما تفتح هذه الحسابات دون مشاكل. اسأل مكتب الطلبة الدوليين في جامعتك أو الطلبة القدامى عن الفرع الذي يتعاملون معه.",
    },
    { type: "h3", id: "step-open-account", text: "الخطوة 2: اطلب حسابًا جاريًا وقدّم وثائقك" },
    {
      type: "p",
      text: "قل إنك طالب دولي وتريد حسابًا جاريًا (conto corrente). قدّم codice fiscale وجواز السفر وشهادة التسجيل، واسأل فرع Intesa Sanpaolo إن كانت تنقصك أي ورقة.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "إذا رفضك فرع",
      text: "حسب تجربتي، رفض فرع واحد من فروع Intesa Sanpaolo لا يعني أن البنك رفضك. في أغلب الأحيان، ذلك الفرع لم يكن يعرف الإجراء الخاص بالطلبة غير الأوروبيين. جرّب فرعًا آخر، ويُفضّل قرب جامعة. الشروط قد تتغير، فتحقق من صفحات Intesa الرسمية.",
    },

    { type: "h2", id: "revolut", text: "3. هل يمكن للطالب الحصول على IBAN إيطالي من Revolut؟" },
    {
      type: "p",
      text: "نعم: يعطي [Revolut](ref:revolut) رقم **IBAN إيطاليًا** (يبدأ بـ IT) للحرفاء المقيمين في إيطاليا (مساعدة Revolut)، فيمكن للطالب الحصول عليه من التطبيق بعد وصوله. في أكتوبر 2026، أسعار باقات Revolut: Standard مجانية، وPlus بـ 3.99 يورو، وPremium بـ 9.99 يورو، وMetal بـ 15.99 يورو شهريًا.",
    },
    {
      type: "figure",
      src: "/blog/brand/revolut-app.webp",
      width: 600,
      height: 360,
      alt: "شعار Revolut خلف هاتف يعرض أيقونة تطبيق Revolut",
      caption: "يعمل Revolut بالكامل من التطبيق: التسجيل والتحقق من الهوية ورقم IBAN الإيطالي. الصورة: Revolut",
    },
    {
      type: "p",
      text: "لا يفتح Revolut حسابات شخصية للمقيمين في تونس (الدول المقبولة)، لذلك افتحه **بعد وصولك** بعنوانك الإيطالي. استعد للتحقق من هويتك بصورة سيلفي، واجعل codice fiscale في متناولك إذا طلبه التطبيق.",
    },
    { type: "h3", id: "revolut-tessera-sanitaria", text: "إذا طلب التطبيق Tessera Sanitaria" },
    {
      type: "p",
      text: "أثناء التسجيل، قد يطلب تطبيق Revolut **Tessera Sanitaria** (البطاقة الصحية الإيطالية)، وأغلب الطلبة الجدد لا يملكونها بعد. حسب تجربتي وتجربة طلبة آخرين، نجح رفع **الوثيقة الرسمية لـ codice fiscale** مكانها. قد تُرفض وثيقة codice fiscale في المرة الأولى؛ وإعادة إرسالها عادة ما تحيل الحساب إلى مراجعة يدوية يقوم بها موظف. استغرقت مراجعتي 3 أيام عمل وتمت الموافقة.",
    },
    {
      type: "p",
      text: "بعد الموافقة على حساب Revolut، تحصل على رقم IBAN إيطالي مباشرة في التطبيق؛ وإن أردت واحدًا، يمكنك التسجيل عبر رابط الشريك أدناه.",
    },
    { type: "referral", provider: "revolut" },
    {
      type: "callout",
      tone: "warning",
      title: "وثائقك الحقيقية فقط",
      text: "لم أجد أي صفحة رسمية لـ Revolut تذكر شرط Tessera Sanitaria، فهذه تجربة وليست قاعدة. لا ترسل أبدًا إلا وثائقك الشخصية الحقيقية.",
    },

    { type: "h2", id: "compare", text: "4. Intesa أو Revolut أو Wise أو conto di base: مقارنة" },
    {
      type: "table",
      caption: "الخيارات الأربعة للطالب في روما (الأسعار في أكتوبر 2026؛ تحقق لدى كل مزوّد قبل التسجيل).",
      head: ["الخيار", "التكلفة الشهرية", "IBAN والوثائق", "الأنسب لـ"],
      rows: [
        ["Intesa Sanpaolo XME Conto Silver", "5.90 يورو (2.90 يورو مع أجر)", "IBAN إيطالي؛ codice fiscale، جواز السفر، شهادة التسجيل (حالتي)", "حسابك الرئيسي للكراء وDiSCo والأجر"],
        ["Revolut", "Standard مجانية؛ Plus بـ 3.99 يورو", "IBAN إيطالي للمقيمين في إيطاليا؛ هوية، سيلفي، عنوان إيطالي", "حساب سريع من التطبيق"],
        ["Wise", "دون معلوم شهري؛ البطاقة 7 يورو مرة واحدة", "معطيات حساب باليورو؛ هوية، سيلفي، عنوان في بلد مؤهل", "بطاقة احتياطية وتحويل عملة رخيص"],
        ["Conto di base (Intesa)", "30 يورو سنويًا؛ مجاني إذا كان ISEE أقل من 11.600 يورو", "IBAN إيطالي؛ هوية، codice fiscale، إقامة قانونية في الاتحاد الأوروبي", "عندما يرفض بنك فتح حساب عادي"],
      ],
    },

    { type: "h2", id: "wise", text: "5. هل Wise حل احتياطي جيد في إيطاليا؟" },
    {
      type: "p",
      text: "نعم، Wise حل احتياطي سهل، وهو آخر خيار تجربه: [Wise](ref:wise) ليس بنكًا، لكن حساب Wise يعطيك **معطيات حساب باليورو** (تصدرها Wise Europe في بروكسل، أي رقم IBAN بلجيكي) وبطاقة دفع. يجب أن يكون لك عنوان مسجّل في بلد يوفّر فيه Wise معطيات باليورو (مساعدة Wise).",
    },
    {
      type: "figure",
      src: "/blog/brand/wise-card.webp",
      width: 400,
      height: 500,
      alt: "يد تضع بطاقة Wise الخضراء في جيب قميص",
      caption: "بطاقة الدفع من Wise: للمقيمين في إيطاليا، تكلف البطاقة الفعلية 7 يورو مرة واحدة. الصورة: Wise",
    },
    {
      type: "fees",
      title: "بطاقة Wise (للمقيمين في إيطاليا، أكتوبر 2026)",
      feeIds: ["wise-card"],
    },
    {
      type: "ul",
      items: [
        "التسجيل والحساب مجانيان؛ البطاقة الفعلية بـ 7 يورو (معاليم بطاقة Wise).",
        "السحب من الموزعات مجاني حتى 250 يورو شهريًا، ثم 2.69% مما يتجاوز ذلك.",
        "تحويل العملة يبدأ من 0.2% حسب العملة (أسعار Wise).",
      ],
    },
    {
      type: "p",
      text: "وعند التسجيل عبر رابط الشريك أدناه، تحصل أيضًا على هدية: تحويل واحد دون عمولة، في حدود المبلغ الذي يعرضه Wise عند التسجيل.",
    },
    { type: "referral", provider: "wise" },
    {
      type: "p",
      text: "يبدو أن التسجيل في Wise ممكن وأنت مقيم في تونس، لكن بطاقة Wise غير متوفرة هناك (دول البطاقة). لم أتمكن من التأكد من أن Wise يستقبل تحويلات بالدينار من بنك تونسي، فلا تبنِ تحويلاتك الشهرية عليه.",
    },

    { type: "h2", id: "basic-account", text: "6. ما هو conto di base، وهل يمكن للبنك أن يرفضه؟" },
    {
      type: "p",
      text: "conto di base حساب بنكي أساسي يضمنه القانون الإيطالي (TUB، الفصل 126-noviesdecies) لكل مستهلك يقيم بصفة قانونية في الاتحاد الأوروبي، **مهما كان مكان إقامته**. في 5 أوت 2026، نبّه [Banca d'Italia](https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/) البنوك إلى أن الوصول إلى هذا الحساب يُعرقل أحيانًا دون مبرر، وإلى أن أنظمتها يجب أن تقبل وثائق مشروعة مثل **وصل طلب الإقامة**.",
    },
    {
      type: "fees",
      title: "conto di base في Intesa Sanpaolo (أكتوبر 2026)",
      feeIds: ["intesa-conto-base"],
    },
    {
      type: "p",
      text: "في Intesa، يكلف [conto di base](https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html) 30 يورو سنويًا، وهو مجاني إذا كان ISEE أقل من 11.600 يورو. وللحصول على conto di base في Intesa Sanpaolo، يُشترط ألا يكون لك حساب دفع آخر.",
    },
    {
      type: "p",
      text: "الحق في conto di base ليس مطلقًا، فمراقبة تبييض الأموال تبقى سارية. إذا رفضك بنك، **اطلب سبب الرفض كتابيًا**؛ فـ Banca d'Italia تنتظر من البنوك أن تشرح أسباب رفضها.",
    },

    { type: "h2", id: "which-to-choose", text: "7. أي حساب تفتح أولًا؟" },
    {
      type: "p",
      text: "حسب تجربتي، أغلب الطلبة في روما يُستحسن أن يفتحوا أولًا حسابًا جاريًا في Intesa Sanpaolo؛ أما Revolut وWise وconto di base فتغطي الحالات الأخرى.",
    },
    {
      type: "ul",
      items: [
        "**الحساب الرئيسي:** Intesa Sanpaolo، في فرع قريب من جامعتك، بمجرد أن تحصل على codice fiscale.",
        "**تحتاج IBAN اليوم:** Revolut من التطبيق، بعد أن يصبح لك عنوان إيطالي.",
        "**بطاقة احتياطية:** Wise.",
        "**رُفضت في كل مكان:** اطلب conto di base مع وصل الإقامة.",
      ],
    },
    {
      type: "p",
      text: "مهما كان الحساب الذي تختاره، يجب أن يكون IBAN باسمك، لأن DiSCo Lazio تصرف المنحة في حسابك؛ راجع [متى تصرف DiSCo Lazio المنحة](article:lazio-disco-scholarship#payments).",
    },
    {
      type: "p",
      text: "بعد أن يصبح لك IBAN إيطالي باسمك، الخطوات التالية للاستقرار هي [التسجيل في الريزيدنزا (residenza) في روما لدى anagrafe](article:residenza-rome) و[إيجاد عمل طلابي في روما](article:student-jobs-rome)، حيث يدفع المشغّلون الأجر بتحويل بنكي.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "هل يمكن فتح حساب بنكي في إيطاليا بجواز السفر وcodice fiscale فقط؟",
          a: "نعم حسب تجربتي، بشرط أن تقدّم أيضًا شهادة التسجيل: هكذا فتحت حسابي الجاري في Intesa Sanpaolo في روما. رسميًا، يشترط Intesa Sanpaolo codice fiscale إيطاليًا للأجانب المقيمين في إيطاليا، وقد يطلب الفرع وثائق إضافية، مثل الوصل (ricevuta) الخاص بطلب الإقامة.",
        },
        {
          q: "ما هو أفضل بنك للطلبة الأجانب في روما؟",
          a: "حسب تجربتي وتجربة طلبة آخرين، Intesa Sanpaolo هو أفضل بنك تبدأ به، في فرع قريب من جامعة يعرف موظفوه الإجراء الخاص بالطلبة غير الأوروبيين. يكلف XME Conto Silver في Intesa Sanpaolo مبلغ 5.90 يورو شهريًا في أكتوبر 2026. وRevolut بديل جيد عبر التطبيق بعد أن تستقر في إيطاليا، لأن Revolut يعطي المقيمين في إيطاليا رقم IBAN إيطاليًا.",
        },
        {
          q: "هل يعطي Revolut رقم IBAN إيطاليًا؟",
          a: "نعم، يعطي Revolut رقم IBAN إيطاليًا يبدأ بـ IT للحرفاء المقيمين في إيطاليا. Revolut لا يفتح حسابات شخصية للمقيمين في تونس، لذلك يسجّل الطالب التونسي بعد وصوله بعنوان إيطالي. وحسب تجربتي، إذا طلب تطبيق Revolut بطاقة Tessera Sanitaria، يمكن أن تنجح الوثيقة الرسمية لـ codice fiscale مكانها بعد مراجعة يدوية.",
        },
        {
          q: "هل يمكن الحصول على بطاقة Wise في تونس؟",
          a: "لا، ليس في أكتوبر 2026: يبدو أن التسجيل في Wise ممكن وأنت مقيم في تونس، لكن بطاقة Wise غير متوفرة للمقيمين في تونس لأنها ليست من دول بطاقة Wise. بعد استقرارك في إيطاليا يمكنك طلب بطاقة Wise كمقيم في إيطاليا بـ 7 يورو. لا تعتمد على Wise في تحويلاتك الشهرية بالدينار، لأن استقبال التحويلات من بنك تونسي لم يتأكد.",
        },
        {
          q: "ماذا أفعل إذا رفض فرع بنكي فتح حسابي؟",
          a: "جرّب أولًا فرعًا آخر، ويُفضّل قرب جامعة: حسب تجربتي، الفرع الأول كثيرًا ما لم يكن يعرف الإجراء الخاص بالطلبة غير الأوروبيين. إذا تواصل الرفض، اطلب conto di base، وهو الحساب الأساسي الذي يضمنه القانون الإيطالي لكل من يقيم بصفة قانونية في الاتحاد الأوروبي، واطلب سبب أي رفض كتابيًا، لأن Banca d'Italia تنتظر من البنوك أن تشرح أسباب رفضها.",
        },
        {
          q: "هل يمكن فتح حساب في إيطاليا قبل الوصول؟",
          a: "عمليًا لا، لا في Intesa Sanpaolo ولا في Revolut: يشترط Intesa Sanpaolo codice fiscale إيطاليًا للأجنبي المقيم في إيطاليا، وRevolut لا يقبل المقيمين في تونس. قد ينجح التسجيل في Wise وأنت مقيم في تونس، لكن بطاقة Wise غير متوفرة هناك، لذلك خطّط لفتح حسابك الرئيسي في أسابيعك الأولى في روما.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Intesa Sanpaolo: أسئلة شائعة حول فتح XME Conto con Piano", url: "https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/apertura-xme-conto-online.privati.html" },
        { label: "Intesa Sanpaolo: XME Conto Silver", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/xme-conto-silver.html" },
        { label: "Intesa Sanpaolo: ورقة معاليم XME Conto Silver (01.10.2026)", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1363.pdf" },
        { label: "Intesa Sanpaolo: conto di base", url: "https://www.intesasanpaolo.com/it/persone-e-famiglie/prodotti/conti-e-libretti/conto-di-base.html" },
        { label: "Intesa Sanpaolo: ورقة معاليم conto di base", url: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1221.pdf" },
        { label: "isybank (مجموعة Intesa Sanpaolo)", url: "https://www.isybank.com/" },
        { label: "Banca d'Italia: توجيهات حول conto di base (5 أوت 2026)", url: "https://www.bancaditalia.it/media/notizia/orientamenti-di-vigilanza-di-tutela-sull-offerta-del-conto-di-base/" },
        { label: "Revolut: الحصول على IBAN إيطالي", url: "https://help.revolut.com/it-IT/help/migration-to-italian-iban/question-getting-an-italian-iban/" },
        { label: "Revolut: الدول المقبولة", url: "https://help.revolut.com/en-US/help/profile-and-plan/profile-plan/verifying-identity/what-countries-are-supported/" },
        { label: "Wise: الأسعار للمقيمين في إيطاليا", url: "https://wise.com/it/pricing/" },
        { label: "Wise: معاليم البطاقة", url: "https://wise.com/it/pricing/card-fees" },
        { label: "Wise: فتح معطيات حساب", url: "https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money" },
        { label: "Wise: توفر البطاقة حسب البلد", url: "https://wise.com/help/articles/2968915/can-i-get-the-wise-card-in-my-country" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. المعاليم هي التي نشرتها البنوك في أكتوبر 2026، والتجربة الشخصية في هذا الدليل هي تجربتي وتجربة طلبة آخرين، وليست قاعدة رسمية. تحقق من الصفحات الرسمية قبل أن تفتح حسابًا.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الخيار الأول (حسب تجربتي)", value: "Intesa Sanpaolo، في فرع قريب من جامعة" },
        { label: "الوثائق في حالتي", value: "codice fiscale، جواز السفر، شهادة التسجيل" },
        { label: "IBAN إيطالي عبر تطبيق", value: "Revolut، بعد الاستقرار في إيطاليا" },
        { label: "في حالة الرفض", value: "اطلب conto di base وسبب الرفض كتابيًا" },
      ],
    },
    { type: "h2", id: "settling-path", text: "الاستقرار في روما خطوة بخطوة" },
    {
      type: "ol",
      items: [
        "فتح حساب بنكي",
        "[التسجيل في الريزيدنزا في روما](article:residenza-rome)",
        "[إيجاد عمل طلابي في روما](article:student-jobs-rome)",
        "[الخطوات الأولى بعد الوصول](article:arriving-in-rome)",
      ],
    },
  ],
};
