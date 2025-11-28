// src/layouts/navbar/navbar-menu/NavbarMenu.tsx
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

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
    label: <Link to="/profile">Profile</Link>,
    key: "/profile",
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
      // Style đè để làm menu trong suốt, hòa trộn với Navbar cha
      style={{
        background: "transparent",
        borderBottom: "none",
        width: "100%",
        fontSize: "15px",
      }}
      className="custom-navbar-menu"
    />
  );
};
export default NavbarMenu;
