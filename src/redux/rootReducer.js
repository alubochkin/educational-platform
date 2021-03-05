import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';

const rootReducer = combineReducers({ specReducer, groupReducer, userReducer });

export default rootReducer;
