import React, { Component } from 'react'
import './App.css'

import Post from './posting/post-wrapper'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header className="main-header">
          <h1>Reading</h1>
        </header>
        
        <section className="main-container">
          <div className="container-inner">
            
            <Post />
            <Post />
            <Post />

          </div>
        </section>
    </div>
    );
  }
}

export default App;
