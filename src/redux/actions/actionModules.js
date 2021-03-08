import { GET_MODULES, ADD_MODULE } from '../actionTypes';
import { fetchGet, fetchMethod } from '../thunkUtils';

export const addModuleAC = (moduleInfo) => ({ type: ADD_MODULE, payload: { moduleInfo } });
export const getModulesAC = (modules) => ({ type: GET_MODULES, payload: { modules } });
// export const deleteGroupAC = (group) => ({ type: DELETE_GROUP, payload: { group } });
// export const detailsGroupAC = (students) => ({ type: GROUP_DETAILS, payload: { students } });

export const getModulesThunk = (userId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/module/admin',
      method: 'post',
      body: { userId }
    });
    if (!response.error) {
      const modulList = response;
      dispatch(getModulesAC(modulList));
    }

  } catch (err) {
    console.log('Err', err);
  }
}

export const addModulesThunk = (titleSpec, moduleTitle,  userId ) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/module/add',
      method: 'post',
      body: { titleSpec, moduleTitle, userId }
    });

    if (!response.error) {
      const moduleInfo = response;
      dispatch(addModuleAC(moduleInfo));
    }
  } catch (err) {
    console.log('Err', err);
  }
};
