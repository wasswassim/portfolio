import type { Lang } from "@/lib/i18n/config";

/**
 * Referral (affiliate) links, in one place. Articles reference a provider id through a
 * `referral` block and never paste these URLs. Rewards are written only as the provider's
 * own terms state them (sourceUrl + lastVerified); otherwise `reward` stays null and a
 * generic line is shown.
 */
export type Referral = {
  name: string;
  url: string;
  /** Code to type at sign-up, when the provider uses one */
  code?: string;
  /** What the person who signs up gets, as the official terms say it */
  reward: Record<Lang, string> | null;
  /** What the reader gains by signing up through this link; verified facts only, no invented amounts */
  benefits: Record<Lang, string[]>;
  termsUrl: string;
  lastVerified: string;
  /** Badge and button wording shown to readers (promo / gift / partner) */
  badge: Record<Lang, string>;
  cta: Record<Lang, string>;
  /** Round logo for the offer buttons in the side column */
  logo: string;
  /** Brand colours for the card (background, text, button) */
  brand: { bg: string; fg: string; button: string; buttonText: string };
  /** Articles allowed to show this link (checked by scripts/check-articles.mjs) */
  articles: string[];
};

export const REFERRALS = {
  redotpay: {
    name: "RedotPay",
    url: "https://wap.redotpay.com/en/invite/?referralId=j2eb5&poster_id=3",
    code: "j2eb5",
    reward: {
      en: "RedotPay's sign-up page shows a 5 USD welcome reward for new users. It must be used within 30 days and cannot pay the card fee. The code can only be entered when you register.",
      fr: "La page d'inscription de RedotPay affiche une récompense de bienvenue de 5 USD pour les nouveaux utilisateurs. Elle doit être utilisée sous 30 jours et ne paie pas les frais de carte. Le code ne peut être saisi qu'à l'inscription.",
      ar: "تعرض صفحة التسجيل في RedotPay مكافأة ترحيبية بقيمة 5 USD للمستخدمين الجدد. يجب استعمالها خلال 30 يومًا ولا يمكن دفع معلوم البطاقة بها. لا يمكن إدخال الرمز إلا عند التسجيل.",
    },
    benefits: {
      en: ["A 5 USD welcome reward on your new account (to use within 30 days; it cannot pay the card fee).", "The promo code j2eb5 is filled in for you: it can only be added when you register, not later.", "Same fees, limits and plans as a normal sign-up.", "It supports these free guides, at no extra cost to you."],
      fr: ["Une récompense de bienvenue de 5 USD sur votre nouveau compte (à utiliser sous 30 jours ; elle ne paie pas les frais de carte).", "Le code promo j2eb5 est rempli pour vous : il ne peut être ajouté qu'à l'inscription, pas après.", "Mêmes frais, plafonds et formules qu'une inscription normale.", "Cela soutient ces guides gratuits, sans coût supplémentaire pour vous."],
      ar: ["مكافأة ترحيبية بقيمة 5 USD في حسابك الجديد (تُستعمل خلال 30 يومًا ولا تغطي معلوم البطاقة).", "الرمز الترويجي j2eb5 يُدرج تلقائيًا: لا يمكن إضافته إلا عند التسجيل، وليس بعده.", "نفس الرسوم والسقوف والباقات كالتسجيل العادي.", "يدعم ذلك هذه الأدلة المجانية دون أي تكلفة إضافية عليك."],
    },
    termsUrl: "https://helpcenter.redotpay.com/en/articles/10339296-invite-friends-and-earn-rewards",
    lastVerified: "2026-10-10",
    badge: { en: "Promo code", fr: "Code promo", ar: "رمز ترويجي" },
    cta: { en: "Get the 5 USD welcome reward on RedotPay", fr: "Obtenir la récompense de bienvenue de 5 USD sur RedotPay", ar: "احصل على مكافأة الترحيب 5 USD على RedotPay" },
    logo: "/blog/brand/logo-redotpay.webp",
    brand: { bg: "#fdecee", fg: "#2b0a0d", button: "#e6323e", buttonText: "#ffffff" },
    articles: ["redotpay-tunisia", "international-card-tunisia"],
  },
  revolut: {
    name: "Revolut",
    url: "https://revolut.com/referral/?referral-code=gatri!OCT1-26-AR-L1&geo-redirect",
    reward: null,
    benefits: {
      en: ["If Revolut runs a welcome offer for new customers in Italy, the app shows it to you before you finish signing up.", "Same fees, limits and plans as a normal sign-up.", "It supports these free guides, at no extra cost to you."],
      fr: ["Si Revolut propose une offre de bienvenue aux nouveaux clients en Italie, l'application vous l'affiche avant la fin de l'inscription.", "Mêmes frais, plafonds et formules qu'une inscription normale.", "Cela soutient ces guides gratuits, sans coût supplémentaire pour vous."],
      ar: ["إذا كان لدى Revolut عرض ترحيبي للعملاء الجدد في إيطاليا، يعرضه لك التطبيق قبل إتمام التسجيل.", "نفس الرسوم والسقوف والباقات كالتسجيل العادي.", "يدعم ذلك هذه الأدلة المجانية دون أي تكلفة إضافية عليك."],
    },
    termsUrl: "https://www.revolut.com/it-IT/legal/referrals-terms/",
    lastVerified: "2026-10-10",
    badge: { en: "Partner link", fr: "Lien partenaire", ar: "رابط شراكة" },
    cta: { en: "Open Revolut", fr: "Ouvrir Revolut", ar: "افتح Revolut" },
    logo: "/blog/brand/logo-revolut.webp",
    brand: { bg: "#eef1ff", fg: "#191c1f", button: "#191c1f", buttonText: "#ffffff" },
    articles: ["bank-account-italy-student"],
  },
  wise: {
    name: "Wise",
    url: "https://wise.com/invite/ilpc/wassimg9",
    reward: {
      en: "Under Wise's offer terms, you get one fee-free transfer up to the amount shown when you sign up, to use within 6 months.",
      fr: "Selon les conditions de l'offre Wise, vous recevez un transfert sans frais, jusqu'au montant affiché à l'inscription, à utiliser sous 6 mois.",
      ar: "حسب شروط عرض Wise، تحصل على تحويل واحد دون عمولة، في حدود المبلغ المعروض عند التسجيل، تستعمله خلال 6 أشهر.",
    },
    benefits: {
      en: ["One fee-free transfer, up to the amount shown when you sign up, to use within 6 months.", "Same fees, limits and plans as a normal sign-up.", "It supports these free guides, at no extra cost to you."],
      fr: ["Un transfert sans frais, jusqu'au montant affiché à l'inscription, à utiliser sous 6 mois.", "Mêmes frais, plafonds et formules qu'une inscription normale.", "Cela soutient ces guides gratuits, sans coût supplémentaire pour vous."],
      ar: ["تحويل واحد دون عمولة، في حدود المبلغ المعروض عند التسجيل، تستعمله خلال 6 أشهر.", "نفس الرسوم والسقوف والباقات كالتسجيل العادي.", "يدعم ذلك هذه الأدلة المجانية دون أي تكلفة إضافية عليك."],
    },
    termsUrl: "https://wise.com/help/articles/2487043/how-does-the-free-transfer-invite-program-work",
    lastVerified: "2026-10-10",
    badge: { en: "Welcome gift", fr: "Cadeau de bienvenue", ar: "هدية ترحيبية" },
    cta: { en: "Claim your fee-free Wise transfer", fr: "Obtenir votre transfert Wise sans frais", ar: "احصل على تحويل Wise دون عمولة" },
    logo: "/blog/brand/logo-wise.webp",
    brand: { bg: "#efffe3", fg: "#163300", button: "#9fe870", buttonText: "#163300" },
    articles: ["bank-account-italy-student"],
  },
} satisfies Record<string, Referral>;

export type ReferralId = keyof typeof REFERRALS;
