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

  post = (selectedPost) => {
    if( this.props.posts.allPosts ) {
      const { allPosts } = this.props.posts
      const { history } = this.props
      const current = (typeof selectedPost === "object") ? selectedPost.id : selectedPost

      return (
        allPosts
          .filter(post => post.id === current)
          .map(post => (
            <Post key={post.id} post={post} history={history} details={true} />
        ))
      )
    }
  }

  posts = () => {
    if( this.props.posts.allPosts ) {
      const { allPosts } = this.props.posts
      const { selected, history } = this.props

      return (
        allPosts
          .filter(post => post.category === selected.category || selected.category === undefined || selected.category === 'all')
          .map(post => (
            <Post key={post.id} post={post} history={history} />
        ))
      )
    }
  }

  categories = () => {
    if( this.props.categories.allCategories ) {
      const { allCategories } = this.props.categories
      const { history } = this.props

      return (
        <Category categories={allCategories} history={history} />
      )
    }
  }

  render() {

    const { selected, history } = this.props

    return (
      <div className="app-wrapper">
        <header className="main-header">
          <h1><a href="../">Reading</a></h1>
        </header>
        
        <section className="main-container">
          <div className="container-inner">
            
            <div className="view-categories">
              { !selected.post &&
                this.categories()
              }
            </div>

            <div className="view-posts">
              { !selected.post &&
                this.posts()
              }
            </div>

            <div className="view-details">
              { selected.post &&
                this.post(selected.post)
              }
            </div>

          </div>
        </section>
    </div>
    )
  }
}

function mapStateToProps({ posts, categories, selected }) {
  return {
    posts,
    categories,
    selected
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
