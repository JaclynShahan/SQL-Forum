import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Forum from './components/Forum/Forum'
import Chat from './components/Chat/Chat'

export default (
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/forum' component={Forum} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </Provider>
)
