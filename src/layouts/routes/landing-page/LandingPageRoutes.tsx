import { RouteConfig } from "@/interfaces/routeConfig";
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
];

export default LandingPageRoutes;
