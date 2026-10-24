// Question-friendly search for the blog list. Readers type full questions ("how do I apply to a
// university in Rome?") or keywords, in English, French or Arabic. Filler words are dropped, the
// rest is matched by word prefix against weighted fields, and guides are ranked by score.

export type SearchDoc = {
  title: string;
  /** Meta description, category and series part */
  description: string;
  /** SEO keywords, the reader's likely search phrases */
  keywords: string;
  /** Summary and section headings */
  body: string;
  faq: { q: string; a: string }[];
};

export type SearchHit = { index: number; score: number };
export type FaqHit = { doc: number; q: string; a: string };

// Lower-case and fold accents, Arabic diacritics and tatweel, ة/ه, ى/ي, أإآ/ا and Arabic-Indic
// digits, so "etudier" finds "Étudier" and "دراسه" finds "دراسة"
export const normalize = (s: string) =>
  s.normalize("NFKD")
    .replace(/\p{M}|ـ/gu, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x660))
    .toLowerCase();

// Question and filler words in the three languages, already normalized
const STOP = new Set(
  normalize(
    [
      "a an and are as at be can could do does for from get got have how i if in into is it its me my need of on or should so the this to what when where which who why will with you your about there",
      "a au aux avec ce ces comment dans de des du en est et il je la le les leur ma mes mon ne ou où par pas pour quand que quel quelle quels qui sa se son sur un une vos votre faut faire peut puis-je dois-je est-ce",
      "في من على الى إلى عن ما ماذا كيف هل متى اين أين لماذا هو هي انا أنا انت أنت مع او أو ثم الذي التي هذا هذه ذلك كل لي لك يجب يمكن",
    ].join(" "),
  ).split(/\s+/),
);

// Words a reader may use in another language or in Italian, mapped to each other. Each group is one
// idea, so "scholarship" also finds "borsa", "DiSCo" and "bourse".
const SYNONYMS: string[][] = [
  ["scholarship", "scholarships", "bourse", "bourses", "borsa", "disco", "منحه", "المنحه", "منح"],
  ["permit", "permesso", "soggiorno", "titre", "sejour", "اقامه", "الاقامه"],
  ["student", "students", "étudiant", "étudiants", "studente", "studenti", "طالب", "طلبه", "الطلبه"],
  ["cost", "costs", "much", "price", "budget", "coût", "coûte", "combien", "prix", "costo", "تكلفه", "كم", "ميزانيه"],
  ["residence", "residency", "residenza", "résidence", "anagrafe", "ريزيدنزا"],
  ["visa", "visto", "visas", "تاشيره", "الفيزا", "فيزا"],
  ["university", "universities", "université", "universita", "università", "جامعه", "الجامعه"],
  ["apply", "application", "candidature", "postuler", "inscription", "enrol", "enroll", "enrolment", "تسجيل", "التسجيل"],
  ["documents", "document", "papers", "papiers", "documenti", "وثائق", "الوثائق"],
  ["bank", "account", "banque", "compte", "banca", "conto", "بنك", "حساب"],
  ["job", "jobs", "work", "travail", "travailler", "lavoro", "emploi", "عمل", "العمل", "شغل"],
  ["housing", "room", "flat", "apartment", "logement", "chambre", "alloggio", "سكن", "كراء"],
  ["pay", "payment", "fees", "payer", "paiement", "frais", "pagopa", "دفع", "رسوم"],
  ["card", "carte", "carta", "بطاقه"],
  ["translation", "translate", "traduction", "apostille", "ترجمه"],
  ["tax", "isee", "iseeup", "impot", "impôt", "ضريبه"],
  ["deadline", "deadlines", "date", "dates", "calendar", "calendrier", "scadenza", "موعد", "مواعيد"],
  ["health", "insurance", "assurance", "santé", "ssn", "تامين", "صحه"],
].map((g) => g.map(normalize));

// Two-word names of one thing, read as one word so "residence permit" means the permesso di
// soggiorno, not residenza. Applied to queries and to the guides alike.
const PHRASES: [RegExp, string][] = [
  [/residence permits?|permis de sejour|titres? de sejour|cartes? de sejour|permesso di soggiorno|بطاقه الاقامه|تصريح الاقامه/g, "permesso"],
  [/codice fiscale|tax code|code fiscal/g, "codicefiscale"],
];

