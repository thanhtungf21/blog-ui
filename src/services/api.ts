import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Tạo một instance của axios
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true, // Rất quan trọng! Cho phép axios gửi cookie qua các domain
});

// --- Interceptor ---

// Thêm một response interceptor
api.interceptors.response.use(
  // 1. Hàm được gọi khi response thành công (status code 2xx)
  (response) => {
    // Bất kỳ mã trạng thái nào nằm trong phạm vi 2xx sẽ kích hoạt hàm này
    // Bạn có thể xử lý dữ liệu trước khi trả về cho .then()
    return response;
  },

  // 2. Hàm được gọi khi response có lỗi
  (error) => {
    // Bất kỳ mã trạng thái nào nằm ngoài phạm vi 2xx sẽ kích hoạt hàm này
    const { status } = error.response || {};
    // console.log({ window: window.location, error });
    if (status === 401 && window.location.pathname !== "/login") {
      // Xử lý lỗi 401 (Unauthorized - Token không hợp lệ hoặc hết hạn)
      console.error("Unauthorized request. Redirecting to login.");

      // Xóa thông tin user trong context (nếu có)
      // userContext.setUser(null);

      // Xóa token (nếu bạn vẫn dùng localStorage cho mục đích khác)
      // localStorage.removeItem('authToken');

      // Chuyển hướng người dùng về trang đăng nhập
      // Chúng ta không dùng useNavigate ở đây vì đây là một module riêng biệt.
      // Cách tốt nhất là reload và để routing xử lý.
      // console.log({ error });

      console.log({ error, "": "go-to-login" });

      // window.location.href = "/login";
    }

    // Trả về một Promise bị reject với lỗi để .catch() ở nơi gọi API có thể xử lý
    return Promise.reject(error);
  }
);

export default api;
