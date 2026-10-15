import type { ArticleTranslation } from "../../types";
import { B, BEFORE_LEAVING, ON_ARRIVAL, TOTAL_PRIVATE, UNIVERSITY, YEARLY_LIVING, eur, eurTnd, range, tnd, tndOf } from "./budget";

const L = "ar";

// Mirrors en.ts (same heading ids). Body figures come from ./budget.ts; the summary, title and
// description repeat the totals as plain text, so update them when fees.ts changes.
export const ar: ArticleTranslation = {
  slug: "cost-of-studying-in-italy-tunisian-students",
  title: "كم تكلّف الدراسة في روما الطالب التونسي؟ ميزانية السنة الأولى 2026/27",
  subtitle: "كل المعاليم الرسمية، من التأشيرة في تونس إلى سنتك الأولى في Sapienza، باليورو والدينار، مع الكراء والمبالغ التي يمكنك تحويلها",
  seoTitle: "تكاليف الدراسة في إيطاليا للتونسيين: ميزانية 2026/27",
  metaDescription:
    "ميزانية السنة الأولى في روما للطلاب التونسيين 2026/27: 1,626 يورو معاليم ثابتة، و7,626 إلى 10,026 يورو مع غرفة خاصة، بالدينار ومع المصادر الرسمية.",
  imageAlt: "الكولوسيوم في روما وعلى واجهته علم إيطالي ضخم وأمامه حشود من الناس",
  keywords: ["تكاليف الدراسة في إيطاليا للتونسيين", "كم أحتاج من المال للدراسة في إيطاليا", "ميزانية الطالب في روما", "تكلفة المعيشة في روما للطلاب", "الدراسة في إيطاليا بالدينار", "ميزانية السنة الأولى في إيطاليا"],
  summary:
    "تكلّف السنة الأولى للطالب التونسي في Sapienza بروما حوالي 1,626 يورو (حوالي 5,476 د.ت) من المعاليم الرسمية الثابتة في 2026/27: التأشيرة والترشح وبطاقة الإقامة ورسوم الجامعة والخدمة الصحية والنقل وبطاقة بنكية. ومع غرفة فردية خاصة بـ 500 إلى 700 يورو شهريًا، تبلغ السنة 7,626 إلى 10,026 يورو دون الأكل، بينما يبقى مبلغ 10,179.85 يورو المجمّد للتأشيرة مالك الخاص لتعيش منه.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "تنبيه مهم",
      text: "هذه الميزانية للإعلام فقط. كل مبلغ مأخوذ من صفحة رسمية (رابطها في كل جدول مع تاريخ التحقق)، لكن المعاليم تتغير كل سنة، وتكاليفك الخاصة تتعلق بجامعتك وشريحة دخلك ومكان سكنك. تحقق من المصادر الرسمية قبل أن تدفع أو تجمّد أي مبلغ.",
    },
    { type: "p", text: "**كم تحتاج من المال لسنتك الأولى كطالب تونسي في روما؟**" },
    {
      type: "p",
      text: `الجواب المختصر: حوالي **${eurTnd(L, B.fixed)}** من المعاليم الرسمية الثابتة للسنة الأولى في Sapienza في 2026/27، ثم يُضاف الكراء. ومع غرفة فردية خاصة، تبلغ السنة **${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}** دون الأكل والمصاريف الشخصية.`,
    },
    {
      type: "p",
      text: `تجمع هذه الصفحة كل المعاليم المذكورة في أدلتنا، من التأشيرة في تونس إلى السنة الأولى في الجامعة، بمثال واحد: طالب إجازة أو ماجستير في Sapienza ضمن أدنى شريحة، وهي الرسوم الجزافية للطلبة التونسيين. المبلغ المجمّد للتأشيرة (${eur(L, B.blocked)}) ليس ضمن المجموع: إنه مالك الخاص، ويُصرف لك كل شهر لتعيش منه.`,
    },

    { type: "h2", id: "total", text: "1. كم تكلّف السنة الأولى في روما الطالب التونسي؟" },
    {
      type: "p",
      text: `تكلّف السنة الأولى في روما الطالب التونسي حوالي ${eur(L, B.fixed)} من المعاليم الرسمية الثابتة، إضافة إلى ${range(L, B.privateRoom.min, B.privateRoom.max)} مقابل 12 شهرًا في غرفة خاصة. كل سطر مفصّل في الأقسام الموالية.`,
    },
    {
      type: "table",
      caption: "السنة الأولى في Sapienza (أدنى شريحة)، 2026/27. المبالغ بالدينار حسب السعر المرجعي للبنك المركزي التونسي. الأكل والمصاريف الشخصية غير محتسبة.",
      head: ["البند", "المبلغ", "بالدينار"],
      rows: [
        ["قبل السفر (الترشح، التأشيرة)", eur(L, B.beforeLeaving), `${tndOf(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)} معلوم مركز التأشيرات`],
        ["الأسابيع الأولى في روما (بطاقة الإقامة، بطاقة بنكية)", eur(L, B.onArrival), tndOf(L, B.onArrival)],
        ["رسوم الجامعة، السنة الأولى", eur(L, B.university), tndOf(L, B.university)],
        ["الصحة والنقل والبنك (سنة واحدة)", eur(L, B.yearlyLiving), tndOf(L, B.yearlyLiving)],
        ["**المعاليم الرسمية الثابتة**", `**${eur(L, B.fixed)}**`, `**${tndOf(L, B.fixed)} + ${tnd(L, B.visaCentreTnd)}**`],
        ["غرفة فردية خاصة، 12 شهرًا", range(L, B.privateRoom.min, B.privateRoom.max), `${tndOf(L, B.privateRoom.min)} – ${tndOf(L, B.privateRoom.max)}`],
        ["**المجموع مع غرفة خاصة**", `**${range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max)}**`, `**${tndOf(L, TOTAL_PRIVATE.min)} – ${tndOf(L, TOTAL_PRIVATE.max)} + ${tnd(L, B.visaCentreTnd)}**`],
      ],
    },

    { type: "h2", id: "before-leaving", text: "2. ماذا تدفع وأنت في تونس قبل السفر؟" },
    {
      type: "p",
      text: `قبل مغادرة تونس، تدفع الترشح للجامعة وتأشيرة الدراسة: ${eur(L, B.beforeLeaving)}، إضافة إلى ${tnd(L, B.visaCentreTnd)} معلوم خدمة Almaviva. تُدفع التأشيرة نقدًا بالدينار في مركز التأشيرات بتونس، لذلك يتبع المبلغ بالدينار سعر الصرف.`,
    },
    { type: "fees", title: "الترشح والتأشيرة", feeIds: BEFORE_LEAVING, total: true, tnd: true },
    {
      type: "p",
      text: "وثائقك تضيف مصاريف بلا سعر ثابت: يأخذ عدل الإشهاد التونسي 10 أو 20 د.ت عن كل أبوستيل، ويحدد المترجمون المحلفون أسعارهم بأنفسهم. شهادة Dichiarazione di Valore مجانية للدراسة، أما شهادة CIMEA فتكلّف 300 يورو إذا طلبتها جامعتك. راجع [من يستطيع ترجمة وثائقك التونسية إلى الإيطالية](article:documents-for-italy#translation) و[هل تحتاج DOV أم شهادة CIMEA](article:documents-for-italy#dov-or-cimea).",
    },

    { type: "h2", id: "first-weeks", text: "3. ماذا تدفع في أسابيعك الأولى في روما؟" },
    {
      type: "p",
      text: `في أسابيعك الأولى في روما، تكلّف حزمة بطاقة الإقامة وأول بطاقة إيطالية ${eur(L, B.onArrival)}. تطلب الـ permesso di soggiorno في مكتب بريد خلال 8 أيام عمل من وصولك: يُشترى الطابع الجبائي من محل التبغ، والباقي يُدفع في مكتب البريد.`,
    },
    { type: "fees", title: "بطاقة الإقامة وأول بطاقة", feeIds: ON_ARRIVAL, total: true, tnd: true },
    { type: "p", text: "الخطوات موجودة في [دليل الوصول للطلبة في روما](article:arriving-in-rome)." },

    { type: "h2", id: "university-fees", text: "4. كم تبلغ رسوم الجامعة في السنة الأولى؟" },
    {
      type: "p",
      text: `في Sapienza، تكلّف السنة الأولى ${eur(L, B.university)} للطالب التونسي ضمن أدنى شريحة: الرسوم الجزافية والضريبة الجهوية لـ Lazio وطابع جبائي. الجامعات الخاصة أغلى بكثير: الرسوم السنوية في LUMSA تبلغ ${eur(L, B.lumsa)} مع الضريبة الجهوية.`,
    },
    { type: "fees", title: "Sapienza، السنة الأولى (أدنى شريحة)", feeIds: UNIVERSITY, total: true, tnd: true },
    { type: "p", text: "قارن بين جامعات روما الخمس في [كيف تترشح للجامعة في روما](article:apply-university-rome)." },

    { type: "h2", id: "rent", text: "5. كم يدفع الطالب للكراء في روما؟" },
    {
      type: "p",
      text: `الكراء هو أكبر مصروف: غرفة فردية خاصة عادية قرب جامعة في روما تكلّف ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} شهريًا في 2026، مقابل ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} لمكان في مبيت DiSCo، وهو مخصص للمتحصلين على منحة DiSCo فقط.`,
    },
    { type: "fees", title: "الكراء الشهري", feeIds: ["rome-private-room", "disco-residence"] },
    {
      type: "p",
      text: "يجب أيضًا تسجيل عقد الكراء الخاص لدى Agenzia delle Entrate (67 يورو على الأقل، وكثيرًا ما يُقسم المبلغ مع المالك). راجع [السكن الطلابي في روما](article:student-housing-rome) لمعرفة المنصات وطرق تجنب الاحتيال.",
    },

    { type: "h2", id: "yearly-costs", text: "6. ما المصاريف السنوية الإضافية: الصحة والنقل والبنك؟" },
    {
      type: "p",
      text: `تضيف الصحة والنقل وبطاقة بنكية ${eur(L, B.yearlyLiving)} في السنة: ${eur(L, B.ssn)} للتسجيل الاختياري في الخدمة الصحية الوطنية، والاشتراك السنوي في ATAC، والمعلوم السنوي لـ Postepay.`,
    },
    { type: "fees", title: "الخدمة الصحية والنقل والبنك", feeIds: YEARLY_LIVING, total: true, tnd: true },
    {
      type: "p",
      text: `سطر الصحة بـ ${eur(L, B.ssn)} هو الحالة الأغلى: يُقبل بدلًا منه تأمين صحي خاص صالح في إيطاليا طوال مدة الإقامة، وحسب تجربتي، عوّض تأمينٌ أُخذ في تونس لدى البنك الذي يدير ملف دراستك التسجيلَ في SSN. التسجيل في SSN يغطي سنة ميلادية واحدة إلى 31 ديسمبر: إذا وصلت في الخريف وبقيت مسجلًا في SSN، فعليك دفعة ثانية للسنة الجديدة. راجع [دليل الوصول](article:arriving-in-rome).`,
    },

    { type: "h2", id: "blocked-amount", text: "7. هل المبلغ المجمّد للتأشيرة مصروف؟" },
    {
      type: "p",
      text: `لا: مبلغ ${eur(L, B.blocked)} المجمّد لتأشيرة الدراسة 2026/27 هو مالك الخاص. يجمّده بنك تونسي لمدة سنة ويصرفه لك بمقدار ${eur(L, B.blockedMonth)} شهريًا لمدة 13 شهرًا، وهو تقدير السفارة الإيطالية لما يحتاجه الطالب ليعيش.`,
    },
    { type: "fees", feeIds: ["visa-blocked-amount"], tnd: true },
    {
      type: "p",
      text: "الأكل والمصاريف الشخصية ليست ضمن هذه الميزانية لأنه لا يوجد رقم رسمي لها؛ المبلغ الشهري المصروف من الحساب المجمّد هو المرجع لتخطط به. راجع [كيف يعمل الحساب المجمّد مع بنك تونسي](article:italy-student-visa).",
    },

    { type: "h2", id: "money-transfers", text: "8. كم يمكنك أن تحوّل من المال وأنت في تونس؟" },
    {
      type: "p",
      text: `حسب منشور البنك المركزي التونسي 2025-10، يسمح ملف الدراسة بمنحة استقرار تُصرف مرة واحدة بقيمة ${tnd(L, B.installationTnd)}، وحتى ${tnd(L, B.livingTnd)} شهريًا لمصاريف المعيشة، عبر بنك تونسي واحد في كل سنة جامعية.`,
    },
    { type: "fees", title: "التحويلات المسموح بها لملف الدراسة", feeIds: ["study-installation", "study-living"] },
    { type: "p", text: "الخطوات الثلاث موجودة في [كيف تصلك أموالك في إيطاليا](article:study-in-italy#money-plan)." },

    { type: "h2", id: "disco-scholarship", text: "9. ما الجزء الذي يمكن أن تغطيه منحة DiSCo؟" },
    {
      type: "p",
      text: `تدفع منحة DiSCo Lazio للطالب القادم من خارج المدينة ${eur(L, B.discoBase)} في السنة في 2026/27، وحتى ${eur(L, B.discoMax)} لأدنى المداخيل، إضافة إلى الوجبات. تغطي المنحة جزءًا كبيرًا من ميزانية السنة الأولى، ثم يُخصم منها مكان مبيت DiSCo.`,
    },
    { type: "fees", title: "منحة DiSCo Lazio 2026/27", feeIds: ["disco-base", "disco-max", "disco-meals"] },
    { type: "p", text: "الشروط والوثائق موجودة في [منحة DiSCo في Lazio للطلبة التونسيين](article:lazio-disco-scholarship)." },

    {
      type: "faq",
      id: "faq",
      title: "أسئلة شائعة",
      items: [
        {
          q: "كم أحتاج من المال للدراسة في إيطاليا كطالب تونسي؟",
          a: `للسنة الأولى في Sapienza بروما في 2026/27: حوالي ${eurTnd(L, B.fixed)} من المعاليم الرسمية الثابتة، إضافة إلى ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} شهريًا لغرفة خاصة، والأكل والمصاريف الشخصية. كما تجمّد ${eur(L, B.blocked)} للتأشيرة، وهو مالك الخاص لتعيش منه.`,
        },
        {
          q: "هل الدراسة في إيطاليا غالية بالنسبة للتونسيين؟",
          a: `الجامعات العمومية رخيصة للطلبة التونسيين: السنة الأولى في Sapienza تكلّف ${eur(L, B.university)} ضمن أدنى شريحة. الكراء هو المصروف الأساسي في روما، ويمكن لمنحة DiSCo (${eur(L, B.discoBase)} في السنة في 2026/27) أن تغطي جزءًا كبيرًا منه إذا كنت مؤهلًا لها.`,
        },
        {
          q: "كم تكلّف تأشيرة الدراسة لإيطاليا بالدينار؟",
          a: `تكلّف تأشيرة الدراسة 50 يورو تُدفع نقدًا بالدينار في مركز Almaviva بتونس، إضافة إلى ${tnd(L, B.visaCentreTnd)} معلوم خدمة. يتبع المبلغ بالدينار سعر الصرف، فتحقق من صفحة المعاليم في السفارة قبل موعدك.`,
        },
        {
          q: "هل عليّ أن أصرف المبلغ المجمّد؟",
          a: `لا. مبلغ ${eur(L, B.blocked)} يبقى لك: يصرف لك البنك ${eur(L, B.blockedMonth)} شهريًا لمدة 13 شهرًا، وبهذا المال الشهري تعيش في إيطاليا.`,
        },
        {
          q: "كم يكلّف كراء غرفة طالب في روما؟",
          a: `حوالي ${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} شهريًا لغرفة فردية خاصة عادية قرب جامعة في 2026، وأقل قرب Tor Vergata وأكثر في الأحياء الأكثر طلبًا. مبيت DiSCo يكلّف ${range(L, B.discoRoomMonth.min, B.discoRoomMonth.max)} شهريًا للمتحصلين على المنحة.`,
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "المصادر الرسمية",
      items: [
        { label: "السفارة الإيطالية بتونس: معاليم التأشيرة وطريقة الدفع", url: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/" },
        { label: "السفارة الإيطالية بتونس: شروط تأشيرة الدراسة 2026/27 (المبلغ المجمّد)", url: "https://ambtunisi.esteri.it/it/news/dall_ambasciata/2026/06/iscriversi-alle-universita-italiane-a-a-2026-2027-condizioni-per-la-concessione-del-visto-per-studio-immatricolazione-universitaria/" },
        { label: "Poste Italiane: حزمة بطاقة الإقامة ومعاليمها", url: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno" },
        { label: "Polizia di Stato: مساهمة بطاقة الإقامة", url: "https://www.poliziadistato.it/articolo/225" },
        { label: "Sapienza: نظام الرسوم 2026/27", url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf" },
        { label: "Sapienza: الضريبة الجهوية والطابع الجبائي", url: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo" },
        { label: "DiSCo Lazio: إعلان الحق في الدراسة 2026/27", url: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf" },
        { label: "ATAC: الاشتراكات", url: "https://www.atac.roma.it/biglietti-e-abbonamenti/abbonamenti" },
        { label: "البنك المركزي التونسي: المنشور 2025-10", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf" },
        { label: "NewsIstruzione: كراء الطلبة في روما في 2026 (بيانات SoloAffitti)", url: "https://www.newsistruzione.it/2026/08/22/affitti-studenti-roma-caro-casa-2026/" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "ملاحظة التحديث",
      text: "آخر تحقق: أكتوبر 2026، للسنة الجامعية 2026/27. المعاليم والمبلغ المجمّد تتغير كل سنة؛ تحقق من كل صفحة رسمية قبل الدفع.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "المعاليم الرسمية الثابتة، السنة الأولى", value: eurTnd(L, B.fixed) },
        { label: "مع غرفة خاصة", value: range(L, TOTAL_PRIVATE.min, TOTAL_PRIVATE.max) },
        { label: "غرفة خاصة في روما", value: `${range(L, B.privateRoomMonth.min, B.privateRoomMonth.max)} شهريًا` },
        { label: "المبلغ المجمّد (مالك الخاص)", value: `${eur(L, B.blocked)}، ${eur(L, B.blockedMonth)} شهريًا` },
        { label: "منحة DiSCo", value: `${eur(L, B.discoBase)} في السنة (الأساس)` },
      ],
    },
    { type: "h2", id: "path-in-brief", text: "المسار باختصار" },
    {
      type: "ol",
      items: [
        "حضّر وثائقك (الأبوستيل، الترجمة) وأنت في تونس",
        `ترشح للجامعة وادفع التأشيرة: ${eur(L, B.beforeLeaving)} + ${tnd(L, B.visaCentreTnd)}`,
        `جمّد ${eur(L, B.blocked)} لدى بنك تونسي واحد`,
        `ادفع بطاقة الإقامة في أسبوعك الأول في روما: ${eur(L, B.onArrival)}`,
        `ادفع رسوم الجامعة للسنة الأولى: ${eur(L, B.university)}`,
        "اطلب منحة DiSCo لتغطية الكراء ومصاريف المعيشة",
      ],
    },
  ],
};
