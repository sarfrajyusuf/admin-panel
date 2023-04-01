import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN, FORGOTPASSWORD } from "../../services/AuthApi";
import "react-toastify/dist/ReactToastify.css";
// import { baseUrl } from "../../config/config";
import axios from "axios";

const Footer = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    isApproved: false,
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  //handlechange event

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //otp send
  // const handleForgetPassword = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const res = await FORGOTPASSWORD(values);
  //     console.log(res, "===================");
  //     if (res?.data?.success === true) {
  //     }
  //     navigate();
  //     console.log(forgotPassword, "send email");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //handlesubmit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handelValidation()) {
      // await baseUrl
      axios
        .post("http://65.2.68.95:5010/api/user/login", data)
        .then((res) => {
          if (res.data.status === 200) {
            // console.log(res.data,'====================')
            const Token = res.data.body;

            setData(res.data.body);
            console.log(res.data.body);
            localStorage.setItem("token", JSON.stringify(Token));
            toast.success(" User login succcessfully", toastOptions);
            document.getElementById("btnclose").click();
            // navigate("/dashboard");

            // window.location.reload("/dashboard");
            // window.close();
          }
        })
        //   if (res.data.status === 200) {
        // })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };
  const handelValidation = () => {
    const { email, password } = data;
    if (!email && !password) {
      toast.error("All field is mandatory", toastOptions);
      return false;
    } else if (!email) {
      toast.error("The email field is mandatory", toastOptions);
      return false;
    } else if (!password) {
      toast.error("The password field is mandatory", toastOptions);
      return false;
    }
    return true;
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {/*------------Page Footer Start ------------------*/}

      <footer>
        <div className="footer_head border-top border-bottom py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Ready to use Duger? Join Our Newsletter</h2>
              </div>
              <div className="col-md-6 mx-auto">
                <form action="./pricing.html" className="ms-auto">
                  <div className="form-group subnow">
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_body py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li className="theme_text_color">FEATURES</li>
                  <li>
                    <Link to="#"> Events</Link>
                  </li>
                  <li>
                    <Link to="#"> Groups</Link>
                  </li>
                  <li>
                    <Link to="#"> Duger Club</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="theme_text_color">Duger</li>
                  <li>
                    <Link to="/about"> About Duger</Link>
                  </li>
                  <li>
                    <Link to="/contact"> Contact us</Link>
                  </li>
                  <li>
                    <Link to="/faq"> FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="theme_text_color">RESOURCES</li>
                  <li>
                    <Link to="/help"> Help Center</Link>
                  </li>
                  <li>
                    <Link to="/"> Help Center Club</Link>
                  </li>
                  <li>
                    <Link to="/"> App Store</Link>
                  </li>
                  <li>
                    <Link to="/"> Google Play</Link>
                  </li>
                  <li>
                    <Link to="/"> Status</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="theme_text_color">Address</li>
                  <li>
                    <Link to="#"> info@duger.com</Link>
                  </li>
                  <li>
                    <Link> Contact Us</Link>
                  </li>
                  <h4 className="theme_text_color fw-bold">+1 123 595 876</h4>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom border-top py-4">
          <p>© 2023 duger. All Rights Reserved.</p>
        </div>
      </footer>

      <div
        className="modal fade login_model"
        id="login"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="btnclose"
              >
                <span aria-hidden="true">
                  <i className="fa fa-close"></i>
                </span>
              </button>
              <div className="row">
                <div className="col-md-6 signin  d-md-block d-none">
                  <img src="./images/signin.png" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="form_login text-center">
                    <img
                      src="./images/logo.png"
                      width=""
                      className="logo"
                      alt=""
                    />
                    <h6 className="modal_heading">Sign in</h6>

                    <form className="text-left">
                      <div className="form-group">
                        {/* <!-- <label for="recipient-name" className="col-form-label">Email</label> --> */}
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Email*"
                          name="email"
                          required
                          autofocus
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group password_eye">
                        {/* <!-- <label for="message-text" className="col-form-label">Password</label> --> */}
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="recipient-name"
                          placeholder="Password*"
                          required
                          name="password"
                          onChange={handleChange}
                        />{" "}
                        <i
                          onClick={togglePasswordVisiblity}
                          className={
                            showPassword
                              ? "fa fa-eye customClass eye_btn"
                              : "fa fa-eye-slash customClass eye_btn"
                          }
                          style={{ marginLeft: 8 }}
                          aria-hidden="true"
                        ></i>
                        <i className="icofont-eye"></i>
                      </div>

                      <div className="form-group">
                        <div className="row mt-2 mb-2">
                          <div className="col">
                            <div className="remember">
                              <input type="checkbox" id="remember" />
                              <label for="remember" className="m-0">
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="remember text-end">
                              <Link
                                to=""
                                className=""
                                data-bs-toggle="modal"
                                data-bs-target="#forgot"
                                data-dismiss="modal"
                              >
                                {" "}
                                Forgot Password?{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* <button
                          className="btn_blue w-100 text-center mb-3"
                          onClick={handleSubmit}
                        >
                          Sign In
                        </button> */}
                        <Link
                          // to="./index_after_login.html"
                          className="btn_blue w-100 text-center mb-3"
                          onClick={handleSubmit}
                        >
                          Sign In
                        </Link>
                      </div>
                      <div className="or">Or</div>
                      <div className="form-group mt-1 not_account text-center ">
                        <span className="w-100 ">
                          <Link
                            to=""
                            data-bs-toggle="modal"
                            data-bs-target="#register"
                            data-dismiss="modal"
                          >
                            Not a member? Create Account
                          </Link>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade login_model"
        id="forgot"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-close"></i>
                </span>
              </button>
              <div className="row">
                <div className="col-md-6 signin  d-md-block d-none">
                  <img src="./images/signin.png" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="form_login text-center">
                    <img src="./images/logo.png" className="logo" alt="" />
                    <h6 className="modal_heading my-4">Forgot Password</h6>

                    <form className="text-left">
                      <div className="form-group">
                        {/* <!-- <label for="recipient-name" className="col-form-label">Email</label> --> */}
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Enter Email"
                          required
                          autofocus
                        />
                      </div>

                      <div className="form-group">
                        <Link
                          to=""
                          className="btn_blue w-100 text-center mb-5"
                          // onClick={handleForgetPassword}
                        >
                          {" "}
                          Send
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      {/* <!-- done Modal --> */}
      <div
        className="modal fade login_model done_modal"
        id="done"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog d-flex align-items-center h-100 modal-sm"
          role="document"
        >
          <div className="modal-content bg-transparent mx-auto border-0">
            <div className="modal-body p-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-close"></i>
                </span>
              </button>
              <div className="row">
                <div className="col-md-12">
                  <div className="cards text-center py-5 bg-white">
                    <img src="./images/done.png" className="done_img" alt="" />

                    <p>
                      Your registration details has been sent successfully.
                      Please wait for approving from admin.
                    </p>
                    <Link
                      to="/organisation"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn  text-decoration-none text-white mx-auto mb-4"
                    >
                      OK
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- done Modal --> */}

      <div
        className="modal fade login_model"
        id="forgot"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-close"></i>
                </span>
              </button>
              <div className="row">
                <div className="col-md-6 signin d-md-block d-none">
                  <img src="./images/signin.png" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="form_login text-center">
                    <img src="./images/logo.png" className="logo" alt="" />
                    <h6 className="modal_heading my-4">Forgot Password</h6>

                    <form className="text-left">
                      <div className="form-group">
                        {/* <!-- <label for="recipient-name" className="col-form-label">Email</label> --> */}
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="form-group">
                        <Link
                          to="index_login.html"
                          className="btn_blue w-100 text-center mb-5"
                        >
                          {" "}
                          Send
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
