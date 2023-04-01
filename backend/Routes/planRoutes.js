import express from 'express';
import {
  create,
  planList,
  updatePlanType,
} from '../controllers/planControllers.js';
import { jwtToken, Admin } from '../middleWare/authToken.js';
const planRouter = express.Router();

planRouter.route('/create').post(jwtToken, Admin, create);

planRouter.route('/planList').get(planList);

planRouter.route('/updatePlanType').put(jwtToken, updatePlanType);

export default planRouter;
