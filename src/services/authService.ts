import api from "./api";
import { IFormInput, IRegisterInput } from "@/types/auth"; // Chúng ta sẽ tạo file type này ở bước tiếp theo

/**
 * Service quản lý các chức năng xác thực
 */
export const authService = {
  /**
   * Gửi thông tin đăng nhập đến server.
   * @param credentials - Email và password của người dùng.
   * @returns Dữ liệu trả về từ server khi đăng nhập thành công.
   */
  login: async (credentials: IFormInput) => {
    // Endpoint của bạn là '/api/auth/login'
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Gửi yêu cầu đăng xuất đến server.
   */
  logout: async () => {
    try {
      const response = await api.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMe: async () => {
    try {
      const response = await api.get("/users/me");
      return response.data; // Giả sử API trả về { user: { ... } }
    } catch (error) {
      throw error;
    }
  },

  register: async (data: IRegisterInput) => {
    try {
      // Xóa confirmPassword trước khi gửi lên server (nếu server không cần)
      const { confirmPassword, ...payload } = data; 
      const response = await api.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Bạn có thể thêm các hàm khác như register, checkStatus, etc. ở đây
};
