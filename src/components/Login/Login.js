import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
        visible: false

    }
  }

  render () {
    return <div>LOGIN SCREEN</div>
  }
}

export default Login
