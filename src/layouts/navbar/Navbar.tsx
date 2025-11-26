// src/layouts/navbar/Navbar.tsx
import { Avatar, Button, Dropdown, Layout, MenuProps, Space } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import { useAuth } from "@/context/UserContext";

const { Header } = Layout;

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user, logout } = useAuth(); // Lấy user và hàm logout từ context
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => navigate("/profile")}>Profile</a>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: (
        <a onClick={logout}>
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
      danger: true, 
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: "#001529",
      }}
    >
      {/* Logo */}
      <div className="text-white text-lg font-bold mr-4">
        <Link to="/" className="text-white">
          My Blog
        </Link>
      </div>

      {/* Main Menu */}
      <div className="hidden md:flex flex-grow justify-center">
        <NavbarMenu />
      </div>

      {/* User Area */}
      <div className="ml-auto">
        {user ? (
          // Nếu đã đăng nhập, hiển thị User Dropdown
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

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-4">
        <Button type="primary" icon={<MenuOutlined />} onClick={onMenuClick} />
      </div>
    </Header>
  );
};

export default Navbar;
