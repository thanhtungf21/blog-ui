import { Outlet } from "react-router-dom";

const LandingPageLayout = () => {
  return (
    <>
      <div className="app-landing-page-body">
        <Outlet /> {/* Render các route con được định nghĩa trong main.tsx */}
      </div>
    </>
  );
};

export default LandingPageLayout;
