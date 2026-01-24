import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./core/ui/routes/Routes";
import "./assets/css/style.css";
import "./assets/css/colors/green.css";
import { ConfigProvider } from "antd";

export default function Root(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#178582",
          colorPrimaryBg: "#1b1e1e",
          controlOutline: "#2c9790",
          borderRadius: 2,
          colorText: "#f4ac60",
          // Alias Token
          colorBgContainer: "#0A1828",
        },
        components: {
          Layout: {
            triggerBg: "#BFA181",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
