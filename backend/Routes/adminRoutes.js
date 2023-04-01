import express from 'express';
import {
  adminProfile,
  approvedByAdmin,
  createSubAdmin,
  eventManager,
  getAlluser,
  login,
  logout,
  managerLogin,
  puchasedPlan,
  register,
  searchUser,
  singleUser,
  updateAdminProfileImg,
} from '../controllers/adminControler.js';
import { Admin, jwtToken } from '../middleWare/authToken.js';

const adminRouter = express.Router();

//-------------------POST REQ-------------------------//
adminRouter.route('/register').post(register);
adminRouter.route('/login').post(login);
adminRouter.route('/managerLogin').post(managerLogin);
adminRouter.route('/logout').post(jwtToken, Admin, logout);
adminRouter.route('/searchUser').post(searchUser);
adminRouter.route('/createSubAdmin').post(jwtToken, Admin, createSubAdmin);

//---------------GET REQ-------------------------//
adminRouter.route('/allUsers').get(jwtToken, Admin, getAlluser);
adminRouter.route('/singleUser/:id').get(jwtToken, Admin, singleUser);
adminRouter.route('/adminProfile').get(jwtToken, Admin, adminProfile);
adminRouter.route('/eventManager').get(jwtToken, Admin, eventManager);

//------------------PUT REQ-------------------------//
adminRouter
  .route('/updateAdminProfileImg')
  .put(jwtToken, updateAdminProfileImg);
adminRouter.route('/approvedByAdmin').put(jwtToken, Admin, approvedByAdmin);
adminRouter.route('/puchasedPlan').put(jwtToken, Admin, puchasedPlan);

export default adminRouter;
