import React, { useState } from "react";
import "./NavItemSearchBox.styles.scss";

const NavItemSearchBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item hidden-xs-down search-box">
      <a className="nav-link hidden-sm-down waves-effect waves-dark" onClick={() => setOpen(!open)}>
        <i className="ti-search"></i>
      </a>
      <form className="app-search animated zoomIn" style={{ display: open ? "block" : "none" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search & enter"
        />{" "}
        <a className="srh-btn">
          <i className="ti-close" onClick={() => setOpen(!open)}></i>
        </a>
      </form>
    </li>
  );
};

export default NavItemSearchBox;
