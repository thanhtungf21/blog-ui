// src/pages/register/Register.tsx
import { authService } from "@/services/authService";
import { IRegisterInput } from "@/types/auth";
import { handleApiError } from "@/utils/errorHandler";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Form, Input, Typography } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/imgs/logo/logo.png";

const { Title } = Typography;

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <Flex align="center" justify="center">
          <Link to={"/"}>
            <Avatar src={logo} size={70} className="mb-4" />
          </Link>
        </Flex>
        <Title level={2} className="text-center !mb-6">
          Đăng ký
        </Title>
        
        <Form
          form={form}
          name="register"
          className="register-form"
          onFinish={onFinish}
          scrollToFirstError
        >
          {/* Full Name */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Họ và tên"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Email không hợp lệ!" },
              { required: true, message: "Vui lòng nhập Email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật khẩu"
            />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            name="confirmPassword"
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
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Xác nhận mật khẩu"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500"
              loading={mutation.isPending}
            >
              Đăng ký ngay
            </Button>
            <div className="mt-4 text-center">
              Đã có tài khoản? <Link to="/login">Đăng nhập ngay!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;