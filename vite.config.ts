import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import zipPack from "vite-plugin-zip-pack";
// 1. Import plugin obfuscator
import obfuscator from "rollup-plugin-obfuscator";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    zipPack(),
    // 2. Thêm cấu hình obfuscator vào plugins
    obfuscator({
      global: true, // Áp dụng cho tất cả các file trong bundle
      options: {
        // --- CẤU HÌNH LÀM RỐI (Mức độ trung bình - cao) ---

        // Nén code thành 1 dòng
        compact: true,

        // Biến đổi luồng điều khiển (if/else/loops) thành switch-case rối rắm
        // Tăng độ khó đọc lên rất nhiều nhưng giảm hiệu năng nhẹ (khoảng 15-20%)
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,

        // Chèn code "chết" (không bao giờ chạy) để đánh lạc hướng
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,

        // Chống debug: Nếu ai đó mở DevTools, browser có thể bị treo hoặc code ngừng chạy
        // debugProtection: true, // Cẩn thận: Có thể ảnh hưởng trải nghiệm người dùng thật
        // debugProtectionInterval: 4000,

        // Vô hiệu hóa console.log, console.info...
        disableConsoleOutput: true,

        // Đổi tên biến/hàm thành dạng hex (ví dụ: _0x5a3b)
        identifierNamesGenerator: "hexadecimal",

        // Mã hóa chuỗi string (biến các chuỗi văn bản thành mã loằng ngoằng)
        stringArray: true,
        stringArrayEncoding: ["base64", "rc4"],
        stringArrayThreshold: 0.75,

        // Xoay vòng mảng chuỗi để khó tìm vị trí thực
        rotateStringArray: true,

        // Chống format code (làm code khó format lại cho đẹp)
        selfDefending: true,

        // Biến đổi key của object
        transformObjectKeys: true,

        // Sử dụng các ký tự unicode thoát để làm rối thêm
        unicodeEscapeSequence: false,
      },
    }),
  ],
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
    sourcemap: false, // Đảm bảo dòng này luôn là false
    // Tùy chọn: Xóa console.log bằng esbuild (nhẹ hơn obfuscator disableConsoleOutput)
    // minify: 'esbuild',
    // drop: ['console', 'debugger'],
  },
});
