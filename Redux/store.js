import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './Reducers';

const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger)
);
