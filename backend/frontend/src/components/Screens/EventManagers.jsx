import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../Config/Config";
import MUIDataTable from "mui-datatables";
// import { useNavigate } from 'react-router-dom';

import {
  ADMINPROFILE,
  ALLUSERS,
  EVENTMANAGER,
} from "../Redux/Action/userAction";

function EventManagers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const allUsers = useSelector((state) => state.allUsers);
  const { users } = allUsers;

  const subscriptionUsre = users.filter(
    (one) => one.planPurchase && !one.managerId
  );
  // console.log(subscriptionUsre, '==========================subscriptionUsre');

  const eventManagerData = useSelector((state) => state.eventManagerData);
  const { eventManagerCount, eventManager } = eventManagerData;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

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
    dispatch(ALLUSERS());
    dispatch(EVENTMANAGER());
    dispatch(ADMINPROFILE());
  }, [dispatch]);

  const handleChange = async (e, ID) => {
    const obj = {
      id: ID,
      isApproved: e.target.value,
    };
    // console.log(obj, '===========================');
    // return;
    await baseUrl
      .put("/api/users/approvedByAdmin", obj, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          toast.success(res.data.message, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.response.data.message, toastOptions);
      });
  };

  if (eventManagerCount) {
    var n = 1;
  }

  const adminId = adminInfo?.userExist?._id;
  // console.log(adminId, '==========================adminInfo');

  var EventManagerSubAdmin = users?.filter((one) => one.managerId === adminId);

  var SuperAdminSubAdmin = users.filter((one) => one?.managerId === null);
  console.log(SuperAdminSubAdmin, "==============SuperAdminSubAdmin");

  //  ========================================================data table
  const columns1 = [
    "S.No.",
    "Name",
    "Email",
    "Mobile",
    "Plan Purchased",
    "Status",
    "Action",
  ];
  const columns2 = ["S.No.", "Name", "Email", "Mobile", "Status", "Action"];

  let finalArray = [];
  if (adminInfo?.userExist?.role === 0) {
    for (let [index, data] of SuperAdminSubAdmin.entries()) {
      const View_btn = (
        <Link to={`/admin/eventManagerDetails/${data._id}`}>
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
          name="isApproved"
          className="btn btn-outline-secondry dropdown-toggle"
          defaultValue={data?.isApproved}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className="badge badge-success" value="true">
            <label>Approved</label>
          </option>

          <option className="badge badge-danger" value="false">
            <label>Pending</label>
          </option>
        </select>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(data.email);
      dataArray.push(data.mobile);
      dataArray.push(
        data?.planType === 0
          ? "Basic Plan User"
          : data.planType === 1
          ? "Standard Plan User"
          : data.planType === 2
          ? "Premium Paln User"
          : "Not Puchased Yet"
      );
      dataArray.push(selectOption);
      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
  } else {
    for (let [index, data] of EventManagerSubAdmin.entries()) {
      console.log(index, data, "=3=3=33333333333333");

      const View_btn = (
        <Link to={`/admin/eventManagerDetails/${data._id}`}>
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
          name="isApproved"
          className="btn btn-outline-secondry dropdown-toggle"
          defaultValue={data?.isApproved}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className="badge badge-success" value="true">
            <label>Approved</label>
          </option>

          <option className="badge badge-danger" value="false">
            <label>Pending</label>
          </option>
        </select>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(data.email);
      dataArray.push(data.mobile);
      dataArray.push(selectOption);
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
    <div class="container-scroller ">
      <div class="content-wrapper ">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Event Manager's</h4>
        </div>
        <div className="card-body bg-white mt-5 text-start">
          {adminInfo?.userExist?.role === 0 ? (
            <>
              <MUIDataTable
                // title={'Employee List'}
                data={data}
                columns={columns1}
                options={options}
              />
            </>
          ) : (
            <>
              <MUIDataTable
                // title={'Employee List'}
                data={data}
                columns={columns2}
                options={options}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventManagers;
