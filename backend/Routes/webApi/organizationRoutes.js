import express from "express";
import { createOrganization } from "../../controllers/webcontroller/organizationController.js";
import { jwtToken } from "../../middleWare/authToken.js";
const organization = express.Router();

organization.route("/createOrganization").post(createOrganization);
export default organization;
