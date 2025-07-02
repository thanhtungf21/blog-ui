import { authService } from "@/services/authService";
import { User } from "@/types/auth";

import { handleApiError } from "@/utils/errorHandler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useAuthGuard } from "./AuthGuardContext";

// Create the context
interface IUserContext {
  user: User | null; // Sử dụng User type từ src/types/auth.ts
  logout: () => Promise<void>;
  isLoading: boolean;
  isSuccess: boolean;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);
// Provider component to manage user state and provide it to the app
export const UserProvider = ({ children }: any) => {
  // Initialize user state with name and login status
  // Bắt đầu với trạng thái loading
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const { isAuthRequired } = useAuthGuard();

  const {
    data: userData,
    isLoading,
    isSuccess,
    // isError,
  } = useQuery({
    queryKey: ["me"], // Key định danh cho query này
    queryFn: authService.getMe, // Hàm gọi API
    // enabled: isAuthRequired,
    retry: false, // Không tự động thử lại nếu API /me thất bại (thường là do chưa đăng nhập)
    refetchOnWindowFocus: false, // Tùy chọn: tránh gọi lại API mỗi khi focus vào cửa sổ
  });

  // 'user' chính là dữ liệu trả về từ API, nằm trong `userData.user`
  const user = userData?.data || null;

  const logout = async () => {
    try {
      await authService.logout();
      toast.success("Đã đăng xuất thành công");

      // Xóa cache của query 'me' để đảm bảo trạng thái được reset hoàn toàn
      queryClient.setQueryData(["me"], null);
      queryClient.clear();
      navigate("/login");
    } catch (error) {
      handleApiError(error, "Logout failed. Please try again.");
      // Dù API logout có lỗi, vẫn nên xóa cache ở client
      queryClient.setQueryData(["me"], null);
      navigate("/login");
    }
  };

  // Value object to pass through the context
  const value = { user, logout, isLoading, isSuccess };

  // Provide the context value to child components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};
