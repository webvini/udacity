import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI.js';

import Book from './../shelves/book.js';
import './search.css';

class Search extends Component {

  state = {
    query: '',
    allBooks: []
  }

  componentDidMount() {
    // this.props.myBooks.map((book) => (
    //   this.setState({
    //     allBook: book.filter((book) => book.id !== this.state.allBook.id)
    //   })
    // ))
  }

  onSearch = (el) => {
    let value = el.target.value.trim();
    (value) ? this.getAllBooks(value) : false;
  }

  // getAllBooks = (query) => {
  //   BooksAPI.search(query, 20).then((books) => {
  //     if(!books.error) {
  //       this.setState({
  //         allBooks: books.filter((myBook) => myBook.id !== books.id)
  //       });
  //     }
  //   })
  // }

  render() {
    return(
      <Book key={this.props.myBook.id} book={this.props.myBook} />
    )
  }
}

export default Search;