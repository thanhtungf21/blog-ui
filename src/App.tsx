import "./App.css";
import { Outlet } from "react-router-dom";
import { useAuth, UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Spin } from "antd";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Dữ liệu được coi là "cũ" sau 5 phút
      refetchOnWindowFocus: false, // Không tự động fetch lại khi focus vào cửa sổ
      retry: false,
    },
  },
});

const AppContent = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spin size="large" tip="Authenticating..." />;
  }

  // Khi đã xác thực xong, hiển thị nội dung ứng dụng
  return (
    <>
      <Outlet />{" "}
      {/* Đây là nơi các trang con (Dashboard, Login, etc.) được render */}
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster
          position="top-center" // Vị trí hiển thị toast
          toastOptions={{
            // Tùy chỉnh chung cho tất cả toast
            duration: 5000, // Thời gian hiển thị mặc định
          }}
        />
        <AppContent />
        {/* Các route con được định nghĩa trong createBrowserRouter sẽ được render ở đây */}
        <Outlet />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
