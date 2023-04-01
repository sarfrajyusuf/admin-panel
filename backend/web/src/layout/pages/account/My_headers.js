import React, { useState, useEffect } from "react"; 
import { Link, Outlet } from "react-router-dom";
const axios = require('axios').default;



const My_headers = (props) => {

  
  return (
    <>
    
<section className="template_banner text-center text-white">
        <h2>My Account</h2>
        <p><a href="./home.html" className="text-decoration-none text-white">Home</a> / <a href="#"
                className="text-decoration-none text-white">My Account</a></p>
    </section>

   

    <section className="my_account py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-3  col-sm-12">
                    <div className="tab_shadow tab_menu rounded-4">
                        <div className="user_image w-100 text-center">
                            <img src="./images/user_photo.png" width="197.16" height="197.16"
                                className="rounded-circle mb-4" alt="" />
                            <h2>John B.Marker</h2>
                            <p>Johnb.marker@gmail.com</p>
                        </div>

                        <div className="nav flex-column text-start nav-pills " id="v-pills-tab" >

                           <Link to={"/profile"} className="nav-link active">  <span className="tab_icon"><i className="fa-solid fa-user text-white"></i>  </span>  Player Profile</Link>
                          
                          
                           <Link to={"/edit_profile"} className="nav-link">  <span className="tab_icon"> <img className="" src="./icon/my_acc_icon/Edit_Profile.png" alt="" />  </span> Edit Profile</Link>

                           {/* <Link to={"/packages"} className="nav-link">  <span className="tab_icon"><img className="" src="./icon/pack_icon.png" alt="" />  </span> Packages</Link> */}


                           <Link to={"/change_password"} className="nav-link">  <span className="tab_icon"> <img className="" src="./icon/my_acc_icon/Change_Password.png" alt="" />  </span> Change Password</Link>


                           <Link to={"/total_points"} className="nav-link">  <span className="tab_icon"> <img className="" src="./icon/flower_icon.png" alt="" />  </span> Total Points</Link>
                      

                           <Link to={""} className="nav-link">  <span className="tab_icon"> <img className="" src="./icon/my_acc_icon/Logout.png" alt="" />  </span> Logout</Link>
                        </div>
                    </div>
                </div>
                <Outlet> </Outlet>
            </div>
        </div>
    </section>


    </>
  );
}
export default My_headers;

