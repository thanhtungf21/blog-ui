// src/components/AuthGuard/AuthGuard.tsx

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthGuard } from "@/context/AuthGuardContext";

const AuthGuard = () => {
  const { setAuthRequired } = useAuthGuard();

  // Khi component này được mount (tức là người dùng vào route cần xác thực),
  // chúng ta sẽ đặt trạng thái yêu cầu xác thực thành true.
  useEffect(() => {
    setAuthRequired(true);
  }, [setAuthRequired]);

  // Outlet sẽ render ra các route con (ví dụ: DefaultLayout)
  return <Outlet />;
};

export default AuthGuard;
