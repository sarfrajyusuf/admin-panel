import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Config/Config";
import avatar from "../../images/placeHolderImg.jpg";

function Blogs() {
  const [blogBata, setBlogData] = useState([]);

  const getAllBlogs = () => {
    baseUrl
      .get("/api/blog/getAllBlogs")
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data.body.allBlogs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // +++++++++++++++++++++++++++++++++++++++++++++++++
  const columns = ["S.No.", "image", "title", "contant", "Action"];

  let finalArray = [];

  for (let [index, data] of blogBata && blogBata?.entries()) {
    // console.log(index, data, '=3=3=33333333333333sssss');

    const View_btn = (
      <Link to={`/admin/blogDetail/${data._id}`}>
        <Button className="p-2 btn-gradient-info">view</Button>
      </Link>
    );

    const img = (
      <img
        src={
          data.image
            ? `${process.env.REACT_APP_BASE_URL}/images/${data.image}`
            : `${avatar}`
        }
        alt={data.title}
        style={{ height: "150px" }}
      />
    );

    let dataArray = [];

    dataArray.push(index + 1);
    dataArray.push(img);
    dataArray.push(data.title);
    dataArray.push(data.contant);
    dataArray.push(View_btn);

    finalArray.push(dataArray);
  }

  const data = finalArray;

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    filter: "false",

    viewColumns: false,
  };

  return (
    <div className="container-scroller">
      <div className="content-wrapper">
        <div class="page-header align-items-center">
          <h4 className="page_Heading">Blog's</h4>
        </div>
        <div className="card-body mt-5 text-start bg-white">
          <>
            <MUIDataTable
              // title={'Employee List'}
              data={data}
              columns={columns}
              options={options}
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
