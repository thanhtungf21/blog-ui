// import { useState } from "react";
import "./App.css";
import DefaultLayout from "./layouts/default-layout/DefaultLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DefaultRoutes from "./layouts/routes/default/DefaultRoutes";
import LandingPageRoutes from "./layouts/routes/landing-page/LandingPageRoutes";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout";
import Error from "./pages/error/Error";
// import { Button } from "./components/ui/button";
function App() {
  // const [count, setCount] = useState(0);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    console.log(pathname, "path-name");
  }, [pathname]);

  const handleChangeLayout = () => {
    if (DefaultRoutes.some((route) => route.path === pathname)) {
      return <DefaultLayout />;
    } else if (LandingPageRoutes.some((route) => route.path === pathname)) {
      return <LandingPageLayout />;
    } else {
      return <Error />;
    }
  };

  return handleChangeLayout();
}

export default App;
