// src/layouts/default-layout/DefaultLayout.tsx
import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import NavbarDrawer from "../navbar/components/NavbarDrawer";

const { Content } = Layout;

const DefaultLayout = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar onMenuClick={showDrawer} />
      <Content style={{ padding: "0 48px", marginTop: 16 }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: 280,
            borderRadius: 8,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer />
      <NavbarDrawer open={drawerVisible} onClose={closeDrawer} />
    </Layout>
  );
};

export default DefaultLayout;
