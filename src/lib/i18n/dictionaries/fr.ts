import type { Dictionary } from "./en";

export const fr: Dictionary = {
  blogName: "Building a Life in Italy",
  blogTagline: "Guides pratiques et notes sincères pour s'installer, étudier et travailler en Italie.",
  nav: { home: "Portfolio", blog: "Blog", language: "Langue", skip: "Aller au contenu" },
  landing: { imageCredit: "Image satellite : NASA MODIS", seoTitle: "Building a Life in Italy : guides pour s'installer", metaDescription: "Guides pratiques fondés sur des sources officielles pour s'installer, étudier et travailler en Italie, par Wassim Gatri, en français, anglais et arabe.", other: "Disponible dans d'autres langues", heading: "Building a Life in Italy", empty: "Aucun article dans cette langue pour le moment.", read: "Lire l'article", search: { label: "Rechercher dans les guides", placeholder: "Rechercher un guide", clear: "Effacer la recherche", one: "1 guide correspondant", results: "{n} guides correspondants", none: "Aucun guide ne correspond à votre recherche." } },
  reviews: { title: "Ce qu’en disent les lecteurs", from: "Avis des lecteurs", count: (n: number) => `${n} avis`, badgeLabel: (s: string, n: number) => `Noté ${s} sur 5 d’après ${n} avis de lecteurs.`, goTo: "Aller aux avis", stars: (r: number) => `${r} étoiles sur 5`, write: "Laisser un avis", empty: "Pas encore d’avis. Un guide vous a aidé ? Soyez le premier à le dire.", form: { name: "Votre nom", nameHint: "Tel qu’il doit apparaître, par exemple Amine B.", email: "Votre e-mail", emailHint: "Non publié. Sert seulement à confirmer votre avis.", rating: "Votre note", text: "Votre avis", context: "Votre situation (facultatif)", contextHint: "Par exemple : étudiant à Sapienza", consent: "J’accepte que mon nom, ma note et mon avis soient publiés sur ce blog.", submit: "Envoyer mon avis", sending: "Envoi…", success: "Merci ! Votre avis m’est bien parvenu. Je lis chaque avis avant de le mettre en ligne.", error: "Votre avis n’a pas pu être envoyé. Réessayez dans un instant.", privacy: "Les avis me parviennent par e-mail et ne sont mis en ligne qu’après lecture." }, prev: "Avis précédent", next: "Avis suivant", slide: (i: number, n: number) => `Avis ${i} sur ${n}` },
  article: { by: "Par", published: "Publié le", updated: "Mis à jour le", verified: "Dernière vérification", back: "Tous les articles", notVerified: "Pas encore vérifié auprès d'une source officielle.", guide: "Guide", summary: "En bref", toc: "Dans cet article", faq: "Questions fréquentes", sources: "Sources", photos: "Photos :", keyFacts: "L'essentiel", readTime: (n: number) => `${n} min de lecture` },
  series: { label: "Série", continue: "Continuer la série", part: (n: number, total: number) => `Partie ${n} sur ${total}`, next: "Étape suivante", previous: "Étape précédente", allParts: "Voir toutes les parties", parts: (n: number) => `${n} parties`, start: "Commencer ici" },
  fees: { title: "Frais à prévoir", source: "Source", checked: (d: string) => `vérifié le ${d}`, total: "Total", per: { month: "/ mois", year: "/ an" }, aboutTnd: (n: number) => `environ ${n.toLocaleString("fr-FR")} TND`, rate: (r: string, d: string) => `Montants en dinars au taux BCT de ${r} TND pour un euro (${d}).`, estimate: "Estimations d'octobre 2026 ; vérifiez la source avant de payer.", hub: "Comment payer ces frais depuis la Tunisie" },
  offers: { title: "Offres partenaires" },
  referral: { benefits: "Ce que vous obtenez avec ce lien", label: "Code promo", disclosure: "Cet article contient des codes promo et des liens partenaires, signalés comme tels. Si vous vous inscrivez avec l'un d'eux, je peux recevoir une récompense du prestataire, sans coût supplémentaire pour vous. Cela ne change ni l'ordre des options ni ce que je dis de leurs risques.", inline: "Lien partenaire : je peux recevoir une récompense si vous vous inscrivez avec.", generic: "Une récompense de bienvenue peut s'appliquer selon les conditions actuelles du prestataire ; vérifiez-les dans l'application avant de vous inscrire.", code: "Code promo :", newTab: "(s'ouvre dans un nouvel onglet)", terms: "conditions du prestataire" },
  guide: { collapse: "Masquer le guide", expand: "Afficher le guide" },
  newsletter: { title: "Abonnez-vous à ma newsletter", text: "Nouveaux guides et changements de règles importants pour les Tunisiens qui partent en Italie. Pas de spam.", email: "Adresse e-mail", consent: "J'accepte de recevoir cette newsletter par e-mail et je sais que je peux me désabonner à tout moment.", privacy: "Vous recevrez d'abord un e-mail de confirmation.", privacyLink: "Confidentialité", submit: "S'abonner" },
  callout: { tip: "Astuce", warning: "Attention", note: "Note" },
  footerNav: { label: "Menu du site", home: "Accueil", skills: "Compétences", about: "À propos", work: "Projets", contact: "Contact", blog: "Blog", privacy: "Confidentialité" },
  footer: { rights: "Wassim Gatri. Tous droits réservés.", builtBy: "Écrit par Wassim Gatri" },
  notFound: { title: "Page introuvable", body: "Cette page n'existe pas ou a été déplacée.", cta: "Retour au blog" },
  categories: {
    documents: "Documents",
    work: "Travail",
    studies: "Études",
    language: "Langue",
    "daily-life": "Vie quotidienne",
    money: "Argent",
  },
};
