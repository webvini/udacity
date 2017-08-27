import React, { Component } from 'react';

class Book extends Component {
  render() {
    return(
      <div className="book-wrapper">
        {this.props.books.map((res) => (
          <div>{res.title}</div>
        ))}
      </div>
    )
  }
}

export default Book;