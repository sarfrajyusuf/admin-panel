import { baseUrl } from '../../../Config/Config';
import {
  ALL_MISSION_FAILED,
  ALL_MISSION_REQUEST,
  ALL_MISSION_SUCCESS,
} from '../Constant/missionConstant';
import queryString from 'query-string';

export const ALLMISSION = (query) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_MISSION_REQUEST,
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
      `/api/mission/allMission?${queryString.stringify(query)}`,
      config
    );
    // console.log(body, '==========================action, allMission');

    dispatch({
      type: ALL_MISSION_SUCCESS,
      payload: body,
    });
  } catch (error) {
    dispatch({
      type: ALL_MISSION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
