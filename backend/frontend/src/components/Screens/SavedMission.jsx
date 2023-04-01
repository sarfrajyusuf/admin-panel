import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../Config/Config";
import { Form, Button, Pagination } from "react-bootstrap";

// import { ADMINPROFILE } from '../Redux/Action/userAction';
import { ALLMISSION } from "../Redux/Action/missionAction";
import MUIDataTable from "mui-datatables";

function SavedMission() {
  const [dataa, setData] = useState([]);

  const [query, setQuery] = useState({
    limit: 10,
    sortBy: "name",
    page: 0,
    sortOrder: 1,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(dataa, "====================Saved");

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const allMission = useSelector((state) => state.allMission);
  const { total, allMission: missions } = allMission;

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
      .get("/api/mission/activeMission", {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        // console.log(res.data.body, '=====================res.data.body');
        setData(res.data.body.saved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [adminInfo]);

  if (dataa?.length) {
    var n = 1;
  }

  const adminId = adminInfo?.userExist?._id;
  // console.log(adminId);
  var EventManagerTask = dataa?.filter(
    (one) =>
      one.ManagerId === adminInfo?.userExist.managerId ||
      one.ManagerId === adminId
  );

  useEffect(() => {
    dispatch(ALLMISSION());
  }, [dispatch]);

  //  ==============================================================

  const columns = [
    "S.No.",
    "Event Name",
    "Date",
    "Time",
    "Description",
    "Status",
  ];

  let finalArray = [];

  if (adminInfo?.userExist?.role === 0) {
    for (let [index, data] of dataa.entries()) {
      console.log(index, data, "=3=3=33333333333333");

      const View_btn = (
        <div className="d-flex gap-2">
          <Link to={`/admin/view/${data._id}`}>
            <Button className="p-2 btn-gradient-info">view</Button>
          </Link>

          <label className="badge badge-danger">
            {data.status ? "completed" : ""}
          </label>
        </div>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(moment(data.dateAndTime).format("DD-MM-YYYY"));
      dataArray.push(moment(data.dateAndTime).format(" HH:mm A"));
      dataArray.push(data.description.substr(0, 30));

      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
  } else {
    for (let [index, data] of EventManagerTask.entries()) {
      console.log(index, data, "=3=3=33333333333333");

      const View_btn = (
        <div className="d-flex gap-2">
          <Link to={`/view/${data._id}`}>
            <Button className="p-2 btn-gradient-info">view</Button>
          </Link>

          <label className="badge badge-danger">
            {data.status ? "completed" : ""}
          </label>
        </div>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(moment(data.dateAndTime).format("DD-MM-YYYY"));
      dataArray.push(moment(data.dateAndTime).format(" HH:mm A"));
      dataArray.push(data.description.substr(0, 30));

      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
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
          <h4 className="page_Heading"> Completed Events's</h4>
        </div>

        <div className="card-body mt-5 table-responsive text-start bg-white">
          <div className="d-grid justify-content-end ">
            <Link
              to="/admin/allTasks"
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
          {adminInfo?.userExist?.role === 0 ? (
            <>
              <MUIDataTable
                // title={'Employee List'}
                data={data}
                columns={columns}
                options={options}
              />
            </>
          ) : (
            <>
              <MUIDataTable
                // title={'Employee List'}
                data={data}
                columns={columns}
                options={options}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedMission;
