import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ADMINPROFILE, LOGINUSER } from "../Redux/Action/userAction";

function Sidebar() {
  const llocation = useLocation();

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const allUsers = useSelector((state) => state.allUsers);
  const { users } = allUsers;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo } = adminProfile;

  // console.log(adminProfileInfo, '=====================adminProfileInfo');
  // console.log(adminInfo, '=heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

  var ROLE = adminInfo?.userExist?.role;

  var planType = adminProfileInfo?.planType === 1;
  var planPurchase = adminProfileInfo?.planPurchase;

  var MANAGERCREATED = users?.filter(
    (one) => one.managerId === adminInfo?.userExist?._id
  );

  return (
    <nav className="sidebar sidebar-offcanvas mt-lg-4" id="sidebar">
      <ul className="nav">
        <li className="nav-item ">
          <Link
            to="/admin/dashboard"
            // activeClassName="active"
            className={
              llocation.pathname === "/admin/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        {/* ROLE 1 FOR EVENT MANAGER/SUBADMIN */}
        {ROLE === 1 ? (
          <li className="nav-item">
            <Link
              to="/admin/createEvent"
              // activeClassName="active"
              className={
                llocation.pathname === "/admin/createEvent"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">Create Event</span>
              <i className="mdi mdi-plus-circle-outline menu-icon"></i>
            </Link>
          </li>
        ) : (
          ""
        )}

        {/* FOR CREATE SUB ADMIN */}

        {planPurchase === true && adminInfo?.userExist.planType !== 0 ? (
          <>
            {adminInfo?.userExist.managerId ? (
              ""
            ) : (
              <>
                {planType && MANAGERCREATED?.length === 2 ? (
                  ""
                ) : (
                  <li className="nav-item">
                    <Link
                      className={
                        llocation.pathname === "/admin/createSubAdmin"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/admin/createSubAdmin"
                    >
                      <span className="menu-title">Create Sub-Admin </span>
                      <i className="mdi mdi-account-plus menu-icon"></i>
                    </Link>
                  </li>
                )}
                {planType === 2 ? (
                  <li className="nav-item">
                    <Link
                      to="/admin/createSubAdmin"
                      className={
                        llocation.pathname === "/admin/createSubAdmin"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      <span className="menu-title">Create Sub-Admin </span>
                      <i className="mdi mdi-account-plus menu-icon"></i>
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                <li className="nav-item">
                  <Link
                    to="/admin/eventManagers"
                    className={
                      llocation.pathname === "/admin/eventManagers"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    <span className="menu-title">List Sub-Admin </span>
                    <i className="mdi mdi-account-check menu-icon"></i>
                  </Link>
                </li>
              </>
            )}
          </>
        ) : (
          ""
        )}

        {planPurchase === true ? (
          <li className="nav-item">
            <Link
              to="/admin/createOrganization"
              className={
                llocation.pathname === "/admin/createOrganization"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">Create Organisation </span>
              <i className="mdi mdi-bank menu-icon"></i>
            </Link>
          </li>
        ) : (
          ""
        )}
        {planPurchase === true ? (
          <li className="nav-item">
            <Link
              to="/admin/organizationList"
              className={
                llocation.pathname === "/admin/organizationList"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">Organisation-List</span>
              <i className="mdi mdi-calendar-text menu-icon"></i>
            </Link>
          </li>
        ) : (
          ""
        )}

        {/* ROLE 0 FOR SUPER ADMIN */}
        {ROLE === 0 ? (
          <li className="nav-item">
            <Link
              to="/admin/eventManagers"
              className={
                llocation.pathname === "/admin/eventManagers"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">Event Manager's</span>
              <i className="mdi mdi-account-multiple-outline menu-icon"></i>
            </Link>
          </li>
        ) : (
          ""
        )}

        <li className="nav-item">
          <Link
            to="/admin/allTasks"
            className={
              llocation.pathname === "/admin/allTasks"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span className="menu-title">All Events's</span>
            <i className="mdi mdi-trophy menu-icon"></i>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/allVolunteer"
            className={
              llocation.pathname === "/admin/allVolunteer"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span className="menu-title">Volunteer's</span>
            <i className="mdi mdi-account-multiple-outline menu-icon"></i>
          </Link>
        </li>

        {ROLE === 0 ? (
          <li className="nav-item">
            <Link
              to="/admin/allBlogs"
              className={
                llocation.pathname === "/admin/allBlogs"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">Blog's</span>
              <i className="mdi mdi-account-multiple-outline menu-icon"></i>
            </Link>
          </li>
        ) : (
          ""
        )}

        {ROLE === 0 || adminInfo?.userExist.managerId ? (
          ""
        ) : (
          <li className="nav-item">
            <Link
              to="/admin/MyPlanInfo"
              className={
                llocation.pathname === "/admin/MyPlanInfo"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span className="menu-title">My Plan Details</span>
              <i className="mdi mdi-notebook menu-icon"></i>
            </Link>
          </li>
        )}

        {adminInfo?.userExist.planType === 1 || 2 ? (
          adminInfo?.userExist.managerId != null ? (
            <li className="nav-item">
              <Link
                to="/admin/taskAssignByAdmin"
                className={
                  llocation.pathname === "/admin/taskAssignByAdmin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <span className="menu-title">Task's By Admin</span>
                <i className="mdi mdi-notebook menu-icon"></i>
              </Link>
            </li>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="menu-title">CMS</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-clipboard-text menu-icon"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link
                  to="/admin/termAndcondition"
                  className={
                    llocation.pathname === "/admin/termAndcondition"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Term & Condition
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/privacyAndpolicy"
                  className={
                    llocation.pathname === "/admin/privacyAndpolicy"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Privacy & Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    llocation.pathname === "/admin/aboutUs"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/aboutUs"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
