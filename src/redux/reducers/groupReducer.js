import { ADD_GROUP } from '../actionTypes';

export default function groupReducer(state={}, action) {
  switch (action.type) {
    case ADD_GROUP:
      return { ...state, group: action.payload.group };
    
    default:
      return state;
  }
}

