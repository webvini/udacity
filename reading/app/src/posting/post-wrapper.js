import React, { Component } from 'react'
import './posting.css'
import 'font-awesome/css/font-awesome.min.css';

import FooterDetails from './footer-details'

class Post extends Component {

  render() {
    return (
      <div className="post-wrapper">
        <div className="post-buttons-control">
          <a className="post-edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
          <a className="post-delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
        </div>

        <div className="post-head">
          <i className="fa fa-picture-o" aria-hidden="true"></i>

          <span className="post-category">Udacity</span>
        </div>
        <div className="post-inner">
          <h3 className="post-title">Titulo do post</h3>
          <p>Texto do post</p>
        </div>

        <FooterDetails />
      </div>
    )
  }

}

export default Post