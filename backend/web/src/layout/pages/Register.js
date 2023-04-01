import React from "react";
import { useState } from "react";
// import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { baseUrl } from "../../config/config";
import axios from "axios";
import Footer from "../include/footer";
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    acceptTerms: "",
    password: "",
    confirmPassword: "",
    isApproved: false,
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handelValidation()) {
      // await baseUrl
      axios
        .post("http://65.2.68.95:5010/api/user/register", data)
        .then((res) => {
          if (res.data.status === 201) {
            toast.success(" User registered succcessfully", toastOptions);
            // navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };

  const handelValidation = () => {
    const {
      name,
      email,
      mobile,
      organization,
      password,
      confirmPassword,
      acceptTerms,
    } = data;
    if (
      (!name,
      !email &&
        !password &&
        !confirmPassword &&
        !organization &&
        !mobile &&
        !acceptTerms)
    ) {
      toast.error("All field is mandatory", toastOptions);
      return false;
    } else if (!name) {
      toast.error("The name field is mandatory", toastOptions);
      return false;
    } else if (!email) {
      toast.error("The email field is mandatory", toastOptions);
      return false;
    } else if (!password) {
      toast.error("The password field is mandatory", toastOptions);
      return false;
    } else if (!organization) {
    } else if (!confirmPassword) {
      toast.error("The confirmPassword field is mandatory", toastOptions);
      return false;
    } else if (!organization) {
      toast.error("The organization field is mandatory", toastOptions);
      return false;
    } else if (!mobile) {
      toast.error("The mobile field is mandatory", toastOptions);
      return false;
    } else if (!acceptTerms) {
      toast.error("The acceptTerms field is mandatory", toastOptions);
      return false;
    }
    return true;
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisiblity = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <section className="inner_benner">
        <h2>Register</h2>
        <p>Home / Register</p>
      </section>
      <section className="registeration_form" id="registeration_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 md-offset-2">
              <form onSubmit={handleSubmit}>
                <h2>Registeration Details</h2>
                <p>
                  Create an account and get a 14 day free trial, no credit card
                  required.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Name*"
                        name="name"
                        // value={values.name}
                        autofocus
                        onChange={handleChange}
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Email*"
                        name="email"
                        // value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Phone Number*"
                        name="mobile"
                        // value={values.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Organization name"
                        name="organization"
                        // value={values.organization}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder=" Password"
                        // value={values.password}
                        name="password"
                        onChange={handleChange}
                      />
                      <i
                        onClick={togglePasswordVisiblity}
                        className={
                          showPassword
                            ? "fa fa-eye customClass eye_btn"
                            : "fa fa-eye-slash customClass eye_btn"
                        }
                        aria-hidden="true"
                        style={{ marginLeft: 8 }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type={showConfirmPassword ? "text" : "Password"}
                        className="form-control"
                        placeholder=" Confirm password"
                        // value={values.password}
                        name="confirmPassword"
                        onChange={handleChange}
                      />{" "}
                      <i
                        onClick={toggleConfirmPasswordVisiblity}
                        className={
                          showConfirmPassword
                            ? "fa fa-eye customClass eye_btn"
                            : "fa fa-eye-slash customClass eye_btn"
                        }
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="need_help">
                  <div className="remember">
                    Need help? You can review{" "}
                    <span className="theme_text_color">
                      {" "}
                      plans and pricing here
                    </span>{" "}
                  </div>
                  <div className="remember">
                    <input
                      type="checkbox"
                      id="flexCheckDefault"
                      name="acceptTerms"
                      onChange={handleChange}
                    />
                    <label for="flexCheckDefault" className="m-0">
                      Check here to agree to our{" "}
                    </label>{" "}
                    <Link to="/termsandcondition" className="theme_text_color">
                      {" "}
                      terms &amp; conditions
                    </Link>
                  </div>
                </div>

                <div className="col-md-12 submit">
                  {/* <input type="submit" className="fw-normal" value="Sign Up" /> */}
                  <button type="submit" className="fw-normal">
                    Register
                  </button>
                  <p>
                    {" "}
                    <Link
                      href=""
                      className="remember justify-content-center mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      data-dismiss="modal"
                    >
                      {" "}
                      Already a member? Sign In{" "}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
