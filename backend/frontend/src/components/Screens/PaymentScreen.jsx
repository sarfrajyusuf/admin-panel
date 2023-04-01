import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../Config/Config';
import { ADMINPROFILE } from '../Redux/Action/userAction';
import '../styles/paymentScreen.css';

function PaymentScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state, '==================locat');

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

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
  }, [adminProfileError, adminInfo, navigate]); /// token check---------------

  const handlePurchase = () => {
    //updtae planTYpe  in user data base
    let data = {
      planType: location.state.planType,
      planId: location.state.planId,
    };

    baseUrl
      .put('api/plan/updatePlanType', data, {
        headers: {
          authorization: `Bearer ${adminInfo?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          toast.success('Plan purchased successfully');
          navigate('/dashboard');
          dispatch(ADMINPROFILE());
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="pay_page py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="cards">
                <form action="" className="pay_ment_form">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="card p-3">
                        <h3 className="mb-4">Payment</h3>
                        <label for="cname">Name on Card</label>
                        <input
                          type="text"
                          name="cardname"
                          placeholder="John More Doe"
                        />
                        <label for="ccnum">Credit card number</label>
                        <input
                          type="text"
                          name="cardnumber"
                          placeholder="1111-2222-3333-4444"
                        />
                        <label for="expmonth">Exp Month</label>
                        <input
                          type="text"
                          name="expmonth"
                          placeholder="September"
                        />
                        <div className="row">
                          <div className="col-50">
                            <label for="expyear">Exp Year</label>
                            <input
                              type="text"
                              name="expyear"
                              placeholder="2018"
                            />
                          </div>
                          <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input type="text" name="cvv" placeholder="352" />
                          </div>
                        </div>
                        {/* <label>
                          <input type="checkbox" checked="checked" name="sameadr" />{' '}
                          Shipping address same as billing
                        </label> */}
                        <a className="btn btn-success" onClick={handlePurchase}>
                          Continue to Buy
                        </a>
                        {/* <button
                          type="submit"
                          onClick={handlePurchase}
                          value="Continue to Buy"
                          className="btn"
                        >
                          Continue to Buy
                        </button> */}
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card total_cart p-3">
                        <h4>
                          Plan Info
                          {/* <span class="price" style={{ color: 'black' }}>
                            <i class="fa fa-shopping-cart"></i> <b>4</b>
                          </span> */}
                        </h4>
                        <p>
                          <a>Plan Type</a>
                          <span class="price">
                            {location.state.planType == 0
                              ? 'Basic'
                              : location.state.planType == 1
                              ? 'Standard'
                              : 'Premium'}
                          </span>
                        </p>
                        <p>
                          <a>Price</a>
                          <span class="price">${location.state.planPrice}</span>
                        </p>
                        <p>
                          <a href="*">Volunteer</a>
                          <span class="price">{location.state.volunteer}</span>
                        </p>
                        {/* <p>
                          <a href="*">Product 4</a>{' '}
                          <span class="price">$2</span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="col-25">
          <div className="container">
            <h4>Plan Detail</h4>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentScreen;
