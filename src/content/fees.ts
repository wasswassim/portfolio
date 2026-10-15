import type { Lang } from "@/lib/i18n/config";

/**
 * Single source of truth for every fee, limit and amount quoted in the blog. Articles never
 * hard-code these numbers in a fee box: they reference an id and the box reads it from here.
 * Update the amount, the source and lastVerified together (official or primary pages only).
 */
export type Fee = {
  label: Record<Lang, string>;
  amount: number;
  /** Optional upper bound for a range, e.g. 22 to 27 */
  amountMax?: number;
  currency: "EUR" | "TND" | "USD" | "%";
  per?: "once" | "month" | "year";
  sourceUrl: string;
  /** ISO date the amount was last checked on sourceUrl */
  lastVerified: string;
  note?: Record<Lang, string>;
};

const V = "2026-10-10";

/** Central bank of Tunisia reference rate used for every "about X TND" conversion. */
export const BCT_RATE = {
  eurTnd: 3.3671,
  date: "2026-10-07",
  sourceUrl: "https://www.bct.gov.tn/bct/siteprod/cours.jsp",
};

export const FEES = {
  // Residence permit kit (post office) and the permit contribution
  "permit-stamp": {
    label: { en: "Revenue stamp (marca da bollo)", fr: "Timbre fiscal (marca da bollo)", ar: "الطابع الجبائي (marca da bollo)" },
    amount: 16, currency: "EUR", per: "once",
    sourceUrl: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno", lastVerified: V,
    note: { en: "Bought at a tobacconist (tabaccheria)", fr: "S'achète dans un bureau de tabac (tabaccheria)", ar: "يُشترى من محل التبغ (tabaccheria)" },
  },
  "permit-postal": {
    label: { en: "Post office handling fee", fr: "Frais du bureau de poste", ar: "معلوم خدمة مكتب البريد" },
    amount: 30, currency: "EUR", per: "once",
    sourceUrl: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno", lastVerified: V,
  },
  "permit-card": {
    label: { en: "Electronic permit card", fr: "Carte de séjour électronique", ar: "بطاقة الإقامة الإلكترونية" },
    amount: 30.46, currency: "EUR", per: "once",
    sourceUrl: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno", lastVerified: V,
  },
  "permit-contribution-1y": {
    label: { en: "Permit contribution (3 to 12 months)", fr: "Contribution pour un permis de 3 à 12 mois", ar: "مساهمة الإقامة (من 3 إلى 12 شهرًا)" },
    amount: 40, currency: "EUR", per: "once",
    sourceUrl: "https://www.poliziadistato.it/articolo/225", lastVerified: V,
    note: { en: "EUR 50 for a permit of more than 1 year and up to 2 years", fr: "50 EUR pour un permis de plus d'un an et jusqu'à 2 ans", ar: "50 يورو لإقامة تتجاوز سنة واحدة وحتى سنتين" },
  },
  "ssn-voluntary": {
    label: { en: "National health service (voluntary registration)", fr: "Service national de santé (inscription volontaire)", ar: "الخدمة الصحية الوطنية (تسجيل اختياري)" },
    amount: 700, currency: "EUR", per: "year",
    sourceUrl: "https://web.uniroma2.it/en/contenuto/health-insurance", lastVerified: V,
    note: { en: "Covers the calendar year to 31 December, paid with an F24 form", fr: "Couvre l'année civile jusqu'au 31 décembre, payé avec un formulaire F24", ar: "يغطي السنة الميلادية إلى 31 ديسمبر، ويُدفع بمطبوعة F24" },
  },
  "atac-monthly": {
    label: { en: "ATAC monthly pass (Rome public transport)", fr: "Abonnement mensuel ATAC (transports de Rome)", ar: "اشتراك ATAC الشهري (نقل روما)" },
    amount: 35, currency: "EUR", per: "month",
    sourceUrl: "https://www.atac.roma.it/biglietti-e-abbonamenti/abbonamenti", lastVerified: V,
  },
  "atac-annual": {
    label: { en: "ATAC annual pass", fr: "Abonnement annuel ATAC", ar: "اشتراك ATAC السنوي" },
    amount: 250, currency: "EUR", per: "year",
    sourceUrl: "https://www.atac.roma.it/biglietti-e-abbonamenti/abbonamenti", lastVerified: V,
  },
  "postepay-issue": {
    label: { en: "Postepay Evolution card (issue)", fr: "Carte Postepay Evolution (émission)", ar: "بطاقة Postepay Evolution (الإصدار)" },
    amount: 5, currency: "EUR", per: "once",
    sourceUrl: "https://www.poste.it/carte-postepay/postepay-evolution", lastVerified: V,
  },
  "postepay-year": {
    label: { en: "Postepay Evolution yearly fee", fr: "Frais annuels Postepay Evolution", ar: "المعلوم السنوي لـ Postepay Evolution" },
    amount: 19, currency: "EUR", per: "year",
    sourceUrl: "https://www.poste.it/carte-postepay/postepay-evolution", lastVerified: V,
  },
  // Visa and diploma recognition
  "visa-study-d": {
    label: { en: "Study visa (type D), consular fee", fr: "Visa d'études (type D), frais consulaires", ar: "تأشيرة الدراسة (نوع D)، المعلوم القنصلي" },
    amount: 50, currency: "EUR", per: "once",
    sourceUrl: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/", lastVerified: V,
    note: { en: "Paid in cash in dinars at the visa centre (170.600 TND), plus the 68.300 TND service fee", fr: "Payé en espèces en dinars au centre de visa (170,600 TND), plus 68,300 TND de frais de service", ar: "يُدفع نقدًا بالدينار في مركز التأشيرات (170.600 د.ت)، إضافة إلى معلوم خدمة 68.300 د.ت" },
  },
  "visa-national-d": {
    label: { en: "National visa (type D), consular fee", fr: "Visa national (type D), frais consulaires", ar: "التأشيرة الوطنية (نوع D)، المعلوم القنصلي" },
    amount: 116, currency: "EUR", per: "once",
    sourceUrl: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/", lastVerified: V,
    note: { en: "Paid in dinars (395.700 TND). Confirm the amount for your visa type with the visa centre", fr: "Payé en dinars (395,700 TND). Confirmez le montant pour votre type de visa auprès du centre", ar: "يُدفع بالدينار (395.700 د.ت). تأكد من المبلغ الخاص بنوع تأشيرتك لدى المركز" },
  },
  "visa-centre-fee": {
    label: { en: "Almaviva visa-centre service fee", fr: "Frais de service du centre de visa Almaviva", ar: "معلوم خدمة مركز التأشيرات Almaviva" },
    amount: 68.3, currency: "TND", per: "once",
    sourceUrl: "https://ambtunisi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/quanto-costa-un-visto-e-come-pagare/", lastVerified: V,
    note: { en: "Paid in cash with the visa fee", fr: "Payés en espèces avec les frais de visa", ar: "يُدفع نقدًا مع معلوم التأشيرة" },
  },
  "visa-blocked-amount": {
    label: { en: "Blocked amount for the study visa (2026/27)", fr: "Montant bloqué pour le visa d'études (2026/27)", ar: "المبلغ المجمّد لتأشيرة الدراسة (2026/27)" },
    amount: 10179.85, currency: "EUR", per: "year",
    sourceUrl: "https://ambtunisi.esteri.it/it/news/dall_ambasciata/2026/06/iscriversi-alle-universita-italiane-a-a-2026-2027-condizioni-per-la-concessione-del-visto-per-studio-immatricolazione-universitaria/", lastVerified: V,
    note: { en: "Your own money, released at EUR 783.06 a month for 13 months", fr: "Votre propre argent, libéré à 783,06 EUR par mois pendant 13 mois", ar: "مالك الخاص، يُحرَّر بمقدار 783.06 يورو شهريًا لمدة 13 شهرًا" },
  },
  "cimea-cv": {
    label: { en: "CIMEA comparability + verification", fr: "CIMEA comparabilité + vérification", ar: "CIMEA: المقارنة والتحقق" },
    amount: 300, currency: "EUR", per: "once",
    sourceUrl: "https://cimea-diplome.it/page-comparability-verification-service", lastVerified: V,
    note: { en: "EUR 100 more for the urgent service", fr: "100 EUR de plus pour le service urgent", ar: "100 يورو إضافية للخدمة المستعجلة" },
  },
  // Universities
  "sapienza-application": {
    label: { en: "Sapienza application fee (per application)", fr: "Frais de candidature Sapienza (par candidature)", ar: "معلوم الترشح في Sapienza (لكل ترشح)" },
    amount: 30, currency: "EUR", per: "once",
    sourceUrl: "https://www.uniroma1.it/en/en/admissions", lastVerified: V,
  },
  "sapienza-band-a": {
    label: { en: "Sapienza first-year fee (lowest band)", fr: "Frais Sapienza de première année (tranche la plus basse)", ar: "رسوم Sapienza للسنة الأولى (أدنى شريحة)" },
    amount: 300, currency: "EUR", per: "year",
    sourceUrl: "https://www.uniroma1.it/sites/default/files/field_file_allegati/regolamento2026-2027.pdf", lastVerified: V,
  },
  "lazio-regional-tax": {
    label: { en: "Lazio regional tax for the right to study", fr: "Taxe régionale du Latium pour le droit aux études", ar: "الضريبة الجهوية لـ Lazio للحق في الدراسة" },
    amount: 140, currency: "EUR", per: "year",
    sourceUrl: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo", lastVerified: V,
    note: { en: "Paid by almost every student, DiSCo winners included. Exemptions are in your university's fee rules", fr: "Payée par presque tous les étudiants, boursiers DiSCo compris. Les exemptions figurent dans le règlement des frais de votre université", ar: "يدفعها تقريبًا كل الطلبة، بمن فيهم المتحصلون على منحة DiSCo. حالات الإعفاء مذكورة في نظام المعاليم بجامعتك" },
  },
  "uni-stamp": {
    label: { en: "Revenue stamp on enrolment", fr: "Timbre fiscal à l'inscription", ar: "الطابع الجبائي عند التسجيل" },
    amount: 16, currency: "EUR", per: "year",
    sourceUrl: "https://www.uniroma1.it/it/content/tassa-regionale-il-diritto-allo-studio-e-imposta-di-bollo", lastVerified: V,
  },
  "torvergata-application": {
    label: { en: "Tor Vergata application fee", fr: "Frais de candidature Tor Vergata", ar: "معلوم الترشح في Tor Vergata" },
    amount: 30, currency: "EUR", per: "once",
    sourceUrl: "https://web.uniroma2.it/allegato/45147/contenuto/application_procedure", lastVerified: V,
  },
  "lumsa-tuition": {
    label: { en: "LUMSA yearly tuition (regional tax included)", fr: "Frais annuels LUMSA (taxe régionale incluse)", ar: "الرسوم السنوية في LUMSA (مع الضريبة الجهوية)" },
    amount: 4390, currency: "EUR", per: "year",
    sourceUrl: "https://backoffice.lumsa.it/sites/default/files/file/3564/2026-07/guida-pratica-per-lo-studente-aa2627.pdf", lastVerified: V,
  },
  // Housing and city services
  "lease-registration-min": {
    label: { en: "Lease registration tax (2% of yearly rent, minimum)", fr: "Taxe d'enregistrement du bail (2 % du loyer annuel, minimum)", ar: "معلوم تسجيل عقد الكراء (2% من الكراء السنوي، الحد الأدنى)" },
    amount: 67, currency: "EUR", per: "once",
    sourceUrl: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/schedainfo-regime-ordinario", lastVerified: V,
    note: { en: "Plus a EUR 16 stamp per copy for every 4 pages. Landlord and tenant are jointly liable", fr: "Plus un timbre de 16 EUR par exemplaire, toutes les 4 pages. Bailleur et locataire sont solidairement responsables", ar: "إضافة إلى طابع بـ 16 يورو لكل نسخة عن كل 4 صفحات. المالك والمتسوغ مسؤولان بالتضامن" },
  },
  "disco-residence": {
    label: { en: "DiSCo residence place", fr: "Place en résidence DiSCo", ar: "مكان في مبيت DiSCo" },
    amount: 200, amountMax: 298, currency: "EUR", per: "month",
    sourceUrl: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-ENG-26-27.pdf", lastVerified: V,
    note: { en: "For DiSCo winners only, deducted from the scholarship", fr: "Pour les boursiers DiSCo uniquement, déduit de la bourse", ar: "للمتحصلين على منحة DiSCo فقط، ويُخصم من المنحة" },
  },
  "rome-private-room": {
    label: { en: "Private single room near a Rome university", fr: "Chambre individuelle privée près d'une université de Rome", ar: "غرفة فردية خاصة قرب جامعة في روما" },
    amount: 500, amountMax: 700, currency: "EUR", per: "month",
    sourceUrl: "https://www.newsistruzione.it/2026/08/22/affitti-studenti-roma-caro-casa-2026/", lastVerified: V,
    note: { en: "Typical range for a standard single room in 2026 (SoloAffitti data). EUR 350-600 near Tor Vergata, EUR 600-750 near LUMSA, up to EUR 1,000 or more in the most sought-after areas", fr: "Fourchette habituelle pour une chambre individuelle standard en 2026 (données SoloAffitti). 350-600 EUR près de Tor Vergata, 600-750 EUR près de la LUMSA, jusqu'à 1 000 EUR ou plus dans les quartiers les plus demandés", ar: "النطاق المعتاد لغرفة فردية عادية في 2026 (بيانات SoloAffitti). 350-600 يورو قرب Tor Vergata، و600-750 يورو قرب LUMSA، وقد تبلغ 1000 يورو أو أكثر في الأحياء الأكثر طلبًا" },
  },
  "nulla-osta-stamp": {
    label: { en: "Stamp on the nulla osta application (employer)", fr: "Timbre sur la demande de nulla osta (employeur)", ar: "الطابع على مطلب nulla osta (المشغّل)" },
    amount: 16, currency: "EUR", per: "once",
    sourceUrl: "https://prefettura.interno.gov.it/it/prefetture/catania/nulla-osta-allingresso-lavoratori-stranieri-non-comunitari", lastVerified: V,
  },
  "cie-rome": {
    label: { en: "Electronic identity card (CIE) in Rome", fr: "Carte d'identité électronique (CIE) à Rome", ar: "بطاقة الهوية الإلكترونية (CIE) في روما" },
    amount: 22.21, currency: "EUR", per: "once",
    sourceUrl: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF141252&pagina=5", lastVerified: V,
    note: { en: "EUR 27.37 to replace a lost or stolen card", fr: "27,37 EUR pour remplacer une carte perdue ou volée", ar: "27.37 يورو لتعويض بطاقة ضائعة أو مسروقة" },
  },
  // Payments from Tunisia
  "cti-allowance": {
    label: { en: "International technology card yearly allowance (individual)", fr: "Allocation annuelle de la carte technologique internationale (particulier)", ar: "المنحة السنوية للبطاقة التكنولوجية الدولية (شخص طبيعي)" },
    amount: 1000, currency: "TND", per: "year",
    sourceUrl: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf", lastVerified: V,
    note: { en: "Per calendar year, for a resident holding at least the baccalaureate (BCT circular 2016-09, art. 15)", fr: "Par année civile, pour un résident titulaire au moins du baccalauréat (circulaire BCT 2016-09, art. 15)", ar: "لكل سنة ميلادية، للمقيم المتحصل على الباكالوريا على الأقل (منشور البنك المركزي 2016-09، الفصل 15)" },
  },
  "study-installation": {
    label: { en: "Study file: installation allowance", fr: "Dossier études : allocation d'installation", ar: "ملف الدراسة: منحة الاستقرار" },
    amount: 6000, currency: "TND", per: "year",
    sourceUrl: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf", lastVerified: V,
  },
  "study-living": {
    label: { en: "Study file: living allowance", fr: "Dossier études : allocation de subsistance", ar: "ملف الدراسة: منحة المعيشة" },
    amount: 4000, currency: "TND", per: "month",
    sourceUrl: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2025_10_fr.pdf", lastVerified: V,
  },
  "pagopa-paypal": {
    label: { en: "pagoPA fee when paying with PayPal", fr: "Commission pagoPA pour un paiement PayPal", ar: "عمولة pagoPA عند الدفع بـ PayPal" },
    amount: 1.5, amountMax: 2.5, currency: "EUR", per: "once",
    sourceUrl: "https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/", lastVerified: V,
    note: { en: "EUR 1.50 up to EUR 248.50, EUR 2.50 above (pagoPA provider list)", fr: "1,50 EUR jusqu'à 248,50 EUR, 2,50 EUR au-delà (liste des prestataires pagoPA)", ar: "1.50 يورو حتى 248.50 يورو، و2.50 يورو فوق ذلك (قائمة مزودي pagoPA)" },
  },
  "paypal-fx": {
    label: { en: "PayPal currency conversion when paying (Tunisian account)", fr: "Conversion de devises PayPal lors d'un paiement (compte tunisien)", ar: "تحويل العملة في PayPal عند الدفع (حساب تونسي)" },
    amount: 4, currency: "%",
    sourceUrl: "https://www.paypal.com/tn/digital-wallet/paypal-consumer-fees?locale.x=en_TN", lastVerified: V,
  },
  "redotpay-virtual": {
    label: { en: "RedotPay virtual card", fr: "Carte virtuelle RedotPay", ar: "بطاقة RedotPay الافتراضية" },
    amount: 10, currency: "USD", per: "once",
    sourceUrl: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees", lastVerified: V,
  },
  "redotpay-physical": {
    label: { en: "RedotPay physical card", fr: "Carte physique RedotPay", ar: "بطاقة RedotPay الفعلية" },
    amount: 100, currency: "USD", per: "once",
    sourceUrl: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees", lastVerified: V,
  },
  "redotpay-fx": {
    label: { en: "RedotPay foreign-currency fee", fr: "Frais de devise RedotPay", ar: "معلوم العملة الأجنبية في RedotPay" },
    amount: 1.2, currency: "%",
    sourceUrl: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees", lastVerified: V,
  },
  "redotpay-conversion": {
    label: { en: "RedotPay crypto conversion fee", fr: "Frais de conversion crypto RedotPay", ar: "معلوم تحويل العملات الرقمية في RedotPay" },
    amount: 1, currency: "%",
    sourceUrl: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees", lastVerified: V,
  },
  // Banks in Italy
  "intesa-xme-silver": {
    label: { en: "Intesa Sanpaolo XME Conto Silver", fr: "Intesa Sanpaolo XME Conto Silver", ar: "Intesa Sanpaolo XME Conto Silver" },
    amount: 5.9, currency: "EUR", per: "month",
    sourceUrl: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1363.pdf", lastVerified: V,
    note: { en: "EUR 2.90 a month when a salary is credited", fr: "2,90 EUR par mois avec un salaire domicilié", ar: "2.90 يورو شهريًا عند تحويل أجر إلى الحساب" },
  },
  "intesa-conto-base": {
    label: { en: "Intesa Sanpaolo basic account (conto di base)", fr: "Compte de base Intesa Sanpaolo (conto di base)", ar: "الحساب الأساسي في Intesa Sanpaolo (conto di base)" },
    amount: 30, currency: "EUR", per: "year",
    sourceUrl: "https://www.intesasanpaolo.com/content/dam/vetrina/trasparenza/it/Documenti/Doc/Pdf/FI/FI-Other/FI-1221.pdf", lastVerified: V,
    note: { en: "Free with an ISEE under EUR 11,600", fr: "Gratuit avec un ISEE inférieur à 11 600 EUR", ar: "مجاني إذا كان ISEE أقل من 11.600 يورو" },
  },
  "wise-card": {
    label: { en: "Wise card", fr: "Carte Wise", ar: "بطاقة Wise" },
    amount: 7, currency: "EUR", per: "once",
    sourceUrl: "https://wise.com/it/pricing/card-fees", lastVerified: V,
  },
  // DiSCo Lazio scholarship 2026/27 (Italian call, art. 8)
  "disco-base": {
    label: { en: "DiSCo scholarship, out-of-town student (base)", fr: "Bourse DiSCo, étudiant hors siège (base)", ar: "منحة DiSCo، طالب من خارج المدينة (الأساس)" },
    amount: 6571.11, currency: "EUR", per: "year",
    sourceUrl: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf", lastVerified: V,
  },
  "disco-max": {
    label: { en: "DiSCo scholarship, out-of-town, lowest incomes (115%)", fr: "Bourse DiSCo, hors siège, revenus les plus bas (115 %)", ar: "منحة DiSCo، من خارج المدينة، أدنى المداخيل (115%)" },
    amount: 7556.78, currency: "EUR", per: "year",
    sourceUrl: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf", lastVerified: V,
    note: { en: "When ISEE/ISEEUP is EUR 14,169.94 or less", fr: "Si l'ISEE/ISEEUP est inférieur ou égal à 14 169,94 EUR", ar: "إذا كان ISEE/ISEEUP يساوي 14.169,94 يورو أو أقل" },
  },
  "disco-meals": {
    label: { en: "DiSCo meals (two a day), value", fr: "Repas DiSCo (deux par jour), valeur", ar: "وجبات DiSCo (اثنتان يوميًا)، القيمة" },
    amount: 600, currency: "EUR", per: "year",
    sourceUrl: "https://laziodisco.it/wp-content/uploads/2026/07/BANDO-DIRITTO-ALLO-STUDIO-26-27-con-EC.pdf", lastVerified: V,
  },
} satisfies Record<string, Fee>;

export type FeeId = keyof typeof FEES;

export function feeById(id: FeeId): Fee {
  return FEES[id];
}

/** Sum of several fees in the same currency (totals are computed, never stored). */
export function sumFees(ids: FeeId[]): number {
  const currencies = new Set(ids.map((id) => FEES[id].currency));
  if (currencies.size > 1 || currencies.has("%")) throw new Error("sumFees: fees in different currencies or percentages: " + ids.join(", "));
  return Math.round(ids.reduce((s, id) => s + FEES[id].amount, 0) * 100) / 100;
}

/** EUR amount converted to dinars at the stored BCT rate, rounded to whole dinars. */
export function eurToTnd(eur: number): number {
  return Math.round(eur * BCT_RATE.eurTnd);
}
