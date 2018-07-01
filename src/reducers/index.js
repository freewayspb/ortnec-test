import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { initialState } from '../actions'

export const modelListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEO':
      return {
        ...state,
        data: action.data,
        currentVideo: action.data.videos[0]
      }
    case 'CHANGE_VIDEO':
      return {
        ...state,
        currentVideo: state.data.videos[action.id - 1]
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
  routing: routerReducer
})

export default reducers
