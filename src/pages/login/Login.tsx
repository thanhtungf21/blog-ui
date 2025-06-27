import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";

import { authService } from "@/services/authService";
import { handleApiError } from "@/utils/errorHandler";
import { IFormInput } from "@/types/auth";
import { useQueryClient } from "@tanstack/react-query";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const { setUser } = useContext(UserContext)!;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // Gọi hàm login từ service

      const responseData = await authService.login(data);

      if (responseData && responseData.data) {
        queryClient.invalidateQueries({ queryKey: ["me"] });
        toast.success(responseData?.message || "Đăng nhập thành công!");
        navigate("/dashboard");
      } else {
        // Trường hợp server trả về 200 nhưng không có dữ liệu user mong muốn
        toast.error(
          responseData.message || "Phản hồi không hợp lệ từ máy chủ."
        );
      }
    } catch (error) {
      // ---> SỬA LỖI Ở ĐÂY <---
      // Chỉ cần gọi hàm xử lý lỗi chung
      handleApiError(
        error,
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-250px)] bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <Title level={2} className="text-center">
          Login
        </Title>
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          {/* ... Các Form.Item không thay đổi ... */}
          <Form.Item
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
            required
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined />}
                  placeholder="Email"
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
            required
          >
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              )}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={isSubmitting}
            >
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
