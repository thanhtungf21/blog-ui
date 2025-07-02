// src/main.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "antd/dist/reset.css";

// Layouts
import DefaultLayout from "./layouts/default-layout/DefaultLayout.tsx";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout.tsx";

// Pages
import Error from "./pages/error/Error.tsx";

// Route configurations
import DefaultRoutes from "./routes/DefaultRoutes.tsx";
import LandingPageRoutes from "./routes/LandingPageRoutes.tsx";
import AuthGuard from "./components/AuthGuard/AuthGuard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <AuthGuard />,
        children: [
          {
            element: <DefaultLayout />,
            children: DefaultRoutes,
          },
        ],
      },
      {
        element: <LandingPageLayout />,
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
    <RouterProvider router={router} />
  </HelmetProvider>
);
