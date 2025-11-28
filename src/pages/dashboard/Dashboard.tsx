import { useQuery } from "@tanstack/react-query";
import {
  Table,
  Typography,
  Alert,
  Spin,
  Button,
  Tag,
  Space,
  Tooltip,
} from "antd";
import type { TableProps } from "antd";
import { CopyOutlined, RiseOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { APP_CONFIG } from "@/config/env";
import { linkService } from "../../services/linkService";
import { handleApiError } from "../../utils/errorHandler";
import { ILink } from "@/types/link";

const { Title, Text, Link } = Typography;

// Hàm để sao chép vào clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Link copied to clipboard!");
};

// Định nghĩa lại các cột cho bảng
const columns: TableProps<ILink>["columns"] = [
  {
    title: "Short Link",
    dataIndex: "shortCode",
    key: "shortCode",
    render: (shortCode: string) => {
      // Giả sử link rút gọn có dạng `yourdomain.com/shortCode`
      const fullShortUrl = `${
        APP_CONFIG.BASE_URL || window.location.origin
      }/${shortCode}`;
      return (
        <Space>
          <Link href={fullShortUrl} target="_blank" rel="noopener noreferrer">
            {shortCode}
          </Link>
          <Tooltip title="Copy short link">
            <Button
              type="text"
              icon={<CopyOutlined />}
              onClick={() => copyToClipboard(fullShortUrl)}
            />
          </Tooltip>
        </Space>
      );
    },
  },
  {
    title: "Original URL",
    dataIndex: "originalUrl",
    key: "originalUrl",
    render: (url: string) => (
      <Text style={{ maxWidth: 300 }} ellipsis={{ tooltip: url }}>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </Link>
      </Text>
    ),
  },
  {
    title: "Clicks",
    dataIndex: "clicks",
    key: "clicks",
    align: "center",
    sorter: (a, b) => a.clicks - b.clicks,
    render: (clicks: number) => (
      <Tag icon={<RiseOutlined />} color="blue">
        {""}
        {clicks ?? 0}
      </Tag>
    ),
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => new Date(text).toLocaleString(), // Hiển thị cả ngày và giờ
    sorter: (a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  },
  {
    title: "Last Updated",
    dataIndex: "updatedAt",
    key: "updatedAt",
    render: (text) => new Date(text).toLocaleString(),
    sorter: (a, b) =>
      new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
  },
];

const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["links"],
    queryFn: linkService.getAllLinks,
  });

  if (isLoading) {
    return <Spin size="large" tip="Loading links..." fullscreen />;
  }

  if (isError) {
    handleApiError(error, "Could not fetch links.");
    return (
      <Alert
        message="Error"
        description="Could not fetch data from the server. Please try again later."
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="p-4">
      <Title level={2}>Links Dashboard</Title>
      <Table
        columns={columns}
        dataSource={data.data}
        rowKey="_id" // Sử dụng _id làm key duy nhất
        bordered
        scroll={{ x: "max-content" }} // Cho phép cuộn ngang trên màn hình nhỏ
      />
    </div>
  );
};

export default Dashboard;
