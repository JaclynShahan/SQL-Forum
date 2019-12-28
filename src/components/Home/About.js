import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'

class About extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <Modal />
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setAboutModal (val) {
    dispatch({
      type: 'ABOUT_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
