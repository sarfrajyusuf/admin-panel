import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADMINPROFILE, CMSACTION } from '../Redux/Action/userAction';

// import { AdminProfileAction, GetCmsAction } from '../Redux/Action/adminAction';
import Loader from '../../Loader/Loader';

const TermView = () => {
  const ID = '63bcf2eedffb00a582392624';
  const [DATA, setDATA] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  const cmsData = useSelector((state) => state.cmsData);
  const { loading: cmsLoading, cms } = cmsData;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    dispatch(CMSACTION());
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
    if (cms) {
      const abus = cms?.filter((t) => t._id === ID)[0];
      abus && setDATA(abus);
    }
  }, [cms, cmsLoading]);

  return (
    <>
      {cmsLoading ? (
        <Loader />
      ) : (
        cms && (
          <div className="section mt-5" style={{ minHeight: '420px' }}>
            <div className="section-header">
              <h1 style={{ color: 'grey' }}>Term And Conditions</h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '1rem',
              }}
            >
              <h3 className="mx-3"> {DATA?.title}</h3>
              <div className="mx-3">
                <Link to={'/termAndcondition'} style={{ float: 'right' }}>
                  <Button>Edit</Button>
                </Link>
              </div>
            </div>
            <div style={{ margin: '2rem' }} />
            <p>{DATA?.content.replace(/<[^>]+>/g, '')}</p>
          </div>
        )
      )}
    </>
  );
};

export default TermView;
