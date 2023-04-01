import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

import Home from "../src/layout/pages/Home";

import "./App.css";
import PrivateRoute from "./layout/components/HOC/privateRoute";
import Change_password from "./layout/pages/account/Change_password";
import Packages from "./layout/pages/account/Packages";
import Edit_profile from "./layout/pages/account/Edit_profile";
import My_headers from "./layout/pages/account/My_headers";
import Total_points from "./layout/pages/account/Total_points";
import Profile from "./layout/pages/account/Profile";

import Footer from "./layout/include/footer";
import Header from "./layout/include/header";
import Header2 from "./layout/include/header_login";
import About from "./layout/pages/About";
import Blog from "./layout/pages/Blog";
import Contact from "./layout/pages/Contact";
import Faq from "./layout/pages/Faq";
import Help from "./layout/pages/Help";
import JobDetails from "./layout/pages/JobDetails";
import Jobs from "./layout/pages/Jobs";
import Organisation from "./layout/pages/Organisation";
import Payment from "./layout/pages/Payment";
import Payment2 from "./layout/pages/Payment2";
import Register from "./layout/pages/Register";
import Pricing from "./layout/pages/Pricing";
import Features from "./layout/pages/Features";
import Dashboard from "./layout/pages/Dashboard";
import User from "./layout/components/user";
import Terms from "./layout/pages/Terms";

function App() {
  const h = false;
  // const [user, setuser] = useState([]);

  // useEffect(() => {
  //   const authToken = localStorage.getItem();
  // }, []);

  return (
    <>
      {h ? <Header2 /> : <Header />}
      <Routes>
        {/* <Route exact element={<PrivateRoute />}> </Route> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/termsandcondition" element={<Terms />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/payment2" element={<Payment2 />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/organisation" element={<Organisation />} />

        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/jobDetails" element={<JobDetails />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<My_headers />}>
          <Route path="/user" element={<User />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit_profile" element={<Edit_profile />} />
          <Route path="change_password" element={<Change_password />} />
          <Route path="packages" element={<Packages />} />
          <Route path="total_points" element={<Total_points />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
