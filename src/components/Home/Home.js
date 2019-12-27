import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Home.css'
import {Button} from 'antd'

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
            <section className="buttonSection">
                <button className="buttonSize aboutButton">Learn More</button>
                <button className="buttonSize">Contact Us</button>
            </section>
        </div>
       
     
    )
  }
}

export default Home
