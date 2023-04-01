import express from 'express';
import {
  getAll,
  getById,
  termAndConditoin,
  cmsdata,
  create,
} from '../controllers/cmsController.js';
import { Admin, jwtToken } from '../middleWare/authToken.js';

const cmsRouter = express.Router();

cmsRouter.route('/updateCMS/:id').put(jwtToken, Admin, termAndConditoin);
cmsRouter.route('/create').post(jwtToken, Admin, create);
cmsRouter.route('/getAll').get(jwtToken, Admin, getAll);
cmsRouter.route('/getSingleData/:cmsid').get(jwtToken, Admin, getById);

cmsRouter.route('/cmsupdate').post(cmsdata);

export default cmsRouter;
