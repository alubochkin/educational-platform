import { combineReducers } from 'redux';

// import userReducer from './reducers/userReducer';
// import groupReducer from './reducers/groupReducer';
import specReducer from './reducers/specReducer';
import groupReducer from './reducers/groupReducer';

const rootReducer = combineReducers({ specReducer, groupReducer });
 
export default rootReducer;
