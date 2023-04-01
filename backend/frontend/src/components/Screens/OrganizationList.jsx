import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../Config/Config";
import Loader from "../../Loader/Loader";
import avatar from "../../images/placeHolderImg.jpg";

function OrganizationList() {
  const navigate = useNavigate();
  const [userOrg, setUserOrg] = useState([]);

  // console.log(userOrg, '============================ORg');

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
      .get("/api/organization/organizationList", {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        setUserOrg(res.data?.body?.userOrg);
      })
      .catch((error) => {
        console.log(error, "=======================err");
        if (error.response.status == 400) {
          localStorage.clear();
          navigate("/");
        }
      });
  }, []);

  // =============================================table
  const columns = [
    "S.No.",
    "Organization Logo",
    "Name",
    "Organization Name",
    "Organization Email",
    "Organization Address",
    "Phone Number",
    "Action",
  ];

  let finalArray = [];

  for (let [index, data] of userOrg?.entries()) {
    // console.log(index, data, '=3=3=33333333333333sssss');

    const View_btn = (
      <Link to={`/orgnaizationView/${data._id}`}>
        <Button className="p-2 btn-gradient-info">view</Button>
      </Link>
    );

    const img = (
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/${data?.image}`}
        alt={data?.name}
      />
    );

    let dataArray = [];

    dataArray.push(index + 1);
    dataArray.push(img);
    dataArray.push(data.name);
    dataArray.push(data.organizationName);
    dataArray.push(data.organizationEmail);
    dataArray.push(data.organizationAddress);
    dataArray.push(data.phoneNumber);

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
    <>
      {!userOrg ? (
        ""
      ) : (
        <div className="container-scroller">
          <div className="content-wrapper">
            <div class="page-header align-items-center">
              <h4 className="page_Heading">All Organisation's</h4>
            </div>

            <div className="card-body mt-5 table-responsive text-start bg-white">
              <div className="d-flex">
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
        </div>
      )}
    </>
  );
}

export default OrganizationList;
