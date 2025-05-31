import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import zipPack from "vite-plugin-zip-pack";

export default defineConfig({
  plugins: [tailwindcss(), react(), zipPack()], // Thêm plugin zipPack
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
    // Bạn có thể cấu hình outDir nếu muốn file zip được đặt ở nơi khác
  },
});
