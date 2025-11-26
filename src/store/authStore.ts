// src/store/authStore.ts
import { create } from "zustand";
import { authService } from "@/services/authService";
import { User } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { queryClient } from "@/utils/queryClient";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  fetchUser: () => Promise<void>;
  loginSuccess: (user: User) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const response = await authService.getMe();
      const userData = response.data;

      if (userData) {
        set({ user: userData, isAuthenticated: true, isLoading: false });
      } else {
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  loginSuccess: (user: User) => {
    set({ user: user, isAuthenticated: true });
  },

  logout: async () => {
    // 1. Hủy ngay lập tức các query đang chạy ngầm (nếu có) để tránh lỗi không đáng có
    queryClient.cancelQueries();

    try {
      set({ isLoading: true });
      await authService.logout();
    } catch (error) {
      handleApiError(error, "Đăng xuất thất bại");
    } finally {
      // 2. Cập nhật state trước để UI biết là đã logout
      set({ user: null, isAuthenticated: false, isLoading: false });

      // 3. QUAN TRỌNG: Dùng setTimeout để đẩy việc clear cache xuống cuối hàng đợi (Event Loop)
      // Điều này cho phép React có thời gian chuyển trang (navigate login) và unmount component Dashboard
      // TRƯỚC KHI cache bị xóa. Dashboard unmount rồi thì sẽ không refetch nữa.
      setTimeout(() => {
        queryClient.clear();
      }, 300); // Delay nhỏ (300ms) là đủ an toàn
    }
  },
}));