/* eslint-disable no-unreachable */
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../Config/Config";
import MUIDataTable from "mui-datatables";

import { ALLMISSION } from "../Redux/Action/missionAction";
import { ADMINPROFILE, ALLUSERS } from "../Redux/Action/userAction";
// import DescriptionBox from 'react-description-box';
function AllTasks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [assignUser, setAssignUser] = useState();

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const allMission = useSelector((state) => state.allMission);
  const { total, allMission: missions } = allMission;

  useEffect(() => {
    dispatch(ALLMISSION());
    dispatch(ALLUSERS());
  }, [dispatch]);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const allUsers = useSelector((state) => state.allUsers);
  const { users } = allUsers;

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

  const handleChange = async (e, id) => {
    const formData = new FormData();
    formData.append("status", e.target.value);
    formData.append("id", id);
    await baseUrl
      .put(`/api/mission/updateStatus`, formData, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status) {
          toast.success("status updated", toastOptions);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(ALLMISSION());
  }, [dispatch]);

  //  for sub admin tasks list

  const adminId = adminInfo?.userExist?._id;

  var EventManagerTask = missions?.filter(
    (one) => one.eventManagerId === adminId
  );
  var EventManagerSubAdmin = users?.filter((one) => one.managerId === adminId);

  const ALLTasksCreatedByMainAndSub = missions.filter(
    (one) =>
      one.ManagerId === adminInfo?.userExist.managerId ||
      one.ManagerId === adminId
  );

  const eventCreatedBySubAdmin = missions?.filter(
    (one) => one.eventManagerId === adminId
  );

  const handleChangeAssign = async (e, eventId) => {
    const formData = new FormData();
    formData.append("assignManager", e.target.value);
    formData.append("EventId", eventId);

    await baseUrl
      .put(`api/mission/assignManager`, formData, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setAssignUser(res.data.body);
          toast.success(res.data.message, toastOptions);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message, toastOptions);
      });
  };
  // ======================================================

  const columns = [
    "S.No.",
    "Name",
    "Date & Time",
    "Description",
    "Status",
    "Action",

    `${
      adminInfo?.userExist.planType === 0 ||
      adminInfo?.userExist.managerId ||
      adminInfo?.userExist.role === 0
        ? ""
        : " Assign"
    }`,
  ];

  let finalArray = [];

  if (adminInfo?.userExist?.role === 0) {
    for (let [index, data] of missions.entries()) {
      const View_btn = (
        <Link to={`/admin/view/${data._id}`}>
          <Button className="p-2 btn-gradient-info">view</Button>
        </Link>
      );

      const selectOption = (
        <select
          style={{
            borderRadius: "20px",
            margin: "2px",
            padding: "5px",
            textAlign: "center",
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.status}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className=" badge badge-success" value="0">
            Active
          </option>
          <option className="badge badge-danger" value="1">
            Complete
          </option>
          <option className="badge badge-secondary" value="2">
            Pending
          </option>
        </select>
      );

      const dateAnTime = moment(data.dateAndTime).format("DD-MM-YYYY HH:mm a");

      const descrip = data.description.substr(0, 30);

      //   <select
      //     style={{
      //       borderRadius: '20px',
      //       margin: '2px',
      //       padding: '5px',
      //       textAlign: 'center',
      //     }}
      //     className="btn btn-outline-secondry dropdown-toggle"
      //     name="status"
      //     defaultValue={data?.assignManager ? adminInfo?.userExist?.name : ''}
      //     onChange={(e) => handleChangeAssign(e.target.value, data._id)}
      //   >
      //     <option selected>please select</option>
      //     {EventManagerSubAdmin?.map((one) => (
      //       <option className=" badge badge-success" value={one?._id}>
      //         {one.name}
      //       </option>
      //     ))}
      //   </select>
      // );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(dateAnTime);
      dataArray.push(descrip);
      dataArray.push(selectOption);
      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
  } else if (adminInfo?.userExist?.managerId === null) {
    for (let [index, data] of ALLTasksCreatedByMainAndSub.entries()) {
      console.log(index, data.assignManager, "=3=3=33333333333333");

      const View_btn = (
        <Link to={`/view/${data._id}`}>
          <Button className="p-2 btn-gradient-info">view</Button>
        </Link>
      );

      const selectOption = (
        <select
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.status}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className=" badge badge-success" value="0">
            Active
          </option>
          <option className="badge badge-danger" value="1">
            Complete
          </option>
          <option className="badge badge-secondary" value="2">
            Pending
          </option>
        </select>
      );

      const dateAnTime = moment(data.dateAndTime).format("DD-MM-YYYY HH:mm a");
      const descrip = data.description.substr(0, 30);
      // ------------------- //
      // let assignedUser = users.filter((one) => one._id === data.assignManager);

      const Assign = (
        <select
          style={{
            borderRadius: "20px",
            margin: "2px",
            padding: "5px",
            textAlign: "center",
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          onChange={(e) => handleChangeAssign(e, data._id)}
          // multiple
        >
          <option selected>please select</option>
          {EventManagerSubAdmin?.map((one, i) => (
            <option
              className=""
              value={one._id}
              selected={
                one._id === data?.assignManager.find((e) => e === one._id)
              }
            >
              {one.name}
            </option>
          ))}
        </select>
      );
      // ------------------- //

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(dateAnTime);
      dataArray.push(descrip);
      dataArray.push(selectOption);
      dataArray.push(View_btn);
      <>
        {adminInfo?.userExist.planType === 0 ||
        adminInfo?.userExist.managerId ||
        adminInfo?.userExist.role === 0
          ? ""
          : dataArray.push(Assign)}
      </>;

      finalArray.push(dataArray);
    }
  } else {
    for (let [index, data] of eventCreatedBySubAdmin.entries()) {
      const View_btn = (
        <Link to={`/view/${data._id}`}>
          <Button className="p-2 btn-gradient-info">view</Button>
        </Link>
      );

      const selectOption = (
        <select
          style={{
            borderRadius: "20px",
            margin: "2px",
            padding: "5px",
            textAlign: "center",
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.status}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className=" badge badge-success" value="0">
            Active
          </option>
          <option className="badge badge-danger" value="1">
            Complete
          </option>
          <option className="badge badge-secondary" value="2">
            Pending
          </option>
        </select>
      );

      const dateAnTime = moment(data.dateAndTime).format("DD-MM-YYYY HH:mm a");
      const descrip = data.description.substr(0, 30);

      const Assign = (
        <select
          style={{
            borderRadius: "20px",
            margin: "2px",
            padding: "5px",
            textAlign: "center",
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.assignManager ? adminInfo?.userExist?.name : ""}
          onChange={(e) => handleChangeAssign(e.target.value, data._id)}
        >
          <option selected>please select</option>
          {EventManagerSubAdmin?.map((one) => (
            <option className=" badge badge-success" value={one._id}>
              {one.name}
            </option>
          ))}
        </select>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(dateAnTime);
      dataArray.push(descrip);
      dataArray.push(selectOption);
      dataArray.push(View_btn);
      <>
        {adminInfo?.userExist.planType === 0 ||
        adminInfo?.userExist.managerId ||
        adminInfo?.userExist.role === 0
          ? ""
          : dataArray.push(Assign)}
      </>;

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
          <h4 className="page_Heading">All Events's</h4>
        </div>

        <div className="card-body mt-5 table-responsive text-start bg-white">
          <div className="d-flex gap-2 justify-content-start mb-3">
            <div>
              <Link to="/admin/savedMission">
                <Button className="p-2">Completed Events's </Button>
              </Link>
            </div>
            <div>
              <Link to="/admin/activeMission">
                <Button className="p-2">Active Events's</Button>
              </Link>
            </div>
          </div>
          <div className="d-flex">
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
                {adminInfo?.userExist?.managerId === null ? (
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTasks;
