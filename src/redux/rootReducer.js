import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import groupReducer from './reducers/groupReducer';
import specReducer from './reducers/specReducer';

const rootReducer = combineReducers({ userReducer, groupReducer, specReducer });
 
export default rootReducer;
