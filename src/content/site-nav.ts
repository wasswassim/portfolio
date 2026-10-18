import type { Lang } from "@/lib/i18n/config";
import { blogPath } from "@/lib/i18n/routes";

// The site menu (components/site-menu) and both footers (homepage and blog) list the same links:
// the homepage sections, the stack and links pages and the blog in the reader's language.
export type NavId = "home" | "about" | "stack" | "projects" | "services" | "blog" | "links" | "contact";
export type NavLink = { id: NavId; label: string; href: string; thumbnail: string };

const LABELS: Record<Lang, Record<NavId | "privacy" | "menu" | "close" | "navLabel", string>> = {
  en: { home: "Home", about: "About", stack: "Stack", projects: "Projects", services: "Services", blog: "Blog", links: "Links", contact: "Contact", privacy: "Privacy", menu: "Menu", close: "Close", navLabel: "Site menu" },
  fr: { home: "Accueil", about: "À propos", stack: "Outils", projects: "Projets", services: "Services", blog: "Blog", links: "Liens", contact: "Contact", privacy: "Confidentialité", menu: "Menu", close: "Fermer", navLabel: "Menu du site" },
  ar: { home: "الرئيسية", about: "من أنا", stack: "أدواتي", projects: "المشاريع", services: "الخدمات", blog: "المدونة", links: "الروابط", contact: "تواصل", privacy: "الخصوصية", menu: "القائمة", close: "إغلاق", navLabel: "قائمة الموقع" },
};

// Picture shown beside the menu when a link is hovered (desktop), as in the template
const THUMBS: Record<NavId, string> = {
  home: "/img/wassimage.webp",
  about: "/img/wassimage.webp",
  stack: "/img/work/nexus.webp",
  projects: "/img/work/rankly.webp",
  services: "/img/work/ecomerce.webp",
  blog: "/blog/og-colosseum.jpg",
  links: "/img/wassimage.webp",
  contact: "/img/wassimage.webp",
};

export function navLinks(lang: Lang): NavLink[] {
  const t = LABELS[lang];
  const hrefs: Record<NavId, string> = {
    home: "/",
    about: "/#about",
    stack: "/stack/",
    projects: "/#projects",
    services: "/#services",
    blog: blogPath(lang),
    links: "/links/",
    contact: "/#contact",
  };
  return (Object.keys(hrefs) as NavId[]).map((id) => ({ id, label: t[id], href: hrefs[id], thumbnail: THUMBS[id] }));
}

export const navText = (lang: Lang) => LABELS[lang];
