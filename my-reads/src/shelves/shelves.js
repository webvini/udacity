import React, { Component } from 'react';
import Book from './book.js';

class Listing extends Component {
  render() {
    return(
      <div className="shelves-wrapper">
        <div className="row">
          <div className="inner">
            <h2>{this.props.shelf}</h2>
            {this.props.books.map((res) => (
              <div key={res.id}>{res.title}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Listing;