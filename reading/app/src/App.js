import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receivePosts, fetchPosts } from './actions'
import './App.css'

import Post from './components/post/index'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  posts = () => {
    if( this.props.posts.allPosts ) {

      const { allPosts } = this.props.posts

      return (
        allPosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      )
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <header className="main-header">
          <h1>Reading</h1>
        </header>
        
        <section className="main-container">
          <div className="container-inner">
            
            { this.posts() }

          </div>
        </section>
    </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
