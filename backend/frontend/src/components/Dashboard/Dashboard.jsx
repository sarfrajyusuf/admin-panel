import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ALLMISSION } from "../Redux/Action/missionAction";
import {
  ADMINPROFILE,
  ALLUSERS,
  EVENTMANAGER,
} from "../Redux/Action/userAction";
import Loader from "../../Loader/Loader";
import { baseUrl } from "../../Config/Config";
import { useState } from "react";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [organization, setOrganization] = useState();
  const [blogData, setBlogData] = useState();

  // console.log(organization, '========================count');

  const [voulentaries, setVoulentaries] = useState();

  // console.log(voulentaries, '========================voulentaries');
  const allUsers = useSelector((state) => state.allUsers);
  const { total: totalUser, users } = allUsers;

  const allMission = useSelector((state) => state.allMission);
  const { total, allMission: missions } = allMission;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const eventManagerData = useSelector((state) => state.eventManagerData);
  const { eventManagerCount, eventManager } = eventManagerData;

  // console.log(adminInfo, '========================adminInfo');

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError, adminProfileInfo, loading } = adminProfile;

  var ROLE = adminInfo?.userExist?.role;
  var PLANPURCHASE = adminProfileInfo?.planPurchase;

  var MANAGERCREATED = users.filter(
    (one) => one.managerId === adminInfo?.userExist?._id
  );

  useEffect(() => {
    if (PLANPURCHASE == false && ROLE !== 0) {
      navigate("/plan");
    }
  }, [navigate, PLANPURCHASE]);

  // console.log(MANAGERCREATED.length, '===============MANAGERCREATED==========')

  useEffect(() => {
    dispatch(ALLUSERS());
    dispatch(ALLMISSION());
    dispatch(EVENTMANAGER());
    dispatch(ADMINPROFILE());
  }, [dispatch]);

  useEffect(() => {
    if (Math.floor(Date.now() / 1000) - adminInfo?.loginTime < 2) {
      window.location.reload();
    }
  }, [adminInfo]);

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
  }, [adminProfileError, adminInfo, loading, navigate]);

  const allVoulentaries = () => {
    baseUrl
      .get("api/volunteer/allVoulentaries", {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setVoulentaries(res.data.body);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    allVoulentaries();
  }, [adminProfileInfo, adminInfo]);

  const adminId = adminInfo?.userExist?._id;

  var SuperAdminSubAdmin = users.filter((one) => !one.managerId);

  const plan1Total = missions?.filter(
    (one) =>
      one.ManagerId === adminInfo?.userExist.managerId ||
      one.ManagerId === adminId
  );

  const eventCreatedBySubAdmin = missions?.filter(
    (one) => one.eventManagerId === adminId
  );

  var EventManagerSubAdmin = users?.filter((one) => one.managerId === adminId);

  const aaa = missions?.map((one) => {
    return (
      one.assignManager.length > 0 &&
      one.assignManager.map((id) => {
        if (id === adminId) {
          return one;
        }
      })
    );
  });
  const taskByAdminCount = aaa?.filter((n) => {
    return n.length > 0 && n.find((n) => n?._id);
  });

  const getAllBlogs = () => {
    baseUrl
      .get("/api/blog/getAllBlogs")
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data.body.allBlogs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    baseUrl
      .get("/api/organization/organizationList", {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        setOrganization(res.data.body.userOrg);
      })
      .catch((error) => {
        console.log(error, "=======================err");
      });

    getAllBlogs();
  }, []); // organization api=----------=

  const orgCount = organization?.length;

  return (
    <>
      <div>
        {!total && !totalUser ? (
          <Loader />
        ) : (
          <div className="container-scroller ">
            <div className="content-wrapper " style={{ minHeight: "100vh" }}>
              <div className="page-header">
                <h3 className="page-title">
                  <span className="page-title-icon bg-gradient-primary text-white me-2">
                    <i className="mdi mdi-home"></i>
                  </span>
                  Dashboard
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                  <div className="card bg-gradient-info justify-content-strat card-img-holder text-white">
                    <Link
                      to={"/admin/allTasks"}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <div className="card-body p-0 d-grid">
                        <img
                          src="assets/images/dashboard/circle.svg"
                          className="card-img-absolute"
                          alt="circleImage"
                        />
                        <h4 className="font-weight-medium icon_box mb-3">
                          <i className="mdi h1 mdi-trophy"></i>
                        </h4>
                        <h5 className="card-text">All Event's</h5>

                        {adminInfo?.userExist?.role === 0 ? (
                          <h4 className="mb-2">{total}</h4>
                        ) : (
                          <>
                            {adminInfo?.userExist?.managerId === null ? (
                              <h4 className="mb-2">{plan1Total?.length}</h4>
                            ) : (
                              <h4 className="mb-2">
                                {eventCreatedBySubAdmin?.length}
                              </h4>
                            )}
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
                {ROLE === 1 ? (
                  ""
                ) : (
                  <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                    <div className="card bg-gradient-success justify-content-strat card-img-holder text-white">
                      <Link
                        to={"/admin/eventManagers"}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        <div className="card-body p-0 d-grid">
                          <img
                            src="assets/images/dashboard/circle.svg"
                            className="card-img-absolute"
                            alt="circleImage"
                          />
                          <h4 className="font-weight-medium icon_box mb-3">
                            {/* <i className="fa-solid fa-plus"></i> */}
                            <i className="mdi h1 mdi-account-multiple-outline"></i>
                          </h4>
                          <h5 className="card-text">Event Manager's</h5>
                          <h4 className="mb-2">{SuperAdminSubAdmin?.length}</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}

                <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                  <div className="card bg-gradient-info justify-content-strat card-img-holder text-white">
                    <Link
                      to={"/admin/allVolunteer"}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <div className="card-body p-0 d-grid">
                        <img
                          src="assets/images/dashboard/circle.svg"
                          className="card-img-absolute"
                          alt="circleImage"
                        />
                        <h4 className="font-weight-medium icon_box mb-3">
                          <i className="mdi h1 mdi-account-multiple-outline"></i>
                        </h4>
                        <h5 className="card-text">Volunteer's</h5>
                        <h4 className="mb-2">{voulentaries?.total}</h4>
                      </div>
                    </Link>
                  </div>
                </div>

                {ROLE === 0 ? (
                  <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                    <div className="card bg-gradient-danger justify-content-strat card-img-holder text-white">
                      <Link
                        to={"/admin/allBlogs"}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        <div className="card-body p-0 d-grid">
                          <img
                            src="assets/images/dashboard/circle.svg"
                            className="card-img-absolute"
                            alt="circleImage"
                          />
                          <h4 className="font-weight-medium icon_box mb-3">
                            <i className="mdi h1 mdi-account-multiple-outline"></i>
                          </h4>
                          <h5 className="card-text">Blog's</h5>
                          <h4 className="mb-2">{blogData?.length}</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {adminInfo?.userExist.planType === 1 || 2 ? (
                  adminInfo?.userExist.managerId != null ? (
                    <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                      <div className="card bg-gradient-info justify-content-strat card-img-holder text-white">
                        <Link
                          to={"/admin/taskAssignByAdmin"}
                          style={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          <div className="card-body p-0 d-grid">
                            <img
                              src="assets/images/dashboard/circle.svg"
                              className="card-img-absolute"
                              alt="circleImage"
                            />
                            <h4 className="font-weight-medium icon_box mb-3">
                              <i className="mdi h1 mdi-notebook"></i>
                            </h4>
                            <h5 className="card-text">Task's By Admin</h5>
                            <h4 className="mb-2">{taskByAdminCount?.length}</h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                {ROLE === 0 ? (
                  ""
                ) : (
                  <>
                    {adminInfo?.userExist.planType !== 0 ? (
                      adminInfo?.userExist.managerId === null ? (
                        <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                          <div className="card bg-gradient-success justify-content-strat card-img-holder text-white">
                            <Link
                              to={"/admin/eventManagers"}
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              <div className="card-body p-0 d-grid">
                                <img
                                  src="assets/images/dashboard/circle.svg"
                                  className="card-img-absolute"
                                  alt="circleImage"
                                />
                                <h4 className="font-weight-medium icon_box mb-3">
                                  <i className="mdi h1 mdi-account-check"></i>
                                </h4>
                                <h5 className="card-text">SubAdmin's</h5>
                                <h4 className=" mb-2">
                                  {EventManagerSubAdmin?.length}
                                </h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}

                    {adminInfo?.userExist.managerId === null ? (
                      <div className="col-lg-3 col-md-6 stretch-card grid-margin">
                        <div className="card bg-gradient-danger justify-content-strat card-img-holder text-white">
                          <Link
                            to={"/admin/organizationList"}
                            style={{
                              textDecoration: "none",
                              color: "white",
                            }}
                          >
                            <div className="card-body p-0 d-grid">
                              <img
                                src="assets/images/dashboard/circle.svg"
                                className="card-img-absolute"
                                alt="circleImage"
                              />
                              <h4 className="font-weight-medium icon_box mb-3">
                                {/* <i className="fa-solid fa-plus"></i> */}
                                <i className="mdi h1 mdi-bank"></i>
                              </h4>
                              <h5 className="card-text">Organization's</h5>
                              <h4 className="mb-2">{orgCount}</h4>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
