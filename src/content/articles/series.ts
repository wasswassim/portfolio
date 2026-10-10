import type { Lang } from "@/lib/i18n/config";

/**
 * A series links articles into ordered parts ("Part 1 of 2"). The first id is the hub (the
 * "start here" post). Each article belongs to at most one series. To add a part, create the
 * article as usual (npm run new-article) and append its id here.
 */
export type Series = {
  id: string;
  /** Shown in the series strip and published as the CreativeWorkSeries name. */
  title: Record<Lang, string>;
  /** Topic heading on the blog list (falls back to the title). */
  topic?: Record<Lang, string>;
  /** Article ids in reading order. */
  articleIds: readonly string[];
};

export const SERIES: readonly Series[] = [
  {
    id: "work-in-italy-from-tunisia",
    title: {
      en: "Working in Italy from Tunisia",
      fr: "Travailler en Italie pour les Tunisiens",
      ar: "العمل في إيطاليا من تونس",
    },
    topic: {
      en: "Working in Italy with a BTP or BTS",
      fr: "Travailler en Italie avec un BTP ou un BTS",
      ar: "العمل في إيطاليا بشهادة BTP أو BTS",
    },
    articleIds: ["work-in-italy-from-tunisia", "work-contract-in-italy"],
  },
  {
    id: "study-in-rome-from-tunisia",
    title: {
      en: "Studying in Rome as a Tunisian student",
      fr: "Étudier à Rome pour les Tunisiens",
      ar: "الدراسة في روما للطلاب التونسيين",
    },
    topic: {
      en: "Studying in Italy for Tunisian students",
      fr: "Étudier en Italie pour les étudiants tunisiens",
      ar: "الدراسة في إيطاليا للطلاب التونسيين",
    },
    articleIds: [
      "study-in-italy",
      "apply-university-rome",
      "documents-for-italy",
      "lazio-disco-scholarship",
      "italy-student-visa",
      "arriving-in-rome",
      "student-housing-rome",
    ],
  },
];
