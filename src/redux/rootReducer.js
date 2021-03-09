import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';
import moduleReducer from './reducers/moduleReducer';

const rootReducer = combineReducers({ specReducer, groupReducer, userReducer, moduleReducer });

export default rootReducer;
