import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
// import reducers here
import login from './reducers/login';
import addUser from './reducers/addUser';

export default createStore(
  combineReducers({
    // reducers go here
    login,
    addUser
  }),
  applyMiddleware(promiseMiddleware)
)
