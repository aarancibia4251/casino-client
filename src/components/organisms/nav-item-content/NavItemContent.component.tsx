import React from "react";
import { NavItemContentProps } from "../../../core/domain/NavItemProps";
import NavContentMessages from "../../templates/nav-content-messages/NavContentMessages.component";
import NavLinkFooter from "../../molecules/nav-link-footer/NavLinkFooter.component";

interface Props {
  open: boolean;
  content: NavItemContentProps;
}

const NavItemContent = ({ open, content }: Props) => {
  return (
    <div
      className={`dropdown-menu dropdown-menu-right mailbox animated bounceInDown ${
        open ? "show" : ""
      }`}
    >
      <ul>
        <li>
          <div className="drop-title">{content.title}</div>
        </li>
        <li>
          <NavContentMessages />
        </li>
        <li>
          <NavLinkFooter footerText={content.footerText} />
        </li>
      </ul>
    </div>
  );
};

export default NavItemContent;
