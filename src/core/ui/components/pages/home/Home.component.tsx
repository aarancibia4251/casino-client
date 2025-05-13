import React from "react";
import CourseCard from "../../organisms/course-card/CourseCard.component";
import { useCourses } from "../../../hooks/useCourses";

const Home = () => {
  const { courses } = useCourses();

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row p-t-10 p-b-10">

                <div className="col p-r-0">
                  <h1 className="font-light">86</h1>
                  <h6 className="text-muted">New Clients</h6></div>

                <div className="col text-right align-self-center">
                  <div data-label="20%" className="css-bar m-b-0 css-bar-primary css-bar-20"><i
                    className="mdi mdi-account-circle"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row p-t-10 p-b-10">

                <div className="col p-r-0">
                  <h1 className="font-light">248</h1>
                  <h6 className="text-muted">All Projects</h6></div>

                <div className="col text-right align-self-center">
                  <div data-label="30%" className="css-bar m-b-0 css-bar-danger css-bar-20"><i
                    className="mdi mdi-briefcase-check"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row p-t-10 p-b-10">

                <div className="col p-r-0">
                  <h1 className="font-light">352</h1>
                  <h6 className="text-muted">New Items</h6></div>

                <div className="col text-right align-self-center">
                  <div data-label="40%" className="css-bar m-b-0 css-bar-warning css-bar-40"><i
                    className="mdi mdi-star-circle"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row p-t-10 p-b-10">

                <div className="col p-r-0">
                  <h1 className="font-light">159</h1>
                  <h6 className="text-muted">Invoices</h6></div>

                <div className="col text-right align-self-center">
                  <div data-label="60%" className="css-bar m-b-0 css-bar-info css-bar-60"><i
                    className="mdi mdi-receipt"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-lg-4">
            <CourseCard course={course} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
