import React, { createContext } from "react";
import UserPhoto from "../../../../../assets/images/users/1.jpg";
import UserImgBig from "../../../../../assets/images/big/img1.jpg";
import UserImgBig2 from "../../../../../assets/images/big/img2.jpg";
import UserImgBig3 from "../../../../../assets/images/big/img3.jpg";
import NavItem from "../../organisms/nav-item/NavItem.component";
import { navItems } from "../../../../../data";
import NavItemSearchBox from "../nav-item-search-box/NavItemSearchBox.component";

const NavItemContext = createContext(null);

const NavBarNav = () => {
  return (
    <ul className="navbar-nav my-lg-0">
      <NavItemSearchBox />

      <NavItemContext.Provider
        value={{
          notifications: [],
          messages: [],
        }}
      >
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} {...navItem}></NavItem>
        ))}

        <li className="nav-item dropdown mega-dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-dark"
            href=""
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="mdi mdi-view-grid"></i>
          </a>
          <div className="dropdown-menu animated bounceInDown">
            <ul className="mega-dropdown-menu row">
              <li className="col-lg-3 col-xlg-2 m-b-30">
                <h4 className="m-b-20">CAROUSEL</h4>

                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="container">
                        <img
                          className="d-block img-fluid"
                          src={UserImgBig}
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <img
                          className="d-block img-fluid"
                          src={UserImgBig2}
                          alt="Second slide"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <img
                          className="d-block img-fluid"
                          src={UserImgBig3}
                          alt="Third slide"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    {" "}
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>{" "}
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    {" "}
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>{" "}
                  </a>
                </div>
              </li>
              <li className="col-lg-3 m-b-30">
                <h4 className="m-b-20">ACCORDION</h4>

                <div
                  id="accordion"
                  className="nav-accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="headingOne"
                    >
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Collapsible Group Item #1
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        {" "}
                        Anim pariatur cliche reprehenderit, enim eiusmod
                        high.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="headingTwo"
                    >
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Collapsible Group Item #2
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="card-body">
                        {" "}
                        Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="headingThree"
                    >
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Collapsible Group Item #3
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="card-body">
                        {" "}
                        Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-lg-3  m-b-30">
                <h4 className="m-b-20">CONTACT US</h4>

                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputname1"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                              <textarea
                                className="form-control"
                                id="exampleTextarea"
                                rows={3}
                                placeholder="Message"
                              ></textarea>
                  </div>
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </form>
              </li>
              <li className="col-lg-3 col-xlg-4 m-b-30">
                <h4 className="m-b-20">List style</h4>

                <ul className="list-style-none">
                  <li>
                    <a href="">
                      <i className="fa fa-check text-success"></i> You
                      can give link
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-check text-success"></i> Give
                      link
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-check text-success"></i>{" "}
                      Another Give link
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-check text-success"></i> Forth
                      link
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-check text-success"></i>{" "}
                      Another fifth link
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
