import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home.component";
import Layout from "../components/pages/layout/Layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
