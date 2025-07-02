// src/pages/shortlink/ShortLink.tsx
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Card,
  Input,
  Button,
  Typography,
  Form,
  Spin,
  Alert,
  Space,
  Avatar,
  Flex,
} from "antd";
import { LinkOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { Link as RouterDomLink } from "react-router-dom";
import { linkService } from "@/services/linkService";
import { handleApiError } from "@/utils/errorHandler";
import logo from "@/assets/imgs/logo/logo.png";

const { Title, Text, Link } = Typography;

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
        toast.success("Link shortened successfully!");
      } else {
        toast.error("Invalid response from server.");
      }
    } catch (error) {
      handleApiError(error, "Failed to shorten link.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gray-100">
      <Card className="w-full max-w-2xl shadow-lg">
        <Flex align="center" justify="center">
          <RouterDomLink to={"/login"}>
            <Avatar src={logo} size={68} />
          </RouterDomLink>
        </Flex>
        <Title level={2} className="text-center">
          Create Short Link
        </Title>
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          <Form.Item
            label="Original URL"
            validateStatus={errors.originalUrl ? "error" : ""}
            help={errors.originalUrl?.message}
            required
          >
            <Controller
              name="originalUrl"
              control={control}
              rules={{
                required: "Original URL is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Please enter a valid URL",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<LinkOutlined />}
                  placeholder="https://example.com"
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Custom Code (Optional)"
            validateStatus={errors.customCode ? "error" : ""}
            help={errors.customCode?.message}
          >
            <Controller
              name="customCode"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={
                    <Text type="secondary">{`${
                      import.meta.env.VITE_BE_URL || window.location.origin
                    }/`}</Text>
                  }
                  placeholder="my-custom-link"
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
              {isSubmitting ? "Shortening..." : "Shorten Link"}
            </Button>
          </Form.Item>
        </Form>

        {isSubmitting && <Spin tip="Shortening link..." />}

        {shortenedLink && !isSubmitting && (
          <Alert
            message="Shortened Link"
            description={
              <Space>
                <Link href={shortenedLink} target="_blank">
                  {shortenedLink}
                </Link>
                <Button
                  type="text"
                  icon={<LinkOutlined />}
                  onClick={() => copyToClipboard(shortenedLink)}
                />
              </Space>
            }
            type="success"
            showIcon
          />
        )}
      </Card>
    </div>
  );
};

export default ShortLink;
