import HomePage from "./assets/images/logo-icon.png";
import LightIcon from "./assets/images/logo-light-icon.png";
import LogoText from "./assets/images/logo-text.png";
import LogoLightText from "./assets/images/logo-light-text.png";
import NavBarNav from "./components/templates/navbar-nav/NavBarNav.component";
import React from "react";
import Sidebar from "./components/templates/sidebar/Sidebar.component";

export default function Root(props) {
  return (
    <div id="main-wrapper">
      {/*<div className="preloader">
        <div className="loader">
          <div className="loader__figure"></div>
          <p className="loader__label">Admin Pro</p>
        </div>
      </div>*/}
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
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
