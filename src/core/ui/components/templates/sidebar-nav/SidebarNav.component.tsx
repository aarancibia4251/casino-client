import React, { useState } from "react";
import SidebarNavItem from "../../organisms/sidebar-nav-item/SidebarNavItem.component";
import { SidebarConfigurationModule } from "../../../../domain/SidebarConfiguration";

interface Props {
  module: SidebarConfigurationModule;
}

const SidebarNav = ({ module }: Props) => {
  const [subModules, setSubModules] = useState(module.subModules);

  const handleOpen = (index: string) => {
    const alterSbModules = subModules
      .map((sb) => (sb.id === index ? { ...sb } : { ...sb, isOpen: false }))
      .map((sb) =>
        sb.id === index ? { ...sb, isOpen: !sb.isOpen } : { ...sb }
      );
    setSubModules(alterSbModules);
  };

  return (
    <>
      <li className="nav-small-cap">{module.title}</li>
      {subModules.map((subModule, index) => (
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
