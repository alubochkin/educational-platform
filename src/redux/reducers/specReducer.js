import { ADD_SPEC } from '../actionTypes';
import { spec, specTeachers } from '../../modelsTemp/spec';

export default function specReducer(state = {}, action) {
  switch (action.type) {
    case ADD_SPEC:
      return { ...state, spec, specTeachers };
    default:
      return state;
  }
}
