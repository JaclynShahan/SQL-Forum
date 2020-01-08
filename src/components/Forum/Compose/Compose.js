import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Avatar, Input, Button} from 'antd';
import Axios from 'axios'
import './Compose.css'

class Compose extends Component {
    constructor () {
        super()
        this.state = {
         
        }
       // this.makePost = this.makePost.bind(this)
    }

    // clearField = () => {
    //     this.setState({
    //         subject: "",
    //         text: ""
    //     })
    // }
    getPost = e => {
        e.preventDefault()
        Axios.get(`/api/getPosts?text=${this.props.post.postText}&subject=${this.props.post.postSubject}`).then(resp => {
          console.log(resp)
        })
    
        // this.clearField()
      }

  makePost = e => {
    e.preventDefault()
    Axios.post('/api/createPost', {
      postText: this.props.post.postText,
      postSubject: this.props.post.postSubject,
      comments: [],
      likes: [],
      mehs: [],
      dislikes: [],
      username: this.props.login.user.username
    }).then(resp => {
      this.props.addPost(resp.data)
      console.log(resp)
    })
    //this.clearField()
  }
    render() {
       
        return(
            <section className="ComposeParent">
            <div className="ComposeTop">
            <div className="ComposeProfilePicture">
            <Avatar src='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' />
            </div>
            <Input
            className="SubjectInput"
            placeholder='Subject'
            value={this.props.post.postSubject}
            onChange={e => this.props.updateSubject(e)}
          />

          <Input
          className="ComposeInput"
            placeholder="What's on your mind?"
            value={this.props.post.postText}
            onChange={e => this.props.updateText(e)}
          />
            </div>
            <div className="ComposeButtom">
          <Button className="ComposeButton" onClick={e => this.makePost(e)}>
            Update
          </Button>
        </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    console.log("state:", state)
    return state
}
const mapDispatchToProps = dispatch => ({
    addPost(newPost) {
        dispatch({
            type: 'ADD_POST',
            payload: newPost
        })
    },
    updateSubject (e) {
        dispatch({
            type: 'POST_SUBJECT',
            payload: e.target.value
        })
    },
    updateText (e) {
        dispatch({
            type: 'POST_TEXT',
            payload: e.target.value
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Compose)