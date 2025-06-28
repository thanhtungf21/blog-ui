// src/context/AuthGuardContext.tsx

import React, { createContext, useState, useContext, useMemo } from "react";

// Định nghĩa kiểu cho Context
interface AuthGuardContextType {
  isAuthRequired: boolean;
  setAuthRequired: (isRequired: boolean) => void;
}

// Tạo Context
const AuthGuardContext = createContext<AuthGuardContextType | null>(null);

// Tạo Provider
export const AuthGuardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthRequired, setAuthRequired] = useState(false);

  // Sử dụng useMemo để tránh re-render không cần thiết
  const value = useMemo(
    () => ({
      isAuthRequired,
      setAuthRequired,
    }),
    [isAuthRequired]
  );

  return (
    <AuthGuardContext.Provider value={value}>
      {children}
    </AuthGuardContext.Provider>
  );
};

// Tạo một custom hook để dễ dàng sử dụng context
export const useAuthGuard = () => {
  const context = useContext(AuthGuardContext);
  if (!context) {
    throw new Error("useAuthGuard must be used within an AuthGuardProvider");
  }
  return context;
};
