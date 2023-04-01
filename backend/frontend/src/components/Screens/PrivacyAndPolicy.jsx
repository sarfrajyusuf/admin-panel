import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
// import Swal from 'sweetalert2';
import { ADMINPROFILE, CMSACTION } from "../Redux/Action/userAction";
import { baseUrl } from "../../Config/Config";
import { toast } from "react-toastify";

export const PrivacyAndPolicy = () => {
  const ID = "63bcf32edffb00a582392627";
  const navigate = useNavigate();
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo, loading } = adminLogin;

  const cmsData = useSelector((state) => state.cmsData);
  const { cms, loading: cmsLoading } = cmsData;

  const adminProfile = useSelector((state) => state.adminProfile);
  const { error: adminProfileError } = adminProfile;

  useEffect(() => {
    let role = adminInfo?.userExist?.role === 0;
    // let managerRole = adminInfo?.userExist?.role === 1;
    if (role) {
      if (!adminInfo) {
        navigate("/admin");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/admin");
      }
    } else {
      if (!adminInfo) {
        navigate("/admin/managerLogin");
      }
      if (adminProfileError) {
        localStorage.removeItem("adminProfileInfo");
        localStorage.removeItem("adminInfo");
        navigate("/admin/managerLogin");
      }
    }
  }, [adminProfileError, loading, adminInfo, navigate]);

  useEffect(() => {
    dispatch(CMSACTION());
    dispatch(ADMINPROFILE());
  }, [dispatch]);

  useEffect(() => {
    if (cms) {
      const CMSDATA = cms?.filter((a) => a._id === ID)[0];
      if (CMSDATA) {
        setData(CMSDATA);
      }
    }
  }, [cms, cmsLoading]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const contentChange = (e, editor) => {
    setData({ ...data, content: editor.getData() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      baseUrl
        .put(`api/cms/updateCMS/${ID}`, data, {
          headers: {
            Authorization: `Bearer ${adminInfo?.token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            toast.success("updated", toastOptions);
          }
          navigate("/admin/privacyAndpolicy");
        })
        .catch((er) => {
          console.log(er.message, "====================er");
          toast.error(" Not update", toastOptions);
        });
    }
  };

  return (
    <section className="section">
      <div className="section-header mt-5">
        {/* <h1 id="animated_box">Page</h1> */}
      </div>

      <div className="section-body">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="card rounded-0">
                {/* <Link to={'/privacyView'}>
                  <button
                    className="btn btn-primary  mb-3 p-2 mx-4"
                    style={{ float: 'right' }}
                  >
                    Go Back
                  </button>
                </Link> */}

                <div className="card-header ">
                  <h4>Privacy And Policy</h4>
                </div>

                <div className="card-body">
                  <div class="form-group row mb-4">
                    <div class="col-11 ">
                      <label class="col-form-label col- text-dark font-weight-bold  py-3 ">
                        Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        class="form-control"
                        name="title"
                        value={data?.title}
                      />
                    </div>
                  </div>

                  <div className="App ">
                    <CKEditor
                      editor={ClassicEditor}
                      name="content"
                      data={data?.content}
                      onChange={contentChange}
                    />
                  </div>
                  <div className="form-group row py-4">
                    <div className="col-sm-12 col-md-7">
                      <button
                        id="updateContent"
                        className="btn btn-primary float-start"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
