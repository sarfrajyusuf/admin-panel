import {
  ALL_MISSION_FAILED,
  ALL_MISSION_REQUEST,
  ALL_MISSION_SUCCESS,
} from '../Constant/missionConstant';

export const allMissionReducer = (
  state = { allMission: [], total: 0 },
  action
) => {
  switch (action.type) {
    case ALL_MISSION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_MISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.payload.total,
        allMission: action.payload.allMission,
      };

    case ALL_MISSION_FAILED:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};
