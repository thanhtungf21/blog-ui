// src/pages/auth/Login.tsx
import { authService } from "@/services/authService";
import { IFormInput as LoginPayload } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Form, Input, Spin, Typography } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"; // <-- THÊM DÒNG NÀY
import logo from "@/assets/imgs/logo/logo.png";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isSuccess: isLoggedIn, isLoading: isCheckingAuth } = useQuery({
    queryKey: ["checkAuthOnLoginPage"], // Key riêng biệt cho việc kiểm tra này
    queryFn: authService.getMe, // Gọi thẳng đến API getMe
    retry: false, // Không thử lại nếu thất bại (VD: token không hợp lệ)
    refetchOnWindowFocus: false, // Không cần fetch lại khi focus vào cửa sổ
  });
  // --- START: Logic kiểm tra và chuyển hướng ---
  useEffect(() => {
    // Nếu query ở trên thành công (isLoggedIn = true)
    // có nghĩa là người dùng đã đăng nhập, ta chuyển hướng họ đi
    if (isLoggedIn) {
      // toast.success("Bạn đã đăng nhập. Đang chuyển hướng...");
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  // --- END: Logic kiểm tra và chuyển hướng ---

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: () => {
      toast.success("Đăng nhập thành công!");
      // Invalidate query 'me' để trigger việc fetch lại thông tin user mới
      queryClient.invalidateQueries({ queryKey: ["me"] });
      navigate("/");
    },
    onError: (error) => {
      handleApiError(error, "Đăng nhập thất bại");
    },
  });

  const onFinish = (values: LoginPayload) => {
    mutation.mutate(values);
  };

  // Hiển thị loading trong khi đang kiểm tra
  if (isCheckingAuth) {
    return (
      <Spin size="large" tip="Đang kiểm tra phiên đăng nhập..." fullscreen />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
          {/* Form fields... (giữ nguyên) */}
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
