import { ADD_SPEC } from '../actionTypes';

export default function specReducer(state={}, action) {
  switch (action.type) {
    case ADD_SPEC:
      return { ...state, spec: 'jfjjj' };
    default:
      return state;
  }
}
