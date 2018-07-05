import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default function configureStore (initialState) {
  let middleware = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger()
    middleware = [...middleware, logger]
  }
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
