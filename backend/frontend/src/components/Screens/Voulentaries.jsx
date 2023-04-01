import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { baseUrl } from "../../Config/Config";

import MUIDataTable from "mui-datatables";

// import { useNavigate } from 'react-router-dom';

function Voulentaries() {
  const navigate = useNavigate();
  const [voulentaries, setVoulentaries] = useState([]);

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
    baseUrl
      .get(`api/volunteer/allVoulentaries`, {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        return setVoulentaries(res.data.body.allVoulentaries);
      })
      .catch((err) => console.log(err));
  }, [adminInfo]);

  // console.log(all, '===========+++@================@=============');

  // +++++++++++++++++++++++++++++++++++++++++++++++++
  const columns = ["S.No.", "Name", "Email", "Mobile", "Action"];

  let finalArray = [];

  for (let [index, data] of voulentaries && voulentaries?.entries()) {
    // console.log(index, data, '=3=3=33333333333333sssss');

    const View_btn = (
      <Link to={`/admin/volunteerDetail/${data._id}`}>
        <Button className="p-2 btn-gradient-info">view</Button>
      </Link>
    );

    let dataArray = [];

    dataArray.push(index + 1);
    dataArray.push(data.name);
    dataArray.push(data.email);
    dataArray.push(data.mobile);
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
          <h4 className="page_Heading">Volunteer's</h4>
        </div>
        <div className="card-body mt-5 text-start bg-white">
          <>
            <MUIDataTable
              // title={'Employee List'}
              data={data}
              columns={columns}
              options={options}
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default Voulentaries;
