import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, deleteComment, commentSelected, downVoteComment, upVoteComment } from './../../actions'
import Form from './form'

import './style.css'
import 'font-awesome/css/font-awesome.min.css';

class Comment extends Component {

  componentDidMount() {
    const { postId, fetchComments } = this.props
    fetchComments(postId)
  }

  delete = (id) => {
    const { deleteComment } = this.props
    deleteComment(id)
  }

  edit = (comment) => {
    const { commentSelected } = this.props

    commentSelected(comment)
  }

  downVote = (id) => {
    const { downVoteComment } = this.props

    downVoteComment(id)
  }

  upVote = (id) => {
    const { upVoteComment } = this.props

    upVoteComment(id)
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
              <button className="post-edit btn-icon" title="Comment edit" onClick={() => this.edit(comment)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
              <button className="post-delete btn-icon" title="Comment delete" onClick={() => this.delete(comment.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>

              <div className="right">
                <span>(200)</span>
                <button className="btn-icon" title="Down Vote" onClick={() => this.downVote(comment.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                <button className="btn-icon" title="Up Vote" onClick={() => this.upVote(comment.id)}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
              </div>
            </div>
          </li>
        ))
      )
    }
  }

  render() {
    const { postId } = this.props

    return (
      <div className="comment-wrapper">
        <h2>Comments</h2>

        <ul className="comment-container">
          { this.comment() }
        </ul>

        <div className="view-form">
          <Form postId={postId} />
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
    deleteComment: (id) => dispatch(deleteComment(id)),
    commentSelected: (comment) => dispatch(commentSelected(comment)),
    downVoteComment: (id) => dispatch(downVoteComment(id)),
    upVoteComment: (id) => dispatch(upVoteComment(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)