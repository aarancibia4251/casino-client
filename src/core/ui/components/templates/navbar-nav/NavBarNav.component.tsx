import React, { createContext } from "react";
import UserPhoto from "../../../../../assets/images/users/1.jpg";
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

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-dark"
            href=""
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            <i className="flag-icon flag-icon-us"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right animated bounceInDown">
            <a className="dropdown-item" href="#">
              <i className="flag-icon flag-icon-in"></i> India
            </a>{" "}
            <a className="dropdown-item" href="#">
              <i className="flag-icon flag-icon-fr"></i> French
            </a>{" "}
            <a className="dropdown-item" href="#">
              <i className="flag-icon flag-icon-cn"></i> China
            </a>{" "}
            <a className="dropdown-item" href="#">
              <i className="flag-icon flag-icon-de"></i> Dutch
            </a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-dark"
            href=""
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={UserPhoto}
              alt="user"
              className="profile-pic"
            />
          </a>
          <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <ul className="dropdown-user">
              <li>
                <div className="dw-user-box">
                  <div className="u-img">
                    <img
                      src={UserPhoto}
                      alt="user"
                    />
                  </div>
                  <div className="u-text">
                    <h4>Steave Jobs</h4>
                    <p className="text-muted">varun@gmail.com</p>
                    <a
                      href="pages-profile.html"
                      className="btn btn-rounded btn-danger btn-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="#">
                  <i className="ti-user"></i> My Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-wallet"></i> My Balance
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-email"></i> Inbox
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="#">
                  <i className="ti-settings"></i> Account Setting
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="#">
                  <i className="fa fa-power-off"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </li>

      </NavItemContext.Provider>
    </ul>
  );
};

export default NavBarNav;
