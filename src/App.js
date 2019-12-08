import React, { Component } from 'react'
import './App.css'
import router from './router'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <div className="topnav">
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/forum'>Forum</Link>
          <Link to='/chat'>Chat</Link>
        </div>
        {router}
      </div>
    )
  }
}

export default App
