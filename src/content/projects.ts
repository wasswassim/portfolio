// Projects on the homepage. The current project is a non-clickable feature card (as on
// abdulosama.com); the others open a small presentation, as in Naresh Khatri's portfolio.

export const CURRENT_PROJECT = {
  name: "Quran Edits",
  tagline: "AI studio for Quran recitation videos",
  description:
    "The project I'm building now. Pick a surah, a reciter and a background, and Quran Edits renders a vertical video with the Arabic text and its translation, ready for Instagram Reels and YouTube Shorts.",
  logo: "/img/quranedits-logo.webp",
  facts: ["Built with Claude Code", "Vertical videos for Reels and Shorts"],
  /** Set when the site is public; until then the button says "Coming soon" */
  url: null as string | null,
};

export type Project = {
  id: string;
  title: string;
  category: string;
  type: "Client work" | "Personal";
  year: string;
  desc: string;
  image: { src: string; width: number; height: number };
  live?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "hr",
    title: "HR Management System",
    category: "Web development",
    type: "Client work",
    year: "2023",
    desc: "A full-stack web application to manage employee data, follow performance and run HR processes. My final-year project at ESPRIT School of Business, graded 16/20.",
    image: { src: "/img/work/hr.webp", width: 1600, height: 1136 },
  },
  {
    id: "eva",
    title: "Eva Cuisine Campaign",
    category: "Digital marketing",
    type: "Client work",
    year: "2024",
    desc: "An end-to-end digital marketing campaign for a food brand in Tunisia: ad creatives, the lead generation strategy and the campaign management.",
    image: { src: "/img/work/eva.webp", width: 1600, height: 506 },
  },
  {
    id: "ecommerce",
    title: "E-commerce Redesign",
    category: "Web design",
    type: "Client work",
    year: "2023",
    desc: "A UX-focused redesign and development for two e-commerce clients, Mekni Tunisian Distribution and EREMA Furniture, to improve the shopping experience and conversions.",
    image: { src: "/img/work/ecomerce.webp", width: 1600, height: 821 },
  },
  {
    id: "rankly",
    title: "Rankly",
    category: "SaaS landing page",
    type: "Personal",
    year: "2023",
    desc: "A landing page for an SEO SaaS: clean, fast and built to convert.",
    image: { src: "/img/work/rankly.webp", width: 1600, height: 815 },
    live: "https://wasswassim.github.io/Rankly/",
    github: "https://github.com/wasswassim/Rankly",
  },
  {
    id: "nexus",
    title: "Nexus Dashboard",
    category: "Web app",
    type: "Personal",
    year: "2024",
    desc: "An e-commerce dashboard that tracks an online store in one place: inventory, sales and performance.",
    image: { src: "/img/work/nexus.webp", width: 1600, height: 815 },
    live: "https://wasswassim.github.io/nexus-dashboard/",
    github: "https://github.com/wasswassim/nexus-dashboard",
  },
  {
    id: "cirokebap",
    title: "Cirokebap",
    category: "Restaurant website",
    type: "Personal",
    year: "2023",
    desc: "A website for a real kebab restaurant, with online ordering and a full digital menu.",
    image: { src: "/img/work/chirokebap.webp", width: 1600, height: 818 },
    live: "https://wasswassim.github.io/cirokebap/",
    github: "https://github.com/wasswassim/cirokebap",
  },
];
