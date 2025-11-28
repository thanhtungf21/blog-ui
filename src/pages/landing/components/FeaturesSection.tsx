// src/pages/landing/components/FeaturesSection.tsx
import {
  RocketOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";

const features = [
  {
    icon: <RocketOutlined className="text-2xl text-white" />,
    color: "bg-blue-500",
    title: "Siêu Tốc & Ổn Định",
    desc: "Công nghệ chuyển hướng độ trễ thấp giúp người dùng truy cập nội dung ngay lập tức.",
  },
  {
    icon: <SafetyCertificateOutlined className="text-2xl text-white" />,
    color: "bg-green-500",
    title: "An Toàn Tuyệt Đối",
    desc: "Mọi liên kết đều được quét mã độc. Dữ liệu được mã hóa chuẩn cao nhất.",
  },
  {
    icon: <BarChartOutlined className="text-2xl text-white" />,
    color: "bg-purple-500",
    title: "Thống Kê Hiệu Quả",
    desc: "Theo dõi lượt click theo thời gian thực và phân tích đối tượng khán giả (Sắp ra mắt).",
  },
];

const FeaturesSection = () => {
  // Hàm render Card để tái sử dụng
  const renderCard = (item: (typeof features)[0], index: number) => (
    <div
      key={index}
      // UPDATE: Thêm `min-h-[320px]` để cố định chiều cao, `flex flex-col justify-center` để căn giữa nội dung
      className="group p-6 md:p-8 rounded-2xl bg-[#001529] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-center mx-2 md:mx-0"
    >
      {/* Icon Wrapper */}
      <div
        className={`w-12 h-12 md:w-14 md:h-14 text-gray-100 ${item.color}/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:${item.color}! transition-colors duration-300 shrink-0`}
      >
        {item.icon}
      </div>
      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
            Quyền Năng Trong Tay Bạn
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Bộ công cụ toàn diện quản lý sự hiện diện trực tuyến
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => renderCard(item, index))}
        </div>

        {/* Mobile View: Carousel */}
        <div className="block md:hidden pb-8">
          <Carousel
            autoplay
            dots={{ className: "carousel-dark-dots" }}
            effect="fade" // UPDATE: Chuyển hiệu ứng sang fade
            className="carousel-dark-dots"
            dotPosition="bottom"
            // Tắt draggable khi dùng fade để trải nghiệm mượt mà hơn (tùy chọn)
            draggable={false}
          >
            {features.map((item, index) => (
              <div key={index} className="py-4">
                {" "}
                {/* Thêm px-1 để tránh bị cắt border/shadow */}
                {renderCard(item, index)}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
