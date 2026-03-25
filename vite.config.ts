import { defineConfig } from "vitest/config";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/service-log",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      routeFileIgnorePrefix: "-",
      quoteStyle: "single",
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/vitest-setup.ts"],
  },
});
