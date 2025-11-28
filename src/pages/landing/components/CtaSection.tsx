// src/pages/landing/components/CtaSection.tsx
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 px-4 bg-[#001529]">
      <div className="max-w-4xl mx-auto bg-blue-950 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 relative z-10">
          Bạn đã sẵn sàng bùng nổ?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto relative z-10">
          Tham gia cùng cộng đồng người dùng sáng tạo của chúng tôi và bắt đầu quản lý liên kết chuyên nghiệp ngay hôm nay.
        </p>
        <Button 
          type="primary" 
          size="large" 
          className="h-12 md:h-14 px-8 md:px-12 !rounded-full !bg-white !text-[#001529] hover:!bg-gray-100 !border-none text-base md:text-lg font-bold relative z-10 w-full sm:w-auto"
          onClick={() => navigate("/login")}
        >
          Tham Gia Ngay - Free
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;