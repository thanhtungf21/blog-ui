import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import DefaultLayout from "./layouts/default-layout/DefaultLayout.tsx";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout.tsx";

// Pages (đặc biệt là trang Error)
import Error from "./pages/error/Error.tsx";

// Route configurations
import DefaultRoutes from "./routes/default/DefaultRoutes.tsx";
import LandingPageRoutes from "./routes/landing-page/LandingPageRoutes.tsx"; // Kiểm tra và sửa nếu cần

const router = createBrowserRouter([
  {
    element: <App />, // App component làm wrapper chung, chứa UserProvider và Outlet
    errorElement: <Error />, // Trang lỗi chung cho các lỗi không bắt được trong route
    children: [
      {
        element: <DefaultLayout />,
        children: DefaultRoutes, // Các route con sử dụng DefaultLayout
      },
      {
        element: <LandingPageLayout />,
        children: LandingPageRoutes, // Các route con sử dụng LandingPageLayout
      },
      {
        path: "*", // Bắt tất cả các path không khớp với các route đã định nghĩa (404)
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
