import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import profilePic from '../../images/profile-male.jpg'

export const Profile = () => {
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    const id = localStorage.getItem("id")
    try {
      const res = await axios.get("http://localhost:8000/users/user/" + id);
      console.log(res.data.data);
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  },[]);

  const name = "Vishal"

  return (
    <>
      <div className="container emp-profile">
        <form className="form" method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <div class="card1">
                  <div className="card-img">
                    {user.profilePic == null  ? <img src={profilePic} alt="Profile Picture"/> : <img src={user.profilePic} alt="Profile Picture"/>}
                    {/* <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""/> */}
                  <a class="card-button" href="#link">
                    Edit Image
                  </a>
                  </div>
                  
                  
                </div>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
              <h2>{user.name && user.name.toUpperCase()}</h2>
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
                    <p> {user.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.name}_user</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    
                    <div className="col-md-6">
                      { user.phone == null || user.phone == undefined ? <p>NA</p> : <p>{user.phone}</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>ROLE</label>
                    </div>
                    <div className="col-md-6">
                      {user.role == null || user.role == undefined ? <p>User</p> : <p>{user.role}</p>}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
              </div>
            </div>

            {/* for profile edit button */}
            {/* <div className="col-md-2" >
              <input
                type="submit"
                className="profile-edit-btn" 
                name="btnAddMore"
                value="Edit Profile"
              />
            </div> */}
          </div>
          <div className="row">
           
            
          </div>
        </form>
      </div>
    </>
  );
};
