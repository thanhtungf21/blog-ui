// src/pages/register/Register.tsx
import { authService } from "@/services/authService";
import { IRegisterInput } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { LockOutlined, MailOutlined } from "@ant-design/icons"; // Bỏ UserOutlined, SmileOutlined nếu không dùng
import { Button, Form, Input, Typography } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/imgs/logo/logo.png";

const { Title, Text } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: (payload: IRegisterInput) => authService.register(payload),
    onSuccess: () => {
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/login");
    },
    onError: (error) => {
      handleApiError(error, "Đăng ký thất bại");
    },
  });

  const onFinish = (values: IRegisterInput) => {
    mutation.mutate(values);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* ... Phần hình ảnh bên trái giữ nguyên ... */}
      <div className="hidden lg:block relative w-0 flex-1 order-2">
        {/* ... Giữ nguyên nội dung bên trong ... */}
        <div className="absolute inset-0 bg-[#001529] flex flex-col items-center justify-center text-white p-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-purple-500/20 to-indigo-500/20 z-0"></div>
          <div className="absolute bottom-24 left-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-20 text-center max-w-xl">
            <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">
              Tham gia cùng chúng tôi
            </h2>
            <div
              className="space-y-4 text-left bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  ✓
                </div>
                <span>Rút gọn liên kết không giới hạn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  ✓
                </div>
                <span>Tạo Bio Profile cá nhân hóa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  ✓
                </div>
                <span>Thống kê chi tiết & an toàn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-[520px] bg-white z-10 order-1">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-block">
              <img className="h-12 w-auto" src={logo} alt="Logo" />
            </Link>
            <Title
              level={2}
              className="mt-6 !text-3xl !font-extrabold !text-gray-900"
            >
              Tạo tài khoản mới
            </Title>
            <Text className="mt-2 text-sm text-gray-600">
              Đã có tài khoản?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Đăng nhập ngay
              </Link>
            </Text>
          </div>

          <div className="mt-8">
            <Form
              form={form}
              name="register"
              className="register-form"
              onFinish={onFinish}
              scrollToFirstError
              layout="vertical"
              size="large"
            >
              {/* --- ĐÃ XÓA TRƯỜNG FULL NAME Ở ĐÂY --- */}

              {/* Email */}
              <Form.Item
                name="email"
                label={<span className="font-medium text-gray-700">Email</span>}
                rules={[
                  { type: "email", message: "Email không hợp lệ!" },
                  { required: true, message: "Vui lòng nhập Email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder="name@example.com"
                  className="rounded-lg py-2.5"
                />
              </Form.Item>

              {/* Password */}
              <Form.Item
                name="password"
                label={
                  <span className="font-medium text-gray-700">Mật khẩu</span>
                }
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  placeholder="Tối thiểu 6 ký tự"
                  className="rounded-lg py-2.5"
                />
              </Form.Item>

              {/* Confirm Password */}
              <Form.Item
                name="confirmPassword"
                label={
                  <span className="font-medium text-gray-700">
                    Xác nhận mật khẩu
                  </span>
                }
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu xác nhận không khớp!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  placeholder="Nhập lại mật khẩu"
                  className="rounded-lg py-2.5"
                />
              </Form.Item>

              <Form.Item className="mt-2">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full !h-11 rounded-lg !bg-indigo-600 hover:!bg-indigo-500 !border-none !text-base !font-semibold shadow-lg shadow-indigo-200"
                  loading={mutation.isPending}
                >
                  Đăng ký miễn phí
                </Button>
                <div className="text-xs text-center mt-4 text-gray-500 px-4">
                  Bằng việc đăng ký, bạn đồng ý với{" "}
                  <Link to="#" className="underline">
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link to="#" className="underline">
                    Chính sách bảo mật
                  </Link>{" "}
                  của chúng tôi.
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
