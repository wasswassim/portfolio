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
      { slug: "grok", name: "Grok", url: "https://grok.com/", desc: "xAI's model, connected to what happens on X." },
      { slug: "kimi", name: "Kimi", url: "https://www.kimi.com/", desc: "Moonshot AI's open model, strong at code and long tasks." },
      { slug: "manus", name: "Manus", url: "https://manus.im/", desc: "An AI agent that runs a task from research to delivery." },
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
      { slug: "canva", name: "Canva", url: "https://www.canva.com/", desc: "Quick designs for social media and presentations." },
      { slug: "midjourney", name: "Midjourney", url: "https://www.midjourney.com/", desc: "AI image generation." },
      { slug: "instagram-edits", name: "Instagram Edits", url: "https://edits.instagram.com/", desc: "Instagram's video editor for the phone.", svgl: "instagram" },
      { slug: "higgsfield", name: "Higgsfield", url: "https://higgsfield.ai/", desc: "AI video with cinematic camera moves.", svgl: null },
      { slug: "premiere-pro", name: "Adobe Premiere Pro", url: "https://www.adobe.com/products/premiere.html", desc: "Video editing for bigger projects.", svgl: "premiere" },
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
      { slug: "raycast", name: "Raycast", url: "https://www.raycast.com/", desc: "A Mac launcher for apps, commands and AI." },
      { slug: "arc", name: "Arc", url: "https://arc.net/", desc: "A browser with a separate space for each project." },
      { slug: "telegram", name: "Telegram", url: "https://telegram.org/", desc: "Messaging for support and quick chats." },
      { slug: "instantdm", name: "InstantDM", url: "https://instantdm.com/", desc: "Turns Instagram comments into automatic DMs.", svgl: null },
    ],
  },
  {
    id: "hardware",
    title: "Hardware",
    intro: "What I work, film and play on.",
    tools: [
      { slug: "macbook-pro", name: "MacBook Pro 16″", url: "https://www.apple.com/macbook-pro/", desc: "A laptop for work and editing.", svgl: "apple" },
      { slug: "mac-mini", name: "Mac mini M4", url: "https://www.apple.com/mac-mini/", desc: "A small desktop that can serve local AI agents.", svgl: "apple" },
      { slug: "iphone", name: "iPhone 17 Pro Max", url: "https://www.apple.com/iphone/", desc: "Phone and camera for short videos.", svgl: "apple" },
      { slug: "asus-tuf", name: "ASUS TUF Gaming PC", url: "https://www.asus.com/", desc: "A gaming PC that can also run local AI models.", svgl: "asus" },
      { slug: "msi-oled", name: "MSI OLED monitor", url: "https://www.msi.com/", desc: "An OLED screen with accurate colour.", svgl: "msi" },
      { slug: "sony-a7c-ii", name: "Sony A7C II", url: "https://electronics.sony.com/", desc: "A compact full-frame camera for video.", svgl: "sony" },
      { slug: "godox-qr-p70", name: "Godox QR-P70", url: "https://www.godox.com/", desc: "Key light for filming.", svgl: null },
      { slug: "godox-sl60ii", name: "Godox SL60II D", url: "https://www.godox.com/", desc: "A white LED studio light.", svgl: null },
      { slug: "godox-ml30", name: "Godox ML30", url: "https://www.godox.com/", desc: "A small back light.", svgl: null },
      { slug: "elgato-prompter", name: "Elgato Prompter", url: "https://www.elgato.com/", desc: "A teleprompter that sits in front of the lens.", svgl: "elgato" },
      { slug: "msi-gk600", name: "MSI FORGE GK600 TKL", url: "https://www.msi.com/", desc: "A wireless tenkeyless keyboard.", svgl: "msi" },
      { slug: "logitech-g502x", name: "Logitech G502 X", url: "https://www.logitechg.com/", desc: "A gaming mouse.", svgl: "logitech" },
      { slug: "anker-prime", name: "Anker Prime 200W", url: "https://www.anker.com/", desc: "A 6-port GaN charger for the whole desk.", svgl: "anker" },
      { slug: "raspberry-pi-500", name: "Raspberry Pi 500", url: "https://www.raspberrypi.com/", desc: "A computer inside a keyboard, for experiments.", svgl: "raspberry" },
      { slug: "ray-ban-meta", name: "Ray-Ban Meta glasses", url: "https://www.ray-ban.com/", desc: "Smart glasses with a camera.", svgl: "meta" },
      { slug: "sony-wh1000xm5", name: "Sony WH-1000XM5", url: "https://electronics.sony.com/", desc: "Noise-cancelling headphones.", svgl: "sony" },
      { slug: "marshall-stanmore", name: "Marshall Stanmore II", url: "https://www.marshall.com/", desc: "A desk speaker.", svgl: null },
      { slug: "xiaomi-sound", name: "Xiaomi Sound Party", url: "https://www.mi.com/", desc: "A speaker for outdoors.", svgl: "xiaomi" },
    ],
  },
];

export const TOOL_COUNT = STACK.reduce((n, c) => n + c.tools.length, 0);
