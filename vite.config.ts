import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    react(),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          "@remix-run/router": path.resolve(
            __dirname,
            "../react-router/packages/router/index.js"
          ),
          "react-router": path.resolve(
            __dirname,
            "../react-router/packages/react-router/index.js"
          ),
          "react-router-dom": path.resolve(
            __dirname,
            "../react-router/packages/react-router-dom/index.jsx"
          ),
        },
      }
    : {},
});
