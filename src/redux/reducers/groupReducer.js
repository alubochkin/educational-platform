import { UPDATE_GROUP, ADD_GROUP, GET_GROUP, DELETE_GROUP, LOGOUT_USER, GROUP_DETAILS } from '../actionTypes';

export default function groupReducer(state = {}, action) {
  switch (action.type) {
    case ADD_GROUP:
      return { ...state, groups: [...state.groups, action.payload.group] };
    case LOGOUT_USER:
      return { groups: [] };
    case GET_GROUP:
      return { ...state, groups: action.payload.groups };
    case DELETE_GROUP:
      return { ...state, groups: state.groups.filter((el) => el._id !== action.payload.group._id) };
    case GROUP_DETAILS:
      return { ...state, groupStudents: action.payload.students }
    case UPDATE_GROUP:
       console.log("action.payload.group", action.payload.group)
      return {...state, groups: [...state.groups, [action.payload.group]]}

    default:
      return state;
  }
}

