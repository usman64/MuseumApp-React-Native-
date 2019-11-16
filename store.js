import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './Reducers/puppetReducer'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store