import React, { Component } from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { fetchCategories, addPost, editPost } from '../../actions'

class CreatePost extends Component {

  state = {
    edit: false,
    id: '',
    title: '',
    author: '',
    category: '',
    body: ''
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  componentWillReceiveProps(nextProps) {
    let { post } = nextProps

    this.setState({
      edit: (post) ? true : false,
      id: (post) ? post.id : '',
      timestamp: Date.now(),
      title: (post) ? post.title : '',
      author: (post) ? post.author : '',
      category: (post) ? post.category : '',
      body: (post) ? post.body : ''
    })
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

    const { createPost, addPost, editPost } = this.props
    const newPost = {
      id: (this.state.edit) ? this.state.id : uuid().split("-").join(""),
      timestamp: Date.now(),
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
      body: this.state.body
    }

    if(this.state.id) {
      editPost(newPost)
    }else{
      addPost(newPost)
    }

    createPost(false)
  }

  categories = () => {
    if( this.props.categories.allCategories ) {
      const { categories } = this.props.categories.allCategories

      return (
        categories.map(category => (
          <option key={category.name} value={category.name}>{category.name}</option>
        ))
      )
    }
  }

  render() {
    const { post } = this.props

    return (
      <div className="create-post-wrapper">
        <h2>Create new post</h2>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label>
            <span>Title</span>
            <input type="text" name="title" onChange={this.handleInputChange} value={this.state.title} />
          </label>

          <label>
            <span>Author</span>
            <input type="text" name="author" onChange={this.handleInputChange} value={this.state.author} />
          </label>

          <label>
            <span>Category</span>
            <select name="category" defaultValue={(post) ? post.category : this.state.category } onChange={this.handleInputChange}>
              {this.categories()}
            </select>
          </label>

          <label>
            <span>Body</span>
            <textarea name="body" onChange={this.handleInputChange} value={this.state.body}></textarea>
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
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)