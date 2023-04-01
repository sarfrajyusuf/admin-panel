import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ADMINPROFILE } from '../Redux/Action/userAction';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/profile.css';
import 'reactjs-popup/dist/index.css';
import { baseUrl, http } from '../../Config/Config';
import avatar from '../../images/placeHolderImg.jpg';
import { useState } from 'react';
import { toast } from 'react-toastify';

function AdminProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgData, setImgData] = useState();
  const [userData, setUserData] = useState();

  const toastOptions = {
    position: 'top-right',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  let formData = new FormData();

  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo, error: adminProfileError } = adminProfile;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    dispatch(ADMINPROFILE());
    setUserData({ name: adminProfileInfo?.name });
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

  const imageUploader = (e) => {
    formData.append('image', e.target.files[0]);
  };

  const handleChange = (e) => {
    console.log(e.target.name, '============================');
    var regex = /[^a-z ]/gi;
    e.target.value = e.target.value.replace(regex, '');

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append('userData', JSON.stringify(userData));
    await baseUrl
      .put('/api/users/updateAdminProfileImg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setImgData(res.data.body.image);
          setUserData('');
          toast.success('updated successfully', toastOptions);
          dispatch(ADMINPROFILE('adminProfileInfo'));
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, toastOptions);
      });
  };

  return (
    <div className="mt-5">
      <Row className="mx-4 mt-2 pb-4">
        <Col md={4}>
          <Card className="bg-white p-3">
            <Card.Img
              variant="top"
              src={
                adminProfileInfo?.image
                  ? `${http}/images/${adminProfileInfo?.image}`
                  : `${avatar}`
              }
              alt={avatar}
            />
          </Card>
          <div className="form-group mt-3 mb-0" style={{ height: '60px' }}>
            <input
              type="file"
              className="form-control p-2 "
              value={imgData?.image}
              name="image"
              accept="image/*"
              onChange={(e) => imageUploader(e)}
            />
          </div>
        </Col>

        <Col md={8}>
          <Card style={{}}>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                  <div className="form-group1">
                    <label htmlFor="text" className="fw-bold my-1">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={userData?.name}
                      name="name"
                    />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="text" className="fw-bold my-1">
                      E-mail
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={adminProfileInfo?.email}
                      readOnly
                    />
                  </div>
                </form>
              </Card.Text>

              <Button
                onClick={handleSubmit}
                variant="success"
                style={{ float: 'left' }}
              >
                save changes
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AdminProfile;
