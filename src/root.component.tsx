import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./core/ui/routes/Routes";
import "./assets/css/style.css";
import "./assets/css/colors/green.css";

export default function Root(props) {
  return <RouterProvider router={router} />;
}
