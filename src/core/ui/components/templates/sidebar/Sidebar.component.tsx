import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu, MenuProps, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Sider
      breakpoint="xs"
      collapsedWidth={collapsed ? "0" : "150"}
      onCollapse={(onCollapsed) => setCollapsed(onCollapsed)}
      collapsed={collapsed}
      trigger={null}
      style={{ background: colorPrimary }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={{ background: colorPrimary, borderInlineEnd: "none" }}
      />
    </Sider>
  );
};

export default Sidebar;
