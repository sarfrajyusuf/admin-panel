import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
const axios = require('axios').default;



const Delivery_address = (props) => {

  
  return (
    <>


   
                <div className="col-lg-9 col-sm-12 mt-lg-0 mt-4 ">
                    <div className="tab-content tab_shadow rounded-4 h-100" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-profile">

                        <div className="row justify-content-center">
                                <div className="col-md-12 mb-4">
                                    <h2>
                                        Packages
                                    </h2>
                                </div>

                                <div className="col-lg-6 prem_plan text-center col-md-6">
                                    <div className="plan_card blue_bg">
                                        <div className="sidebox">
                                            <h3>$300.00/Year</h3>
                                        </div>
                                        <div className="mainbox rounded-5 pt-4 pb-5">
                                            <small>
                                                One Time Payment
                                            </small>
                                            <h2 className="mt-4">
                                                Standard
                                            </h2>
                                            <span>
                                                Plan
                                            </span>
                                            <ul className="text-start  p-xxl-5 p-lg-3 p-2 ">
                                                <li> <i className="fa-solid fa-check"></i>
                                                    <div className="text_box">
                                                        <h5>2 Admin</h5>
                                                        <p>&nbsp;</p>
                                                    </div>
                                                </li>
                                                <hr />
                                                <li> <i className="fa-solid fa-check"></i>
                                                    <div className="text_box">
                                                        <h5>250 voulentaris</h5>
                                                        <p>&nbsp; </p>
                                                    </div>
                                                </li>
                                            </ul>
                
                                            <a href="#" className="button">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      

                    </div>
                </div>
            


    </>
  );
}
export default Delivery_address;

