// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { ToastContainer, toast } from "react-toastify";
// import * as Yup from "yup";
// import { REGISTER } from "../../services/AuthApi";
// const axios = require("axios").default;

// const Register = (props) => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     organization: "",
//     password: "",
//     plantype: [],
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault(e);
//     axios.post(`http://localhost:8000/register`, user).then(() => {
//       console.log("data ");
//       // navigate("/Dashboard");
//     });
//     console.log("abc");
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   console.log(user, "user");
//   return (
//     <>
//       <section className="inner_benner">
//         <h2>Register</h2>
//         <p>Home / Register</p>
//       </section>
//       <section className="registeration_form" id="registeration_form">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-8 md-offset-2">
//               <form onSubmit={handleSubmit}>
//                 <h2>Registeration Details</h2>
//                 <p>
//                   Create an account and get a 14 day free trial, no credit card
//                   required.
//                 </p>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=" Name*"
//                         name="name"
//                         autofocus
//                         onChange={(e) => handleChange(e)}
//                       />{" "}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=" Email*"
//                         name="email"
//                         onChange={(e) => handleChange(e)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=" Phone Number*"
//                         name="phoneNumber"
//                         onChange={(e) => handleChange(e)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=" Organization name"
//                         name="organization"
//                         onChange={(e) => handleChange(e)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=" Password"
//                         name="password"
//                         onChange={(e) => handleChange(e)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group mb-3">
//                       <select name="plantype" id="" className="form-select">
//                         <option value="">Plan type*</option>
//                         <option value=""> 6 Month </option>
//                         <option value="">1 Years</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="need_help">
//                   <div className="remember">
//                     Need help? You can review{" "}
//                     <span className="theme_text_color">
//                       {" "}
//                       plans and pricing here
//                     </span>{" "}
//                   </div>
//                   <div className="remember">
//                     <input
//                       type="checkbox"
//                       id="flexCheckDefault"
//                       name="acceptTerms"
//                     />
//                     Check here to agree to our{" "}
//                     <a href="./terms_of_use.html" className="theme_text_color">
//                       {" "}
//                       terms &amp; conditions
//                     </a>
//                   </div>
//                 </div>

//                 <div className="col-md-12 submit">
//                   {/* <input type="submit" className="fw-normal" value="Sign Up" /> */}
//                   <button type="submit" className="fw-normal" on>
//                     Register
//                   </button>
//                   <p>
//                     {" "}
//                     <a href="" className="remember">
//                       {" "}
//                       Already a member? Sign In{" "}
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Register;
