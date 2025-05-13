import React from "react";
import BigImg1 from "../../../../../assets/images/big/casino-cuban-wataru.jpg";

const CourseCard = ({ course }) => {
  return (
    <div className="card">
      <img className="card-img-top img-responsive" src={BigImg1} alt="Card image cap" />
      <div className="card-body">
        <ul className="list-inline font-14">
          <li className="p-l-0">20 May 2016</li>
          <li><a href="javascript:void(0)" className="link">3 Comment</a></li>
        </ul>
        <h3 className="font-normal">{ course.name }</h3>
        <p className="m-b-0 m-t-10">Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
        <button className="btn btn-success btn-rounded waves-effect waves-light m-t-20">Read more</button>
      </div>
    </div>
  );
};

export default CourseCard;
