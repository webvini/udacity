import React, { Component } from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store'

import reducer from './reducers'
import Home from './components/home/index'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App