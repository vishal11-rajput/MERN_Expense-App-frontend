import React ,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [userName ,setUserName] = useState()
 
  const getUserbyID = async () => {
    const id = localStorage.getItem("id");
    try {
      const res = await axios.get("http://localhost:8000/users/user/" + id);
      setUserName(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getUserbyID()
  },[])
  const logout= ()=>{
    if(localStorage.getItem("id")===null){
      toast.warning("Please login first")
      return
    }
    const confirmed = window.confirm("Are you sure you want to log out?");
    if(confirmed){
      localStorage.removeItem("id")
      toast.success("Logged out successfully")
      navigate('/home')
    }
    else {
      return
    }
    

    // window.location.reload()
  }
  return (
    <nav  className="navbar navbar-expand-lg fixed " color-on-scroll={500}>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          {" "}
          Dashboard{" "}
        </Link>
        {/* <button
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
        </button> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" data-toggle="dropdown">
                {/* <i className="nc-icon nc-palette" /> */}
                <span className="d-lg-none">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
             
              {/* <input type="submit" /> */}
              <Link to="#" className="nav-link">
              <input type="search" placeholder="" style={{padding:"0 190px 0 190px", borderRadius:"10px", border:"1px solid black",}} />
                {/* <i className="nc-icon nc-zoom-split" /> */}
                <span  className="d-lg-block">&nbsp;Search</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" id = 'nav-user' to="/profile">
                <span className="no-icon">
                  {userName == null ? "Account" : userName.name.toUpperCase()}</span>
              </Link>
            </li>
            <li class="nav-item">
              <li onClick={logout} class="nav-link" id = 'nav-user' >
              Log-Out
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
