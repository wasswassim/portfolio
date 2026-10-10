import type { ArticleTranslation } from "../../types";

// Translation of en.ts. Portal, university and Italian administrative names stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "apply-to-university-in-rome",
  title: "التسجيل في الجامعات الإيطالية للطلاب التونسيين: كيف تترشح في روما",
  seoTitle: "التسجيل في الجامعات الإيطالية للطلاب التونسيين",
  metaDescription:
    "التسجيل في جامعات روما للطلاب التونسيين: كيف تجد اختصاصك، وتترشح في Sapienza وTor Vergata وRoma Tre وLUISS وLUMSA، ثم تكمل التسجيل المسبق على Universitaly.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["التسجيل في الجامعات الإيطالية للطلاب التونسيين", "التسجيل المسبق Universitaly", "الدراسة في روما للطلاب التونسيين", "الترشح في جامعة Sapienza", "الجامعات الإيطالية للطلاب الأجانب", "Luiss Test"],
  summary:
    "للدراسة في روما كطالب تونسي، تترشح أولًا لدى الجامعة على منصتها الخاصة (MoveIn لجامعة Sapienza، وDelphi لجامعة Tor Vergata، وGOMP لجامعة Roma Tre، أو اختبارات القبول في LUISS وLUMSA). بعد القبول تكمل التسجيل المسبق على Universitaly، فتصادق عليه الجامعة ويُحال ملفك إلى سفارة إيطاليا في تونس من أجل التأشيرة. بالنسبة إلى 2027/28، آخر أجل للتأشيرة في الإجازة والماجستير هو 31 أكتوبر 2027.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. شروط القبول والمعاليم والآجال تتغير كل سنة، لذلك تحقق دائمًا من إعلان جامعتك الرسمي ومن Universitaly قبل الترشح أو دفع أي مبلغ.",
    },
    { type: "p", text: "**تعيش في تونس وتريد مقعدًا في جامعة بروما. أين تترشح، وبأي ترتيب؟**" },
    {
      type: "p",
      text: "الجواب باختصار: تترشح أولًا لدى الجامعة على منصتها الخاصة. بعد قبولك تملأ التسجيل المسبق على Universitaly، فتصادق عليه الجامعة وتحيله إلى سفارة إيطاليا في تونس من أجل تأشيرة الدراسة. آخر أجل للتأشيرة في الإجازة والماجستير لسنة 2027/28 هو 31 أكتوبر 2027.",
    },
    {
      type: "p",
      text: "هذا هو الجزء الثاني من [دليل الدراسة في إيطاليا للطلاب التونسيين](article:study-in-italy)، الذي يعرض المسار كاملًا و[رزنامة 2027/28](article:study-in-italy#calendar). نتناول هنا اختيار الاختصاص، والترشح في أهم خمس جامعات في روما، وUniversitaly، والدكتوراه.",
    },

    { type: "h2", id: "how-admission-works", text: "1. كيف يتم القبول لطالب من خارج الاتحاد الأوروبي مقيم في تونس" },
    {
      type: "p",
      text: "تُعتبر طالبًا من خارج الاتحاد الأوروبي مقيمًا في الخارج ويحتاج إلى تأشيرة. منشور وزارة الجامعة (MUR)، الساري على 2026/27 و2027/28، يحدد خطوتين منفصلتين:",
    },
    {
      type: "ol",
      items: [
        "**الترشح لدى الجامعة**: على منصة الجامعة نفسها، مع معلوم الترشح، واختبار في بعض الاختصاصات. الجامعة هي التي تقرر قبولك.",
        "**التسجيل المسبق على Universitaly**: بعد القبول تملأ استمارة على Universitaly. تتحقق منها الجامعة وتصادق عليها، ثم يصل الملف إلى السفارة في تونس. هذه الخطوة إلزامية لكل طالب تأشيرة، بما في ذلك الدكتوراه.",
      ],
    },
    {
      type: "p",
      text: "كل جامعة تحدد آجالها بنفسها، فلا يوجد أجل وطني موحد. للطب قواعد قبول جديدة (القانون 26/2025) لم تُنشر بعد تفاصيلها الخاصة بالطلاب الدوليين، لذلك لا يتناوله هذا الدليل.",
    },

    { type: "h2", id: "find-a-course", text: "2. ابحث عن اختصاص وتحقق من شروط القبول" },
    {
      type: "p",
      text: "افتح [محرك البحث عن الاختصاصات في Universitaly](https://www.universitaly.it/cerca-corsi) واختر المدينة (Roma)، ونوع الشهادة (Laurea للإجازة، وLaurea Magistrale للماجستير)، ولغة التدريس. ثم افتح صفحة الاختصاص على موقع الجامعة، ففيها الإعلان والمعاليم والآجال. تحقق في كل اختصاص من:",
    },
    {
      type: "ul",
      items: [
        "**شهادتك**: الإجازة تتطلب شهادة نهاية التعليم الثانوي بعد 12 سنة دراسة على الأقل، والباكالوريا التونسية تستوفي ذلك. الماجستير يتطلب شهادة إجازة مع كشوف الأعداد. وبعض الاختصاصات تضيف اختبار كفاءة.",
        "**اللغة**: الاختصاصات المدرَّسة بالإيطالية تشترط اختبارًا في الإيطالية بمستوى B2 أو أعلى تنظمه الجامعة (وشهادة إيطالية B2 تعفيك منه). والاختصاصات المدرَّسة بالإنجليزية تتطلب شهادة إنجليزية B2.",
        "**وثائقك**: يجب التصديق على الشهادات وترجمتها، وقد تطلب الجامعة DOV أو شهادة CIMEA. اطلع على [كيفية التصديق على وثائقك](article:documents-for-italy#legalise-documents) و[DOV أم CIMEA](article:documents-for-italy#dov-or-cimea).",
      ],
    },

    { type: "h2", id: "public-universities", text: "3. الترشح في Sapienza أو Tor Vergata أو Roma Tre" },
    {
      type: "p",
      text: "لكل جامعة عمومية منصتها الخاصة. التواريخ التالية مأخوذة من إعلانات 2026/27؛ ومن المتوقع أن تتبع 2027/28 نمطًا مشابهًا، فتحقق من إعلان 2027/28.",
    },
    { type: "h3", id: "sapienza", text: "Sapienza: منصة MoveIn ثم Infostud" },
    {
      type: "steps",
      items: [
        { title: "تحقق من الشروط", text: "اقرأ صفحة [القبول في Sapienza](https://www.uniroma1.it/en/en/admissions) و[الشروط الأكاديمية 2026/27 (PDF)](https://www.uniroma1.it/sites/default/files/field_file_allegati/academic_requirements_movein_2026-2027_web_20260608.pdf). بعض الإجازات المدرَّسة بالإنجليزية تطلب نتيجة SAT لا تقل عن 960، أو اختبار TOLC." },
        { title: "ترشح على MoveIn", text: "أنشئ حسابًا على [MoveIn](https://sapienza.gomovein.com/)، وارفع وثائقك واختر اختصاصك. كل ترشح بـ 30 يورو (دون إعفاء)، وبحد أقصى ترشحان؛ والتحقق من الأهلية بـ 10 يورو." },
        { title: "انتبه لفترة الترشح", text: "في 2026/27 امتدت من 22 ديسمبر 2025 إلى 15 ماي 2026 للطلاب من خارج الاتحاد الأوروبي الذين يحتاجون تأشيرة. أما في 2027/28 فمن المتوقع أن تُفتح في حدود ديسمبر 2026 (تحقق من إعلان 2027/28)." },
        { title: "بعد القبول", text: "أكمل التسجيل المسبق على Universitaly (آخر أجل كان 30 جوان في 2026)، ثم سجّل على [Infostud](https://www.studenti.uniroma1.it/webapps/infostud/registrazione). للأسئلة: recruitment@uniroma1.it." },
      ],
    },
    { type: "h3", id: "tor-vergata", text: "Tor Vergata: منصة Delphi وإعلان لكل اختصاص" },
    {
      type: "steps",
      items: [
        { title: "ابحث عن إعلان اختصاصك", text: "ابدأ من صفحة [القبول في Tor Vergata](https://web.uniroma2.it/en/percorso/admissions). لكل اختصاص أجله ومعلومه: في 2026/27 أُغلق MSc in Economics يوم 29 ماي (30 يورو) وEEBL يوم 28 ماي (50 يورو)." },
        { title: "ترشح على Delphi", text: "سجّل على [Delphi](https://delphi.uniroma2.it/)، وارفع وثائقك وادفع المعلوم." },
        { title: "Universitaly", text: "في 2026 كان التسجيل المسبق مطلوبًا قبل 31 جويلية، وقبل الاختبار في الاختصاصات التي فيها اختبار. للأسئلة: international.students@uniroma2.it." },
      ],
    },
    { type: "h3", id: "roma-tre", text: "Roma Tre: منصة GOMP وUniversitaly معًا" },
    {
      type: "steps",
      items: [
        { title: "اقرأ الدليل", text: "حمّل [دليل الترشح 2026/27 (PDF)](https://orientamento.uniroma3.it/wp-content/uploads/sites/9/file_locked/2026/06/GUIDE-HOW-TO-APPLY-ENG-2026-27.pdf) واقرأ [صفحة قبول الطلاب الدوليين](https://orientamento.uniroma3.it/en/about-roma-tre/international-students-admissions/)." },
        { title: "ترشح على GOMP وUniversitaly", text: "سجّل على [GOMP](https://portalestudente.uniroma3.it/) وارفع الوثائق نفسها هناك وعلى Universitaly (آخر أجل كان 15 سبتمبر في 2026)." },
        { title: "اختبار الإيطالية", text: "في الاختصاصات المدرَّسة بالإيطالية، احجز اختبار الإيطالية B2 عبر GOMP، إلا إذا كانت لديك شهادة B2. للأسئلة: international.admissions@uniroma3.it." },
      ],
    },
    {
      type: "p",
      text: "معاليم الدراسة في الجامعات العمومية تتعلق بالدخل وبالبلد (المعلوم الجزافي في Sapienza لتونس، الفئة A، هو 300 يورو في السنة). اطلع على [التكاليف في الجزء الأول](article:study-in-italy#costs) وعلى [منحة DiSCo](article:lazio-disco-scholarship).",
    },

    { type: "h2", id: "private-universities", text: "4. الجامعات الخاصة: LUISS وLUMSA" },
    { type: "h3", id: "luiss", text: "LUISS: اختبار Luiss Test" },
    {
      type: "p",
      text: "يدخل الطلاب من خارج الاتحاد الأوروبي عبر Luiss Test أو بشهادات دولية ([صفحة LUISS للطلاب من خارج الاتحاد الأوروبي](https://www.luiss.it/en/orientation-and-admissions/admission-procedures/admission-bachelors-and-masters-degree-programs-law/non-eu-students)). بالنسبة إلى 2027/28: الترشح من أكتوبر 2026 إلى 10 فيفري 2027، والاختبار من 22 إلى 26 فيفري 2027، والتسجيل قبل 4 ماي 2027، والمعلوم 150 يورو. معاليم السنة الأولى في الإجازة جزافية: 15000 يورو في السنة إضافة إلى الضريبة الجهوية. توجد منح للطلاب من خارج الاتحاد الأوروبي (20 إعفاءً كاملًا في 2025/26)، لكن إعلان 2027/28 لم يصدر بعد.",
    },
    { type: "h3", id: "lumsa", text: "LUMSA: إجازات مدرَّسة بالإيطالية" },
    {
      type: "p",
      text: "إجازات LUMSA مدرَّسة بالإيطالية (المستوى B2 مطلوب) وتبدأ باختبار قبول عن بعد (100 يورو). وللماجستير استعمل [صفحة الترشح في LUMSA](https://www.lumsa.it/en/apply-to-enroll) (100 يورو أيضًا). الطلاب المقيمون في الخارج يدفعون معلومًا جزافيًا قدره 4390 يورو في السنة ([دليل الطالب 2026/27، PDF](https://backoffice.lumsa.it/sites/default/files/file/3564/2026-07/guida-pratica-per-lo-studente-aa2627.pdf)). وفي الجامعتين الخاصتين يبقى التسجيل المسبق على Universitaly إلزاميًا بعد القبول.",
    },

    { type: "h2", id: "compare-universities", text: "5. الجامعات الخمس جنبًا إلى جنب" },
    {
      type: "table",
      caption: "كيف تترشح في كل جامعة في روما (إعلانات 2026/27 ما لم يُذكر غير ذلك؛ تحقق من إعلان 2027/28)",
      head: ["الجامعة", "طريقة الترشح", "الفترة المعتادة", "معلوم الترشح"],
      rows: [
        ["Sapienza", "MoveIn، ثم Universitaly وInfostud", "تقريبًا من ديسمبر إلى ماي", "30 يورو للترشح (ترشحان كحد أقصى)"],
        ["Tor Vergata", "Delphi، ثم Universitaly", "حسب الاختصاص، غالبًا أواخر ماي", "من 30 إلى 50 يورو"],
        ["Roma Tre", "GOMP وUniversitaly", "انظر الدليل السنوي", "انظر الدليل"],
        ["LUISS", "Luiss Test، ثم Universitaly", "من أكتوبر 2026 إلى 10 فيفري 2027", "150 يورو"],
        ["LUMSA", "اختبار عن بعد، ثم Universitaly", "انظر صفحة LUMSA", "100 يورو"],
      ],
    },
    {
      type: "gallery",
      caption: "الجامعات الخمس في هذا الدليل: ثلاث عمومية (Sapienza وTor Vergata وRoma Tre) واثنتان خاصتان (LUISS وLUMSA).",
      items: [
        {
          src: "/blog/gallery/uni-sapienza.webp",
          width: 800,
          height: 600,
          alt: "مبنى رئاسة جامعة Sapienza في روما وتمثال Minerva",
          label: "Sapienza",
          credit: { text: "Góngora, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:La_Sapienza_Universit%C3%A0_di_Roma.jpg" },
        },
        {
          src: "/blog/gallery/uni-tor-vergata.webp",
          width: 800,
          height: 600,
          alt: "مباني رئاسة جامعة Tor Vergata الحديثة في روما",
          label: "Tor Vergata",
          credit: { text: "Didimo69, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Rettorato_dell%27Universit%C3%A0_di_Roma_Tor_Vergata.jpg" },
        },
        {
          src: "/blog/gallery/uni-roma-tre.webp",
          width: 800,
          height: 451,
          alt: "مبنى رئاسة جامعة Roma Tre الزجاجي في منطقة Ostiense",
          label: "Roma Tre",
          credit: { text: "Dobroš, CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:University_Roma_Tre.jpg" },
        },
        {
          src: "/blog/gallery/uni-luiss.webp",
          width: 800,
          height: 450,
          alt: "Villa Blanc في Via Nomentana بروما، رممتها جامعة LUISS",
          label: "LUISS",
          credit: { text: "Carlo Dani, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Villa_Blanc_ristrutturata.jpg" },
        },
        {
          src: "/blog/gallery/uni-lumsa.webp",
          width: 800,
          height: 550,
          alt: "مبنى لجامعة LUMSA في Via della Traspontina وخلفه قبة كاتدرائية القديس بطرس",
          label: "LUMSA",
          credit: { text: "Vitasonline, Public domain", url: "https://commons.wikimedia.org/wiki/File:Traspontina-SanPietro.jpg" },
        },
      ],
    },

    { type: "h2", id: "universitaly-pre-enrolment", text: "6. التسجيل المسبق على Universitaly خطوة بخطوة" },
    { type: "p", text: "التسجيل المسبق ليس ترشحًا ثانيًا: إنه الاستمارة التي تربط قبولك بتأشيرتك." },
    {
      type: "steps",
      items: [
        { title: "أنشئ حسابك", text: "سجّل على [Universitaly](https://universitaly-private.cineca.it/index.php/login) باسمك كما هو في جواز سفرك تمامًا، بالحروف اللاتينية ودون علامات. استعمل بريدًا إلكترونيًا تتابعه، فموعد التأشيرة يصل إليه." },
        { title: "املأ الاستمارة", text: "اختر الجامعة والاختصاص الذي قُبلت فيه (اختصاص واحد لكل تسجيل مسبق)، وسفارة إيطاليا في تونس، والدراسة كغرض للإقامة." },
        { title: "ارفع الوثائق وأرسل", text: "ارفع جواز سفرك وشهادتك وكشوف أعدادك وشهادة اللغة، بعد إعدادها كما في [دليل الوثائق](article:documents-for-italy). أرسل الاستمارة واحتفظ بالملخص من أجل التأشيرة." },
      ],
    },
    {
      type: "p",
      text: "بعد ذلك تصادق الجامعة على ملفك. الجديد منذ 2026/27: لا يمكن لكل جامعة أن تصادق إلا على المقاعد المخصصة للطلاب الأجانب زائد 20%، ثم يوقف Universitaly المصادقات الإضافية، لذلك ترشح مبكرًا. بعد المصادقة ترسل لك ALMAVIVA موعدًا عبر البريد الإلكتروني: اطلع على [موعد التأشيرة](article:italy-student-visa#almaviva-appointment). آخر أجل للتأشيرة لسنة 2027/28 هو 31 أكتوبر 2027. ومزيد من الأجوبة في [الأسئلة المتكررة لـ Universitaly (PDF)](https://universitaly-private.cineca.it/uploads/universitaly-pubblico/FAQ.pdf).",
    },

    { type: "h2", id: "phd", text: "7. الترشح للدكتوراه في روما" },
    {
      type: "p",
      text: "تنشر كل جامعة إعلانًا واحدًا للدكتوراه كل سنة، عادة في الربيع. أُغلقت إعلانات 2026 (الدورة 42) يوم 9 جوان (Tor Vergata) و17 جوان (Sapienza) و14 جويلية (Roma Tre). ومن المتوقع صدور الدورة 43 (2027/28) في ربيع 2027 (تحقق من كل إعلان):",
    },
    {
      type: "ul",
      items: [
        "[Sapienza: القبول في الدكتوراه](https://www.uniroma1.it/it/pagina/ammissione-ai-corsi-di-dottorato)",
        "[Tor Vergata: إعلانات الدكتوراه](https://dottorati.uniroma2.it/42-ciclo_p10363.aspx)",
        "[Roma Tre: إعلان الدكتوراه](https://apps.uniroma3.it/public/bando2026)",
      ],
    },
    {
      type: "p",
      text: "تترشح بشهادة الماجستير وكشوف الأعداد. وبعد اختيارك تكمل أيضًا التسجيل المسبق على Universitaly؛ لا يوجد أجل ثابت للتأشيرة، لكن قدّم طلبك قبل انطلاق الدروس.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة متكررة",
      items: [
        {
          q: "هل يمكنني الترشح في عدة جامعات إيطالية؟",
          a: "نعم، لكل جامعة ترشحها ومعلومها (Sapienza تسمح بترشحين). لكن التسجيل المسبق على Universitaly يخص اختصاصًا واحدًا، فتختار واحدًا بعد القبول.",
        },
        {
          q: "هل Universitaly هو نفسه الترشح لدى الجامعة؟",
          a: "لا. تترشح أولًا على منصة الجامعة؛ أما Universitaly فهو التسجيل المسبق الذي تصادق عليه الجامعة من أجل تأشيرتك.",
        },
        {
          q: "هل أحتاج إلى SAT للدراسة في روما؟",
          a: "فقط في بعض الاختصاصات: في Sapienza تطلب بعض الإجازات المدرَّسة بالإنجليزية نتيجة SAT لا تقل عن 960، أو اختبار TOLC.",
        },
        {
          q: "هل يمكنني الدراسة بالإنجليزية في روما؟",
          a: "نعم، بعض الاختصاصات مدرَّسة بالإنجليزية. تحتاج إلى شهادة إنجليزية B2؛ استعمل خانة اللغة في محرك البحث عن الاختصاصات في Universitaly.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Universitaly: الطلاب الدوليون", url: "https://www.universitaly.it/studenti-stranieri" },
        { label: "Universitaly: البحث عن الاختصاصات", url: "https://www.universitaly.it/cerca-corsi" },
        { label: "منشور MUR حول الطلاب الدوليين 2026/27 و2027/28 (PDF)", url: "https://universitaly-private.cineca.it/uploads/universitaly-pubblico/Circolare_2026-2027_studenti_internazionali.pdf" },
        { label: "الأسئلة المتكررة لـ Universitaly (PDF)", url: "https://universitaly-private.cineca.it/uploads/universitaly-pubblico/FAQ.pdf" },
        { label: "Sapienza: القبول", url: "https://www.uniroma1.it/en/en/admissions" },
        { label: "Tor Vergata: القبول", url: "https://web.uniroma2.it/en/percorso/admissions" },
        { label: "Roma Tre: قبول الطلاب الدوليين", url: "https://orientamento.uniroma3.it/en/about-roma-tre/international-students-admissions/" },
        { label: "LUISS: قبول الطلاب من خارج الاتحاد الأوروبي", url: "https://www.luiss.it/en/orientation-and-admissions/admission-procedures/admission-bachelors-and-masters-degree-programs-law/non-eu-students" },
        { label: "LUMSA: الترشح", url: "https://www.lumsa.it/en/apply-to-enroll" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. تواريخ 2027/28 المذكورة كتوقعات مبنية على إعلانات 2026/27، ويجب تأكيدها في الإعلان الجديد لكل جامعة. تحقق دائمًا من الجامعة ومن Universitaly قبل الترشح أو الدفع.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "الترتيب", value: "الترشح لدى الجامعة أولًا، ثم Universitaly" },
        { label: "Universitaly", value: "اختصاص واحد لكل تسجيل مسبق، تصادق عليه الجامعة" },
        { label: "آخر أجل للتأشيرة 2027/28", value: "31 أكتوبر 2027 (الإجازة والماجستير)" },
        { label: "ترشح مبكرًا", value: "عدد المصادقات لكل جامعة محدود منذ 2026/27" },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "المسار الكامل باختصار" },
    {
      type: "ol",
      items: [
        "[التخطيط والرزنامة](article:study-in-italy)",
        "اختيار الجامعة والترشح",
        "[إعداد الوثائق وترجمتها](article:documents-for-italy)",
        "[منحة DiSCo](article:lazio-disco-scholarship)",
        "[التأشيرة والحساب المجمد](article:italy-student-visa)",
        "[الوصول إلى روما](article:arriving-in-rome)",
        "[السكن](article:student-housing-rome)",
      ],
    },
  ],
};
