// src/utils/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

// Tạo và export instance queryClient để dùng chung cho toàn app
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 phút
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});