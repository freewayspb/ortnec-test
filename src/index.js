/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import './index.css'
import store, { history } from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <App />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
