import React, { useEffect, useState } from "react";
import Preloader from "../../organisms/preloader/Preloader.component";
import Sidebar from "../../templates/sidebar/Sidebar.component";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/header/Header.component";
import PageConfiguration from "../../templates/page-configuration/PageConfiguration.component";
import "./Layout.styles.scss";

const Layout = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 500);
  }, []);
  return (
    <div id="main-wrapper">
      {preloader ? <Preloader /> : null}
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="container-fluid">
          <PageConfiguration />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
