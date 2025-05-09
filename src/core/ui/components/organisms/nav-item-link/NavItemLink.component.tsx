import React from "react";

interface Props {
  open: boolean;
  openNavItemLink: () => void;
  icon: string;
}

const NavItemLink = ({ open, openNavItemLink, icon }: Props) => {
  return (
    <a
      className="nav-link dropdown-toggle waves-effect waves-dark"
      onClick={() => openNavItemLink()}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={open}
    >
      {" "}
      <i className={icon}></i>
      <div className="notify">
        <span className="heartbit"></span> <span className="point"></span>
      </div>
    </a>
  );
};

export default NavItemLink;
