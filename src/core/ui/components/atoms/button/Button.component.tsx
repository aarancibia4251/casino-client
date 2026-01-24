import React from "react";
import { Button, theme } from "antd";

const ButtonComponent = ({ type, className, ...otherProps }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Button
      type={type}
      variant="solid"
      style={{ outline: colorPrimary }}
      {...otherProps}
    ></Button>
  );
};

export default ButtonComponent;
