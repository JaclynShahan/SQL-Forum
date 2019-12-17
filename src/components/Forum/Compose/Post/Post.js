import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Badge, Avatar } from 'antd'
import Axios from 'axios'
import EditPost from './Edit/EditPost'

class Post extends Component {
  constructor () {
    super()
    this.state = {
      editing: false,
      showMasterMenu: false,
      likes: [],
      mehs: [],
      dislikes: [],
      count: 0,
      show: true
    }
    this.hideEdit = this.hideEdit.bind(this)

    this.toggleMasterMenu = this.toggleMasterMenu.bind(this)
    this.hideMasterMenu = this.hideMasterMenu.bind(this)
  }
  showEdit = () => {
    console.log('Help Me')
    this.setState({ editing: true, showMasterMenu: false })
  }

  hideEdit () {
    this.setState({ editing: false })
  }

  toggleMasterMenu () {
    this.setState({ showMasterMenu: !this.state.showMasterMenu })
  }

  hideMasterMenu () {
    if (this.state.showMasterMenu === true) {
      this.setState({ showMasterMenu: false })
    }
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  updateLikes (id, likes) {
    const newLikes = likes
    newLikes.push(this.props.login.user.username)
    Axios.post(`/api/leaveLikes/${id}`, {
      likesArr: newLikes
    }).then(resp => {
      console.log(resp)
      this.props.addPost(resp.data)
    })
    this.updatePostLikes()
    this.increaseBadge()
  }
  updateMehs (id, mehs) {
    const newMehs = mehs
    newMehs.push(this.props.login.user.username)
    Axios.post(`/api/leaveMehs/${id}`, {
      mehsArr: newMehs
    }).then(resp => {
      console.log(resp)
      this.props.addPost(resp.data)
    })
    this.updatePostMehs()
    this.increaseBadge()
  }
  updateDislikes (id, dislikes) {
    const newDislikes = dislikes
    newDislikes.push(this.props.login.user.username)
    Axios.post(`/api/leaveDislikes/${id}`, {
      dislikesArr: newDislikes
    }).then(resp => {
      console.log(resp)
      this.props.addPost(resp.data)
    })
    this.updatePostDislikes()
    this.increaseBadge()
  }
  updatePostLikes (likes) {
    this.setState({ likes })
  }
  updatePostMehs (mehs) {
    this.setState({ mehs })
  }
  updatePostDislikes (dislikes) {
    this.setState({ dislikes })
  }
  increaseBadge = () => {
    const count = this.state.count + 1
    this.setState({ count })
  }

  onChange = show => {
    this.setState({ show })
  }
  render () {
    const { selectedPost } = this.props.post
    const likes = selectedPost.likes || []

    const { editing, showMasterMenu } = this.state
    const { text, deletePostFn, id, updatePostFn } = this.props
    console.log(this.state)
    console.log(this.props)
    return (
      <section onClick={this.hideMasterMenu}>
        <div>
          <Button onClick={this.toggleMasterMenu}>
            <Icon type='edit' />
          </Button>
        </div>
        <div style={{ display: showMasterMenu ? 'flex' : 'none' }}>
          <span onClick={this.showEdit}>Edit</span>
          <span onClick={() => deletePostFn(id)}>Delete</span>
        </div>
        <div>
          <div>
            <Avatar style={{ backgroundColor: '#87d068' }} icon='user' />
          </div>

          <span>{this.props.subject}</span>
        </div>

        <div>
          {editing ? (
            <EditPost
              text={text}
              id={id}
              hideEdit={this.hideEdit}
              updatePostFn={updatePostFn}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>
        <div className='Post__user-controls'>
          <div className='icons'>
            <Badge count={this.props.post.likes.length}>
              {this.props.post.likes.includes(
                this.props.login.user.username
              ) ? (
                <Icon
                    type='smile'
                    theme='twoTone'
                    twoToneColor='#DC143C'
                    style={{ fontSize: '28px' }}
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      this.updateLikes(this.props.post.id, this.props.post.likes)
                    }
                    type='smile'
                    theme='twoTone'
                    twoToneColor='#DC143C'
                    style={{ fontSize: '28px' }}
                  />
                )}
            </Badge>
            <Badge count={this.props.post.mehs.length}>
              {this.props.post.mehs.includes(this.props.login.user.username) ? (
                <Icon
                  type='meh'
                  theme='twoTone'
                  twoToneColor='#FF4500'
                  style={{ fontSize: '28px' }}
                />
              ) : (
                <Icon
                  onClick={() =>
                    this.updateMehs(this.props.post.id, this.props.post.mehs)
                  }
                  type='meh'
                  theme='twoTone'
                  twoToneColor='#FF4500'
                  style={{ fontSize: '28px' }}
                />
              )}
            </Badge>
            <Badge count={this.props.post.dislikes.length}>
              {this.props.post.dislikes.includes(
                this.props.login.user.username
              ) ? (
                <Icon
                    type='frown'
                    theme='twoTone'
                    twoToneColor='#245EC1'
                    style={{ fontSize: '28px' }}
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      this.updateDislikes(
                        this.props.post.id,
                        this.props.post.dislikes
                      )
                    }
                    type='frown'
                    theme='twoTone'
                    twoToneColor='#245EC1'
                    style={{ fontSize: '28px' }}
                  />
                )}
            </Badge>
            <Badge count={this.props.post.comments.length}>
              <Icon
                onClick={() => this.setSelectedPost()}
                type='message'
                theme='twoTone'
                twoToneColor='24C131'
                style={{ fontSize: '28px' }}
              />
            </Badge>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setSelectedPost (selectedPost) {
    dispatch({
      type: 'SELECT_POST',
      payload: selectedPost
    })
  },
  addPost (newPost) {
    dispatch({
      type: 'ADD_POST',
      payload: newPost
    })
  },
  setAddPost (e) {
    dispatch({
      type: 'SET_POST',
      payload: e.target.value
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
