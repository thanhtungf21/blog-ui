import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"; // Import svgr

export default defineConfig({
  plugins: [tailwindcss(), react(), svgr()], // Add svgr to the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [".ngrok-free.app"],
  },
  build: {
    sourcemap: false, // Disable source maps in production
  },
});
