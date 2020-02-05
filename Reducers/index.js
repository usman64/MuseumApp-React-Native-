import { combineReducers } from 'redux';
import { requestAllPuppets } from './puppetReducers';
import { changeFont } from './fontScaleReducer';

const rootReducer = combineReducers({ requestAllPuppets, changeFont });

export default rootReducer;
