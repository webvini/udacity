import React, { Component } from 'react'
import './posting.css'
import 'font-awesome/css/font-awesome.min.css';

class Post extends Component {

  render() {

    const { post } = this.props
    console.log(post)

    return (
      <div className="post-wrapper">
        <div className="post-buttons-control">
          <a className="post-edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
          <a className="post-delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
        </div>

        <div className="post-head">
          <i className="fa fa-picture-o" aria-hidden="true"></i>

          <span className="post-category">{post.category}</span>
        </div>
        <div className="post-inner">
          <h3 className="post-title">{post.title}</h3>
          <p>{post.body}</p>
        </div>

        <div className="footer-details">
          <ul>
            <li><i className="fa fa-user" aria-hidden="true"></i> {post.author}</li>
            <li><i className="fa fa-calendar" aria-hidden="true"></i> 06/06/2017</li>
            <li><i className="fa fa-comments" aria-hidden="true"></i> {post.commentCount}</li>
          </ul>
          <ul>
            <li><i className="fa fa-thumbs-down" aria-hidden="true"></i> (8)</li>
            <li><i className="fa fa-thumbs-up" aria-hidden="true"></i> (12)</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Post