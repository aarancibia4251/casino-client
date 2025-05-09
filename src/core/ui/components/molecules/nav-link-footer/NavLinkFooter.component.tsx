import React from "react";

interface Props {
  footerText: string;
}

const NavLinkFooter = ({ footerText }: Props) => {
  return (
    <a
      className="nav-link text-center"
      href=";"
    >
      {" "}
      <strong>{footerText}</strong>{" "}
      <i className="fa fa-angle-right"></i>{" "}
    </a>
  );
};

export default NavLinkFooter;
