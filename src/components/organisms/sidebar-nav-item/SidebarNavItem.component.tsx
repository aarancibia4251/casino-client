import React from "react";
import SidebarNavSubItem from "../sidebar-nav-sub-item/SidebarNavSubItem.component";
import { SidebarConfigurationSubModule } from "../../../core/domain/SidebarConfiguration";

interface Props {
  subModule: SidebarConfigurationSubModule;
  handleOpen: (index: string) => void;
  className?: string;
}

const SidebarNavItem = ({ subModule, className, handleOpen }: Props) => {
  return (
    <>
      <li
        onClick={() => handleOpen(subModule.id)}
        className={`${className} ${subModule.isOpen ? "active" : ""}`}
      >
        <a
          className="has-arrow waves-effect waves-dark"
          aria-expanded={subModule.isOpen ? "true" : "false"}
        >
          {subModule.icon ? (
            <i className={`mdi ${subModule.icon}`}></i>
          ) : (
            <img src={subModule.img} alt="user" />
          )}
          <span className="hide-menu">
            {subModule.title}{" "}
            {subModule.counter ? (
              <span className="label label-rouded label-themecolor pull-right">
                {subModule.counter}
              </span>
            ) : null}
          </span>
        </a>
        <ul
          aria-expanded={subModule.isOpen}
          className={subModule.isOpen ? "collapse in" : "collapse"}
        >
          {subModule.links.map((link, i) => (<SidebarNavSubItem link={link} key={i} />))}
        </ul>
      </li>
    </>
  );
};

export default SidebarNavItem;
