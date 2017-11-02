import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from './actions'
import './App.css'

import Post from './components/post/index'
import Category from './components/category/index'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
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

  categories = () => {
    if( this.props.categories.allCategories ) {
      const { allCategories } = this.props.categories

      return (
        <Category categories={allCategories} />
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
            
            <div className="view-category">
              { this.categories() }
            </div>

            <div className="view-posts">
              { this.posts() }
            </div>

            <div className="view-details">
              
            </div>

          </div>
        </section>
    </div>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
