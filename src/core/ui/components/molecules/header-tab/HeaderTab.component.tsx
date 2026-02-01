import React, { useState } from "react";
import { TabsProps, Tabs, theme } from "antd";

const HeaderTabComponent: React.FC = () => {
  const [mode, setMode] = useState<TabsProps["tabPlacement"]>("top");

  const {
    token: { colorPrimaryBg },
  } = theme.useToken();

  return (
    <Tabs
      defaultActiveKey="1"
      tabPlacement={mode}
      style={{
        height: 45,
        padding: "0px 20px",
        background: colorPrimaryBg,
        borderBottom: "none",
      }}
      items={Array.from({ length: 30 }, (_, i) => {
        const id = String(i);
        return {
          label: `Tab-${id}`,
          key: id,
          disabled: i === 28,
        };
      })}
    />
  );
};

export default HeaderTabComponent;
