import { LOGIN_USER } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';

export const loginUserAC = (userInfo) => ({ type: LOGIN_USER, payload: { userInfo } });

export const loginUserThunk = (input) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/auth/signin',
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

