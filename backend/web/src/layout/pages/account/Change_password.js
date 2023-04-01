import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
const axios = require('axios').default;



const Change_password = (props) => {

  
  return (
    <>


                <div className="col-lg-9 col-sm-12 mt-lg-0 mt-4 ">
                    <div className="tab-content tab_shadow rounded-4 h-100" id="v-pills-tabContent">
                        <div className="tab-pane fade show change_pin  active" id="v-pills-profile">
                        <div className="row pay_method">
                                <div className="col-md-12">
                                    <h2>Change Password</h2>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <form action="">
                                        <label for="text">Old Password</label>
                                        <input type="text" placeholder="********************" className="form-control" />
                                        <label for="text">New Password</label>
                                        <input type="text" placeholder="********************" className="form-control" />
                                        <label for="text">Confirm New Password</label>
                                        <input type="text" placeholder="********************" className="form-control" />
                                        <input type="submit" value="Update" />
                                    </form>
                                </div>
                                <div className="col-lg-7 col-md-6 overflow-hidden">
                                    <img src="./images/change_password.png" alt="" />
                                </div>
                            </div>
                        </div>

                       
                     

                    </div>
                </div>
        
    </>
  );
}
export default Change_password;

