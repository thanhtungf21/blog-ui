# Fe2b Blog - URL Shortener & Bio Profile Platform 🚀

**Fe2b Blog** là một nền tảng web hiện đại "All-in-One", kết hợp giữa công cụ rút gọn liên kết (URL Shortener) mạnh mẽ và trang hồ sơ cá nhân (Bio Link) độc đáo. Dự án được xây dựng với trọng tâm là hiệu suất, trải nghiệm người dùng (UX) mượt mà và giao diện thẩm mỹ.

![Project Banner](public/grok.png) ## ✨ Tính Năng Nổi Bật

### 🔗 Rút Gọn Liên Kết (Link Shortener)

- **Rút gọn nhanh chóng:** Biến các liên kết dài thành ngắn gọn, dễ nhớ.
- **Custom Alias:** Tùy chỉnh mã đường dẫn (VD: `domain.com/my-custom-link`).
- **Dashboard quản lý:** Xem danh sách liên kết, thống kê lượt click (Clicks counter).
- **Sao chép nhanh:** Copy link vào clipboard chỉ với 1 cú click.

### 👤 Hồ Sơ Cá Nhân (Bio Profile)

- **Giao diện ấn tượng:** Hiệu ứng nền video, nhạc nền tích hợp trình phát (Play/Pause/Mute).
- **Social Hub:** Tập hợp tất cả liên kết mạng xã hội (Facebook, TikTok, GitHub, YouTube...) tại một nơi.
- **Hiệu ứng thị giác:** Sử dụng Glassmorphism, hiệu ứng hạt (Particles) và hoạt ảnh mượt mà.

### 🛠 Hệ Thống & UX

- **Authentication:** Đăng ký và Đăng nhập bảo mật (Giao diện Split-Screen hiện đại).
- **Smooth Scrolling:** Tích hợp **Lenis** cho trải nghiệm cuộn trang mượt mà đẳng cấp cao.
- **Responsive Design:** Tối ưu hóa hoàn toàn cho Mobile (chuyển đổi Grid sang Carousel).
- **Interactive UI:** Hiệu ứng Hover, Loading states, và thông báo Toast thân thiện.

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng trên nền tảng các công nghệ mới nhất:

- **Core:** [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Siêu tốc)
- **State Management:**
  - [Zustand](https://github.com/pmndrs/zustand) (Quản lý Global State - Auth, User)
  - [TanStack Query (React Query)](https://tanstack.com/query/latest) (Quản lý Server State, Caching)
- **Styling:**
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [Ant Design](https://ant.design/) (UI Components)
  - [CSS Modules](https://github.com/css-modules/css-modules) (Cho một số component đặc thù)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Animations & Effects:**
  - [Lenis](https://github.com/studio-freight/lenis) (Smooth Scroll)
  - React Bits (Particles, Prism)
- **API Client:** [Axios](https://axios-http.com/)

## ⚙️ Cài Đặt & Chạy Dự Án

Đảm bảo bạn đã cài đặt **Node.js** (khuyến nghị v18+) và **pnpm**.

### 1. Clone dự án

```bash
git clone [https://github.com/thanhtungf21/blog-ui.git](https://github.com/thanhtungf21/blog-ui.git)
cd blog-ui
```
