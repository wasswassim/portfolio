import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  // Custom domain (wassimgatri.com) — no subdirectory prefix needed.
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@splinetool/react-spline": path.join(
          __dirname,
          "node_modules/@splinetool/react-spline/dist/react-spline.js"
        ),
      };
    }
    return config;
  },
};

export default nextConfig;
