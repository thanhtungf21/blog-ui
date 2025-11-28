// src/layouts/navbar/Navbar.tsx
import { useState, useEffect } from "react";
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarMenu from "../NavbarMenu";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import clsx from "clsx";
import logo from "@/assets/imgs/logo/logo_white.png"; // Đảm bảo bạn có logo hoặc dùng text

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Logic phát hiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    toast.success("Đã đăng xuất thành công");
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={() => navigate("/profile")}>Hồ sơ cá nhân</span>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <span onClick={handleLogout}>Đăng xuất</span>,
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled || !isHomePage
          ? "bg-[#001529]/80 backdrop-blur-md border-white/10 shadow-lg py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Dùng ảnh logo nếu có, hoặc text */}
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-white bg-gradient-to-r ">
              Fe2b Blog
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center px-8">
          {/* Truyền theme dark/light vào Menu nếu cần, hoặc custom CSS cho NavbarMenu */}
          <div className="bg-white/5 rounded-full px-6 py-1 border border-white/5 backdrop-blur-sm">
            <NavbarMenu />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="cursor-pointer hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors">
                <Avatar
                  src="/logo/penguin_avatar.png" // Fallback avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                  className="border border-white/20"
                />
                <span className="text-white hidden sm:inline font-medium text-sm">
                  {user.email?.split("@")[0]}
                </span>
              </Space>
            </Dropdown>
          ) : (
            <div className="flex gap-3">
              {/* Nút Login style mới */}
              <Button
                type="text"
                className="!text-white hover:!bg-white/10 font-medium"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </Button>
              <Button
                type="primary"
                className="!bg-blue-600 hover:!bg-blue-500 !border-none font-semibold shadow-lg shadow-blue-500/20"
                onClick={() => navigate("/register")}
              >
                Đăng ký
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined className="text-white text-xl" />}
              onClick={onMenuClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
