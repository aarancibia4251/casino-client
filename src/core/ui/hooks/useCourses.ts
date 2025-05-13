import courseService from "../../shared/di/course.di";
import { useEffect, useState } from "react";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    courseService.getCourses().then(setCourses).catch();
  }, []);
  return {
    courses,
    setCourses,
  };
};
