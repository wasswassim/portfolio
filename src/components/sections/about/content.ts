export const FACTS = [
  { label: "Based in",   value: "Tunis & Italy" },
  { label: "Background", value: "Business Information Systems — where I learned that technology only matters if it serves people" },
  { label: "Languages",  value: "Arabic · French · English · Italian" },
  { label: "Currently",  value: "Digital Marketing Master · LUMSA Università di Roma" },
  { label: "Approach",   value: "Start with the concept. Make it beautiful. Make it work. Make it grow." },
];

// Panel 1: two clip lines for the headline reveal
export const HEADLINE_LINES = ["WASSIM", "GATRI"];
export const SUBLINE        = "Where design meets code meets growth.";

// Mobile layout: panels stack vertically, no pin
export const ABOUT_CSS = `
        @media (max-width: 767px) {
          .about-section { height: auto !important; overflow: visible !important; }
          .about-track   { flex-direction: column !important; width: 100% !important;
                           height: auto !important; transform: none !important; }
          .about-panel   { width: 100% !important; min-height: 100svh !important; height: auto !important; }
          .about-panel-1 { padding: 0 1.5rem !important; }
          .about-panel-2 { padding: 0 1.5rem !important; }
          .about-panel-3 { padding: 0 !important; }
          /* Push panel 3 text below the background copy on mobile */
          .about-p3-content { padding-top: 44vh !important; }
        }
      `;
