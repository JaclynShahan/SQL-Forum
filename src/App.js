import React, { Component } from 'react'
import './App.css'
import router from './router'
import { Link } from 'react-router-dom'
import {Badge} from 'antd'

class App extends Component {
  constructor () {
    super()
    this.state = {
      messages: []
    }
  }

  render () {
    const {messages} = this.state
    return (
      <div>
        <div className="topnav">
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/forum'>Forum</Link>
          <Badge count={messages.length} showZero className="BadgePosition">
          
        </Badge>
          <Link to='/chat'>Chat</Link>
        
        </div>
        {router}
      </div>
    )
  }
}

export default App
