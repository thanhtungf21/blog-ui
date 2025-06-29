// src/layouts/navbar/navbar-drawer/NavbarDrawer.tsx
import { Drawer, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

interface NavbarDrawerProps {
  open: boolean;
  onClose: () => void;
}

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/shortlink">Short Link</Link>,
    key: "/shortlink",
    icon: <LinkOutlined />,
  },
  {
    label: <Link to="/profiles">Profile</Link>,
    key: "/profiles",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/about-us">About</Link>,
    key: "/about-us",
    icon: <InfoCircleOutlined />,
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "/login",
    icon: <LoginOutlined />,
  },
];

const NavbarDrawer = ({ open, onClose }: NavbarDrawerProps) => {
  const location = useLocation();

  return (
    <Drawer
      title="Menu"
      placement="right"
      onClose={onClose}
      open={open}
      className="p-0"
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={onClose} // Đóng drawer khi click vào một item
      />
    </Drawer>
  );
};

export default NavbarDrawer;
