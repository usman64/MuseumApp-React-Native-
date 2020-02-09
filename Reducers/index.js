import { combineReducers } from 'redux';
import { requestAllPuppets } from './puppetReducers';
import { changeFont } from './fontScaleReducer';
import { toggleTranslation} from './toggleTranslationReducer';

const rootReducer = combineReducers({ requestAllPuppets, changeFont, toggleTranslation });

export default rootReducer;
