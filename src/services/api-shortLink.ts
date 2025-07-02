import { history } from "@/utils/history";
import axios from "axios";
import toast from "react-hot-toast";
const baseURL = import.meta.env.VITE_BE_URL || "http://localhost:3000";

// Tạo một instance của axios
const apiShortLink = axios.create({
  baseURL: baseURL,
  withCredentials: true, // Rất quan trọng! Cho phép axios gửi cookie qua các domain
});

// --- Interceptor ---

// Thêm một response interceptor
apiShortLink.interceptors.response.use(
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
      history.push("/login"); // Hoặc bất kỳ route đăng nhập nào của bạn
      toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại");

      // window.location.href = "/login";
    }

    // Trả về một Promise bị reject với lỗi để .catch() ở nơi gọi API có thể xử lý
    return Promise.reject(error);
  }
);

export default apiShortLink;
