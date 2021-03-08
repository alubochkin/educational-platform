import { GET_MODULES, ADD_MODULE} from '../actionTypes';
const initState = { modules: [] };
export default function moduleReducer(state = initState, action) {
  switch (action.type) {
    case GET_MODULES:
      return { ...state, modules: action.payload.modules };
     case ADD_MODULE:
      return { ...state, modules: [...state.modules, action.payload.moduleInfo] };
    
    default:
      return state;
  }
}

