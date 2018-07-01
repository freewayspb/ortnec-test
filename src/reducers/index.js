/* eslint-disable object-curly-spacing */
export { routerReducer } from 'react-router-redux'
export const initialState = {
  alerts: [],
  modelsCount: null,
  modelsList: [],
  modelListReducer: null,
  newProfiles: {},
  modelInfo: {},
  videos: [],
  currentVideo: {}
}

export const modelListReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'GET_VIDEO':
      return {...state, data: action.data, currentVideo: action.data.videos[0]}
    case 'CHANGE_VIDEO':
      return {...state, currentVideo: state.data.videos[action.id - 1]}
    default:
      return state
  }
}
