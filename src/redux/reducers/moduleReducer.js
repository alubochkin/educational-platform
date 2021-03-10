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
      console.log(state.modules)

      let foundIndex = state.modules.findIndex(el => el._id === action.payload.moduleInfo._id);
      console.log(foundIndex)
      
      const module1 = state.modules.slice(0, foundIndex);
      const module2 = state.modules.slice(foundIndex+1, state.modules.lenght); 
      
     

    return {...state, modules: [...module1, action.payload.moduleInfo, ...module2 ]};      
      
   
        
    default:
      return state;
  }
}
