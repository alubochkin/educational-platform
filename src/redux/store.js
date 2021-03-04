import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { spec } from '../modelsTemp/spec';

const prelodableState = {
  specReducer: spec,
};

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, prelodableState, composeEnhancer);
export default store;
