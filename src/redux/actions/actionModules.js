import { GET_MODULES, ADD_MODULE, UPDATE_MODULE } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';
import { getShedulesAC } from './actionSchedule';
import { getFilesAC } from './actionFiles';

export const addModuleAC = (moduleInfo) => ({ type: ADD_MODULE, payload: { moduleInfo } });
export const getModulesAC = (modules) => ({ type: GET_MODULES, payload: { modules } });
export const updModuleAC = (moduleInfo) => ({ type: UPDATE_MODULE, payload: { moduleInfo } });

export const getModulesThunk = (userId, role) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: `http://localhost:3100/module/${role}`,
      method: 'post',
      body: { userId }
    });

    if (!response.error) {
      const { phase, schedule, files } = response;

      dispatch(getShedulesAC(schedule));
      dispatch(getModulesAC(phase));
      dispatch(getFilesAC(files));
    }

  } catch (err) {
    console.log('Err', err);
  }
}

export const getModInfoThunk = (modId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: `http://localhost:3100/module/get`,
      method: 'post',
      body: { modId }
    });

    if (!response.error) {
      const { schedule } = response;
      console.log('schedule', schedule);

    }

  } catch (err) {
    console.log('Err', err);
  }
}

export const addModulesThunk = (titleSpec, moduleTitle, userId, curatorId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/module/add',
      method: 'post',
      body: { titleSpec, moduleTitle, userId, curatorId }
    });

    if (!response.error) {
      const moduleInfo = response;
      dispatch(addModuleAC(moduleInfo));
    }
  } catch (err) {
    console.log('Err', err);
  }
};

export const updateModuleThunk = (module) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/module/update',
      method: 'post',
      body: { moduleId: module._id, titleModule: module.title }
    });
    if (!response.error) {
      const moduleInfo = response;
      dispatch(updModuleAC(moduleInfo));
    }
  } catch (err) {
    console.log('Err', err);
  }
}

// const getSheduleItemThunk = (id) => async (dispatch) => {
//   try {
//     const response = await fetchMethod({
//       path: `http://localhost:3100/schedule/${id}`,
//       method: 'GET',
//     });
//     if (!response.error) {
//       console.log(response)
//      ;
//     }
//   } catch (err) {
//     console.log('Err', err);
//   }
// }