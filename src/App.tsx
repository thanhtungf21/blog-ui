// src/App.tsx
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query"; // Bỏ import QueryClient
import { ConfigProvider, Spin } from "antd";
import { AuthGuardProvider } from "./context/AuthGuardContext";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { queryClient } from "./utils/queryClient"; // <-- IMPORT Ở ĐÂY

const AppContent = () => {
  const { fetchUser, isLoading } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return <Spin size="large" tip="Authenticating..." fullscreen />;
  }

  return <Outlet />;
};

function App() {
  return (
    // Truyền instance queryClient đã import vào Provider
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '"Inter", sans-serif',
          },
        }}
      >
        <AuthGuardProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
            }}
          />
          <AppContent />
        </AuthGuardProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;