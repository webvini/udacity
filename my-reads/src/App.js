import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import './App.css';

import Shelves from './shelves/shelves.js';
import Search from './search/search.js';

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

  renderSearch = book => {
    return <Search key={book.id} myBook={book} />
  }

  render() {
    let shelves = [
      {flag: "currentlyReading", title: "Currently Reading"},
      {flag: "wantToRead", title: "Want"},
      {flag: "read", title: "Read"}
    ];

    return (
      <Router>
        <div className="my-read-wrapper">
          <div className="header-wrapper">
            <h1>My Reads</h1>
          </div>

          <Route exact path='/' render={() => (
            <div className="content-wrapper">
              {shelves.map(this.renderShelf)}

              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )}/>

          <Route path='/search' render={() => (
            <div className="content-wrapper">
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
              </div>
              
              <div className="listing">
                {this.state.books.map(this.renderSearch)}
              </div>
            </div>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
