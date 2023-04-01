import express from "express";
import {
  registerUser,
  login,
  Profile,
} from "../../controllers/webcontroller/registerController.js";
import { Admin, jwtToken } from "../../middleWare/authToken.js";
// const contactController = require("../controllers/webcontroller/contactController");
const registerRouter = express.Router();

// contactRouter.route("/create").post(createContact);
registerRouter.route("/register").post(registerUser);
registerRouter.route("/login").post(login);
registerRouter.route("/profile").get(jwtToken, Admin, Profile);
// module.exports = router;
export default registerRouter;
