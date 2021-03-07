import { ADD_GROUP } from '../actionTypes';
import { GET_GROUP } from '../actionTypes';
import { DELETE_GROUP } from '../actionTypes';

import { fetchGet, fetchMethod } from '../thunkUtils';

export const addGroupAC = (group) => ({ type: ADD_GROUP, payload: { group } });
export const getGroupsAC = (groups) => ({ type: GET_GROUP, payload: { groups } });
export const deleteGroupAC = (group) => ({ type: DELETE_GROUP, payload: { group } });


export const addGroupThunk = (group) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/group/add',
      method: 'post',
      body: group
    });

    if (!response.error) {
      const groupInfo = response;
      dispatch(addGroupAC(groupInfo));
    }

  } catch (err) {
    console.log('Err', err);
  }
};

export const getGroupsThunk = () => async (dispatch) => {
  try {
    const response = await fetchGet({
      path: 'http://localhost:3100/group',
    });
    if (!response.error) {
      const groupList = response;
      dispatch(getGroupsAC(groupList));
    }

  } catch (err) {
    console.log('Err', err);
  }
}
export const deleteGroupThunk = (id) => async (dispatch) => {
 try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/group/delete',
      method: 'delete',
      body: { groupId: id }
    });

    if (!response.error) {
      const group = response;
      dispatch(deleteGroupAC(group));
    }

  } catch (err) {
    console.log('Err', err);
  }
}
