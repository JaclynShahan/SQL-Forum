import React, { Component } from 'react'
import { Modal, Input, Button } from 'antd'
import Axios from 'axios'
import { connect } from 'react-redux'

class Contact extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { TextArea } = Input
    return (
      <div>
        <button className='buttonSize aboutButton'>Contact Us</button>
        <Modal
          onOk={this.onSend}
          okText='Send'
          title='Contact Us'
          onCancel={() => this.props.setContactModal(false)}
          visible={this.props.home.showContactModal}
        >
          <header>
            Got a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </header>
          <span required>Name:</span>
          <Input
            onChange={e => this.props.contactName(e)}
            value={this.props.home.name}
          />
          <span required>Email Address:</span>
          <Input
            onChange={e => this.props.contactEmail(e)}
            value={this.props.home.email}
          />
          <span>Subject:</span>
          <Input
            onChange={e => this.props.contactSubject(e)}
            value={this.props.home.subject}
          />
          <span>Message:</span>
          <TextArea
            rows={6}
            onChange={e => this.props.contactMessage(e)}
            value={this.props.home.message}
          />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setContactModal (val) {
    dispatch({
      type: 'CONTACT_MODAL',
      payload: val
    })
  },
  contactName (e) {
    dispatch({
      type: 'CONTACT_NAME',
      payload: e.target.value
    })
  },
  contactEmail (e) {
    dispatch({
      type: 'CONTACT_EMAIL',
      payload: e.target.value
    })
  },
  contactSubject (e) {
    dispatch({
      type: 'CONTACT_SUBJECT',
      payload: e.target.value
    })
  },
  contactMessage (e) {
    dispatch({
      type: 'CONTACT_MESSAGE',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
