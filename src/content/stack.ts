// The tools on the homepage tools section and the /stack page. First draft (2026-10-17): every
// tool listed on abdulosama.com/stack, with neutral one-line descriptions, for the owner to trim to
// what he actually uses. Logos: public/assets/stack/<slug>.svg, fetched from SVGL
// (scripts/fetch-stack-logos.mjs); a tool without a logo shows its initials.

export type Tool = {
  slug: string;
  name: string;
  url: string;
  desc: string;
  /** Search term for the SVGL logo library (defaults to name); null when SVGL has none */
  svgl?: string | null;
  /** Shown as "Used before" */
  past?: boolean;
};

export type ToolCategory = { id: string; title: string; intro: string; tools: Tool[] };

export const STACK: ToolCategory[] = [
  {
    id: "ai",
    title: "AI",
    intro: "The models and agents I work with.",
    tools: [
      { slug: "claude", name: "Claude", url: "https://claude.ai/", desc: "Anthropic's assistant for writing, thinking and building.", svgl: "claude" },
      { slug: "claude-code", name: "Claude Code", url: "https://www.anthropic.com/claude-code", desc: "Anthropic's coding agent in the terminal and the desktop app.", svgl: "claude" },
      { slug: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", desc: "OpenAI's assistant for quick tasks and first drafts.", svgl: "openai" },
      { slug: "opencode", name: "OpenCode", url: "https://opencode.ai/", desc: "An open-source coding agent for the terminal.", svgl: "opencode" },
      { slug: "perplexity", name: "Perplexity", url: "https://www.perplexity.ai/", desc: "Search that answers with its sources." },
      { slug: "whisper", name: "Whisper", url: "https://openai.com/research/whisper", desc: "OpenAI's speech-to-text model for transcripts.", svgl: "openai" },
      { slug: "codex", name: "Codex", url: "https://openai.com/codex/", desc: "OpenAI's coding agent.", svgl: "openai" },
      { slug: "gemini", name: "Gemini", url: "https://gemini.google.com/", desc: "Google's models: deep research, images and video." },
      { slug: "nano-banana", name: "Nano Banana", url: "https://gemini.google/overview/image-generation/", desc: "Google's image generation and editing model in Gemini.", svgl: "gemini" },
      { slug: "grok", name: "Grok", url: "https://grok.com/", desc: "xAI's model, connected to what happens on X." },
      { slug: "kimi", name: "Kimi", url: "https://www.kimi.com/", desc: "Moonshot AI's open model, strong at code and long tasks." },
      { slug: "hermes-agent", name: "Hermes Agent", url: "https://nousresearch.com/", desc: "Nous Research's open-source agent.", svgl: "nous research" },
      { slug: "openrouter", name: "OpenRouter", url: "https://openrouter.ai/", desc: "One API key for every model." },
      { slug: "wispr-flow", name: "Wispr Flow", url: "https://wisprflow.ai/", desc: "Voice dictation into any app.", svgl: "wispr" },
    ],
  },
  {
    id: "development",
    title: "Development",
    intro: "What sites and systems are built with, from code to launch.",
    tools: [
      { slug: "github", name: "GitHub", url: "https://github.com/", desc: "Code hosting, versions and open-source discovery." },
      { slug: "supabase", name: "Supabase", url: "https://supabase.com/", desc: "Postgres database, authentication and storage for apps." },
      { slug: "21st-dev", name: "21st.dev", url: "https://21st.dev/", desc: "A library of ready-made React components and UI blocks.", svgl: "21st" },
      { slug: "cloudflare", name: "Cloudflare", url: "https://www.cloudflare.com/", desc: "DNS, hosting, Workers and storage at the edge." },
      { slug: "n8n", name: "n8n", url: "https://n8n.io/", desc: "Workflow automation with little code." },
      { slug: "docker", name: "Docker", url: "https://www.docker.com/", desc: "Runs any tool in a container, locally or on a server." },
      { slug: "tailscale", name: "Tailscale", url: "https://tailscale.com/", desc: "A private network between your devices." },
      { slug: "shadcn-ui", name: "shadcn/ui", url: "https://ui.shadcn.com/", desc: "Ready-made UI components to start a project.", svgl: "shadcn" },
      { slug: "radix-ui", name: "Radix UI", url: "https://www.radix-ui.com/", desc: "Accessible, unstyled building blocks for interfaces.", svgl: "radix" },
      { slug: "ark-ui", name: "Ark UI", url: "https://ark-ui.com/", desc: "Headless components for React, Vue and Solid.", svgl: "ark" },
      { slug: "svgl", name: "SVGL", url: "https://svgl.app/", desc: "A library of brand logos as SVG (the logos on this page)." },
      { slug: "twenty", name: "Twenty", url: "https://twenty.com/", desc: "An open-source CRM." },
      { slug: "stripe", name: "Stripe", url: "https://stripe.com/", desc: "Online payments in every currency." },
      { slug: "revenuecat", name: "RevenueCat", url: "https://www.revenuecat.com/", desc: "In-app subscriptions and purchases for mobile apps." },
      { slug: "bunny-net", name: "Bunny.net", url: "https://bunny.net/", desc: "Video hosting and delivery.", svgl: "bunny" },
    ],
  },
  {
    id: "creative",
    title: "Creative tools",
    intro: "Design, photos, video and voice.",
    tools: [
      { slug: "paper", name: "Paper", url: "https://paper.design/", desc: "A design tool whose designs turn into code.", svgl: null },
      { slug: "figma", name: "Figma", url: "https://www.figma.com/", desc: "Interface design and team collaboration." },
      { slug: "affinity", name: "Affinity", url: "https://www.affinity.studio/", desc: "Design and photo editing without a subscription." },
      { slug: "photoshop", name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html", desc: "Photo editing and image design.", svgl: "photoshop" },
      { slug: "illustrator", name: "Adobe Illustrator", url: "https://www.adobe.com/products/illustrator.html", desc: "Vector design for logos and illustrations.", svgl: "illustrator" },
      { slug: "canva", name: "Canva", url: "https://www.canva.com/", desc: "Quick designs for social media and presentations." },
      { slug: "midjourney", name: "Midjourney", url: "https://www.midjourney.com/", desc: "AI image generation." },
      { slug: "instagram-edits", name: "Instagram Edits", url: "https://edits.instagram.com/", desc: "Instagram's video editor for the phone.", svgl: "instagram" },
      { slug: "higgsfield", name: "Higgsfield", url: "https://higgsfield.ai/", desc: "AI video with cinematic camera moves.", svgl: null },
      { slug: "elevenlabs", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Natural AI voices and dubbing." },
      { slug: "evoto", name: "Evoto", url: "https://www.evoto.ai/", desc: "AI portrait retouching.", svgl: null },
      { slug: "davinci-resolve", name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve", desc: "Video editing and colour grading.", svgl: "davinci" },
      { slug: "heygen", name: "HeyGen", url: "https://www.heygen.com/", desc: "AI video avatars.", svgl: null },
      { slug: "capcut", name: "CapCut", url: "https://www.capcut.com/", desc: "A video editor for the phone.", past: true },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    intro: "Ads, CRM and messaging.",
    tools: [
      { slug: "respond-io", name: "Respond.io", url: "https://respond.io/", desc: "One inbox for WhatsApp and Instagram messages.", svgl: null },
      { slug: "bigin", name: "Bigin by Zoho", url: "https://www.bigin.com/", desc: "A simple CRM for clients and deals.", svgl: "zoho" },
      { slug: "meta-ads", name: "Meta Ads", url: "https://www.facebook.com/business/ads", desc: "Facebook and Instagram advertising.", svgl: "meta" },
      { slug: "google-ads", name: "Google Ads", url: "https://ads.google.com/", desc: "Search and YouTube advertising.", svgl: "google ads" },
      { slug: "tiktok-ads", name: "TikTok Ads", url: "https://ads.tiktok.com/", desc: "Advertising on TikTok.", svgl: "tiktok" },
      { slug: "google-workspace", name: "Google Workspace", url: "https://workspace.google.com/", desc: "Email, documents and spreadsheets.", svgl: "google" },
      { slug: "google-meet", name: "Google Meet", url: "https://meet.google.com/", desc: "Video meetings and calls." },
    ],
  },
  {
    id: "everyday",
    title: "Everyday apps",
    intro: "The apps open from the first minute of the day.",
    tools: [
      { slug: "telegram", name: "Telegram", url: "https://telegram.org/", desc: "Messaging for support and quick chats." },
      { slug: "whatsapp", name: "WhatsApp", url: "https://www.whatsapp.com/", desc: "Messaging with clients and friends." },
      { slug: "reddit", name: "Reddit", url: "https://www.reddit.com/", desc: "Communities and real answers on almost any topic." },
      { slug: "instantdm", name: "InstantDM", url: "https://instantdm.com/", desc: "Turns Instagram comments into automatic DMs.", svgl: null },
    ],
  },
  {
    id: "hardware",
    title: "Hardware",
    intro: "What I work on.",
    tools: [
      { slug: "vivobook-pro", name: "ASUS Vivobook Pro 14 OLED", url: "https://www.asus.com/laptops/for-creators/vivobook/", desc: "My laptop for work, design and code.", svgl: "asus" },
      { slug: "iphone-12", name: "iPhone 12", url: "https://www.apple.com/iphone/", desc: "My phone.", svgl: "apple" },
      { slug: "galaxy-z-flip-6", name: "Samsung Galaxy Z Flip6", url: "https://www.samsung.com/galaxy-z-flip6/", desc: "My foldable phone.", svgl: "samsung" },
    ],
  },
];

export const TOOL_COUNT = STACK.reduce((n, c) => n + c.tools.length, 0);
