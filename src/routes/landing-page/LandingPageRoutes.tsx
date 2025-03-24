import { RouteConfig } from "@/interfaces/routeConfig";
import Login from "@/pages/login/Login";
import Profile from "@/pages/profile/Profile";

const LandingPageRoutes: RouteConfig[] = [
  {
    path: "/profiles",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default LandingPageRoutes;
