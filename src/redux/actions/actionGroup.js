import { ADD_GROUP } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';

export const addGroupAC = (group) => ({ type: ADD_GROUP, payload: { group } });

export const addGroupThunk = (group, userId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/group/add',
      method: 'post',
      body: { group, userId }
    });

    if (!response.error) {
      const groupInfo = response;
      dispatch(addGroupAC(groupInfo));
    }

  } catch (err) {
    console.log('Err', err);
  }
};



