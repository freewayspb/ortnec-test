import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  initialState,
  GET_ITEMS_SUCCESS,
  HAS_ERROR,
  IS_LOADING,
  CHANGE_VIDEO,
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

export function items(state = [], action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return action.items;

    default:
      return state;
  }
}

const closeAlert = (state = {alerts: []}, action) => {
  switch (action.type) {
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
  items,
  isLoading,
  hasError,
  closeAlert,
  routing: routerReducer
})

export default reducers
