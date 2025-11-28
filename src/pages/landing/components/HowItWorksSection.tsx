// src/pages/landing/components/HowItWorksSection.tsx
import {
  RocketOutlined,
  UserOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";

const steps = [
  {
    id: "01",
    icon: <UserOutlined />,
    title: "Đăng Ký Tài Khoản",
    desc: "Tạo tài khoản miễn phí chỉ trong 30 giây. Không cần thẻ tín dụng.",
  },
  {
    id: "02",
    icon: <RocketOutlined />,
    title: "Tạo Link / Profile",
    desc: "Dán đường dẫn rút gọn hoặc thiết lập trang Profile cá nhân của bạn.",
  },
  {
    id: "03",
    icon: <ShareAltOutlined />,
    title: "Chia Sẻ & Theo Dõi",
    desc: "Copy link và chia sẻ lên mạng xã hội. Xem thống kê lượt truy cập.",
  },
];

const HowItWorksSection = () => {
  const renderStep = (step: (typeof steps)[0], index: number) => (
    <div
      key={index}
      className="relative flex flex-col items-center text-center h-full px-2"
    >
      {/* Connector Line (Chỉ hiện trên Desktop) */}
      {index !== steps.length - 1 && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
      )}

      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-xl md:text-2xl text-blue-600 mb-4 md:mb-6 border border-gray-100 z-10">
        {step.icon}
      </div>

      <div className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded mb-2 md:mb-3">
        BƯỚC {step.id}
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
        {step.title}
      </h3>
      <p className="text-gray-500 px-2 md:px-4 text-sm md:text-base">
        {step.desc}
      </p>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Bắt Đầu Cực Kỳ Đơn Giản
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            3 bước để làm chủ liên kết của bạn
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {steps.map((step, index) => renderStep(step, index))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            autoplay
            autoplaySpeed={4000}
            className="carousel-dark-dots"
          >
            {steps.map((step, index) => (
              <div key={index} className="pb-8">
                {" "}
                {/* Padding bottom để chừa chỗ cho dots */}
                {renderStep(step, index)}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
