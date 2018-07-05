import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  initialState,
  GET_ITEMS_SUCCESS,
  HAS_ERROR,
  IS_LOADING,
  CHANGE_VIDEO,
  ALERT,
  CLOSE_ALERT
} from '../actions'

export function hasError (state = false, action) {
  switch (action.type) {
    case HAS_ERROR:
      return action.hasError;
    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items,
        currentVideo: action.currentVideo
      }
    case CHANGE_VIDEO:
      return {
        ...state,
        currentVideo: action.currentVideo
      }
    default:
      return state;
  }
}

const alertsReducer = (state = {alerts: []}, action) => {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            id: Date.now(),
            buttonText: action.buttonText,
            buttonUrl: action.buttonUrl,
            text: action.text,
            timeout: action.timeout,
          }
        ]
      }
    case CLOSE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.id),
      }
    default:
      return state
  }
}

// Combine Reducers
const reducers = combineReducers({
  itemsReducer,
  isLoading,
  hasError,
  alertsReducer,
  routing: routerReducer
})

export default reducers
