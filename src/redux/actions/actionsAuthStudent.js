/* eslint-disable no-unused-vars */
import { GET_API_DATA, GET_ANSWER_AUTH_STUDENT, LOGIN_USER, LOGOUT_USER } from '../actionTypes';

export const loginUserAC = (userInfo) => ({ type: LOGIN_USER, payload: { userInfo } });

export const getAncwerAuthStudent = (answerAuthStudentAPI) => ({ 
  type: GET_ANSWER_AUTH_STUDENT, 
  payload: {answerAuthStudentAPI} });

export const getAPIData = (dataApi) => ({ 
  type: GET_API_DATA, 
  payload: {dataApi} });


export const apiTokenSendAc =  (token) => async (dispatch) => {

  const requestDataStudent = async (path, sendData) => {
    try {
      const response = await fetch(path, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      });

      if (response.status === 200) return await response.json();
      else return new Error(response)
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  await requestDataStudent('http://localhost:3100/sendmsg/token', token)
    .then((response) => {
      dispatch(getAPIData(response))
    })
}

export const registrationHandlerAc = (dataApi, e) => async (dispatch) => {

  const { name, lastname, password } = e.target;

  const dataStudentAll = {
    firstName: name.value,
    lastName: lastname.value,
    password: password.value,
    role: 3,
    groupName: '',
    ...dataApi
  }

  const sendStudentRegistration = async (path, sendData) => {

    try {
      const response = await fetch('http://localhost:3100/auth/signup', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData),
      });

      // console.log('***', response)
      if (response.status === 200) return await response.json();
      else return new Error('Err')
    } catch (err) {
      console.log('Error: ', err);
      return new Error('err');
    }
  }

  await sendStudentRegistration('/auth/signup', dataStudentAll)
    .then((response) => {
      if (response._id) {
        dispatch(loginUserAC(response))
        dispatch(getAncwerAuthStudent(response));    
      }

    })

}