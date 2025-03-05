import { RouteConfig } from "@/interfaces/routeConfig";
import About from "@/pages/about-us/About";
import Home from "@/pages/home/Home";

const DefaultRoutes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
];

export default DefaultRoutes;
