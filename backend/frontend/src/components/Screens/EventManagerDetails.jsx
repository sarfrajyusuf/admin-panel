import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl, http } from "../../Config/Config";
import { ADMINPROFILE } from "../Redux/Action/userAction";
import { ALLMISSION } from "../Redux/Action/missionAction";
import avatar from "../../images/placeHolderImg.jpg";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "../styles/eventManagerDetail.css";

function EventManagerDetails() {
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

  const allMission = useSelector((state) => state.allMission);
  const { allMission: everyMission, error: allMissionError } = allMission;

  // console.log(everyMission, '===========ALL=======');

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
    dispatch(ALLMISSION());
  }, [dispatch]);

  useEffect(() => {
    baseUrl
      .get(`/api/users/singleUser/${Id}`, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.body);
          dispatch(ADMINPROFILE());
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, toastOptions);
      });
  }, [Id, dispatch]);

  var eventCreatedByManager = everyMission?.filter(
    (uid) => uid.eventManagerId === Id
  );
  // console.log(eventCreatedByManager);
  console.log(data, "==============data");

  return (
    <>
      <div className="container-scroller">
        <div className="content-wrapper">
          <div class="page-header align-items-center">
            <h4 className="page_Heading">Manager Information</h4>
          </div>
          <div class="card-body text-start bg-white">
            {/* <div className="form-group text-center  ">
              <img
                alt={data?.name}
                className="user_imgs"
                src={
                  data?.image ? `${http}/images/${data?.image}` : `${avatar}`
                }
                // data-original-title="Usuario"
              />
            </div> */}

            <div class="form-group">
              <label className="fw-bold my-1">Name</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={data?.name}
                  className="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label className="fw-bold my-1">E-mail</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={data?.email}
                  className="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label className="fw-bold my-1">Mobile</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={data?.mobile}
                  className="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label className="fw-bold my-1">Role</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control"
                  readonly=""
                  value={data?.role === 1 ? "Event Manager" : "Not Assign"}
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
                  value={data?.status === true ? 'Approved' : 'pending'}
                />
              </div>
            </div> */}

            <div className="form-group text-start">
              <Link to="/admin/eventManagers">
                <button type="button" className="go_back">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventManagerDetails;
