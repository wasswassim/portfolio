import type { CategoryId } from "@/content/articles/types";

export const en = {
  blogName: "Building a Life in Italy",
  blogTagline: "Practical guides and honest notes on moving to, studying in and working from Italy.",
  nav: { home: "Portfolio", blog: "Blog", language: "Language", skip: "Skip to content" },
  landing: { imageCredit: "Satellite image: NASA MODIS", seoTitle: "Building a Life in Italy: Guides for Moving and Working", metaDescription: "Practical guides based on official sources for moving to, studying in and working from Italy, by Wassim Gatri, in English, French and Arabic.", other: "Available in other languages", heading: "Building a Life in Italy", empty: "No articles in this language yet.", read: "Read article", search: { label: "Search the guides", placeholder: "Search guides", clear: "Clear search", one: "1 matching guide", results: "{n} matching guides", none: "No guide matches your search." } },
  ads: { label: "Advertisements" },
  reviews: { title: "Did this guide help you?", ask: "A short review takes a minute and encourages me to keep these guides up to date and write new ones.", from: "Reader reviews", count: (n: number) => `${n} review${n === 1 ? "" : "s"}`, badgeLabel: (s: string, n: number) => `Rated ${s} out of 5 from ${n} reader review${n === 1 ? "" : "s"}.`, goTo: "Go to the reviews", report: { report: "Report", confirm: "Report this review as spam or abusive?", yes: "Yes, report it", cancel: "Cancel", done: "Thanks, I will check this review." }, showAll: (n: number) => `Show all ${n} reviews`, stars: (r: number) => `${r} out of 5 stars`, write: "Write a review", empty: "No reviews yet. Did a guide help you? Be the first to say how.", form: { rate: "Rate this guide", levels: ["Bad", "Poor", "Average", "Great", "Excellent"], text: "Your review", textPlaceholder: "What helped you most? What could be clearer?", name: "Your name", nameHint: "As it should appear, for example Amine B.", email: "Your email (optional)", emailHint: "Never published. Only used if I need to reply to you.", notice: "Your name, rating and review are published on this blog as soon as you send them.", submit: "Send my review", sending: "Sending…", success: "Thank you! Your review is now online.", error: "Your review could not be sent. Please try again in a moment.", tooMany: "You have sent several reviews in a short time. Please try again in an hour.", noLinks: "Please remove the links from your review. Links are not allowed." }, prev: "Previous review", next: "Next review", slide: (i: number, n: number) => `Review ${i} of ${n}` },
  article: { by: "By", published: "Published", updated: "Updated", verified: "Last verified", back: "All articles", notVerified: "Not yet verified against an official source.", guide: "Guide", summary: "In short", toc: "On this page", faq: "Frequently asked questions", sources: "Sources", photos: "Photos:", keyFacts: "Key facts", readTime: (n: number) => `${n} min read` },
  series: { label: "Series", continue: "Continue the series", part: (n: number, total: number) => `Part ${n} of ${total}`, next: "Next step", previous: "Previous step", allParts: "See all parts", parts: (n: number) => `${n} parts`, start: "Start here" },
  fees: { title: "Fees to plan for", source: "Source", checked: (d: string) => `checked ${d}`, total: "Total", per: { month: "/ month", year: "/ year" }, aboutTnd: (n: number) => `about ${n.toLocaleString("en-US")} TND`, rate: (r: string, d: string) => `Dinar amounts use the BCT rate of ${r} TND per euro (${d}).`, estimate: "Estimates as of October 2026. Check the source before you pay.", hub: "How to pay these fees from Tunisia" },
  offers: { title: "Partner offers" },
  referral: { benefits: "What you get with this link", label: "Promo code", disclosure: "This post contains promo codes and partner links, marked as such. If you sign up through one, I may receive a reward from the provider, at no extra cost to you. This does not change the order of the options or what I say about their risks.", inline: "Partner link: I may receive a reward if you sign up through it.", generic: "A welcome reward may apply under the provider's current terms. Check them in the app before you sign up.", code: "Promo code:", newTab: "(opens in a new tab)", terms: "provider's terms" },
  guide: { collapse: "Hide the guide", expand: "Show the guide" },
  newsletter: { title: "Subscribe to my newsletter", text: "New guides and important rule changes for Tunisians moving to Italy. No spam.", email: "Email address", consent: "I agree to receive this newsletter by email and know I can unsubscribe at any time.", privacy: "You will get a confirmation email first.", privacyLink: "Privacy", submit: "Subscribe" },
  callout: { tip: "Tip", warning: "Warning", note: "Note" },
  footerNav: { label: "Site menu", home: "Home", skills: "Skills", about: "About", work: "Work", contact: "Contact", blog: "Blog", privacy: "Privacy" },
  footer: { rights: "Wassim Gatri. All rights reserved.", builtBy: "Written by Wassim Gatri" },
  notFound: { title: "Page not found", body: "This page doesn't exist or has moved.", cta: "Back to the blog" },
  categories: {
    documents: "Documents",
    work: "Work",
    studies: "Studies",
    language: "Language",
    "daily-life": "Daily life",
    money: "Money",
  } satisfies Record<CategoryId, string>,
};

export type Dictionary = typeof en;
