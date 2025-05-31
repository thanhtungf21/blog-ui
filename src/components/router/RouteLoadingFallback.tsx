import React from "react";

const RouteLoadingFallback: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white bg-opacity-75 animate-fadeIn"
      // Sử dụng animate-fadeIn từ global CSS (xem bước 2)
    >
      {/* Bạn có thể thay thế bằng spinner/animation khác nếu muốn */}
      <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      {/* <p className="mt-3 text-gray-700 text-sm">Đang tải trang...</p> */}
    </div>
  );
};

export default RouteLoadingFallback;
