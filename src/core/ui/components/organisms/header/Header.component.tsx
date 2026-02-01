import React from "react";
import { Header } from "antd/es/layout/layout";
import { MenuProps, theme } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ButtonComponent from "../../atoms/button/Button.component";
import HeaderTabComponent from "../../molecules/header-tab/HeaderTab.component";
import DropDownComponent from "../../atoms/dropdown/DropDown.component";
import AvatarComponent from "../../atoms/avatar/Avatar.component";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black" }}
      >
        Logout
      </a>
    ),
    key: "0",
  },
];

const HeaderComponent = ({ setCollapsed, collapsed }) => {
  const {
    token: { colorPrimary, colorPrimaryBg },
  } = theme.useToken();

  const handleCollapsed = () => {
    setCollapsed((value) => !value);
  };

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorPrimary,
          position: "relative",
        }}
      >
        <ButtonComponent
          className="hidden-xs-down"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleCollapsed}
          style={{ color: colorPrimaryBg, height: "100%" }}
        >
          <></>
        </ButtonComponent>
        <div style={{ position: "absolute", right: 15, top: 0 }}>
          <DropDownComponent items={items}>
            <AvatarComponent></AvatarComponent>
          </DropDownComponent>
        </div>
      </Header>
      {collapsed && <HeaderTabComponent></HeaderTabComponent>}
    </>
  );
};

export default HeaderComponent;
