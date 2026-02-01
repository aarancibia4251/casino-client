import React from "react";
import BreadcrumbComponent from "../../atoms/breadcrumb/Breadcrumb.component";
import { Flex } from "antd";

interface Props {
  title: string;
}

const PageConfiguration = ({ title }: Props) => {
  return (
    <Flex
      justify="space-between"
      wrap
      className="page-titles"
      style={{ backgroundColor: "inherit" }}
    >
      <h3>{title}</h3>
      <BreadcrumbComponent />
    </Flex>
  );
};

export default PageConfiguration;
