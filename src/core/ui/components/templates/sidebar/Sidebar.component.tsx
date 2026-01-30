import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../../../../../assets/images/logo-light-text.png";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];

const Sidebar = ({ collapsed, setCollapsed }) => {

  return (
    <Sider
      breakpoint="xs"
      collapsedWidth={collapsed ? "0" : "150"}
      onCollapse={(onCollapsed) => setCollapsed(onCollapsed)}
      collapsed={collapsed}
      trigger={null}
    >
      <img
        src={Logo}
        alt="LOGO"
        style={{ padding: "15px 10px", height: "64px", width: "100%" }}
      />
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={{
          borderInlineEnd: "none",
        }}
      />
    </Sider>
  );
};

export default Sidebar;
