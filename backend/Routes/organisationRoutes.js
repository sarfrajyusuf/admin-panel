import express from 'express';
import {
  createOrganisation,
  oneOrganization,
  organizationList,
  updateOrganization,
} from '../controllers/organizationController.js';
import { jwtToken } from '../middleWare/authToken.js';

const organisationRouter = express.Router();

organisationRouter
  .route('/createOrganization')
  .post(jwtToken, createOrganisation);

//-------------------------Get------------------------//
organisationRouter.route('/organizationList').get(jwtToken, organizationList);
organisationRouter.route('/oneOrganization/:id').get(jwtToken, oneOrganization);

//==========================Put------------------------//

organisationRouter
  .route('/updateOrganization/:id')
  .put(jwtToken, updateOrganization);

export default organisationRouter;
