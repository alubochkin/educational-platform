import { ADD_GROUP } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';

export const addGroupAC = (group) => ({ type: ADD_GROUP, payload: { group } });


export const addGroupThunk = (group) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/group/add',
      method: 'post',
      body: group
    });

    console.log('response', response);

    const groupState = {
      groupID: response._id,
      groupSpec: response.groupSpec,
      groupTitle: response.groupTitle,
      strDateStart: response.strDateStart,
      strDateFinish: response.strDateFinish,
    }

    dispatch(addGroupAC(groupState));

  } catch (err) {
    console.log('Err', err);
  }
};

