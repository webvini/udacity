import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './actions'
import './App.css'

import Post from './posting/post-wrapper'

class App extends Component {

  state = {
    post: null
  }

  render() {

    console.log(this.props)

    return (
      <div className="app-wrapper">
        <header className="main-header">
          <h1>Reading</h1>
        </header>
        
        <section className="main-container">
          <div className="container-inner">
            
            <Post />
            <Post />
            <Post />

          </div>
        </section>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = dispatch => ({
  addPost: (data) => dispatch(addPost(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
