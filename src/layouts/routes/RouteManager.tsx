import { Route, Routes } from "react-router-dom";
import DefaultRoutes from "./default/DefaultRoutes";
import { RouteConfig } from "@/interfaces/routeConfig";
import LandingPageRoutes from "./landing-page/LandingPageRoutes";

const RouteManager = () => {
  return (
    <Routes>
      {DefaultRoutes.map((item: RouteConfig) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      {LandingPageRoutes.map((item: RouteConfig) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default RouteManager;
