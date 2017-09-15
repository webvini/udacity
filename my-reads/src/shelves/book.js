import React, { Component } from 'react';
import * as BooksAPI from './../BooksAPI.js';
import './book.css';

class Book extends Component {
  
  shelfChanger = (book) => (e) => {
    let shelf = e.target.value

    BooksAPI.update(book, shelf).then(() => {
      this.props.updatedBook(book, shelf)
    });
  }

  getShelfFlag = (shelf) => {
    return (!shelf) ? "none" : shelf;
  }

  render() {
    return(
      <li className="book-wrapper">
        <img src={this.props.book.imageLinks.thumbnail} alt={this.props.book.title} />
        <h3 className="book-title">{this.props.book.title}</h3>
        
        <div className="book-shelf-changer">
          <select defaultValue={this.getShelfFlag(this.props.book.shelf)} onChange={this.shelfChanger(this.props.book)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </li>
    )
  }
}

export default Book;