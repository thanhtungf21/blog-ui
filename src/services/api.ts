// src/services/api.ts
import { history } from "@/utils/history";
import axios, { AxiosInstance, AxiosError } from "axios";
import toast from "react-hot-toast";

// Ưu tiên lấy từ biến môi trường, fallback về localhost
const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_BE_URL ||
  "http://localhost:3000";

const api: AxiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { status } = error.response || {};

    // Chỉ redirect login nếu lỗi 401 và không phải đang ở trang login
    if (status === 401 && window.location.pathname !== "/login") {
      history.push("/login");
      toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");
    }

    return Promise.reject(error);
  }
);

export default api;
