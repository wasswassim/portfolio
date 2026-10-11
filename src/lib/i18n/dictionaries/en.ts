import type { CategoryId } from "@/content/articles/types";

export const en = {
  blogName: "Building a Life in Italy",
  blogTagline: "Practical guides and honest notes on moving to, studying in and working from Italy.",
  nav: { home: "Portfolio", blog: "Blog", language: "Language", skip: "Skip to content" },
  landing: { imageCredit: "Satellite image: NASA MODIS", seoTitle: "Building a Life in Italy: Guides for Moving and Working", metaDescription: "Practical guides based on official sources for moving to, studying in and working from Italy, by Wassim Gatri, in English, French and Arabic.", other: "Available in other languages", heading: "Building a Life in Italy", empty: "No articles in this language yet.", read: "Read article" },
  article: { by: "By", published: "Published", updated: "Updated", verified: "Last verified", back: "All articles", notVerified: "Not yet verified against an official source.", guide: "Guide", summary: "In short", toc: "On this page", faq: "Frequently asked questions", sources: "Sources", photos: "Photos:", keyFacts: "Key facts", readTime: (n: number) => `${n} min read` },
  series: { label: "Series", continue: "Continue the series", part: (n: number, total: number) => `Part ${n} of ${total}`, next: "Next step", previous: "Previous step", allParts: "See all parts", parts: (n: number) => `${n} parts`, start: "Start here" },
  fees: { title: "Fees to plan for", source: "Source", checked: (d: string) => `checked ${d}`, total: "Total", per: { month: "/ month", year: "/ year" }, aboutTnd: (n: number) => `about ${n.toLocaleString("en-US")} TND`, rate: (r: string, d: string) => `Dinar amounts use the BCT rate of ${r} TND per euro (${d}).`, estimate: "Estimates as of October 2026; check the source before you pay.", hub: "How to pay these fees from Tunisia" },
  referral: { label: "Referral link", disclosure: "This post contains referral links, marked as such. If you sign up through one, I may receive a reward from the provider at no extra cost to you. This does not change the order of the options or what I say about their risks.", inline: "Referral link: I may receive a reward if you sign up through it.", generic: "A welcome reward may apply under the provider's current terms; check them in the app before you sign up.", code: "Referral code:", cta: (name: string) => `Open ${name} with my referral link`, newTab: "(opens in a new tab)", terms: "provider's terms" },
  guide: { collapse: "Hide the guide", expand: "Show the guide" },
  newsletter: { title: "Subscribe to my newsletter", text: "New guides and important rule changes for Tunisians moving to Italy. No spam.", email: "Email address", consent: "I agree to receive this newsletter by email and know I can unsubscribe at any time.", privacy: "You will get a confirmation email first. Emails are sent with Brevo, on servers in the EU.", privacyLink: "Privacy", submit: "Subscribe" },
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
