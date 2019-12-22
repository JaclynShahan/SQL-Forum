import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';
import './Search.css'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchStr = ""
        }
    }
    
    onSearch = () => {
        if (this.state.searchStr.length > 0) {
          const filterPost = this.props.post.selectedPost.filter(post => {
            if (
              art.title
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase()) ||
              art.description
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase()) ||
              art.size.toLowerCase().includes(this.state.searchStr.toLowerCase()) ||
              art.price.toLowerCase().includes(this.state.searchStr.toLowerCase())
            ) {
              return true
            } else {
              return false
            }
          })
          console.log('Filtered Post', filterPost)
          this.props.setSearchPost(filterPost)
        } else {
          this.props.setSearchPost([])
        }
      }

    render() {
        const {searchStr} = this.state
        return (
            <div className="SearchParent">
            <div className="SearchContent">
            <Input.Search
            placeholder="Search Posts..."
            value={searchStr}
            onChange={e => this.setState({searchStr: e.target.value})}
            onSearch={() => this.onSearch()}
            />
            </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
   console.log("state:", state)
    return state
}

const mapDispatchToProps = dispatch = ({
    setSearchPost (arr) {
        dispatch({
            type: 'SEARCH_POSTS',
            payload: arr
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search);