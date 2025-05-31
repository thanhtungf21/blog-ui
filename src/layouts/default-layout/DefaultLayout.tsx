import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app-body text-left">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
