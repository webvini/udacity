import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI.js';

import Book from './../shelves/book.js';
import './search.css';

class Search extends Component {

  state = {
    allBooks: [],
    loading: false
  }

  onSearch = (el) => {
    let value = el.target.value.trim();
    (value) ? this.getAllBooks(value) : this.setState({ allBooks: [] });
  }

  getAllBooks = (query) => {
    BooksAPI.search(query, 20)
      .then(this.setState({ loading: true }))
      .then((books) => {
        if(!books.error) {
          let allBooks = books.map(book => {
            let foundMyBook = this.props.books.filter(myBook => book.id === myBook.id)[0]
            if(foundMyBook){
              book.shelf = foundMyBook.shelf
            }
            return book
          })

          this.setState({
            allBooks,
            loading: false
          })
        }
      })
  }

  updatedBook = () => {
    this.props.updatedBook()
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

        <ol className={`${this.state.loading ? "loading" : ""} listing`}>
          <li className="loader"></li>
          {this.state.allBooks.map((book) => (
            <Book key={book.id} book={book} updatedBook={this.props.updatedBook} />
          ))}
        </ol>
      </div>
    )
  }
}

export default Search;