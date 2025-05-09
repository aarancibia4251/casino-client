import React, { useEffect, useState } from "react";
import HomePage from "./assets/images/logo-icon.png";
import LightIcon from "./assets/images/logo-light-icon.png";
import LogoText from "./assets/images/logo-text.png";
import LogoLightText from "./assets/images/logo-light-text.png";
import NavBarNav from "./core/ui/components/templates/navbar-nav/NavBarNav.component";
import Sidebar from "./core/ui/components/templates/sidebar/Sidebar.component";
import Preloader from "./core/ui/components/organisms/preloader/Preloader.component";

export default function Root(props) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 500);
  }, []);
  return (
    <div id="main-wrapper">
      {preloader ? <Preloader /> : null}
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header">
            <a className="navbar-brand">
              <b>
                <img src={HomePage} alt="homepage" className="dark-logo" />

                <img
                  src={LightIcon}
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              <span>
                  <img
                    src={LogoText}
                    alt="homepage"
                    className="dark-logo"
                  />

                  <img
                    src={LogoLightText}
                    className="light-logo"
                    alt="homepage"
                  />
                </span>{" "}
            </a>
          </div>

          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                  href=""
                >
                  <i className="ti-menu"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"
                  href=""
                >
                  <i className="ti-menu"></i>
                </a>
              </li>
            </ul>

            <NavBarNav></NavBarNav>
          </div>
        </nav>
      </header>
      <Sidebar />
    </div>
  );
}
