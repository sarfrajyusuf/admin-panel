import moment from "moment";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ALLMISSION } from "../Redux/Action/missionAction";
import { ADMINPROFILE } from "../Redux/Action/userAction";

function TaskAssignByAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allMission = useSelector((state) => state.allMission);
  const { total, allMission: missions } = allMission;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  useEffect(() => {
    dispatch(ALLMISSION());
  }, [dispatch]);

  const adminId = adminInfo?.userExist._id;

  const assignManagerData = [];

  for (let data of missions) {
    data.assignManager.map((e) => {
      if (e === adminId) {
        assignManagerData.push(data);
      }
    });
  }
  console.log(assignManagerData);

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
  }, [adminProfileError, dispatch, adminInfo, navigate]);

  //=============================================

  const columns = [
    "S.No.",
    "Event Name",
    "Date And Time",
    "Description",
    "Action",
  ];

  let finalArray = [];

  for (let [index, data] of assignManagerData?.entries()) {
    const View_btn = (
      <Link to={`/admin/view/${data._id}`}>
        <Button className="p-2 btn-gradient-info">view</Button>
      </Link>
    );

    let dataArray = [];

    dataArray.push(index + 1);
    dataArray.push(data.name);
    dataArray.push(data.dateAndTime);
    dataArray.push(data.description);
    dataArray.push(View_btn);

    finalArray.push(dataArray);
  }

  const data = finalArray;

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    filter: "false",

    viewColumns: false,
  };

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Task's By Admin</h4>
        </div>

        {data?.length === 0 ? (
          <div className="d-grid justify-content-center ">
            <h2 className="text-uppercase mt-5 pt-5">No Event ..!</h2>
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "white",
                float: "left",
              }}
            >
              <Button className="d-flex justify-content-start p-2 mb-3">
                Go Back
              </Button>
            </Link>
          </div>
        ) : (
          <div className="card-body mt-5 table-responsive text-start bg-white">
            <br />

            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white", float: "right" }}
            >
              <Button className="d-flex justify-content-start mb-3 p-2">
                Go Back
              </Button>
            </Link>

            {adminInfo?.userExist?.role === 1 || 2 ? (
              <>
                <MUIDataTable
                  // title={'Employee List'}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskAssignByAdmin;
