import React, { useState } from "react";
import "./Sign.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try{
      const res = await axios.post("http://localhost:8000/users/login", data);
        console.log(res);
        toast.success("Login success");
        localStorage.setItem("id", res.data.data._id);
        console.log("data", data);
        window.location.href = "/home"
    }
    catch(err){
        toast.error('login error');
      }
  };

  return (
    <div className="container-fluid">
      <ToastContainer position="bottom-right" autoClose={1000} />
      <div className="row">
        <div className="col-lg-6 col-md-6 form-container">
          <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
            <div className="logo mt-5 mb-3">
              <h1>LOGIN HERE</h1>
            </div>
            <div className="heading mb-3">
              <h4>Login into your account</h4>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="form-input">
                <span>
                  <i className="fa fa-envelope" />
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  required=""
                  {...register("email")}
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
                  {...register("password")}
                />
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="cb1"
                    />
                    <label
                      className="custom-control-label text-white"
                      htmlFor="cb1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-6 text-right">
                  <a href="forget.html" className="forget-link">
                    Forget password
                  </a>
                </div>
              </div>
              <div className="text-left mb-3">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>

              <div className="text-white">
                Don't have an account?
                <Link to="/signup" className="login-link">
                  SignUp here
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
