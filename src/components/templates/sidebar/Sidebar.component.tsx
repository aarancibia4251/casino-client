import React, { useState } from "react";
import { sidebarItems } from "../../../data";
import SidebarNav from "../sidebar-nav/SidebarNav.component";
import SidebarNavItem from "../../organisms/sidebar-nav-item/SidebarNavItem.component";

const Sidebar = () => {
  const [quickAccess, setQuickAccess] = useState({
    ...sidebarItems.quickAccess,
    isOpen: false,
  });

  const handleOpen = (index: string) => {
    setQuickAccess((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  return (
    <aside className="left-sidebar">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            {
              <SidebarNavItem
                key={quickAccess.id}
                subModule={quickAccess}
                className="user-profile"
                handleOpen={() => handleOpen(quickAccess.id)}
              />
            }
            <li className="nav-devider"></li>
            {sidebarItems.modules.map((module) => (
              <SidebarNav module={module} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
