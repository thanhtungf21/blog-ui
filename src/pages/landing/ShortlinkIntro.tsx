// src/pages/landing/ShortlinkIntro.tsx
import { Helmet } from "react-helmet-async";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProfileShowcase from "./components/ProfileShowcase";
import HowItWorksSection from "./components/HowItWorksSection";
import CtaSection from "./components/CtaSection";
import Footer from "@/layouts/footer/Footer"; // Tối ưu sử dụng component có sẵn

const ShortlinkIntro = () => {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Rút gọn liên kết & Tạo Bio Profile - All in One</title>
        <meta
          name="description"
          content="Nền tảng 2 trong 1: Rút gọn liên kết an toàn và Tạo hồ sơ cá nhân (Bio Link) độc đáo."
        />
      </Helmet>

      {/* 1. Hero Section (Dark + Particles) */}
      <HeroSection />

      {/* 2. Features (Dark + Glass) */}
      <FeaturesSection />

      {/* 3. Profile Showcase (Light - High Contrast) */}
      <ProfileShowcase />

      {/* 4. How It Works (Light Gray) */}
      <HowItWorksSection />

      {/* 5. CTA Box (Mixed) */}
      <CtaSection />

      {/* 6. Footer (Existing Component) */}
        <Footer />
    </div>
  );
};

export default ShortlinkIntro;