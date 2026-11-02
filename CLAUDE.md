# Project notes for Claude

- **Blog posts**: before you write or change a post, read `src/content/articles/README.md`. When the work comes from the SEO report, also read `content/RULES.md`.
- **Never commit secrets**: keys stay outside the repo and reach scripts through env vars. `npm run check:secrets` fails the build if one is committable.
- **Stack**: Next.js 15 with webpack, static export. Never Next.js 16 or Turbopack.
