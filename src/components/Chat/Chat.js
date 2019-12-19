import React, { Component } from 'react'
import Axios from 'axios'
import { Badge, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { socket } from '../../socket'

class Chat extends Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      response: false,
      reply: '',
      author: ''
    }
  }
  componentDidMount () {
    // all of your socket.on events for this component go in here...

    var elmnt = document.getElementById('content') /// this keeps my chat at the bottom of the window.
    socket.on('msgs', data => {
      console.log(data)
      this.setState({ messages: data }, () => elmnt.scrollIntoView())
    })
  }
  sendMessage = e => {
    if (e.preventDefault) {
      e.preventDefault()
    }
    socket.emit('send_message', {
      // might want to pass in userID here if you're putting these in the database
      reply: this.state.reply,
      author: this.props.login.user.username // the user who sends the message
    })
    this.setState({ reply: '' })
  }
  distinct = () => {
    let duplicates = []
    this.state.messages.forEach(msg => {
      if (!duplicates.includes(msg.author)) {
        duplicates.push(msg.author)
      }
    })
    return duplicates
  }
  render () {
    const { messages } = this.state
    console.log(this.props.login.user)
    return (
      <div>
        <Badge count={messages.length} showZero>
          <a href='#' />
        </Badge>
        <form onSubmit={this.sendMessage}>
          Messages:
          {messages.map((msg, i) => (
            <p key={i}>
              {msg.author}: {msg.reply}
            </p>
          ))}
          {/* The element below will allow us to autoscroll to bottom of chat window... I think */}
          <div id='content' />
        </form>
        <form>
          <Input
            onChange={e => this.setState({ reply: e.target.value })}
            value={this.state.reply} // this will allow the input to render as empty when state is emptied
            placeholder='Reply...'
          />
          <Button
            onClick={e => this.sendMessage(e)}
            disabled={this.state.reply.length < 1} // keep us from sending blank messages
          >
            SEND
          </Button>
        </form>
        <form>
          People in Chat:
          <br />
          {this.distinct()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    console.log("state", state)
    return state
}
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Chat)
