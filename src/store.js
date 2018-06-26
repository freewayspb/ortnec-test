import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import modelListReducer, { initialState } from './reducers'

export const history = createHistory()

let middleware = [thunk, routerMiddleware(history)]

const enhancers = []

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  const logger = createLogger({
    collapsed: true
  })
  middleware = [...middleware, logger]
}
/* eslint-enable */

const store = createStore(
  combineReducers({
    state: modelListReducer,
    routing: routerReducer
  }),
  {
    state: initialState, // fetch from last session here
    routing: {}
  },
  compose(applyMiddleware(...middleware), ...enhancers)
)

export default store
