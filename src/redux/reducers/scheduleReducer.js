import { ADD_SCHEDULE, LOGOUT_USER, GET_SCHEDULE } from '../actionTypes';
const initState = { schedules: [] };
export default function scheduleReducer(state = initState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return { schedules: [] };
    case GET_SCHEDULE:
      return { ...state, schedules: action.payload.schedulesList };
    case ADD_SCHEDULE:
      return { ...state, schedules: [...state.schedules, ...action.payload.scheduleInfo] };
    // case UPDATE_MODULE:
    //   const modulesPrev = state.modules.filter(el => el._id !== action.payload.moduleInfo._id);
    //   return { ...state, modules: [...modulesPrev, action.payload.moduleInfo] };

    default:
      return state;
  }
}
