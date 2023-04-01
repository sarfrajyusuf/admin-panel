// const userController = require("../controller/userController");
// const contactController = require("../controllers/contactController");
// // const auth = require("../middleware/auth_verifyToken");
// // const authValidation = require("../validation/authValidation");
// const express = require("express");
// const user_router = express();

// //signup and login
// user_router.post("/register", userController.register);
// user_router.post("/login", userController.login);
// user_router.get("/getUserData", userController.getUserData);
// user_router.post("/forgotPassword", userController.forgotPassword);
// user_router.post("/verifyEmail", userController.verifyEmail);
// user_router.post("/resetPassword", userController.resetPassword);
// user_router.post("/changePassword", userController.changePassword);
// // user_router.post("/create-contact", contactController.createContact);

// //contact
// // user_router.post("/create-contact", userController.createUser);
// // user_router.get("/get-contact", userController.getContact);

// module.exports = user_router;

import express from "express";
import { create } from "../controllers/contactController.js";
import { Admin, jwtToken } from "../middleWare/authToken.js";

const contactRouter = express.Router();
contactRouter.route("/create").post(jwtToken, Admin, create);

export default contactRouter;
