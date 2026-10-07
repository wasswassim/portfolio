import type { Dictionary } from "./en";

export const fr: Dictionary = {
  blogName: "Building a Life in Italy",
  blogTagline: "Guides pratiques et notes sincères pour s'installer, étudier et travailler en Italie.",
  nav: { home: "Portfolio", blog: "Blog", language: "Langue", skip: "Aller au contenu" },
  landing: { heading: "Building a Life in Italy", empty: "Aucun article dans cette langue pour le moment.", read: "Lire l'article" },
  article: { published: "Publié le", updated: "Mis à jour le", verified: "Dernière vérification", back: "Tous les articles", notVerified: "Pas encore vérifié auprès d'une source officielle.", guide: "Guide", summary: "En bref", toc: "Dans cet article", faq: "Questions fréquentes", sources: "Sources", keyFacts: "L'essentiel", readTime: (n: number) => `${n} min de lecture` },
  callout: { tip: "Astuce", warning: "Attention", note: "Note" },
  footer: { rights: "Wassim Gatri. Tous droits réservés.", builtBy: "Écrit par Wassim Gatri" },
  notFound: { title: "Page introuvable", body: "Cette page n'existe pas ou a été déplacée.", cta: "Retour au blog" },
  categories: {
    documents: "Documents",
    work: "Travail",
    language: "Langue",
    "daily-life": "Vie quotidienne",
  },
};
