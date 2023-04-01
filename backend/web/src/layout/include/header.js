import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Header = (props) => {
  /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    } */

  const [data1, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://api.github.com/users/moonhighway")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const logInSubmit = async (e) => {
    e.preventDefault();
    const logInData = { email, name, password };
    try {
      const { email, name, password } = logInData;
      const response = await fetch("http://localhost:3001/user/logInUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.msg, "jaspreet singh");
          if (responseJson.succusses === true) {
            localStorage.setItem("token", JSON.stringify(responseJson.msg));
            localStorage.setItem("name", JSON.stringify(responseJson?.name));
            Swal.fire("Good job!", "You Are Login success!", "success");
            window.location.href = "contact";
          } else {
            Swal.fire("Incorrect Username or Password", "You failed!", "error");
          }
        });
    } catch (e) {
      console.log("Error", e.response.data);
      return e;
    }
    console.log(email);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return (
    <>
      {/*------------Page Header Start ------------------*/}
      <header>
        <div className="nav_position">
          <nav className="navbar navbar-expand-lg">
            <div className="container align-items-lg-end">
              <Link className="navbar-brand" to="/">
                <img src="./images/logo.png" alt="" />
              </Link>
              <div className="topbar py-2 d-lg-none">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center gap-2">
                      <Link to="/register" className="btn active rounded-pill">
                        Sign Up
                      </Link>
                      <a
                        href=""
                        className="btn rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
                      >
                        Sign In
                      </a>
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
                <div className="topbar pb-3 d-none d-lg-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end align-items-center gap-2">
                        <Link
                          to="/register"
                          className="btn active rounded-pill"
                        >
                          Sign Up
                        </Link>
                        <a
                          href=""
                          className="btn rounded-pill"
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
                  {/* <li className="nav-item">
                                <Link className="nav-link" to="/">Resources & Tips </Link>
                            </li> */}
                  <li class="nav-item dropdown tip_drop">
                    <Link
                      class="nav-link dropdown-toggle "
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resources &amp; Tips{" "}
                    </Link>
                    <div class="dropdown-menu text-small shadow ">
                      <ul>
                        <li>
                          <Link class="dropdown-item" to="./about">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="./faq">
                            FAQ’s
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="./help">
                            Help
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
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
export default Header;
