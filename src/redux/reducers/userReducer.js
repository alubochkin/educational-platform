// {firstName=test,
//   lastName=test,
//   email=t@t.ru,
//   password=12345,
//   role=1}

import { LOGIN_USER, LOGOUT_USER, GET_MODULE_STUDENT } from '../actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload.userInfo };

    case LOGOUT_USER:
      return { user: undefined };

    case GET_MODULE_STUDENT:
        return { ...state, ...action.payload.modules };

    default:
      return state;
  }
}
