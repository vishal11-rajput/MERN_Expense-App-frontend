import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          {" "}
          Dashboard{" "}
        </Link>
        <button
          to=""
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" data-toggle="dropdown">
                <i className="nc-icon nc-palette" />
                <span className="d-lg-none">Dashboard</span>
              </Link>
            </li>
            {/* <li className="dropdown nav-item">
              <a
                to="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="nc-icon nc-planet" />
                <span className="notification">5</span>
                <span className="d-lg-none">Notification</span>
              </a>
              <ul className="dropdown-menu">
                <a className="dropdown-item" to="#">
                  Notification 1
                </a>
                <a className="dropdown-item" to="#">
                  Notification 2
                </a>
                <a className="dropdown-item" to="#">
                  Notification 3
                </a>
                <a className="dropdown-item" to="#">
                  Notification 4
                </a>
                <a className="dropdown-item" to="#">
                  Another notification
                </a>
              </ul>
            </li> */}
            <li className="nav-item">
              <input type="search" />
              {/* <input type="submit" /> */}
              <Link ato="#" className="nav-link">
                <i className="nc-icon nc-zoom-split" />
                <span  className="d-lg-block">&nbsp;Search</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                <span className="no-icon">Account</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/fileupload">
              fileupload
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="no-icon">Dropdown</span>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <Link className="dropdown-item" to="#">
                  Something
                </Link>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
                <div className="divider" />
                <Link className="dropdown-item" to="#">
                  Separated link
                </Link>
              </div>
            </li>
            <li className="nav-item-user">
              <Link to="/profile" className="nav-link-user" >
                <span className="no-icon"><i class="nc-icon nc-circle-09"></i></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
