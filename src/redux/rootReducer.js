import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';
import authStudentReducer from './reducers/authStudentReducer';

const rootReducer = combineReducers({ specReducer, groupReducer, userReducer, authStudentReducer });

export default rootReducer;
