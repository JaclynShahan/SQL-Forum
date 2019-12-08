import React, {Component} from 'react';
import Axios from 'axios';
import {Drawer, Input, Button} from 'antd';
import {connect} from 'react-redux'


class LoginDrawer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props.login.showDrawer)
        return(
           <Drawer
           title="Create an Account"
           placement="right"
           //closable={false}
           visible={this.props.login.showDrawer}
           onClose={() => this.props.showDrawer(false)}
           >
            <Input 
            placeholder="First Name"
            onChange={e => this.props.newFirstName(e)}
            value={this.props.addUser.firstname}
            />
            <Input 
            placeholder="Last Name"
            onChange={e => this.props.newLastName(e)}
            value={this.props.addUser.lastname}
            />
            <Input 
            placeholder="Email"
            onChange={e => this.props.newEmail(e)}
            value={this.props.addUser.email}
            />
            <Input 
            placeholder="Username"
            onChange={e => this.props.newUsername(e)}
            value={this.props.addUser.username}
            />
            <Input 
            placeholder="Password"
            onChange={e => this.props.newPassword(e)}
            value={this.props.addUser.password}
            />
            <Button>Submit</Button>
            <Button onClick={() => this.props.showDrawer(false)}>Cancel</Button>
           </Drawer>
        )
    }
}



const mapStateToProps = state => {
    console.log("this is state:", state)
    return state
}
const mapDispatchToProps = dispatch => ({
    showDrawer (val) {
        dispatch({
            type: 'SHOW_DRAWER',
            payload: val
        })
    },
    newFirstName (e) {
        dispatch({
            type: 'SET_NEW_FIRSTNAME',
            payload: e.target.value
        })
    },
    newLastName (e) {
        dispatch({
            type: 'SET_NEW_LASTNAME',
            payload: e.target.value
        })
    },
    newEmail (e) {
        dispatch({
            type: 'SET_NEW_EMAIL',
            payload: e.target.value
        })
    },
    newUsername (e) {
        dispatch({
            type: 'SET_NEW_USERNAME',
            payload: e.target.value
        })
    },
    newPassword (e) {
        dispatch({
            type: 'SET_NEW_PASSWORD',
            payload: e.target.value
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (LoginDrawer);