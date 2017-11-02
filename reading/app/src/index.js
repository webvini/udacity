import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={ App } />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();