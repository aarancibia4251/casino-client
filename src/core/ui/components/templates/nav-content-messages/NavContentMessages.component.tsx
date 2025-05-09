import React from "react";
import { NavItemContentMessageProps } from "../../../../domain/NavItemProps";

interface Props {
  messages: NavItemContentMessageProps[];
}

const NavContentMessages = ({ messages }: Props) => {
  return (
    // Todo - Space in messages are narrow
    <div className="message-center">
      {messages.map((message) => (
        <a>
          {message.img ? (
              <div className="user-img">
                <img src={message.img} alt="user" className="img-circle" />{" "}
                <span className={`profile-status ${message.status} pull-right`}></span>
              </div>
            ) : (
              <div className={`btn btn-${message.type} btn-circle`}>
                <i className={message.icon}></i>
              </div>
            )}
            <div className="mail-contnet">
              <h5>{message.title}</h5>{" "}
              <span className="mail-desc">
                                {message.message}
                              </span>{" "}
              <span className="time">9:30 AM</span>
            </div>
          </a>
        ))
      }
    </div>
  );
};

export default NavContentMessages;
