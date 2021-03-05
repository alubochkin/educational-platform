// {firstName=test,
//   lastName=test,
//   email=t@t.ru,
//   password=12345,
//   role=1}

import { LOGIN_USER, LOGOUT_USER } from '../actionTypes';

export default function groupReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload.userInfo };

    case LOGOUT_USER:
      return { ...state, user: undefined };

    default:
      return state;
  }
}
