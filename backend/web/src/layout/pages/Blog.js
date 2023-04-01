import React, { useState, useEffect } from "react";
const axios = require("axios").default;

const Blog = (props) => {
  return (
    <>
      <section className="inner_benner">
        <h2>Blog</h2>
        <p>Home / Blog</p>
      </section>
      <section>
        <div className="container">
          <div className="main">
            <div id="myBtnContainer" className="filter_btn text-center">
              <button
                className="btn active_btn"
                onclick="filterSelection('all')"
              >
                All
              </button>
              <button className="btn" onclick="filterSelection('events')">
                {" "}
                Events Tips
              </button>
              <button className="btn" onclick="filterSelection('features')">
                {" "}
                Features Tips
              </button>
              <button className="btn" onclick="filterSelection('inspiration')">
                {" "}
                Inspiration
              </button>
              <button className="btn" onclick="filterSelection('news')">
                {" "}
                News
              </button>
            </div>

            {/* <!-- Portfolio Gallery Grid --> */}
            <div className="row">
              <div className="blog_box col-12 events show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img04.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 features show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img05.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 inspiration show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img02.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 inspiration show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img03.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 news show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img05.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 news show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img03.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_box col-12 news show">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog_images my-3">
                        <img src="./images/blog_img04.png" alt="" />
                        <img
                          className="blog_subimg"
                          src="./images/blog_subimg.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 blog_content">
                      <div>
                        <span>Laura Dallas March 28, 2022</span>
                        <h3>6 Sign Up Features and Benefits for Sports</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem{" "}
                        </p>

                        <div className="blog_icons">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="w-75" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- END GRID --> */}
            </div>

            {/* <!-- END MAIN --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
