import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
// import reducers here

export default createStore(
  combineReducers({
    // reducers go here
  }),
  applyMiddleware(promiseMiddleware)
)
