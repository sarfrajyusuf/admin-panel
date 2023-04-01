import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Config/Config';

function MyPlanInfo() {
  const [planData, setPlanData] = useState();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const UserPlan = adminInfo?.userExist.planType;

  useEffect(() => {
    baseUrl
      .get('/api/plan/planList')
      .then((res) => {
        setPlanData(res.data.body);
      })
      .catch((err) => console.log(err));
  }, []);

  const PlanPurchaseByUser = planData?.filter(
    (one) => one.planType === UserPlan
  );

  console.log(
    PlanPurchaseByUser?.map((one) => console.log(one.name)),
    '============PlanPurchaseByUser'
  );

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">My Plan Details</h4>
        </div>

        {PlanPurchaseByUser?.map((one) => (
          <div class="card-body text-start bg-white">
            <div class="form-group">
              <label className="fw-bold my-1">Plan Type</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={one?.name}
                  className="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label className="fw-bold my-1">Price</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={one?.price}
                  className="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label className="fw-bold my-1">Description</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  readonly=""
                  type="text"
                  value={one?.description}
                  className="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label className="fw-bold my-1">Volunteer Limit</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control"
                  readonly=""
                  value={
                    one?.planType === 0
                      ? ` ${30} "Volunteer"`
                      : one?.planType === 1
                      ? ` ${250} "Volunteer"`
                      : 'Unlimited'
                  }
                />
              </div>
            </div>

            <div className="form-group text-start">
              <Link to="/dashboard">
                <button type="button" className="go_back">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPlanInfo;
