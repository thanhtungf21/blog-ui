// src/layouts/navbar/navbar-menu/NavbarMenu.tsx
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
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
];

const NavbarMenu = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={items}
      style={{ flex: 1, minWidth: 0, borderBottom: "none" }}
    />
  );
};

export default NavbarMenu;
