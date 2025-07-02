import api from "./api";
import apiShortLink from "./api-shortLink";

// Định nghĩa kiểu dữ liệu cho một link (hãy điều chỉnh cho phù hợp với dữ liệu thực tế)
export interface ILink {
  _id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface IShortenLink {
  originalUrl: string;
  customCode?: string;
}

/**
 * Service quản lý các API liên quan đến links.
 */
export const linkService = {
  /**
   * Lấy tất cả các links từ server.
   * @returns Một mảng các đối tượng ILink.
   */
  getAllLinks: async () => {
    try {
      const response = await api.get("/links");
      // Giả sử server trả về dữ liệu trong response.data
      // Nếu dữ liệu nằm trong một thuộc tính khác, ví dụ response.data.links, hãy điều chỉnh lại

      return Array.isArray(response.data.data.data) ? response.data.data : [];
    } catch (error) {
      throw error;
    }
  },
  shortenLink: async (data: IShortenLink) => {
    try {
      const response = await api.post("/links/shorten", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getOriginalUrl: async (shortCode: string) => {
    try {
      const response = await apiShortLink.get(`/${shortCode}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
