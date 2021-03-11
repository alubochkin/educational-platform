import { UPDATE_NOTES, ADD_NOTES, LOGOUT_USER, GET_NOTES, DELETE_NOTES } from '../actionTypes';

export default function notesReducer(state = {}, action) {
  switch (action.type) {
    // case LOGOUT_USER:
    //   return { notes: [] };
    case ADD_NOTES:
      return { ...state, notes: [...state.notes, action.payload.notes] };
    case GET_NOTES:
      console.log('***', action.payload.notes);
      return { ...state, notes: action.payload.notes };
    case DELETE_NOTES:
      return { ...state, notes: state.notes.filter((el) => el._id !== action.payload.notes._id) };
    case UPDATE_NOTES:
      return { ...state, notes: [...state.notes, [action.payload.notes]] }
    default:
      return state;
  }
}
