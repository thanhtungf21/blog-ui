// src/pages/shortlink/ShortLinkRedirect.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin, Alert, Button } from "antd";

import { linkService } from "@/services/linkService";

const ShortLinkRedirect = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!shortCode) {
      setError("Không tìm thấy mã rút gọn.");
      setLoading(false);
      return;
    }

    const fetchOriginalUrl = async () => {
      try {
        const response = await linkService.getOriginalUrl(shortCode);
        // Giả sử API trả về cấu trúc { data: { originalUrl: '...' } }
        if (response && response.data && response.data.originalUrl) {
          // Thực hiện chuyển hướng
          window.location.href = response.data.originalUrl;
        } else {
          setError("Không tìm thấy liên kết được yêu cầu.");
          setLoading(false);
        }
      } catch (err) {
        const errorMessage = "Liên kết không tồn tại hoặc đã hết hạn.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchOriginalUrl();
  }, [shortCode, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Spin tip="Đang chuyển hướng..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen p-4">
        <Alert
          message="Lỗi chuyển hướng"
          description={error}
          type="error"
          showIcon
          action={
            <Button onClick={() => navigate("/")} type="primary">
              Về trang chủ
            </Button>
          }
        />
      </div>
    );
  }

  // Fallback - người dùng sẽ không thấy vì đã được chuyển hướng
  return null;
};

export default ShortLinkRedirect;
