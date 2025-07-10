import React from "react";
import CourseCard from "../../organisms/course-card/CourseCard.component";
import { useCourses } from "../../../hooks/useCourses";

const CourseList = () => {
  const { courses } = useCourses();
  return (
    <div className="row">
      {courses.map((course, index) => (
        <div className="col-lg-4">
          <CourseCard course={course} key={index} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
