import React, { Component } from 'react'
import './posting.css'
import 'font-awesome/css/font-awesome.min.css';

import FooterDetails from './footer-details'

class Post extends Component {

  render() {
    return (
      <div className="post-wrapper">
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