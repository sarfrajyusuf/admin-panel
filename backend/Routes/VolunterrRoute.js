import express from "express";
import {
  createVoulentaries,
  getAllVoulentaries,
  singleVolunteer,
  searchVolunteer,
} from "../controllers/volunteerController.js";

import { Admin, jwtToken } from "../middleWare/authToken.js";

const volunteerRouter = express.Router();

volunteerRouter
  .route("/createVoulentaries")
  .post(jwtToken, Admin, createVoulentaries);
volunteerRouter
  .route("/allVoulentaries")
  .get(jwtToken, Admin, getAllVoulentaries);
volunteerRouter
  .route("/singleVolunteer/:id")
  .get(jwtToken, Admin, singleVolunteer);
volunteerRouter.route("/searchVolunteer").post(searchVolunteer);

export default volunteerRouter;
