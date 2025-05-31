import { Suspense, lazy } from "react";
import { RouteConfig } from "@/interfaces/routeConfig";
import RouteLoadingFallback from "@/components/router/RouteLoadingFallback";

// Sử dụng React.lazy để tải component khi cần thiết
const Profile = lazy(() => import("@/pages/profile/Profile"));
const Login = lazy(() => import("@/pages/login/Login"));

const LandingPageRoutes: RouteConfig[] = [
  {
    // path: "/profiles",
    path: "profiles", // Changed: Relative path
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Profile />
      </Suspense>
    ),
  },
  {
    // path: "/",
    index: true, // Changed: Use index: true for the root of this layout
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Profile />
      </Suspense>
    ),
  },
  {
    // path: "/login",
    path: "login", // Changed: Relative path
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },
];

export default LandingPageRoutes;
