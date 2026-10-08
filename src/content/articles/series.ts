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
    articleIds: ["work-in-italy-from-tunisia", "work-contract-in-italy"],
  },
];
