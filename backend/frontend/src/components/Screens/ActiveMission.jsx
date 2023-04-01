import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Pagination } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../Config/Config';
import { ADMINPROFILE } from '../Redux/Action/userAction';
import { toast } from 'react-toastify';
import { ALLMISSION } from '../Redux/Action/missionAction';
import MUIDataTable from 'mui-datatables';

function ActiveMission() {
  const toastOptions = {
    position: 'top-right',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  const [dataa, setData] = useState([]);

  const [query, setQuery] = useState({
    limit: 10,
    sortBy: 'name',
    page: 0,
    sortOrder: 1,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const allMission = useSelector((state) => state.allMission);
  const { total, allMission: missions } = allMission;

  useEffect(() => {
    dispatch(ADMINPROFILE());
  }, [dispatch]);

  useEffect(() => {
    let role = adminInfo?.userExist?.role === 0;
    // let managerRole = adminInfo?.userExist?.role === 1;
    if (role) {
      if (!adminInfo) {
        navigate('/');
      }
      if (adminProfileError) {
        localStorage.removeItem('adminProfileInfo');
        localStorage.removeItem('adminInfo');
        navigate('/');
      }
    } else {
      if (!adminInfo) {
        navigate('/managerLogin');
      }
      if (adminProfileError) {
        localStorage.removeItem('adminProfileInfo');
        localStorage.removeItem('adminInfo');
        navigate('/managerLogin');
      }
    }
  }, [adminProfileError, adminInfo, navigate]);

  useEffect(() => {
    baseUrl
      .get('/api/mission/activeMission', {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        console.log(res, '======================$+======');
        setData(res.data.body.active);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [adminInfo]);

  if (dataa?.length) {
    var n = 1;
  }

  const handleChange = async (e, id) => {
    const formData = new FormData();
    formData.append('status', e.target.value);
    formData.append('id', id);
    await baseUrl
      .put(`/api/mission/updateStatus`, formData, {
        headers: {
          Authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status) {
          toast.success('status updated', toastOptions);
        }
      })
      .catch((err) => console.log(err));
  };

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

  // =======================================================================
  const columns = [
    'S.No.',
    'Event Name',
    'Date',
    'Time',
    'Description',
    'Status',
    'Action',
  ];

  let finalArray = [];

  if (adminInfo?.userExist?.role === 0) {
    for (let [index, data] of dataa.entries()) {
      console.log(index, data, '=3=3=33333333333333');

      const View_btn = (
        <Link to={`/view/${data._id}`}>
          <Button className="p-2 btn-gradient-info">view</Button>
        </Link>
      );

      const selectOption = (
        <select
          style={{
            borderRadius: '20px',
            margin: '2px',
            padding: '5px',
            textAlign: 'center',
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.status}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className="badge badge-success" value="0">
            Active
          </option>
          <option className="badge badge-danger" value="1">
            Complete
          </option>
        </select>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(moment(data.dateAndTime).format('DD-MM-YYYY'));
      dataArray.push(moment(data.dateAndTime).format(' HH:mm A'));
      dataArray.push(data.description.substr(0, 30));
      dataArray.push(selectOption);
      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
  } else {
    for (let [index, data] of EventManagerTask.entries()) {
      console.log(index, data, '=3=3=33333333333333');

      const View_btn = (
        <Link to={`/view/${data._id}`}>
          <Button className="p-2 btn-gradient-info">view</Button>
        </Link>
      );

      const selectOption = (
        <select
          style={{
            borderRadius: '20px',
            margin: '2px',
            padding: '5px',
            textAlign: 'center',
          }}
          className="btn btn-outline-secondry dropdown-toggle"
          name="status"
          defaultValue={data?.status}
          onChange={(e) => handleChange(e, data?._id)}
        >
          <option className="badge badge-success" value="0">
            Active
          </option>
          <option className="badge badge-danger" value="1">
            Complete
          </option>
        </select>
      );

      let dataArray = [];

      dataArray.push(index + 1);
      dataArray.push(data.name);
      dataArray.push(moment(data.dateAndTime).format('DD-MM-YYYY'));
      dataArray.push(moment(data.dateAndTime).format(' HH:mm A'));
      dataArray.push(data.description.substr(0, 30));
      dataArray.push(selectOption);
      dataArray.push(View_btn);

      finalArray.push(dataArray);
    }
  }
  const data = finalArray;

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    filter: 'false',

    viewColumns: false,
  };

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Active Events's</h4>
        </div>

        <div className="card-body mt-5 table-responsive text-start bg-white">
          <div className="d-grid justify-content-end">
            <Link
              to="/admin/allTasks"
              style={{
                textDecoration: 'none',
                color: 'white',
                float: 'left',
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
export default ActiveMission;
