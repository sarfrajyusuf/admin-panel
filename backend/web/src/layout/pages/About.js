import React, { useState, useEffect } from "react";
import Owldemo2 from "../include/Owldemo2";
const axios = require("axios").default;

const About = (props) => {
  return (
    <>
      <section class="inner_benner">
        <h2>About Us</h2>
        <p>Home / About Us</p>
      </section>

      <section class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              <h2 class="title theme_text_color">About Us</h2>
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
            </div>
            <div class="col-lg-4 col-md-6 ms-auto">
              <img src="./images/dugger.png" class="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div class="about_us">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="about_img">
                <img class="" src="./images/dugger06.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum ultricies ipsum libero vel sem. Integer rutrum risus
                lorem, vitae ornare dui ullamcorper eu. Maecenas nisi erat,
                ornare ac blandit et, scelerisque in urna. Nullam pretium
                faucibus condimentum. Nam at ex metus.
              </p>
              <p>
                Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                posuere pharetra lectus, a lobortis leo congue in. Quisque
                ullamcorper, lorem tincidunt molestie sollicitudin, nibh leo
                viverra enim, quis commodo metus nulla vitae metus. Etiam
                elementum tellus sit amet dolor pharetra consectetur. Etiam
                gravida lobortis dapibus. Nam sagittis orci eros, at eleifend
                ante tincidunt vitae. Praesent accumsan iaculis augue, at
                gravida sapien. Quisque pretium ex at urna luctus, non vehicula
                nisi placerat. Aenean lobortis non turpis at rutrum. Mauris
                posuere aliquet tellus, pharetra pharetra nunc. Pellentesque eu
                suscipit ante.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum ultricies ipsum libero vel sem.
              </p>
              <p>
                Integer rutrum risus lorem, vitae ornare dui ullamcorper eu.
                Maecenas nisi erat, ornare ac blandit et, scelerisque in urna.
                Nullam pretium faucibus condimentum. Nam at ex metus. Phasellus
                egestas metus sed nibh tempus laoreet. Curabitur posuere
                pharetra lectus, a lobortis leo congue in. Quisque ullamcorper,
                lorem tincidunt molestie sollicitudin, nibh leo viverra enim,
                quis commodo metus nulla vitae metus.{" "}
              </p>
              <p>
                Etiam elementum tellus sit amet dolor pharetra consectetur.
                Etiam gravida lobortis dapibus. Nam sagittis orci eros, at
                eleifend ante tincidunt vitae. Praesent accumsan iaculis augue,
                at gravida sapien. Quisque pretium ex at urna luctus, non
                vehicula nisi placerat. Aenean lobortis non turpis at rutrum.
                Mauris posuere aliquet tellus, pharetra pharetra nunc.
                Pellentesque eu suscipit ante.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum ultricies ipsum libero vel sem. Integer rutrum risus
                lorem, vitae ornare dui ullamcorper eu.{" "}
              </p>
              <p>
                Maecenas nisi erat, ornare ac blandit et, scelerisque in urna.
                Nullam pretium faucibus condimentum. Nam at ex metus. Phasellus
                egestas metus sed nibh tempus laoreet. Curabitur posuere
                pharetra lectus, a lobortis leo congue in. Quisque ullamcorper,
                lorem tincidunt molestie sollicitudin, nibh leo viverra enim,
                quis commodo metus nulla vitae metus
              </p>
            </div>
            <div class="col-12 mt-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum, magna non semper feugiat, dolor eros dictum nisi,
                vestibulum ultricies ipsum libero vel sem. Integer rutrum risus
                lorem, vitae ornare dui ullamcorper eu. Maecenas nisi erat,
                ornare ac blandit et, scelerisque in urna. Nullam pretium
                faucibus condimentum. Nam at ex metus.
              </p>
              <p>
                Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                posuere pharetra lectus, a lobortis leo congue in. Quisque
                ullamcorper, lorem tincidunt molestie sollicitudin, nibh leo
                viverra enim, quis commodo metus nulla vitae metus. Etiam
                elementum tellus sit amet dolor pharetra consectetur. Etiam
                gravida lobortis dapibus. Nam sagittis orci eros, at eleifend
                ante
              </p>
            </div>
          </div>
        </div>
      </div>
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
export default About;
