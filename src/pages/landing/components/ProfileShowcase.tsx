// src/pages/landing/components/ProfileShowcase.tsx
import { Button } from "antd";
import { CheckCircleOutlined, PlayCircleOutlined, BgColorsOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ProfileShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 px-4 bg-[#001529] text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Flex column trên mobile, row trên desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
              Feature Highlight
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Xây Dựng Thương Hiệu <br className="hidden md:block"/>
              <span className="text-purple-600">Cá Nhân Độc Đáo</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed">
              Tại sao chỉ gửi một liên kết đơn điệu? Hãy gửi cả một trải nghiệm! 
              Tạo trang đích chứa tất cả thông tin quan trọng của bạn chỉ trong vài phút.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8">
              {[
                { title: "Tùy chỉnh không giới hạn", desc: "Avatar, ảnh nền động, theme phong cách riêng." },
                { title: "Trải nghiệm đa phương tiện", desc: "Tích hợp trình phát nhạc, video nền." },
                { title: "Kết nối mạng xã hội", desc: "Facebook, TikTok, YouTube... tất cả tại một nơi." }
              ].map((item, idx) => (
                // Căn giữa item trên mobile
                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircleOutlined className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              type="primary" 
              size="large" 
              className="h-12 md:h-12 px-8 !rounded-lg !bg-purple-600 hover:!bg-purple-700 !border-none shadow-xl shadow-purple-200 w-full md:w-auto"
              onClick={() => navigate("/register")}
            >
              Tạo Profile Miễn Phí
            </Button>
          </div>

          {/* Visual Side (Mockup) */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl -z-10"></div>
            
            {/* Resize mockup on mobile: w-[260px] -> w-[300px] desktop */}
            <div className="relative w-[260px] md:w-[300px] bg-gray-900 rounded-[2.5rem] p-3 md:p-4 shadow-2xl border-4 md:border-8 border-gray-800 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 md:h-6 w-24 md:w-32 bg-gray-800 rounded-b-xl z-20"></div>
              
              <div className="bg-gray-800 h-full w-full rounded-[2rem] overflow-hidden relative aspect-[9/19]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
                <div className="relative z-10 p-4 md:p-6 flex flex-col items-center pt-10 md:pt-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 border-4 border-gray-800 mb-3 md:mb-4 shadow-lg"></div>
                  <div className="h-3 md:h-4 w-24 md:w-32 bg-gray-700/50 rounded-full mb-2"></div>
                  <div className="h-2 md:h-3 w-32 md:w-48 bg-gray-700/30 rounded-full mb-6 md:mb-8"></div>
                  
                  <div className="w-full space-y-2 md:space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 md:h-12 w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/5 flex items-center px-3 md:px-4 hover:bg-white/20 transition cursor-pointer">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 mr-2 md:mr-3"></div>
                        <div className="h-1.5 md:h-2 w-16 md:w-20 bg-white/30 rounded-full"></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 md:pt-8 flex gap-4 md:gap-6 text-white/50 text-lg md:text-xl">
                     <PlayCircleOutlined /> <BgColorsOutlined /> <ShareAltOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileShowcase;