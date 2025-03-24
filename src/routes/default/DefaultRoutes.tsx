import { RouteConfig } from "@/interfaces/routeConfig";
import About from "@/pages/about-us/About";

// import Home from "@/pages/home/Home";
// import Profile from "@/pages/profile/Profile";

const DefaultRoutes: RouteConfig[] = [
  // {
  //   path: "/",
  //   element: <Profile />,
  //   // element: <Home />,
  // },
  {
    path: "/about-us",
    element: <About />,
  },
];

export default DefaultRoutes;
