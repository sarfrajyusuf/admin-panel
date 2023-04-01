import {
  ADMIN_LOGOUT,
  ALL_USER_FAILED,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  CMS_DATA_SUCCESS,
  CMS_DATA_FAILED,
  CMS_DATA_REQUEST,
  SUBADMIN_DATA_REQUEST,
  SUBADMIN_DATA_SUCCESS,
  SUBADMIN_DATA_FAILED,
  ADMIN_PROFILE_DATA_REQUEST,
  ADMIN_PROFILE_DATA_SUCCESS,
  ADMIN_PROFILE_DATA_FAILED,
} from '../Constant/userConstant';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };

    case ADMIN_LOGOUT:
      return [];
    default:
      return state;
  }
};
export const allUserReducer = (
  state = { total: 0, users: [], admin: [] },
  action
) => {
  switch (action.type) {
    case ALL_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.payload.total,
        users: action.payload.users,
        admin: action.payload.admin,
      };

    case ALL_USER_FAILED:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};

export const CmsReducer = (state = { cms: [] }, action) => {
  switch (action.type) {
    case CMS_DATA_REQUEST:
      return { loading: true };
    case CMS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        cms: action.payload,
        success: true,
        error: '',
      };
    case CMS_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventManagerReducer = (
  state = { eventManager: [], eventManagerCount: 0, admin: [] },
  action
) => {
  switch (action.type) {
    case SUBADMIN_DATA_REQUEST:
      return { loading: true };
    case SUBADMIN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        eventManager: action.payload.eventManager,
        eventManagerCount: action.payload.eventManagerCount,
        admin: action.payload.admin,
        success: true,
        error: '',
      };
    case SUBADMIN_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AdminProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_PROFILE_DATA_REQUEST:
      return { loading: true };
    case ADMIN_PROFILE_DATA_SUCCESS:
      return { ...state, loading: false, adminProfileInfo: action.payload };
    case ADMIN_PROFILE_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
