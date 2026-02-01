import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb
      items={[
        {
          href: "",
          title: <HomeOutlined />,
        },
        {
          href: "",
          title: (
            <>
              <UserOutlined />
              <span>Application List</span>
            </>
          ),
        },
        {
          title: "Application",
        },
      ]}
    />
  );
};

export default BreadcrumbComponent;
