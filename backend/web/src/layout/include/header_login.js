import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Header2 = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5010/api/register/profile`).then((res) => {
      console.log(res.data, "+++++++++++");
    });
  }, []);

  return (
    <>
      <header>
        <div className="nav_position">
          <div className="topbar top_bg py-2 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-end align-items-center gap-2">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        className="rounded-circle me-2"
                        width="32"
                        height="32"
                      />
                      <strong>
                        John Marker <br />
                        <small className="m-0 fw-normal d-flex justify-content-between align-items-end w-100">
                          Profile
                          <i className="fa-solid fa-angle-down float-end"></i>
                        </small>
                      </strong>
                    </a>
                    <div className="dropdown-menu text-small shadow">
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            My Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg">
            <div className="container align-items-lg-center">
              <Link className="navbar-brand" to="/">
                <img src="./images/logo.png" alt="" />
              </Link>
              <div className="topbar top_bg py-2 d-lg-none ">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center gap-2">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt=""
                            className="rounded-circle me-2"
                            width="32"
                            height="32"
                          />
                          <strong>
                            John Marker <br />
                            <small className="m-0 fw-normal d-flex justify-content-between align-items-end w-100">
                              Profile
                              <i className="fa-solid fa-angle-down float-end"></i>
                            </small>
                          </strong>
                        </a>
                        <div className="dropdown-menu text-small shadow">
                          <ul>
                            <li>
                              <Link className="dropdown-item" to="/dashboard">
                                My Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/profile">
                                My Profile
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/">
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars-staggered"></i>
              </button>

              <div
                className="collapse navbar-collapse d-blocks"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/features">
                      Features{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pricing">
                      Pricing{" "}
                    </Link>
                  </li>
                  <li className="nav-item dropdown tip_drop">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resources & Tips{" "}
                    </a>
                    <div className="dropdown-menu text-small shadow">
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="about">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="faq">
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/help">
                            Help
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Resources & Tips{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="blog">
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header2;
