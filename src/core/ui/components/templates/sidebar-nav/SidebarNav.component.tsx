import React from "react";
import SidebarNavItem from "../../organisms/sidebar-nav-item/SidebarNavItem.component";
import { SidebarConfigurationModule } from "../../../interfaces/SidebarConfiguration";
import { useToggle } from "../../../../shared/hooks/useToggle";

interface Props {
  module: SidebarConfigurationModule;
}

const SidebarNav = ({ module }: Props) => {
  const { handleOpen, elements } = useToggle(module.subModules);

  return (
    <>
      <li className="nav-small-cap">{module.title}</li>
      {elements.map((subModule, index) => (
        <SidebarNavItem
          key={index}
          subModule={subModule}
          handleOpen={handleOpen}
        />
      ))}
    </>
  );
};

export default SidebarNav;
