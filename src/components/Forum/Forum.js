import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ForumHeader from './Header/ForumHeader'
import Post from './Compose/Post/Post'
import Compose from './Compose/Compose'

class Forum extends Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }

  render () {
    console.log(this.props)
    const { newPost: posts, searchPosts } = this.props.post

    return (
      <div>
        <ForumHeader />
        <section>
          <Compose createPostFn={this.makePost} />
          {searchPosts.length > 0
            ? searchPosts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                text={post.text}
                subject={post.subject}
                date={post.date}
                updatePostFn={this.updatePost}
                deletePostFn={this.onDelete}
                post={post}
              />
            ))
            : posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                text={post.text}
                subject={post.subject}
                date={post.date}
                updatePostFn={this.updatePost}
                deletePostFn={this.onDelete}
                post={post}
              />
            ))}
          {this.props.login.user.username ? '' : <Redirect to='/login' />}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
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
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forum)
