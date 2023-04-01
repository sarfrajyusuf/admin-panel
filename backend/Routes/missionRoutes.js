import express from "express";
import {
  activeMission,
  addTasks,
  assignManager,
  assignTaskForVolunteer,
  createMission,
  getAllMission,
  getOneMission,
  searchMission,
  updateStatus,
} from "../controllers/missionController.js";
// import {contact} from '../controllers/contactController'
import { Admin, jwtToken } from "../middleWare/authToken.js";

const missionRouter = express.Router();

missionRouter.route("/createMission").post(jwtToken, Admin, createMission);
missionRouter.route("/searchMission").post(searchMission);

missionRouter.route("/allMission").get(jwtToken, Admin, getAllMission);
missionRouter.route("/oneMission/:id").get(jwtToken, Admin, getOneMission);
missionRouter.route("/activeMission").get(jwtToken, Admin, activeMission);

missionRouter.route("/updateStatus").put(jwtToken, Admin, updateStatus);
missionRouter.route("/assignManager").put(assignManager);
missionRouter.route("/assignTaskForVolunteer").put(assignTaskForVolunteer);

missionRouter.route("/addTasks").put(addTasks);
export default missionRouter;
