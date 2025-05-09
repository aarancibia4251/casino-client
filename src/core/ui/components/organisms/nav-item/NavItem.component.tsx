import React, { useState } from "react";
import NavItemLink from "../nav-item-link/NavItemLink.component";
import NavItemContent from "../nav-item-content/NavItemContent.component";
import { NavItemProps } from "../../../../domain/NavItemProps";

const NavItem = ({ icon, content }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  const openNavItem = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <li className={`nav-item dropdown ${open ? "show" : ""}`}>
      <NavItemLink open={open} openNavItemLink={openNavItem} icon={icon} />
      <NavItemContent open={open} content={content} />
    </li>
  );
};

export default NavItem;
