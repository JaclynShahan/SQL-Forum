import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
// import reducers here
import login from './reducers/login';
import addUser from './reducers/addUser';
import post from './reducers/post';
import edit from './reducers/edit';

export default createStore(
  combineReducers({
    // reducers go here
    login,
    addUser,
    edit,
    post
  }),
  applyMiddleware(promiseMiddleware)
)
