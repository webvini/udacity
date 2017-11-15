import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'

class CreatePost extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { createPost } = this.props

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
    return (
      <div className="create-post-wrapper">
        <h2>Create new post</h2>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label>
            <span>Title</span>
            <input type="text" name="title" />
          </label>

          <label>
            <span>Author</span>
            <input type="text" name="author" />
          </label>

          <label>
            <span>Category</span>
            <select>
              {this.categories()}
            </select>
          </label>

          <label>
            <span>Body</span>
            <textarea name="body"></textarea>
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
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)