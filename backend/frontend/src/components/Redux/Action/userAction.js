import { baseUrl } from '../../../Config/Config';
import {
  ALL_USER_FAILED,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  ADMIN_LOGOUT,
  CMS_DATA_REQUEST,
  CMS_DATA_SUCCESS,
  CMS_DATA_FAILED,
  SUBADMIN_DATA_REQUEST,
  SUBADMIN_DATA_SUCCESS,
  SUBADMIN_DATA_FAILED,
  ADMIN_PROFILE_DATA_REQUEST,
  ADMIN_PROFILE_DATA_SUCCESS,
  ADMIN_PROFILE_DATA_FAILED,
} from '../Constant/userConstant';
import queryString from 'query-string';

import { toast } from 'react-toastify';

export const LOGINUSER = (DATA) => async (dispatch) => {
  var toastOptions = {
    position: 'top-right',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const {
      data: { body },
    } = await baseUrl.post('/api/users/login', DATA);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: body,
    });
    if (body) toast.success('Login success', toastOptions);
    localStorage.setItem('adminInfo', JSON.stringify(body));
  } catch (error) {
    // console.log(error, "========action==============error");
    dispatch({
      type: USER_LOGIN_FAILED,
      //  alert("tgfjehwtujhu"),
      payload:
        error.response && error.response.data.message
          ? error.response.data.message // ? toast.error(error.response.data.message, toastOptions)
          : error.message,
    });
  }
};

export const LOGOUTACTION = () => async (dispatch, getState) => {
  const {
    adminLogin: { adminInfo },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${adminInfo.token}`,
    },
  };
  var ROLE = adminInfo?.userExist.role === 0;
  if (ROLE) {
    const { data } = baseUrl.post('/api/users/logout', config);
    // localStorage.removeItem('adminInfo');
    // localStorage.removeItem('adminProfileInfo');
    localStorage.clear();
    dispatch({ type: ADMIN_LOGOUT, payload: data });
    document.location.href = '/admin';
  } else {
    const { data } = baseUrl.post('/api/users/logout', config);
    // localStorage.removeItem('adminInfo');
    // localStorage.removeItem('adminProfileInfo');
    localStorage.clear();
    dispatch({ type: ADMIN_LOGOUT, payload: data });
    document.location.href = '/admin/managerLogin';
  }
};

export const ALLUSERS = (query) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_USER_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo?.token}`,
      },
    };

    const {
      data: { body },
    } = await baseUrl.get(
      `/api/users/allUsers?${queryString.stringify(query)}`,
      config
    );
    // console.log(body, '==========================action, allUser');

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: body,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CMSACTION = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CMS_DATA_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const {
      data: { body },
    } = await baseUrl.get(`/api/cms/getAll`, config);

    dispatch({
      type: CMS_DATA_SUCCESS,
      payload: body,
    });
    // console.log(body, "============================body");
  } catch (error) {
    dispatch({
      type: CMS_DATA_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EVENTMANAGER = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBADMIN_DATA_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const {
      data: { body },
    } = await baseUrl.get(`/api/users/eventManager`, config);

    dispatch({
      type: SUBADMIN_DATA_SUCCESS,
      payload: body,
    });
    // console.log(body, '====================subadmin========body');
  } catch (error) {
    dispatch({
      type: SUBADMIN_DATA_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ADMINPROFILE = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_PROFILE_DATA_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const {
      data: { body },
    } = await baseUrl.get(`/api/users/adminProfile`, config);

    dispatch({
      type: ADMIN_PROFILE_DATA_SUCCESS,
      payload: body,
    });
    if (body) {
      localStorage.setItem('adminProfileInfo', JSON.stringify(body));
    }
  } catch (error) {
    dispatch({
      type: ADMIN_PROFILE_DATA_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
