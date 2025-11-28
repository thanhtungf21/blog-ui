// src/pages/landing/ShortlinkIntro.tsx
import { Helmet } from "react-helmet-async";
import LandingHeader from "./components/LandingHeader"; // Import Header mới
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProfileShowcase from "./components/ProfileShowcase";
import HowItWorksSection from "./components/HowItWorksSection";
import CtaSection from "./components/CtaSection";
import Footer from "@/layouts/components/footer/Footer";

const ShortlinkIntro = () => {
  return (
    <div className="font-inter bg-white relative">
      <Helmet>
        <title>Rút gọn liên kết & Tạo Bio Profile - All in One</title>
      </Helmet>

      {/* Header riêng cho Landing Page */}
      <LandingHeader />

      {/* Gắn ID cho các section để Lenis scroll tới */}
      <div id="hero">
        <HeroSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="profile-showcase">
        <ProfileShowcase />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <div id="cta">
        <CtaSection />
      </div>

      <Footer />
    </div>
  );
};

export default ShortlinkIntro;
