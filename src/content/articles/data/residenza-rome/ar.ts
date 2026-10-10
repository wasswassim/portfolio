import type { ArticleTranslation } from "../../types";

// Arabic version of en.ts (same heading ids, two fee boxes, two tables). Italian administrative terms stay in Latin script.
export const ar: ArticleTranslation = {
  // Latin on purpose: non-ASCII slugs 500 in `next dev` (percent-encoded request vs raw param)
  slug: "how-to-apply-for-residenza-in-rome",
  title: "كيف تطلب الريزيدنزا في روما: التسجيل في anagrafe وبطاقة الهوية (carta d'identità) للطالب الأجنبي",
  seoTitle: "كيف تطلب الريزيدنزا في روما: دليل الطالب الأجنبي",
  metaDescription:
    "كيف يسجّل الطالب غير الأوروبي الـ residenza في anagrafe روما: الوثائق، الإرسال عبر الإنترنت أو PEC أو البريد، مراقبة Polizia Locale خلال 45 يومًا، وبطاقة CIE.",
  imageAlt: "الكولوسيوم في روما وعلى جانبه علم إيطالي ضخم والحشود أمامه",
  keywords: ["كيف تطلب الريزيدنزا في روما", "residenza anagrafe Roma", "التسجيل في البلدية في روما للأجانب", "carta d'identità stranieri Roma", "بطاقة الهوية الإيطالية للأجانب", "TuPassi Roma anagrafe"],
  summary:
    "للحصول على الـ residenza في روما، ترسل dichiarazione di residenza إلى Roma Capitale (عبر الإنترنت بـ SPID/CIE/CNS، أو بـ PEC، أو برسالة مضمونة، أو في الشباك) مع جواز سفرك وPermesso di soggiorno أو وصله (قد لا يكفي وصل الإذن الأول في كل Municipio، فتأكّد مسبقًا) وعقد الكراء أو تصريح المالك، والإجراء مجاني. تسجّلك البلدية خلال يومي عمل، وتتحقق Polizia Locale من العنوان خلال 45 يومًا، وبعدها يمكنك طلب بطاقة الهوية الإلكترونية (CIE) بـ 22.21 يورو.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذا الدليل لأغراض إعلامية ولا يمثل استشارة قانونية. قواعد التسجيل والرسوم وإجراءات المكاتب قد تتغير وتختلف من Municipio إلى آخر، لذلك تحقق دائمًا من صفحات Roma Capitale الرسمية المذكورة أدناه قبل أن ترسل أي شيء.",
    },
    { type: "p", text: "**عندك غرفة في روما وطلب إقامة (Permesso di soggiorno) جارٍ. كيف تسجّل الـ residenza في anagrafe، وهل يستحق الأمر ذلك؟**" },
    {
      type: "p",
      text: "الجواب باختصار: املأ *dichiarazione di residenza*، وأرفق بها جواز سفرك وPermesso di soggiorno (أو وصله، وقد لا يكفي وصل الإذن الأول في كل Municipio، فتأكّد مسبقًا) وعقد الكراء أو تصريح المالك، ثم أرسلها عبر قناة **واحدة** فقط: خدمة Roma Capitale على الإنترنت، أو PEC، أو رسالة مضمونة، أو الشباك. الإجراء مجاني. تُسجَّل خلال يومي عمل، وتتحقق Polizia Locale خلال 45 يومًا من أنك تسكن فعلًا في العنوان.",
    },
    {
      type: "p",
      text: "بعد أن تصبح مقيمًا، يمكنك طلب بطاقة الهوية الإلكترونية الإيطالية (*carta d'identità elettronica*، أي CIE). هذا هو الجزء الثاني من سلسلة الاستقرار في روما، بعد [فتح حساب بنكي في إيطاليا للطالب](article:bank-account-italy-student).",
    },

    { type: "h2", id: "why-residenza", text: "1. هل يحتاج الطالب إلى الـ residenza في روما؟" },
    {
      type: "p",
      text: "الـ residenza (*iscrizione anagrafica*) تعني أن البلدية تسجّل مسكنك المعتاد (*dimora abituale*). وهي تختلف عن Permesso di soggiorno الذي تطلبه أولًا: راجع [كيف تطلب إقامة الدراسة](article:arriving-in-rome#residence-permit). إذا كنت ستبقى في روما طوال دراستك، فالتسجيل مفيد:",
    },
    {
      type: "ul",
      items: [
        "يمكنك الحصول على شهادات من anagrafe وعلى بطاقة CIE بصفتك مقيمًا.",
        "يصبح واضحًا إلى أي دائرة ASL تنتمي في الخدمة الصحية الوطنية.",
        "القانون يطلب التصريح بالانتقال خلال **20 يومًا** (DPR 223/1989، الفصل 13)، والتصريح مجاني.",
      ],
    },
    {
      type: "p",
      text: "الـ residenza تساعد لكنها ليست شرطًا صارمًا للتغطية الصحية: [ASL Roma 1](https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari) تقبل تصريحًا ذاتيًا بالإقامة **أو** بالسكن الفعلي (*effettiva dimora*) للتسجيل الاختياري.",
    },
    {
      type: "fees",
      title: "التسجيل الاختياري في الخدمة الصحية الوطنية (أكتوبر 2026)",
      feeIds: ["ssn-voluntary"],
      tnd: true,
    },

    { type: "h2", id: "documents", text: "2. وثائق الـ residenza في روما (لغير الأوروبيين)" },
    {
      type: "p",
      text: "المطبوعة هي *dichiarazione di residenza* الوزارية، مع القائمة الإضافية لغير الأوروبيين (*Allegato A*)، وتجدها في [صفحة Roma Capitale لتغيير الإقامة](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3). املأ كل خانة عليها نجمة، وإلا يُرفض الملف.",
    },
    {
      type: "table",
      caption: "ما يجب إرفاقه بـ dichiarazione di residenza (Roma Capitale، Allegato A).",
      head: ["الوثيقة", "ملاحظات"],
      rows: [
        ["جواز السفر", "نسخة من جواز سفر صالح (DPR 223/1989، الفصل 14)."],
        ["Permesso di soggiorno", "نسخة من الإقامة الصالحة، أو الإقامة المنتهية مع وصل طلب التجديد."],
        ["سند السكن", "عقد الكراء المسجَّل، أو تصريح المالك إذا كنت مُستضافًا (*dichiarazione di ospitalità / assenso*) مع نسخة من هويته."],
        ["موافقة الساكنين", "إذا كان أشخاص آخرون يسكنون في الشقة، يمضي أحد البالغين الصفحة 3 من المطبوعة."],
        ["بريد إلكتروني أو PEC", "يُنصح به (وبعض الـ Municipi تفرضه) حتى يتواصل معك المكتب."],
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "لم تصدر إقامتك الأولى بعد؟",
      text: "يذكر Allegato A وصل طلب الإقامة الأولى في حالات العمل ولمّ الشمل. لم نتمكن من التأكد أن وصل إقامة الدراسة وحده مقبول في كل Municipio، لذلك اسأل الـ Municipio الخاص بك قبل الإرسال. وإذا لم يكن لديك عقد كراء مسجَّل، ستحتاج إلى تصريح المالك: راجع [كيف تجد غرفة بعقد سليم](article:student-housing-rome#find-a-room).",
    },
    {
      type: "p",
      text: "الـ codice fiscale ليس ضمن القائمة الرسمية للوثائق المرفقة، لكن خذه معك على كل حال: هذه نصيحة عملية وليست قاعدة.",
    },

    { type: "h2", id: "book-and-submit", text: "3. كيف ترسل الطلب وتحجز موعدًا في شباك anagrafe" },
    {
      type: "p",
      text: "استعمل **قناة واحدة فقط**. إرسال الطلب نفسه مرتين يبطئ كل شيء.",
    },
    { type: "h3", id: "step-online", text: "الخطوة 1: عبر الإنترنت بـ SPID أو CIE أو CNS" },
    {
      type: "p",
      text: "[خدمة Roma Capitale لتغيير الإقامة عبر الإنترنت](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978) تشمل أيضًا القادمين من الخارج. تدخل بـ SPID أو CIE أو CNS وترفع ملفات PDF لا يتجاوز كل منها 2 ميغابايت.",
    },
    { type: "h3", id: "step-pec-post", text: "الخطوة 2: أو عبر PEC أو رسالة مضمونة" },
    {
      type: "p",
      text: "إذا لم يكن لديك دخول رقمي، أرسل المطبوعة الممضاة وكل المرفقات **في ملف PDF واحد** عبر PEC إلى عنوان الـ Municipio الخاص بك، أو برسالة مضمونة (*raccomandata*). البريد الإلكتروني العادي لم يعد مقبولًا منذ 1 مارس 2022.",
    },
    { type: "h3", id: "step-counter", text: "الخطوة 3: أو في الشباك عبر TuPassi" },
    {
      type: "p",
      text: "[TuPassi](https://www.tupassi.com/MiroPrenSPID/cliente/cComuneRoma) هو نظام الحجز والطوابير الرسمي لـ Roma Capitale لشبابيك anagrafe: احجز عبر الإنترنت بـ SPID أو CIE أو CNS، أو خذ تذكرة من الجهاز (totem) في المكتب. كل Municipio يستعمله بطريقته، لذلك راجع صفحة الـ Municipio الخاص بك أولًا.",
    },
    {
      type: "callout",
      tone: "note",
      title: "لماذا ليس ANPR؟",
      text: "[تغيير الإقامة عبر ANPR](https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/) مخصص فقط لمن هو مسجّل مسبقًا في ANPR. القادم لأول مرة من تونس ليس مسجّلًا فيه، لذلك استعمل خدمة Roma Capitale أو PEC أو البريد أو الشباك.",
    },

    { type: "h2", id: "police-check", text: "4. زيارة Polizia Locale: ماذا يحدث بعد تقديم الطلب" },
    {
      type: "table",
      caption: "المراحل بعد إرسال التصريح (DL 5/2012، الفصل 5؛ DPR 223/1989، الفصل 19).",
      head: ["متى", "ماذا يحدث"],
      rows: [
        ["خلال يومي عمل", "تسجّلك البلدية."],
        ["من تاريخ التصريح", "تُحتسب إقامتك من يوم التصريح."],
        ["خلال 45 يومًا", "تتحقق Polizia Locale من أنك تسكن فعلًا في العنوان."],
        ["بعد 45 يومًا دون إشعار", "إذا لم يصلك *preavviso di rigetto* (إشعار بالرفض)، تُثبَّت الإقامة بمبدأ *silenzio-assenso* (السكوت يعني الموافقة)."],
      ],
    },
    {
      type: "p",
      text: "ما يحدث إذا لم يكن أحد في البيت عند الزيارة غير مذكور في المصادر الرسمية لروما. نصيحة عملية وليست قاعدة: ضع اسمك على الجرس وصندوق البريد، وابقَ متاحًا بالهاتف والبريد الإلكتروني.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "كن صادقًا في العنوان",
      text: "التصريحات الكاذبة تُبلَّغ إلى السلطات وقد تؤدي إلى عقوبات جزائية (DPR 445/2000، الفصلان 75 و76). ولا يمكنك التسجيل في مسكن تشغله دون حق.",
    },

    { type: "h2", id: "identity-card", text: "5. بطاقة الهوية (carta d'identità) للمقيمين الأجانب في روما" },
    { type: "h3", id: "step-book-cie", text: "الخطوة 1: احجز على بوابة الوزارة" },
    {
      type: "p",
      text: "احجز موعد CIE على [prenotazionicie.interno.gov.it](https://prenotazionicie.interno.gov.it) في أي Municipio. في روما **لا** يتم الحجز عبر TuPassi ([Roma Capitale](https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498)). أكّد الحجز عندما يصلك بريد التذكير، وإلا يُلغى.",
    },
    { type: "h3", id: "step-cie-appointment", text: "الخطوة 2: أحضر جواز السفر والإقامة وادفع" },
    {
      type: "p",
      text: "بصفتك من خارج الاتحاد الأوروبي، يجب أن تحضر **جواز سفرك وPermesso di soggiorno** ([Roma Capitale](https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf)). الدفع بالبطاقة أو عبر pagoPA: تأكد من ذلك لدى الـ Municipio الخاص بك.",
    },
    {
      type: "fees",
      title: "بطاقة الهوية الإلكترونية في روما (أكتوبر 2026)",
      feeIds: ["cie-rome"],
      tnd: true,
    },
    { type: "h3", id: "step-cie-delivery", text: "الخطوة 3: استلم البطاقة" },
    {
      type: "p",
      text: "تُسلَّم البطاقة خلال 6 أيام عمل، إلى بيتك أو تستلمها من البلدية ([وزارة الداخلية](https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/)).",
    },
    {
      type: "callout",
      tone: "warning",
      title: "ليست وثيقة سفر للأجانب",
      text: "بالنسبة للمقيمين الأجانب، بطاقة CIE هي وثيقة هوية فقط و**لا تصلح للسفر إلى الخارج** (*non costituisce titolo per l'espatrio*). للتنقل في فضاء Schengen تحتاج إلى جواز سفر صالح مع Permesso di soggiorno صالح، لمدة أقصاها 90 يومًا في كل 180 يومًا ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm)).",
    },
    {
      type: "p",
      text: "فيمَ تفيدك CIE فعلًا: وثيقة هوية إيطالية تستظهر بها داخل إيطاليا، و**Entra con CIE**، أي الدخول إلى الخدمات العمومية على الإنترنت برمز PIN من 8 أرقام وهاتف فيه NFC ([وزارة الداخلية](https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/)).",
    },

    { type: "h2", id: "after-registration", text: "6. الحفاظ على الـ residenza بعد كل تجديد للإقامة" },
    {
      type: "p",
      text: "بعد **كل تجديد** لـ Permesso di soggiorno، جدّد *dichiarazione di dimora abituale* في anagrafe خلال **60 يومًا** مع الإقامة الجديدة (DPR 223/1989، الفصل 7). تبقى مسجّلًا طوال فترة تجديد الإقامة.",
    },
    {
      type: "p",
      text: "إذا نسيت، يمكن للبلدية شطب إقامتك بعد سنة من انتهاء صلاحية Permesso di soggiorno، بعد إشعار يمنحك 30 يومًا لتسوية الوضع. وإذا رُفض طلبك، يمكنك التظلم لدى Prefetto خلال 30 يومًا.",
    },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة متكررة",
      items: [
        {
          q: "هل أحتاج إلى الـ residenza في روما كطالب؟",
          a: "ليست شرطًا صارمًا، لكنها مفيدة إذا بقيت طوال دراستك. تسمح لك بالحصول على CIE وشهادات anagrafe، وASL Roma 1 تقبل الإقامة أو السكن الفعلي للخدمة الصحية.",
        },
        {
          q: "كم تستغرق مراقبة الـ residenza؟",
          a: "حتى 45 يومًا. تسجّلك البلدية خلال يومي عمل، وتتحقق Polizia Locale من العنوان خلال 45 يومًا، وإذا لم يصلك إشعار بالرفض تُثبَّت الإقامة.",
        },
        {
          q: "هل يمكنني السفر في أوروبا ببطاقة الهوية الإيطالية؟",
          a: "لا، ليس بصفتك أجنبيًا. بالنسبة لك بطاقة CIE لا تصلح للسفر إلى الخارج؛ سافر بجواز سفرك وPermesso di soggiorno صالح، لمدة أقصاها 90 يومًا في كل 180.",
        },
        {
          q: "هل يُستعمل TuPassi لحجز بطاقة الهوية؟",
          a: "لا. TuPassi يُستعمل لشبابيك anagrafe في عدة Municipi، أما CIE فتُحجز فقط على prenotazionicie.interno.gov.it.",
        },
        {
          q: "هل يمكنني إرسال طلب الـ residenza بالبريد الإلكتروني؟",
          a: "لا، البريد الإلكتروني العادي لم يعد مقبولًا منذ 1 مارس 2022. استعمل الخدمة على الإنترنت أو PEC أو الرسالة المضمونة أو الشباك.",
        },
        {
          q: "كم تكلف الـ residenza في روما؟",
          a: "لا شيء: التصريح بالإقامة مجاني. أما CIE فتكلف 22.21 يورو في روما (27.37 يورو في حال الضياع).",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "Roma Capitale: تغيير الإقامة (المطبوعة وAllegato A)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF35641&pagina=3" },
        { label: "Roma Capitale: تغيير الإقامة عبر الإنترنت (SPID، CIE، CNS)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF879978" },
        { label: "Roma Capitale، Municipio XIII: دليل الإقامة (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun13_Guida_Residenza_Avviso_Italiano_agg_03.03.22_-unito.pdf" },
        { label: "Roma Capitale: نظام الحجز TuPassi", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF781945" },
        { label: "Roma Capitale، Municipio VIII: ميثاق الخدمات الديموغرافية (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Mun08_CdS_SERVIZI_DEMOGRAFICI_Agg_18_01_2024-_AGGIORNATO.pdf" },
        { label: "ANPR: تغيير الإقامة", url: "https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/" },
        { label: "Normattiva: DL 5/2012، الفصل 5 (الإقامة في الوقت الحقيقي)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-02-09;5~art5" },
        { label: "DPR 223/1989 (نظام anagrafe، PDF)", url: "https://prefettura.interno.gov.it/sites/default/files/2024-01/D.P.R.%2030-05-1989%2C%20n.223_0.pdf" },
        { label: "Roma Capitale: حجز CIE (ليس عبر TuPassi)", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF173498" },
        { label: "Roma Capitale: تكلفة CIE", url: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF141252&pagina=5" },
        { label: "Roma Capitale: بطاقات الهوية الإلكترونية (PDF)", url: "https://www.comune.roma.it/web-resources/cms/documents/Carte_identita_elettroniche.pdf" },
        { label: "وزارة الداخلية الإيطالية: إصدار وتجديد CIE", url: "https://www.cartaidentita.interno.gov.it/richiedi/rilascio-e-rinnovo-in-italia/" },
        { label: "وزارة الداخلية الإيطالية: Entra con CIE", url: "https://www.cartaidentita.interno.gov.it/identificazione-digitale/entra-con-cie/" },
        { label: "ASL Roma 1: الرعاية الصحية لغير الأوروبيين", url: "https://www.aslroma1.it/assistenza-sanitaria-ai-cittadini-extracomunitari" },
        { label: "EUR-Lex: قانون حدود Schengen، اللائحة (EU) 2016/399", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0399" },
        { label: "Your Europe: وثائق السفر لغير الأوروبيين", url: "https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026. الإجراءات تختلف من Municipio إلى آخر وقد تتغير؛ راجع صفحة الـ Municipio الخاص بك على comune.roma.it قبل إرسال التصريح أو حجز موعد في الشباك.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "التكلفة", value: "التصريح بالإقامة مجاني" },
        { label: "طريقة الإرسال", value: "قناة واحدة: الإنترنت (SPID/CIE/CNS)، أو PEC، أو رسالة مضمونة، أو الشباك" },
        { label: "مراقبة العنوان", value: "Polizia Locale، خلال 45 يومًا" },
        { label: "CIE في روما", value: "22.21 يورو، تُحجز على prenotazionicie.interno.gov.it، ولا تصلح للسفر بالنسبة للأجانب" },
      ],
    },
    { type: "h2", id: "settling-path", text: "الاستقرار في روما، خطوة بخطوة" },
    {
      type: "ol",
      items: [
        "[فتح حساب بنكي في إيطاليا](article:bank-account-italy-student)",
        "الـ residenza وبطاقة الهوية",
        "[إيجاد عمل طلابي في روما](article:student-jobs-rome)",
        "[أول 30 يومًا لك في روما](article:arriving-in-rome)",
      ],
    },
  ],
};
