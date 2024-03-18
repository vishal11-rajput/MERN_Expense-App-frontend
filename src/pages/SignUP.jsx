import React from "react";
import "./Sign.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignUP = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [userType, setUserType] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/users/user", { name, email, password})
      .then((result) => {console.log(result)
        toast.success("SignUp success");
        
      navigate('/login')})
      .catch((err) => console.log(err),
      toast.error("SignUp error")
      );
  };

  return (
    <div className="container-fluid">
      <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="row">
        <div className="col-lg-6 col-md-6 form-container">
          <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
            <div className="logo mt-5 mb-3">
              {/* <img src="image/logo.png" width="150px" /> */}
              <h1>WELCOME</h1>
            </div>
            <div className="heading mb-3">
              <h4>Create an account</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <span>
                  <i className="fa fa-user" />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-envelope" />
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-lock" />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="text-left mb-3">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
              
              <div className="text-white">
                Already have an account?
                <Link to="/login" className="login-link">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 d-none d-md-block image-container" />
      </div>
    </div>
  );
};
