import React from 'react';
import '../styles/planScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { baseUrl } from '../../Config/Config';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ADMINPROFILE, LOGINUSER } from '../Redux/Action/userAction';
import { toast } from 'react-toastify';

function PlanScreen() {
  const navigate = useNavigate();
  const [palnData, setPlanData] = useState();
  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  useEffect(() => {
    let plan = adminInfo?.userExist?.planPurchase === true;
    if (plan) {
      dispatch(ADMINPROFILE());
      navigate('/dashboard');
    }
  }, [navigate, adminInfo, dispatch]);

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
      .get('/api/plan/planList')
      .then((res) => {
        setPlanData(res.data.body);
      })
      .catch((err) => console.log(err));
  }, []);

  // related purchase-------------------=--------------------=--------------------=

  // ==Not update dashboard when we purchase the plan

  const handlePurchase = (plantype, plan) => {
    //updtae planTYpe  in user data base
    let data = {
      planType: plantype,
      planId: plan,
    };

    baseUrl
      .put('api/plan/updatePlanType', data, {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          // Swal.fire("Puchased!", "success");
          toast.success('Plan purchased successfully');
          navigate('/dashboard');
          dispatch(ADMINPROFILE());
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(palnData, '====================palnDatapalnDatapalnData');

  return (
    <div>
      <section className="section" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">Choose Your Plan</h3>
                {/* <p className="text-muted f-17 mt-3">
                  Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris sit amet arcu
                  <br>
                    fringilla auctor In eleifend maximus nisi sed vulputate.
                  </br>
                </p> */}

                <img
                  src="images/home-border.png"
                  height="15"
                  className="mt-3"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row mt-2 pt-4 ">
            {palnData?.map((plan) => (
              <div className="col-lg-4 ">
                <div
                  className="pricing-box mt-4"
                  style={{ background: 'beige' }}
                >
                  <i className="mdi mdi-account h1"></i>
                  <h4 className="f-20">{plan.name}</h4>
                  {plan?.planType !== 2 ? (
                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      <p className="mb-2">
                        <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                        <b> {plan.limit} </b>
                        User Account
                      </p>
                      <p className="mb-2">
                        <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                        <b> Volunteer : </b>
                        {plan?.volunteer}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      <p className="mb-2">
                        <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                        <b> Unlimited : </b>
                        User Account
                      </p>
                      <p className="mb-2">
                        <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                        <b> Volunteer : </b>
                        {plan.volunteer}
                      </p>
                    </div>
                  )}
                  <p className="mt-4 pt-2 text-muted">{plan.description}</p>
                  <div className="pricing-plan mt-4 pt-2">
                    <h4 className="text-muted">
                      {/* <s> ${plan.price}</s> */}
                      <span className="plan pl-3 text-dark">
                        {/* ${plan.price - (plan.price * plan.discount) / 100} */}
                        ${plan.price}
                      </span>
                    </h4>
                  </div>
                  {console.log(plan.price, '==========================')}
                  {/* --------------------Purchased BTN------------------ */}

                  {plan?.planType === 0 ? (
                    <div className="mt-4 pt-3">
                      <Link
                        to="/paymentScreen"
                        className="btn btn-primary btn-rounded"
                        name="planType"
                        value="0"
                        // onClick={() => handlePurchase(0, plan._id)}
                        state={{
                          planType: 0,
                          planId: plan._id,
                          planPrice: plan.price,
                          volunteer: plan.volunteer,
                        }}
                      >
                        Purchase Now
                      </Link>
                    </div>
                  ) : plan?.planType === 1 ? (
                    <div className="mt-4 pt-3">
                      <Link
                        to="/paymentScreen"
                        className="btn btn-primary btn-rounded"
                        name="planType"
                        value="1"
                        // onClick={() => handlePurchase(1, plan._id)}
                        state={{
                          planType: 1,
                          planId: plan._id,
                          planPrice: plan.price,
                          volunteer: plan.volunteer,
                        }}
                      >
                        Purchase Now
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3">
                      <Link
                        to="/paymentScreen"
                        className="btn btn-primary btn-rounded"
                        name="planType"
                        value="2"
                        // onClick={() => handlePurchase(2, plan._id)}
                        state={{
                          planType: 2,
                          planId: plan._id,
                          planPrice: plan.price,
                          volunteer: plan.volunteer,
                        }}
                      >
                        Purchase Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlanScreen;
