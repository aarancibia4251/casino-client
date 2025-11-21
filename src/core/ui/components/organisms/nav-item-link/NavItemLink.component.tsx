import React from "react";

interface Props {
  open: boolean;
  openNavItemLink: () => void;
  icon: string;
  image?: any;
}

const NavItemLink = ({ open, openNavItemLink, icon, image }: Props) => {
  return (
    <a
      className="nav-link dropdown-toggle waves-effect waves-dark"
      onClick={() => openNavItemLink()}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={open}
    >
      {image ? (
        <img
          src={image}
          alt="user"
          className="profile-pic"
        />
      ) : (
        <>
          {" "}
          <i className={icon}></i>
          <div className="notify">
          <span className="heartbit"></span> <span className="point"></span>
          </div>
        </>
      )}
    </a>
  );
};

export default NavItemLink;
