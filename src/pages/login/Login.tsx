// src/pages/login/Login.tsx
import { authService } from "@/services/authService";
import { IFormInput as LoginPayload } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, Checkbox, Divider } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/imgs/logo/logo.png";
import { useAuthStore } from "@/store/authStore";
import RouteLoadingFallback from "@/components/common/RouteLoadingFallback";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    fetchUser,
  } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: async () => {
      toast.success("Chào mừng bạn quay trở lại!");
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

  if (isAuthLoading) {
    return <RouteLoadingFallback />;
  }

  return (
    <div className="min-h-screen flex gap-10 bg-white">
      {/* --- CỘT TRÁI: FORM --- */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-[480px] bg-white z-10">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-block">
              <img className="h-12 w-auto" src={logo} alt="Logo" />
            </Link>
            <Title
              level={2}
              className="mt-6 !text-3xl !font-extrabold !text-gray-900"
            >
              Đăng nhập
            </Title>
            <Text className="mt-2 text-sm text-gray-600">
              Chưa có tài khoản?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Đăng ký ngay
              </Link>
            </Text>
          </div>

          <div className="mt-8">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              size="large" // Tăng kích thước input cho dễ bấm
            >
              <Form.Item
                name="email"
                label={<span className="font-medium text-gray-700">Email</span>}
                rules={[
                  { required: true, message: "Vui lòng nhập Email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="name@example.com"
                  className="rounded-lg py-2.5"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <span className="font-medium text-gray-700">Mật khẩu</span>
                }
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  placeholder="••••••••"
                  className="rounded-lg py-2.5"
                />
              </Form.Item>

              <div className="flex items-center justify-between mb-6">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-gray-600">
                    Ghi nhớ đăng nhập
                  </Checkbox>
                </Form.Item>
                <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Quên mật khẩu?
                </a>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full !h-11 rounded-lg !bg-indigo-600 hover:!bg-indigo-500 !border-none !text-base !font-semibold shadow-lg shadow-indigo-200"
                  loading={mutation.isPending}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>

            <Divider plain>
              <span className="text-gray-400 text-xs uppercase">Hoặc</span>
            </Divider>

            <div className="text-center">
              <Button type="text" onClick={() => navigate("/")}>
                ← Quay lại trang chủ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CỘT PHẢI: BRANDING IMAGE (Ẩn trên Mobile) --- */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-[#001529] flex flex-col items-center justify-center text-white p-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-0"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#001529] to-transparent z-10"></div>

          <div className="relative z-20 text-center max-w-xl">
            <img
              src={logo}
              alt="Brand"
              className="w-32 h-32 mx-auto mb-8 animate-fadeInUp drop-shadow-2xl"
            />
            <h2
              className="text-4xl font-bold mb-4 animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              Kết nối mọi thứ
            </h2>
            <p
              className="text-lg text-gray-300 font-light leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              Quản lý liên kết, xây dựng hồ sơ cá nhân và chia sẻ thế giới của
              bạn chỉ với một nền tảng duy nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
