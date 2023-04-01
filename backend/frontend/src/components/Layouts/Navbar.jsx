import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { http } from '../../Config/Config';
import { ADMINPROFILE, LOGOUTACTION } from '../Redux/Action/userAction';
import avatar from '../../images/placeHolderImg.jpg';
import logo from '../../images/Logo.png';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(LOGOUTACTION());
    dispatch(ADMINPROFILE());
    navigate('/admin');
  };

  const adminProfile = useSelector((state) => state.adminProfile);
  const { adminProfileInfo } = adminProfile;

  return (
    <div>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row align-items-start">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/admin/dashboard">
            <img src={logo} alt={logo} className="h-auto" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/admin/dashboard">
            <img src="/assets/images/logo-mini.svg" alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-start">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu"></span>
          </button>

          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                href="*"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  {/* <img src="assets/images/faces/face1.jpg" alt="image"/> */}
                  <img
                    src={
                      adminProfileInfo?.image
                        ? `${http}/images/${adminProfileInfo?.image}`
                        : `${avatar}`
                    }
                    alt=""
                  />

                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{adminProfileInfo?.name}</p>
                </div>
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <Link className="dropdown-item" to="/admin/adminProfile">
                  <i className="mdi mdi-cached me-2 text-success"></i> Profile
                  Log
                </Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href=" " onClick={handleLogout}>
                  <i className="mdi mdi-logout me-2 text-primary"></i> Sign Out
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
