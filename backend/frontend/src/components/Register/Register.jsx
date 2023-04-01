import React from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../Config/Config";
import logo from "../../images/Logo.png";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    isApproved: false,
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handelValidation()) {
      await baseUrl
        .post("/api/users/register", data)
        .then((res) => {
          if (res.data.status === 201) {
            toast.success(" Event manager created succcessfully", toastOptions);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };

  const handelValidation = () => {
    const { email, password, confirmPassword, mobile } = data;
    if (!email && !password && !confirmPassword && !mobile) {
      toast.error("All field is mandatory", toastOptions);
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
    } else if (!mobile) {
      toast.error("The mobile field is mandatory", toastOptions);
      return false;
    }
    return true;
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper bg_login d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src={logo} alt={logo} />
                  </div>
                  <h4>New here?</h4>
                  <h6 className="font-weight-light">
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <Form
                    className="pt-3"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter User Name"
                        className="form-control form-control-lg"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter User Email"
                        className="form-control form-control-lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        className="form-control form-control-lg"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                      />
                      <i
                        onClick={togglePasswordVisiblity}
                        className={
                          showPassword
                            ? "fa fa-eye customClass eye_btn"
                            : "fa fa-eye-slash customClass eye_btn"
                        }
                        aria-hidden="true"
                      ></i>
                    </Form.Group>

                    <Form.Group
                      className="mb-3 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        className="form-control form-control-lg"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      <i
                        onClick={togglePasswordVisiblity}
                        className={
                          showPassword
                            ? "fa fa-eye customClass eye_btn"
                            : "fa fa-eye-slash customClass eye_btn"
                        }
                        aria-hidden="true"
                      ></i>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        className="form-control form-control-lg"
                        name="mobile"
                        type="mobile"
                        placeholder="Enter Phone Number"
                      />
                    </Form.Group>

                    <div className="mt-3">
                      <Button type="submit">SIGN UP</Button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account? <Link to="/">Login </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </div>
  );
}

export default Register;
