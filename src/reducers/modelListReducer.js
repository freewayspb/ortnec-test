/* eslint-disable object-curly-spacing */
import { initialState } from './index'

export default function modelListReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEO':
      return {...state, data: action.data, currentVideo: action.data.videos[0]}
    case 'CHANGE_VIDEO':
      return {...state, currentVideo: state.data.videos[action.id - 1]}
    default:
      return state
  }
}
