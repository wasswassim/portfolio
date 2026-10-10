import type { Lang } from "@/lib/i18n/config";

/**
 * Referral (affiliate) links, in one place. Articles reference a provider id through a
 * `referral` block and never paste these URLs. Rewards are written only as the provider's
 * own terms state them (sourceUrl + lastVerified); otherwise `reward` stays null and a
 * generic line is shown. Rizon is deliberately absent: it does not accept Tunisian passports.
 */
export type Referral = {
  name: string;
  url: string;
  /** Code to type at sign-up, when the provider uses one */
  code?: string;
  /** What the person who signs up gets, as the official terms say it */
  reward: Record<Lang, string> | null;
  termsUrl: string;
  lastVerified: string;
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
    termsUrl: "https://helpcenter.redotpay.com/en/articles/10339296-invite-friends-and-earn-rewards",
    lastVerified: "2026-10-10",
    articles: ["redotpay-tunisia"],
  },
  revolut: {
    name: "Revolut",
    url: "https://revolut.com/referral/?referral-code=gatri!OCT1-26-AR-L1&geo-redirect",
    reward: null,
    termsUrl: "https://www.revolut.com/it-IT/legal/referrals-terms/",
    lastVerified: "2026-10-10",
    articles: ["bank-account-italy-student"],
  },
  wise: {
    name: "Wise",
    url: "https://wise.com/invite/ilpc/wassimg9",
    reward: {
      en: "Under Wise's invite terms, you get one fee-free transfer up to the amount shown when you sign up, to use within 6 months.",
      fr: "Selon les conditions de parrainage de Wise, vous recevez un transfert sans frais, jusqu'au montant affiché à l'inscription, à utiliser sous 6 mois.",
      ar: "حسب شروط الدعوة في Wise، تحصل على تحويل واحد دون عمولة، في حدود المبلغ المعروض عند التسجيل، تستعمله خلال 6 أشهر.",
    },
    termsUrl: "https://wise.com/help/articles/2487043/how-does-the-free-transfer-invite-program-work",
    lastVerified: "2026-10-10",
    articles: ["bank-account-italy-student"],
  },
} satisfies Record<string, Referral>;

export type ReferralId = keyof typeof REFERRALS;
