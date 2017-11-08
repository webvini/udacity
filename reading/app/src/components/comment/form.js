import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment } from './../../actions'

class Form extends Component {

  state = {
    name: '',
    comment: ''
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
      id: uuid().split("-").join(""),
      timestamp: Date.now(),
      body: this.state.comment,
      author: this.state.name,
      parentId: postId,
    }

    addComment(comment)
    this.onEmpty()
  }

  onEmpty = () => {
    this.setState({
      name: '',
      comment: ''
    })
  }

  render() {

    const error = this.state.nameError || this.state.commentError

    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea name="comment" onChange={this.handleInputChange} value={this.state.comment}></textarea>
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