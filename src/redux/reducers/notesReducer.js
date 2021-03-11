import { UPDATE_NOTES, ADD_NOTES, GET_NOTES, DELETE_NOTES } from '../actionTypes';

export default function groupReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NOTES:
      return { ...state, notes: [...state.notes, action.payload.notes] };
    case GET_NOTES:
      return { ...state, notes: action.payload.notes };
    case DELETE_NOTES:
      return { ...state, notes: state.notes.filter((el) => el._id !== action.payload.notes._id) };
    case UPDATE_NOTES:
      return { ...state, notes: [...state.notes, [action.payload.notes]] }
    default:
      return state;
  }
}
