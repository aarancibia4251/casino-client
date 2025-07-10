import { createHashRouter } from "react-router-dom";
import HomePage from "../components/pages/home/Home.component";
import Layout from "../components/pages/layout/Layout.component";
import CoursePage from "../components/pages/course/Course.component";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/course/:id", element: <CoursePage /> },
    ],
  },
]);

export default router;
