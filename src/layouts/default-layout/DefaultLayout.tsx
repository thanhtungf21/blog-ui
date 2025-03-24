import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import RouteManager from "../../routes/RouteManager";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app-body text-left">
        <RouteManager />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
