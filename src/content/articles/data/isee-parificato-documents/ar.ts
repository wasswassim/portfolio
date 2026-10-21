import type { ArticleTranslation } from "../../types";

// Arabic version of en.ts (same heading ids, six figures, one table). Italian and French document names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "isee-parificato-documents-scholarship-italy",
  title: "ما هي وثائق الـ ISEE parificato (التصريح الضريبي الأجنبي) لاستكمال طلب المنحة الدراسية في إيطاليا؟",
  subtitle: "كل وثيقة عائلية تونسية يطلبها الـ CAF، ماذا تثبت ومن أين تستخرجها",
  seoTitle: "وثائق الـ ISEE parificato للطلبة التونسيين",
  metaDescription:
    "وثائق الـ ISEE parificato في الـ CAF واحدة بواحدة: مضمون حياة جماعية، مضمون ولادة، التصريح الضريبي، عدم الملكية، عقد الكراء، التسجيل، ومن أين تستخرجها.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["وثائق ISEE parificato", "وثائق ISEEUP في CAF", "وثائق المنحة في إيطاليا للطلبة التونسيين", "شهادة عدم ملكية ISEE", "وثائق CAF لمنحة DiSCo"],
  summary:
    "للحصول على الـ ISEE parificato (ISEEUP) في CAF شريك لـ DiSCo، يحضر الطالب التونسي مضمون حياة جماعية، ومضمون ولادة، والتصريح الضريبي لكل فرد من العائلة، وشهادة عدم ملكية عقارات مسجلة لكل فرد، وعقد كراء منزل العائلة إذا كانت تكتري، وشهادة التسجيل في الجامعة الإيطالية. كل وثيقة تونسية يجب أن تكون رسمية ومترجمة إلى الإيطالية وعليها apostille، لأن التصريح على الشرف غير مقبول.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية فقط. يعرض الوثائق التي قدمناها إلى الـ CAF من أجل الـ ISEE parificato الخاص بنا، وما يطلبه إعلان DiSCo Lazio. الشروط قد تتغير كل سنة وقد تحتاج وضعية عائلتك وثائق أخرى، لذلك راجع دائمًا الإعلان الحالي واسأل الـ CAF قبل الموعد.",
    },
    { type: "p", text: "**قدّمت طلب منحة DiSCo والآن يطلب منك الـ CAF وثائق عائلتك. ما هي بالضبط، ومن أين تستخرجها في تونس؟**" },
    {
      type: "p",
      text: "الجواب باختصار: ست وثائق، خمس تونسية وواحدة من جامعتك الإيطالية. معًا، تُبيّن للـ CAF من هم أفراد عائلتك، وكم ربح كل فرد، وماذا يملك، وكم يدفع من كراء. ومنها يحسب الـ CAF الـ **ISEE parificato** الخاص بك (ISEEUP)، أي النسخة الأجنبية من التصريح الضريبي ISEE التي يُرتَّب على أساسها الطلبة للمنحة.",
    },
    {
      type: "p",
      text: "تشرح هذه الصفحة كل وثيقة مع صورة لعنوانها حتى تتعرّف عليها. أما المنحة نفسها (المبالغ والشروط والمواعيد) فتجدها في [منحة DiSCo Lazio للطلبة التونسيين](article:lazio-disco-scholarship).",
    },

    { type: "h2", id: "documents-list", text: "1. ما هي الوثائق التي يطلبها الـ CAF من أجل الـ ISEE parificato؟" },
    {
      type: "p",
      text: "يطلب إعلان DiSCo Lazio وثائق رسمية حول تركيبة عائلتك، ومداخيل كل فرد، وعقاراتهم وممتلكاتهم في 31 ديسمبر، والكراء المدفوع لمنزل العائلة. هذه هي الوثائق التي قدمناها، وما تثبته كل واحدة:",
    },
    {
      type: "table",
      caption: "وثائق الـ ISEE parificato، ماذا تثبت كل واحدة ومن أين تُستخرج.",
      head: ["الوثيقة", "ماذا تثبت", "من أين تُستخرج"],
      rows: [
        ["مضمون حياة جماعية (certificat de vie collective)", "من هم أفراد أسرتك", "مكتب الحالة المدنية بالبلدية (تونس)"],
        ["مضمون ولادة (extrait de naissance)", "هويتك ووالداك", "مكتب الحالة المدنية بالبلدية (تونس)"],
        ["التصريح بالضريبة على الدخل", "دخل كل فرد في السنة المطلوبة", "القباضة المالية (تونس)"],
        ["شهادة عدم ملكية", "أن الفرد لا يملك عقارات مسجلة", "الديوان الوطني للملكية العقارية (تونس)"],
        ["عقد كراء منزل العائلة", "الكراء الذي تدفعه عائلتك", "صاحب منزل العائلة (تونس)"],
        ["Certificato di iscrizione", "أنك مسجل في الجامعة", "جامعتك الإيطالية"],
      ],
    },
    {
      type: "p",
      text: "بعض الوثائق تُقدَّم مرة لكل فرد من العائلة. في ملفنا، كان التصريح الضريبي وشهادة عدم الملكية موجودين **مرة لكل فرد**، بنفس العنوان على كل نسخة. هذا عادي: الـ CAF يحتاج وضعية كل فرد، وليس وضعية أحد الوالدين فقط.",
    },

    { type: "h2", id: "family-status-certificate", text: "2. مضمون حياة جماعية: من هم أفراد عائلتك؟" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-status-certificate.webp",
      width: 1600,
      height: 153,
      alt: "عنوان ترجمة إيطالية: Certificato di vita collettivo",
      caption: "الترجمة الإيطالية لمضمون الحياة الجماعية. يظهر العنوان فقط.",
    },
    {
      type: "p",
      text: "مضمون الحياة الجماعية (*certificat de vie collective*، وبالإيطالية *certificato di vita collettivo*) يذكر الأشخاص الذين يعيشون معًا كعائلة واحدة: غالبًا والداك وأبناؤهما. يستعمله الـ CAF على أنه **تركيبة العائلة** التي يطلبها الإعلان، مع اسم ولقب وتاريخ ولادة كل فرد.",
    },
    {
      type: "p",
      text: "**من أين تستخرجه:** من مكتب الحالة المدنية في بلديتك في تونس. اطلب النسخة الفرنسية لأنها أسهل في الترجمة إلى الإيطالية.",
    },

    { type: "h2", id: "birth-certificate", text: "3. مضمون الولادة: إثبات هويتك" },
    {
      type: "figure",
      src: "/blog/caf-documents/birth-certificate.webp",
      width: 1600,
      height: 214,
      alt: "عنوان ترجمة إيطالية: Estratto dai registri dello stato civile, Nascite, versione francese",
      caption: "الترجمة الإيطالية لمضمون الولادة. يظهر العنوان فقط.",
    },
    {
      type: "p",
      text: "مضمون الولادة (*extrait de naissance*، وبالإيطالية *estratto dai registri dello stato civile, nascite*) يثبت هويتك ويذكر اسمي والديك. ومع مضمون الحياة الجماعية، يربطك بالعائلة التي يحسب الـ CAF مداخيلها وممتلكاتها.",
    },
    {
      type: "p",
      text: "**من أين تستخرجه:** من مكتب الحالة المدنية بالبلدية في تونس. اطلب هنا أيضًا النسخة الفرنسية.",
    },

    { type: "h2", id: "income-tax-return", text: "4. التصريح الضريبي: كم ربح كل فرد" },
    {
      type: "figure",
      src: "/blog/caf-documents/income-tax-return.webp",
      width: 1600,
      height: 174,
      alt: "عنوان ترجمة إيطالية: Dichiarazione di imposta sul reddito delle persone fisiche",
      caption: "الترجمة الإيطالية للتصريح بالضريبة على الدخل. نسخة لكل فرد له دخل.",
    },
    {
      type: "p",
      text: "التصريح بالضريبة على دخل الأشخاص الطبيعيين (*déclaration de l'impôt sur le revenu des personnes physiques*، وبالإيطالية *dichiarazione di imposta sul reddito delle persone fisiche*) يُبيّن الدخل الخام لكل فرد من العائلة. يطلب الإعلان دخل سنة محددة، قبل الإعلان بسنتين: **2024 بالنسبة لإعلان 2026/27**. تأكّد أن السنة المكتوبة في التصريح هي السنة التي يطلبها إعلانك.",
    },
    {
      type: "p",
      text: "**من أين تستخرجه:** نسخة مختومة من التصريح المودع لدى إدارة الجباية، من *القباضة المالية* التي أُودع فيها. واحدة لكل فرد له دخل.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "الفرد الذي ليس له دخل يحتاج أيضًا وثيقة",
      text: "إذا لم يكن لأحد أفراد العائلة أي دخل، فيجب أن تذكر ذلك وثيقة رسمية بوضوح. التصريح على الشرف غير مقبول. ومجموع دخل العائلة لا يمكن أن يكون صفرًا، وإلا يُقصى الطلب.",
    },

    { type: "h2", id: "non-ownership-certificate", text: "5. شهادة عدم الملكية: إثبات أنه لا توجد عقارات" },
    {
      type: "figure",
      src: "/blog/caf-documents/non-ownership-certificate.webp",
      width: 1600,
      height: 237,
      alt: "عنوان ترجمة إيطالية: Certificato di non proprietà di beni registrati",
      caption: "الترجمة الإيطالية لشهادة عدم ملكية عقارات مسجلة. نسخة لكل فرد من العائلة.",
    },
    {
      type: "p",
      text: "شهادة عدم الملكية (*certificat de non-propriété*، وبالإيطالية *certificato di non proprietà di beni registrati*) تثبت أن الشخص لا يملك أي عقار مسجل. الإعلان يطلب عقارات كل فرد في 31 ديسمبر، لذلك يثبت الفرد الذي لا يملك شيئًا ذلك بهذه الشهادة.",
    },
    {
      type: "p",
      text: "**من أين تستخرجها:** من الإدارة الجهوية لـ *الديوان الوطني للملكية العقارية*، التابع لوزارة أملاك الدولة والشؤون العقارية. اطلب واحدة لكل فرد من العائلة.",
    },
    {
      type: "p",
      text: "إذا كانت عائلتك **تملك** منزلًا أو أرضًا، فهذه الشهادة لا تكفي: الإعلان يطلب كل عقار مع مساحته بالمتر المربع. اسأل الـ CAF عن وثائق الملكية التي يجب إحضارها.",
    },

    { type: "h2", id: "family-rental-contract", text: "6. عقد الكراء: الكراء الذي تدفعه عائلتك" },
    {
      type: "figure",
      src: "/blog/caf-documents/family-rental-contract.webp",
      width: 1600,
      height: 233,
      alt: "عنوان ترجمة إيطالية: Contratto di locazione di un immobile ad uso abitativo",
      caption: "الترجمة الإيطالية لعقد كراء منزل العائلة. يظهر العنوان فقط.",
    },
    {
      type: "p",
      text: "إذا كانت عائلتك تكتري منزلها في تونس، فإن عقد الكراء (*contrat de location*، وبالإيطالية *contratto di locazione di un immobile ad uso abitativo*) يُبيّن الكراء المدفوع. الإعلان يطلبه لأن كراء منزل العائلة يُحتسب في حساب الـ ISEE.",
    },
    {
      type: "p",
      text: "**من أين تستخرجه:** عائلتك تملكه أصلًا، موقّعًا مع صاحب المنزل. وإذا كانت العائلة تملك منزلها فلا تحتاجه.",
    },

    { type: "h2", id: "enrolment-certificate", text: "7. Certificato di iscrizione من جامعتك" },
    {
      type: "figure",
      src: "/blog/caf-documents/enrolment-certificate.webp",
      width: 1600,
      height: 384,
      alt: "ترويسة جامعة LUMSA، Libera Università Maria Santissima Assunta في روما، أعلى شهادة تسجيل",
      caption: "أعلى شهادة تسجيل من جامعة LUMSA في روما. بيانات الطالب محذوفة من الصورة.",
    },
    {
      type: "p",
      text: "شهادة التسجيل (*certificato di iscrizione*) تثبت أنك مسجل في جامعة إيطالية للسنة الجامعية الحالية، مع اختصاصك وسنتك. طلبها منا الـ CAF مع وثائق العائلة.",
    },
    {
      type: "p",
      text: "**من أين تستخرجها:** حمّلها من بوابة الطالب في جامعتك أو اطلبها من الكتابة (*segreteria studenti*). هي بالإيطالية أصلًا، فلا تحتاج ترجمة ولا apostille.",
    },

    { type: "h2", id: "translate-and-apostille", text: "8. هل تحتاج الوثائق التونسية إلى ترجمة وapostille؟" },
    {
      type: "p",
      text: "نعم. كل وثيقة تونسية يجب أن تكون **مترجمة إلى الإيطالية وعليها apostille**، والـ CAF لا يقبل مكانها أي تصريح على الشرف. ترجم كل واحدة عند مترجم من قائمة السفارة الإيطالية أو قائمة وزارة العدل التونسية، مع apostille على الأصل وعلى الترجمة.",
    },
    {
      type: "p",
      text: "الترجمة والـ apostille تأخذان وقتًا، فابدأ في تونس قبل موعد الـ CAF بأشهر. السلسلة كاملة، خطوة بخطوة، تجدها في [كيف تترجم وثائقك التونسية وتضع عليها apostille لإيطاليا](article:documents-for-italy#translation).",
    },

    { type: "h2", id: "caf-appointment", text: "9. ماذا تحضر في موعد الـ CAF؟" },
    {
      type: "p",
      text: "احجز الموعد فقط في CAF من قائمة شركاء DiSCo، حيث الخدمة مجانية. اذهب بنفسك ومعك جواز سفرك والـ codice fiscale والملف الكامل للوثائق المترجمة وعليها apostille. الـ CAF يتحقق أيضًا من هويتك لصالح DiSCo.",
    },
    {
      type: "p",
      text: "في إعلان 2026/27، كان يجب توقيع الـ ISEE parificato قبل **10 ديسمبر 2026**، وتجاوز هذا الموعد يعني الإقصاء. راجع كل وثيقة مع هذه القائمة قبل الذهاب، لأن التصحيحات اللاحقة على حسابك. تفاصيل الموعد في [كيف تحصل على ISEEUP في CAF شريك](article:lazio-disco-scholarship#iseeup).",
    },
    {
      type: "callout",
      tone: "tip",
      title: "الادخار والحسابات البنكية",
      text: "الإعلان يحتسب أيضًا الممتلكات المالية، مثل الحسابات البنكية والادخار في 31 ديسمبر. إذا كانت لعائلتك، فاسأل الـ CAF والبنك عن الكشف الرسمي الذي يجب إحضاره.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة متكررة",
      items: [
        {
          q: "ما هي الوثائق المطلوبة للـ ISEE parificato بالنسبة للطالب التونسي؟",
          a: "مضمون حياة جماعية، ومضمون ولادة، والتصريح الضريبي لكل فرد، وشهادة عدم ملكية عقارات مسجلة لكل فرد، وعقد كراء منزل العائلة إذا كانت تكتري، وشهادة تسجيلك في الجامعة. كل وثيقة تونسية يجب أن تكون مترجمة إلى الإيطالية وعليها apostille.",
        },
        {
          q: "ما هو الـ ISEE parificato؟",
          a: "الـ ISEE parificato، ويسمى أيضًا ISEEUP، هو المؤشر الاقتصادي للطلبة الذين توجد مداخيل عائلاتهم وممتلكاتها في الخارج. يحسبه الـ CAF من وثائق عائلتك الرسمية بدلًا من المعطيات الضريبية الإيطالية. وتستعمله DiSCo Lazio للتحقق من شروطك وترتيبك للمنحة.",
        },
        {
          q: "من أين أستخرج شهادة عدم الملكية في تونس؟",
          a: "من الإدارة الجهوية للديوان الوطني للملكية العقارية، التابع لوزارة أملاك الدولة والشؤون العقارية. تثبت الشهادة أن الشخص لا يملك أي عقار مسجل. اطلب واحدة لكل فرد من العائلة، ثم ترجم كل واحدة إلى الإيطالية وضع عليها apostille.",
        },
        {
          q: "لماذا يطلب الـ CAF نسخة من كل وثيقة لكل فرد من العائلة؟",
          a: "لأن الـ ISEE parificato يحتسب الأسرة كلها وليس أنت فقط. يحتاج الـ CAF دخل كل فرد ووضعيته العقارية، لذلك يأتي التصريح الضريبي وشهادة عدم الملكية مرة لكل فرد، بنفس العنوان على كل نسخة.",
        },
        {
          q: "هل تحتاج شهادة التسجيل في الجامعة إلى ترجمة؟",
          a: "لا. الـ certificato di iscrizione تصدره جامعتك الإيطالية بالإيطالية، فلا يحتاج ترجمة ولا apostille. حمّله من بوابة الطالب أو اطلبه من الـ segreteria studenti. الوثائق الصادرة في تونس فقط هي التي تحتاج ترجمة وapostille.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "DiSCo Lazio: أسئلة الطلبة الدوليين (وثائق ISEEUP)", url: "https://laziodisco.it/bando-diritto-allo-studio-2026-2027/faq-studenti-internazionali/" },
        { label: "DiSCo Lazio: إعلان 2026/27 (PDF، بالإنجليزية)", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf" },
        { label: "DiSCo Lazio: مراكز CAF الشريكة في Lazio (PDF)", url: "https://laziodisco.it/wp-content/uploads/2025/06/CAF-convenzionati-nel-Lazio-1.pdf" },
        { label: "DiSCo Lazio: ترجمة الوثائق والمصادقة عليها", url: "https://laziodisco.it/translation-and-legalisation-of-documents-at-italian-embassies-and-consulates-abroad/?lang=en" },
        { label: "السفارة الإيطالية في تونس: قائمة المترجمين (PDF)", url: "https://ambtunisi.esteri.it/wp-content/uploads/2024/10/Lista-traduttori-25-10-2024.pdf" },
        { label: "وزارة العدل التونسية: المترجمون المحلفون حسب الدائرة", url: "https://www.justice.gov.tn/index.php?id=369" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026، على إعلان DiSCo Lazio لسنة 2026/27 وأسئلته المتكررة. سنة الدخل والموعد النهائي يتغيران مع كل إعلان، فراجع الإعلان الحالي قبل جمع وثائقك.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الوثائق", value: "6: خمس تونسية وواحدة من جامعتك" },
        { label: "لكل فرد", value: "التصريح الضريبي وشهادة عدم الملكية لكل واحد" },
        { label: "الشكل", value: "رسمية، مترجمة إلى الإيطالية وعليها apostille" },
        { label: "أين", value: "في CAF شريك لـ DiSCo، مجانًا، حضوريًا" },
        { label: "الموعد 2026/27", value: "التوقيع قبل 10 ديسمبر 2026" },
      ],
    },
    { type: "h2", id: "documents-path", text: "الوثائق باختصار" },
    {
      type: "ol",
      items: [
        "اجمع وثائق العائلة في تونس",
        "[ترجمها وضع عليها apostille](article:documents-for-italy#translation)",
        "حمّل شهادة التسجيل",
        "احجز موعدًا في CAF شريك لـ DiSCo",
        "[وقّع الـ ISEEUP](article:lazio-disco-scholarship#iseeup)",
      ],
    },
  ],
};
