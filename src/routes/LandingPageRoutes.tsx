import { Suspense, lazy } from "react";
import { RouteConfig } from "@/interfaces/routeConfig";
import RouteLoadingFallback from "@/components/router/RouteLoadingFallback";
import { Navigate } from "react-router-dom";
import ShortLink from "@/pages/shortlink/ShortLink";

// Sử dụng React.lazy để tải component khi cần thiết
const Profile = lazy(() => import("@/pages/profile/Profile"));
const Login = lazy(() => import("@/pages/login/Login"));
const Register = lazy(() => import("@/pages/register/Register")); // <-- Import trang Register

const LandingPageRoutes: RouteConfig[] = [
  {
    path: "profiles", 
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Profile />
      </Suspense>
    ),
  },
  {
    index: true,
    element: <Navigate to="/shortlink" replace />,
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<RouteLoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },
  // Thêm Route Register vào đây
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