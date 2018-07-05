import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.scss'



const browserHistory = createHistory()

export const history = syncHistoryWithStore(browserHistory, store())

ReactDOM.render(
  <Provider store={store()}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
