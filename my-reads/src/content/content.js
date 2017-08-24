import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  render() {
    return(
      <div className="content-wrapper">
        <div className="row">
          <div className="inner">
            <h2>Currently reading</h2>
          </div>
        </div>

        <div className="row">
          <div className="inner">
            <h2>Want</h2>
          </div>
        </div>

        <div className="row">
          <div className="inner">
            <h2>Read</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;