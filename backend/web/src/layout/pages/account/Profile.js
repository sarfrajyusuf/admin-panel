import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const axios = require("axios").default;

const Profile = (props) => {
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      axios.get(`http://localhost:8000/getUserData`).then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="col-lg-9 col-sm-12 mt-lg-0 mt-4 ">
        <div
          className="tab-content tab_shadow rounded-4 h-100"
          id="v-pills-tabContent"
        >
          <div className=" " id="v-pills-profile">
            <div className="row">
              <div class="col-md-5 col-sm-12">
                <h2 class="mb-4">Profile</h2>
                <h4>Name</h4>
                <p>John Deo</p>
                <h4>Email</h4>
                <p>ashrafhossain@gmail.com</p>
                <h4>Phone Number</h4>
                <p>+1 458 4582 5789</p>
              </div>
              <div className="col-md-7 col-sm-12">
                <img
                  src="./images/user_profile_sideimg1.png"
                  className="w-100 h-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
