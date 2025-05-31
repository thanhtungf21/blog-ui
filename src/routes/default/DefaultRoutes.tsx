import { Suspense, lazy } from "react";
import { RouteConfig } from "@/interfaces/routeConfig";
import RouteLoadingFallback from "@/components/router/RouteLoadingFallback"; // Import component dùng chung

// Sử dụng React.lazy để tải component khi cần thiết
const About = lazy(() => import("@/pages/about-us/About"));
const Dev = lazy(() => import("@/pages/dev/Dev"));

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
    // path: "/dev",
    path: "dev", // Changed: Relative path
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Dev />
      </Suspense>
    ),
  },
];

export default DefaultRoutes;
