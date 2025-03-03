/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import path from "path";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 5174,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [
    mdx(),
    react(),
    svgr(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@polkadot-cloud/core",
        replacement: path.resolve(
          __dirname,
          "../packages",
          "cloud-core",
          "dist"
        ),
      },
      {
        find: "@packages",
        replacement: path.resolve(__dirname, "../packages"),
      },
    ],
  },
});
