import { Suspense, lazy } from "react";
import { RouteConfig } from "@/types/routeConfig";
import RouteLoadingFallback from "@/components/common/RouteLoadingFallback"; // Import component dùng chung

// Sử dụng React.lazy để tải component khi cần thiết
const About = lazy(() => import("@/pages/about-us/About"));
const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
// import Dashboard from "@/pages/dashboard/Dashboard";

const DefaultRoutes: RouteConfig[] = [
  // {
  //   path: "/",
  //   element: <Suspense fallback={<RouteLoadingFallback />}><Profile /></Suspense>,
  // },
  {
    // path: "/about-us",
    path: "about-us", // Changed: Relative path
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <About />
      </Suspense>
    ),
  },
  {
    // path: "/about-us",
    path: "dashboard", // Changed: Relative path
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Dashboard />
      </Suspense>
    ),
  },
];

export default DefaultRoutes;
