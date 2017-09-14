import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import './App.css';

import Shelves from './shelves/shelves.js';
import Search from './search/search.js';

class App extends Component {
  
  state = {
    books: [],
    loading: false
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(this.setState({ loading: true }))
      .then((books) => {
        this.setState({
          books,
          loading: false
        });
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
      <Router>
        <div className="my-read-wrapper">
          <div className="header-wrapper">
            <h1>My Reads</h1>
          </div>

          <Route exact path='/' render={() => (
            <div className={`${this.state.loading ? "loading" : ""} content-wrapper`}>
              {shelves.map(this.renderShelf)}

              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )}/>

          <Route path='/search' render={() => (
            <div className="content-wrapper">
              <Search books={this.state.books} updatedBook={this.updatedBook} />
            </div>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
