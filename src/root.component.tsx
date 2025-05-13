import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./core/ui/routes/Routes";

export default function Root(props) {
  return <RouterProvider router={router} />;
}
