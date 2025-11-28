// src/pages/landing/components/HeroSection.tsx
import { Button } from "antd";
import { RocketOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import Particles from "@/components/ui/react-bits/Particles";
import Prism from "@/components/ui/react-bits/Prism";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#001529] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Thêm padding-top lớn hơn trên mobile để tránh sticky header che mất */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center pt-24 md:pt-20 pb-12">
        <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 text-xs md:text-sm font-medium text-blue-200 bg-blue-900/30 border border-blue-500/30 rounded-full animate-fadeInDown">
          🚀 Phiên bản mới: Đã tích hợp Bio Profile
        </div>

        {/* Typography responsive: text-4xl trên mobile -> text-7xl trên desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight animate-fadeInDown">
          Kết Nối Mọi Thứ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Trong Một Đường Dẫn
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fadeInUp px-2">
          Không chỉ là rút gọn liên kết. Chúng tôi giúp bạn tạo ra{" "}
          <strong>Hồ sơ cá nhân (Bio Link)</strong> ấn tượng, thể hiện cá tính
          với nhạc nền, video và kết nối tất cả mạng xã hội.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-bounceIn px-4 sm:px-0">
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            onClick={() => navigate("/shortlink")}
            className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg !rounded-full !bg-gradient-to-r from-blue-600 to-blue-500 hover:!from-blue-500 hover:!to-blue-400 !border-none shadow-lg shadow-blue-500/30 w-full sm:w-auto"
          >
            Rút Gọn Link Ngay
          </Button>
          <Button
            size="large"
            icon={<UserOutlined />}
            onClick={() => navigate("/profiles")}
            className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg !rounded-full !bg-white/10 hover:!bg-white/20 !text-white !border-white/20 backdrop-blur-sm w-full sm:w-auto"
          >
            Xem Demo Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
