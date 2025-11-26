// src/pages/landing/components/FeaturesSection.tsx
import { RocketOutlined, SafetyCertificateOutlined, BarChartOutlined } from "@ant-design/icons";

const features = [
  {
    // Cập nhật: Icon luôn màu trắng (text-white)
    icon: <RocketOutlined className="text-2xl text-white" />,
    color: "bg-blue-500", // Background sẽ dùng màu này
    title: "Siêu Tốc & Ổn Định",
    desc: "Công nghệ chuyển hướng độ trễ thấp giúp người dùng truy cập nội dung ngay lập tức.",
  },
  {
    // Cập nhật: Icon luôn màu trắng (text-white)
    icon: <SafetyCertificateOutlined className="text-2xl text-white" />,
    color: "bg-green-500", // Background sẽ dùng màu này
    title: "An Toàn Tuyệt Đối",
    desc: "Mọi liên kết đều được quét mã độc. Dữ liệu được mã hóa chuẩn cao nhất.",
  },
  {
    // Cập nhật: Icon luôn màu trắng (text-white)
    icon: <BarChartOutlined className="text-2xl text-white" />,
    color: "bg-purple-500", // Background sẽ dùng màu này
    title: "Thống Kê Hiệu Quả",
    desc: "Theo dõi lượt click theo thời gian thực và phân tích đối tượng khán giả (Sắp ra mắt).",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#0b1d2e] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Quyền Năng Trong Tay Bạn</h2>
          <p className="text-gray-400 text-base md:text-lg">Bộ công cụ toàn diện quản lý sự hiện diện trực tuyến</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-[#112a45]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Container Background: Sử dụng item.color với opacity 20% (/20), khi hover sẽ full màu */}
              <div className={`w-12 h-12 md:w-14 md:h-14 text-gray-100 ${item.color}/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:${item.color} transition-colors duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;