import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/landing",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
};

export default nextConfig;