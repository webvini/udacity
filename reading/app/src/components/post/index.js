import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as moment from "moment";
import { setSelected } from './../../actions'

import './style.css'
import 'font-awesome/css/font-awesome.min.css';

class Post extends Component {

  componentDidMount() {
    const { setSelected } = this.props
    setSelected('post', this.getLocation())
  }

  onDetails(post) {
    const { setSelected } = this.props
    setSelected('post', post)
    this.goTo(post)
  }

  getLocation = () => {
    const { location } = this.props.history
    return location.pathname.split("/")[2]
  }

  goTo = (post) => {
    this.props.history.push(`/${post.category}/${post.id}`)
  }

  render() {

    const { post, details } = this.props

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
            <li><i className="fa fa-calendar" aria-hidden="true"></i> {moment(post.timestamp).fromNow()}</li>
            <li><i className="fa fa-comments" aria-hidden="true"></i> {post.commentCount}</li>
          </ul>
          <ul>
            <li><i className="fa fa-thumbs-down" aria-hidden="true"></i> (8)</li>
            <li><i className="fa fa-thumbs-up" aria-hidden="true"></i> (12)</li>
          </ul>
        </div>

        <button className="btn btn-details" onClick={() => this.onDetails(post)}><i className="fa fa-plus" aria-hidden="true"></i> Details</button>

        { details &&
          <h1>Details</h1>
        }
      </div>
    )
  }

}

function mapStateToProps({ selected }) {
  return {
    selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: (target, object) => dispatch(setSelected(target, object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);