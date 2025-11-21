import React from "react";
import { NavItemContentProps } from "../../../interfaces/NavItemProps";
import NavContentMessages from "../../templates/nav-content-messages/NavContentMessages.component";
import NavLinkFooter from "../../molecules/nav-link-footer/NavLinkFooter.component";

interface Props {
  open: boolean;
  content: NavItemContentProps;
}

const NavItemContent = ({ open, content }: Props) => {
  return (
    <>
      <ul>
        <li>
          <div className="drop-title">{content.title}</div>
        </li>
        <li>
          <NavContentMessages messages={content.messages} />
        </li>
        <li>
          <NavLinkFooter footerText={content.footerText} />
        </li>
      </ul>
    </>
  );
};

export default NavItemContent;
