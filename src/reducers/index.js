import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  initialState,
  SET_VIDEO_LIST,
  CHANGE_VIDEO,
  CLOSE_ALERT
} from '../actions'

export const modelListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_LIST:
      return {
        ...state,
        models: action.payload.data,
        currentVideo: action.payload.data.videos[0]
      }
    case CHANGE_VIDEO:
      return {
        ...state,
        currentVideo: state.models.videos[action.id]
      }
    default:
      return state
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

// The Widget Reducer
const widgetReducer = function (state = {}, action) {
  return state
}

// Combine Reducers
const reducers = combineReducers({
  modelList: modelListReducer,
  widgetState: widgetReducer,
  closeAlert,
  routing: routerReducer
})

export default reducers
