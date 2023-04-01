import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios").default;

const Contact = (props) => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  // const [postContact, setPostContact] = useState({
  //   // name: "",
  //   // email: "",
  //   // phone: "",
  //   // subject: "",
  //   // message: "",
  // });
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  //post contact data here
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handelValidation()) {
      // await baseUrl
      axios
        .post("http://65.2.68.95:5010/api/contact/createContact", data)
        .then((res) => {
          if (res.data.status === 201) {
            toast.success(" Contact created succcessfully", toastOptions);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };
  const handelValidation = () => {
    const { name, email, mobile, subject } = data;
    if ((!name, !email && !subject && !mobile)) {
      toast.error("All field is mandatory", toastOptions);
      return false;
    } else if (!name) {
      toast.error("The name field is mandatory", toastOptions);
      return false;
    } else if (!email) {
      toast.error("The email field is mandatory", toastOptions);
      return false;
    } else if (!subject) {
      toast.error("The password field is mandatory", toastOptions);
      return false;
    } else if (!mobile) {
      toast.error("The mobile field is mandatory", toastOptions);
      return false;
    }
    return true;
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault(e);
  //   axios
  //     .post(`http://localhost:5000/api/contact/create`, postContact)
  //     .then(() => {
  //       toast("contact saved");
  //       console.log("data ");
  //       // navigate("/Dashboard");
  //     });
  //   console.log("abc");
  // };
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="inner_benner">
        <h2>Contact Us</h2>
        <p>Home / Contact Us</p>
      </section>
      <section className="contact_contractor" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6 className="get_in">Get in touch with us</h6>
              <div className="contact_data">
                <ul>
                  <li>
                    <figure>
                      <img src="./images/phone1.png" alt="" />
                    </figure>
                    <div className="rite_content">
                      <h4>Call Anytime</h4>
                      <p>(+1) 123 45 678 - 987 650 4321</p>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src="./images/email2.png" alt="" />
                    </figure>
                    <div className="rite_content">
                      <h4>Write Email</h4>
                      <p>info@example.com</p>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src="./images/location1.png" alt="" />
                    </figure>
                    <div className="rite_content">
                      <h4>Visit Office</h4>
                      <p>9907 Salford road, east London Uk 2807</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <form action="" className="contact">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email*"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Phone Number*"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write Message"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="submit_button"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="map pt-0">
        <img src="./images/mp.png" alt="" width="100%" />

        <a href="#" className="loac_icon">
          <img src="./images/map_location.png" className="w-100 h-100" alt="" />
        </a>

        {/* <!-- <div className="map_btns">
            <a href="#" className="btn ">Map View</a>
            <a href="#" className="btn active">List View</a>
        </div> --> */}
      </section>
    </>
  );
};
export default Contact;
