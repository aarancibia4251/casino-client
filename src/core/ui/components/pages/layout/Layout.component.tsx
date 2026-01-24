import React, { useEffect, useState } from "react";
import Preloader from "../../organisms/preloader/Preloader.component";
import Sidebar from "../../templates/sidebar/Sidebar.component";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../organisms/header/Header.component";
import PageConfiguration from "../../templates/page-configuration/PageConfiguration.component";
import "./Layout.styles.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const LayoutComponent = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 500);
  }, []);

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      {preloader ? <Preloader /> : null}
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content style={{ padding: "20px 16px", background: "rgb(249 253 252)" }}>
            <PageConfiguration />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
