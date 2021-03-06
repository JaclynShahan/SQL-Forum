import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Modal, Radio, Divider, Input } from 'antd'

class Feedback extends Component {
  constructor () {
    super()
    this.state = {}
  }
  // need to figure out how to conditionally render my "other" input
  sendFeedback = e => {
    Axios.post(`/api/sendFeedback`, {
       questionOne: this.props.feedback.questionOne,
       questionTwo: this.props.feedback.questionTwo,
       questionThree: this.props.feedback.questionThree,
       questionFour: this.props.feedback.questionFour,
       feedbackLike: this.props.feedback.feedbackLike,
       feedbackDislike: this.props.feedback.feedbackDislike,
       feedbackName: this.props.feedback.feedbackName,
       feedbackEmail: this.props.feedback.feedbackEmail 
    }).then(resp => {
        e.preventDefault()
        this.props.setFeedbackModal(false)
        console.log(resp)
    })
  }
  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      fontFamily: 'fantasy'
    }
    return (
      <div  >
        <button
          onClick={() => this.props.setFeedbackModal(true)}
          className='buttonSize'
        >
          Leave Feedback
        </button>
        <Modal
         className="modalWidth"
          onOk={this.sendFeedback}
          okText='Send'
          onCancel={() => this.props.setFeedbackModal(false)}
          visible={this.props.feedback.showFeedbackModal}
        >
          <h1 className='headerTitle'>Give us your Feedback</h1>
          <Divider />
          <header className='contactHeader'>
            Please take a moment to tell us what you think. We are always
            striving to make our website better.
          </header>
          <Divider />
          <span className="feedbackHeaders">Name:</span>
          <Input
            placeholder='Optional'
            className="feedbackInputs"
            onChange={e => this.props.setFeedbackName(e)}
            value={this.props.feedback.feedbackName}
          />
          <span className="feedbackHeaders">Email:</span>
          <Input
            className="feedbackInputs"
            onChange={e => this.props.setFeedbackEmail(e)}
            value={this.props.feedback.feedbackEmail}
          />
          <Radio.Group
            onChange={e => this.props.setQuestionOne(e)}
            value={this.props.feedback.questionOne}
          >
            <h3 className='feedbackHeaders'>
              How did you hear about our website?
            </h3>
            <Radio style={radioStyle} value={"Social Media"}>
              Social Media
            </Radio>
            <Radio style={radioStyle} value={"Advertising"}>
              Advertising
            </Radio>
            <Radio style={radioStyle} value={"Search Engine"}>
              Search Engine
            </Radio>
            <Radio style={radioStyle} value={"Friend"}>
              Friend
            </Radio>
            <Radio style={radioStyle} value={"Other"}>
              Other: {this.props.feedback.questionOne === 5 ? <Input /> : null}{' '}
            </Radio>
          </Radio.Group>
          <br />
          <Radio.Group
            onChange={e => this.props.setQuestionTwo(e)}
            value={this.props.feedback.questionTwo}
          >
            <h3 className='feedbackHeaders'>What browser do you use?</h3>
            <Radio style={radioStyle} value={"Google Chrome"}>
              Google Chrome
            </Radio>
            <Radio style={radioStyle} value={"Internet Explorer"}>
              Internet Explorer
            </Radio>
            <Radio style={radioStyle} value={"Firefox"}>
              Firefox
            </Radio>
            <Radio style={radioStyle} value={"Safari"}>
              Safari
            </Radio>
          </Radio.Group>
          <br />
          <Radio.Group
            onChange={e => this.props.setQuestionThree(e)}
            value={this.props.feedback.questionThree}
          >
            <h3 className='feedbackHeaders'>
              How satisfied are you with this website?
            </h3>
            <Radio style={radioStyle} value={"Very Satisfied"}>
              Very Satisfied
            </Radio>
            <Radio style={radioStyle} value={"Satisfied"}>
              Satisfied
            </Radio>
            <Radio style={radioStyle} value={"Neutral"}>
              Neutral
            </Radio>
            <Radio style={radioStyle} value={"Unsatisfied"}>
              Unsatisfied
            </Radio>
            <Radio style={radioStyle} value={"Very Unsatisfied"}>
              Very Unsatisfied
            </Radio>
          </Radio.Group>
          <br />
          <h3 className='feedbackHeaders'>
            What particular aspects of our site did you like?
          </h3>
          <Input.TextArea
            rows={5}
            onChange={e => this.props.feedbackLike(e)}
            value={this.props.feedback.feedbackLike}
          />
          <br />
          <h3 className='feedbackHeaders'>
            What particular aspects of our site did you dislike?
          </h3>
          <Input.TextArea
            rows={5}
            onChange={e => this.props.feedbackDislike(e)}
            value={this.props.feedback.feedbackDislike}
          />
          <br />
          <Radio.Group
            onChange={e => this.props.setQuestionFour(e)}
            value={this.props.feedback.questionFour}
          >
            <h3 className='feedbackHeaders'>
              Do you plan on returning to our site again?
            </h3>
            <Radio value={"Yes"}>Yes</Radio>
            <Radio value={"No"}>No</Radio>
            <Radio value={"Unsure"}>Unsure</Radio>
          </Radio.Group>
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
  setFeedbackModal (val) {
    dispatch({
      type: 'FEEDBACK_MODAL',
      payload: val
    })
  },
  setQuestionOne (e) {
    dispatch({
      type: 'QUESTION_ONE',
      payload: e.target.value
    })
  },
  setQuestionTwo (e) {
    dispatch({
      type: 'QUESTION_TWO',
      payload: e.target.value
    })
  },
  setQuestionThree (e) {
    dispatch({
      type: 'QUESTION_THREE',
      payload: e.target.value
    })
  },
  feedbackLike (e) {
    dispatch({
      type: 'FEEDBACK_LIKE',
      payload: e.target.value
    })
  },
  feedbackDislike (e) {
    dispatch({
      type: 'FEEDBACK_DISLIKE',
      payload: e.target.value
    })
  },
  setQuestionFour (e) {
    dispatch({
      type: 'QUESTION_FOUR',
      payload: e.target.value
    })
  },
  setFeedbackName (e) {
    dispatch({
      type: 'FEEDBACK_NAME',
      payload: e.target.value
    })
  },
  setFeedbackEmail (e) {
    dispatch({
      type: 'FEEDBACK_EMAIL',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback)
