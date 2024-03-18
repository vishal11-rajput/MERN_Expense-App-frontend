import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize, PiUsersFourFill,FaMoneyBills  } from "react-icons/md";
import { Login } from "./Login";

export const Sidebar = () => {
  const path = window.location.pathname;

  const serviceProviderLinks = [
    {
      name: "Add Expense",
      link: "/serviceprovider/dashboard",
    },
    {
      name: "My Services",
      link: "/serviceprovider/myservices",
    },
  ];

  const userLinks = [
    {
      name: "User Dashboard",
      link: "/user/dashboard",
      icon: <MdDashboardCustomize />
    },
    {
      name: "Add Expense",
      link: "/user/add-expense",
    },
    {
      name: "All Expenses",
      link: "/user/all-expenses",
      // icon: <FaMoneyBills/>
    },
    {
      name:'All Users',
      link:'/all-users',
      // icon: <PiUsersFourFill/>
    }
  ];

  return (
    <div className="sidebar" data-image="public/assets/img/sidebar-5.jpg">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to="#" className="simple-text">
            Expense Manager
          </Link>
        </div>

        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              <i className="nc-icon nc-chart-pie-35" />
              <p>Dashboard</p>
            </a>
          </li>

          {path.includes("serviceprovider")
            ? serviceProviderLinks.map((serpro) => {
                return (
                  <li>
                    <Link className="nav-link" to={serpro.link}>
                      <i className="nc-icon nc-chart-pie-35"></i>
                      <p>{serpro.name}</p>
                    </Link>
                  </li>
                );
              })
            : userLinks.map((user) => {
                return (
                  <li>
                    <Link className="nav-link" to={user.link}>
                      <i className="nc-icon nc-circle-09"></i>
                     
                      <p>{user.name}</p>
                    </Link>
                  </li>
                );
              })}
        </ul>
        
          <div id="button-pos">
          <ul>
            <li className="nav-item active">
              <a className="nav-link" href="/login" id="logincss">
                {/* <i className="nc-icon nc-chart-pie-35" /> */}
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p id="text1">LOGIN</p>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/signup" id="logincss">
                {/* <i className="nc-icon nc-circle-09"></i>
                <i className="nc-icon nc-chart-pie-35" /> */}

                <p id="text1">SIGN </p>
              </a>
            </li>
            </ul>
          </div>
       
      </div>
    </div>
  );
};
