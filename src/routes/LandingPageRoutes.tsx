// src/routes/LandingPageRoutes.tsx
import { Suspense, lazy } from "react";
import { RouteConfig } from "@/types/routeConfig";
import RouteLoadingFallback from "@/components/common/RouteLoadingFallback";

// Sử dụng React.lazy để tải component khi cần thiết
const Profile = lazy(() => import("@/pages/profile/Profile"));
const Login = lazy(() => import("@/pages/login/Login"));
const Register = lazy(() => import("@/pages/register/Register"));
const ShortLink = lazy(() => import("@/pages/shortlink/ShortLink"));
const ShortlinkIntro = lazy(() => import("@/pages/landing/ShortlinkIntro")); // <-- Import file mới

const LandingPageRoutes: RouteConfig[] = [
  {
    // Trang chủ hiển thị Landing Page giới thiệu
    index: true, 
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <ShortlinkIntro />
      </Suspense>
    ),
  },
  {
    path: "profiles",
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "shortlink",
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <ShortLink />
      </Suspense>
    ),
  },
];

export default LandingPageRoutes;