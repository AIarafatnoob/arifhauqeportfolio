import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Using an async function for the config allows us to conditionally load plugins
export default defineConfig(async () => {
  const plugins: PluginOption[] = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Conditionally add the cartographer plugin only in the Replit development environment
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    try {
      const cartographer = await import("@replit/vite-plugin-cartographer").then((m) =>
        m.cartographer()
      );
      plugins.push(cartographer);
    } catch (e) {
      console.warn("Could not load @replit/vite-plugin-cartographer, skipping.", e);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});