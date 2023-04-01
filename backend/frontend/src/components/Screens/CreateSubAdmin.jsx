import React from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../Config/Config";
import logo from "../../images/Logo.png";

function CreateSubAdmin() {
  const navigate = useNavigate();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  // console.log(, "======================admin");

  const [data, setData] = useState({
    managerId: adminInfo?.userExist?._id,
    isAdmin: true,
    isApprove: true,
    planType: adminInfo?.userExist.planType,
    planPurchase: true,
    role: adminInfo?.userExist.role,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
        .post("/api/users/createSubAdmin", data, {
          headers: {
            authorization: `Bearer ${adminInfo?.token}`,
          },
        })
        .then((res) => {
          if (res.data.status === 201) {
            toast.success("User Created Successfully", toastOptions);
            navigate("/eventManagers");
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
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Create A Sub-Admin</h4>
        </div>

        <div className="card-body mt-5 text-start  bg-white">
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
              <Button type="submit">CREATE</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateSubAdmin;
