import { ADD_GROUP } from '../actionTypes';
import { GET_GROUP } from '../actionTypes';
import { DELETE_GROUP } from '../actionTypes';


export default function groupReducer(state={}, action) {
  switch (action.type) {
    case ADD_GROUP:
      return { ...state, group: action.payload.group };
    case GET_GROUP: 
      return { ...state, groups: action.payload.groups };
    case DELETE_GROUP:
      console.log(state.groups)
      return {...state, groups: state.groups.filter((el)=>el._id!==action.payload.group._id)}
    
    default:
      return state;
  }
}

