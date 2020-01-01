import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Home.css'
import { Button } from 'antd'
import About from './About'
import Contact from './Contact'
import Feedback from './Feedback'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }
  // Can make this screen an "about" page explaining what the site is
  render () {
    return (
      <div className='bodyImage'>
        <header className='headerFont'>**~WELCOME~**</header>

        <section className='buttonSection'>
          <About />
        <Contact />
         <Feedback /> 
         
        </section>
        <footer>
          {' '}
          <h1 className='quote'>
            "Everyone is going to see things differently - and that's the way it
            should be."
          </h1>
          <h5 className='quoteEnd'>-Bob Ross</h5>
        </footer>
      </div>
    )
  }
}

export default Home