const tokenize = (s: string) => normalize(s).match(/[\p{L}\p{N}]+/gu) ?? [];
// Guides keep the original words and gain the one-word name of each phrase they contain
const indexWords = (s: string) => tokenize(PHRASES.reduce((t, [re, to]) => t.replace(re, (m) => `${m} ${to}`), normalize(s)));

// Light stemming: drop a plural "s" and the Arabic article, so "documents" meets "document"
const stem = (w: string) => w.replace(/^(?:ال|وال|بال|لل)(?=\p{L}{3})/u, "").replace(/(?<=\p{L}{3})s$/u, "");

/** The meaningful words of a query, each with its synonyms. */
export function queryTerms(query: string): string[][] {
  const text = PHRASES.reduce((t, [re, to]) => t.replace(re, to), normalize(query));
  const words = tokenize(text).filter((w) => !STOP.has(w) && (w.length > 1 || /\d/.test(w)));
  // Words of one synonym group ("DiSCo scholarship") count once, the word as typed first
  const terms = new Map<string, string[]>();
  for (const w of words) {
    const group = SYNONYMS.findIndex((g) => g.some((s) => s === w || stem(s) === stem(w)));
    const key = group < 0 ? `w:${stem(w)}` : `g:${group}`;
    if (!terms.has(key)) terms.set(key, [...new Set([w, ...(SYNONYMS[group] ?? [])].flatMap((x) => tokenize(x)).map(stem))]);
  }
  return [...terms.values()];
}

const WEIGHTS = { title: 6, keywords: 5, faq: 3, body: 2, description: 2 } as const;

type Field = keyof typeof WEIGHTS;
type Prepared = Record<Field, string[]>;

export function prepare(docs: SearchDoc[]): Prepared[] {
  return docs.map((d) => ({
    title: indexWords(d.title).map(stem),
    keywords: indexWords(d.keywords).map(stem),
    faq: indexWords(d.faq.map((f) => f.q).join(" ")).map(stem),
    body: indexWords(d.body).map(stem),
    description: indexWords(d.description).map(stem),
  }));
}

// A term matches a word when one starts with the other (3+ letters), so "univ" finds "university"
const hit = (words: string[], alts: string[]) =>
  alts.some((t) => words.some((w) => w === t || (t.length >= 3 && w.startsWith(t)) || (w.length >= 4 && t.startsWith(w))));

/**
 * Rank the guides for a query. A guide is kept when it matches at least half of the meaningful
 * words (all of them for one or two words), best first. Empty when the query has no meaningful word.
 */
export function search(prepared: Prepared[], query: string): SearchHit[] {
  const terms = queryTerms(query);
  if (terms.length === 0) return [];
  const needed = terms.length <= 2 ? terms.length : Math.ceil(terms.length / 2);
  const phrase = normalize(query).trim();
  const hits: SearchHit[] = [];
  prepared.forEach((doc, index) => {
    let score = 0;
    let matched = 0;
    for (const alts of terms) {
      // The best field counts in full and every other matching field adds a fifth of its weight.
      // The word as typed (not a synonym) in the title breaks ties.
      let best = 0;
      let all = 0;
      for (const field of Object.keys(WEIGHTS) as Field[]) {
        if (!hit(doc[field], alts)) continue;
        all += WEIGHTS[field];
        best = Math.max(best, WEIGHTS[field]);
      }
      if (!best) continue;
      matched++;
      score += best + (all - best) * 0.2 + (hit(doc.title, alts.slice(0, 1)) ? 1 : 0);
    }
    if (matched < needed) return;
    if (phrase.length > 3 && doc.title.join(" ").includes(phrase)) score += 6;
    hits.push({ index, score: score * (matched / terms.length) });
  });
  return hits.sort((a, b) => b.score - a.score || a.index - b.index);
}

/** The FAQ question in the best guides that answers the query, if one matches most of its words. */
export function bestFaq(docs: SearchDoc[], ranked: SearchHit[], query: string): FaqHit | null {
  const terms = queryTerms(query);
  if (terms.length === 0) return null;
  const needed = Math.max(1, Math.ceil(terms.length * 0.6));
  let best: (FaqHit & { n: number }) | null = null;
  for (const { index } of ranked.slice(0, 3)) {
    for (const f of docs[index].faq) {
      const words = indexWords(f.q).map(stem);
      const n = terms.filter((alts) => hit(words, alts)).length;
      if (n >= needed && (!best || n > best.n)) best = { doc: index, q: f.q, a: f.a, n };
    }
  }
  return best && { doc: best.doc, q: best.q, a: best.a };
}
