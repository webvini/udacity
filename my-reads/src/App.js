import React, { Component } from 'react';
import './App.css';

import Content from './content/content.js';

class App extends Component {
  render() {
    return (
      <div className="my-read-wrapper">
        <div className="header-wrapper">
          <h1>My Reads</h1>
        </div>

        <Content />
      </div>
    );
  }
}

export default App;
