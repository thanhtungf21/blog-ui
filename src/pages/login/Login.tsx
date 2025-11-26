import { authService } from "@/services/authService";
import { IFormInput as LoginPayload } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Form, Input, Spin, Typography } from "antd";
import { useMutation } from "@tanstack/react-query"; // Không cần useQueryClient nữa
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/imgs/logo/logo.png";
import { useAuthStore } from "@/store/authStore"; // Import store

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  // Lấy state và actions từ Zustand
  const { isAuthenticated, isLoading: isAuthLoading, fetchUser } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: async () => {
      toast.success("Đăng nhập thành công!");
      // Gọi fetchUser để cập nhật state user vào Zustand store ngay lập tức
      await fetchUser(); 
      navigate("/");
    },
    onError: (error) => {
      handleApiError(error, "Đăng nhập thất bại");
    },
  });

  const onFinish = (values: LoginPayload) => {
    mutation.mutate(values);
  };

  // Hiển thị loading nếu Zustand đang check auth (ví dụ reload trang tại màn login)
  if (isAuthLoading) {
    return (
      <Spin size="large" tip="Đang kiểm tra phiên đăng nhập..." fullscreen />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* ... Phần giao diện giữ nguyên ... */}
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <Flex align="center" justify="center">
          <Link to={"/"}>
            <Avatar src={logo} size={70} />
          </Link>
        </Flex>
        <Title level={2} className="text-center">
          Login
        </Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={mutation.isPending}
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;