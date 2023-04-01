import React, { useState, useEffect } from "react"; 
import Owldemo1 from "../include/Owldemo1";
const axios = require('axios').default;



const Features = (props) => {

  
  return (
    <>

<section class="inner_benner">
            <h2>Features</h2>
            <p>Home / Features</p>

        </section>
        <section class="sport_features py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-8 text-center">
                    <h2>
                        Duger makes it easy to organise all kinds of events
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="img_circle">
                        <img src="./images/img_circle.png" alt="" />
                        <img src="./images/sub_img_circle.png" class="sub_img" alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>All the flexibility you need</h3>
                    <ul>
                        <li>
                            <h4>
                                Create Your Sport Event
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <h4>
                                Recurring events designed for practices
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <h4>
                                Schedule the season
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="sport_features py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-8 text-center">
                    <h2>
                        Duger makes it easy to organise all kinds of events
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="img_circle">
                        <img src="./images/img_circle.png" alt="" />
                        <img src="./images/sub_img_circle.png" class="sub_img" alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>All the flexibility you need</h3>
                    <ul>
                        <li>
                            <h4>
                                Create Your Sport Event
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <h4>
                                Recurring events designed for practices
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <h4>
                                Schedule the season
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <secton class="sport_gallery py-5 ">
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-md-11">
                    <h3>
                        <span> One </span> Site to Organize ... Everything.
                    </h3>
                    <h3>That's Genius!</h3>
                    <h2>
                        Create Your Sport Event With The Same Sport
                    </h2>
                </div>
            </div>
            <div class="row justify-content-end g-0 mt-5">
                <div class="col-lg-5">
                    <div class="img_box active">
                        <img src="./images/gallery01.png" alt="" />
                        <a href="#">
                            Swimming
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="img_box">
                        <img src="./images/gallery02.png" alt="" />
                        <a href="#">
                            Football    
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="img_box">
                        <img src="./images/gallery03.png" alt="" />
                        <a href="#">
                            Handball
                        </a>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="img_box">
                        <img src="./images/gallery04.png" alt="" />
                        <a href="#">
                            Baseball
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="img_box">
                        <img src="./images/gallery05.png" alt="" />
                        <a href="#">
                            Volleyball
                        </a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="img_box">
                        <img src="./images/gallery06.png" alt="" />
                        <a href="#">
                            Hockey
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="img_box">
                        <img src="./images/gallery07.png" alt="" />
                        <a href="#">
                            Cricket
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </secton>

    <section className="app_cloud py-5">
        <div className="container">
            <h2 className="mb-4">
                This App Could Also be Used For
            </h2>
            <Owldemo1/> 

        </div>
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
                            <small>
                                One Time Payment
                            </small>
                            <h2 class="mt-4">
                                Basic
                            </h2>
                            <span>
                                Plan
                            </span>
                            <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                                <li> <i class="fa-solid fa-check"></i>
                                    <div class="text_box">
                                        <h5>1 Admin</h5>
                                        <p>(the person who pays for the app)</p>
                                    </div>
                                </li>
                                <hr />
                                <li> <i class="fa-solid fa-check"></i>
                                    <div class="text_box">
                                        <h5>30 voulentaris</h5>
                                        <p>(people who the admin add)</p>
                                    </div>
                                </li>
                            </ul>

                            <a href="#" class="button">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="plan_card blue_bg">
                        <div class="sidebox">
                            <h3>$300.00/Year</h3>
                        </div>
                        <div class="mainbox rounded-5 pt-4 pb-5">
                            <small>
                                One Time Payment
                            </small>
                            <h2 class="mt-4">
                                Standard
                            </h2>
                            <span>
                                Plan
                            </span>
                            <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                                <li> <i class="fa-solid fa-check"></i>
                                    <div class="text_box">
                                        <h5>2 Admin</h5>
                                        <p>&nbsp;</p>
                                    </div>
                                </li>
                                <hr />
                                <li> <i class="fa-solid fa-check"></i>
                                    <div class="text_box">
                                        <h5>250 voulentaris</h5>
                                        <p>&nbsp; </p>
                                    </div>
                                </li>
                            </ul>

                            <a href="#" class="button">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <div class="plan_card green_bg">
                        <div class="sidebox">
                            <h3>$24.90</h3>
                        </div>
                        <div class="mainbox rounded-5 pt-4 pb-5">
                            <small>
                                One Time Payment
                            </small>
                            <h2 class="mt-4">
                                Premium
                            </h2>
                            <span>
                                Plan
                            </span>
                            <ul class="text-start  p-xxl-5 p-lg-3 p-2 ">
                                <li>
                                    <div class="text_box w-100 text-center">
                                       <img src="./images/check_icon_2.png" class="mx-auto text-center" alt="" />
                                       <h5 class="mt-4 mb-4 pb-2">Unlimited Admins and Voulentaries</h5>
                                    </div>
                                </li>
                            </ul>

                            <a href="#" class="button">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}
export default Features;

