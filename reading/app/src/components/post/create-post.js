import React, { Component } from 'react'

class CreatePost extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    const { createPost } = this.props

    createPost(false)
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
              <option>React</option>
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

export default CreatePost