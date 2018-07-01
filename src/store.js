import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const browserHistory = createHistory()

export const history = syncHistoryWithStore(browserHistory, store)

export default store
