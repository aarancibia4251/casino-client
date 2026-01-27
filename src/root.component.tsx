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
          colorPrimary: "#fff",
          colorPrimaryBg: "#178582",
          controlOutline: "#BFA181",
          borderRadius: 2,
          colorText: "#fff",
          // Alias Token
          colorBgContainer: "#2c9790",
        },
        components: {
          Layout: {
            siderBg: "#2c9790",
          },
          Menu: {
            colorItemTextSelected: "#a63c0d",
            colorItemBgSelected: "#f2e6d5",
            iconSize: 15,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
