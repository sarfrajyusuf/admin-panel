import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
const axios = require('axios').default;



const Edit_profile = (props) => {

  
  return (
    <>

    <div className="col-lg-9 col-sm-12 mt-lg-0 mt-4 ">
                    <div className="tab-content tab_shadow rounded-4 h-100" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-profile">
                        <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <h2 className="mb-4">Edit Player Profile</h2>

                                    <form action="#">
                                        <label for="name">Name</label> <br />
                                        <input type="text" className="form-control" name="name" id="name" placeholder="John B. Marker" />
                                        <label for="email">Email</label> <br />
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Johnb.marker@gmail.com" />
                                        <label for="phone_noumber">Phone Number</label> <br />
                                        <input type="text" className="form-control" name="phone_noumber" id="phone_noumber" placeholder="+1 458 4582 5789" />
                                        <button type="submit" className="tab_btn mt-3">Update</button>
                                    </form>

                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <img src="./images/user_profile_sideimg01.png" className="w-100 h-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    </>
  );
}
export default Edit_profile;

