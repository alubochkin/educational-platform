import { GET_MODULES, ADD_MODULE, LOGOUT_USER, UPDATE_MODULE } from '../actionTypes';
const initState = { modules: [] };
export default function moduleReducer(state = initState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return { modules: [] };
    case GET_MODULES:
      return { ...state, modules: action.payload.modules };
    case ADD_MODULE:
      return { ...state, modules: [...state.modules, action.payload.moduleInfo] };
    case UPDATE_MODULE:
      console.log('action.payload.module', action.payload.module);
      return { ...state, modules: [...state.modules, [action.payload.module]] };
    default:
      return state;
  }
}

