import React, { useState, useEffect } from "react";
import Slider from "../include/slider";
import Owldemo1 from "../include/Owldemo1";
import Owldemo2 from "../include/Owldemo2";
const axios = require("axios").default;

const Home_login = (props) => {
  return (
    <>
      <Slider />
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h2 className="title theme_text_color">About Us</h2>
              <h5>Volunteer Management for Sporting Federations</h5>
              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem ipsum dolor, sit amet.</li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem ipsum dolor, sit amet consectetur.</li>
              </ul>

              <a href="#" className="button text-white theme_bgcolor">
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 ms-auto">
              <img src="./images/dugger.png" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mhy_up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="text text-center text-white fw-bold">
                See why up to 18 million people per month organize events and
                volunteers with SignUpGenius.
              </p>
              <div className="card_img">
                <img src="./images/see_img.png" className="bg_img" alt="" />
                <a href="#">
                  <img src="./images/play_icon.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <secton className="sport_gallery py-5 ">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-11">
              <h3>
                <span> One </span> Site to Organize ... Everything.
              </h3>
              <h3>That's Genius!</h3>
              <h2>Create Your Sport Event With The Same Sport</h2>
            </div>
          </div>
          <div className="row justify-content-end g-0 mt-5">
            <div className="col-lg-5">
              <div className="img_box active">
                <img src="./images/gallery01.png" alt="" />
                <a href="#">Swimming</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img_box">
                <img src="./images/gallery02.png" alt="" />
                <a href="#">Football</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img_box">
                <img src="./images/gallery03.png" alt="" />
                <a href="#">Handball</a>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="img_box">
                <img src="./images/gallery04.png" alt="" />
                <a href="#">Baseball</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img_box">
                <img src="./images/gallery05.png" alt="" />
                <a href="#">Volleyball</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img_box">
                <img src="./images/gallery06.png" alt="" />
                <a href="#">Hockey</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img_box">
                <img src="./images/gallery07.png" alt="" />
                <a href="#">Cricket</a>
              </div>
            </div>
          </div>
        </div>
      </secton>

      <section className="app_cloud py-5">
        <div className="container">
          <h2 className="mb-4">This App Could Also be Used For</h2>
          <Owldemo1 />
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

      <section className="prem_plan text-center">
        <div className="container">
          <h2 className="mb-4 w-50 mx-auto"> Become a Organisation Manager</h2>
          {/* <!-- <small className="fw-normal">Ideal for coordinators at schools, nonprofits, small businesses and more.</small> --> */}
          <div className="row mt-5 gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="plan_card">
                <div className="sidebox">
                  <h3>$50.00/Year</h3>
                </div>
                <div className="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 className="mt-4">Basic</h2>
                  <span>Plan</span>
                  <ul className="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                      <div className="text_box">
                        <h5>1 Admin</h5>
                        <p>(the person who pays for the app)</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                      <div className="text_box">
                        <h5>30 voulentaris</h5>
                        <p>(people who the admin add)</p>
                      </div>
                    </li>
                  </ul>

                  <a href="#" className="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan_card blue_bg">
                <div className="sidebox">
                  <h3>$300.00/Year</h3>
                </div>
                <div className="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 className="mt-4">Standard</h2>
                  <span>Plan</span>
                  <ul className="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                      <div className="text_box">
                        <h5>2 Admin</h5>
                        <p>&nbsp;</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                      <div className="text_box">
                        <h5>250 voulentaris</h5>
                        <p>&nbsp; </p>
                      </div>
                    </li>
                  </ul>

                  <a href="#" className="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="plan_card green_bg">
                <div className="sidebox">
                  <h3>$24.90</h3>
                </div>
                <div className="mainbox rounded-5 pt-4 pb-5">
                  <small>One Time Payment</small>
                  <h2 className="mt-4">Premium</h2>
                  <span>Plan</span>
                  <ul className="text-start  p-xxl-5 p-lg-3 p-2 ">
                    <li>
                      <div className="text_box w-100 text-center">
                        <img
                          src="./images/check_icon_2.png"
                          className="mx-auto text-center"
                          alt=""
                        />
                        <h5 className="mt-4 mb-4 pb-2">
                          Unlimited Admins and Voulentaries
                        </h5>
                      </div>
                    </li>
                  </ul>

                  <a href="#" className="button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#" className="chat_icon">
        <img src="./icon/chat_icon.png" alt="" />
      </a>
    </>
  );
};
export default Home_login;
