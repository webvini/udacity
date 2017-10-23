import React, { Component } from 'react'

class FooterDetails extends Component {
  render() {
    return (
      <div className="footer-details">
        <ul>
          <li><i className="fa fa-user" aria-hidden="true"></i> Vinicius Silva</li>
          <li><i className="fa fa-calendar" aria-hidden="true"></i> 06/06/2017</li>
          <li><i className="fa fa-comments" aria-hidden="true"></i> 8</li>
        </ul>
        <ul>
          <li><i className="fa fa-thumbs-down" aria-hidden="true"></i> (8)</li>
          <li><i className="fa fa-thumbs-up" aria-hidden="true"></i> (12)</li>
        </ul>
      </div>
    )
  }
}

export default FooterDetails