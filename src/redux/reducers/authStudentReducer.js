import { GET_API_DATA, GET_ANSWER_AUTH_STUDENT } from '../actionTypes';

export default function groupReducer(state = {}, action) {
  switch (action.type) {

    case GET_API_DATA:
      return { ...state, dataApi: {...action.payload.dataApi}};

    case GET_ANSWER_AUTH_STUDENT:
      return { ...state, answerAuthStudentAPI: action.payload.answerAuthStudentAPI };

    default:
      return state;
  }
}