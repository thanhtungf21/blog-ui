// Kiểu dữ liệu cho form đăng nhập
export interface IFormInput {
  email: string;
  password?: string;
}

export interface User {
  email: string;
}

export interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string; // Field này chỉ dùng ở frontend để validate
}