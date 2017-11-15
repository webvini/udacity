import React, { Component } from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { fetchCategories, addPost } from '../../actions'

class CreatePost extends Component {

  state = {
    id: '',
    title: '',
    author: '',
    category: '',
    body: ''
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  handleInputChange = (el) => {
    const value = el.target.value
    const name = el.target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { createPost, addPost } = this.props
    const post = {
      id: (this.state.edit) ? this.state.id : uuid().split("-").join(""),
      timestamp: Date.now(),
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
      body: this.state.body
    }

    addPost(post)
    createPost(false)
  }

  categories = () => {
    if( this.props.categories.allCategories ) {
      const { categories } = this.props.categories.allCategories

      return (
        categories.map(category => (
          <option key={category.name} defaultValue={category.name}>{category.name}</option>
        ))
      )
    }
  }

  render() {
    return (
      <div className="create-post-wrapper">
        <h2>Create new post</h2>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label>
            <span>Title</span>
            <input type="text" name="title" onChange={this.handleInputChange} />
          </label>

          <label>
            <span>Author</span>
            <input type="text" name="author" onChange={this.handleInputChange} />
          </label>

          <label>
            <span>Category</span>
            <select name="category" onChange={this.handleInputChange}>
              {this.categories()}
            </select>
          </label>

          <label>
            <span>Body</span>
            <textarea name="body" onChange={this.handleInputChange}></textarea>
          </label>

          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(addPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)