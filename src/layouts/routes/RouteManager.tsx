import About from "@/pages/about-us/About";
import Home from "@/pages/home/Home";
import { Route, Routes } from "react-router-dom";

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
};

export default RouteManager;
