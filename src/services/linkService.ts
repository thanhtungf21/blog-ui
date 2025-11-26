// src/services/linkService.ts
import api from "./api"; // Sử dụng chung instance này
import { type IShortenLink } from "@/types/link"; // (Gợi ý: Nên tách interface ra file types riêng nếu chưa có)

export const linkService = {
  getAllLinks: async () => {
    // ... (giữ nguyên logic)
    const response = await api.get("/links");
    return Array.isArray(response.data.data.data) ? response.data.data : [];
  },
  shortenLink: async (data: IShortenLink) => {
    const response = await api.post("/links/shorten", data);
    return response.data;
  },
  getOriginalUrl: async (shortCode: string) => {
    // Thay apiShortLink bằng api
    const response = await api.get(`/${shortCode}`); 
    return response.data;
  },
};