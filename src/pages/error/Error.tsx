// src/pages/error/Error.tsx
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Về Trang Chủ
          </Button>
        }
      />
    </div>
  );
};

export default Error;
