import React, { Component } from 'react'
import { Modal, Input, Divider, Icon } from 'antd'
import Axios from 'axios'
import { connect } from 'react-redux'

class Contact extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onSend = e => {
    Axios.post(`/api/sendMessage`, {
      name: this.props.home.name,
      email: this.props.home.email,
      subject: this.props.home.subject,
      message: this.props.home.message
    }).then(resp => {
      e.preventDefault()
      this.props.setContactModal(false)
      console.log(resp)
    })
  }
  render () {
    const { TextArea } = Input
    let styles = {
      fontSize: '40px',
      fontWeight: 'bold',
      fontFamily: 'fantasy'
    }
    return (
      <div>
        <button
          onClick={() => this.props.setContactModal(true)}
          className='buttonSize aboutButton'
        >
          Contact Us
        </button>
        <Modal
          onOk={this.onSend}
          okText='Send'
          onCancel={() => this.props.setContactModal(false)}
          visible={this.props.home.showContactModal}
        >
          <h1 className='headerTitle'>LET'S TALK</h1>
          <Divider />
          <header className='contactHeader'>
            Got a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </header>
          <span className='spans' required>
            Name:
          </span>
          <Input
            onChange={e => this.props.contactName(e)}
            value={this.props.home.name}
          />
          <span className='spans' required>
            Email Address:
          </span>
          <Input
            onChange={e => this.props.contactEmail(e)}
            value={this.props.home.email}
          />
          <span className='spans'>Subject:</span>
          <Input
            onChange={e => this.props.contactSubject(e)}
            value={this.props.home.subject}
          />
          <span className='spans'>Message:</span>
          <TextArea
            rows={6}
            onChange={e => this.props.contactMessage(e)}
            value={this.props.home.message}
          />
          <section className='iconSection'>
            <button className='icons'>
              <Icon
                style={{ fontSize: '25px' }}
                type='facebook'
                theme='filled'
              />
            </button>
            <button className='icons'>
              <Icon style={{ fontSize: '25px' }} type='twitter' />
            </button>
            <button className='icons'>
              <Icon
                style={{ fontSize: '25px' }}
                type='instagram'
                theme='filled'
              />
            </button>
            <button className='icons'>
              <Icon style={{ fontSize: '25px' }} type='google-plus' />
            </button>
            <button className='icons'>
              <Icon
                style={{ fontSize: '25px' }}
                type='linkedin'
                theme='filled'
              />
            </button>
          </section>
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
