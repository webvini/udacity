import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment } from './../../actions'

class Form extends Component {

  state = {
    id: '',
    author: '',
    body: ''
  }

  componentWillReceiveProps(nextProps) {
    const { selected } = nextProps.comments

    this.setState({
      author: (selected) ? selected.author : '',
      body: (selected) ? selected.body : ''
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

    const { addComment, postId } = this.props

    const comment = {
      id: this.state.id || uuid().split("-").join(""),
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
      author: '',
      body: ''
    })
  }

  render() {

    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="author" onChange={this.handleInputChange} value={this.state.author} />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea name="body" onChange={this.handleInputChange} value={this.state.body}></textarea>
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
    addComment: (comment) => dispatch(addComment(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)