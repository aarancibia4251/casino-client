import React from "react";

const NavContentMessages = () => {
  return (
    // Todo - Space in messages are narrow
    <div className="message-center">
      <a href="#">
        <div className="btn btn-danger btn-circle">
          <i className="fa fa-link"></i>
        </div>
        <div className="mail-contnet">
          <h5>Luanch Admin</h5>{" "}
          <span className="mail-desc">
                                Just see the my new admin!
                              </span>{" "}
          <span className="time">9:30 AM</span>
        </div>
      </a>

      <a href="#">
        <div className="btn btn-success btn-circle">
          <i className="ti-calendar"></i>
        </div>
        <div className="mail-contnet">
          <h5>Event today</h5>{" "}
          <span className="mail-desc">
                                Just a reminder that you have event
                              </span>
          <span className="time">9:10 AM</span>
        </div>
      </a>

      <a href="#">
        <div className="btn btn-primary btn-circle">
          <i className="ti-user"></i>
        </div>
        <div className="mail-contnet">
          <h5>Pavan kumar</h5>{" "}
          <span className="mail-desc">
                                Just see the my admin!
                              </span>{" "}
          <span className="time">9:02 AM</span>
        </div>
      </a>
    </div>
  );
};

export default NavContentMessages;
