import toast from "react-hot-toast";
import { isAxiosError } from "axios";

/**
 * Xử lý và hiển thị lỗi từ API một cách nhất quán.
 * @param error - Đối tượng lỗi được bắt từ block catch.
 * @param defaultMessage - Tin nhắn mặc định nếu không tìm thấy thông báo lỗi cụ thể.
 */
export const handleApiError = (
  error: unknown,
  defaultMessage = "Có lỗi không mong muốn xảy ra. Vui lòng thử lại."
): void => {
  // Log lỗi đầy đủ ra console để debug
  console.error("API Error:", error);

  let message = defaultMessage;

  // Kiểm tra xem có phải lỗi từ axios không
  if (isAxiosError(error)) {
    // Ưu tiên lấy thông báo lỗi từ response của server
    message = error.response?.data?.message || error.message;
  } else if (error instanceof Error) {
    // Lấy thông báo từ các đối tượng Error thông thường
    message = error.message;
  }

  // Hiển thị thông báo lỗi cho người dùng
  toast.error(message);
};
