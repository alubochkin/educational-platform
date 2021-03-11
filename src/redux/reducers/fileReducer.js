import { GET_FILES, LOGOUT_USER } from '../actionTypes';
const initState = { files: [] };
export default function fileReducer(state = initState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return { files: [] };
    case GET_FILES:
      return { ...state, files: [...action.payload.fileInfo] };

    default:
      return state;
  }
}
