import { LOGIN_USER, LOGOUT_USER, GET_MODULE_STUDENT } from '../actionTypes';
import { fetchMethod, fetchGet } from '../thunkUtils';

export const loginUserAC = (userInfo) => ({ type: LOGIN_USER, payload: { userInfo } });

export const logoutUserAC = () => ({ type: LOGOUT_USER });
export const getModuleStudentAC = (modules) => ({ type: GET_MODULE_STUDENT, payload: { modules } });

export const loginUserThunk = (input) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: '/auth/signin',
      method: 'POST',
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
      path: 'http://localhost:3100/auth/signup',
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
}

export const getModuleStudent = (groupSpec) => (dispatch) => {
  try {
    fetchMethod({
      path: `http://localhost:3100/module/student`,
      method: 'POST',
      body: { titleSpec: groupSpec }
    }).then((res) => {
      console.log(res)
      dispatch(getModuleStudentAC(res)) 
    })

  } catch (err) {
    console.log('Err', err);
  }
}
