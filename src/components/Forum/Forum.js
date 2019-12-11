import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ForumHeader from './Header/ForumHeader';

class Forum extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div>
        <ForumHeader />
    </div>
  }
}

export default Forum
