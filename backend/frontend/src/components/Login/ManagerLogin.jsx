import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADMINPROFILE, LOGINUSER } from '../Redux/Action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/Logo.png';
// import bgImg from '../../images/Image 1.png';

function ManagerLogin() {
  const toastOptions = {
    position: 'top-right',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
    limit: 1,
  };
  const [Data, setData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo, error } = adminLogin;

  // console.log(adminInfo, '======================adminInfo');

  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo, error: err, loading } = adminProfile;

  const handleChange = (event) => {
    setData({ ...Data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(LOGINUSER(Data));

    // console.log(error, '======================error');
  };

  useEffect(() => {
    // console.log('=hereeeeeeeeeeeee');
    dispatch(ADMINPROFILE());
  }, [adminInfo, dispatch]);

  useEffect(() => {
    // console.log(adminInfo?.userExist?.planType, '=======heeeeeeeeee');
    var ROLE = adminProfileInfo?.role === 1;
    if (ROLE) {
      if (
        adminInfo?.userExist?.planType === 11 ||
        adminInfo?.userExist?.managerId === null
      ) {
        navigate('/admin/plan');
      } else {
        navigate('/admin/dashboard');
      }
    }
  }, [adminProfileInfo, loading, adminInfo, navigate]);

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper bg_login d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src={logo} alt={logo} />
                    <h1>Manager</h1>
                  </div>
                  <Form
                    className="pt-3"
                    onChange={(e) => handleChange(e)}
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="form-control form-control-lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        className="form-control form-control-lg"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                      />
                      <i
                        onClick={togglePasswordVisiblity}
                        className={
                          showPassword
                            ? 'fa fa-eye customClass eye_btn'
                            : 'fa fa-eye-slash customClass eye_btn'
                        }
                        aria-hidden="true"
                      ></i>
                    </Form.Group>

                    <div className="mt-3">
                      <Button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SIGN IN
                      </Button>
                    </div>

                    {/* <div className="text-center mt-4 font-weight-light">
                      Don't have an account?
                      <Link to="/register">Create</Link>
                    </div> */}
                    {/* Alert */}
                    <div
                      className="text-center mt-4 font-weight-Bold"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 990,
                        right: 10,
                        zIndex: 999,
                      }}
                    >
                      {error && <Alert variant="danger">{error}</Alert>}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </div>
  );
}

export default ManagerLogin;
