// src/main.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "antd/dist/reset.css";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout.tsx";

// Pages
import Error from "./pages/error/Error.tsx";

// Route configurations
import DefaultRoutes from "./routes/DefaultRoutes.tsx";
import LandingPageRoutes from "./routes/LandingPageRoutes.tsx";
import AuthGuard from "./components/common/AuthGuard.tsx"; // <-- BỎ GHI CHÚ DÒNG NÀY
import SmoothScrolling from "./components/common/SmoothScrolling.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <AuthGuard />, // <-- BỎ GHI CHÚ DÒNG NÀY
        children: [
          {
            element: <DashboardLayout />,
            children: DefaultRoutes,
          },
        ],
      },
      {
        element: <MainLayout />,
        children: LandingPageRoutes,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
  <SmoothScrolling> {/* Bọc RouterProvider trong SmoothScrolling */}
      <RouterProvider router={router} />
    </SmoothScrolling>
  </HelmetProvider>
);
