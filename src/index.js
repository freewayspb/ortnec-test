/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { modelListReducer } from './reducers'

import './styles/styles.scss'
import { getVideo } from './actions'
import App from './App'

const store = createStore(modelListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.dispatch(getVideo())
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
