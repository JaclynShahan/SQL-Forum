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

 onSave = () => {
     Axios.post(`/api/createUser`, {
         firstname: this.props.addUser.firstname,
         lastname: this.props.addUser.lastname,
         email: this.props.addUser.email,
         username: this.props.addUser.username,
         password: this.props.addUser.password
     }).then(resp => {
        //  e.preventDefault()
         this.props.showDrawer(false)
         this.props.clearInputs()
         console.log("Response:", resp)
     })
 }
    render() {
        console.log(this.props.addUser.showDrawer)
        return(
            <div >
            <span className='signup'>
              <button onClick={() => this.props.showDrawer(true)}>Create Account</button>
            </span>
           <Drawer
           className="signupDrawer"
           placement="right"
           onOk={this.onSave}
           title="Create an Account"
        //    closable={false}
            visible={this.props.addUser.showDrawer}
           onClose={() => this.props.showDrawer(false)}
           destroyOnClose={true}
           >
           <span>First Name:</span>
            <Input 
            className="drawerInput"
            placeholder="First Name"
            onChange={e => this.props.newFirstName(e)}
            value={this.props.addUser.firstname}
            />
            <span>Last Name:</span>
            <Input 
            className="drawerInput"
            placeholder="Last Name"
            onChange={e => this.props.newLastName(e)}
            value={this.props.addUser.lastname}
            />
            <span>Email:</span>
            <Input
            className="drawerInput" 
            placeholder="Email"
            onChange={e => this.props.newEmail(e)}
            value={this.props.addUser.email}
            />
            <span>Create Username:</span>
            <Input 
            className="drawerInput"
            placeholder="Username"
            onChange={e => this.props.newUsername(e)}
            value={this.props.addUser.username}
            />
            <span>Create Password:</span>
            <Input 
            className="drawerInput"
            placeholder="Password"
            onChange={e => this.props.newPassword(e)}
            value={this.props.addUser.password}
            />
            <Button className="drawerButton">Submit</Button>
            <Button className="cancelButton" onClick={() => this.props.showDrawer(false)}>Cancel</Button>
           </Drawer>
           </div>
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
    },
    clearInputs () {
        dispatch({
            type: "CLEAR_INPUTS",
            payload: ""
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (LoginDrawer);