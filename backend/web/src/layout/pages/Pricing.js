import React, { useState, useEffect } from "react";
import Owldemo2 from "../include/Owldemo2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Owldemo3 from "../include/Owldemo3";
const axios = require("axios").default;

const Pricing = (props) => {
  return (
    <>
      <section class="inner_benner">
        <h2>Pricing</h2>
        <p>Home / Pricing</p>
      </section>

      <section class="prem_plan text-center">
        <div class="container">
          <h2 class="mb-4 w-50 mx-auto"> Become a Organisation Manager</h2>
          {/* <!-- <small class="fw-normal">Ideal for coordinators at schools, nonprofits, small businesses and more.</small> --> */}
          <div class="row mt-5 gy-2">
            <div class="col-lg-4 col-md-6">
              <div class="plan_card">
                <div class="sidebox">
                  <h3>$50.00/Year</h3>
                </div>
                <div class="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 class="mt-4">Basic</h2>
                  <span>Plan</span>
                  <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i>
                      <div class="text_box">
                        <h5>1 Admin</h5>
                        <p>(the person who pays for the app)</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i>
                      <div class="text_box">
                        <h5>30 voulentaris</h5>
                        <p>(people who the admin add)</p>
                      </div>
                    </li>
                  </ul>

                  <a href="#" class="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="plan_card blue_bg">
                <div class="sidebox">
                  <h3>$300.00/Year</h3>
                </div>
                <div class="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 class="mt-4">Standard</h2>
                  <span>Plan</span>
                  <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i>
                      <div class="text_box">
                        <h5>2 Admin</h5>
                        <p>&nbsp;</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i>
                      <div class="text_box">
                        <h5>250 voulentaris</h5>
                        <p>&nbsp; </p>
                      </div>
                    </li>
                  </ul>

                  <a href="#" class="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 ">
              <div class="plan_card green_bg">
                <div class="sidebox">
                  <h3>$24.90</h3>
                </div>
                <div class="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 class="mt-4">Premium</h2>
                  <span>Plan</span>
                  <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      <div class="text_box w-100 text-center">
                        <img
                          src="./images/check_icon_2.png"
                          class="mx-auto text-center"
                          alt=""
                        />
                        <h5 class="mt-4 mb-4 pb-2">
                          Unlimited Admins and Voulentaries
                        </h5>
                      </div>
                    </li>
                  </ul>

                  <a href="#" class="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="mainbox pt-5">
                <Link to="/organisation" class="button d-inline py-3 px-4">
                  Become a Organisation Manager
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Swim Clubs around the world  */}

      <section class="trusted">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9">
              <h2>Trusted by Swim Clubs around the world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum ultricies ipsum libero vel sem.
              </p>
            </div>

            <Owldemo3 />
          </div>
        </div>
      </section>

      <section className="testimonials text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h3>Testimonials</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum .
              </p>
            </div>
          </div>
          <Owldemo2 />
        </div>
      </section>

      <section class="faq">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9">
              <h4>FAQ’s</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum .
              </p>
            </div>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="row">
              <div class="col-md-6">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading01">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse01"
                      aria-expanded="false"
                      aria-controls="flush-collapse01"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse01"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-heading01"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading02">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse02"
                      aria-expanded="false"
                      aria-controls="flush-collapse02"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse02"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading02"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading03">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse03"
                      aria-expanded="false"
                      aria-controls="flush-collapse03"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse03"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading03"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading04">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse04"
                      aria-expanded="false"
                      aria-controls="flush-collapse04"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse04"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading04"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading05">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse05"
                      aria-expanded="false"
                      aria-controls="flush-collapse05"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse05"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading05"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading06">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse06"
                      aria-expanded="false"
                      aria-controls="flush-collapse06"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse06"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading06"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading07">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse07"
                      aria-expanded="false"
                      aria-controls="flush-collapse07"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse07"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading07"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading08">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse08"
                      aria-expanded="false"
                      aria-controls="flush-collapse08"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse08"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading08"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading09">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse09"
                      aria-expanded="false"
                      aria-controls="flush-collapse09"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse09"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading09"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading10">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse10"
                      aria-expanded="false"
                      aria-controls="flush-collapse10"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse10"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading10"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading11">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse11"
                      aria-expanded="false"
                      aria-controls="flush-collapse11"
                    >
                      What days of the week will you be doing storage pickups
                      during move out week?
                      <span class="accordion_icon">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapse11"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading11"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We will be picking up 7 days a week during peak move out
                      times, which are generally the week of finals and one week
                      after that.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pricing;
