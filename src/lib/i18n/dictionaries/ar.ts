import type { Dictionary } from "./en";

export const ar: Dictionary = {
  blogName: "Building a Life in Italy",
  blogTagline: "أدلة عملية وملاحظات صادقة حول الانتقال إلى إيطاليا والدراسة والعمل فيها.",
  nav: { home: "الأعمال", blog: "المدونة", language: "اللغة", skip: "انتقل إلى المحتوى" },
  landing: { heading: "Building a Life in Italy", empty: "لا توجد مقالات بهذه اللغة حتى الآن.", read: "اقرأ المقال" },
  article: { published: "نُشر في", updated: "آخر تحديث", verified: "آخر تحقق", back: "كل المقالات", notVerified: "لم يتم التحقق منه بعد من مصدر رسمي.", guide: "الدليل", summary: "باختصار", toc: "في هذا المقال", faq: "أسئلة شائعة", sources: "المصادر", keyFacts: "أهم المعلومات", readTime: (n: number) => `${n} دقيقة للقراءة` },
  callout: { tip: "نصيحة", warning: "تنبيه", note: "ملاحظة" },
  footer: { rights: "وسيم قطري. جميع الحقوق محفوظة.", builtBy: "بقلم وسيم قطري" },
  notFound: { title: "الصفحة غير موجودة", body: "هذه الصفحة غير موجودة أو تم نقلها.", cta: "العودة إلى المدونة" },
  categories: {
    documents: "الوثائق",
    work: "العمل",
    language: "اللغة",
    "daily-life": "الحياة اليومية",
  },
};
