import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios").default;

//validation

const Organisation = (props) => {
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let formData = new FormData();
  const [imgData, setImgData] = useState();
  const [showPassword, setShowPassword] = useState();
  const [data, setData] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imgData == null || undefined) {
      toast.error("Please select image", toastOptions);
      return;
    }
    if (handelValidation()) {
      // formData.append("createdByUser", data.createdByUser);
      formData.append("name", data.name);
      formData.append("organizationName", data.organizationName);
      formData.append("email", data.email);
      formData.append("organizationAddress", data.organizationAddress);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);

      formData.append("image", imgData);

      axios
        .post(
          "http://65.2.68.95:5010/api/organization/createOrganization",
          formData
        )
        .then((res) => {
          if (res.data.status === 201) {
            navigate("/dashboard");
            toast.success("Manager register succcessfully", toastOptions);
            setData("");
            setImgData("");
          }
        })
        .catch((err) => {
          console.log(err, "======================err");
          toast.error(err.response.message, toastOptions);
        });
    }
  };

  const handelValidation = () => {
    const {
      name,
      organizationName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      acceptTerms,
    } = data;
    if (password !== confirmPassword) {
      toast.error("password and confirmPassword not same", toastOptions);
      return false;
    }
    if (
      (!name,
      !email &&
        !password &&
        !confirmPassword &&
        !organizationName &&
        !phoneNumber &&
        acceptTerms)
    ) {
      toast.error("All field is mandatory", toastOptions);
      return false;
    } else if (!name) {
      toast.error("The name field is mandatory", toastOptions);
      return false;
    } else if (!organizationName) {
      toast.error("The organizationName field is mandatory", toastOptions);
      return false;
    } else if (!phoneNumber) {
      toast.error("The phoneNumber field is mandatory", toastOptions);
      return false;
    } else if (!email) {
      toast.error("The email field is mandatory", toastOptions);
      return false;
    } else if (!password) {
      toast.error("The password field is mandatory", toastOptions);
      return false;
    } else if (!confirmPassword) {
      toast.error("The confirmPassword field is mandatory", toastOptions);
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
  // const handleChange = (e) => {
  //   console.log(e, "eeeeeeeeeeee");
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  // image upload
  const imageUploader = (e) => {
    setImgData(e.target.files[0]);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (imgData == null || undefined) {
  //     toast.error("Please select image", toastOptions);
  //     return;
  //   }
  //   if (handelValidation()) {
  //     // await baseUrl
  //     axios
  //       .post("http://localhost:5010/api/organization/createOrganization", data)
  //       .then((res) => {
  //         setImgData("");
  //         setData("");
  //         if (res.data.status === 201) {
  //           toast.success("Manager register succcessfully", toastOptions);
  //           // navigate("/");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         toast.error(err.response.data.message, toastOptions);
  //       });
  //   }
  // };

  return (
    <>
      <section className="inner_benner">
        <h2>Organisation Sign Up</h2>
        <p>Home / Pricing / Organisation Sign Up</p>
      </section>
      <section className="registeration_form" id="registeration_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 md-offset-2">
              <form action="./home_after_login.html" className="registeration">
                <h2 className="w-50 mx-auto mb-5">
                  Organisation Registeration Details
                </h2>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder=" Name*"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="organizationName"
                        className="form-control"
                        placeholder=" Organisation Name*"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <div className="form-group mb-3">
                        <input
                          type="file"
                          id="up"
                          placeholder="Organisation Logo"
                          className="form-control d-none"
                          name="image"
                          accept="image/*"
                          onChange={(e) => imageUploader(e)}
                        />
                        <label for="up" className="form-control">
                          Organisation Logo
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group phone mb-3">
                      <select name="" id="" className="form-select">
                        <option value="">+1</option>
                        <option value="">+23</option>
                        <option value="">+56</option>
                      </select>
                      <input
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number*"
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
                        name="email"
                        className="form-control"
                        placeholder=" Organization Email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="organizationAddress"
                        className="form-control"
                        placeholder="Organisation Addresss"
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
                        name="password"
                        className="form-control"
                        placeholder=" Password"
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
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        className="form-control"
                        placeholder=" Confirm Password"
                        onChange={handleChange}
                      />
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
                    <input
                      type="checkbox"
                      id="agree"
                      name="acceptTerms"
                      onChange={handleChange}
                    />
                    <label for="agree">Check here to agree to our</label>{" "}
                    <Link to="/termsandcondition" className="theme_text_color">
                      {" "}
                      terms &amp; conditions
                    </Link>
                  </div>
                </div>

                <div className="col-md-12 submit">
                  <button
                    type="button"
                    className="fw-normal"
                    // data-bs-toggle="modal"
                    // data-bs-target="#done"
                    // data-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                  <p>
                    {" "}
                    <a
                      href=""
                      className="remember"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      data-dismiss="modal"
                    >
                      {" "}
                      Already a member? Sign In{" "}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Organisation;
