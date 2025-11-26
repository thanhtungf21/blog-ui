import { Avatar, Button, Dropdown, Layout, MenuProps, Space } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import { useAuthStore } from "@/store/authStore"; // Import Zustand store
import toast from "react-hot-toast";

const { Header } = Layout;

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  // Thay đổi ở đây: Lấy state từ store
  const { user, logout } = useAuthStore(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Đã đăng xuất thành công");
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => navigate("/profile")}>Profile</a>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: (
        <a onClick={handleLogout}>
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
      danger: true, 
    },
  ];

  // ... (Phần return giữ nguyên như cũ)
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: "#001529",
      }}
    >
      <div className="text-white text-lg font-bold mr-4">
        <Link to="/" className="text-white">
          My Blog
        </Link>
      </div>

      <div className="hidden md:flex flex-grow justify-center">
        <NavbarMenu />
      </div>

      <div className="ml-auto">
        {user ? (
          <Dropdown menu={{ items }} placement="bottomRight">
            <Space className="cursor-pointer">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              <span className="text-white hidden sm:inline">{user.email}</span>
            </Space>
          </Dropdown>
        ) : (
          // Nếu chưa đăng nhập, hiển thị nút Login
          <Button type="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </div>

      <div className="md:hidden ml-4">
        <Button type="primary" icon={<MenuOutlined />} onClick={onMenuClick} />
      </div>
    </Header>
  );
};

export default Navbar;