import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  AdminProfileReducer,
  allUserReducer,
  CmsReducer,
  eventManagerReducer,
  loginReducer,
} from './Reducer/userReducer';
import { allMissionReducer } from './Reducer/missionReducer';

const reducer = combineReducers({
  adminLogin: loginReducer,
  adminProfile: AdminProfileReducer,
  allUsers: allUserReducer,
  allMission: allMissionReducer,
  cmsData: CmsReducer,
  eventManagerData: eventManagerReducer,
});

const adminInfoFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null;

const adminProfileInfoFromStorage = localStorage.getItem('adminProfileInfo')
  ? JSON.parse(localStorage.getItem('adminProfileInfo'))
  : null;

const initialstate = {
  adminLogin: { adminInfo: adminInfoFromStorage },
  adminProfile: { adminProfileInfo: adminProfileInfoFromStorage },
};
const middleware = [thunk];

const Store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
