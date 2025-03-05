import { Route, Routes } from "react-router-dom";
import DefaultRoutes from "./default/DefaultRoutes";
import { RouteConfig } from "@/interfaces/routeConfig";
import LandingPageLayout from "../landing-page-layout/LandingPageLayout";

const RouteManager = () => {
  return (
    <Routes>
      {DefaultRoutes.map((item: RouteConfig) => (
        <Route path={item.path} element={item.element} />
      ))}
      {LandingPageLayout.map((item: RouteConfig) => (
        <Route path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default RouteManager;
