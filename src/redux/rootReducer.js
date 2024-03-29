import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';
import authStudentReducer from './reducers/authStudentReducer';

import moduleReducer from './reducers/moduleReducer';
import scheduleReducer from './reducers/scheduleReducer';
import fileReducer from './reducers/fileReducer';
import notesReducer from './reducers/notesReducer';

const rootReducer = combineReducers({
  specReducer, groupReducer, userReducer,
  moduleReducer, authStudentReducer, scheduleReducer, fileReducer, notesReducer
});

export default rootReducer;
