import React from "react";
import { Avatar } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const AvatarComponent = () => {
  return (
    <Avatar
      size={{ xs: 28, sm: 32, md: 40 }}
      icon={<IconFont type="icon-tuichu" />}
    />
  );
};

export default AvatarComponent;
