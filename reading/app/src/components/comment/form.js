import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from './../../actions'

class Form extends Component {

  state = {
    name: null,
    comment: null
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

    const { addComment, postId } = this.props

    const comment = {
      id: 10,
      body: this.state.comment,
      author: this.state.name,
      parentId: postId,
    }

    addComment(comment)
  }

  render() {

    const error = this.state.nameError || this.state.commentError

    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="name" onChange={this.handleInputChange} />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea name="comment" onChange={this.handleInputChange}></textarea>
          </label>

          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)