import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ADMINPROFILE } from "../Redux/Action/userAction";
import { toast } from "react-toastify";

import { baseUrl } from "../../Config/Config";
import { Button, Form } from "react-bootstrap";

function CreateOrganisation() {
  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo, error: adminProfileError } = adminProfile;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let formData = new FormData();
  const [imgData, setImgData] = useState();

  const [data, setData] = useState({
    createdByUser: adminProfileInfo?._id,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(ADMINPROFILE());
    let role = adminInfo?.userExist?.role === 0;
    // let managerRole = adminInfo?.userExist?.role === 1;
    if (role) {
      if (!adminInfo) {
        navigate("/");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/");
      }
    } else {
      if (!adminInfo) {
        navigate("/managerLogin");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/managerLogin");
      }
    }
  }, [adminProfileError, adminInfo, navigate, dispatch]);

  const imageUploader = (e) => {
    setImgData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imgData == null || undefined) {
      toast.error("Please select image", toastOptions);
      return;
    }
    if (handelValidation()) {
      formData.append("createdByUser", data.createdByUser);
      formData.append("name", data.name);
      formData.append("organizationName", data.organizationName);
      formData.append("organizationEmail", data.organizationEmail);
      formData.append("organizationAddress", data.organizationAddress);
      formData.append("phoneNumber", data.phoneNumber);

      formData.append("image", imgData);

      await baseUrl
        .post("/api/organization/createOrganization", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${adminInfo?.token}`,
          },
        })
        .then((res) => {
          if (res.data.status === 201) {
            navigate("/organizationList");
            toast.success(res.data.message, toastOptions);
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
      organizationEmail,
      organizationAddress,
      phoneNumber,
    } = data;
    if (
      !name &&
      !organizationName &&
      !organizationEmail &&
      !organizationAddress &&
      !phoneNumber
    ) {
      toast.error("All field is mandatory", toastOptions);
      return false;
    } else if (!name) {
      toast.error("The name field is mandatory", toastOptions);
      return false;
    } else if (!organizationName) {
      toast.error("The organization name field is mandatory", toastOptions);
      return false;
    } else if (!organizationEmail) {
      toast.error("The organization email field is mandatory", toastOptions);
      return false;
    } else if (!organizationAddress) {
      toast.error("The organization address field is mandatory", toastOptions);
      return false;
    } else if (!phoneNumber) {
      toast.error("The phone number field is mandatory", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Create Organization</h4>
        </div>

        <div className="card-body mt-5 text-start  bg-white">
          <Form className="pt-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter  Name"
                className="form-control form-control-lg"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                name="organizationName"
                type="text"
                placeholder="Enter Organization Name"
                className="form-control form-control-lg"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Organization Email</Form.Label>
              <Form.Control
                name="organizationEmail"
                type="text"
                placeholder="Enter Organization Email"
                className="form-control form-control-lg"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Organization Address</Form.Label>
              <Form.Control
                name="organizationAddress"
                type="text"
                placeholder="Enter Organization Address"
                className="form-control form-control-lg"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number "
                className="form-control form-control-lg"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Organization Logo</Form.Label>
              <Form.Control
                className="form-control"
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => imageUploader(e)}
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

export default CreateOrganisation;
