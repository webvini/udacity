import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI.js';
import './App.css';

import Shelves from './shelves/shelves.js';

class App extends Component {
  
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  updatedBook = () => {
    this.getAllBooks();
  }

  renderShelf = shelf => {
    return <Shelves key={shelf.flag} shelf={shelf.title} books={this.state.books.filter(book => book.shelf === shelf.flag)} updatedBook={this.updatedBook} />
  }

  render() {
    let shelves = [
      {flag: "currentlyReading", title: "Currently Reading"},
      {flag: "wantToRead", title: "Want"},
      {flag: "read", title: "Read"}
    ];

    return (
      <div className="my-read-wrapper">
        <div className="header-wrapper">
          <h1>My Reads</h1>
        </div>

        <div className="content-wrapper">
          {shelves.map(this.renderShelf)}
        </div>
      </div>
    );
  }
}

export default App;
