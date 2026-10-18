import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  // /{lang}/blog/ and /{lang}/blog/{slug}/ are emitted as folder/index.html
  trailingSlash: true,
  // Two root layouts (route groups) need an explicit global 404 → out/404.html
  experimental: {
    globalNotFound: true,
  },
  // Custom domain (wassimgatri.com) — no subdirectory prefix needed.
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
