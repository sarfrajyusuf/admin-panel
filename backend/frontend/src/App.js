import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActiveMission from "./components/Screens/ActiveMission";

import SavedMission from "./components/Screens/SavedMission";
import View from "./components/Screens/View";
import { TermAndCondition } from "./components/Screens/TermAndCondition";
import TermView from "./components/Screens/TermView";
import PrivacyView from "./components/Screens/PrivacyView";
import { PrivacyAndPolicy } from "./components/Screens/PrivacyAndPolicy";
import AboutUsView from "./components/Screens/AboutUsView";
import { AboutUs } from "./components/Screens/AboutUs";

import AdminProfile from "./components/Screens/AdminProfile";
import CreateEvent from "./components/Screens/CreateEvent";
import EventManagers from "./components/Screens/EventManagers";
import AllTasks from "./components/Screens/AllTasks";

import EventManagerDetails from "./components/Screens/EventManagerDetails";
import PlanScreen from "./components/Screens/PlanScreen";
import { useSelector } from "react-redux";
import Voulentaries from "./components/Screens/Voulentaries";
import VoulentariesDetail from "./components/Screens/VoulentariesDetail";
import ManagerLogin from "./components/Login/ManagerLogin";
import CreateSubAdmin from "./components/Screens/CreateSubAdmin";
import MyPlanInfo from "./components/Screens/MyPlanInfo";
import TaskAssignByAdmin from "./components/Screens/TaskAssignByAdmin";
import AddTasks from "./components/Screens/AddTasks";
import CreateOrganisation from "./components/Screens/CreateOrganisation";
import OrganizationList from "./components/Screens/OrganizationList";
import OrgnaizationView from "./components/Screens/OrgnaizationView";
import PaymentScreen from "./components/Screens/PaymentScreen";
import Blogs from "./components/Screens/Blogs";
import BlogView from "./components/Screens/BlogView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/managerLogin" element={<ManagerLogin />} />
        <Route path="/admin/register" element={<Register />} />

        <Route path="/admin/plan" element={<PlanScreen />} />
        <Route path="/admin/paymentScreen" element={<PaymentScreen />} />

        {/* Layouts components */}
        <Route path="/admin" element={<Layouts />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/createEvent" element={<CreateEvent />} />
          {/* <Route path="/registerUsers" element={<RegisterUsers />} /> */}
          <Route path="/admin/allTasks" element={<AllTasks />} />
          <Route path="/admin/activeMission" element={<ActiveMission />} />
          <Route path="/admin/savedMission" element={<SavedMission />} />
          <Route path="/admin/view/:id" element={<View />} />
          {/* <Route path="/saved/view/:id" element={<View />} />
          <Route path="/active/view/:id" element={<View />} /> */}
          <Route
            path="/admin/termAndcondition"
            element={<TermAndCondition />}
          />
          <Route path="/admin/termView" element={<TermView />} />
          <Route
            path="/admin/privacyAndpolicy"
            element={<PrivacyAndPolicy />}
          />
          <Route path="/admin/privacyView" element={<PrivacyView />} />
          <Route path="/admin/aboutUs" element={<AboutUs />} />
          <Route path="/admin/aboutView" element={<AboutUsView />} />
          <Route path="/admin/eventManagers" element={<EventManagers />} />
          <Route
            path="/admin/eventManagerDetails/:id"
            element={<EventManagerDetails />}
          />
          <Route path="/admin/adminProfile" element={<AdminProfile />} />
          <Route path="/admin/allVolunteer" element={<Voulentaries />} />
          <Route
            path="/admin/volunteerDetail/:id"
            element={<VoulentariesDetail />}
          />
          <Route path="/admin/createSubAdmin" element={<CreateSubAdmin />} />
          <Route path="/admin/MyPlanInfo" element={<MyPlanInfo />} />
          <Route
            path="/admin/taskAssignByAdmin"
            element={<TaskAssignByAdmin />}
          />
          <Route path="/admin/addTasks/:id" element={<AddTasks />} />
          <Route
            path="/admin/createOrganization"
            element={<CreateOrganisation />}
          />
          <Route
            path="/admin/organizationList"
            element={<OrganizationList />}
          />
          <Route
            path="/admin/orgnaizationView/:id"
            element={<OrgnaizationView />}
          />
          <Route path="/admin/allBlogs" element={<Blogs />} />
          <Route path="/admin/blogDetail/:id" element={<BlogView />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
