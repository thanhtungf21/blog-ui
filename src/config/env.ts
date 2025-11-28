// src/config/app.ts
export const APP_CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  BASE_URL: import.meta.env.VITE_BE_URL || window.location.origin,
};