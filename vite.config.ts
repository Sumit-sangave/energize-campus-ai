import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // ensure all assets load from root
  server: {
    host: "::",
    port: 8080,
    // allowedHosts is only for dev; optional to remove in production
    allowedHosts: ["localhost", "energize-campus-ai.onrender.com"],
  },
  plugins: [
    // React SWC plugin for both dev and production
    react(),
    // componentTagger only in development
    ...(mode === "development" ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
