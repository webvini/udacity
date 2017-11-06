import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from './../../actions'

class Form extends Component {

  state = {
    nameError: true,
    commentError: true
  }

  handleName = (el) => {
    let value = el.target.value

    this.setState({
      nameError: (value.length <= 0) ? true : false
    })
  }

  handleComment = (el) => {
    let value = el.target.value

    this.setState({
      commentError: (value.length <= 0) ? true : false
    })
  }

  createComment = (e) => {
    e.preventDefault()
    
    const { addComment } = this.props

    const comment = {
      id: 33,
      timestamp: "1469479767190",
      body: 'Lorem ipsum dolar bacon',
      author: 'PORRAAAAAA',
      parentId: '8xf0y6ziyjabvozdd253nd',
    }

    addComment(comment)
  }

  render() {

    const error = this.state.nameError || this.state.commentError

    return (
      <div className="form-wrapper">
        <form>
          <label>
            <span>Name</span>
            <input type="text" onChange={this.handleName} />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea onChange={this.handleComment}></textarea>
          </label>

          <button className="btn" disabled={error} onClick={this.createComment}>Send</button>
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