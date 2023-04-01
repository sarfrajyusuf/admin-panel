import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Config/Config";
import avatar from "../../images/placeHolderImg.jpg";

function BlogView() {
  const ID = useParams().id;
  const [data, setData] = useState();
  const getBlogDetail = () => {
    baseUrl
      .get(`api/blog/blogDetail/${ID}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // console.log("submit caled");
    e.preventDefault();
    baseUrl
      .put(`/api/blog/updateBlog/${ID}`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-scroller">
        <div className="content-wrapper">
          <div class="page-header align-items-center">
            <h4 className="page_Heading">Blog Detail</h4>
          </div>
          <section className="section pt-5">
            <div class="card-body text-start bg-white">
              <h1 className="page_Heading"></h1>
              <div className="form-group text-center  ">
                <img
                  alt={data?.name}
                  className="user_imgs"
                  src={
                    data?.image
                      ? `${process.env.REACT_APP_BASE_URL}/images/${data?.image}`
                      : `${avatar}`
                  }
                  // data-original-title="Usuario"
                />
              </div>
              <div class="form-group">
                <label className="fw-bold my-1">Title</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    // readonly=""
                    type="text"
                    name="title"
                    value={data?.title}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="form-group">
                <label className="fw-bold my-1">Contant</label>
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                  <input
                    // readonly=""
                    type="text"
                    name="contant"
                    value={data?.contant}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group text-start mx-2">
                  <button
                    type="Submit"
                    className="btn btn-success"
                    onClick={handleSubmit}
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px 18px",
                    }}
                  >
                    Update
                  </button>
                </div>
                <div className="form-group text-start">
                  <Link to="/admin/allBlogs">
                    <button type="button" className="go_back">
                      Go Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BlogView;
