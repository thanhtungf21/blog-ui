// src/pages/shortlink/ShortLink.tsx
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Input,
  Button,
  Typography,
  Form,
  message,
  Card,
} from "antd";
import { LinkOutlined, CopyOutlined, ArrowRightOutlined, ScissorOutlined } from "@ant-design/icons";
import { Link as RouterDomLink } from "react-router-dom";
import { linkService } from "@/services/linkService";
import { handleApiError } from "@/utils/errorHandler";
import logo from "@/assets/imgs/logo/logo.png";

const {  Text } = Typography;

interface IFormInput {
  originalUrl: string;
  customCode?: string;
}

const ShortLink = () => {
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: {
      originalUrl: "",
      customCode: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await linkService.shortenLink(data);
      if (response && response.data) {
        setShortenedLink(
          `${import.meta.env.VITE_BE_URL || window.location.origin}/${
            response.data.shortCode
          }`
        );
        message.success("Đã tạo liên kết thành công!");
      }
    } catch (error) {
      handleApiError(error, "Rút gọn link thất bại.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success("Đã sao chép vào bộ nhớ tạm!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]"> {/* Nền xám rất nhẹ */}
      
      {/* Header đơn giản */}
      <div className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <RouterDomLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
           <img src={logo} alt="Logo" className="w-8 h-8" />
           <span className="font-bold text-gray-800 text-lg">Fe2b Blog</span>
        </RouterDomLink>
        <RouterDomLink to="/dashboard">
            <Button type="text" className="text-gray-600 font-medium">Dashboard</Button>
        </RouterDomLink>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 pb-20">
        
        <div className="text-center mb-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Rút gọn liên kết của bạn
            </h1>
            <p className="text-lg text-gray-500">
                Công cụ đơn giản, miễn phí để biến những đường dẫn dài ngoằng thành các liên kết ngắn gọn, dễ nhớ.
            </p>
        </div>

        <Card 
            bordered={false} 
            className="w-full max-w-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden"
            styles={{ body: { padding: '40px' } }}
        >
            <Form onFinish={handleSubmit(onSubmit)} layout="vertical" size="large">
            <Form.Item
                label={<span className="font-semibold text-gray-700">Dán đường dẫn dài tại đây</span>}
                validateStatus={errors.originalUrl ? "error" : ""}
                help={errors.originalUrl?.message}
                className="mb-6"
            >
                <Controller
                name="originalUrl"
                control={control}
                rules={{
                    required: "Vui lòng nhập đường dẫn",
                    pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Đường dẫn không hợp lệ (cần http:// hoặc https://)",
                    },
                }}
                render={({ field }) => (
                    <Input
                    {...field}
                    prefix={<LinkOutlined className="text-gray-400 mr-2" />}
                    placeholder="https://example.com/super-long-link..."
                    className="rounded-lg bg-gray-50 border-gray-200 hover:bg-white focus:bg-white transition-colors"
                    />
                )}
                />
            </Form.Item>

            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] flex-grow bg-gray-100"></div>
                <span className="text-xs text-gray-400 uppercase font-medium">Tùy chọn nâng cao</span>
                <div className="h-[1px] flex-grow bg-gray-100"></div>
            </div>

            <Form.Item
                validateStatus={errors.customCode ? "error" : ""}
                help={errors.customCode?.message}
                className="mb-8"
            >
                <Controller
                name="customCode"
                control={control}
                render={({ field }) => (
                    <Input
                    {...field}
                    addonBefore={<span className="text-gray-500 bg-gray-50 px-2">{window.location.host}/</span>}
                    placeholder="tuy-chinh-alias"
                    className="rounded-lg"
                    />
                )}
                />
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 border-none rounded-xl text-lg font-semibold shadow-lg shadow-indigo-200"
                loading={isSubmitting}
                icon={!isSubmitting && <ScissorOutlined />}
            >
                {isSubmitting ? "Đang xử lý..." : "Rút gọn ngay"}
            </Button>
            </Form>

            {/* Result Area */}
            {shortenedLink && (
            <div className="mt-8 animate-fadeInUp">
                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left overflow-hidden w-full">
                            <Text type="secondary" className="block text-xs uppercase tracking-wider font-semibold mb-1 text-green-600">
                                Link rút gọn của bạn
                            </Text>
                            <a 
                                href={shortenedLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors truncate block"
                            >
                                {shortenedLink}
                            </a>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <Button 
                                icon={<CopyOutlined />} 
                                onClick={() => copyToClipboard(shortenedLink)}
                                className="border-green-200 text-green-700 bg-white hover:border-green-300 hover:text-green-800"
                            >
                                Sao chép
                            </Button>
                            <Button 
                                type="primary"
                                icon={<ArrowRightOutlined />} 
                                href={shortenedLink}
                                target="_blank"
                                className="bg-green-600 hover:bg-green-500 border-none shadow-md shadow-green-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </Card>
      </div>
    </div>
  );
};

export default ShortLink;