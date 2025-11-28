import { Outlet } from "react-router-dom";

const LandingPageLayout = () => {
  return (
    <>
      <div className="app-authen-layout-body">
        <Outlet />
      </div>
    </>
  );
};

export default LandingPageLayout;
