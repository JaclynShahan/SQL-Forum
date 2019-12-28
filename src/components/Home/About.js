import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import './Home.css'

class About extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    console.log(this.props.home.setAboutModal)
    return (
      <div>
        <button
          onClick={() => this.props.setAboutModal(true)}
          className='buttonSize aboutButton'
        >
          Learn More
        </button>
        <Modal
          onOk={() => this.props.setAboutModal(false)}
          okText='Ok'
          title='About Us'
          onCancel={() => this.props.setAboutModal(false)}
          visible={this.props.home.showAboutModal}
        >
          <section>
            All you need to paint is a few tools, a little instruction, and a
            vision in your mind. And that's when it becomes fun - you don't have
            to spend your time thinking about what's happening - you just let it
            happen. By now you should be quite happy about what's happening
            here. That's what makes life fun. That you can make these decisions.
            That you can create the world that you want.{' '}
          </section>
          <br />
          <section>
            If we're going to have animals around we all have to be concerned
            about them and take care of them. You can do it. Here's something
            that's fun.
          </section>
          <br />
          <section>
            I was blessed with a very steady hand; and it comes in very handy
            when you're doing these little delicate things. Work on one thing at
            a time. Don't get carried away - we have plenty of time. With
            practice comes confidence.
          </section>
          <br />
          <section>
            Just pretend you are a whisper floating across a mountain. Mountains
            are so simple, they're hard. The light is your friend. Preserve it.
            Now, we're going to fluff this cloud. Trees live in your fan brush,
            but you have to scare them out. Just think about these things in
            your mind - then bring them into your world.
          </section>
          <br />
          <section>
            There are no limits in this world. In your imagination you can go
            anywhere you want. I started painting as a hobby when I was little.
            I didn't know I had any talent. I believe talent is just a pursued
            interest. Anybody can do what I do. Go out on a limb - that's where
            the fruit is. Anyone can paint.
          </section>
          <br />
          <section>
            I really believe that if you practice enough you could paint the
            'Mona Lisa' with a two-inch brush. There's nothing wrong with having
            a tree as a friend. That's a crooked tree. We'll send him to
            Washington. See there how easy that is. Maybe he has a little friend
            that lives right over here. I guess I'm a little weird. I like to
            talk to trees and animals. That's okay though; I have more fun than
            most people.
          </section>
          <br />
          <section>
            You're meant to have fun in life. This painting comes right out of
            your heart. Every highlight needs it's own personal shadow. Very
            easy to work these to death. Maybe there was an old trapper that
            lived out here and maybe one day he went to check his beaver traps,
            and maybe he fell into the river and drowned.
          </section>
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
  setAboutModal (val) {
    dispatch({
      type: 'ABOUT_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
