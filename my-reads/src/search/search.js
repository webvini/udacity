import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI.js';

import Book from './../shelves/book.js';
import './search.css';

class Search extends Component {

  state = {
    query: '',
    books: []
  }

  onSearch = (el) => {
    let value = el.target.value.trim();
    (value) ? this.getBooks(value) : false;
  }

  getBooks = (query) => {
    BooksAPI.search(query, 20).then((books) => {
      if(!books.error) {
        this.setState({ books });
      }
    })
  }

  render() {
    return(
      <div className="search-wrapper">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onSearch}
            />
          </div>
        </div>
        
        <div className="listing">
          {this.state.books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    )
  }
}

export default Search;