import express from "express";
import { createContact } from "../controllers/webcontroller/contactController.js";
import { registerUser } from "../controllers/webcontroller/registerController.js";
// const contactController = require("../controllers/webcontroller/contactController");
const contactRouter = express.Router();

contactRouter.route("/create").post(createContact);
contactRouter.route("/register").post(registerUser);

// module.exports = router;
export default contactRouter;
