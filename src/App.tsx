// import { useState } from "react";
import "./App.css";
import DefaultLayout from "./layouts/default-layout/DefaultLayout";
import { useLocation } from "react-router-dom";
import DefaultRoutes from "./routes/default/DefaultRoutes";
import LandingPageRoutes from "./routes/landing-page/LandingPageRoutes";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout";
import Error from "./pages/error/Error";
import { UserProvider } from "./context/UserContext";
// import { Button } from "./components/ui/button";
function App() {
  // const [count, setCount] = useState(0);
  const location = useLocation();
  const { pathname } = location;

  const handleChangeLayout = () => {
    if (DefaultRoutes.some((route) => route.path === pathname)) {
      return <DefaultLayout />;
    } else if (LandingPageRoutes.some((route) => route.path === pathname)) {
      return <LandingPageLayout />;
    } else {
      return <Error />;
    }
  };

  return <UserProvider>{handleChangeLayout()}</UserProvider>;
}

export default App;
