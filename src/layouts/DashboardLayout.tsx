// src/layouts/default-layout/DefaultLayout.tsx
import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NavbarDrawer from "./components/NavbarDrawer";

const { Content } = Layout;

const DashboardLayout = () => {
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
      {/* Thêm marginTop: 64px để bù cho Sticky Header */}
      <Content style={{ padding: "0 48px", marginTop: 80 }}> 
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

export default DashboardLayout;