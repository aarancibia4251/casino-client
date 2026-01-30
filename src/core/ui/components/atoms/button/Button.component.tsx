import React from "react";
import { Button, theme } from "antd";

const ButtonComponent = ({ type, className, style, ...otherProps }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Button
      className={className}
      type={type}
      variant="solid"
      style={{ outline: colorPrimary, ...style }}
      {...otherProps}
    ></Button>
  );
};

export default ButtonComponent;
