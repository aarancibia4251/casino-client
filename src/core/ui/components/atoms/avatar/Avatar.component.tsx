import React from "react";
import { Avatar } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const AvatarComponent = () => {
  return (
    <Avatar
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      icon={<IconFont type="icon-tuichu" />}
    />
  );
};

export default AvatarComponent;
