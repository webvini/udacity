import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment, editComment } from './../../actions'

class Form extends Component {

  state = {
    edit: false,
    id: '',
    author: '',
    body: ''
  }

  componentWillReceiveProps(nextProps) {
    let { selected } = nextProps.comments

    if( selected ) {
      selected = (this.state.id === selected.id) ? undefined : selected
    }

    this.setState({
      edit: (selected) ? true : false,
      id: (selected) ? selected.id : '',
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

    const { addComment, editComment, postId } = this.props

    const comment = {
      id: (this.state.edit) ? this.state.id : uuid().split("-").join(""),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: postId,
    }

    if( this.state.edit ) {
      editComment(comment)
    }else{
      addComment(comment)
    }
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
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (id) => dispatch(editComment(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)