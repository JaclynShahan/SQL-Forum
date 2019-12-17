import React, { Component } from 'react'
import { Input, Button, Modal } from 'antd'
import { connect } from 'react-redux'

class EditPost extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    console.log('Props', this.props)
    return (
      <div>
        <span>Edit Subject</span>
        <Input
          onChange={e => this.props.setEditSubject(e)}
          placeholder={this.props.edit.subject}
        />
        <span>Edit Text</span>
        <Input
          onChange={e => this.props.setEditText(e)}
          placeholder={this.props.edit.text}
        />
        <Button onClick={() => this.props.setEditModal(false)}>Cancel</Button>
        <Button type='primary'>Save</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setEditId (e) {
    dispatch({
      type: 'EDIT_ID',
      payload: e.target.value
    })
  },
  setEditSubject (e) {
    dispatch({
      type: 'EDIT_SUBJECT',
      payload: e.target.value
    })
  },
  setEditText (e) {
    dispatch({
      type: 'EDIT_TEXT',
      payload: e.target.value
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
