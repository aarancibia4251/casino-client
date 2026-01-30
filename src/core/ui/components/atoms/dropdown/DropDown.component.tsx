import React from "react";
import { Dropdown } from "antd";

const DropDownComponent = ({ children, items }) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        { children }
      </a>
    </Dropdown>
  );
};

export default DropDownComponent;
