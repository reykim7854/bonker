/// <reference types="vitest" />
import path from "path";
// eslint-disable-next-line import/no-unresolved
import { configDefaults } from "vitest/config";

const SRC_DIR = path.resolve(__dirname, "./src");
const PUBLIC_DIR = path.resolve(__dirname, "./public");
const BUILD_DIR = path.resolve(__dirname, "./www");
export default async () => {
  // eslint-disable-next-line import/no-unresolved
  const { svelte } = await import("@sveltejs/vite-plugin-svelte");
  return {
    plugins: [svelte({ hot: !process.env.VITEST })],
    root: SRC_DIR,
    base: "",
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        "@": SRC_DIR,
      },
    },
    server: {
      port: 5173,
      host: true,
      strictPort: true,
    },
    test: {
      root: "./",
      include: [...configDefaults.include, "./tests/**/*.{test}.js"],
      exclude: [
        ...configDefaults.exclude,
        "./tests/reports/**",
        "./tests/**/*.{spec,e2e}.js",
      ],
      reporters: process.env.CI ? ["dot"] : ["default", "html"],
      outputFile: {
        html: "tests/reports/html/index.html",
      },
      coverage: {
        provider: "istanbul",
        extension: ["js"],
        reporter: ["text", "html"],
        reportsDirectory: "./tests/reports/coverage",
      },
    },
  };
};
