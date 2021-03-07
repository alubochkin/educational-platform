import { ADD_SPEC } from '../actionTypes';
import { spec } from '../../modelsTemp/spec';

export default function specReducer(state = {}, action) {
  switch (action.type) {
    case ADD_SPEC:
      return { ...state, spec };
    default:
      return state;
  }
}
