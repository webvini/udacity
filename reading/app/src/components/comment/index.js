import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from './../../actions'
import Form from './form'

import './style.css'
import 'font-awesome/css/font-awesome.min.css';

class Comment extends Component {
  
  componentDidMount() {
    const { postId, fetchComments } = this.props
    fetchComments(postId)
  }

  comment = () => {
    if( this.props.comments.allComments ) {
      const { allComments } = this.props.comments

      console.log(allComments)

      return (
        allComments.map(comment => (
          <li key={comment.id} className="comment">
            <div className="comment-head"><h5><i className="fa fa-user" aria-hidden="true"></i> {comment.author}</h5></div>
            <div className="comment-content">{comment.body}</div>
            <div className="comment-details">
              <button className="post-edit btn-icon" title="Comment edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
              <button className="post-delete btn-icon" title="Comment delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </li>
        ))
      )
    }
  }

  render() {
    return (
      <div className="comment-wrapper">
        <h2>Comments</h2>

        <ul className="comment-container">
          { this.comment() }
        </ul>

        <div className="view-form">
          <Form />
        </div>
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
    fetchComments: (id) => dispatch(fetchComments(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)