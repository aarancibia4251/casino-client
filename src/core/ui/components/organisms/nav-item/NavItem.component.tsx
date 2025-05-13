import React from "react";
import NavItemLink from "../nav-item-link/NavItemLink.component";
import NavItemContent from "../nav-item-content/NavItemContent.component";
import { NavItemProps } from "../../../interfaces/NavItemProps";

interface Props extends NavItemProps {
  handleOpen: (index: number) => void;
}

const NavItem = ({ id, icon, content, isOpen, handleOpen }: Props) => {
  return (
    <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
      <NavItemLink
        open={isOpen}
        openNavItemLink={() => handleOpen(id)}
        icon={icon}
      />
      <NavItemContent open={isOpen} content={content} />
    </li>
  );
};

export default NavItem;
