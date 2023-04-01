import React, { useEffect, useState } from "react";
import axios from "axios";
import { GETALLUSER } from "../../services/AuthApi";
const User = () => {
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
          <h1>User</h1>
          <div className=" " id="v-pills-profile">
            <div className="row">
              {user.length > 0 &&
                user.map((data) => {
                  return (
                    <div className="col-md-5 col-sm-12">
                      <h2 className="mb-4">Profile</h2>
                      <h4>Name</h4>
                      <p>{data.name}</p>
                      <h4>Email</h4>
                      <p>{data.email}</p>
                      <h4>Phone Number</h4>
                      <p>{data.phoneNumber}</p>
                    </div>
                  );
                })}
              {/* <div className="col-md-7 col-sm-12">
                <img
                  src="./images/user_profile_sideimg1.png"
                  className="w-100 h-100"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
