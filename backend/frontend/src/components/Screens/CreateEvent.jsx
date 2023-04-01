import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { DateTimeField } from 'react-bootstrap-datetimepicker';
import { baseUrl } from '../../Config/Config';
import { ADMINPROFILE } from '../Redux/Action/userAction';
import '../styles/createTask.css';

function CreateEvent() {
  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo, error: adminProfileError } = adminProfile;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const toastOptions = {
    position: 'top-right',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  let formData = new FormData();
  const [imgData, setImgData] = useState();

  const [data, setData] = useState({
    eventManagerId: adminProfileInfo?._id,
    ManagerId: adminProfileInfo?.managerId,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(ADMINPROFILE());
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
  }, [adminProfileError, adminInfo, navigate, dispatch]);

  const imageUploader = (e) => {
    setImgData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imgData == null || undefined) {
      toast.error('Please select image', toastOptions);
      return;
    }
    if (handelValidation()) {
      // let data1 = JSON.stringify(data);

      // formData.append('userData', data1);
      formData.append('ManagerId', data.ManagerId);
      formData.append('dateAndTime', data.dateAndTime);
      formData.append('description', data.description);
      formData.append('eventManagerId', data.eventManagerId);
      formData.append('name', data.name);
      formData.append('image', imgData);
      await baseUrl
        .post('/api/mission/createMission', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${adminInfo?.token}`,
          },
        })
        .then((res) => {
          if (res.data.status === 201) {
            setData('');
            setImgData('');
            navigate('/allTasks');
            toast.success('Event cretaed Successfully', toastOptions);
          }
        })
        .catch((err) => {
          console.log(err, '======================err');
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };

  const handelValidation = () => {
    const { name, dateAndTime, description } = data;
    const { image } = imgData;
    if (!name && !dateAndTime && !description) {
      toast.error('All field is mandatory', toastOptions);
      return false;
    } else if (!name) {
      toast.error('The name field is mandatory', toastOptions);
      return false;
    } else if (!dateAndTime) {
      toast.error('The date and time field is mandatory', toastOptions);
      return false;
    } else if (!description) {
      toast.error('The description field is mandatory', toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Create Event</h4>
        </div>

        <div className="card-body mt-5 text-start  bg-white">
          <form className="forms-sample" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label for="exampleInputName1">Event Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Mission Title"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail3">Date And Time </label>

              <input
                type="datetime-local"
                name="dateAndTime"
                className="form-control"
                placeholder="Enter Date And Time"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail3">Description </label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Enter About Mission"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail3">Event Image</label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter About Mission"
                name="image"
                accept="image/*"
                onChange={(e) => imageUploader(e)}
              />
            </div>

            <div className="lastTwo-btn pb-3">
              <button type="submit" className="btn btn-gradient-primary me-2">
                Submit
              </button>
              <Link to="/dashboard">
                <button className="btn btn-light">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
