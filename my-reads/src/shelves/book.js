import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  render() {
    return(
      <div className="book-wrapper">
        <img src={this.props.book.imageLinks.thumbnail} alt={this.props.book.title} />
        <h3 className="book-title">{this.props.book.title}</h3>
        
        <div className="book-shelf-changer">
          <select defaultValue={this.props.book.shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Book;