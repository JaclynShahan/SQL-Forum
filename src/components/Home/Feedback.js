import React, {Component} from 'react'
import Axios from 'axios';
import {connect} from 'react-redux';
import {Drawer, Button} from 'antd';

class Feedback extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
                
                <Drawer>
                    </Drawer>
            </div>
        )
    }
 }

 constMapStateToProps = state => {
     console.log("State:", state)
     return state
 }
 const mapDispatchToProps = dispatch => ({
     setFeedbackDrawer (val) {
         dispatch ({
            type: 'FEEDBACK_DRAWER',
            payload: val
         })
     }
 })
 export default connect(mapStateToProps, mapDispatchToProps)(Feedback);