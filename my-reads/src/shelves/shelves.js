import React, { Component } from 'react';
import Book from './book.js';

class Shelves extends Component {
  render() {
    let books = this.props.books

    return(
      <div className="shelves-wrapper">
        <div className="shelves-inner">
          <h2>{this.props.shelf}</h2>
          
          {!books.length && (
            <p className="text-warning">You have no book on this shelf</p>
          )}

          <ol className="listing">
            {books.map((book) => (
              <Book key={book.id} book={book} updatedBook={this.props.updatedBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelves;