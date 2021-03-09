import { LOGIN_USER, LOGOUT_USER } from '../actionTypes';
import { fetchMethod, fetchGet } from '../thunkUtils';

export const loginUserAC = (userInfo) => ({ type: LOGIN_USER, payload: { userInfo } });

export const logoutUserAC = () => ({ type: LOGOUT_USER });

export const loginUserThunk = (input) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: '/auth/signin',
      method: 'post',
      body: input
    });

    if (!response.error) {
      const userInfo = response;
      dispatch(loginUserAC(userInfo));
    } // обработка если юзера нет неправильны пароль логин

  } catch (err) {
    console.log('Err', err);
  }
};

export const logoutUserThunk = () => async (dispatch) => {
  try {
    const response = await fetchGet({
      path: 'http://localhost:3100/auth/signout'
    });

    if (!response.error) {
      dispatch(logoutUserAC());
    }

  } catch (err) {
    console.log('Err', err);
  }
}

export const signupUserThunk = (input) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: '/auth/signup',
      method: 'post',
      body: input
    });

    if (!response.error) {
      const userInfo = response;
      dispatch(loginUserAC(userInfo));
      
    }

  } catch (err) {
    console.log('Err', err);
  }
};
