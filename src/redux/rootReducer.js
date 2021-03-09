import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';
import authStudentReducer from './reducers/authStudentReducer';

import moduleReducer from './reducers/moduleReducer';

const rootReducer = combineReducers({ specReducer, groupReducer, userReducer, moduleReducer, authStudentReducer });

export default rootReducer;
