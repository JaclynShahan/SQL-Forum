import React, {Component} from 'react'
import Axios from 'axios';
import {connect} from 'react-redux';
import {Modal, Button, Divider} from 'antd';

class Feedback extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    sendFeedback = () => {

    }
    render() {
        return(
            <div>
                 <button onClick={() => this.props.setFeedbackModal(true)} className='buttonSize'>Leave Feedback</button>
                <Modal
                onOk={this.sendFeedback}
                okText="Send"
                onCancel={() => this.props.setFeedbackModal(false)}
                visible={this.props.home.showFeedbackModal}
                >
                <h1>Give us your Feedback</h1>
                <Divider />
                <header>Put some useful text here Jaclyn</header>
                

                </Modal>
                
               
            </div>
        )
    }
 }

 const mapStateToProps = state => {
     console.log("State:", state)
     return state
 }
 const mapDispatchToProps = dispatch => ({
     setFeedbackModal (val) {
         dispatch ({
            type: 'FEEDBACK_MODAL',
            payload: val
         })
     }
 })
 export default connect(mapStateToProps, mapDispatchToProps)(Feedback);