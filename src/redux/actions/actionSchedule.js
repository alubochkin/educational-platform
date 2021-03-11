import { ADD_SCHEDULE, GET_SCHEDULE } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';

export const addScheduleAC = (scheduleInfo) => ({ type: ADD_SCHEDULE, payload: { scheduleInfo } });
export const getShedulesAC = (schedulesList) => ({ type: GET_SCHEDULE, payload: { schedulesList } });

export const createSchedulsThunk = (schedules, moduleId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/schedule/add',
      method: 'post',
      body: { arrSchedule: schedules, phaseId: moduleId }
    });
    if (!response.error) {

      const scheduleInfo = response.schedule;

      dispatch(addScheduleAC(scheduleInfo));

    }
  } catch (err) {
    console.log('Err', err);
  }
}

// export const getModulesAC = (modules) => ({ type: GET_MODULES, payload: { modules } });
// export const updModuleAC = (moduleInfo) => ({ type: UPDATE_MODULE, payload: { moduleInfo } });

export const getSchedulesThunk = (moduleId) => async (dispatch) => {
  try {

    const response = await fetchMethod({
      path: 'http://localhost:3100/schedule/all',
      method: 'POST',
      body: { moduleId }

    });
    if (!response.error) {
      const schedulesList = response;

      dispatch(getShedulesAC(schedulesList));
    }

  } catch (err) {
    console.log('Err', err);
  }
}

// export const addModulesThunk = (titleSpec, moduleTitle, userId, curatorId) => async (dispatch) => {
//   try {
//     const response = await fetchMethod({
//       path: 'http://localhost:3100/module/add',
//       method: 'post',
//       body: { titleSpec, moduleTitle, userId, curatorId }
//     });

//     if (!response.error) {
//       const moduleInfo = response;
//       dispatch(addModuleAC(moduleInfo));
//     }
//   } catch (err) {
//     console.log('Err', err);
//   }
// };

// export const updateModuleThunk = (module) => async (dispatch) => {
//   try {
//     const response = await fetchMethod({
//       path: 'http://localhost:3100/module/update',
//       method: 'post',
//       body: { moduleId: module._id, titleModule: module.title }
//     });
//     if (!response.error) {
//       const moduleInfo = response;
//       dispatch(updModuleAC(moduleInfo));
//     }
//   } catch (err) {
//     console.log('Err', err);
//   }
// }

