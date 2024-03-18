import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

export const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById();
  });
  const getUserById = async (id) => {
    try {
      const res = await axios.get("http://localhost:8000/users/user/" + id);
      console.log(res);
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container emp-profile">
        <form className="form" method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <div class="card">
                  <div className="card-img">
                    <img src="https://i2-prod.dailystar.co.uk/incoming/article26216656.ece/ALTERNATES/s810/0_PROD-GettyImages-73510827.jpg" alt=""/>
                  <a class="card-button" href="#link">
                    Edit Image
                  </a>
                  </div>
                  
                  
                </div>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h2>Vishalkumar Singh</h2>
                {/* <h6></h6> */}
                {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>kshitighelani@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>ROLE</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer and Designer</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
              </div>
            </div>
            <div className="col-md-2" >
              <input
                type="submit"
                className="profile-edit-btn" 
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
           
            
          </div>
        </form>
      </div>
    </>
  );
};
