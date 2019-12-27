import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Home.css'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }
//Can make this screen an "about" page explaining what the site is
  render () {
    return (
  
        <div className="bodyImage">
            <header className="headerFont">**~WELCOME~**</header>
        </div>
       
     
    )
  }
}

export default Home
