import { combineReducers } from 'redux';
import { updateCounter } from './countReducers';

const rootReducer = updateCounter;
// combineReducers({});

export default rootReducer;
