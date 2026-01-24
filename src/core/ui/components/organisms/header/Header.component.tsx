import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button, theme } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ButtonComponent from "../../atoms/button/Button.component";

const HeaderComponent = ({ setCollapsed, collapsed }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const handleCollapsed = () => {
    setCollapsed((value) => !value);
  };

  return (
    <Header style={{ padding: 0, background: colorPrimary }} >
      <ButtonComponent
        className=""
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleCollapsed}
      >
        <></>
      </ButtonComponent>
    </Header>
  );
};

export default HeaderComponent;
