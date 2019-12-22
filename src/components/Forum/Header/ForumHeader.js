import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon, Avatar, Popover, Button} from 'antd';
import './Header.css'

class ForumHeader extends Component {
    constructor() {
        super ()
        this.state = {

        }
    }

    render() {
        let styles = {
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px'
          }
          let content = (
            <Button
              onClick={() => this.props.verifyUser({})}
              className='Compose_button'
            >
              Sign Out
            </Button>
          )
        return(
            
      <section className='HeaderParent'>
        <section className='HeaderContent'>
          <div className='HeaderCompanyInfo'>
            <Icon type='robot' style={styles} />
            <span>Dev Talk</span>
          </div>

          <div className='HeaderRight'>
           

            <div className='HeaderProfile'>
              <Popover className='sign_out' content={content}>
                <Avatar src='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' />
              </Popover>
            </div>
          </div>
        </section>
      </section>
            
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  verifyUser (user) {
    dispatch({
      type: 'SET_USER',
      payload: user
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumHeader)