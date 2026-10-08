import type { Dictionary } from "./en";

export const fr: Dictionary = {
  blogName: "Building a Life in Italy",
  blogTagline: "Guides pratiques et notes sincères pour s'installer, étudier et travailler en Italie.",
  nav: { home: "Portfolio", blog: "Blog", language: "Langue", skip: "Aller au contenu" },
  landing: { imageCredit: "Image satellite : NASA MODIS", seoTitle: "Building a Life in Italy : guides pour s'installer", metaDescription: "Guides pratiques fondés sur des sources officielles pour s'installer, étudier et travailler en Italie, par Wassim Gatri, en français, anglais et arabe.", other: "Disponible dans d'autres langues", heading: "Building a Life in Italy", empty: "Aucun article dans cette langue pour le moment.", read: "Lire l'article" },
  article: { by: "Par", published: "Publié le", updated: "Mis à jour le", verified: "Dernière vérification", back: "Tous les articles", notVerified: "Pas encore vérifié auprès d'une source officielle.", guide: "Guide", summary: "En bref", toc: "Dans cet article", faq: "Questions fréquentes", sources: "Sources", photos: "Photos :", keyFacts: "L'essentiel", readTime: (n: number) => `${n} min de lecture` },
  series: { label: "Série", continue: "Continuer la série", part: (n: number, total: number) => `Partie ${n} sur ${total}`, next: "Étape suivante", previous: "Étape précédente", start: "Commencer ici" },
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
