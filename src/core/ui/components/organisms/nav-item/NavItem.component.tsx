import React from "react";
import NavItemLink from "../nav-item-link/NavItemLink.component";
import NavItemContent from "../nav-item-content/NavItemContent.component";
import { NavItemProps } from "../../../interfaces/NavItemProps";

interface Props extends NavItemProps {
  handleOpen: (index: number) => void;
  image?: string;
}

const NavItem = ({
  id,
  icon,
  content,
  template,
  isOpen,
  handleOpen,
  image,
}: Props) => {
  return (
    <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
      <NavItemLink
        open={isOpen}
        openNavItemLink={() => handleOpen(id)}
        icon={icon}
        image={image}
      />
      <div
        className={`dropdown-menu dropdown-menu-right mailbox animated bounceInDown ${
          isOpen ? "show" : ""
        }`}
      >
        {template ? (
          <ul
            className="dropdown-user"
            dangerouslySetInnerHTML={{ __html: template }}></ul>
        ) : (
          <NavItemContent open={isOpen} content={content} />
        )}
      </div>
    </li>
  );
};

export default NavItem;
