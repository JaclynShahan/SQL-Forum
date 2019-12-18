import React, { Component } from 'react'
import { Drawer, Icon, Collapse, Descriptions, Avatar, Input } from 'antd'
import { connect } from 'react-redux'
import Axios from 'axios'

class Comment extends Component {
  constructor () {
    super()
    this.state = {}
  }
  updateComments (id, comments) {
    const newComments = comments
    newComments.push({
      username: this.props.login.user.username,
      id: this.props.login.user.id,
      commentText: this.props.post.commentText
    })
    Axios.post(`/api/makeComment/${id}`, {
      postId: this.props.post.selectedPost.id,
      commentsArr: newComments
    }).then(resp => {
      console.log(resp)
      this.props.addPost(resp.data)
    })
  }

  render () {
    const { selectedPost } = this.props.post
    const comments = selectedPost.comments || []

    return (
      <div>
        <Drawer
          title={this.props.post.selectedPost.subject}
          placement='bottom'
          closable={false}
          visible={this.props.visible}
          onclose={this.props.onClose}
          height='80vh'
        >
          <section>
            <Input
              placeholder='Leave a Comment...'
              value={this.props.post.commentText}
              onChange={e => this.addCommentText(e)}
            />
            <Icon
              onClick={() => this.updateComments(selectedPost.id, comments)}
              type='plus-circle'
              theme='twoTone'
              twoToneColor='rgb(18, 179, 152'
              style={{ fontSize: '40px' }}
            />
            <Icon
              onClick={() => this.props.onClose()}
              type='close-circle'
              theme='twoTone'
              twoToneColor='rgb(18,179, 152'
              style={{ fontSize: '40px' }}
            />
          </section>
          {}
          <Collapse>
            <Collapse.Panel header={this.props.username} key={this.props.id}>
              <Descriptions column={1}>
                <Descriptions.Item layout='vertical'>
                  <Avatar src='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' />
                  <pre>{this.props.commentText}</pre>
                </Descriptions.Item>
              </Descriptions>
            </Collapse.Panel>
          </Collapse>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  addPost (newPost) {
    dispatch({
      type: 'ADD_POST',
      payload: newPost
    })
  },
  setSelectedPost (selectedPost) {
    dispatch({
      type: 'SELECT_POST',
      payload: selectedPost
    })
  },
  setAddPost (e) {
    dispatch({
      type: 'SET_POST',
      payload: e.target.value
    })
  },
  addCommentText (e) {
    dispatch({
      type: 'COMMENT_TEXT',
      payload: e.target.value
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
