import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { Login } from "./Login";


export const Sidebar = () => {
  const path = window.location.pathname;

  const adminLinks = [
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
      name: "Home",
      link: "/home",
      icon: <MdHome/>
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <MdSpaceDashboard/>
    },    
    {
      name: "Add Expense",
      link: "/user/add-expense",
      icon: <MdAddToPhotos/>
    },
    {
      name: "All Expense",
      link: "/user/all-expenses",
      icon: <MdAccountBalanceWallet/>
    },
    {
      name:'All Users',
      link:'/all-users',
      icon:<ImUsers/>
    },
        
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
         
          {path.includes("adm")
            ? adminLinks.map((adm) => {
                return (
                  <li>
                    <Link className="nav-link" to={adm.link}>
                     
                      
                      <i className="nc-icon nc-chart-pie-35"></i>
                      <p>{adm.name}</p>
                    </Link>
                  </li>
                );
              })
            : userLinks.map((user) => {
                return (
                  <li>
                    <Link className="nav-link" to={user.link}>
                      <div ><span style={{fontSize: '25px',}}>
                     <i>{user.icon}</i>
                     
                      </span>
                      
                      <p >{user.name}</p>
                      </div>
                      
                      {/* <i className="nc-icon nc-circle-09"></i> */}
                     
                      
                    </Link>
                  </li>
                );
              })}
        </ul>
          <div >
          <ul id="button-pos">
            <li className="nav-item active">
              <a className="nav-link" href="/login" id="logincss">
                {/* <i className="nc-icon nc-chart-pie-35" /> */}
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p id="text1">LOGIN</p>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/profile" id="logincss">
                {/* <i className="nc-icon nc-circle-09"></i>
                <i className="nc-icon nc-chart-pie-35" /> */}

                <p id="text1">REGISTER </p>
              </a>
            </li>

            
            </ul>
          </div>
       
      </div>
    </div>
  );
};
