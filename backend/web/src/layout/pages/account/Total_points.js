import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const Payment_methods = (props) => {
  return (
    <>
      <div className="col-lg-9 col-sm-12 mt-lg-0 mt-4 ">
        <div
          className="tab-content tab_shadow rounded-4 h-100"
          id="v-pills-tabContent"
        >
          <div className="tab-pane fade show active" id="v-pills-profile">
            <div className="row justify-content-center g-3">
              {/* <div className="col-12">
                                    <h2 className="d-flex justify-content-between align-items-center">
                                        Total Points
                                       
                                    </h2>
                                </div>
                                <div className="col-md-6">
                                    <div className="card_redeemed">
                                        <div className="title">
                                            <h3>100</h3>
                                            <small>Points</small>
                                        </div>
                                        <div className="card_body text-end">
                                            <span>11:00 am 12 Jun 2022</span>
                                            <p>Redeemed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card_redeemed">
                                        <div className="title">
                                            <h3>120</h3>
                                            <small>Points</small>
                                        </div>
                                        <div className="card_body text-end">
                                            <span>11:00 am 12 Jun 2022</span>
                                            <p>Redeemed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card_redeemed">
                                        <div className="title">
                                            <h3>100</h3>
                                            <small>Points</small>
                                        </div>
                                        <div className="card_body text-end">
                                            <span>11:00 am 12 Jun 2022</span>
                                            <p>Redeemed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card_redeemed">
                                        <div className="title">
                                            <h3>120</h3>
                                            <small>Points</small>
                                        </div>
                                        <div className="card_body text-end">
                                            <span>11:00 am 12 Jun 2022</span>
                                            <p>Redeemed</p>
                                        </div>
                                    </div>
                                </div> */}

              <div className="col-md-10 mt-4">
                <div className="card bg-secondary bg-opacity-10 border-0 rounded-4 p-md-5 p-3 d-flex flex-row justify-content-start align-items-center">
                  <img src="./images/tab_stra.png" width="165" alt="" />
                  <h1 className="ms-5">123k</h1>
                </div>
                <div className="text-center mt-3">
                  <h4 className="fw-normal">Redeem Points</h4>
                </div>
              </div>
              <div className="col-md-6">
                <form action="#" className="points">
                  <label for="">Points</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Point "
                  />

                  <label className="d-none" for="">
                    Selected Details
                  </label>
                  <div className="cards d-none p-3 mt-4">
                    <h3>
                      John Marker{" "}
                      <a
                        href="#"
                        className="theme_text_color text-decoration-none"
                      >
                        Change
                      </a>
                    </h3>
                    <span>XXXX-XXXX-XXXX-4567</span>
                    <br />
                    <span>Expiry: Apr 2020</span>
                  </div>
                  <div className="text-center mt-4">
                    <a href="#" className="btn">
                      Redeem
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment_methods;
