import React, { createContext } from "react";
import NavItem from "../../organisms/nav-item/NavItem.component";
import { navItems } from "../../../../../data";
import NavItemSearchBox from "../nav-item-search-box/NavItemSearchBox.component";
import { useToggle } from "../../../../shared/hooks/useToggle";

export const NavItemContext = createContext(null);

const NavBarNav = () => {
  const { handleOpen, elements } = useToggle(navItems);

  return (
    <ul className="navbar-nav my-lg-0">
      <NavItemSearchBox />

      <NavItemContext.Provider
        value={{
          notifications: [],
          messages: [],
        }}
      >
        {elements.map((navItem) => (
          <NavItem
            key={navItem.id}
            {...navItem}
            handleOpen={handleOpen}
          ></NavItem>
        ))}
      </NavItemContext.Provider>
    </ul>
  );
};

export default NavBarNav;
