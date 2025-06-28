import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "antd/dist/reset.css"; // Import CSS của Ant Design

// Layouts
import DefaultLayout from "./layouts/default-layout/DefaultLayout.tsx";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout.tsx";

// Pages (đặc biệt là trang Error)
import Error from "./pages/error/Error.tsx";

// Route configurations
import DefaultRoutes from "./routes/DefaultRoutes.tsx";
import LandingPageRoutes from "./routes/LandingPageRoutes.tsx"; // Kiểm tra và sửa nếu cần
import AuthGuard from "./components/AuthGuard/AuthGuard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // Nhóm route CẦN XÁC THỰC
      {
        element: <AuthGuard />, // <-- 2. Bọc bằng AuthGuard
        children: [
          {
            element: <DefaultLayout />,
            children: DefaultRoutes,
          },
        ],
      },
      // Nhóm route CÔNG KHAI
      {
        element: <LandingPageLayout />,
        children: LandingPageRoutes,
      },
    ],
  },
  {
    // Để route 404 ở ngoài để bắt tất cả các trường hợp không khớp
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
