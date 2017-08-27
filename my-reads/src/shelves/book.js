import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  render() {
    return(
      <div className="book-wrapper">
        <div className="my-book">{this.props.book.title}</div>
      </div>
    )
  }
}

export default Book;