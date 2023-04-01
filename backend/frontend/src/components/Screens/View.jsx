import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl, http } from "../../Config/Config";
import moment from "moment";
import { ADMINPROFILE } from "../Redux/Action/userAction";
import avatar from "../../images/placeHolderImg.jpg";
import Select from "react-select";

import "../styles/view.css";
import { Button } from "react-bootstrap";
function View() {
  const Id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mission, setMission] = useState();
  const [volunteerData, setVolunteerData] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  // console.log(mission?.tasks, '=============mission');

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  useEffect(() => {
    dispatch(ADMINPROFILE());
  }, [dispatch]);

  useEffect(() => {
    let role = adminInfo?.userExist?.role === 0;
    // let managerRole = adminInfo?.userExist?.role === 1;
    if (role) {
      if (!adminInfo) {
        navigate("/admin");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/admin");
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
      .get(`/api/mission/oneMission/${Id}`, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setMission(res.data.body);
        }
      })
      .catch((err) => console.log(err.message));

    baseUrl
      .get(`api/volunteer/allVoulentaries`, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          setVolunteerData(res.data.body.allVoulentaries);
        }
      })
      .catch((err) => console.log(err));
  }, [Id, adminInfo]);

  // console.log(mission?._id, "==============midss");

  const handleChangeAssignTaskForVolunteer = async (e, eventId, taskId) => {
    const formData = {
      volunteerAssignForTask: e.target.value,
      missionId: eventId,
      taskId: taskId,
    };
    await baseUrl
      .put("api/mission/assignTaskForVolunteer", formData)
      .then((res) => {
        if (res.data.status === 200) {
          setMission(res.data.body);
        }
      })
      .catch((err) => console.log(err));
  };

  var n = 1;

  const userName = volunteerData.filter((on) =>
    on._id ==
    mission?.tasks?.filter((one) =>
      one.volunteerAssignForTask.filter((one) => console.log(one, "======one"))
    )
      ? on.name
      : "Not Assign"
  );
  console.log(userName, "=============username");

  // const handleChangesd = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  // };
  // const op = volunteerData.map((ele) => {
  //   return {
  //     value: ele._id,
  //     label: ele.name,
  //     ...ele,
  //   };
  // });

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Event Information</h4>
        </div>

        <section className="section py-5">
          <div className="section-body event_info">
            <div className="row ">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12">
                    <div class="card-body text-start  bg-white">
                      <div class="form-group event_view">
                        <label className="fw-bold my-1 d-flex align-items-center justify-content-end w-100">
                          <Link to={`/admin/addTasks/${mission?._id}`}>
                            <Button className="p-2">Add Tasks</Button>
                          </Link>
                        </label>
                        <div class="input-group show_imgs">
                          <img
                            src={
                              mission?.image
                                ? `${http}/images/${mission?.image}`
                                : `${avatar}`
                            }
                            alt={avatar}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label className="fw-bold my-1">Name</label>
                        <div class="input-group">
                          <div class="input-group-prepend"></div>
                          <input
                            readonly=""
                            type="text"
                            value={mission?.name}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label className="fw-bold my-1">Description</label>
                        <div class="input-group">
                          <div class="input-group-prepend"></div>
                          <input
                            readonly=""
                            type="text"
                            value={mission?.description}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label className="fw-bold my-1">Date</label>
                        <div class="input-group">
                          <div class="input-group-prepend"></div>
                          <input
                            readonly=""
                            type="text"
                            value={moment(mission?.dateAndTime).format(
                              "DD-MM-YYYY"
                            )}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label className="fw-bold my-1">Time</label>
                        <div class="input-group">
                          <div class="input-group-prepend"></div>
                          <input
                            type="text"
                            className="form-control"
                            readonly=""
                            value={moment(mission?.dateAndTime).format(
                              "HH:mm A"
                            )}
                          />
                        </div>
                      </div>

                      {adminInfo?.userExist.managerId === null ? (
                        ""
                      ) : (
                        <>
                          <label className="fw-bold my-1">
                            Assign User's ({mission?.assignManager.length})
                          </label>
                          {mission?.assignManager.map((one) => (
                            <div class="form-group">
                              <div class="input-group">
                                <div class="input-group-prepend"></div>

                                <input
                                  type="text"
                                  className="form-control"
                                  readonly=""
                                  value={one.name}
                                />
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                      <p className="fw-bold my-1">
                        All Task's ({mission?.tasks?.length})
                      </p>

                      {mission?.tasks?.map((one) => (
                        <ul style={{ listStyleType: "none" }} key={one?._id}>
                          <li>
                            <div class="form-group">
                              <label className="fw-bold my-1">
                                Task {`-`}
                                {mission?.tasks?.length > 0 ? n++ : ""}
                              </label>
                              <div class="input-group btm_img">
                                <img
                                  src={
                                    one?.image
                                      ? `${http}/images/${one.image}`
                                      : `${avatar}`
                                  }
                                  alt=""
                                  className="mb-1"
                                />
                              </div>
                              <div>
                                <label className="fw-bold my-1">
                                  Task Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 mb-3"
                                  readonly=""
                                  value={one?.task}
                                />
                              </div>

                              <div style={{ border: "black" }}>
                                <label className="fw-bold my-1">
                                  Select Volunteer
                                </label>
                                <select
                                  className="form-control w-100 mb-3"
                                  name="volunteerAssignForTask"
                                  // defaultValue={"select volunteer"}
                                  onChange={(e) =>
                                    handleChangeAssignTaskForVolunteer(
                                      e,
                                      mission?._id,
                                      one._id
                                    )
                                  }
                                >
                                  <option>
                                    <strong>Select User</strong>
                                  </option>
                                  {volunteerData.map((on) => (
                                    <option value={on._id}>{on.name}</option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="fw-bold my-1">
                                  Volunteer Assigned
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  readonly=""
                                  value={
                                    volunteerData
                                      .filter((vol) =>
                                        one.volunteerAssignForTask.includes(
                                          vol._id
                                        )
                                      )
                                      ?.map((e) => e.name)
                                    // on._id ? on._id : "Not Assigned Yet"
                                  }
                                />
                                {/* <Select
                                  value=""
                                  // onChange={handleChangesd}
                                  // options={op}
                                  isMulti
                                >{volunteerData
                                    .filter((vol) =>
                                      one.volunteerAssignForTask.includes(
                                        vol._id
                                      )
                                    )
                                    ?.map((e) => e.name)}</Select> */}
                              </div>
                            </div>
                          </li>
                        </ul>
                      ))}

                      <div className="form-group text-start">
                        <Link to="">
                          <button
                            type="button"
                            className=" btn btn-primary"
                            onClick={() => navigate(-1)}
                          >
                            Go Back
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Link to={'/allTasks'}>
          <button className="btn btn-primary float-right mt-3 ">Go Back</button>
        </Link> */}
        </section>
      </div>
    </div>
  );
}

export default View;
