import { createHashRouter } from "react-router-dom";
import HomePage from "../components/pages/home/Home.component";
import LayoutComponent from "../components/pages/layout/Layout.component";
import CoursePage from "../components/pages/course/Course.component";

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/course/:id", element: <CoursePage /> },
    ],
  },
]);

export default router;
