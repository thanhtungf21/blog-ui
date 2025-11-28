import { history } from "@/utils/history";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { APP_CONFIG } from "@/config/env";
// Ưu tiên lấy từ biến môi trường, fallback về localhost
const baseURL = APP_CONFIG.BASE_URL ?? "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// --- Interceptor ---

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { status } = error.response || {};
    const originalRequest = error.config; // Lấy thông tin request gốc

    // Kiểm tra xem API bị lỗi có phải là lấy thông tin user không
    // Lưu ý: Chuỗi "/users/me" phải khớp với endpoint trong authService
    const isCheckAuthRequest = originalRequest?.url?.includes("/users/me");

    // Logic xử lý lỗi 401 (Unauthorized)
    if (status === 401) {
      // TRƯỜNG HỢP 1: Đang ở trang Login thì không làm gì cả (để UI tự xử lý hiển thị lỗi sai pass)
      if (window.location.pathname === "/login") {
        return Promise.reject(error);
      }

      // TRƯỜNG HỢP 2: Đây là request kiểm tra đăng nhập ngầm (/users/me)
      // -> KHÔNG hiển thị Toast, KHÔNG redirect. Chỉ trả về lỗi để authStore biết là chưa đăng nhập.
      if (isCheckAuthRequest) {
        return Promise.reject(error);
      }

      // TRƯỜNG HỢP 3: Các request khác (VD: user đang thao tác lưu dữ liệu mà hết phiên)
      // -> Redirect về login và thông báo
      history.push("/login");
      toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
    }

    return Promise.reject(error);
  }
);

export default api;
