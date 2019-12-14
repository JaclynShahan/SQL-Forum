import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Avatar, Input, Button} from 'antd';
import Axios from 'axios'

class Compose extends Component {
    constructor () {
        super()
        this.state = {
            subject: "",
            text: ""
        }
        this.makePost = this.makePost.bind(this)
    }
    updateSubject (subject) {
        this.setState({subject})
    }
    updateText (text) {
        this.setState({text})
    }
    clearField = () => {
        this.setState({
            subject: "",
            text: ""
        })
    }
    getPost = e => {
        e.preventDefault()
        Axios.get(`/api/getPosts?text=${this.state.text}`).then(resp => {
          console.log(resp)
        })
    
        this.clearField()
      }

  makePost = e => {
    e.preventDefault()
    Axios.post('/api/createPost', {
      text: this.state.text,
      subject: this.state.subject,
      comments: [],
      likes: [],
      mehs: [],
      dislikes: [],
      username: this.props.login.user.username
    }).then(resp => {
      this.props.addPost(resp.data)
      console.log(resp)
    })
    this.clearField()
  }
    render() {
        const {text, subject} = this.state;
        return(
            <section>
            <div>
            <div>
            <Avatar src='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' />
            </div>
            <Input
            placeholder='Subject'
            value={subject}
            onChange={e => this.updateSubject(e.target.value)}
          />

          <Input
            placeholder="What's on your mind?"
            value={text}
            onChange={e => this.updateText(e.target.value)}
          />
            </div>
            <div>
          <Button onClick={e => this.makePost(e)}>
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
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Compose)