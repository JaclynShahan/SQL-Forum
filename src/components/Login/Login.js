import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Icon, Input, Button } from 'antd'
import './Login.css'
import LoginDrawer from './LoginDrawer';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      loading: false
    }
  }
  authRequest = () => {
    Axios.post(`/api/verifyUser`, {
      username: this.props.login.username,
      password: this.props.login.password
    }).then(resp => {
      console.log(resp.data)
      this.props.setAuthentication(resp.data)
    
    })
  }

  render () {
      console.log(this.props.login)
    return (
      <div >
        <div className='form-content'>
          <img
            className='imgcontainer'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-T5_xZRRed_LyA4eS3k9T9iVYyYRs0QJeAZFu7EEIleP9sznDtA&s'
          />
          <div className='container'>
            <label>Username: </label>
            <Icon type='user' />
            <Input placeholder='username' type='text' className='logininput' />
            <br />
            <label>Password: </label>
            <Icon type='lock' />
            <Input
              className='logininput'
              placeholder='password'
              type='password'
            />
          </div>
          <div className='container'>
            <Button className='loginbutton'>Login</Button>
            {this.props.login.user.username ? '' : <Redirect to='/login' />}
            <span className='signup'>OR</span>
            <LoginDrawer  /> 
         
          </div>

        </div>
           
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setUsername (e) {
    dispatch({
      type: 'SET_USERNAME',
      payload: e.target.value
    })
  },
  setPassword (e) {
    dispatch({
      type: 'SET_PASSWORD',
      payload: e.target.value
    })
  },
  setAuthentication (val) {
    dispatch({
      type: 'USER_AUTH',
      payload: val
    })
  },


})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
