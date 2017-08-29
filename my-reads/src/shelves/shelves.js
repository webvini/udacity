import React, { Component } from 'react';
import Book from './book.js';

class Shelves extends Component {
  render() {
    return(
      <div className="shelves-wrapper">
        <div className="shelves-inner">
          <h2>{this.props.shelf}</h2>
          
          <div className="listing">
            {this.props.books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Shelves;