import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl, http } from "../../Config/Config";
import avatar from "../../images/placeHolderImg.jpg";

function OrgnaizationView() {
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const Id = useParams().id;

  const [data, setData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  useEffect(() => {
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
  }, [adminProfileError, adminInfo, navigate]);

  useEffect(() => {
    baseUrl
      .get(`/api/organization/oneOrganization/${Id}`, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        // console.log(res.data, '====================data');
        if (res.data.status === 200) {
          setData(res.data.body);
          toast.success(res.data.message, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, toastOptions);
      });
  }, [Id, adminInfo]);

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await baseUrl
      .put(`/api/organization/updateOrganization/${Id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          toast.success("updated successfully", toastOptions);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-scroller">
        <div className="content-wrapper">
          <div class="page-header align-items-center">
            <h4 className="page_Heading">Orgnaization Information</h4>
          </div>
          <section className="section pt-5">
            <div class="card-body text-start bg-white">
              <div class="input-group show_imgs">
                <img
                  alt={avatar}
                  className="user_imgs"
                  src={
                    data?.image ? `${http}/images/${data?.image}` : `${avatar}`
                  }
                />
              </div>

              {/* <img
                  alt={avatar}
                  className="user_imgs"
                  src={
                    data?.image ? `${http}/images/${data?.image}` : `${avatar}`
                  }
                  // data-original-title="Usuario"
                /> */}

              <div class="form-group">
                <label className="fw-bold my-1">Name</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    type="text"
                    name="name"
                    value={data?.name}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="fw-bold my-1">Organization Name</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    name="organizationName"
                    type="text"
                    value={data?.organizationName}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="fw-bold my-1">Organization Email</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    name="organizationEmail"
                    type="text"
                    value={data?.organizationEmail}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="fw-bold my-1">Organization Address</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    name="organizationAddress"
                    type="text"
                    value={data?.organizationAddress}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="form-group">
                <label className="fw-bold my-1">Phone Number</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    name="phoneNumber"
                    type="text"
                    value={data?.phoneNumber}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* <div class="form-group">
            <label className="fw-bold my-1">Status</label>
            <div class="input-group">
              <div class="input-group-prepend"></div>
              <input
                type="text"
                className="form-control"
                readonly=""
                value={data?.status}
              />
            </div>
          </div> */}

              <div className="form-group text-start">
                <Link to="/organizationList">
                  <button type="button" className="go_back">
                    Go Back
                  </button>
                </Link>

                <button
                  type="submit"
                  className="btn btn-success mx-3 btn-rounded"
                  onClick={handleSubmit}
                  style={{
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "11px 18px",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default OrgnaizationView;
