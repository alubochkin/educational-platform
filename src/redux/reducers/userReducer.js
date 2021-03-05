// {firstName=test,
//   lastName=test,
//   email=t@t.ru,
//   password=12345,
//   role=1}

import { LOGIN_USER } from '../actionTypes';

export default function groupReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload.userInfo };

    default:
      return state;
  }
}
