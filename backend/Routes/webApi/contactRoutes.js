import express from "express";
import { createContact } from "../../controllers/webcontroller/contactController.js";
import { jwtToken } from "../../middleWare/authToken.js";
const contactRoute = express.Router();

contactRoute.route("/createContact").post(createContact);
export default contactRoute;
